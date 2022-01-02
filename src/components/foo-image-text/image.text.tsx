import React, { CSSProperties, FC, forwardRef } from 'react'

import classNames from 'classnames'

export type ImageTextProps = {
  className?: string
  style?: CSSProperties | undefined
  icon?: any
  iconSize?: number
  text?: any
}

export const ImageText: FC<ImageTextProps> = forwardRef(props => {
  const { className, iconSize, style, icon, text } = props

  const bodyCls = classNames('reco-image-text', className)
  return (
    <div className={bodyCls} style={style}>
      {typeof icon === 'string' && (
        <i className={icon} style={{ fontSize: iconSize }} />
      )}
      {typeof icon !== 'string' && icon}
      <div className='text'>{text}</div>
    </div>
  )
})
