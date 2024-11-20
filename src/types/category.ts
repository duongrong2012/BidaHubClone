// export default interface Category {
//     id: string,
//     name: string,
//     productCount: number,
//     image: string,
//     parentCategory: string
// }

//cach 2
export default interface Category {
    id: string,
    name: string,
    productCount: number,
    image: string,
    childCategories?: Category[]
}