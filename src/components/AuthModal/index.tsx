'use client'

import images from '@/assets'
import { Modal } from '@mui/material'
import React from 'react'
import NextImage from 'next/image'
import { useDispatch } from 'react-redux'
import { UserActions } from '@/redux/slices/user'
import Input from '../Input'
import Button from '../Button'
import ReactDOM from 'react-dom';

export interface AuthModalHandle {
    open: () => void;
    close: () => void;
}

const advantagesOfMemb = ['Theo dõi đơn hàng, lịch sử mua hàng', 'Tích điểm ưu đãi trên mọi đơn hàng', 'Nhận ưu đãi độc quyền cho thành viên mới']

let modalInstance: { open: () => void; close: () => void } | null = null;

export const AuthModal = () => {
    const dispatch = useDispatch()

    const [isOpen, setIsOpen] = React.useState(false);

    // Expose open and close methods to the parent using `ref`
    React.useEffect(() => {
        modalInstance = {
            open: () => setIsOpen(true),
            close: () => setIsOpen(false),
        };
        return () => {
            modalInstance = null; // Cleanup khi component bị unmount
        };
    }, []);

    const onClickLoginGoogle = React.useCallback(() => {
        dispatch(UserActions.loginWithGoogle())
    }, [dispatch]);

    const loginMethods = React.useMemo(() => {
        return [
            {
                id: 'zalo',
                image: images.zalo,
                label: 'Zalo',
                onClickMethod: onClickLoginGoogle
            },
            {
                id: 'google',
                image: images.google,
                label: 'Google',
                onClickMethod: onClickLoginGoogle
            },
            {
                id: 'facebook',
                image: images.facebook,
                label: 'Facebook',
                onClickMethod: onClickLoginGoogle
            },
        ]
    }, [onClickLoginGoogle]);

    return ReactDOM.createPortal(
        <Modal
            open={isOpen}
            onClose={() => setIsOpen(false)}
            sx={{
                '&': {
                    padding: '1rem',
                    overflow: 'auto'
                }
            }}
        >
            <div className='bg-white relative shadow-xl outline-none rounded-2xl px-5 py-4 max-w-[480px] mx-auto max dt:max-w-[1126px] dt:flex dt:gap-10 dt:p-8'>
                <NextImage
                    alt=''
                    src={images.close}
                    width={24}
                    onClick={() => setIsOpen(false)}
                    className='absolute top-0 right-0'
                />
                <NextImage
                    className='mx-auto flex-1'
                    src={images.authLogo}
                    alt=''
                />
                <div className='flexCol mt-4 gap-4 flex-1'>
                    <div className='text-5xl'>Xin chào, &#x1F44B;</div>
                    <div className='text-2xl'>Đăng nhập hoặc tạo tài khoản</div>
                    <div>Số điện thoại hoặc Email</div>
                    <Input placeholder='Nhập số điện thoại hoặc Email' />
                    <Button bgButt='deepPink'>Tiếp Tục</Button>
                    <div className='bg-LightPrimaryHover p-3 flexCol gap-3'>
                        <div className='text-sm'>Các phúc lợi khi trở thành hội viên của BidaHub:</div>
                        {advantagesOfMemb.map((item) => (
                            <div className='flex items-center gap-2' key={item}>
                                <NextImage alt='' src={images.verified} width={24} />
                                <div className='text-sm'>{item}</div>
                            </div>
                        ))}
                    </div>
                    <div className='flex items-center px-4'>
                        <div className='flex-1 border-t border-zinc-300' />
                        <div className='mx-4'>Hoặc tiếp tục bằng</div>
                        <div className='flex-1 border-t border-zinc-300' />
                    </div>
                    <div className='flexCol gap-4 dt:flex-row'>
                        {loginMethods.map((item) => (
                            <Button
                                key={item.id}
                                bgButt='outline'
                                onClick={onClickLoginGoogle}
                                className='flex-1'
                                preIcon={
                                    <NextImage
                                        alt=''
                                        src={item.image}
                                        width={24}
                                    />
                                }
                            >
                                {item.label}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </Modal>,
        document.body
    )
}

export const AuthModalSingleton = {
    open: () => modalInstance?.open(),
    close: () => modalInstance?.close(),
};
