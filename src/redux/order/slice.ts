import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { checkout } from '../shoppingCart/slice'

interface OrderState {
  loading: boolean
  error: string | null
  currentOrder: any
}

const initialState: OrderState = {
  loading: false,
  error: null,
  currentOrder: null
}

export const placeOrder = createAsyncThunk(
  'order/placeOrder',
  async (parameters: { jwt: string, orderId: string }, thunkAPI) => {
    const { data } = await axios.post(
        `http://123.56.149.216:8080/api/orders/${parameters.orderId}/placeOrder`,
        null,
        {
          headers: {
            Authorization: `bearer ${parameters.jwt}`
          }
        }
      )

    return data
  }
)

export const orderSlice = createSlice({
  name: 'productDetail',
  initialState,
  reducers: {
  },
  extraReducers: {
    [placeOrder.pending.type]: (state) => {
      // return { ...state, loading: true }
      state.loading = true // 使用immer
    },
    [placeOrder.fulfilled.type]: (state, action) => {
      state.currentOrder = action.payload
      state.loading = false
      state.error = null
    },
    [placeOrder.rejected.type]: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    [checkout.pending.type]: (state) => {
      // return { ...state, loading: true }
      state.loading = true // 使用immer
    },
    [checkout.fulfilled.type]: (state, action) => {
      state.currentOrder = action.payload
      state.loading = false
      state.error = null
    },
    [checkout.rejected.type]: (state, action) => {
      state.loading = false
      state.error = action.payload
    }
  }
})
