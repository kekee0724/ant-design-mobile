import React from 'react'

import { Button, Container, FooterButton, Space } from 'antd-mobile'
import { SmileOutline } from 'antd-mobile-icons'

export default () => {
  return (
    <div style={{ height: '100vh' }}>
      <Container range='container'>
        <Container range='body'>上面的内容</Container>
        <FooterButton>
          <FooterButton.Item>
            <Button block>跳过修改</Button>
          </FooterButton.Item>
          <FooterButton.Item>
            <Button color={'primary'} block>
              确认提交
            </Button>
          </FooterButton.Item>
        </FooterButton>
        <FooterButton showMore={true}>
          <FooterButton.Item>
            <Button block color={'primary'} onClick={() => console.log(1)}>
              1
            </Button>
          </FooterButton.Item>
          <FooterButton.Item>
            <Button block onClick={() => console.log(2)}>
              2
            </Button>
          </FooterButton.Item>
          <FooterButton.Item>
            <Button block onClick={() => console.log(3)}>
              3
            </Button>
          </FooterButton.Item>
          <FooterButton.Item>
            <Button block onClick={() => console.log(4)}>
              4
            </Button>
          </FooterButton.Item>
          <FooterButton.Item>
            <Button block onClick={() => console.log(5)}>
              <Space>
                <SmileOutline />
                <span>5</span>
              </Space>
            </Button>
          </FooterButton.Item>
        </FooterButton>
      </Container>
    </div>
  )
}
