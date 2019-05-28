import React, { useState } from 'react';

import { Form, Icon, Input, Button, Modal } from 'antd';

const updateInfo = props => {
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        if (newPasswordError !== confirmPasswordError) {
          // new Password and confirm Password are different
          return Modal.warning({
            title: 'Tip',
            content: 'new Password and confirm Password are different',
          });
        }
        Modal.success({
          title: 'Tip',
          content: 'Modified success',
        });
      }
    });
  };
  const { getFieldDecorator } = props.form;

  const [passwordError, setPasswordError] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  return (
    <Form onSubmit={handleSubmit} style={{ width: '300px', margin: "50px auto" }}>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
            onChange={e => { setPasswordError(e.target.value) }}
          />,
        )}
      </Form.Item>

      <Form.Item>
        {getFieldDecorator('newPassword', {
          rules: [{ required: true, message: 'Please input your New Password!' }],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="New Password"
            onChange={e => { setNewPasswordError(e.target.value) }}
          />,
        )}
      </Form.Item>

      <Form.Item>
        {getFieldDecorator('confirmPassword', {
          rules: [{ required: true, message: 'Please confirm your New Password!' }],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Confirm Password"
            onChange={e => { setConfirmPasswordError(e.target.value) }}
          />,
        )}
      </Form.Item>

      <Form.Item className="text-center">
        <Button type="primary" htmlType="submit" block>
          确定
        </Button>
      </Form.Item>
      <Form.Item>
        <p>passwordError:{passwordError}</p>
        <p>newPasswordError:{newPasswordError}</p>
        <p>confirmPasswordError:{confirmPasswordError}</p>
      </Form.Item>
    </Form>
  );
}

const WrappedUpdateInfo = Form.create({ name: 'update_info' })(updateInfo);

export default WrappedUpdateInfo;