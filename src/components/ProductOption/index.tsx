'use client'

import ProductOptionType from '@/types/productOption';
import classNames from 'classnames';
import useEmblaCarousel from 'embla-carousel-react';
import React from 'react'

interface Props {
    productOption: ProductOptionType
}

interface State {
    selectedValue: string | null
}

function ProductOption({
    productOption
}: Props) {

    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' });

    const [state, setState] = React.useState<State>({
        selectedValue: null
    })

    const onClickProductOption = React.useCallback((item: string) => () => {
        setState((prevState) => ({
            ...prevState,
            selectedValue: item
        }));
    }, []);

    return (
        <div className='w-full'>
            <div className='text-textColor2 font-semibold mb-5'>{productOption.name}</div>
            <div className="w-full overflow-hidden" ref={emblaRef}>
                <div className="flex w-full">
                    {productOption.value.map((item, index) => (
                        <div
                            className={classNames({
                                'mr-4 px-3 py-2 text-textColor2 rounded-lg fixedFlex border border-borderColor cursor-pointer': true,
                                '!bg-primary text-white': item === state.selectedValue
                            })}
                            key={index}
                            onClick={onClickProductOption(item)}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductOption