import React from 'react'

import { CardText, CardTextTag, ListContainer, Space } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  return (
    <>
      <DemoBlock title='基本用法 type="block"'>
        <CardText
          className='margin'
          url={
            'https://fat.bitechdevelop.com/reco-ipark-10-1-mobileapi/userFile/files/thumbnail/picture/bi_activity/20211019/76bd943dec1437073a90cd64054967f0_wh_768x466_x.jpg'
          }
          type={'block'}
          cutWidth='384'
          cutHeight='233'
          onClick={() => {}}
          footer={
            <>
              <div className='size-18'>BIPARK智慧园区宣讲会</div>
              <div className='reco-describe'>
                <div>
                  活动时间：<span>2021.02.12 ~ 2021.02.12</span>
                </div>
                <div>
                  报名人数：<span>20</span>人报名
                </div>
                <div>
                  活动地址：<span>纳贤路800号</span>
                </div>
              </div>
            </>
          }
        >
          <CardTextTag type={'signing-up'}>进行中</CardTextTag>
        </CardText>
      </DemoBlock>
      <DemoBlock title='块级用法'>
        <ListContainer>className="horizontal-scroll" 横向滚动类</ListContainer>
        <div className='horizontal-scroll padding-h padding-bottom'>
          <Space>
            <CardText
              text='发展可持续交通势在必行 中国贡献智慧...'
              url={
                'https://fat.bitechdevelop.com/reco-ipark-10-1-mobileapi/userFile/files/thumbnail/picture/bi_activity/20211019/76bd943dec1437073a90cd64054967f0_wh_768x466_x.jpg'
              }
              cutWidth='155'
              cutHeight='87'
              width='155px'
              height='87px'
              style={{ width: 155 }}
              textStyle={{ height: 46 }}
              onClick={() => {}}
            />
            <CardText
              text='发展可持续交通势在必行 中国贡献智慧...'
              url={
                'https://fat.bitechdevelop.com/reco-ipark-10-1-mobileapi/userFile/files/thumbnail/picture/bi_activity/20211019/76bd943dec1437073a90cd64054967f0_wh_768x466_x.jpg'
              }
              cutWidth='155'
              cutHeight='87'
              width='155px'
              height='87px'
              style={{ width: 155 }}
              textStyle={{ height: 46 }}
              onClick={() => {}}
            />
            <CardText
              text='发展可持续交通势在必行 中国贡献智慧...'
              url={
                'https://fat.bitechdevelop.com/reco-ipark-10-1-mobileapi/userFile/files/thumbnail/picture/bi_activity/20211019/76bd943dec1437073a90cd64054967f0_wh_768x466_x.jpg'
              }
              cutWidth='155'
              cutHeight='87'
              width='155px'
              height='87px'
              style={{ width: 155 }}
              textStyle={{ height: 46 }}
              onClick={() => {}}
            />
          </Space>
        </div>
      </DemoBlock>
    </>
  )
}
