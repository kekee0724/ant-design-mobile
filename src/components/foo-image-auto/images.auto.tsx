import React, {
  FC,
  forwardRef,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'

import classNames from 'classnames'

import { PureComponentProps, transformAssetsUrl } from '../foo'
import Image from '../image'

type ratioType = '16:9' | '4:3' | '1:1' | '2:3'

export interface ImageAutoProps extends PureComponentProps {
  compress?: boolean
  src?: any
  height?: any
  width?: any
  cutWidth?: any
  cutHeight?: any
  cropWidth?: any
  cropHeight?: any
  style?: any
  className?: any
  fit?: any // 图片填充模式 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  onClick?: (event: React.MouseEvent<HTMLImageElement, Event>) => void // 图片点击时间
  alt?: any // 图片描述
  borderRadius?: any // 图片圆角
  lazy?: boolean // 图片是否懒加载
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void // 图片错误时触发
  fallback?: ReactNode // 错误时占位
  placeholder?: ReactNode // 加载时占位
  ratio?: ratioType // 比例显示图片
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
    ratio,
    fallback,
    placeholder,
  } = props
  const [src, setSrc] = useState(transformAssetsUrl(target))

  const [classes, setClass] = useState('')

  const dom = useRef<HTMLDivElement | null>()

  console.log(classes)
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

  useEffect(() => {
    switch (ratio) {
      case '16:9':
        setClass('long-rectangle')
        break
      case '4:3':
        setClass('rectangle')
        break
      case '2:3':
        setClass('vertical-rectangle')
        break
      case '1:1':
        setClass('square')
        break
      default:
        setClass('')
        break
    }
  }, [ratio])

  // 客户列表的图片，在请求错误时要显示传过来的文字不显示错误图片
  return (
    <div
      className={classNames('reco-image', className)}
      style={{ width: width, height: height }}
    >
      <div
        ref={e => {
          dom.current = e
        }}
        className={classNames('reco-image', classes)}
        onClick={() => onClick}
      >
        <Images
          src={src as string}
          dom={dom as any}
          fit={fit}
          alt={alt}
          ratio={ratio}
          borderRadius={borderRadius}
          lazy={lazy}
          onError={onError}
          style={style}
          height={height}
          cutWidth={cutWidth}
          cutHeight={cutHeight}
          cropWidth={cropWidth}
          cropHeight={cropHeight}
          fallback={fallback}
          placeholder={placeholder}
        />
        {children && <div className='reco-image-shade'>{children}</div>}
      </div>
    </div>
  )
}

ImageAuto.defaultProps = {
  compress: false,
  src: '',
  fit: 'cover',
  lazy: true,
  onClick: () => {},
}

export const Images = forwardRef((props: any, _ref: any) => {
  const {
    src: target,
    fit,
    alt,
    borderRadius,
    lazy,
    onError,
    style,
    height,
    cutWidth,
    cutHeight,
    cropWidth,
    cropHeight,
    dom,
    ratio,
    fallback,
    placeholder,
  } = props

  let setWidth, setHeight

  if (ratio) {
    setWidth = dom.clientWidth
    setHeight = dom.clientHeight
  }

  let src = transformAssetsUrl(target)
  if (!src) {
    src = ''
  } else if (
    cutWidth ||
    cropWidth ||
    cutHeight ||
    cropHeight ||
    setWidth ||
    setHeight
  ) {
    const v = 2
    src = `${src}?`
    ;(cutWidth || setWidth) &&
      (src = `${src}width=${(cutWidth || setWidth) * v}&`)
    ;(cutHeight || setHeight) &&
      (src = `${src}height=${(cutHeight || setHeight) * v}&`)
    cropWidth && (src = `${src}cropWidth=${cropWidth * v}&`)
    cropHeight && (src = `${src}cropHeight=${cropHeight * v}`)
  }

  return (
    <Image
      src={src}
      lazy={lazy}
      width='100%'
      height={height}
      fit={fit}
      alt={alt}
      fallback={fallback}
      placeholder={placeholder}
      onError={onError}
      style={{ ...style, borderRadius: borderRadius }}
    />
  )
})
