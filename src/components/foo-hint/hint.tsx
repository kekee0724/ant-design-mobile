import React, { FC, forwardRef, ReactNode } from 'react'

import classNames from 'classnames'

export interface HintProps {
  children?: ReactNode
  className?: string
  style?: object
}

export const Hint: FC<HintProps> = forwardRef((props, _ref: any) => {
  const { className, children, style } = props
  const bodyCls = classNames('reco-hint', className)

  return (
    <div className={bodyCls} style={style}>
      {children}
    </div>
  )
})
