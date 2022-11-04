import { Middleware } from 'redux'

export const actionLog: Middleware = (store) => (next) => (action) => {
  console.log('当前 state', store.getState())
  console.log('fire state', action)
  next(action)
  console.log('更新 state', store.getState())
}