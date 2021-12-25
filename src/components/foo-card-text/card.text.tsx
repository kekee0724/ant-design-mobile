import React, { FC, forwardRef } from 'react'

import { Ellipsis, ImageAuto } from 'antd-mobile'
import classNames from 'classnames'

export type CardTextProps = {
  url?: any
  text?: any
  rows?: any
  children?: any
  cutWidth?: any
  cutHeight?: any
  width?: any
  height?: any
  onClick?: any
  style?: any
  className?: any
  footer?: any
  type?: any
  textStyle?: any
  textClassName?: any
  customImage?: any
}

export const CardText: FC<CardTextProps> = forwardRef((props, _ref: any) => {
  const bodyCls = classNames('card-text-container', props.type, props.className)

  return (
    <div className={bodyCls} onClick={props.onClick} style={props.style}>
      {props.customImage ? (
        props.customImage
      ) : (
        <ImageAuto
          width={props.width}
          height={props.height}
          cutWidth={props.cutWidth}
          cutHeight={props.cutHeight}
          src={props.url}
          style={{ '--width': '100%' }}
        >
          {props.children}
        </ImageAuto>
      )}
      {props.text && (
        <Ellipsis
          content={props.text}
          rows={props.rows || 2}
          className={`card-text ${props.textClassName}`}
          style={props.textStyle}
        />
      )}
      {props.footer && <div className='card-footer'>{props.footer}</div>}
    </div>
  )
})
