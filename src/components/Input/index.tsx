import { TextField, TextFieldProps, TextFieldPropsSizeOverrides } from '@mui/material'
import { OverridableStringUnion } from '@mui/types';
import React from 'react'

interface Props {
    suffix?: React.ReactNode
    prefix?: React.ReactNode
    size?: OverridableStringUnion<"medium" | "small", TextFieldPropsSizeOverrides>
    className?: TextFieldProps['className']
    placeholder?: string
    value?: unknown
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined
}

function Input({
    suffix = <></>,
    prefix = <></>,
    size = 'small',
    className,
    placeholder = 'Tìm kiếm trong cửa hàng',
    value,
    onChange
}: Props) {
    return (
        <TextField
            className={className}
            fullWidth
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            size={size}
            slotProps={{
                input: {
                    endAdornment: suffix,
                    startAdornment: prefix
                }
            }}
            sx={{
                "& .MuiOutlinedInput-root": {
                    padding: '2px'
                },
                "& .MuiOutlinedInput-input": {
                    paddingLeft: '16px',
                    paddingRight: '16px',
                }
            }}
        />
    )
}

export default Input