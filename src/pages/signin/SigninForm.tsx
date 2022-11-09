import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Checkbox, Form, Input } from 'antd'

import styles from './SigninForm.module.css'
import { useSelector, useAppDispatch } from '../../redux/hooks'
import { signIn } from '../../redux/user/slice'

export const SigninForm: React.FC = () => {
  const loading = useSelector(state => state.user.loading)
  const jwt = useSelector(state => state.user.token)
  const error = useSelector(state => state.user.error)

  const navigate = useNavigate()
  
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (jwt !== null) {
      navigate('/')
    }
  }, [jwt])

  const onFinish = async (values: any) => {
    dispatch(signIn({
      email: values.username,
      password: values.password
    }))
  }

  const onFinishFailed = (errorInfo: any) => {
  }

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className={styles['signin-form']}
    >
      <Form.Item
        label="用户名"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>是否记录登录</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={loading}>
          提交
        </Button>
      </Form.Item>
    </Form>
  )
}
