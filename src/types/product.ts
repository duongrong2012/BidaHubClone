import ProductImage from "./productImage";
import ProductOption from "./productOption";

export default interface Product {
    id: string
    name: string,
    images: ProductImage[],
    price: number,
    discountPrice: number,
    totalRatingPoint: number,
    totalRating: number,
    quantity: number,
    sku: string,
    authentic: boolean,
    options: ProductOption[],
    description: string
}