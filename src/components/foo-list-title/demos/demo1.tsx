import React from 'react'

import { List, ListTitle } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  return (
    <DemoBlock title='基础用法' background='' padding='0'>
      <ListTitle title='单选' extra={<a>更多</a>} />
      <List mode={'card'}>
        <List.Item>1</List.Item>
        <List.Item>2</List.Item>
      </List>
      <ListTitle>多选</ListTitle>
      <List mode={'card'}>
        <List.Item>1</List.Item>
        <List.Item>2</List.Item>
        <List.Item>2</List.Item>
      </List>
    </DemoBlock>
  )
}
