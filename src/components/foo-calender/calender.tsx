import 'moment/locale/zh-cn'

import React, { FC, forwardRef, useEffect, useState } from 'react'

import classNames from 'classnames/bind'
import $ from 'jquery'
import moment from 'moment'
import * as PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { virtualize } from 'react-swipeable-views-utils'

import { mergeProps } from '../../utils/with-default-props'
import {
  dateToValid,
  formatDate,
  getComputedDataOfBoard,
  getDataOfHeader,
  getWeekRowOfBoard,
  PureComponentProps,
  PureComponentState,
  turnWeekNumToChar,
} from '../foo'
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

export interface RMCalendarProps extends PureComponentProps {
  defaultDate?: any
  type?: any
  touch?: any
  width?: any
  locale?: any
  firstDayOfWeek?: any
  toolbar?: any
  schedule?: any
  onCellClick?: any
  onPageChange?: any
  onDayClick?: any
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
  onDayClick: null,
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

export const RMCalendar: FC = forwardRef((p: RMCalendarProps) => {
  const props = mergeProps(defaultProps, p)
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
        $(calendar.current).css({ height: '338px' })
      } else {
        $(calendar.current).css({ height: '112px' })
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

  const getAngle = (angX: number, angY: number) => {
    return (Math.atan2(angY, angX) * 180) / Math.PI
  }

  const getDirection = (
    startX: number,
    startY: number,
    endX?: any,
    endY?: any
  ) => {
    const angX = endX - startX
    const angY = endY - startY
    if (Math.abs(angX) < 2 && Math.abs(angY) < 2) {
      return result
    }
    const angle = getAngle(angX, angY)
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
              sc.css({ height: '112px' })
              setTimeout(() => {
                handleChangeType('week')
              }, 100)
            })
            break
          case 2:
            sc.css({ transition: 'height .1s' })
            setTimeout(() => {
              sc.css({ height: '338px' })
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
            sc.css({ height: '338px' })
          } else {
            sc.css({ height: '112px' })
          }
        }, 300)
      } else {
        if (state.type === 'week') {
          sc.css({ transition: 'height .3s' })
          setTimeout(function () {
            sc.css({ height: '112px' })
          })
        } else {
          sc.css({ transition: 'height .3s' })
          setTimeout(function () {
            sc.css({ height: '338px' })
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

  const VSViews = VirtualizeSwipeableViews as any
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
              {!moment(moment(selectDateTime).format('YYYY-MM-DD')).isSame(
                moment(new Date()).format('YYYY-MM-DD')
              ) && (
                <div
                  onClick={() => {
                    const choseDate = formatDate(new Date())
                    setDate(choseDate, 0)

                    const { onDayClick } = props
                    if (onDayClick) onDayClick(choseDate)
                  }}
                >
                  今
                </div>
              )}
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
        <VSViews
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

RMCalendar.propTypes = {
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
  onDayClick: PropTypes.func,
}
