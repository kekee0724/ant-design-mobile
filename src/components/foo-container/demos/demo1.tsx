import React from 'react'

import {
  Button,
  Container,
  Empty,
  FooterButton,
  Hint,
  NavBar,
} from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  return (
    <>
      <DemoBlock title='页面架子' background={''}>
        <div
          style={{ height: '200px', border: '2px rgb(204, 204, 204) solid' }}
        >
          <Container range={'container'}>
            <NavBar>固定头部</NavBar>
            <Container range={'body'}>可以滚动的内容</Container>
            <FooterButton>
              <FooterButton.Item>
                <Button block>固定在底部</Button>
              </FooterButton.Item>
              <FooterButton.Item>
                <Button color={'primary'} block>
                  固定在底部
                </Button>
              </FooterButton.Item>
            </FooterButton>
          </Container>
        </div>
      </DemoBlock>

      <DemoBlock title='水平' background={''}>
        <Container direction={'row'}>
          <span className='margin-right'>左侧内容</span>
          <Container fill>中间填充内容</Container>
          <div>右侧固定</div>
        </Container>
      </DemoBlock>

      <DemoBlock title='简单垂直内容垂直居中'>
        <div style={{ height: '200px' }}>
          <Container range={'center'}>
            <Empty description='没有数据' />
          </Container>
          <Hint>自动居中的暂无数据已封装为&lt;noData/&gt;,此处只作为演示</Hint>
        </div>
      </DemoBlock>
    </>
  )
}
