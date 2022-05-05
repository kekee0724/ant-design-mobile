import React, { CSSProperties, FC, ReactNode } from 'react'

import classNames from 'classnames'

import Button from '../button'
import { PureComponentProps } from '../foo/index'
import type { GridProps } from '../grid'
import Grid from '../grid'
import Popover from '../popover'

export interface ItemProps {
  span?: number
  onClick?: () => void
  children?: ReactNode
  align?: 'center' | 'top' | 'bottom'
  justify?: 'start' | 'center' | 'end'
  gridItemProps?: any
  className?: string
  style?: CSSProperties
}

export const Item: FC<ItemProps> = props => {
  const { align, justify, span, onClick, children, className, style } = props
  let alignClass, justifyClass
  switch (align) {
    case 'center':
      alignClass = 'align-center'
      break
    case 'top':
      alignClass = 'align-start'
      break
    case 'bottom':
      alignClass = 'align-end'
  }
  switch (justify) {
    case 'center':
      justifyClass = 'justify-center'
      break
    case 'start':
      justifyClass = 'justify-start'
      break
    case 'end':
      justifyClass = 'justify-end'
  }
  return (
    <Grid.Item
      style={style}
      className={classNames(
        className,
        (alignClass || justifyClass) && 'flex',
        alignClass,
        justifyClass
      )}
      span={span}
      onClick={onClick}
    >
      {children}
    </Grid.Item>
  )
}

export interface FooterButtonProps extends PureComponentProps {
  className?: string
  border?: boolean
  back?: boolean
  columns?: number
  gridProps?: Partial<GridProps>
  gap?: number | string | [number | string, number | string]
  showMore?: boolean
  style?: CSSProperties
}

export const FooterButton: FC<FooterButtonProps> = (props: any) => {
  const { back, border, columns, gap, className, gridProps, showMore } = props
  let { children } = props

  const bodyCls = classNames(
    'reco-footer-button',
    className,
    border && 'footer-border',
    back && 'footer-back'
  )

  if (children instanceof Array) {
    children = children.filter(item => {
      return item instanceof Object
    })
  }

  if (children instanceof Array) {
    if (showMore && children.length > (columns || 3)) {
      return (
        <Grid
          columns={columns || (children!.length <= 3 ? children!.length : 4)}
          gap={gap}
          className={bodyCls}
          {...gridProps}
        >
          {children.filter((_data, index) => index < (columns || 3))}
          <Grid.Item>
            <Popover.Menu
              actions={children
                .filter((_data, index) => index >= (columns || 3))
                ?.map(data => {
                  return {
                    text:
                      data.props.children instanceof Object
                        ? data.props.children?.props?.children
                        : data.props.children,
                    props: data.props,
                  } as any
                })}
              onAction={(e: any) => {
                e.props.children instanceof Object
                  ? e.props?.children?.props?.onClick &&
                    e.props?.children?.props?.onClick()
                  : e.props?.onClick && e.props?.onClick()
              }}
              placement={'topRight'}
              trigger='click'
            >
              <Button block>更多</Button>
            </Popover.Menu>
          </Grid.Item>
        </Grid>
      )
    } else if (children.length >= 1) {
      return (
        <Grid
          columns={columns || children!.length}
          gap={gap}
          className={bodyCls}
          {...gridProps}
        >
          {children}
        </Grid>
      )
    } else {
      return null
    }
  } else {
    return <div className={bodyCls}>{children}</div>
  }
}

FooterButton.defaultProps = {
  className: '',
  columns: 0,
  gap: 8,
}
