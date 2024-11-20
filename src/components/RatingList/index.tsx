import images from '@/assets'
import { ratings as fakeRating } from '@/constants/fakedata/ratings'
import { Rating } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Button from '../Button'

const ratings = fakeRating

function RatingList() {
    return (
        <div className='text-textColor2 flex flex-col gap-6 py-6'>
            {ratings.map((item) => (
                <div
                    key={item.id}
                    className='flex gap-4'
                >
                    <Image alt='' src={images.defaultAvatar} className='rounded-full max-h-fit' width={48} height={48} />
                    <div className='flex flex-col gap-4 flex-1'>
                        <div className='flex justify-between items-center'>
                            <div className='flex flex-col'>
                                <div className='text-sm font-semibold'>{item.user.lastName} {item.user.firstName}</div>
                                <Rating max={5} value={item.rating} readOnly size='medium' />
                            </div>
                            <div className='text-TextGrey text-xs'>{item.createdAt}</div>
                        </div>
                        <div className='text-xl font-semibold'>{item.title}</div>
                        <div className='text-TextGrey'>{item.comment}</div>
                        <div className='text-sm mt-4'>Bạn có thấy đánh giá này hữu ích không?</div>
                        <div className='flex gap-3'>
                            <Button bgButt='outline' className='!border-primary'>
                                <Image alt='' src={images.like} width={24} height={24} />
                                <div>Có ({item.totalLike.length})</div>
                            </Button>
                            <Button bgButt='outline' className='!border-primary'>
                                <Image alt='' src={images.dislike} width={24} height={24} />
                                <div>Không ({item.totalDisLike.length})</div>
                            </Button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RatingList