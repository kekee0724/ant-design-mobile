---
nav:
  title: 组件
  path: /components
---

## ImageText 图片文字

<code src="./demos/demo1.tsx"></code>

## ImageText

### 属性

| 属性         | 说明                                    | 类型                  | 默认值 |
| ------------ | --------------------------------------- | --------------------- | ------ |
| icon         | 图标                                    | `string \| ReactNode` | -      |
| iconSize     | 图标大小                                | `string`              | -      |
| text         | 文字                                    | `any`                 | -      |
| backIcon     | 是否带背景                              | `boolean`             | -      |
| backColor    | 开启带背景的图标                        | `boolean`             | -      |
| radius       | 圆角                                    | `8 \| "50%"`          | 50%    |
| badgeContent | 开启带背景的图标后传入的徽章内容        | `string` 丨 Badge.dot | -      |
| badgeColor   | 徽章的颜色                              | `string`              | -      |
| width        | 带背景的宽度                            | `string \| number`    | -      |
| height       | 带背景的高度                            | `string \| number`    | -      |
| onClick      | 点击事件                                | `void`                | -      |
| backClass    | 传入背景 class,默认随机色， back-0、-13 | `string`              | -      |
