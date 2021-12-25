import React, { FC, forwardRef, ReactNode } from 'react'

import classNames from 'classnames'

export type ListTitleProps = {
  children?: ReactNode
  className?: string
  style?: object
}

export const ListTitle: FC<ListTitleProps> = forwardRef((props, _ref: any) => {
  const { className, children, style } = props

  const bodyCls = classNames('reco-title', className)
  return (
    <div className={bodyCls} style={style}>
      {children}
    </div>
  )
})
