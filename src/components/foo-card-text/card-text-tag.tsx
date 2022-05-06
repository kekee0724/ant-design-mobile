import React, { FC, forwardRef, ReactNode } from 'react'

import classNames from 'classnames'

export type CardTextTagProps = {
  type?: 'signing-up' | 'in-progress' | 'released' | undefined | null
  children?: ReactNode
  size?: 'default' | 'small'
}

export const CardTextTag: FC<CardTextTagProps> = forwardRef(props => {
  let tagTypeClass
  switch (props.type) {
    case 'signing-up':
      tagTypeClass = 'signing-up'
      break
    case 'in-progress':
      tagTypeClass = 'in-progress'
      break
    case 'released':
      tagTypeClass = 'released'
      break
    default:
      tagTypeClass = 'released'
  }
  return (
    <div
      className={classNames(
        'card-text-tag',
        props.size === 'small' && 'small',
        tagTypeClass
      )}
    >
      {props.children}
    </div>
  )
})
