const CategoryService = {
    getCategories: async () => {
        const response = await fetch('http://localhost:3000/api/categories', { cache: 'force-cache', next: { tags: ['categories'] } })

        return response.json()
    }
}

export default CategoryService;