import React from 'react'

import { GDMap, Hint } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  return (
    <div>
      <GDMap title={'活动地图'} address={'上海市黄浦区人民大道185号'} />
      <Hint>levi.config.ts中需要填写mapKey</Hint>
      <DemoBlock title={'展示地址'} padding={'0'} background={''} border={''}>
        <GDMap />
      </DemoBlock>
      <DemoBlock title={'自定义'} padding={'0'} background={''} border={''}>
        <div style={{ height: 200 }}>
          <GDMap
            custom={true}
            init={(_map: any) => {
              // map.getCenter()
              // 实现所有地图功能
            }}
          />
        </div>
      </DemoBlock>
    </div>
  )
}
