import React from 'react';
import { Layout } from 'antd';
import { Redirect } from "react-router-dom";
import Siderbar from "./siderbar"

const {
  Header, Content, Footer,
} = Layout;

export default function BasicLayout(props) {
  let isLogin = window.localStorage.getItem("y_userName");
  return isLogin ? (
    <Layout style={{ height: '100%' }}>
      <Siderbar />
      <Layout id="section_layout" style={{ marginLeft: 200, transition: '0.3s', height: '100%', overflow: 'auto' }}>
        <div style={{ minWidth: '1100px', height: '100%' }}>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
              {props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </div>
      </Layout>
    </Layout>
  ) : (
      <Redirect replace to="/login" />
    )
}
