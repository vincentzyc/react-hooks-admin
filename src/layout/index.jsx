import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Redirect } from "react-router-dom";

const {
  Header, Content, Footer, Sider,
} = Layout;

export default function BasicLayout(props) {
  const handleClick = e => {
    if (props.location.pathname === e.key) return false;
    props.history.push(e.key);
  };
  let isLogin = window.localStorage.getItem("y_userName");
  return isLogin ? (
    <Layout>
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
          <Menu.Item key="/">
            <Icon type="user" />
            <span className="nav-text">nav 1</span>
          </Menu.Item>
          <Menu.Item key="/page2">
            <Icon type="video-camera" />
            <span className="nav-text">nav 2</span>
          </Menu.Item>
          <Menu.Item key="/page3">
            <Icon type="upload" />
            <span className="nav-text">nav 3</span>
          </Menu.Item>
          <Menu.Item key="/page4">
            <Icon type="bar-chart" />
            <span className="nav-text">nav 4</span>
          </Menu.Item>
          <Menu.Item key="/page5">
            <Icon type="cloud-o" />
            <span className="nav-text">nav 5</span>
          </Menu.Item>
          <Menu.Item key="/page6">
            <Icon type="appstore-o" />
            <span className="nav-text">nav 6</span>
          </Menu.Item>
          <Menu.Item key="/page7">
            <Icon type="team" />
            <span className="nav-text">nav 7</span>
          </Menu.Item>
          <Menu.Item key="/page8">
            <Icon type="shop" />
            <span className="nav-text">nav 8</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Header style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
      </Footer>
      </Layout>
    </Layout>
  ) : (
      <Redirect replace to="/login" />
    )
}
