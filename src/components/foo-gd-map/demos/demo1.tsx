import React from 'react'

import { GDMap, Hint } from 'antd-mobile'

export default () => {
  return (
    <div>
      <GDMap title={'活动地图'} address={'上海市黄浦区人民大道185号'} />
      <Hint>高德地图！</Hint>
    </div>
  )
}
