import React, { useState } from 'react';
import { Tabs, Button } from 'antd';

const TabPane = Tabs.TabPane;

const Page6 = () => {
  const [activeKey, setActiveKey] = useState('1')
  return (
    <div className="card-container">
      <Tabs type="card" activeKey={activeKey}>
        <TabPane tab="Tab Title 1" key="1">
          <p>Content of Tab Pane 1</p>
          <p>Content of Tab Pane 1</p>
          <p>Content of Tab Pane 1</p>
        </TabPane>
        <TabPane tab="Tab Title 2" key="2">
          <p>Content of Tab Pane 2</p>
          <p>Content of Tab Pane 2</p>
          <p>Content of Tab Pane 2</p>
        </TabPane>
        <TabPane tab="Tab Title 3" key="3">
          <p>Content of Tab Pane 3</p>
          <p>Content of Tab Pane 3</p>
          <p>Content of Tab Pane 3</p>
        </TabPane>
      </Tabs>
      <Button type="primary" onClick={() => setActiveKey('1')} className="mg20">111</Button>
      <Button type="primary" onClick={() => setActiveKey('2')} className="mg20">222</Button>
      <Button type="primary" onClick={() => setActiveKey('3')} className="mg20">333</Button>
    </div>
  )
};

export default Page6;