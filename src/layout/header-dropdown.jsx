import React from 'react';
import { withRouter } from "react-router-dom";
import { Menu, Dropdown, Avatar } from 'antd';
import { DownOutlined } from '@ant-design/icons';

function HeaderDropdown(props) {
  function menuClick(item) {
    switch (item.key) {
      case 'changePassWord':
        console.log('修改密码');
        props.history.push('/updateinfo');
        break;
      case 'loginOut':
        console.log('退出登录');
        window.localStorage.removeItem("y_userName");
        props.history.push('/login');
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
        <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>{props.userName.slice(0, 1)}</Avatar>
        <span className="mg10">{props.userName}</span>
        <DownOutlined />
      </span>
    </Dropdown>
  )
}

export default withRouter(HeaderDropdown)