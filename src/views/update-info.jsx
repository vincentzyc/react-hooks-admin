import React, { useState } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import { LockOutlined } from '@ant-design/icons'

const UpdateInfo = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
    if (newPassword !== confirmPassword) {
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
  };

  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <Form
      onFinish={onFinish}
      style={{ width: '300px', margin: "50px auto" }}>
      <Form.Item
        label="原密码"
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}>
        <Input
          prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password"
          placeholder="Password"
          onChange={e => { setPassword(e.target.value) }}
        />
      </Form.Item>

      <Form.Item
        label="新密码"
        name="newPassword"
        rules={[{ required: true, message: 'Please input your New Password!' }]}>
        <Input
          prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password"
          placeholder="New Password"
          onChange={e => { setNewPassword(e.target.value) }}
        />
      </Form.Item>

      <Form.Item
        label="确认密码"
        name="confirmPassword"
        rules={[{ required: true, message: 'Please confirm your New Password!' }]}>

        <Input
          prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password"
          placeholder="Confirm Password"
          onChange={e => { setConfirmPassword(e.target.value) }}
        />
      </Form.Item>

      <Form.Item className="text-center">
        <Button type="primary" htmlType="submit" block>
          确定
        </Button>
      </Form.Item>
      <Form.Item>
        <p>password:{password}</p>
        <p>newPassword:{newPassword}</p>
        <p>confirmPassword:{confirmPassword}</p>
      </Form.Item>
    </Form>
  );
}

export default UpdateInfo;