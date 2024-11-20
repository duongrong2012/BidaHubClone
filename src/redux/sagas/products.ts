import { put, SagaReturnType, takeLeading } from "redux-saga/effects";
import { ProductsActions } from "../slices/products";
import { collection, getDocs } from "firebase/firestore";
import firestore from "@/firebase/firestore";
import Product from "@/types/product";

function* getProducts() {
    try {
        const results: SagaReturnType<typeof getDocs> = yield getDocs(collection(firestore, 'products'));

        const products: Product[] = [];

        for (let i = 0; i < results.docs.length; i++) {
            const item = results.docs[i];

            const productItem = {
                ...item.data() as object,
                id: item.id,
            } as Product;

            products.push(productItem);
        }

        console.log('products ', products);


        yield put(ProductsActions.getProductsSuccess(products));
    } catch {
        yield put(ProductsActions.getProductsFailure());
    }
}

export default function* product() {
    yield takeLeading(ProductsActions.getProducts.type, getProducts);
}