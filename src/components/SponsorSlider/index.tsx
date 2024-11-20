'use client'

import images from '@/assets';
import useCalculatedItemWidth from '@/hooks/useCalculatedItemWidth';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import React from 'react'

const sponsorList = [
    {
        id: 'sponsor1',
        image: images.sponsorLogo1
    },
    {
        id: 'sponsor2',
        image: images.sponsorLogo2
    },
    {
        id: 'sponsor3',
        image: images.sponsorLogo3
    },
    {
        id: 'sponsor4',
        image: images.sponsorLogo4
    },
    {
        id: 'sponsor5',
        image: images.sponsorLogo5
    },
    {
        id: 'sponsor6',
        image: images.sponsorLogo5
    },
    {
        id: 'sponsor7',
        image: images.sponsorLogo5
    },
]

function SponsorSlider() {
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [
        Autoplay({
            delay: 3000,
            stopOnInteraction: false,
            stopOnMouseEnter: true
        }),
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
        <div className='overflow-hidden mt-8' ref={combinedRef}>
            <div className='flex w-full'>
                {sponsorList.map((item) => (
                    <div style={{ width: itemWidth }} className='bg-white fixedFlex rounded-md p-2 mx-[10px]' key={item.id}>
                        <Image priority alt='' src={item.image} className='' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SponsorSlider