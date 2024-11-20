'use client'

import images from '@/assets'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import React from 'react'

function Carousel() {
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [
        Autoplay({
            delay: 3000,
            stopOnInteraction: false,
            stopOnMouseEnter: true
        }),
    ])

    return (
        <div className='overflow-hidden' ref={emblaRef}>
            <div className='flex max-h-[471px]'>
                <Image priority alt='' src={images.banner1} className='fixedFlex basis-full min-w-full' />
                <Image priority alt='' src={images.banner2} className='fixedFlex basis-full min-w-full' />
            </div>
        </div>
    )
}

export default Carousel