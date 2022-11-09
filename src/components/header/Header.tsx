import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { Layout, Typography, Input, Menu, Button, Dropdown } from 'antd'
import { GlobalOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import jwt_decode, { JwtPayload as DefaultJwtPayload } from 'jwt-decode'

import logo from '../../assets/logo.svg'
import styles from './Header.module.css'
import { useSelector, useAppDispatch } from '../../redux/hooks'
import { addLanguageActionCreator, changeLanguageActionCreator } from '../../redux/language/languageActions'
import { userSlice } from '../../redux/user/slice'

interface JwtPayload extends DefaultJwtPayload {
  username: string
}

export const Header: React.FC = () => {
  // 路由跳转
  const navigat = useNavigate()

  // react-i18n
  const { t } = useTranslation()

  // redux store
  const language = useSelector(state => state.language.language)
  const languageList = useSelector(state => state.language.languageList)
  const dispatch = useAppDispatch()

  const jwt = useSelector(state => state.user.token)
  const [username, setUsername] = useState("")

  useEffect(() => {
    if (jwt) {
      const token = jwt_decode<JwtPayload>(jwt)
      setUsername(token.username)
    }
  }, [jwt]) 


  const menuClickHandler = (e) => {
    if (e.key === 'new') {
      // 处理新语言action
      dispatch(addLanguageActionCreator('新语言', 'new_code'))
    } else {
      dispatch(changeLanguageActionCreator(e.key))
    }
  }

  const onLogout = () => {
    dispatch(userSlice.actions.logout())
    navigat('/')
    window.location.reload()
  }

  return (
    <div className={styles['App-header']}>
      {/* top-header */}
      <div className={styles['top-header']}>
        <div className={styles.inner}>
          <Typography.Text>{ t('header.slogan') }</Typography.Text>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            overlay={
              <Menu onClick={menuClickHandler}
                items={[
                  ...languageList.map( l => {
                    return { key: l.code, label: l.name }
                  }),
                  { key: 'new', label: t('header.add_new_language') }
                ]}
              />
            }
            icon={<GlobalOutlined />}
          >
            { language === 'zh' ? '中文' : 'English' }
          </Dropdown.Button>
          { jwt ? (
              <Button.Group className={styles['button-group']}>
                <span>{ t('header.welcome') }</span>
                <Typography.Text strong>
                  { username }
                </Typography.Text>
                <Button>{ t('header.shoppingCart') }</Button>
                <Button onClick={onLogout}>{ t('header.signOut')}</Button>
              </Button.Group> 
            ) : (
              <Button.Group className={styles['button-group']}>
                <Button onClick={() => navigat('/register')}>
                  { t('header.register') }
                </Button>
                <Button onClick={() => navigat('/signin')}>
                  { t('header.signin') }
                </Button>
              </Button.Group>
            )
          }
        </div>
      </div>
      <Layout.Header className={styles['main-header']}>
        <span onClick={() => navigat('/')} style={{ cursor: 'pointer' }}>
          <img src={logo} alt="logo" className={styles['App-logo']} />
          <Typography.Title level={3} className={styles.title}>{ t('header.title') }</Typography.Title>
        </span>
        <Input.Search
          placeholder={'请输入旅游目的地、主题、或关键字'}
          className={styles['search-input']}
          onSearch={(keyword) => navigat('/search/' + keyword)}
        />
      </Layout.Header>
      <Menu
          mode={'horizontal'}
          className={styles['main-menu']}
          items={[
            { key: "1", label: t("header.home_page") },
            { key: "2", label: t("header.weekend") },
            { key: "3", label: t("header.group") },
            { key: "4", label: t("header.backpack") },
            { key: "5", label: t("header.private") },
            { key: "6", label: t("header.cruise") },
            { key: "7", label: t("header.hotel") },
            { key: "8", label: t("header.local") },
            { key: "9", label: t("header.theme") },
            { key: "10", label: t("header.custom") },
            { key: "11", label: t("header.study") },
            { key: "12", label: t("header.visa") },
            { key: "13", label: t("header.enterprise") },
            { key: "14", label: t("header.high_end") },
            { key: "15", label: t("header.outdoor") },
            { key: "16", label: t("header.insurance") }
          ]}
        ></Menu>
    </div>
  )
}