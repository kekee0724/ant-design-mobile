import React from 'react'

import { Card, Description, List } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  return (
    <>
      <DemoBlock title='基本用法 type="block"' background='#f5f7fa' padding='0'>
        <List>
          <Description columns={1} title='BIPARK智慧园区宣讲会'>
            <Description.Item label='活动时间'>
              2021.02.12 ~ 2021.02.12
            </Description.Item>
            <Description.Item label='报名人数'>
              <span>20</span>人报名
            </Description.Item>
            <Description.Item label='活动地址'>纳贤路800号</Description.Item>
          </Description>
        </List>
        <Card>
          <Description columns={1} title='BIPARK智慧园区宣讲会' toggle={true}>
            <Description.Item label='活动时间'>2021.02.12</Description.Item>
            <Description.Item label='报名人数' hide>
              <span>20</span>人报名
            </Description.Item>
            <Description.Item label='活动地址' hide>
              纳贤路800号
            </Description.Item>
          </Description>
        </Card>
        <Card>
          <Description columns={2} titleShow={false}>
            <Description.Item label='活动时间'>2021</Description.Item>
            <Description.Item label='报名人数'>20</Description.Item>
            <Description.Item label='活动地址' span={2}>
              纳贤路800号
            </Description.Item>
          </Description>
        </Card>
        <Card>
          <Description columns={1} titleShow={false}>
            <Description.Item label='活动时间'>2021</Description.Item>
            <Description.Item label='报名人数'>20</Description.Item>
            <Description.Item label='活动地址'>纳贤路800号</Description.Item>
          </Description>
        </Card>
      </DemoBlock>
    </>
  )
}
