import React from 'react'

import { Button, List, ListContainer, Result } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  const title = '内容不存在',
    text = '内容已被删除或者下架'

  return (
    <>
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
      <DemoBlock title='deleteData' background='' padding='0'>
        <div>
          <Result status='error' title={title} description={text} />
          <ListContainer>
            <Button
              onClick={() => {
                history.go(-2)
              }}
              color='primary'
              block
              type='button'
            >
              {'返回上一页'}
            </Button>
          </ListContainer>
        </div>
      </DemoBlock>
    </>
  )
}
