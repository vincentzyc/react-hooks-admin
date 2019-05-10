import React, { useState } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { withRouter } from "react-router-dom";
import sidebarList from "./sidebar.js"

const { Sider } = Layout;

function Siderbar(props) {
  const handleClick = e => {
    if (props.location.pathname === e.key) return false;
    props.history.push(e.key);
  };

  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    collapsed ? document.getElementById('section_layout').style.marginLeft = "80px" : document.getElementById('section_layout').style.marginLeft = "200px"
    setCollapsed(collapsed);
  }
  return (
    <Sider
      style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
    >
      <div style={{ width: '100%', textAlign: 'center' }}>
        <img src={require('../assets/img/logo.svg')} alt="logo" width="100%" />
      </div>
      <Menu
        theme="dark"
        mode="inline"
        onClick={handleClick}
        defaultSelectedKeys={[props.location.pathname]}
        selectedKeys={[props.location.pathname]}
        style={{ marginBottom: '50px' }}
      >
        {sidebarList.map(item => (
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
