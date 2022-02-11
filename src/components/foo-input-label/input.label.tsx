import React, { forwardRef, CSSProperties, ReactNode } from 'react'
import classNames from 'classnames'

export type InputLabelProps = {
  style?: CSSProperties
  className?: string
  children?: ReactNode
  required?: boolean
}

export const InputLabel = forwardRef((props: InputLabelProps, _ref: any) => {
  const bodyCls = classNames(
    'reco-input-label adm-form-item-label',
    props.className
  )
  return (
    <div className={bodyCls} style={props.style}>
      <span
        className={classNames(
          'adm-form-item-label-required',
          !props.required && 'visibility-hidden'
        )}
      >
        *
      </span>
      {props.children}
    </div>
  )
})
