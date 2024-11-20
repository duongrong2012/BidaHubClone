import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import NextImage from 'next/image'
import React, { CSSProperties } from 'react'

interface Props {
    src: string | StaticImport
    width?: number | string | undefined
    height?: number | string | undefined
    alt?: string
    className?: string
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
    priority?: boolean | undefined
    wRatio?: number | `${number}` | undefined
    hRatio?: number | `${number}` | undefined
}

function Image({
    src,
    alt = '',
    width,
    height,
    className,
    onClick,
    priority = false,
    wRatio = 1,
    hRatio = 1,
}: Props) {

    const container: CSSProperties = {
        width,
        height
    }

    return (
        <div style={container} className={`${className} flex-shrink-0 `} onClick={onClick}>
            <NextImage
                src={src}
                layout='responsive'
                height={hRatio}
                width={wRatio}
                alt={alt}
                priority={priority}
            // fill
            />
        </div>
    )
}

export default Image