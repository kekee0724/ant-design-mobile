import React from 'react'

import {
  CardText,
  CardTextTag,
  Description,
  ListContainer,
  Space,
} from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  return (
    <>
      <DemoBlock title='基本用法 type="block"' background='#f5f7fa' padding='0'>
        <CardText
          className='margin'
          url={
            'https://fat.bitechdevelop.com/reco-ipark-10-1-mobileapi/userFile/files/thumbnail/picture/bi_activity/20211019/76bd943dec1437073a90cd64054967f0_wh_768x466_x.jpg'
          }
          type={'block'}
          ratio={'16:9'}
          onClick={() => {}}
          footer={
            <Description columns={1} title='BIPARK智慧园区宣讲会'>
              <Description.Item label='活动时间'>
                2021.02.12 ~ 2021.02.12
              </Description.Item>
              <Description.Item label='报名人数'>
                <span>20</span>人报名
              </Description.Item>
              <Description.Item label='活动地址'>纳贤路800号</Description.Item>
            </Description>
          }
        >
          <CardTextTag type={'signing-up'}>进行中</CardTextTag>
        </CardText>
      </DemoBlock>
      <DemoBlock title='块级用法' background='#f5f7fa' padding='0'>
        <ListContainer>className="horizontal-scroll" 横向滚动类</ListContainer>
        <div className='horizontal-scroll padding-h padding-bottom'>
          <Space style={{ '--gap-horizontal': '12px' }}>
            {Array.from(Array(14), (v, k) => k).map((_, i) => (
              <CardText
                key={i}
                text='发展可持续交通势在必行 中国贡献智慧...'
                url={
                  'https://fat.bitechdevelop.com/reco-ipark-10-1-mobileapi/userFile/files/thumbnail/picture/bi_activity/20211019/76bd943dec1437073a90cd64054967f0_wh_768x466_x.jpg'
                }
                ratio={'16:9'}
                style={{ width: 155, '--text-content-margin': '8px' }}
                textStyle={{ height: 46 }}
                onClick={() => {}}
              />
            ))}
          </Space>
        </div>
      </DemoBlock>
      <DemoBlock title='其他用法' padding={''} background={''}>
        <CardText
          direction={'row-reverse'}
          className='margin'
          type={'block'}
          url={
            'https://fat.bitechdevelop.com/reco-ipark-10-1-mobileapi/userFile/picture/std_article/20211019/e6c84231-5c85-4c0b-bc59-3250be0ba0ba.jpg?width=310&amp;height=174&amp;'
          }
          imageAutoProps={{ width: 100, borderRadius: 8 }}
          ratio={'4:3'}
          content={
            <Description columns={1} title='张江科技园简称'>
              <Description.Item label='园区地址'>213</Description.Item>
              <Description.Item label='园区地址'>213</Description.Item>
            </Description>
          }
        />
        <CardText
          direction={'row'}
          className='margin'
          type={'block'}
          url={
            'https://fat.bitechdevelop.com/reco-ipark-10-1-mobileapi/userFile/picture/std_article/20211019/e6c84231-5c85-4c0b-bc59-3250be0ba0ba.jpg?width=310&amp;height=174&amp;'
          }
          imageAutoProps={{ width: 100, borderRadius: 8 }}
          ratio={'4:3'}
          content={
            <Description columns={1} title='张江科技园简称'>
              <Description.Item label='园区地址'>213</Description.Item>
              <Description.Item label='园区地址'>213</Description.Item>
            </Description>
          }
          footer='我是底部的内容'
        />
        <CardText
          className='margin'
          type={'block'}
          url={
            'https://fat.bitechdevelop.com/reco-ipark-10-1-mobileapi/userFile/picture/std_article/20211019/e6c84231-5c85-4c0b-bc59-3250be0ba0ba.jpg?width=310&amp;height=174&amp;'
          }
          footer={
            <Description
              columns={2}
              title='张江科技园简称'
              toggle={true}
              labelAllWidth={110}
            >
              <Description.Item label='园区地址'>213</Description.Item>
              <Description.Item label='园区地址'>213</Description.Item>
              <Description.Item label='联系信息' hide>
                213
              </Description.Item>
            </Description>
          }
        />
      </DemoBlock>
    </>
  )
}
