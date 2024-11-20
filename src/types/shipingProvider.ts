import { StaticImageData } from "next/image"

export default interface ShippingProvider {
    id: string;
    name: string;
    icon: StaticImageData;
    description: string[];
    isEnable: boolean
}
