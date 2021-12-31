---
nav:
  title: 组件
  path: /components
---

## Container 布局组件

<code src="./demos/demo1.tsx"></code>

## Container

### 属性

| 属性       | 说明                   | 类型                                                                     | 默认值 |
| ---------- | ---------------------- | ------------------------------------------------------------------------ | ------ |
| align      | 垂直方向               | `"end" \| "center" \| "start" \| "top" \| "bottom" \| "left" \| "right"` | -      |
| direction  | 垂直 or 水平           | `"column" \| "row" `                                                     | -      |
| fill       | 是否填充               | `boolean `                                                               | -      |
| body       | 根据父容器进行定位填充 | `boolean `                                                               | -      |
| justify    | 水平方向               | `boolean \| "end" \| "center" \| "start" `                               | -      |
| body       | 根据父容器进行定位填充 | `boolean `                                                               | -      |
| scrollable | 是否滚动               | `boolean \| { left: number; top: number } `                              | -      |
| page       | view 全屏布局          | `boolean `                                                               | -      |
| className  | 自定义                 | `class string `                                                          | -      |
| range      | 简单布局               | `"container" \| "body" \| "center" `                                     | -      |
