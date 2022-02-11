import React from 'react'

import {
  Button,
  Form,
  Input,
  InputLabel,
  List,
  ListTitle,
  TextArea,
} from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  return (
    <DemoBlock title='基础用法' background='' padding='0'>
      <List
        mode={'card'}
        style={{
          '--prefix-width': '6em',
        }}
      >
        <List.Item prefix={<InputLabel>用户名</InputLabel>}>
          <Input placeholder='请输入用户名' clearable />
        </List.Item>
        <List.Item prefix={<InputLabel required>密码</InputLabel>}>
          <Input placeholder='请输入密码' clearable type='password' />
        </List.Item>
      </List>
      <ListTitle>form表单支持设置title，以下为演示</ListTitle>
      <Form
        mode='card'
        layout='horizontal'
        footer={
          <Button block type='submit' color='primary' size='large'>
            提交
          </Button>
        }
      >
        <Form.Header>演示布局</Form.Header>
        <Form.Item
          name='姓名'
          label='姓名'
          rules={[{ required: true, message: '姓名不能为空' }]}
        >
          <Input onChange={console.log} placeholder='请输入姓名' />
        </Form.Item>
        <Form.Item name='address' label='地址' layout={'vertical'}>
          <TextArea placeholder='请输入地址' maxLength={100} rows={4} />
        </Form.Item>
        <Form.Header>水平布局</Form.Header>
        <Form.Item name='remark' label='备注' layout={'vertical'}>
          <TextArea placeholder='请输入备注' maxLength={100} rows={4} />
        </Form.Item>
      </Form>
    </DemoBlock>
  )
}
