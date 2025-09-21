import React from 'react';
import Head from 'next/head';
import { allContent } from '../utils/local-content';
import { getComponent } from '../components/components-registry';
import { resolveStaticProps } from '../utils/static-props-resolvers';
import { resolveStaticPaths } from '../utils/static-paths-resolvers';
import { seoGenerateTitle, seoGenerateMetaTags, seoGenerateMetaDescription } from '../utils/seo-utils';

function Page(props) {
    const { page, site } = props;
    const modelName = page?.__metadata?.modelName;
    if (!modelName) {
        return (
            <>
                <Head>
                    <title>Página não encontrada ou inválida</title>
                </Head>
                <main style={{ padding: '4rem', textAlign: 'center' }}>
                    <h1>Erro ao carregar página</h1>
                    <p>
                        Esta página não possui um tipo/modelo válido.
                        <br />
                        Verifique o conteúdo ou entre em contato com o suporte.
                    </p>
                </main>
            </>
        );
    }
    const PageLayout = getComponent(modelName);
    if (!PageLayout) {
        return (
            <>
                <Head>
                    <title>Layout não encontrado</title>
                </Head>
                <main style={{ padding: '4rem', textAlign: 'center' }}>
                    <h1>Layout não encontrado</h1>
                    <p>
                        Não existe um layout correspondente ao modelo: <b>{modelName}</b>
                    </p>
                </main>
            </>
        );
    }
    const title = seoGenerateTitle(page, site);
    const metaTags = seoGenerateMetaTags(page, site);
    const metaDescription = seoGenerateMetaDescription(page, site);
    return (
        <>
            <Head>
                <title>{title}</title>
                {metaDescription && <meta name="description" content={metaDescription} />}
                {metaTags.map((metaTag) => {
                    if (metaTag.format === 'property') {
                        // OpenGraph meta tags (og:*) should be have the format <meta property="og:…" content="…">
                        return <meta key={metaTag.property} property={metaTag.property} content={metaTag.content} />;
                    }
                    return <meta key={metaTag.property} name={metaTag.property} content={metaTag.content} />;
                })}
                <meta name="algolia-site-verification" content="0E8D64A3DE85DEEA" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {site.favicon && <link rel="icon" href={site.favicon} />}
            </Head>
            <PageLayout page={page} site={site} />
        </>
    );
}

export function getStaticPaths() {
    const data = allContent();
    const paths = resolveStaticPaths(data);
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const data = allContent();
    const urlPath = '/' + (params.slug || []).join('/');
    const props = await resolveStaticProps(urlPath, data);
    return { props };
}

export default Page;
