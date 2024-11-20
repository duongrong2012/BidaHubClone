import firestore from "@/firebase/firestore";
import Product from "@/types/product";
import { collection, getDoc, getDocs } from "firebase/firestore";

export async function GET() {
    try {
        const results = await getDocs(collection(firestore, 'products'));

        const products: Product[] = [];

        for (let i = 0; i < results.docs.length; i++) {
            const item = results.docs[i];

            const productItem = {
                ...item.data() as object,
                id: item.id,
            } as Product;

            for (let j = 0; j < productItem.images.length; j++) {
                const imageItem = productItem.images[j];

                const refData = await getDoc(imageItem);

                productItem.images[j] = {
                    id: refData.id,
                    url: refData.data().url,
                    productId: productItem.id
                }
            }

            products.push(productItem);
        }

        return Response.json(products);
    } catch (error) {
        console.log('error ', error);

        return Response.json([]);
    }
}