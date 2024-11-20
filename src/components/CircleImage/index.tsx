import Colors from '@/themes'
import { Badge } from '@mui/material'
import Image from 'next/image'
import React, { CSSProperties } from 'react'

interface Props {
    backgroundColor?: CSSProperties['backgroundColor']
    src: string
    containerSize?: number,
    imageSize?: number,
    isEnableBadge?: boolean,
    badgeContent?: React.ReactNode
}

function CircleImage({
    backgroundColor = Colors.LightPrimary,
    src,
    containerSize = 48,
    imageSize = 24,
    isEnableBadge = false,
    badgeContent,
}: Props) {
    const container: CSSProperties = {
        backgroundColor,
        height: containerSize,
        width: containerSize,
    }

    return (
        <Badge
            badgeContent={badgeContent}
            sx={{
                '& .MuiBadge-badge': {
                    backgroundColor: Colors.DeepPink,
                    color: 'white',
                    top: '5px',
                    right: '6px',
                    display: isEnableBadge ? 'flex' : 'none'
                }
            }}
        >
            <div style={container} className='rounded-full flex items-center justify-center'>
                <Image alt='' src={src} height={imageSize} width={24} />
            </div>
        </Badge>
    )
}

export default CircleImage