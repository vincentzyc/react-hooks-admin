import React from 'react';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  UnorderedListOutlined
} from '@ant-design/icons';

export default [
  {
    key: "/",
    text: "nav 1",
    icon: <UserOutlined />
  },
  {
    key: "/page2",
    text: "nav 2",
    icon: <AppstoreOutlined />
  },
  {
    key: "/page3",
    text: "nav 3",
    icon: <BarChartOutlined />
  },
  {
    key: "/page4",
    text: "nav 4",
    icon: <CloudOutlined />
  },
  {
    key: "/page5",
    text: "nav 5",
    icon: <ShopOutlined />
  },
  {
    key: "/page6",
    text: "nav 6",
    icon: <TeamOutlined />
  },
  {
    key: "/page7",
    text: "nav 7",
    icon: <UploadOutlined />
  },
  {
    key: "/page8",
    text: "nav 8",
    icon: <VideoCameraOutlined />
  },
  {
    key: "/todos",
    text: "todos",
    icon: <UnorderedListOutlined />
  }
]