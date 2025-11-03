import * as React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';

export default function ImageBlock(props) {
    const { 
        elementId, 
        className, 
        imageClassName, 
        url, 
        altText = '', 
        styles = {},
        priority = false,
        quality = 75,
        placeholder = 'empty'
    } = props;
    
    if (!url) {
        return null;
    }
    
    const fieldPath = props['data-sb-field-path'];
    const annotations = fieldPath
        ? { 'data-sb-field-path': [fieldPath, `${fieldPath}.url#@src`, `${fieldPath}.altText#@alt`, `${fieldPath}.elementId#@id`].join(' ').trim() }
        : {};

    // Determine if image should be unoptimized (for external URLs)
    const isExternalUrl = url.startsWith('http://') || url.startsWith('https://');
    
    // Calculate responsive sizes
    const containerStyles = styles?.self?.padding ? mapStyles({ padding: styles?.self?.padding }) : undefined;
    const imageStyles = classNames(
        imageClassName,
        styles?.self?.borderWidth && styles?.self?.borderWidth !== 0 && styles?.self?.borderStyle !== 'none'
            ? mapStyles({
                  borderWidth: styles?.self?.borderWidth,
                  borderStyle: styles?.self?.borderStyle,
                  borderColor: styles?.self?.borderColor ?? 'border-primary'
              })
            : undefined,
        styles?.self?.borderRadius ? mapStyles({ borderRadius: styles?.self?.borderRadius }) : undefined
    );

    return (
        <div
            className={classNames(
                'sb-component',
                'sb-component-block',
                'sb-component-image-block',
                className,
                styles?.self?.margin ? mapStyles({ margin: styles?.self?.margin }) : undefined
            )}
            {...annotations}
        >
            <div className="relative w-full h-full">
                <Image
                    id={elementId}
                    src={url}
                    alt={altText}
                    className={imageStyles}
                    priority={priority}
                    quality={quality}
                    placeholder={placeholder}
                    unoptimized={isExternalUrl}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading={priority ? 'eager' : 'lazy'}
                    // Add accessibility attributes
                    aria-label={altText}
                    role={altText ? 'img' : 'presentation'}
                />
            </div>
        </div>
    );
}
