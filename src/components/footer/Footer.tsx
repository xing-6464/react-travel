import React from 'react'

import { Layout, Typography } from 'antd'

export const Footer: React.FC = () => {

  return (
    <Layout.Footer style={{ marginTop: 25 }}>
      <Typography.Title level={3} style={{ textAlign: 'center' }}>
        版权所有 @ React 旅游网
      </Typography.Title>
    </Layout.Footer>
  )
}