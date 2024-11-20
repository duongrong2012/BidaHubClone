import Product from "./product";
import User from "./user";

export default interface Rating {
    id: string
    user: User
    product: Product
    rating: number
    title: string
    comment: string
    createdAt: string
    totalLike: User['id'][]
    totalDisLike: User['id'][]
}