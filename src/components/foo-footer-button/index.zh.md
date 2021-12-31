---
nav:
  title: 组件
  path: /components
---

## FooterButton 底部固定按钮

<code src="./demos/demo1.tsx"></code>

## FooterButton

### 属性

| 属性      | 说明                             | 类型      | 默认值 |
| --------- | -------------------------------- | --------- | ------ |
| className | 自定义类                         | `string`  | -      |
| border    | 是否有边框                       | `boolean` | -      |
| back      | 是否有背景                       | `boolean` | -      |
| columns   | 自定义显示几列                   | `number`  | -      |
| gridProps | 内部 grid 的属性，参照 Grid 组件 | `{}`      | -      |
| gap       | 间距                             | `number`  | 8      |

## FooterButton.Item

### 属性

| 属性          | 说明               | 类型                            | 默认值 |
| ------------- | ------------------ | ------------------------------- | ------ |
| span          | 占几列             | `number`                        | -      |
| onClick       | 点击               | `()=>`                          | -      |
| align         | 垂直方向           | `"center" 丨 "top" 丨 "bottom"` | -      |
| justify       | 水平方向           | `"start" 丨 "center"丨 "end"`   | -      |
| gridItemProps | Grid.Item 的 props | `{}`                            | -      |
