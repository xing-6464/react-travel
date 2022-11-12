import React from 'react'

import { Row, Col } from 'antd'

import {
  CheckOutCard,
  PaymentForm
} from '../../components'
import { MainLayout } from '../../layouts/mainLayout'

export const PlaceOrderPage: React.FC = () => {
  return (
    <MainLayout>
      <Row>
        <Col span={12}>
          <PaymentForm />
        </Col>
        <Col span={12}>
          {/* <CheckOutCard /> */}
        </Col>
      </Row>
    </MainLayout>
  )
}
