import images from '@/assets'
import Image from 'next/image'
import React from 'react'

function Footer() {
    return (
        <div className='bg-white'>
            <div className='flex flex-col gap-4 dt:flex-row container mx-auto font-medium p-8 mt-8'>
                <div className='flex flex-col dt:flex-1 gap-3'>
                    <Image alt='' src={images.logo} className='w-full' />
                    <div className='font-semibold text-2xl my-5'>Hộ kinh doanh BidaHub</div>
                    <div>Địa chỉ trụ sở kinh doanh: RG.B-09.21 (Officeted) Tầng 9, Tháp B, Chung cư Rivergate Residence, 151 - 155 Bến Văn Đồn, Phường 6, Quận 4, TP.HCM</div>
                    <div>Mã số thuế : 8856137401-001</div>
                    <div>Điện thoại : 0949.696.696</div>
                    <div>Email : support@bidahub.com</div>
                </div>
                <div className='flex flex-col gap-3 dt:pl-10 dt:flex-1'>
                    <div className='font-semibold text-2xl'>Khách hàng</div>
                    <div>&gt; Liên hệ</div>
                    <div>&gt; Chính sách & Quy định chung</div>
                    <div>&gt; Chính sách bảo mật thông tin</div>
                    <div>&gt; Chính sách đổi/trả và hoàn tiền</div>
                </div>
                <div className='flex flex-col gap-4 dt:flex-1'>
                    <div>Tham gia BidaHub trên ứng dụng Zalo, mua sắm đơn giản và nhiều ưu đãi độc quyền chỉ có tại Zalo Mini App</div>
                    <div className='text-sm'>Quét màn QR bên dưới trên ứng dụng Zalo để bắt đầu</div>
                    <div className='flex items-center gap-3'>
                        <Image alt='' src={images.benefitLogo} className='fixedFlex' />
                        <div className='hidden dt:flex-1' />
                        <Image alt='' src={images.QR} className='fixedFlex' width={80} height={80} />
                    </div>
                    <div className='flex gap-4'>
                        <Image alt='' src={images.footerLogo1} />
                        <Image alt='' src={images.footerLogo2} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer