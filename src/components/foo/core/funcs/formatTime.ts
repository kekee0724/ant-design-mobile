import 'moment/locale/zh-cn'

import moment from 'moment'

export function getDate(date: string | Date, def?: Date): Date | undefined {
  return date instanceof Date
    ? date
    : date
    ? new Date(date.replace(/\\-/g, '/').replace(/T/g, ' ').substr(0, 19))
    : def
}

export function formatNow(fmt = 'yyyy-MM-dd') {
  return formatDate(new Date(), fmt)
}

export function formatDateTime(
  date: Date | string,
  fmt = 'yyyy-MM-dd hh:mm:ss'
) {
  return formatDate(date, fmt)
}

// 只用于发送数据格式化数据
export function formatDateTimeSend(
  date: Date | string,
  fmt = 'yyyy-MM-ddThh:mm:ss'
) {
  return formatDate(date, fmt)
}

export function formatDate(date: Date | string, fmt = 'yyyy-MM-dd'): string {
  const value = getDate(date)

  return value ? value.format(fmt) : (date as any)
}
/**
 * 获取当前日期N天后日期
 * @param days GetDateStr
 */
export function getDateStr(days?: any, fmt = 'yyyy-MM-dd') {
  return formatDate(moment().add(days, 'days').toDate(), fmt)
}

/**
 * 获取指定日期N天后日期
 * @param days GetDateStr
 */
export function getSetDateStr(
  date: Date | string,
  days: number,
  fmt = 'yyyy-MM-dd'
) {
  return formatDate(moment(getDate(date)).add(days, 'days').toDate(), fmt)
}

export function formatDates(fmt = 'yyyy-MM-dd') {
  return (date: Date | string) => formatDate(date, fmt)
}

export function formatDateTimes(fmt = 'yyyy-MM-dd hh:mm:ss') {
  return (date: Date | string) => formatDate(date, fmt)
}

export function format(this: Date, fmt: string): string {
  const o: { [key: string]: any } = {
    'M+': this.getMonth() + 1, // 月份
    'd+': this.getDate(), // 日
    'h+': this.getHours(), // 小时
    'm+': this.getMinutes(), // 分
    's+': this.getSeconds(), // 秒
    'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
    S: this.getMilliseconds(), // 毫秒
  }

  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + '').substr(4 - RegExp.$1.length)
    )

  for (const k in o)
    if (new RegExp('(' + k + ')').test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )

  return fmt
}

;(Date as any).prototype.format = format

export function formatTime(date: Date | string, fmt = 'hh:mm') {
  return formatDate(date, fmt)
}

/**
 * 判断周几
 */
export function getWeekStr(date: string, days: number) {
  const week = moment(getDate(date)).add(days, 'days').day()
  let str
  if (week === 0) {
    str = '周日'
  } else if (week === 1) {
    str = '周一'
  } else if (week === 2) {
    str = '周二'
  } else if (week === 3) {
    str = '周三'
  } else if (week === 4) {
    str = '周四'
  } else if (week === 5) {
    str = '周五'
  } else if (week === 6) {
    str = '周六'
  }
  return str
}

export const turnWeekNumToChar = (num: number) => {
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

export const getDaysOfPerMonth = (date: { getFullYear: () => any }) => {
  // 获取（天/月）数据
  const year = date.getFullYear()
  const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    days[1] = 29
  }
  return days
}

export const getDataOfHeader = (firstDayOfWeek: number) => {
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

export const getComposeDaysOfBoard = (
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

export const getDataOfBoard = (
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

export const getWeekRowOfBoard = (
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

export const getComputedDataOfBoard = (
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

export const dateToValid = (date = new Date()) => {
  if (date.getFullYear() < 1900) return new Date(1900, 0, 1) // date设置最小值
  if (date.getFullYear() > 2099) return new Date(2099, 11, 31) // date设置最大值
  return date
}
