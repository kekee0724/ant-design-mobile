import React, { CSSProperties, FC, forwardRef } from 'react'

import { Badge } from 'antd-mobile'
import { mergeProps } from 'antd-mobile/es/utils/with-default-props'
import classNames from 'classnames'

export type ImageTextProps = {
  className?: string
  style?: CSSProperties | undefined
  icon?: any
  iconSize?: number
  text?: any
  backIcon?: boolean
  radius?: 8 | '50%'
  width?: string | number
  height?: string | number
  backClass?: string
  badgeContent?: any
  badgeColor?: string
  onClick?: any
}

export const ImageText: FC<ImageTextProps> = forwardRef(p => {
  const defaultProps = {
    width: 40,
    height: 40,
    radius: '50%',
  }

  const props = mergeProps(defaultProps, p)

  const {
      radius,
      width,
      height,
      className,
      backClass,
      badgeContent,
      badgeColor,
      onClick,
    } = props,
    bodyClass = classNames('reco-image-text', className)

  return (
    <div className={bodyClass} style={props.style} onClick={onClick}>
      {props.backIcon ? (
        <Badge
          content={badgeContent}
          color={badgeColor}
          style={{ '--right': '4px', '--top': '4px' }}
        >
          <div
            className={classNames(
              'reco-image-back',
              !backClass && `back-${Math.floor(Math.random() * 14)}`,
              backClass
            )}
            style={{ borderRadius: radius, width: width, height: height }}
          >
            {props.icon}
          </div>
        </Badge>
      ) : (
        <>
          {typeof props.icon === 'string' && (
            <i className={props.icon} style={{ fontSize: props.iconSize }} />
          )}
          {typeof props.icon !== 'string' && props.icon}
        </>
      )}
      {props.text && <div className='text'>{props.text}</div>}
    </div>
  )
})
