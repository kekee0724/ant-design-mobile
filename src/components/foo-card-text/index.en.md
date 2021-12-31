---
nav:
  title: Components
  path: /components
---

## CardText Picture Text Card

<code src="./demos/demo1.tsx"></code>

## CardText

### 属性

| 属性           | 说明                                | 类型                                                             | 默认值                           |
| -------------- | ----------------------------------- | ---------------------------------------------------------------- | -------------------------------- |
| url            | 图片的路径                          | `string`                                                         | -                                |
| text           | 图片下的内容描述                    | `string \| ReactNode `                                           | -                                |
| rows           | 图片下的内容几行截取                | `nubmer`                                                         | 2                                |
| cutWidth       | 图片裁剪宽度                        | `string`                                                         | -                                |
| cutHeight      | 图片裁剪高度                        | `string`                                                         | -                                |
| style          | 自定义样式                          | css                                                              | -                                |
| onClick        | 卡片点击事件                        | `(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void ` | -                                |
| className      | 自定义                              | `class string `                                                  | -                                |
| footer         | text 不满足时使用自定义图片下的内容 | `any `                                                           | -                                |
| content        | 内容，text 不满足条件时使用         | `any `                                                           | -                                |
| type           | 类型： 'block'、'inline'            | `string`                                                         | inline                           |
| textStyle      | 自定义 text 样式                    | `css `                                                           | -                                |
| textClassName  | 自定义 text 的 class                | `string`                                                         | -                                |
| ratio          | 图片显示比例                        | `"16:9" 丨 "4:3" 丨 "1:1" 丨 "2:3" `                             | -                                |
| imageAutoProps | 内部图片组件的设置                  | `{} `                                                            | { style: { "--width": "100%" } } |
| direction      | 布局方式                            | `"column" 丨 "row" 丨 "row-reverse" `                            | column                           |

## CardTextTag

### 属性

| 属性 | 说明                                           | 类型     | 默认值 |
| ---- | ---------------------------------------------- | -------- | ------ |
| type | 类型： 'signing-up'、'in-progress'、'released' | `string` | -      |
