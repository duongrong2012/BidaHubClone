import Product from '@/types/product'
import Image from 'next/image'
import React from 'react'
import QuantitySelector from '../QuantitySelector'
import Button from '../Button'
import images from '@/assets'

interface Props {
    cartProducts: Product[]
}

function CartTable({
    cartProducts
}: Props
) {
    return (
        <table className='border-collapse border-spacing-4 w-full'>
            <thead>
                <tr>
                    <th className='p-3 font-semibold text-start'>Sản phẩm</th>
                    <th className='p-3 hidden tb:table-cell font-semibold'>Giá</th>
                    <th className='p-3 hidden tb:table-cell font-semibold'>Số lượng</th>
                    <th className='p-3 hidden tb:table-cell font-semibold'>Tổng</th>
                </tr>
            </thead>
            <tbody>
                {cartProducts.map((item) => (
                    <tr className="gap-4 rounded-lg border-b border-solid border-borderColor" key={item.id}>
                        <td className='flex p-3 flex-row gap-4 items-center'>
                            <Image alt='' src={item.images[0].url} className='max-w-[72px] max-h-[72px]' width={72} height={72} />
                            <div className='flex flex-col justify-between gap-3'>
                                <div className='line-clamp-2 text-ellipsis'>{item.name}</div>
                                <div className='tb:hidden'>Giá : {item.price}&nbsp;₫</div>
                                <div className='tb:hidden'>
                                    <QuantitySelector quantityStock={item.quantity} />
                                </div>
                                <div className='tb:hidden'>Tổng : {item.price}&nbsp;₫</div>
                                <div className='flex gap-4'>
                                    <Button bgButt='grey' className='!min-w-0 !w-9 !h-9 !p-0 !border-0'>
                                        <Image alt='' src={images.blackHeart} width={24} height={24} />
                                    </Button>
                                    <Button bgButt='grey' className='!min-w-0 !w-9 !h-9 !p-0 !border-0'>
                                        <Image alt='' src={images.trash} width={24} height={24} />
                                    </Button>
                                </div>
                            </div>
                        </td>
                        <td className='hidden p-3 tb:table-cell'>{item.price}&nbsp;₫</td>
                        <td className='hidden p-3 tb:table-cell'>
                            <QuantitySelector quantityStock={item.quantity} />
                        </td>
                        <td className='hidden p-3 tb:table-cell'>{item.price}&nbsp;₫</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default CartTable