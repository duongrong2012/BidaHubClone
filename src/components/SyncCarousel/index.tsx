'use client'

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import ProductImage from '@/types/productImage';
import Image from 'next/image';
import Button from '../Button';
import images from '@/assets';
import useCalculatedItemWidth from '@/hooks/useCalculatedItemWidth';
import classNames from 'classnames';

interface Props {
  ImageProp: ProductImage[]
}

const SyncCarousel = ({ ImageProp }: Props) => {
  const [mainEmblaRef, mainEmblaApi] = useEmblaCarousel();

  const [thumbEmblaRef, thumbEmblaApi] = useEmblaCarousel({
    // loop: true,
    align: 'start',
    containScroll: 'keepSnaps',
    dragFree: true,
  });
  const containerRef = React.useRef<HTMLDivElement | null>(null)

  const [selectedIndex, setSelectedIndex] = useState(0);

  const gap = 20

  const itemWidth = useCalculatedItemWidth(containerRef, gap)

  const combinedRef = (node: HTMLElement | null) => {
    if (node) {
      thumbEmblaRef(node) // Kết nối emblaRef với node để khởi tạo carousel
      containerRef.current = node as HTMLDivElement // Gán node cho containerRef với kiểu HTMLDivElement
    }
  };

  // Đồng bộ main carousel khi click vào thumbnail
  const onThumbClick = useCallback(
    (index: number) => {
      if (!mainEmblaApi || !thumbEmblaApi) return;
      mainEmblaApi.scrollTo(index);
    },
    [mainEmblaApi, thumbEmblaApi]
  );

  // Đồng bộ thumbnail khi main carousel thay đổi
  const syncThumbs = useCallback(() => {
    if (!mainEmblaApi || !thumbEmblaApi) return;
    const index = mainEmblaApi.selectedScrollSnap();

    setSelectedIndex(index);

    thumbEmblaApi.scrollTo(index);
  }, [mainEmblaApi, thumbEmblaApi]);

  React.useEffect(() => {
    if (!mainEmblaApi || !thumbEmblaApi) return;
    mainEmblaApi.on('select', syncThumbs);
  }, [mainEmblaApi, syncThumbs, thumbEmblaApi]);

  return (
    <div className="flex flex-col dt:w-1/3">
      {/* Main Carousel */}
      <div className="w-full overflow-hidden" ref={mainEmblaRef}>
        <div className="flex w-full">
          {ImageProp.map((item) => (
            <div
              className="w-full relative fixedFlex aspect-w-1 aspect-h-1 scale-90 hover:scale-100 transition-all"
              key={item.id}
            >
              <Image src={item.url} alt='' fill />
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-row justify-end'>
        <Button bgButt='primaryBlue' className='!min-w-0 !p-2'>
          <Image alt='' src={images.leftArrow} width={32} height={32} style={{ filter: 'brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(334deg) brightness(106%) contrast(101%)' }} />
        </Button>
        <Button bgButt='primaryBlue' className='!min-w-0 !p-2'>
          <Image alt='' src={images.rightArrow} width={32} height={32} style={{ filter: 'brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(334deg) brightness(106%) contrast(101%)' }} />
        </Button>
      </div>
      {/* Thumbnails Carousel */}
      <div className="w-full overflow-hidden my-4 tb:my-8" ref={combinedRef}>
        <div className="flex w-full">
          {ImageProp.map((item, index) => (
            <div
              className={classNames({
                'w-full mx-[10px] relative fixedFlex border border-borderColor': true,
                '!border-primary': index === selectedIndex
              })}
              key={item.id}
              style={{ width: itemWidth, height: itemWidth }}
              onClick={() => onThumbClick(index)}
            >
              <Image src={item.url} alt='' fill />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SyncCarousel;
