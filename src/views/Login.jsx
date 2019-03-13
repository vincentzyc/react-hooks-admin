import React from "react";
import { Form, Icon, Input, Button } from "antd";
// import api from "../common/api";

const FormItem = Form.Item;

const LoginForm = () => {
  const { getFieldDecorator } = this.props.form;
  return (
    <div className="wrapper">
      <Form onSubmit={this.handleSubmit} className="login-form loginForm">
        <FormItem>
          {getFieldDecorator("userName", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(<Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />)}
        </FormItem>
        <FormItem>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(<Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />)}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
                  </Button>
        </FormItem>
      </Form>
    </div>
  );
}

export default LoginForm;
