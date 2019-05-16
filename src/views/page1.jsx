import React, { useState } from 'react';
import { Form, Select, InputNumber, Input, DatePicker, Switch, Slider, Button } from 'antd';
import { Link } from 'react-router-dom'
import Yui from '@/assets/js';
import { createHashHistory } from 'history';

const history = createHashHistory();

const { Option } = Select;

const App = () => {
  async function test1() {
    history.push("/page4")
    // setValue(Yui.$util.getFormatDate('yyyy-mm-dd'))
    // let param = {
    //   dataSource: "WEB_HUAWEI",
    //   appName: "",
    //   startAndEndTime: [Yui.$util.getFormatDate("yyyy-mm-dd", Date.now() - 86400000 * 6), Yui.$util.getFormatDate("yyyy-mm-dd")],
    //   startTime: Yui.$util.getFormatDate("yyyy-mm-dd", Date.now() - 86400000 * 6),
    //   endTime: Yui.$util.getFormatDate("yyyy-mm-dd"),
    //   pageIndex: 1,
    //   pageSize: 10,
    //   totalCount: 0
    // }
    // let res = await Yui.$api.AdAnalysis.getAdEffectList(param);
    // console.log(res);
  }
  function test2() {
    setValue(Yui.$util.getFormatDate())
  }
  const [value, setValue] = useState('')
  return (
    <Form style={{ marginTop: 32 }}>
      <div className="text-center">
        <Button type="primary" className="mg20" onClick={test1}>
          跳转page4
      </Button>
        <Button type="primary" className="mg20" onClick={test2}>
          获取当前时间
      </Button>
      </div>
      <Form.Item
        label="数字输入框"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
        <Input placeholder="time" value={value} onChange={v => setValue(v.target.value)} />
      </Form.Item>
      <Form.Item
        label="数字输入框"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
        <InputNumber min={1} max={10} defaultValue={3} />
      </Form.Item>
      <Form.Item
        label="开关"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
        <Switch defaultChecked />
      </Form.Item>
      <Form.Item
        label="滑动输入条"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
        <Slider defaultValue={70} />
      </Form.Item>
      <Form.Item
        label="选择器"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
        <Select defaultValue="vincent" style={{ width: 192 }}>
          <Option value="jack">jack</Option>
          <Option value="lucy">lucy</Option>
          <Option value="vincent">vincent</Option>
          <Option value="disabled" disabled>disabled</Option>
          <Option value="yiminghe">yiminghe</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="日期选择框"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item wrapperCol={{ span: 8, offset: 8 }}>
        <Link to="/page6">
          <Button type="primary" htmlType="submit">
            确定
          </Button>
        </Link>

        <Button style={{ marginLeft: 8 }}>
          取消
        </Button>
      </Form.Item>
    </Form>
  );
}

export default App;