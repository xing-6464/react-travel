import { combineReducers, configureStore } from '@reduxjs/toolkit'

import languageReducer from './language/languageReducer'
import recommendProductsReducer from './recommendProducts/recommendProductsReducer'
import {
  actionLog,
  changeLanguage
} from './middlewares/index'
import { productDetailSlice } from './productDetail/slice'

const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer,
  productDetail: productDetailSlice.reducer
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(actionLog, changeLanguage),
  devTools: true
})
// const store = createStore(rootReducer, applyMiddleware(thunk, actionLog, changeLanguage))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
