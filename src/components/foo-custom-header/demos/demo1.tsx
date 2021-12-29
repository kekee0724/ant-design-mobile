import React from 'react'

import {
  Button,
  CustomHeader,
  Ellipsis,
  ImageAuto,
  List,
  NavBar,
  SearchBar,
  Space,
  Tabs,
} from 'antd-mobile'
import { SetOutline } from 'antd-mobile-icons'
import { DemoBlock } from 'demos'

export default () => {
  return (
    <>
      <DemoBlock title='透明背景' background='' padding=''>
        <CustomHeader
          backCutWidth={384}
          backCutHeight={233}
          backImageSrc={
            'https://fat.bitechdevelop.com/reco-ipark-10-1-mobileapi/userFile/files/thumbnail/picture/bi_activity/20211019/76bd943dec1437073a90cd64054967f0_wh_768x466_x.jpg'
          }
          customHeaderList={true}
          style={{ height: '26vh' }}
        >
          <NavBar />
          <List>
            <List.Item
              extra={
                <Button size={'mini'} shape='rounded' onClick={() => {}}>
                  已参与
                </Button>
              }
              prefix={
                <ImageAuto
                  cutWidth='71'
                  cutHeight='71'
                  height='71px'
                  width='71px'
                  borderRadius='8px'
                  src={
                    'https://fat.bitechdevelop.com/reco-ipark-10-1-mobileapi/userFile/files/thumbnail/picture/bi_activity/20211019/76bd943dec1437073a90cd64054967f0_wh_768x466_x.jpg'
                  }
                />
              }
            >
              <Ellipsis style={{ height: 50 }} rows={2} content='描述' />
              <Space className='reco-describe size-14'>
                <span>
                  成员: <span>222</span>
                </span>
                <span>
                  动态: <span>222</span>
                </span>
              </Space>
            </List.Item>
          </List>
        </CustomHeader>
      </DemoBlock>
      <DemoBlock title='与内容结合' background='' padding=''>
        <CustomHeader
          backColor={true}
          customHeaderList={false}
          navBarNoBack={true}
          navBarNoBorder={false}
        >
          <NavBar
            back={null}
            right={
              <Space>
                <SetOutline fontSize={24} />
              </Space>
            }
          >
            我的
          </NavBar>
          <Tabs>
            <Tabs.Tab title='水果' key='fruits' />
            <Tabs.Tab title='蔬菜' key='vegetables' />
            <Tabs.Tab title='动物' key='animals' />
          </Tabs>
        </CustomHeader>
        <br />
        <CustomHeader
          backColor={true}
          customHeaderList={false}
          navBarNoBack={true}
          navBarNoBorder={false}
        >
          <NavBar
            back={null}
            right={
              <Space>
                <SetOutline fontSize={24} />
              </Space>
            }
          >
            我的
          </NavBar>
          <List>
            <List.Item>
              <SearchBar placeholder='请输入内容' />
            </List.Item>
          </List>
        </CustomHeader>
      </DemoBlock>
    </>
  )
}
