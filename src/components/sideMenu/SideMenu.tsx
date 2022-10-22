import React from 'react'

import { Menu } from 'antd'
import { GifOutlined } from '@ant-design/icons'

import styles from './SideMenu.module.css'
import { sideMenuList } from './mockup'

export const SideMenu: React.FC = () => {
  return (
    <Menu
      className={styles['side-menu']}
      mode={'vertical'}
      items={ sideMenuList.map( m => ({
        label: m.title,
        icon: <GifOutlined />,
        key: m.title,
        children: m.subMenu.map( sm => ({
          label: sm.title,
          icon: <GifOutlined />,
          key: sm.title,
          children: sm.subMenu.map( sms => ({
            label: sms,
            key: sms,
            icon: <GifOutlined />
          }))
        }))
      }))}
    ></Menu>
  )
}
