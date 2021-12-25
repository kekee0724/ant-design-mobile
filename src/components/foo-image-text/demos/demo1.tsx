import React from 'react'

import { Badge, Grid, ImageText } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  return (
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
  )
}
