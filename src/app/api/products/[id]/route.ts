import firestore from "@/firebase/firestore";
import Product from "@/types/product";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {

        const docRef = doc(firestore, 'products', (await params).id)

        const results = await getDoc(docRef);

        const productItem = {
            ...results.data() as object,
            id: results.id,
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

        for (let j = 0; j < productItem.options.length; j++) {
            const productOptionItem = productItem.options[j];

            const refData = await getDoc(productOptionItem);

            productItem.options[j] = {
                id: refData.id,
                ...refData.data() as object,
            } as Product['options'][0]
        }

        return Response.json(productItem);
    } catch (error) {
        console.log('error ', error);

        return Response.json(null);
    }
}