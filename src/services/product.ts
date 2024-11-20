import Product from "@/types/product"

const ProductService = {
    getProducts: async () => {
        const response = await fetch('http://localhost:3000/api/products', { cache: 'force-cache', next: { tags: ['products'] } })

        return response.json()
    },
    getProductDetails: async (id: Product['id']) => {
        const response = await fetch(`http://localhost:3000/api/products/${id}`)

        return response.json()
    },
}

export default ProductService;