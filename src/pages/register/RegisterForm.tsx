import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Button, Checkbox, Form, Input } from 'antd'

import styles from './RegisterForm.module.css'

export const RegisterForm: React.FC = () => {
  const navigate = useNavigate()

  const onFinish = async (values: any) => {
    try {
      await axios.post('http://123.56.149.216:8080/auth/register',{
        email: values.username,
        password: values.password,
        confirmPassword: values.confirm
      })
      navigate('/signIn/')
    } catch (error) {
      alert('注册失败!')
    }
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
      className={styles['register-form']}
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

      <Form.Item
        label="确认密码"
        name="confirm"
        hasFeedback
        rules={[
          { required: true, message: 'Please input your confirm password!' },
          (({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              }
              return Promise.reject('密码确认不一致')
            }
          }))
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>remember</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  )
}
