import images from "@/assets";
import ShippingProvider from "@/types/shipingProvider";

export const shippingProviders: ShippingProvider[] = [
    {
        id: 'donvi1',
        icon: images.shippingProviderLogo,
        name: 'Vận chuyển 247 Express',
        description: ['Nội thành HCM: 1 ngày', 'Ngoại thành: 1-2 ngày', 'Các tỉnh miền Trung: 3-4 ngày', 'Các tỉnh miền Bắc: 5-6 ngày'],
        isEnable: true
    },
    {
        id: 'donvi2',
        icon: images.shippingProviderLogo,
        name: 'Vận chuyển 247 Express',
        description: ['Nội thành HCM: 1 ngày', 'Ngoại thành: 1-2 ngày', 'Các tỉnh miền Trung: 3-4 ngày', 'Các tỉnh miền Bắc: 5-6 ngày'],
        isEnable: false
    },
]