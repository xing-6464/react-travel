import React from 'react'
import ReactDOM from 'react-dom/client'

import 'antd/dist/antd.min.css'
import './i18n/configs'
import { Provider } from 'react-redux'
import axios from 'axios'

import store from './redux/store'
import App from './App'
import './index.css'

axios.defaults.headers['x-icode'] = '66AD1A8D605F606C'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
