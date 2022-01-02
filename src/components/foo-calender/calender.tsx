import 'moment/locale/zh-cn'

import React, { FC, forwardRef, useEffect, useState } from 'react'

import classNames from 'classnames/bind'
import $ from 'jquery'
import moment from 'moment'
import * as PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { virtualize } from 'react-swipeable-views-utils'

import { mergeProps } from '../../utils/with-default-props'
import { PureComponentProps, PureComponentState } from '../foo'
import { goDateBoard, slideRenderer } from './slideRenderer'

const VirtualizeSwipeableViews = virtualize(SwipeableViews)

const cx = classNames.bind({})

interface ObjState {
  setState: any
}

let st: any = 0,
  sc: any = 0,
  startX: any,
  startY: any,
  result: any,
  _this: ObjState

const turnWeekNumToChar = (num: number) => {
  switch (num) {
    case 0:
      return '日'
    case 1:
      return '一'
    case 2:
      return '二'
    case 3:
      return '三'
    case 4:
      return '四'
    case 5:
      return '五'
    case 6:
      return '六'
    default:
      return null
  }
}

const getDaysOfPerMonth = (date: { getFullYear: () => any }) => {
  // 获取（天/月）数据
  const year = date.getFullYear()
  const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    days[1] = 29
  }
  return days
}

const getDataOfHeader = (firstDayOfWeek: number) => {
  // 获取周排列数据
  const start = firstDayOfWeek
  const week = [
    { day: 0, 'zh-cn': '日', en: 'Sun' },
    { day: 1, 'zh-cn': '一', en: 'Mon' },
    { day: 2, 'zh-cn': '二', en: 'Tue' },
    { day: 3, 'zh-cn': '三', en: 'Wed' },
    { day: 4, 'zh-cn': '四', en: 'Thu' },
    { day: 5, 'zh-cn': '五', en: 'Fri' },
    { day: 6, 'zh-cn': '六', en: 'Sat' },
  ]
  const p1 = week.slice(start)
  const p2 = week.slice(0, start)
  return p1.concat(p2)
}

const getComposeDaysOfBoard = (
  date: { getFullYear: () => any; getMonth: () => any },
  firstDayOfWeek = 0,
  order = 0
) => {
  // 获取面板组成天数据 [-1：获取上月组成天数 | 0：获取本月组成天数 | 1：获取下月组成天数]
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = new Date(year, month, 1).getDay()
  const daysOfPerMonth = getDaysOfPerMonth(date)
  const weekCharacter = getDataOfHeader(firstDayOfWeek)
  const theMonthNumOfBoard = daysOfPerMonth[month]
  let preMonthNumOfBoard = 0 // 上月组成天数
  for (let i = 0; i < weekCharacter.length; i++) {
    const item = weekCharacter[i]
    if (item.day === day) preMonthNumOfBoard = i
  }
  if (order === -1) {
    // 上月组成天数
    return preMonthNumOfBoard
  }
  if (order === 1) {
    // 下月组成天数
    const sumDays = 6 * 7
    return sumDays - theMonthNumOfBoard - preMonthNumOfBoard
  }
  // 本月组成天数
  return theMonthNumOfBoard
}

const getDataOfBoard = (
  date: { getFullYear: () => any; getMonth: () => any },
  firstDayOfWeek: number | undefined
) => {
  // 获取面板所有日期数据
  const year = date.getFullYear()
  const month = date.getMonth()
  const daysOfPerMonth = getDaysOfPerMonth(date)
  const preMonthNum = getComposeDaysOfBoard(date, firstDayOfWeek, -1)
  const theMonthNum = getComposeDaysOfBoard(date, firstDayOfWeek, 0)
  const nextMonthNum = getComposeDaysOfBoard(date, firstDayOfWeek, 1)
  return new Array(42).fill(null).map((_item, i) => {
    // 验证数据范围：1900-2099
    if (year < 1900 || year > 2099) return false
    // 上月数据
    if (i < preMonthNum) {
      const preMonth = month - 1 >= 0 ? month - 1 : 11
      const preMYear = month - 1 >= 0 ? year : year - 1
      if (preMYear < 1900) return false
      return {
        day: daysOfPerMonth[preMonth] - preMonthNum + i + 1,
        month: preMonth,
        year: preMYear,
        monthIndex: -1,
      }
    }
    // 本月数据
    if (i < theMonthNum + preMonthNum) {
      const today = new Date()
      const thisYear = today.getFullYear()
      const thisMonth = today.getMonth()
      const thisDate = today.getDate()
      const data: any = {
        day: i + 1 - preMonthNum,
        month,
        year,
        monthIndex: 0,
      }
      if (
        thisDate === data.day &&
        thisMonth === data.month &&
        thisYear === data.year
      ) {
        data.today = true // 今日
      }
      return data
    }
    // 下月数据
    const nextMonth = month + 1 <= 11 ? month + 1 : 0
    const nextMYear = month + 1 <= 11 ? year : year + 1
    if (nextMYear > 2099) return false
    return {
      day: i - 41 + nextMonthNum,
      month: nextMonth,
      year: nextMYear,
      monthIndex: 1,
    }
  })
}

const getWeekRowOfBoard = (
  date: { getFullYear: () => any; getMonth: () => any; getDate: () => any },
  firstDayOfWeek: any
) => {
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  const dataOfBoard = getDataOfBoard(date, firstDayOfWeek)
  if (Array.isArray(dataOfBoard) && dataOfBoard.length > 0) {
    for (let i = 0; i < dataOfBoard.length; i++) {
      const item = dataOfBoard[i]
      if (item.year === year && item.month === month && item.day === day) {
        return Math.floor(i / 7)
      }
    }
  }
  return 0
}

const getComputedDataOfBoard = (
  date: any,
  firstDayOfWeek: any,
  schedule: string | any[]
) => {
  // 获取合并后的日历日程表完整数据
  const dataOfBoard = getDataOfBoard(date, firstDayOfWeek)
  // 合并数据：将传入的日程数据合并到日历上
  return dataOfBoard.map(item => {
    const itemBoardDate = moment(
      new Date(item.year, item.month, item.day)
    ).format('YYYY-MM-DD')
    for (let i = 0; i < schedule.length; i++) {
      const itemSchedule = schedule[i]
      const itemScheduleDate =
        itemSchedule.date && moment(itemSchedule.date).format('YYYY-MM-DD')
      if (itemBoardDate === itemScheduleDate) {
        return {
          ...item,
          data: itemSchedule,
        }
      }
    }
    return item
  })
}

const dateToValid = (date = new Date()) => {
  if (date.getFullYear() < 1900) return new Date(1900, 0, 1) // date设置最小值
  if (date.getFullYear() > 2099) return new Date(2099, 11, 31) // date设置最大值
  return date
}

export interface RMCalendarProps extends PureComponentProps {
  defaultDate: any
  type: any
  touch?: any
  width?: any
  locale?: any
  firstDayOfWeek?: any
  toolbar?: any
  schedule?: any
  onCellClick?: any
  onPageChange?: any
  mode?: 'card' | undefined
}

const defaultProps = {
  type: 'month',
  firstDayOfWeek: 0,
  schedule: [],
  width: '100%',
  locale: 'zh-cn',
  toolbar: true,
  touch: true,
  onCellClick: null,
  onPageChange: null,
  bodyClassName: '',
}

export interface RMCalendarState extends PureComponentState {
  type: any
  dropdownList: boolean
  hasError: boolean
  prevProps: any
  date: any
  selectDate: any
  cellHeight: any
  index: any
  animate: any
}

const getDerivedStateFromProps = (
  props: RMCalendarProps,
  state: RMCalendarState
) => {
  const nextType = props.type
  const prevType = state.prevProps.type
  // 将type转化为受控属性：prop type 与 state type 映射
  if (nextType !== prevType) {
    const { selectDate } = state
    return {
      prevProps: {
        ...state.prevProps,
        type: nextType,
      },
      type: nextType,
      date: new Date(selectDate.year, selectDate.month, selectDate.day),
      index: 0,
    }
  }
  return null
}

export const RMCalendar: FC<RMCalendarProps> = forwardRef((p, _ref) => {
  const props = mergeProps(defaultProps, p)
  const propTypes = {
    defaultDate: PropTypes.instanceOf(Date).isRequired,
    type: PropTypes.oneOf(['month', 'week']),
    firstDayOfWeek: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
    schedule: PropTypes.any,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    locale: PropTypes.oneOf(['zh-cn', 'en']),
    toolbar: PropTypes.bool,
    touch: PropTypes.bool,
    onCellClick: PropTypes.func,
    onPageChange: PropTypes.func,
  }
  const calendar = React.createRef() as any
  let aniTwo: number
  let ani: number
  let timer: NodeJS.Timeout

  // type 将维护为受控属性，defaultDate 为不受控属性
  const {
    type: types,
    defaultDate,
    firstDayOfWeek,
    toolbar,
    width,
    touch,
    className,
    bodyClassName,
  } = props
  const validDate = dateToValid(defaultDate) // 校正范围
  const [state, setState] = useState<RMCalendarState>({
    hasError: false,
    prevProps: { type: types }, // 用于比对props是否变化，只在getDerivedStateFromProps中维护，内部不宜setState
    type: types,
    date: validDate,
    selectDate: {
      year: validDate.getFullYear(),
      month: validDate.getMonth(),
      day: validDate.getDate(),
    },
    cellHeight: 0,
    dropdownList: false,
    index: 0, // 滑动面板默认页索引
    animate: true,
  })

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      cancelAnimationFrame(ani)
      cancelAnimationFrame(aniTwo)
      clearTimeout(timer)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const { index, selectDate } = state
    const { onPageChange } = props
    aniTwo = requestAnimationFrame(() => {
      if (onPageChange) onPageChange(selectDate)
    })
  }, [state?.index])

  const setDate = (data: string | number | Date, index: any) => {
    const date = new Date(data)
    setState(state => ({
      ...state,
      selectDate: {
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate(),
      },
      date: date,
      index: index,
    }))
  }

  const handleCellClick = (item: {
    year: any
    monthIndex?: any
    month?: any
    day?: any
  }) => {
    if (!item || (item && item.year > 2099) || (item && item.year < 1900))
      return // 1900-2099
    const { onCellClick } = props as any
    if (onCellClick) onCellClick(item)
    setState(state => {
      const { year, month, day } = item
      const {
        year: selectYear,
        month: selectMonth,
        day: selectDay,
      } = state.selectDate
      if (year !== selectYear || month !== selectMonth || day !== selectDay) {
        const { index, type } = state
        return {
          ...state,
          index: type === 'month' ? index + item.monthIndex : index,
          selectDate: { year, month, day },
        }
      }
      return state
    })
  }

  const handleResize = () => {
    if (!calendar.current) return
    const cellHeight =
      Math.floor(calendar.current.querySelector('table').clientWidth / 7) - 10
    setState(state => {
      if (state.cellHeight !== cellHeight) {
        return {
          ...state,
          cellHeight,
        }
      }
      return state
    })
  }

  const handleChangeType = (type: string) => {
    setState(state => ({ ...state, animate: false }))
    setState(state => {
      // 重置基础date日期
      const { selectDate, type: prevType } = state
      const date = new Date(selectDate.year, selectDate.month, selectDate.day)
      if (prevType !== type) return { ...state, type, date, index: 0 }
      return state
    })
    timer = setTimeout(() => {
      setState(state => ({ ...state, animate: true }))
    }, 300)
    setState(state => ({ ...state, dropdownList: false }))
    setTimeout(() => {
      if (state.type === 'month') {
        $(calendar.current).css({ height: '316px' })
      } else {
        $(calendar.current).css({ height: '116px' })
      }
    })
  }

  const handleChangeBoard = (go: number) => {
    const { index } = state
    const nextIndex = index + go
    const { selectDate }: any = goDateBoard(nextIndex, { props, state })
    setState(state => ({
      ...state,
      index: nextIndex, // 翻页
      selectDate,
    }))
  }

  const handleChangePage = (index: any) => {
    const { selectDate }: any = goDateBoard(index, { props, state })
    ani = requestAnimationFrame(() => {
      setState(state => ({ ...state, index, selectDate }))
    })
  }

  const getAngle = (angx: number, angy: number) => {
    return (Math.atan2(angy, angx) * 180) / Math.PI
  }

  const getDirection = (
    startX: number,
    startY: number,
    endx?: any,
    endy?: any
  ) => {
    const angx = endx - startX
    const angy = endy - startY
    if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
      return result
    }
    const angle = getAngle(angx, angy)
    if (angle >= -135 && angle <= -45) {
      result = 1
    } else if (angle > 45 && angle < 135) {
      result = 2
    } else if (
      (angle >= 135 && angle <= 180) ||
      (angle >= -180 && angle < -135)
    ) {
      result = 3
    } else if (angle >= -45 && angle <= 45) {
      result = 4
    }
    return result
  }

  const handleTouch = (e: any) => {
    const dom = document.querySelector('.container-scrollable') as any
    if (e.type === 'touchstart') {
      startX = e.touches[0].pageX
      startY = e.touches[0].pageY
      sc = $(calendar.current)
      sc.css({ transform: 'translate3d(0, 0, 0)' })
      st = sc.height()
      dom.style.overflow = 'hidden'
    } else if (e.type === 'touchend') {
      const endX = e.changedTouches[0].pageX
      const endY = e.changedTouches[0].pageY
      const direction = getDirection(startX, startY, endX, endY)
      if (Math.abs(endY - startY) >= 60) {
        switch (direction) {
          case 1:
            sc.css({ transition: 'height .1s' })
            setTimeout(() => {
              sc.css({ height: '116px' })
              setTimeout(() => {
                handleChangeType('week')
              }, 100)
            })
            break
          case 2:
            sc.css({ transition: 'height .1s' })
            setTimeout(() => {
              sc.css({ height: '316px' })
              setTimeout(() => {
                handleChangeType('month')
              }, 100)
            })
            break
          default:
            break
        }
        setTimeout(() => {
          if (state.type === 'month') {
            sc.css({ height: '316px' })
          } else {
            sc.css({ height: '116px' })
          }
        }, 300)
      } else {
        if (state.type === 'week') {
          sc.css({ transition: 'height .3s' })
          setTimeout(function () {
            sc.css({ height: '116px' })
          })
        } else {
          sc.css({ transition: 'height .3s' })
          setTimeout(function () {
            sc.css({ height: '316px' })
          })
        }
      }
      dom!.style.overflow = 'auto'
    } else if (e.type === 'touchmove') {
      const sel = getDirection(startX, startY) || 1
      const ie =
        e.touches[0].clientY - startY <= 0
          ? e.touches[0].clientY - startY
          : e.touches[0].clientY - startY
      switch (sel) {
        default:
          break
        case 1:
          if (st === 116) {
            sc.css({
              height: st + ie >= 316 ? 316 : st + ie <= 116 ? 116 : st + ie,
              transition: 'none',
            })
          } else {
            sc.css({
              height: st + ie <= 116 ? 116 : st + ie >= 316 ? 316 : st + ie,
              transition: 'none',
            })
          }
          break
        case 2:
          if (st === 116) {
            sc.css({
              height: st + ie >= 316 ? 316 : st + ie,
              transition: 'none',
            })
          } else {
            sc.css({
              height: st + ie <= 116 ? 116 : st + ie >= 316 ? 316 : st + ie,
              transition: 'none',
            })
          }
          break
      }
    }
  }

  const { type, selectDate, dropdownList, index, animate, hasError } = state
  const selectDateTime = new Date(
    selectDate.year,
    selectDate.month,
    selectDate.day
  )

  const computeSlideCount = () => {
    if (
      selectDate.year < 1900 ||
      (selectDate.year === 1900 && selectDate.month === 0)
    ) {
      return 2
    }
    if (selectDate.year > 2099) {
      return 1
    }
    return 0
  }

  if (hasError) {
    return <h2 className='text-center'>抱歉出错了~请重新打开页面</h2>
  }

  return (
    <div
      ref={calendar}
      className={classNames(
        'calendar-box',
        className,
        props.mode === 'card' && 'calendar-card'
      )}
      onTouchStart={handleTouch}
      onTouchMove={handleTouch}
      onTouchEnd={handleTouch}
      onTouchCancel={handleTouch}
    >
      {toolbar && (
        <div
          className={'top-bar'}
          style={{ width: typeof width === 'number' ? `${width}px` : width }}
        >
          <div className={'date'}>
            <div
              className={'opt-btn'}
              role='button'
              data-index='0'
              onClick={() =>
                setState(state => ({
                  ...state,
                  dropdownList: !state.dropdownList,
                }))
              }
            >
              <div className={'month'}>{`${selectDate.month < 9 ? 0 : ''}${
                selectDate.month + 1
              }月`}</div>
              <div className={'week-year'}>
                <div>
                  {type === 'week'
                    ? `第 ${moment(selectDateTime)
                        .locale('en-US')
                        .format(firstDayOfWeek === 0 ? 'ww' : 'WW')} 周`
                    : `周${turnWeekNumToChar(selectDateTime.getDay())}`}
                </div>
                <div
                  className={cx('year', {
                    up: !dropdownList,
                    down: dropdownList,
                  })}
                >{`${selectDate.year}年`}</div>
              </div>
            </div>
            <div className={'turn-btn'}>
              <div
                className={cx('btn', 'down', {
                  disabled:
                    selectDate.year < 1900 ||
                    (selectDate.year === 1900 && selectDate.month === 0),
                })}
                role='button'
                data-index='-1'
                onClick={() => handleChangeBoard(-1)}
              />
              <div
                className={cx('btn', 'up', {
                  disabled:
                    selectDate.year > 2099 ||
                    (selectDate.year === 2099 && selectDate.month === 11),
                })}
                role='button'
                data-index='-2'
                onClick={() => handleChangeBoard(1)}
              />
            </div>
          </div>
          {dropdownList && (
            <div key={'a'} className={'options'}>
              <div
                className={'opt'}
                role='button'
                data-index='-3'
                onClick={() => handleChangeType('month')}
              >
                <i className={cx({ selected: type === 'month' })}>月</i>
              </div>
              <div
                className={'opt'}
                role='button'
                data-index='-4'
                onClick={() => handleChangeType('week')}
              >
                <i className={cx({ selected: type === 'week' })}>周</i>
              </div>
            </div>
          )}
        </div>
      )}
      <div className={'date-body ' + bodyClassName}>
        <VirtualizeSwipeableViews
          disabled={!touch}
          slideCount={computeSlideCount()}
          resistance
          ignoreNativeScroll
          animateTransitions={animate}
          index={index}
          onChangeIndex={handleChangePage}
          slideRenderer={(params: any) =>
            slideRenderer(
              params,
              { props, state, handleCellClick },
              { getDataOfHeader, getComputedDataOfBoard, getWeekRowOfBoard }
            )
          }
        />
      </div>
    </div>
  )
})
