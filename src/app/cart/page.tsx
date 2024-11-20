'use client'

import images from '@/assets'
import CartTable from '@/components/CartTable'
import Input from '@/components/Input'
import { products as fakeProducts } from '@/constants/fakedata/products'
import { shippingProviders as shippingProvidersFakeData } from '@/constants/fakedata/shippingProvider'
import ShippingProvider from '@/types/shipingProvider'
import { MenuItem, Radio, Select, SelectChangeEvent, Switch } from '@mui/material'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface State {
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    city: string,
    district: string,
    ward: string,
    detailAddress: string,
    isSaved: boolean
    shippingId: ShippingProvider['id']
}

function Cart() {

    // const products: Product[] = await ProductService.getProducts()

    const shippingProviders = shippingProvidersFakeData;

    const [state, setState] = React.useState<State>({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        city: 'none',
        district: 'none',
        ward: 'none',
        detailAddress: '',
        isSaved: false,
        shippingId: ''
    })

    const products = fakeProducts.slice(0, 5)

    const onChangeInput = React.useCallback((fieldName: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setState((prevState) => ({
            ...prevState,
            [fieldName]: e.target.value
        }));
    }, []);

    const onChangeSelect = React.useCallback((fieldName: string) => (e: SelectChangeEvent) => {
        setState((prevState) => ({
            ...prevState,
            [fieldName]: e.target.value
        }));
    }, []);

    const onChangeSwitch = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setState((prevState) => ({
            ...prevState,
            isSaved: e.target.checked
        }));
    }, []);

    const onChangeRadio = React.useCallback((item: ShippingProvider) => (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setState((prevState) => ({
                ...prevState,
                shippingId: item.id
            }));
        }
    }, []);

    return (
        <div className='container mx-auto'>
            <div className='px-2 py-6 tb:px-6 container mx-auto inline-flex items-center'>
                <Link className='text-sm font-medium text-TextGrey hover:underline' href='/'>Home</Link>
                <Image
                    alt=''
                    src={images.rightArrow}
                    className=''
                    style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(11%) saturate(271%) hue-rotate(179deg) brightness(92%) contrast(91%)' }}
                />
                <div className='text-sm font-medium text-TextGrey'>Giỏ hàng</div>
            </div>
            <div className='flex flex-col gap-6 dt:flex-row tb:px-8'>
                <div className='dt:w-8/12 flex flex-col gap-4'>
                    <div className='p-4 text-2xl font-semibold tb:text-3xl'>Giỏ hàng</div>
                    <div className='w-full bg-white p-4 rounded-lg'>
                        <CartTable cartProducts={products} />
                    </div>
                    <div className='p-4 text-2xl font-semibold tb:text-3xl'>Thông tin thanh toán</div>
                    <div className='w-full bg-white rounded-lg'>
                        <div className='p-4 text-lg font-semibold border-b border-borderColor border-solid'>Thông tin vận chuyển</div>
                        <div className='p-4 flex flex-col gap-4'>
                            <div className='flex flex-col tb:flex-row gap-4'>
                                <Input placeholder='Họ *' value={state.firstName} onChange={onChangeInput('firstName')} />
                                <Input placeholder='Tên *' value={state.lastName} onChange={onChangeInput('lastName')} />
                            </div>
                            <Input placeholder='Số điện thoại *' value={state.phone} onChange={onChangeInput('phone')} />
                            <Input placeholder='Email *' value={state.email} onChange={onChangeInput('email')} />
                            <div className='flex flex-col tb:flex-row gap-4'>
                                <Select className='tb:!w-1/3' value={state.city} onChange={onChangeSelect('city')}>
                                    <MenuItem value="none" disabled className='!hidden'>
                                        Chọn thành phố
                                    </MenuItem>
                                    <MenuItem value='1'>1</MenuItem>
                                </Select>
                                <Select className='tb:!w-1/3' value={state.district} onChange={onChangeSelect('district')}>
                                    <MenuItem value="none" disabled className='!hidden'>
                                        Chọn quận
                                    </MenuItem>
                                </Select>
                                <Select className='tb:!w-1/3' value={state.ward} onChange={onChangeSelect('ward')}>
                                    <MenuItem value="none" disabled className='!hidden'>
                                        Chọn phường
                                    </MenuItem>
                                </Select>
                            </div>
                            <Input placeholder='detailAddress *' value={state.detailAddress} onChange={onChangeInput('email')} />
                            <div className='flex gap-2 items-center'>
                                <Switch checked={state.isSaved} onChange={onChangeSwitch} />
                                <div className='text-sm font-medium'>Lưu vào địa chỉ để thanh toán cho những đơn hàng sau!</div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full bg-white rounded-lg'>
                        <div className='p-4 text-lg font-semibold border-b border-borderColor border-solid'>Đơn vị vận chuyển</div>
                        <div className='p-4'>
                            {shippingProviders.map((item) => {
                                return (
                                    <div
                                        className={classNames({
                                            'p-4 flex gap-3 items-center border border-solid border-borderColor cursor-pointer rounded-lg': true,
                                        })}
                                        key={item.id}
                                    >
                                        <Image alt='' src={item.icon} className='max-h-[32px] max-w-[32px]' width={32} height={32} />
                                        <div className='flex flex-col gap-1'>
                                            <div className='font-semibold'>{item.name}</div>
                                            <ul className='list-disc list-inside text-silver text-sm gap-1'>
                                                {item.description.map((description) => (
                                                    <li key={description}>{description}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className='flex-1' />
                                        <Radio onChange={onChangeRadio(item)} checked={item.id === state.shippingId} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className='dt:w-4/12'>a</div>
            </div>
        </div>
    )
}

export default Cart