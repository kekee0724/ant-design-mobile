import React from 'react'

import { Hint, RMCalendar } from 'antd-mobile'

export default () => {
  return (
    <div>
      <RMCalendar mode={'card'} type='week' defaultDate={new Date()} />
      <Hint>日历！</Hint>
    </div>
  )
}
