import firestore from "@/firebase/firestore";
import Category from "@/types/category";
import { collection, getDoc, getDocs } from "firebase/firestore";

export async function GET() {
    try {
        const results = await getDocs(collection(firestore, 'categories'));

        const categories: Category[] = [];

        for (let i = 0; i < results.docs.length; i++) {
            const item = results.docs[i];

            if (!item.get('childCategories')) continue;

            const categoryItem = {
                ...item.data() as object,
                id: item.id,
            } as Category;

            if (categoryItem.childCategories) {
                for (let j = 0; j < categoryItem.childCategories.length; j++) {
                    const childCategoryItem = categoryItem.childCategories[j];

                    const refCategory = await getDoc(childCategoryItem);

                    categoryItem.childCategories[j] = {
                        ...refCategory.data() as object,
                        id: refCategory.id,
                    } as Category;
                }
            }

            categories.push(categoryItem);
        }

        return Response.json(categories)
    } catch (error) {
        console.log('error ', error);

        return Response.json([]);
    }
}