import React from 'react'

import { Hint, List } from 'antd-mobile'

export default () => {
  return (
    <div>
      <List mode={'card'}>
        <List.Item>1</List.Item>
        <List.Item>2</List.Item>
        <List.Item>3</List.Item>
      </List>
      <Hint>
        绑定手机号是您身份的重要凭证。当账号发生异常时，将会通过该手机号第一时间通知您，请谨慎操作！
      </Hint>
    </div>
  )
}
