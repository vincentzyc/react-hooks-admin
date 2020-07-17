import React, { useState, useEffect } from 'react';
import { Skeleton, List, Avatar, BackTop } from 'antd';
import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';

const listData = [];
for (let i = 0; i < 8; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const Page7 = () => {
  const [loading, setLoading] = useState(true);

  const showSkeleton = flag => {
    setLoading(flag);
  };

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        showSkeleton(false)
      }, 2000);
    }
  });

  return (
    <div className="pd20">
      <BackTop visibilityHeight={100} target={() => document.getElementById("container")} />
      <List
        itemLayout="vertical"
        size="large"
        dataSource={listData}
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={
              !loading && [
                <span><StarOutlined />156</span>,
                <span><LikeOutlined />123</span>,
                <span><MessageOutlined />2</span>
              ]
            }
            extra={
              !loading && (
                <img
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              )
            }
          >
            <Skeleton loading={loading} active avatar>
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
              {item.content}
            </Skeleton>
          </List.Item>
        )}
      />
    </div>
  )
};

export default Page7;