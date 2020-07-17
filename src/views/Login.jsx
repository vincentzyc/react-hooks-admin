import React from "react";
import { Form, Icon, Input, Button } from "antd";
// import api from "../common/api";

const LoginForm = props => {
  const onFinish = values => {
    console.log('Success:', values);
    window.localStorage.setItem("y_userName", values.userName);
    props.history.replace('/');
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login-wrapper">
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="login-form loginForm">
        <Form.Item
          label="账号"
          name="userName"
          rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginForm;
