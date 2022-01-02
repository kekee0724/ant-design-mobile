import React, { FC, ReactNode } from 'react'

import classNames from 'classnames'

import { PureComponentProps } from '../foo'
import type { GridProps } from '../grid'
import Grid from '../grid'

export interface ItemProps {
  span?: number
  onClick?: () => void
  children?: ReactNode
  align?: 'center' | 'top' | 'bottom'
  justify?: 'left' | 'center' | 'right'
}

export const Item: FC<ItemProps> = props => {
  const { align, justify, span, onClick, children } = props
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
    case 'left':
      justifyClass = 'justify-start'
      break
    case 'right':
      justifyClass = 'justify-end'
  }
  return (
    <Grid.Item
      className={classNames(
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
  children?: ReactNode
  columns: number
  gap: number | string | [number | string, number | string]
  gridProps: Partial<GridProps>
}

export const FooterButton: FC<FooterButtonProps> = (props: any) => {
  const { back, border, columns, gap, className, gridProps } = props
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

  return children instanceof Array ? (
    <Grid
      columns={columns || children?.length}
      gap={gap}
      className={bodyCls}
      {...gridProps}
    >
      {children}
    </Grid>
  ) : (
    <div className={bodyCls}>{children}</div>
  )
}

FooterButton.defaultProps = {
  className: '',
  columns: 0,
  gap: 8,
}
