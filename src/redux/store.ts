import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/user'
import products from './slices/products'
import navbar from './slices/navbar'
import rootSaga, { sagaMiddleware } from './sagas'

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        products: products.reducer,
        navbar: navbar.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export type ReduxState = ReturnType<typeof store.getState>;

export default store