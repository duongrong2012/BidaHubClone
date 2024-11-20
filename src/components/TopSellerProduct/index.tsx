'use client'

import images from '@/assets'
import { Button as MuiButton } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import ProductCard from '../ProductCard'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Product from '@/types/product'
import useCalculatedItemWidth from '@/hooks/useCalculatedItemWidth'

interface Props {
    products: Product[]
}

function TopSellerProduct({
    products
}: Props) {

    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [
        // Autoplay({ delay: 3000 }),
    ])

    const containerRef = React.useRef<HTMLDivElement | null>(null)

    const gap = 20

    const itemWidth = useCalculatedItemWidth(containerRef, gap)

    const combinedRef = (node: HTMLElement | null) => {
        if (node) {
            emblaRef(node) // Kết nối emblaRef với node để khởi tạo carousel
            containerRef.current = node as HTMLDivElement // Gán node cho containerRef với kiểu HTMLDivElement
        }
    };


    return (
        <div className='bg-DeepPink px-4 tb:px-8 flex flex-col py-4 gap-4 container mx-auto dt:py-6'>
            <div className='flex mx-auto w-full justify-between'>
                <div className='flex items-center gap-2'>
                    <Image alt='' src={images.thunder} width={24} height={24} />
                    <div className='text-xl dt:text-2xl font-semibold text-white'>Sản phẩm bán chạy</div>
                </div>
                <div className='hidden dt:flex gap-4'>
                    <MuiButton
                        sx={{
                            backgroundColor: 'white',
                            width: '2.25rem',
                            height: '2.25rem',
                            borderRadius: '0.5rem',
                            padding: '0px',
                            minWidth: '0px',
                            cursor: 'poiter'
                        }}
                    >
                        <Image alt='' src={images.leftArrow} width={28} height={28} />
                    </MuiButton>
                    <MuiButton
                        sx={{
                            backgroundColor: 'white',
                            width: '2.25rem',
                            height: '2.25rem',
                            borderRadius: '0.5rem',
                            padding: '0px',
                            minWidth: '0px',
                            cursor: 'poiter'
                        }}
                    >
                        <Image alt='' src={images.rightArrow} width={28} height={28} />
                    </MuiButton>
                </div>
            </div>
            <div className="w-full overflow-hidden" ref={combinedRef}>
                <div className='flex w-full'>
                    {products.map((item) => (
                        <ProductCard key={item.id}
                            product={item}
                            className="mx-[10px]"
                            style={{ width: itemWidth }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TopSellerProduct