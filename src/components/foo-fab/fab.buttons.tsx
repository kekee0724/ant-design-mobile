import React, { FC, forwardRef, useImperativeHandle, useRef } from 'react'

import classNames from 'classnames'

import { getExtraAttrs } from '../foo/index'

export type FabButtonsProps = {
  className?: string
  id?: string | undefined
  style?: React.CSSProperties | undefined
  children: React.ReactNode
  position: string
}

export const FabButtons: FC<FabButtonsProps> = forwardRef((props, ref) => {
  const { className, id, style, children, position } = props
  const extraAttrs = getExtraAttrs(props)

  const elRef = useRef(null)
  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }))

  const classes = classNames(
    className,
    'fab-buttons',
    `fab-buttons-${position}`
  )

  return (
    <div id={id} style={style} className={classes} ref={elRef} {...extraAttrs}>
      {children}
    </div>
  )
})

FabButtons.displayName = 'fab-buttons'
