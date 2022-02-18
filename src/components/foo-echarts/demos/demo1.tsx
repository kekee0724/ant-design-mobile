import React from 'react'

import { Card, ECharts } from 'antd-mobile'
import { DemoBlock } from 'demos'

import {
  option1,
  option10,
  option11,
  option12,
  option13,
  option14,
  option15,
  option16,
  option17,
  option2,
  option3,
  option4,
  option5,
  option6,
  option7,
  option8,
  option9,
} from './common'

export default () => {
  return (
    <>
      <DemoBlock title={'line2'} padding={'0'} background={''} border={''}>
        <Card>
          <ECharts option={option1} />
        </Card>
      </DemoBlock>
      <DemoBlock title={'line3'} padding={'0'} background={''} border={''}>
        <Card>
          <ECharts option={option2} />
        </Card>
      </DemoBlock>
      <DemoBlock title={'line5'} padding={'0'} background={''} border={''}>
        <Card>
          <ECharts option={option3} />
        </Card>
      </DemoBlock>
      <DemoBlock title={'line1-bar1'} padding={'0'} background={''} border={''}>
        <Card>
          <ECharts option={option4} />
        </Card>
      </DemoBlock>
      <DemoBlock title={'line1-bar2'} padding={'0'} background={''} border={''}>
        <Card>
          <ECharts option={option5} />
        </Card>
      </DemoBlock>
      <DemoBlock title={'line1-bar2'} padding={'0'} background={''} border={''}>
        <Card>
          <ECharts option={option6} />
        </Card>
      </DemoBlock>
      <DemoBlock title={'bar3'} padding={'0'} background={''} border={''}>
        <Card>
          <ECharts option={option7} />
        </Card>
      </DemoBlock>
      <DemoBlock title={'pie1'} padding={'0'} background={''} border={''}>
        <Card>
          <ECharts
            style={{ width: '100%', height: 200 + 7 * 25 + 'px' }}
            option={option8}
          />
        </Card>
      </DemoBlock>
      <DemoBlock title={'pie8'} padding={'0'} background={''} border={''}>
        <Card>
          <ECharts
            style={{ width: '100%', height: 440 + 'px' }}
            option={option9}
          />
        </Card>
      </DemoBlock>
      <DemoBlock title={'radar5'} padding={'0'} background={''} border={''}>
        <Card>
          <ECharts option={option10} />
        </Card>
      </DemoBlock>
      <DemoBlock title={'scatter'} padding={'0'} background={''} border={''}>
        <Card>
          <ECharts option={option11} />
        </Card>
      </DemoBlock>
      <DemoBlock title={'scatter'} padding={'0'} background={''} border={''}>
        <Card>
          <ECharts option={option12} />
        </Card>
      </DemoBlock>
      <DemoBlock title={'bar2'} padding={'0'} background={''} border={''}>
        <Card>
          <ECharts option={option13} />
        </Card>
      </DemoBlock>
      <DemoBlock title={'garph'} padding={'0'} background={''} border={''}>
        <Card>
          <ECharts option={option14} />
        </Card>
      </DemoBlock>
      <DemoBlock title={'category'} padding={'0'} background={''} border={''}>
        <Card>
          <ECharts option={option15} />
        </Card>
      </DemoBlock>
      <DemoBlock title={'line3-bar3'} padding={'0'} background={''} border={''}>
        <Card>
          <ECharts option={option16} />
        </Card>
      </DemoBlock>
      <DemoBlock title={'bar1'} padding={'0'} background={''} border={''}>
        <Card>
          <ECharts option={option17} />
        </Card>
      </DemoBlock>
    </>
  )
}
