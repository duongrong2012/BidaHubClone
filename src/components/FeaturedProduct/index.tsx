'use client'

import Product from '@/types/product'
import React from 'react'
import ProductCard from '../ProductCard'
import useCalculatedItemWidth from '@/hooks/useCalculatedItemWidth'

interface Props {
    products: Product[]
}

function FeaturedProduct({
    products
}: Props) {

    const containerRef = React.useRef<HTMLDivElement | null>(null)

    const gap = 20

    const itemWidth = useCalculatedItemWidth(containerRef, gap)

    return (
        <div className='mt-6'>
            <div className='text-xl lg:text-2xl leading-normal my-4'>Sản phẩm nổi bật</div>
            <div className='flex w-full flex-wrap gap-5' ref={containerRef}>
                {products.map((item) => (
                    <ProductCard key={item.id} product={item} style={{ width: itemWidth }} />
                ))}
            </div>
        </div>
    )
}

export default FeaturedProduct