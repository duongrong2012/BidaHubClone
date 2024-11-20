'use client'

import Product from '@/types/product'
import { formatNumber } from '@/utils'
import { Rating } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Button from '../Button'
import AddIcon from '../Icons/AddIcon'
import images from '@/assets'
import Link from 'next/link'

interface Props {
    product: Product,
    className?: string | undefined
    style?: React.CSSProperties | undefined
}

interface State {
    isShowButtonList: boolean
}

function ProductCard({
    product,
    className,
    style
}: Props) {

    const [state, setState] = React.useState<State>({
        isShowButtonList: false
    })

    const isProductSoldOut = product.quantity === 0

    const onMousEnter = React.useCallback(() => {
        console.log('enter')
        setState((prevState) => ({
            ...prevState,
            isShowButtonList: true
        }));
    }, []);

    const onMouseLeave = React.useCallback(() => {
        setState((prevState) => ({
            ...prevState,
            isShowButtonList: false
        }));
    }, []);

    return (
        <Link
            className={`flex relative fixedFlex flex-col cursor-pointer rounded-xl hover:shadow-md p-2 gap-2 tb:p-3 tb:gap-3 bg-white ${className}`}
            style={style}
            href={{
                pathname: `/product-detail/${product.id}`
            }}
        >
            {isProductSoldOut && (
                <div className='bg-textColor text-white rounded py-1 px-2 text-sm font-normal absolute left-2 top-2 dt:left-3 dt:top-3 z-10'>
                    Hết hàng
                </div>
            )}
            {state.isShowButtonList && (
                <div
                    className='absolute flex flex-col gap-2 right-2 top-2 dt:right-3 dt:top-3 z-10'
                    onMouseEnter={onMousEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <Button bgButt='outline' className='!w-8 !h-8 dt:!w-12 dt:!h-12 !p-0 !min-w-fit !rounded-lg !bg-white hover:!bg-DeepPink hover:!text-white'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            fill="none"
                            className="text-gunmetal fixedFlex w-4 h-4 dt:w-6 dt:h-6"
                            viewBox="0 0 21 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="square"
                                strokeWidth={1.5}
                                d="M18.042 8.03c-.009-2.114-1.117-4.1-3.303-4.805-1.501-.484-3.136-.215-4.406 1.608C9.063 3.01 7.43 2.74 5.928 3.225c-2.186.704-3.295 2.692-3.303 4.805-.02 4.204 4.239 7.42 7.707 8.957h.002c3.469-1.537 7.728-4.754 7.708-8.957Z"
                            />
                        </svg>
                    </Button>
                    <Button bgButt='outline' className='!w-8 !h-8 !hidden dt:!flex dt:!w-12 dt:!h-12 !p-0 !min-w-fit !rounded-lg !bg-white hover:!bg-DeepPink hover:!text-white'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            fill="none"
                            className="text-gunmetal fixedFlex w-4 h-4 dt:w-6 dt:h-6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M15.58 12c0 1.98-1.6 3.58-3.58 3.58S8.42 13.98 8.42 12s1.6-3.58 3.58-3.58 3.58 1.6 3.58 3.58Z"
                            />
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M12 20.27c3.53 0 6.82-2.08 9.11-5.68.9-1.41.9-3.78 0-5.19-2.29-3.6-5.58-5.68-9.11-5.68-3.53 0-6.82 2.08-9.11 5.68-.9 1.41-.9 3.78 0 5.19 2.29 3.6 5.58 5.68 9.11 5.68Z"
                            />
                        </svg>
                    </Button>
                </div>
            )}
            <div
                className='w-full relative pt-[100%] scale-90 hover:scale-100 transition-all'
                onMouseEnter={onMousEnter}
                onMouseLeave={onMouseLeave}
            >
                <Image alt='' src={product.images[0].url} fill />
            </div>
            <div className='flex flex-col gap-2'>
                <div className='line-clamp-2 text-ellipsis dt:text-lg'>{product.name}</div>
                <div className='hidden border-t my-2 w-full tb:block border-borderColor' />
                <div className='flex flex-row items-center text-TextGrey gap-1'>
                    <Rating max={1} value={1} readOnly className='!flex tb:!hidden' />
                    <Rating max={5} value={product.totalRatingPoint} readOnly className='!hidden tb:!flex' size='small' />
                    <div className='text-sm tb:hidden'>{product.totalRatingPoint}</div>
                    <div className='ml-1 text-sm line-clamp-1 text-ellipsis'>( {product.totalRating} đánh giá )</div>
                </div>
                <div className='flex justify-between'>
                    <div className='flexCol gap-2'>
                        <div className='text-DeepPink'>{formatNumber(product.price)}&nbsp;đ</div>
                        <div className='text-silver text-xs'>{formatNumber(product.discountPrice)}&nbsp;đ</div>
                    </div>
                    {isProductSoldOut ? (
                        <Image alt='' src={images.noticationBell} width={32} height={32} className='fixedFlex flex tb:hidden' />
                    ) : (
                        <AddIcon />
                    )}
                </div>
                {isProductSoldOut ? (
                    <Button bgButt='primaryBlue' className='!hidden !text-[1rem] tb:!flex'>Nhận thông báo</Button>
                ) : (
                    <Button bgButt='deepPink' className='!hidden !text-[1rem] tb:!flex'>Thêm vào giỏ hàng</Button>
                )}
            </div>
        </Link>
    )
}

export default ProductCard