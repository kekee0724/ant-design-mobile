import React, { CSSProperties, FC, forwardRef } from 'react'

import classNames from 'classnames'

import { ImageAuto } from '../foo-image-auto'

export type CustomHeaderProps = {
  className?: string
  style?: CSSProperties | undefined
  children?: any
  backImageSrc?: any
  backCutWidth?: any
  backCutHeight?: any
  navBarNoBorder?: boolean
  navBarNoBack?: boolean
  customHeaderList?: boolean
}

export const CustomHeader: FC<CustomHeaderProps> = forwardRef(
  (props: CustomHeaderProps, _ref: any) => {
    const {
      className,
      style,
      children,
      backImageSrc,
      backCutWidth,
      backCutHeight,
      navBarNoBorder,
      navBarNoBack,
      customHeaderList,
    } = props
    const bodyCls = classNames(
      'reco-custom-header',
      className,
      !navBarNoBorder && 'nav-no-border',
      !navBarNoBack && 'nav-no-back',
      customHeaderList && 'custom-header-list',
      !backImageSrc && 'header-no-back'
    )
    return (
      <div className={bodyCls} style={style}>
        <div className='reco-header-content'>{children}</div>
        {backImageSrc && (
          <ImageAuto
            width='100%'
            cutWidth={backCutWidth}
            cutHeight={backCutHeight}
            src={backImageSrc}
          />
        )}
      </div>
    )
  }
)
