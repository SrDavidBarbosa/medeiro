import { seoGenerateMetaTags, seoGenerateTitle, seoGenerateMetaDescription, seoGenerateOgImage } from '../src/utils/seo-utils';

describe('SEO Utils', () => {
    const mockSite = {
        title: 'Test Site',
        titleSuffix: ' - Test Suffix',
        defaultMetaTags: [{ property: 'default-tag', content: 'default-content' }],
        defaultSocialImage: '/default-og-image.jpg',
        env: {
            URL: 'https://test-site.com'
        }
    };

    const mockPage = {
        title: 'Test Page',
        seo: {
            metaTitle: 'Custom SEO Title',
            metaDescription: 'Custom meta description',
            socialImage: '/custom-social.jpg',
            metaTags: [{ property: 'custom-tag', content: 'custom-content' }]
        },
        __metadata: {
            modelName: 'PageLayout'
        }
    };

    const mockBlogPost = {
        title: 'Test Blog Post',
        excerpt: 'This is a blog post excerpt',
        featuredImage: {
            url: '/featured-image.jpg'
        },
        publishDate: '2025-11-03',
        author: {
            name: 'Test Author'
        },
        __metadata: {
            modelName: 'PostLayout'
        }
    };

    describe('seoGenerateTitle', () => {
        it('should generate title with suffix when addTitleSuffix is not false', () => {
            const title = seoGenerateTitle(mockPage, mockSite);
            expect(title).toBe('Custom SEO Title - Test Suffix');
        });

        it('should generate title without suffix when addTitleSuffix is false', () => {
            const pageWithoutSuffix = {
                ...mockPage,
                seo: { ...mockPage.seo, addTitleSuffix: false }
            };
            const title = seoGenerateTitle(pageWithoutSuffix, mockSite);
            expect(title).toBe('Custom SEO Title');
        });

        it('should fall back to page title if no metaTitle', () => {
            const pageWithoutMetaTitle = {
                ...mockPage,
                seo: { ...mockPage.seo, metaTitle: undefined }
            };
            const title = seoGenerateTitle(pageWithoutMetaTitle, mockSite);
            expect(title).toBe('Test Page - Test Suffix');
        });
    });

    describe('seoGenerateMetaDescription', () => {
        it('should return excerpt for blog posts', () => {
            const description = seoGenerateMetaDescription(mockBlogPost, mockSite);
            expect(description).toBe('This is a blog post excerpt');
        });

        it('should return custom meta description when provided', () => {
            const description = seoGenerateMetaDescription(mockPage, mockSite);
            expect(description).toBe('Custom meta description');
        });

        it('should return null when no description is available', () => {
            const pageWithoutDescription = {
                ...mockPage,
                seo: { ...mockPage.seo, metaDescription: undefined }
            };
            const description = seoGenerateMetaDescription(pageWithoutDescription, mockSite);
            expect(description).toBeNull();
        });
    });

    describe('seoGenerateOgImage', () => {
        it('should return social image when provided', () => {
            const ogImage = seoGenerateOgImage(mockPage, mockSite);
            expect(ogImage).toBe('https://test-site.com/custom-social.jpg');
        });

        it('should return featured image for blog posts', () => {
            const ogImage = seoGenerateOgImage(mockBlogPost, mockSite);
            expect(ogImage).toBe('https://test-site.com/featured-image.jpg');
        });

        it('should return default social image when no page-specific image', () => {
            const pageWithoutImage = {
                ...mockPage,
                seo: { ...mockPage.seo, socialImage: undefined }
            };
            const ogImage = seoGenerateOgImage(pageWithoutImage, mockSite);
            expect(ogImage).toBe('https://test-site.com/default-og-image.jpg');
        });

        it('should return relative URL when no domain URL', () => {
            const siteWithoutUrl = {
                ...mockSite,
                env: {}
            };
            const ogImage = seoGenerateOgImage(mockPage, siteWithoutUrl);
            expect(ogImage).toBe('/custom-social.jpg');
        });
    });

    describe('seoGenerateMetaTags', () => {
        it('should generate meta tags with proper format', () => {
            const metaTags = seoGenerateMetaTags(mockPage, mockSite);

            expect(metaTags).toContainEqual(
                expect.objectContaining({
                    property: 'og:title',
                    content: 'Custom SEO Title - Test Suffix',
                    format: 'property'
                })
            );

            expect(metaTags).toContainEqual(
                expect.objectContaining({
                    property: 'description',
                    content: 'Custom meta description',
                    format: 'name'
                })
            );

            expect(metaTags).toContainEqual(
                expect.objectContaining({
                    property: 'twitter:card',
                    content: 'summary_large_image',
                    format: 'name'
                })
            );
        });

        it('should generate article meta tags for blog posts', () => {
            const metaTags = seoGenerateMetaTags(mockBlogPost, mockSite);

            expect(metaTags).toContainEqual(
                expect.objectContaining({
                    property: 'og:type',
                    content: 'article',
                    format: 'property'
                })
            );

            expect(metaTags).toContainEqual(
                expect.objectContaining({
                    property: 'article:published_time',
                    content: '2025-11-03',
                    format: 'property'
                })
            );
        });

        it('should include default meta tags from site', () => {
            const metaTags = seoGenerateMetaTags(mockPage, mockSite);

            expect(metaTags).toContainEqual(
                expect.objectContaining({
                    property: 'default-tag',
                    content: 'default-content',
                    format: 'name'
                })
            );
        });

        it('should include custom page meta tags', () => {
            const metaTags = seoGenerateMetaTags(mockPage, mockSite);

            expect(metaTags).toContainEqual(
                expect.objectContaining({
                    property: 'custom-tag',
                    content: 'custom-content',
                    format: 'name'
                })
            );
        });

        it('should filter out null and undefined values', () => {
            const metaTags = seoGenerateMetaTags(mockPage, mockSite);

            metaTags.forEach((tag) => {
                expect(tag.content).not.toBeNull();
                expect(tag.content).not.toBeUndefined();
            });
        });
    });
});
