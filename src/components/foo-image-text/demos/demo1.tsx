import React from 'react'

import { Badge, Grid, ImageText } from 'antd-mobile'
import { AddSquareOutline } from 'antd-mobile-icons'
import { DemoBlock } from 'demos'

export default () => {
  return (
    <>
      <DemoBlock title='基础用法'>
        <Grid columns={4}>
          <Grid.Item>
            <ImageText icon='mobile mobile-order' text='订单' />
          </Grid.Item>
          <Grid.Item>
            <ImageText
              className='service-edit'
              icon={
                <Badge content='99'>
                  <i className='mobile mobile-order' />
                </Badge>
              }
              text='带徽章'
            />
          </Grid.Item>
        </Grid>
      </DemoBlock>
      <DemoBlock title='带背景的'>
        <Grid columns={4}>
          <Grid.Item>
            <ImageText backIcon={true} text={'A演示用户'} icon={'A'} />
          </Grid.Item>
          <Grid.Item>
            <ImageText
              backIcon={true}
              text={'B演示用户'}
              icon={'B'}
              badgeContent={'999'}
              badgeColor={'#e400ff'}
            />
          </Grid.Item>
          <Grid.Item>
            <ImageText
              backIcon={true}
              text={'C演示用户'}
              icon={'C'}
              badgeContent={'12'}
            />
          </Grid.Item>
          <Grid.Item>
            <ImageText
              backIcon={true}
              text={'D演示用户'}
              icon={<AddSquareOutline />}
              badgeContent={Badge.dot}
            />
          </Grid.Item>
        </Grid>
      </DemoBlock>
    </>
  )
}
