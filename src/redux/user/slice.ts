import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface UserState {
  loading: boolean
  error: string | null
  token: string | null
}

const initialState: UserState = {
  loading: false,
  error: null,
  token: null
}

export const signIn = createAsyncThunk(
  'user/signIn',
  async (paramaters: {
    email: string
    password: string
  }, thunkAPI) => {
    const { data } = await axios.post(
      'http://123.56.149.216:8080/auth/login',{
        email: paramaters.email,
        password: paramaters.password
      }
    )

    return data.token
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null
      state.error = null
      state.loading = false
    }
  },
  extraReducers: {
    [signIn.pending.type]: (state) => {
      // return { ...state, loading: true }
      state.loading = true // 使用immer
    },
    [signIn.fulfilled.type]: (state, action) => {
      state.token = action.payload
      state.loading = false
      state.error = null
    },
    [signIn.rejected.type]: (state, action) => {
      state.loading = false
      state.error = action.payload
    }
  }
})
