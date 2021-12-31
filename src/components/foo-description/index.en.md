---
nav:
  title: Components
  path: /components
---

## Description

<code src="./demos/demo1.tsx"></code>

### Description

| 属性          | 说明                           | 类型                                                       | 默认值 |
| ------------- | ------------------------------ | ---------------------------------------------------------- | ------ |
| bodyCls       | 内容的 class                   | `string`                                                   | -      |
| style         | 内容的 style                   | `CSSProperties`                                            | -      |
| title         | 标题                           | `string \| ReactNode`                                      | -      |
| titleShow     | 是否显示标题                   | `boolean`                                                  | -      |
| columns       | 几列                           | `number`                                                   | -      |
| toggle        | 是否开关隐藏内容               | `boolean`                                                  | -      |
| showText      | 显示的文字描述                 | `string`                                                   | -      |
| hideText      | 隐藏的文字描述                 | `string`                                                   | -      |
| gap           | 间距，支持[横向间距、纵向间距] | `number \| string \| [number \| string, number \| string]` | -      |
| labelAllWidth | 设置 item 子集 label 的宽度    | `number \| string`                                         | -      |

### Description.Item

| 属性       | 说明           | 类型                            | 默认值 |
| ---------- | -------------- | ------------------------------- | ------ |
| bodyCls    | 内容的 class   | `string`                        | -      |
| style      | 内容的 style   | `CSSProperties`                 | -      |
| label      | 前面的描述文字 | `string \| ReactNode`           | -      |
| labelWidth | 描述文字宽度   | `string \| ReactNode`           | -      |
| labelColon | 是否显示：     | `boolean \| ReactNode`          | true   |
| align      | 垂直方向       | `"center" \| "top" \| "bottom"` | -      |
| justify    | 水平方向       | `"start" \| "center" \| "end"`  | -      |
| hide       | 隐藏           | `boolean`                       | -      |
| span       | 占几列         | `number`                        | -      |
| direction  | 垂直 or 水平   | `"column" \| "row"`             | "row"  |
