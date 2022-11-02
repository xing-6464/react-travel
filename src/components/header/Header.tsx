import React from 'react'

import { useNavigate } from 'react-router-dom'
import { Layout, Typography, Input, Menu, Button, Dropdown } from 'antd'
import { GlobalOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import logo from '../../assets/logo.svg'
import styles from './Header.module.css'
import { useSelector } from '../../redux/hooks'
import { addLanguageActionCreator, changeLanguageActionCreator } from '../../redux/language/languageActions'


export const Header: React.FC = () => {
  // 路由跳转
  const navigat = useNavigate()

  // react-i18n
  const { t } = useTranslation()

  // redux store
  const language = useSelector(state => state.language)
  const languageList = useSelector(state => state.languageList)
  const dispatch = useDispatch()

  const menuClickHandler = (e) => {
    if (e.key === 'new') {
      // 处理新语言action
      dispatch(addLanguageActionCreator('新语言', 'new_code'))
    } else {
      dispatch(changeLanguageActionCreator(e.key))
    }
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
          <Button.Group className={styles['button-group']}>
            <Button onClick={() => navigat('/register')}>{ t('header.register') }</Button>
            <Button onClick={() => navigat('/signin')}>{ t('header.signin') }</Button>
          </Button.Group>
        </div>
      </div>
      <Layout.Header className={styles['main-header']}>
        <span onClick={() => navigat('/')}>
          <img src={logo} alt="logo" className={styles['App-logo']} />
          <Typography.Title level={3} className={styles.title}>{ t('header.title') }</Typography.Title>
        </span>
        <Input.Search
          placeholder={'请输入旅游目的地、主题、或关键字'}
          className={styles['search-input']}
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