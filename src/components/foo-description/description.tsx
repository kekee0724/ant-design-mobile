import React, { CSSProperties, forwardRef, ReactNode, useState } from 'react'

import classNames from 'classnames'

import { mergeProps } from '../../utils/with-default-props'
import Grid from '../grid'

export type DescriptionProps = {
  className?: string
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
  labelAllJustify?: boolean
  itemAllDirection?: 'column' | 'row'
  itemAllAlign?: 'center' | 'top' | 'bottom'
  itemAllJustify?: 'start' | 'center' | 'end'
  itemAllLabelColon?: boolean
  toggleDefault?: boolean
}

export const WidthContext = React.createContext<{
  width: any
  labelJustify: any
  direction: any
  align: any
  justify: any
  labelColon: any
}>(null!)

export const Description = forwardRef((p: DescriptionProps) => {
  const defaultProps = {
    titleShow: 'true',
    columns: 2,
    showText: '显示完整信息',
    hideText: '隐藏信息',
    toggle: false,
    gap: [8, 4],
    labelAllWidth: 80,
    itemAllDirection: 'row',
    itemAllAlign: 'center',
    toggleDefault: false,
  }

  const props: DescriptionProps = mergeProps(defaultProps, p)

  const {
    className,
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
    labelAllJustify,
    itemAllDirection,
    itemAllAlign,
    itemAllJustify,
    itemAllLabelColon,
    toggleDefault,
  } = props

  const [show, setShow] = useState<boolean | undefined>(toggleDefault)

  return (
    <div className={className} style={style}>
      <WidthContext.Provider
        value={{
          width: labelAllWidth!,
          labelJustify: labelAllJustify,
          direction: itemAllDirection,
          align: itemAllAlign,
          justify: itemAllJustify,
          labelColon: itemAllLabelColon,
        }}
      >
        {titleShow && (
          <div className='size-18 margin-bottom-xxs'>{title || '--'}</div>
        )}
        <Grid
          columns={columns}
          gap={gap}
          className={classNames(bodyCls, show && toggle && 'all-show')}
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
