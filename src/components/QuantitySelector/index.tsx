'use client'

import images from '@/assets'
import Product from '@/types/product'
import Image from 'next/image'
import React from 'react'
import Button from '../Button'
import classNames from 'classnames'

interface Props {
    quantityStock: Product['quantity']
}

interface State {
    quantitySelector: number
}

function QuantitySelector({
    quantityStock
}: Props) {

    const [state, setState] = React.useState<State>({
        quantitySelector: 1
    })

    const isDisableMinusButt = React.useMemo(() => {
        return quantityStock === 0 || state.quantitySelector === 1
    }, [quantityStock, state.quantitySelector]);

    const isDisablePlusButt = React.useMemo(() => {
        return quantityStock === 0 || quantityStock <= state.quantitySelector
    }, [quantityStock, state.quantitySelector]);

    const onClickMinusButt = React.useCallback(() => {
        setState((prevState) => ({
            ...prevState,
            quantitySelector: prevState.quantitySelector - 1
        }));
    }, []);

    const onClickPlusButt = React.useCallback(() => {
        setState((prevState) => ({
            ...prevState,
            quantitySelector: prevState.quantitySelector + 1
        }));
    }, []);

    return (
        <div className='border rounded-lg p-3 h-12 flex absoluteCenter max-w-fit gap-2'>
            <Button
                className={classNames({
                    '!min-w-0 !p-0 !border-0 !max-h-fit': true,
                    'opacity-25 !hover:cursor-not-allowed': isDisableMinusButt
                })}
                disabled={isDisableMinusButt}
                onClick={onClickMinusButt}
            >
                <Image alt='' src={images.minus} width={28} height={28} />
            </Button>
            <div className='w-15 min-w-[30px] text-center'>{state.quantitySelector}</div>
            <Button
                className={classNames({
                    '!min-w-0 !p-0 !border-0 !max-h-fit': true,
                    'opacity-25 !cursor-not-allowed': isDisablePlusButt
                })}
                disabled={isDisablePlusButt}
                onClick={onClickPlusButt}
            >
                <Image alt='' src={images.plus} width={28} height={28} />
            </Button>
        </div>
    )
}

export default QuantitySelector