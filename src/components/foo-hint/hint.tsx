import React, { CSSProperties, FC, forwardRef, ReactNode } from 'react'

import classNames from 'classnames'

export interface HintProps {
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

export const Hint: FC<HintProps> = forwardRef(props => {
  const { className, children, style } = props
  const bodyCls = classNames('reco-hint', className)

  return (
    <div className={bodyCls} style={style}>
      {children}
    </div>
  )
})
