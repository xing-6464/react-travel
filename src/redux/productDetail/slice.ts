import { createSlice } from '@reduxjs/toolkit'

interface ProductDetailState {
  loading: boolean
  error: string | null
  data: any
}

const initialState: ProductDetailState = {
  loading: true,
  error: null,
  data: null
}

export const productDetailSlice = createSlice({
  name: 'productDetail',
  initialState,
  reducers: {
    fetchStart: (state) => {
      // return { ...state, loading: true }
      state.loading = true // 使用immer
    },
    fetchSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    fetchFail: (state, action) => {
      state.loading = false
      state.error = action.payload
    }
  }
})
