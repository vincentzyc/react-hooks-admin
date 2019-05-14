import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';

export default function HeaderDropdown(props) {
  function menuClick(item) {
    switch (item.key) {
      case 'changePassWord':
        console.log('修改密码');
        break;
      case 'loginOut':
        console.log('退出登录');
        break;
      default:
        break;
    }
  }
  const menu = (
    <Menu onClick={menuClick}>
      <Menu.Item key="changePassWord">修改密码</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="loginOut">退出登录</Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter">
      <span className="ant-dropdown-link">
        {props.userName} <Icon type="down" />
      </span>
    </Dropdown>
  )
}