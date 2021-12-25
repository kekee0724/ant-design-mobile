import React, { FC, ReactNode } from 'react'

import { Grid } from 'antd-mobile'
import classNames from 'classnames'

import { PureComponentProps } from 'antd-mobile'

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
  children?: any[]
}

export const FooterButton: FC<FooterButtonProps> = (props: any, _ref: any) => {
  const { back, border, className, children } = props

  const bodyCls = classNames(
    'reco-footer-button',
    className,
    border && 'footer-border',
    back && 'footer-back'
  )

  // 客户列表的图片，在请求错误时要显示传过来的文字不显示错误图片
  return (
    <Grid columns={children?.length} gap={8} className={bodyCls}>
      {children}
    </Grid>
  )
}

FooterButton.defaultProps = {
  className: '',
}
