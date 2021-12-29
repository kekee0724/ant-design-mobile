import React from 'react'

import { Card, FileIcon, List, Space } from 'antd-mobile'

export default () => {
  return (
    <>
      <Card>
        <Space>
          <FileIcon text='jpg' />
          <FileIcon text='docx' />
        </Space>
      </Card>
      <List mode={'card'}>
        <List.Item arrow prefix={<FileIcon text='jpg' />}>
          文件名
        </List.Item>
      </List>
    </>
  )
}
