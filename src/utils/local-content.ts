import * as fs from 'fs';
import path from 'path';
import { globSync } from 'glob';
import frontmatter from 'front-matter';
import { allModels } from '../../sources/local/models';
import { Config } from '../../sources/local/models/Config';
import { getPageUrl, setEnvironmentVariables } from './page-utils';

// TODO use types?

const pagesDir = 'content/pages';
const dataDir = 'content/data';

const allReferenceFields = {};
Object.entries(allModels).forEach(([modelName, model]) => {
    model.fields.forEach((field) => {
        if (field.type === 'reference' || (field.type === 'list' && field.items?.type === 'reference')) {
            allReferenceFields[modelName + ':' + field.name] = true;
        }
    });
});

function isRefField(modelName: string, fieldName: string) {
    return !!allReferenceFields[modelName + ':' + fieldName];
}

const supportedFileTypes = ['md', 'json'];
function contentFilesInPath(dir: string) {
    const globPattern = `${dir}/**/*.{${supportedFileTypes.join(',')}}`;
    return globSync(globPattern);
}

function readContent(file: string) {
    const rawContent = fs.readFileSync(file, 'utf8');
    let content = null;
    switch (path.extname(file).substring(1)) {
        case 'md':
            const parsedMd = frontmatter<Record<string, any>>(rawContent);
            content = {
                ...parsedMd.attributes,
                markdown_content: parsedMd.body
            };
            break;
        case 'json':
            content = JSON.parse(rawContent);
            break;
        default:
            throw Error(`Unhandled file type: ${file}`);
    }

    // Validação de slug e type para páginas (após definição de content)
    if (file.includes('content/pages/')) {
        if (!content.slug || typeof content.slug !== 'string' || content.slug.trim() === '' || content.slug.includes('//')) {
            console.warn(`AVISO: O arquivo ${file} possui slug inválido: '${content.slug}'. O slug deve ser uma string sem barras duplicadas.`);
        }
        if (!content.type || typeof content.type !== 'string' || content.type.trim() === '') {
            console.warn(`AVISO: O arquivo ${file} não possui type válido. O type deve ser uma string.`);
        }
    }

    // Validação de slug e type para páginas
    if (file.includes('content/pages/')) {
        if (!content.slug || typeof content.slug !== 'string' || content.slug.trim() === '' || content.slug.includes('//')) {
            console.warn(`AVISO: O arquivo ${file} possui slug inválido: '${content.slug}'. O slug deve ser uma string sem barras duplicadas.`);
        }
        if (!content.type || typeof content.type !== 'string' || content.type.trim() === '') {
            console.warn(`AVISO: O arquivo ${file} não possui type válido. O type deve ser uma string.`);
        }
    }

    // Make Sourcebit-compatible
    if (!content.__metadata) content.__metadata = {};
    content.__metadata.id = file.replace(/\\/g, '/');
    content.__metadata.modelName = content.type;

    // Recursivamente adiciona __metadata.modelName às seções e subitens
    function addModelName(obj: any) {
        if (Array.isArray(obj)) {
            obj.forEach(addModelName);
        } else if (obj && typeof obj === 'object') {
            if (obj.type && !obj.__metadata) {
                obj.__metadata = { modelName: obj.type };
            } else if (obj.type && obj.__metadata && !obj.__metadata.modelName) {
                obj.__metadata.modelName = obj.type;
            }
            Object.values(obj).forEach(addModelName);
        }
    }
    addModelName(content);

    return content;
}

function resolveReferences(content, fileToContent) {
    if (!content || !content.type) return;

    const modelName = content.type;
    // Make Sourcebit-compatible
    if (!content.__metadata) content.__metadata = { modelName: content.type };

    for (const fieldName in content) {
        let fieldValue = content[fieldName];
        if (!fieldValue) continue;

        const isRef = isRefField(modelName, fieldName);
        if (Array.isArray(fieldValue)) {
            if (fieldValue.length === 0) continue;
            if (isRef && typeof fieldValue[0] === 'string') {
                fieldValue = fieldValue.map((filename) => fileToContent[filename]);
                content[fieldName] = fieldValue;
            }
            if (typeof fieldValue[0] === 'object') {
                fieldValue.forEach((o) => resolveReferences(o, fileToContent));
            }
        } else {
            if (isRef && typeof fieldValue === 'string') {
                fieldValue = fileToContent[fieldValue];
                content[fieldName] = fieldValue;
            }
            if (typeof fieldValue === 'object') {
                resolveReferences(fieldValue, fileToContent);
            }
        }
    }
}

export function allContent() {
    const [data, pages] = [dataDir, pagesDir].map((dir) => {
        return contentFilesInPath(dir).map((file) => readContent(file));
    });
    const objects = [...pages, ...data];
    const fileToContent = Object.fromEntries(objects.map((e) => [e.__metadata.id, e]));
    objects.forEach((e) => resolveReferences(e, fileToContent));

    pages.forEach((page) => {
        page.__metadata.urlPath = getPageUrl(page);
    });

    const siteConfig = data.find((e) => e.__metadata.modelName === Config.name);
    siteConfig.env = { ...(siteConfig.env || {}), ...setEnvironmentVariables() };

    resolveReferences(siteConfig, fileToContent);

    return { objects, pages, props: { site: siteConfig } };
}
