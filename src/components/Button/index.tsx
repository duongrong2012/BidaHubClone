import Colors from '@/themes'
import { Button as MuiButton } from '@mui/material'
import React from 'react'

interface Props {
    children: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
    bgButt?: 'deepPink' | 'outline' | 'primaryBlue' | 'disable' | 'grey'
    height?: string | number
    preIcon?: React.ReactNode
    className?: string | undefined
    variant?: "text" | "outlined" | "contained" | undefined
    disabled?: boolean
}

function Button({
    children,
    onClick,
    bgButt,
    height = 48,
    preIcon,
    className,
    variant,
    disabled,
    ...rest
}: Props) {

    return (
        <MuiButton
            onClick={onClick}
            className={`font-semibold ${className}`}
            variant={variant}
            disabled={disabled}
            sx={{
                height: height,
                gap: '0.6rem',
                borderWidth: '1px',
                borderStyle: 'solid',
                textTransform: 'none',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                fontWeight: '600',
                ...(bgButt === 'deepPink' && {
                    backgroundColor: Colors.DeepPink,
                    color: 'white',
                    borderColor: Colors.DeepPink,
                    '&:hover': {
                        backgroundColor: 'white',
                        color: Colors.DeepPink,
                    },
                }),
                ...(bgButt === 'primaryBlue' && {
                    backgroundColor: Colors.Primary,
                    color: 'white',
                    '&:hover': {
                        backgroundColor: '#42a5f5',
                    },
                }),
                ...(bgButt === 'outline' && {
                    color: Colors.TextColor,
                    borderColor: Colors.BorderColor,
                }),
                ...(bgButt === 'disable' && {
                    color: 'rgba(0, 0, 0, 0.26)',
                    backgroundColor: 'rgba(0, 0, 0, 0.12)',
                }),
                ...(bgButt === 'grey' && {
                    backgroundColor: Colors.antiFlashWhite2,
                    '&:hover': {
                        backgroundColor: 'rgba(209,213,219,1)',
                    },
                }),
            }}
            {...rest}
        >
            {preIcon}
            {children}
        </MuiButton>
    )
}

export default Button