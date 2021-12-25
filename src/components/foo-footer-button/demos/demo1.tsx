import React from 'react'

import { Button, Container, FooterButton } from 'antd-mobile'

import styles from './demo1.less'

export default () => {
  return (
    <div className={styles.customBody}>
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
      </Container>
    </div>
  )
}
