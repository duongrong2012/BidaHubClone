import images from '@/assets'
import classNames from 'classnames'
import Image from 'next/image'

export const introBarItems = [{
    id: 'truck',
    icon: images.fillTruck,
    header: "Vận chuyển 0đ",
    text: "cho tất cả đơn hàng"
}, {
    id: 'shieldCheck',
    icon: images.fillShield,
    header: "Chế độ bảo hành",
    text: "từ 12 tháng"
}, {
    id: 'support',
    icon: images.fillPhone,
    header: "Hỗ trợ trực tuyến",
    text: "từ 8:00 - 21.00 hằng ngày"
}, {
    id: 'verified2',
    icon: images.fillVerify,
    header: "Chính hãng",
    text: "cam kết 100% chính hãng"
},]

function IntroBar() {
    return (
        <div className="relative w-full px-10 py-6 bg-LightPrimaryHover">
            <div className='flex gap-[60px] overflow-x-auto whitespace-nowrap no-scrollbar'>
                {introBarItems.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className={classNames({
                                'flex gap-2 pr-[75px] flex-1': true,
                                'border-r border-borderColor': item.id !== 'verified2'
                            })}
                        >
                            <Image alt='' src={item.icon} width={40} height={40} />
                            <div className='flex flex-col'>
                                <div>{item.header}</div>
                                <div className='text-sm text-TextGrey'>{item.text}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default IntroBar