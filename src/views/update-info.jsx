import React, { useState } from 'react';

import { Form, Icon, Input, Button } from 'antd';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

const updateInfo = props => {
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;
  // Only show error after a field is touched.
  const usernameError = isFieldTouched('username') && getFieldError('username');
  const passwordError = isFieldTouched('password') && getFieldError('password');
  return (
    <Form onSubmit={handleSubmit} style={{width:'300px',margin:"50px auto"}}>
      <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />,
        )}
      </Form.Item>
      <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />,
        )}
      </Form.Item>
      <Form.Item className="text-center">
        <Button type="primary" htmlType="submit" block disabled={hasErrors(getFieldsError())}>
          确定
        </Button>
      </Form.Item>
    </Form>
  );
}

const WrappedUpdateInfo = Form.create({ name: 'update_info' })(updateInfo);

export default WrappedUpdateInfo;