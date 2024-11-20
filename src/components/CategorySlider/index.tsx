'use client'

import images from '@/assets'
import useCalculatedItemWidth from '@/hooks/useCalculatedItemWidth'
import Category from '@/types/category'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import React from 'react'

interface Props {
    category: Category[]
}

function CategorySlider({
    category
}: Props) {
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' })

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
        <div className="relative container w-full overflow-hidden py-6" ref={combinedRef}>
            <div className='flex w-full'>
                {category.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className='flex mx-[10px] fixedFlex gap-2 px-3 py-[10px] tb:px-4 tb:py-2 bg-white justify-between rounded-lg'
                            style={{ width: itemWidth }}
                        >
                            <div className='flex flex-col w-[165px]'>
                                <div>{item.name}</div>
                                <div className='text-sm text-TextGrey'>{item.productCount} sản phẩm</div>
                            </div>
                            <Image alt='' src={images.billiards} height={48} width={48} />
                            {/* <div className='w-full relative pt-[100%] fixedFlex'>
                                <Image alt='' src={images.billiards} fill />
                            </div> */}
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default CategorySlider