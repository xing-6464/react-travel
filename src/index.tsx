import React from 'react'
import ReactDOM from 'react-dom/client'

import 'antd/dist/antd.min.css'
import { Spin } from 'antd'
import './i18n/configs'
import { Provider } from 'react-redux'
import axios from 'axios'
import { PersistGate } from 'redux-persist/integration/react'

import rootStore from './redux/store'
import App from './App'
import './index.css'

axios.defaults.headers['x-icode'] = '66AD1A8D605F606C'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={rootStore.store}>
      <PersistGate loading={<Spin />} persistor={rootStore.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
