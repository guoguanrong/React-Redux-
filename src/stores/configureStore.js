import { createStore }  from 'redux';
import rootReducer from '../reducers';
// rootReducer是规则函数
// 根据rootReducer规则函数生成store
export default function configureStore() {
    const store = createStore(rootReducer)
    return store
}
