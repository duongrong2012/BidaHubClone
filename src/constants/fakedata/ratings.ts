import Rating from "@/types/rating";
import { products } from "./products";
import { users } from "./user";

export const ratings: Rating[] = [
    {
        id: 'rating1',
        user: users[0],
        product: products[0],
        comment: 'sản phẩm rất tốt',
        title: 'Sản phẩm tốt',
        rating: 4,
        createdAt: '1 days ago',
        totalLike: [users[0].id],
        totalDisLike: [users[0].id]
    },
    {
        id: 'rating2',
        user: users[0],
        product: products[0],
        comment: 'sản phẩm rất tốt',
        title: 'Sản phẩm tốt',
        rating: 4,
        createdAt: '1 days ago',
        totalLike: [users[0].id],
        totalDisLike: [users[0].id]
    },
]