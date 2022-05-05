import React, { FC, forwardRef, useImperativeHandle, useRef } from 'react'

import classNames from 'classnames'

import { getExtraAttrs } from '../foo'

export type FabButtonProps = {
  className?: string
  id?: string | undefined
  style?: React.CSSProperties | undefined
  children?: React.ReactNode
  fabClose?: string
  label?: string
  target?: React.HTMLAttributeAnchorTarget | undefined
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined
}

export const FabButton: FC<FabButtonProps> = forwardRef((props, ref) => {
  const { className, id, style, children, fabClose, label, target, onClick } =
    props
  const extraAttrs = getExtraAttrs(props)

  const elRef = useRef(null)

  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }))

  const classes = classNames(className, {
    'fab-close': fabClose,
    'fab-label-button': label,
  })

  let labelEl
  if (label) {
    labelEl = <span className='fab-label'>{label}</span>
  }

  return (
    <a
      id={id}
      style={style}
      target={target}
      className={classes}
      ref={elRef}
      {...extraAttrs}
      onClick={onClick}
    >
      {children}
      {labelEl}
    </a>
  )
})

FabButton.displayName = 'fab-button'
