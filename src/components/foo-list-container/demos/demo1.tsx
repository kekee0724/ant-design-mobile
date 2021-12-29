import React from 'react'

import { Button, List, ListContainer } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  return (
    <DemoBlock title='基础用法' background='' padding='0'>
      <List mode={'card'}>
        <List.Item>1</List.Item>
        <List.Item>2</List.Item>
        <List.Item>3</List.Item>
      </List>
      <ListContainer>
        <Button block color='primary'>
          退出登录
        </Button>
      </ListContainer>
    </DemoBlock>
  )
}
