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
    <Layout>
      <Siderbar />
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
