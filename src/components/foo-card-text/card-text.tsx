import React, { forwardRef } from 'react'

import classNames from 'classnames'

import { mergeProps } from '../../utils/with-default-props'
import Ellipsis from '../ellipsis'
import { ImageAuto, ImageAutoProps } from '../foo-image-auto'

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
  content?: any
  ratio?: '16:9' | '4:3' | '1:1' | '2:3'
  imageAutoProps?: ImageAutoProps
  direction?: 'column' | 'row' | 'row-reverse'
  rowAlign?: 'center' | 'top' | 'bottom'
}

const defaultProps = {
  ratio: '16:9',
  direction: 'column',
  imageAutoProps: {
    style: { '--width': '100%' },
  },
}

export const CardText = forwardRef((p: CardTextProps) => {
  const props = mergeProps(defaultProps, p)

  const bodyCls = classNames(
    'card-text-container',
    props.type,
    props.className,
    props.direction === 'row' && 'card-text-row',
    props.direction === 'row-reverse' && 'card-text-row reverse',
    props.rowAlign === 'center' && 'container-align-center',
    props.rowAlign === 'top' && 'container-align-start',
    props.rowAlign === 'bottom' && 'container-align-end'
  )

  return (
    <div className={bodyCls} onClick={props.onClick} style={props.style}>
      {props.customImage ? (
        props.customImage
      ) : (
        <ImageAuto
          src={props.url}
          width={props.width}
          height={props.height}
          cutWidth={props.cutWidth}
          cutHeight={props.cutHeight}
          ratio={props.ratio}
          className={classNames(
            props.direction === 'row-reverse' && 'margin-v margin-right',
            props.direction === 'row' && 'margin-v margin-left'
          )}
          {...props.imageAutoProps}
        >
          {props.children}
        </ImageAuto>
      )}
      {(props.text || props.content) && (
        <div className='card-text-content'>
          {props.text && (
            <Ellipsis
              content={props.text}
              rows={props.rows || 2}
              className={`card-text ${props.textClassName}`}
              style={props.textStyle}
            />
          )}
          {props.content && <div className='card-content'>{props.content}</div>}
        </div>
      )}
      {props.footer && <div className='card-text-footer'>{props.footer}</div>}
    </div>
  )
})
