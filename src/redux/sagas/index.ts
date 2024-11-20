import { all, fork } from 'redux-saga/effects'
import { userSaga } from './user'
import products from './products'
import createSagaMiddleware from 'redux-saga'


export default function* rootSaga() {
    //kết hợp yield all + fork để đảm bảo tất cả saga được chạy cùng 1 lúc và không cần phải đợi nhau
    yield all([
        fork(userSaga),
        fork(products),
    ])
}

export const sagaMiddleware = createSagaMiddleware()