import React from 'react'
import { useParams } from 'react-router-dom'

import styles from './SearchPage.module.css'
import {
  Header,
  Footer,
  FilterArea,
  ProductList
} from '../../components'

type MatchParams = {
  keywords: string
}

export const SearchPage: React.FC = () => {
  const params = useParams<MatchParams>()

  return <>
    <Header />
    <div className={styles['page-content']}>
      {/* 分类过滤器 */}
      <div className={styles['product-list-container']}>
        <FilterArea />
      </div>
      {/* 产品列表 */}
      <div className={styles['product-list-container']}>
        <ProductList />
      </div>
    </div>
    <Footer />
  </>
}
