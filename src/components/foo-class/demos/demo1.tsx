import React from 'react'

import { Space, Tag } from 'antd-mobile'
import { DemoBlock } from 'demos'

import style from './demo1.less'

export default () => {
  return (
    <>
      <DemoBlock
        title='color循环色、一般用于连续的需要颜色的内容，如应用颜色，列表图标等'
        background='#f5f7fa'
        padding='0'
      >
        <div className={style.demoColor}>
          {Array.from(Array(14), (v, k) => k).map((data, i) => {
            return (
              <span key={i} className={'color-' + i}>
                {'color-' + i}
              </span>
            )
          })}
        </div>
        <div className={style.demoBack}>
          {Array.from(Array(14), (v, k) => k).map((data, i) => {
            return (
              <div key={i}>
                <span className={'back-' + i} />
                {'back-' + i}
              </div>
            )
          })}
        </div>
      </DemoBlock>
      <DemoBlock title='定义颜色'>
        <div className='margin-bottom color-red'>
          慎用白色与黑色，后续需适配暗色主题，不影响其背景变为黑色时可使用,此处tag只做展示用，需要使用tag色请移步tag
        </div>
        <Space wrap={true}>
          <Tag fill='outline' className='color-wechat'>
            微信品牌色
          </Tag>
          <Tag fill='outline' className='color-qq'>
            qq品牌色
          </Tag>
          <Tag fill='outline' className='color-weiBo'>
            微博品牌色
          </Tag>
          <Tag fill='outline' className='color-red'>
            红色
          </Tag>
          <Tag fill='outline' className='color-orange'>
            橙色
          </Tag>
          <Tag fill='outline' className='color-yellow'>
            黄色
          </Tag>
          <Tag fill='outline' className='color-green'>
            绿色
          </Tag>
          <Tag fill='outline' className='color-cyan'>
            青色
          </Tag>
          <Tag fill='outline' className='color-orange'>
            橙色
          </Tag>
          <Tag fill='outline' className='color-blue'>
            蓝色
          </Tag>
          <Tag fill='outline' className='color-blue'>
            紫色
          </Tag>
          <Tag fill='solid' className='color-white'>
            白色
          </Tag>
          <Tag fill='outline' className='color-black'>
            黑色
          </Tag>
          <Tag fill='outline' className='color-primary'>
            品牌色
          </Tag>
          <Tag fill='outline' className='color-start'>
            开始
          </Tag>
          <Tag fill='outline' className='color-success'>
            完成
          </Tag>
          <Tag fill='outline' className='color-error'>
            错误
          </Tag>
          <Tag fill='outline' className='color-default'>
            默认
          </Tag>
          <Tag fill='outline' className='color-processing'>
            正在处理
          </Tag>
          <Tag fill='outline' className='color-waiting'>
            等待
          </Tag>
        </Space>
      </DemoBlock>
    </>
  )
}
