import React, { FC, ReactNode, useEffect, useState } from 'react'

import { Image, PureComponentProps, transformAssetsUrl } from 'antd-mobile'
import classNames from 'classnames'

export interface ImageAutoProps extends PureComponentProps {
  src: string
  height?: any
  width?: any
  cutWidth?: any
  cutHeight?: any
  cropWidth?: any
  cropHeight?: any
  style?: any
  className?: any
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down' // 图片填充模式 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  onClick?: (event: React.MouseEvent<HTMLImageElement, Event>) => void // 图片点击时间
  alt?: any // 图片描述
  borderRadius?: any // 图片圆角
  lazy?: boolean // 图片是否懒加载
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void // 图片错误时触发
  fallback?: ReactNode // 错误时占位
  placeholder?: ReactNode // 加载时占位
  compress?: false
}

export const ImageAuto: FC<ImageAutoProps> = (props: any, _ref: any) => {
  const {
    src: target,
    width,
    height,
    cutWidth,
    cutHeight,
    cropWidth,
    cropHeight,
    fit,
    onClick,
    alt,
    borderRadius,
    lazy,
    onError,
    style,
    className,
    children,
  } = props
  const [src, setSrc] = useState(transformAssetsUrl(target))
  // const [errorImage, setErrorImage] = useState(false)
  // const [hasCacheAccess, setHasCacheAccess] = useState(undefined)

  useEffect(() => {
    if (!src) {
      setSrc('')
    } else if (cutWidth || cropWidth || cutHeight || cropHeight) {
      const v = 2
      let newSrc = `${src}?`
      cutWidth && (newSrc = `${newSrc}width=${cutWidth * v}&`)
      cutHeight && (newSrc = `${newSrc}height=${cutHeight * v}&`)
      cropWidth && (newSrc = `${newSrc}cropWidth=${cropWidth * v}&`)
      cropHeight && (newSrc = `${newSrc}cropHeight=${cropHeight * v}`)
      setSrc(newSrc)
    }
  }, [target])

  // 客户列表的图片，在请求错误时要显示传过来的文字不显示错误图片
  return (
    <div
      className={classNames('reco-image', className)}
      style={{ width: width, height: height }}
    >
      <Image
        src={src as string}
        lazy={lazy}
        width='100%'
        height={height}
        fit={fit}
        onClick={onClick}
        alt={alt}
        onError={onError}
        style={{ ...style, borderRadius: borderRadius }}
      />
      {children && <div className='reco-image-shade'>{children}</div>}
    </div>
  )
}

ImageAuto.defaultProps = {
  src: '',
  fit: 'cover',
}
