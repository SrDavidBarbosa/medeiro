import * as React from 'react';

import { getBaseLayoutComponent } from '../../../utils/base-layout';
import { getComponent } from '../../components-registry';

export default function PageLayout(props) {
    const { page, site } = props;
    const BaseLayout = getBaseLayoutComponent(page.baseLayout, site.baseLayout);
    const { enableAnnotations = true } = site;
    const { title, sections = [] } = page;

    return (
        <BaseLayout page={page} site={site}>
            <main
                id="main"
                className="sb-layout sb-page-layout"
                role="main"
                tabIndex={-1}
                aria-label={title ? `Conteúdo da página: ${title}` : 'Conteúdo principal da página'}
            >
                {title && (
                    <h1 className="sr-only" {...(enableAnnotations && { 'data-sb-field-path': 'title' })}>
                        {title}
                    </h1>
                )}
                {sections.length > 0 && (
                    <div {...(enableAnnotations && { 'data-sb-field-path': 'sections' })} role="region" aria-label="Seções da página">
                        {sections.map((section, index) => {
                            const Component = getComponent(section.__metadata.modelName);
                            if (!Component) {
                                throw new Error(`no component matching the page section's model name: ${section.__metadata.modelName}`);
                            }
                            return (
                                <Component
                                    key={index}
                                    {...section}
                                    enableAnnotations={enableAnnotations}
                                    {...(enableAnnotations && { 'data-sb-field-path': `sections.${index}` })}
                                    sectionIndex={index}
                                    sectionCount={sections.length}
                                />
                            );
                        })}
                    </div>
                )}
            </main>
        </BaseLayout>
    );
}
