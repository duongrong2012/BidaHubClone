import { MenuItem, MenuListProps, MenuProps, Menu as MuiMenu } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export interface MenuChildren {
    id: string,
    label: string,
    iconSrc?: string,
    onClick?: () => void,
}

interface Props {
    isOpen: boolean
    children: MenuChildren[]
    anchorEl?: MenuProps['anchorEl']
    onClose?: MenuProps['onClose']
    MenuListProps?: Partial<MenuListProps> | undefined
}

function Menu({
    isOpen,
    children,
    anchorEl,
    onClose,
    MenuListProps,
}: Props) {
    return (
        <MuiMenu
            disableScrollLock
            open={isOpen}
            anchorEl={anchorEl}
            onClose={onClose}
            MenuListProps={MenuListProps}
            hideBackdrop
            // BackdropProps={{
            //     invisible: true, // Đặt lớp phủ thành trong suốt
            //     style: { display: 'none' }, // Hoặc ẩn hoàn toàn lớp phủ
            // }}
            sx={{
                // display: 'contents',
                '& .MuiList-root': {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px'
                }
            }}
        >
            {children.map((item) => (
                <MenuItem
                    key={item.id}
                    className='flex gap-2'
                    onClick={item.onClick}
                >
                    {item.iconSrc && (<Image alt='' src={item.iconSrc} height={24} width={24} />)}
                    <div>{item.label}</div>
                </MenuItem>
            ))}
        </MuiMenu>
    )
}

export default Menu