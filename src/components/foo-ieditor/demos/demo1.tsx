import React, { useState } from 'react'

import { IEditor, Input, InputLabel, List, Switch } from 'antd-mobile'

export default () => {
  const [toUsers, setToUsers] = useState('')
  const [copyUsers, setCopyUsers] = useState('')
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')
  const [isAskReceipt, setIsAskReceipt] = useState(false)
  return (
    <div>
      <List mode='card' style={{ '--prefix-width': '80px' }}>
        <List.Item
          prefix={<InputLabel required>收件人</InputLabel>}
          onClick={() => {
            // chooseContact(1)
          }}
        >
          <Input
            // readOnly
            placeholder='请选择收件人'
            defaultValue={toUsers}
            value={toUsers}
            onChange={c => setToUsers(c)}
          />
        </List.Item>
        <List.Item
          prefix={<InputLabel>抄送人</InputLabel>}
          onClick={() => {
            // chooseContact(2)
          }}
        >
          <Input
            // readOnly
            placeholder='请选择抄送人'
            defaultValue={copyUsers}
            value={copyUsers}
            onChange={c => setCopyUsers(c)}
          />
        </List.Item>

        <List.Item prefix={<InputLabel required>标题</InputLabel>}>
          <Input
            placeholder='请输入主题'
            value={subject}
            defaultValue={subject}
            onChange={v => setSubject(v)}
          />
        </List.Item>
      </List>
      <List mode={'card'}>
        <IEditor
          placeholder='请输入邮件内容'
          value={body}
          onChange={v => setBody(v)}
        />
      </List>
      <List mode={'card'}>
        <List.Item
          extra={
            <Switch
              onChange={c => {
                setIsAskReceipt(c)
              }}
              checked={isAskReceipt}
            />
          }
        >
          是否需要回执
        </List.Item>
      </List>
    </div>
  )
}
