---
nav:
  title: 组件
  path: /components
---

## ImageAuto 图片展示组件

推荐使用 ratio 比例显示
<code src="./demos/demo1.tsx"></code>

## ImageAuto

### 属性

| 属性         | 说明                                                 | 类型                                                             | 默认值 |
| ------------ | ---------------------------------------------------- | ---------------------------------------------------------------- | ------ |
| ratio        | 按比例显示图片，设置此属性后无需传入高宽以及裁剪高宽 | `"16:9" \| "4:3" \| "1:1" \| "2:3"`                              | -      |
| src          | 图片路径                                             | `string`                                                         | -      |
| height       | 图片高度                                             | `string \| nubmer`                                               | -      |
| width        | 图片宽度                                             | `string \| nubmer`                                               | -      |
| cutWidth     | 缩放裁剪宽度                                         | `nubmer`                                                         | -      |
| cutHeight    | 缩放裁剪高度                                         | `nubmer`                                                         | -      |
| cropWidth    | 不缩放裁剪宽度                                       | `nubmer`                                                         | -      |
| cropHeight   | 不缩放裁剪高度                                       | `nubmer`                                                         | -      |
| style        | 自定义 style                                         | `css -                                                           |
| className    | 自定义 class                                         | `string`                                                         | -      |
| fit          | 图片如何填充容器                                     | `'contain' \| 'cover' \| 'fill' \| 'none' \| 'scale-down'`       | -      |
| onClick      | 点击事件                                             | `(event: React.SyntheticEvent<HTMLImageElement, Event>) => void` | -      |
| alt          | 图片的描述信息                                       | `string`                                                         | -      |
| borderRadius | 图片的圆角                                           | `nubmer \| string`                                               | -      |
| lazy         | 图片是否懒加载                                       | `boolean`                                                        | -      |
| onError      | 图片错误触发                                         | `(event: React.SyntheticEvent<HTMLImageElement, Event>) => void` | -      |
| fallback     | 错误时的占位                                         | `ReactNode`                                                      | -      |
| placeholder  | 加载时的占位                                         | `ReactNode`                                                      | -      |
