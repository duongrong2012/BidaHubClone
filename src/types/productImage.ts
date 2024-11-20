import { StaticImageData } from "next/image";

export default interface ProductImage {
    id: string,
    url: string | StaticImageData,
    productId: string
}