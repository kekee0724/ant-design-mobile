---
nav:
  title: 组件
  path: /components
---

## RMCalendar 日历

<code src="./demos/demo1.tsx"></code>

## RMCalendar

### 属性

| 属性           | 说明                | 类型              | 默认值     |
| -------------- | ------------------- | ----------------- | ---------- |
| defaultDate    | 默认时间            | `Date`            | new Date() |
| type           | 日历类型            | `"month"丨"week"` | "month"    |
| type           | 日历类型            | `"month"丨"week"` | "month"    |
| touch          | 是否可滑动          | `Boolen`          | true       |
| width          | 日历宽度            | `String`          | "100%"     |
| locale         | 语言区              | `String`          | "zh-cn"    |
| firstDayOfWeek | 周起始日[周日-周六] | `[0-6]`           | 0          |
| schedule       | 日程数据            | `Array`           | []         |
| toolbar        | 顶部工具栏          | `Boolen`          | true       |

### events

| 属性         | 说明               | 类型                      |
| ------------ | ------------------ | ------------------------- |
| onCellClick  | 日期单元格点击事件 | `(item) => {}`            |
| onPageChange | 翻页事件           | `({ year, month }) => {}` |
| onDayClick   | 点击今天事件       | `({ date }) => {}`        |

### 方法

| 方法                   | 说明                                                                                                                                      | 参数                                                  |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| turnWeekNumToChar      | 周数字转汉字，参数：0-6                                                                                                                   | `day : Integer`                                       |
| getDaysOfPerMonth      | 获取每个月的天数，参数：日期                                                                                                              | `date : Date`                                         |
| getDataOfHeader        | 获取表头周数据， 参数：周起始日(0-6)                                                                                                      | `firstDayOfWeek: Number`                              |
| getComposeDaysOfBoard  | 获取面板组成天数据，参数 1：date 日期，参数 2：周起始日，参数 3：查询部分[-1：获取上月组成天数, 0：获取本月组成天数, 1：获取下月组成天数] | `date: Date, firstDayOfWeek: Number, order: Number`   |
| getDataOfBoard         | 获取面板所有日期数据，参数 1：日期，参数 2：周起始日                                                                                      | `date: Date, firstDayOfWeek: Number`                  |
| getWeekRowOfBoard      | 获取日期所在面板中的行数，参数 1：日期，参数 2：周起始日                                                                                  | `date: Date, firstDayOfWeek: Number`                  |
| getComputedDataOfBoard | 获取合成日程表数据的日期面板数据，参数 1：日期，参数 2：周起始日期，日程表数据                                                            | `date: Date, firstDayOfWeek: Number, schedule: Array` |
| dateToValid            | 校正日期 1900-2099，大于或小于正常数据范围自动纠正                                                                                        | `date: Date`                                          |
