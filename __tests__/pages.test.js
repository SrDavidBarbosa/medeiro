import { render, screen } from '@testing-library/react';
import Page from '../src/pages/[[...slug]]';

jest.mock('../src/utils/local-content', () => ({
    allContent: jest.fn(() => [])
}));

jest.mock('../src/components/components-registry', () => ({
    getComponent: jest.fn()
}));

jest.mock('../src/utils/static-props-resolvers', () => ({
    resolveStaticProps: jest.fn()
}));

jest.mock('../src/utils/static-paths-resolvers', () => ({
    resolveStaticPaths: jest.fn()
}));

jest.mock('../src/utils/seo-utils', () => ({
    seoGenerateTitle: jest.fn(() => 'Test Title'),
    seoGenerateMetaTags: jest.fn(() => []),
    seoGenerateMetaDescription: jest.fn(() => 'Test Description')
}));

const mockProps = {
    page: {
        title: 'Test Page',
        __metadata: {
            modelName: 'PageLayout',
            urlPath: '/test-page'
        }
    },
    site: {
        title: 'Test Site',
        env: {
            URL: 'https://test-site.com'
        }
    }
};

describe('Page Component', () => {
    it('should render the page title', () => {
        render(<Page {...mockProps} />);

        const pageLayout = screen.getByRole('main');
        expect(pageLayout).toBeInTheDocument();
    });

    it('should handle missing modelName gracefully', () => {
        const propsWithMissingModelName = {
            ...mockProps,
            page: {
                ...mockProps.page,
                __metadata: {}
            }
        };

        render(<Page {...propsWithMissingModelName} />);

        expect(screen.getByText(/erro ao carregar página/i)).toBeInTheDocument();
    });

    it('should handle missing PageLayout component gracefully', () => {
        const { getComponent } = require('../src/components/components-registry');
        getComponent.mockReturnValue(null);

        render(<Page {...mockProps} />);

        expect(screen.getByText(/layout não encontrado/i)).toBeInTheDocument();
    });
});
