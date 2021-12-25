import React, { FC, forwardRef, ReactNode } from 'react'

import classNames from 'classnames'

export type ListContainerProps = {
  children?: ReactNode
  className?: string
  style?: object
}

export const ListContainer: FC<ListContainerProps> = forwardRef(
  (props, _ref: any) => {
    const { className, children, style } = props

    const bodyCls = classNames('list-definition', className)
    return (
      <div className={bodyCls} style={style}>
        {children}
      </div>
    )
  }
)
