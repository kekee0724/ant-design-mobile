import React, { CSSProperties, forwardRef, ReactNode, useState } from 'react'

import classNames from 'classnames'

import { mergeProps } from '../../utils/with-default-props'
import Grid from '../grid'

export type DescriptionProps = {
  bodyCls?: string
  style?: CSSProperties
  title?: string | ReactNode
  titleShow?: boolean
  children?: any
  columns: number
  toggle?: boolean
  showText?: string
  hideText?: string
  gap?: number | string | [number | string, number | string]
  labelAllWidth?: number | string
}

export const WidthContext = React.createContext<number | string>(null!)

export const Description = forwardRef((p: DescriptionProps, _ref: any) => {
  const [show, setShow] = useState<boolean>()

  const defaultProps = {
    titleShow: 'true',
    columns: 2,
    showText: '显示完整信息',
    hideText: '隐藏信息',
    toggle: false,
    gap: [8, 4],
  }

  const props: DescriptionProps = mergeProps(defaultProps, p)

  const {
    bodyCls,
    style,
    title,
    titleShow,
    children,
    columns,
    hideText,
    showText,
    toggle,
    gap,
    labelAllWidth,
  } = props

  return (
    <div className={bodyCls} style={style}>
      <WidthContext.Provider value={labelAllWidth!}>
        {titleShow && (
          <div className='size-18 margin-bottom-xxs'>{title || '--'}</div>
        )}
        <Grid
          columns={columns}
          gap={gap}
          className={classNames(bodyCls, toggle && show && 'all-show')}
        >
          {children}
        </Grid>
        {toggle && (
          <div className='margin-top-xxs'>
            <a onClick={() => setShow(!show)}>{show ? hideText : showText}</a>
          </div>
        )}
      </WidthContext.Provider>
    </div>
  )
})
