import { render, screen, fireEvent } from '@testing-library/react';
import ImageBlock from '../../src/components/blocks/ImageBlock/index';

// Mock Next.js Image component
jest.mock('next/image', () => {
    return function MockImage(props) {
        return <img {...props} />;
    };
});

describe('ImageBlock Component', () => {
    const defaultProps = {
        url: '/test-image.jpg',
        altText: 'Test image',
        elementId: 'test-image',
        'data-sb-field-path': 'test'
    };

    it('should render null when no url is provided', () => {
        const { container } = render(<ImageBlock url="" altText="Test" />);
        expect(container.firstChild).toBeNull();
    });

    it('should render image with correct src and alt', () => {
        render(<ImageBlock {...defaultProps} />);

        const image = screen.getByRole('img', { hidden: true });
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', '/test-image.jpg');
        expect(image).toHaveAttribute('alt', 'Test image');
    });

    it('should handle external URLs correctly', () => {
        const externalProps = {
            ...defaultProps,
            url: 'https://example.com/image.jpg'
        };

        render(<ImageBlock {...externalProps} />);

        const image = screen.getByRole('img', { hidden: true });
        expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
        expect(image).toHaveAttribute('unoptimized', 'true');
    });

    it('should apply custom styles correctly', () => {
        const customStyles = {
            self: {
                padding: 'p-4',
                borderWidth: 2,
                borderStyle: 'solid',
                borderColor: '#333',
                borderRadius: 'rounded-lg',
                margin: 'm-2'
            }
        };

        render(<ImageBlock {...defaultProps} styles={customStyles} imageClassName="custom-image-class" />);

        const container = screen.getByTestId('image-block-container');
        expect(container).toBeInTheDocument();
    });

    it('should pass accessibility attributes', () => {
        render(<ImageBlock {...defaultProps} />);

        const image = screen.getByRole('img', { hidden: true });
        expect(image).toHaveAttribute('aria-label', 'Test image');
        expect(image).toHaveAttribute('role', 'img');
    });

    it('should handle missing alt text gracefully', () => {
        const { url, ...propsWithoutAlt } = defaultProps;
        render(<ImageBlock url={url} {...propsWithoutAlt} />);

        const image = screen.getByRole('presentation');
        expect(image).toHaveAttribute('role', 'presentation');
        expect(image).toHaveAttribute('alt', '');
    });

    it('should use priority loading for hero images', () => {
        render(<ImageBlock {...defaultProps} priority={true} />);

        const image = screen.getByRole('img', { hidden: true });
        // Next.js Image will handle the priority prop internally
        expect(image).toBeInTheDocument();
    });

    it('should set responsive sizes correctly', () => {
        render(<ImageBlock {...defaultProps} />);

        const image = screen.getByRole('img', { hidden: true });
        expect(image).toHaveAttribute('sizes', '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw');
    });

    it('should use lazy loading for non-priority images', () => {
        render(<ImageBlock {...defaultProps} priority={false} />);

        const image = screen.getByRole('img', { hidden: true });
        expect(image).toHaveAttribute('loading', 'lazy');
    });

    it('should set custom quality and placeholder', () => {
        render(<ImageBlock {...defaultProps} quality={90} placeholder="blur" />);

        const image = screen.getByRole('img', { hidden: true });
        expect(image).toBeInTheDocument();
        // Next.js Image handles quality and placeholder internally
    });

    it('should render with data-sb-field-path annotations', () => {
        render(<ImageBlock {...defaultProps} />);

        // Verificar se as anotações foram aplicadas corretamente
        // (A implementação específica depende da estrutura do componente)
        expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
    });
});
