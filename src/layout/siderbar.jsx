import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { withRouter } from "react-router-dom";
import sidebarList from "./sidebar.js"

const {Sider} = Layout;

function Siderbar(props) {
  const handleClick = e => {
    if (props.location.pathname === e.key) return false;
    props.history.push(e.key);
  };
  return (
      <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
        <div style={{ width: '100%', height: '100px', textAlign: 'center' }}>
          <img src={require('../assets/img/logo.svg')} alt="logo" height="100%" />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          onClick={handleClick}
          defaultSelectedKeys={[props.location.pathname]}
          selectedKeys={[props.location.pathname]}
        >
          {sidebarList.map((item, index) => (
          <Menu.Item key={item.key}>
            <Icon type={item.icon} />
            <span className="nav-text">{item.text}</span>
          </Menu.Item>
          ))}
        </Menu>
      </Sider>
  )
}

export default withRouter(Siderbar)
