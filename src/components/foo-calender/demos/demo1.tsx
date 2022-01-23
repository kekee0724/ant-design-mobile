import React from 'react'

import {
  getDaysOfPerMonth,
  ListContainer,
  RMCalendar,
  Toast,
  turnWeekNumToChar,
} from 'antd-mobile'
import moment from 'moment'

export default () => {
  return (
    <div>
      <ListContainer>周数字转汉字:{turnWeekNumToChar(0)}</ListContainer>
      <ListContainer>
        当年的每月天数：
        {getDaysOfPerMonth(new Date()).join(',')}
      </ListContainer>
      <RMCalendar
        mode='card'
        type='month'
        defaultDate={new Date()}
        schedule={[
          {
            date: moment().format('YYYY-MM-DD'),
            title: <span className='color-orange'>备注</span>,
            schedule: [
              {
                dot: 1,
              },
            ],
          },
          {
            date: moment().add(1, 'days').format('YYYY-MM-DD'),
            title: '明天',
            schedule: [
              {
                dot: 2,
              },
            ],
          },
        ]}
        onCellClick={(item: {
          year: number
          month: number
          day: number | undefined
        }) =>
          Toast.show({
            content:
              '你点击了：' +
              moment(new Date(item.year, item.month, item.day)).format(
                'YYYY-MM-DD'
              ),
          })
        }
        onPageChange={({ year, month }: any) => {
          Toast.show({
            content: '当前：' + moment(new Date(year, month)).format('YYYY-MM'),
          })
        }}
      />
      <br />
      <RMCalendar defaultDate={new Date()} type='week' />
    </div>
  )
}
