import React from 'react'

import { Card, FileIcon, List, Space } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  return (
    <>
      <DemoBlock title='基础用法'>
        <Card>
          <Space>
            <FileIcon text='jpg' />
            <FileIcon text='docx' />
          </Space>
        </Card>
        <List>
          <List.Item arrow prefix={<FileIcon text='jpg' />}>
            文件名
          </List.Item>
        </List>
      </DemoBlock>
    </>
  )
}
