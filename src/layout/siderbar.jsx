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
    collapsed ? document.getElementById('section_layout').style.left = "80px" : document.getElementById('section_layout').style.left = "200px"
    setCollapsed(collapsed);
  }
  return (
    <Sider
      style={{ overflow: 'auto', height: '100%' }}
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
    >
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
