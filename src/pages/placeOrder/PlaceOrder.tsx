import React from 'react'

import { Row, Col } from 'antd'

import {
  CheckOutCard,
  PaymentForm
} from '../../components'
import { MainLayout } from '../../layouts/mainLayout'
import { useSelector, useAppDispatch } from '../../redux/hooks'
import { placeOrder } from '../../redux/order/slice'

export const PlaceOrderPage: React.FC = () => {
  const jwt = useSelector(s => s.user.token) as string
  const loading = useSelector(s => s.order.loading)
  const order = useSelector(s => s.order.currentOrder)
  const dispatch = useAppDispatch()

  return (
    <MainLayout>
      <Row>
        <Col span={12}>
          <PaymentForm />
        </Col>
        <Col span={12}>
          <CheckOutCard
            loading={loading}
            order={order}
            onCheckout={() => {
              dispatch(placeOrder({ jwt, orderId: order.id }))
            }}
          />
        </Col>
      </Row>
    </MainLayout>
  )
}
