import React from 'react'

import { Row, Col, Typography } from 'antd'
import { withTranslation, WithTranslation } from 'react-i18next'

import {
  Header,
  Footer,
  SideMenu,
  Carousel,
  ProductCollection,
  BusinessPartners
} from '../../components/index'
import styles from './HomePage.module.css'
import { productList1, productList2, productList3 } from './mockups'
import sideImage from '../../assets/images/sider_2019_12-09.png'
import sideImage2 from '../../assets/images/sider_2019_02-04.png'
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png'
import { t } from 'i18next'

class HomePageComponent extends React.Component<WithTranslation> {
  render (): JSX.Element {
    console.log(this.props.t)
    return (
      <>
        <Header />
        {/* 页面的content */}
        <div className={styles['page-content']}>
          <Row style={{ marginTop: 20 }}>
            <Col span={6}>
              <SideMenu />
            </Col>
            <Col span={18}>
              <Carousel />
            </Col>
          </Row>
          <ProductCollection
            title={<Typography.Title level={3} type='warning'>{t('home_page.hot_recommended')}</Typography.Title>}
            sideImage={sideImage}
            products={productList1}
          />
          <ProductCollection
            title={<Typography.Title level={3} type='warning'>{t('home_page.new_arrival')}</Typography.Title>}
            sideImage={sideImage2}
            products={productList2}
          />
          <ProductCollection
            title={<Typography.Title level={3} type='warning'>{t('home_page.domestic_travel')}</Typography.Title>}
            sideImage={sideImage3}
            products={productList3}
          />
        </div>
        <BusinessPartners />
        <Footer />
      </>
    )
  }
}

export const HomePage = withTranslation()(HomePageComponent)
