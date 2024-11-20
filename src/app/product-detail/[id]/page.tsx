// 'use client'

import images from '@/assets'
import Button from '@/components/Button'
import { introBarItems } from '@/components/IntroBar'
import ProductOption from '@/components/ProductOption'
import QuantitySelector from '@/components/QuantitySelector'
import RatingList from '@/components/RatingList'
import SyncCarousel from '@/components/SyncCarousel'
import { products as fakeProduct } from '@/constants/fakedata/products'
import { ratings as fakeRating } from '@/constants/fakedata/ratings'
import ProductService from '@/services/product'
import { formatDescription } from '@/utils'
import { Rating } from '@mui/material'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
    params: Promise<{ id: string }>
}

async function ProductDetail({
    params,
}: Props) {

    const product = await ProductService.getProductDetails((await (params)).id)

    return (
        <div className='container mx-auto'>
            <div className='flex flex-col gap-6'>
                <div className='px-2 py-6 tb:px-6 container mx-auto inline-flex items-center'>
                    <Link className='text-sm font-medium text-TextGrey hover:underline' href='/'>Home</Link>
                    <Image
                        alt=''
                        src={images.rightArrow}
                        className=''
                        style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(11%) saturate(271%) hue-rotate(179deg) brightness(92%) contrast(91%)' }}
                    />
                    <div className='text-sm font-medium text-TextGrey'>Sản Phẩm</div>
                    <Image
                        alt=''
                        src={images.rightArrow}
                        className=''
                        style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(11%) saturate(271%) hue-rotate(179deg) brightness(92%) contrast(91%)' }}
                    />
                    <div className='text-sm font-medium text-textColor2'>{product.name}</div>
                </div>
                <div className='container px-2 tb:px-6 mx-auto bg-white'>
                    <div className='flex flex-col gap-4 dt:flex-row'>
                        <SyncCarousel ImageProp={product.images} />
                        <div className='flex flex-col dt:w-1/3 gap-4 border-y border-x-0 py-4 px-4 dt:px-6 dt:border-y-0 dt:border-x border-solid border-borderColor'>
                            {product.authentic && (
                                <div className='absoluteCenter fixedFlex w-fit bg-glitter text-CobaltBlue border border-blue border-blueberry rounded-3xl py-1 tb:py-[6px] px-2 tb:px-3'>
                                    <Image alt='' src={images.fillVerify} width={18} height={18} />
                                    <div>Chính hãng 100%</div>
                                </div>
                            )}
                            <div className='text-TextGrey'>SKU : {product.sku}</div>
                            <div className='text-xl font-semibold'>{product.name}</div>
                            <div className='flex flex-row items-center gap-1'>
                                <Rating max={5} value={product.totalRatingPoint} readOnly size='medium' />
                                <div className='ml-1 text-sm text-brilliantAzure line-clamp-1 text-ellipsis'>( {product.totalRating} đánh giá )</div>
                            </div>
                            <div className='text-2xl font-semibold text-DeepPink'>{product.price}&nbsp;₫</div>
                            {product.options.map((item) => (
                                <ProductOption key={item.id} productOption={item} />
                            ))}
                            <QuantitySelector quantityStock={product.quantity} />
                            <div
                                className={classNames({
                                    'border max-w-fit px-3 py-[6px] rounded text-sm': true,
                                    'text-forestGreen border-BorderTealDeer bg-honeyDew': product.quantity !== 0,
                                    'text-[#ff0000] border-[#ff4d4d] bg-[#ffcccc]': product.quantity === 0
                                })}
                            >
                                {product.quantity !== 0 ? 'Còn hàng' : 'Hết hàng'}
                            </div>
                            <div className='flex gap-2 items-center'>
                                <Image alt='' src={images.heart} width={24} height={24} style={{ filter: 'brightness(0) saturate(100%) invert(67%) sepia(96%) saturate(6%) hue-rotate(357deg) brightness(96%) contrast(87%)' }} />
                                <div className='text-textColor2 text-sm'>Thêm vào DS yêu thích</div>
                            </div>
                            <Button
                                bgButt={product.quantity === 0 ? 'disable' : 'deepPink'}
                                disabled={product.quantity === 0}
                            >
                                Thêm vào giỏ hàng
                            </Button>
                        </div>
                        <div className='flex flex-col dt:w-1/3 gap-4 py-4 px-4 dt:px-6'>
                            <div className='text-xl font-semibold'>Lợi ích khi mua hàng tại BidaHub</div>
                            <div className='flex flex-col bg-aliceBlue rounded-lg gap-5 p-6'>
                                {introBarItems.map((item) => (
                                    <div key={item.id} className='flex gap-2'>
                                        <Image alt='' src={item.icon} height={40} width={40} />
                                        <div className='flex flex-col'>
                                            <div className='font-semibold text-sm dt:text-base'>{item.header}</div>
                                            <div className='text-sm text-TextGrey'>{item.text}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col container px-2 tb:px-6 mx-auto bg-white'>
                    <div className='flex flex-col dt:flex-row p-4 gap-3 dt:gap-8 tb:p-6'>
                        <div className='flex flex-col gap-4 flex-1'>
                            <div className='text-xl tb:text-2xl font-semibold'>Thông tin sản phẩm</div>
                            <div className='text-3xl dt:text-4xl font-semibold gradient-text leading-tight'>{product.name}</div>
                        </div>
                        <div className='flex-1 p-4 dt:p-6 rounded-lg overflow-hidden bg-antiFlashWhite whitespace-pre-line'>
                            {formatDescription(product?.description)}
                        </div>
                    </div>
                </div>
                <div className='flex flex-col container px-2 tb:px-6 mx-auto bg-white'>
                    <div className='p-4 tb:p-6'>
                        <div className='flex flex-col tb:flex-row tb:items-center tb:justify-between gap-2 py-4 tb:py-6 border-b border-borderColor'>
                            <div className='flex flex-col gap-2'>
                                <div className='text-xl dt:text-2xl font-semibold'>Đánh giá sản phẩm</div>
                                <div className='text-textColor2'>{product.totalRating} đánh giá</div>
                                <Rating max={5} value={product.totalRatingPoint} readOnly size='large' />
                            </div>
                            <Button bgButt='primaryBlue' className='!min-w-[200px]'>Viết đánh giá</Button>
                        </div>
                        <RatingList />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail