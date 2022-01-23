import React, { FC, useEffect, useState } from 'react'

import $ from 'jquery'

import { mergeProps } from '../../utils/with-default-props'
import {
  classnames,
  getAssetsUrl,
  getClassSet,
  htmlInjectDecode,
  htmlInjectEncode,
  PureComponentProps,
  transformAssetsUrl,
} from '../foo'
import ImageViewer from '../image-viewer'

export interface HtmlContentProps extends PureComponentProps {
  html: any
  component?: any
  encode?: boolean
  padding?: boolean
}

const defaultProps = {
  classPrefix: '',
  component: 'div',
  html: '',
  encode: true,
  padding: true,
}

export const HtmlContent: FC<HtmlContentProps> = (p: any) => {
  const props = mergeProps(defaultProps, p)
  const { html, className, component, encode } = props,
    baseUrl = getAssetsUrl(),
    protocol = baseUrl.split('//')[0]

  delete props.classPrefix

  const [images, setImages] = useState<string[]>([])
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const onCancel = () => {
    setOpen(false)
  }

  const handleKeyDown = (e: { keyCode: any }) => {
    if (e.keyCode === 27) {
      console.log('按下了Esc键')
      onCancel()
    }
  }

  const renderRef = (e: any) => {
    console.log('renderRef', e)
    const images = [] as any
    $(e)
      .off('.img')
      .on('click.img', 'img', () => {
        setOpen(true)
        setImages(images)
        setIndex(+$(e).attr('id')! || 0)
      })
      .find('img')
      .each((i: any, el: any) => {
        images.push($(el).attr('id', i).attr('src'))
      })
  }

  const $html = $(`<div>${html}</div>`)

  $html.find('img').each((_index: any, img: any) => {
    const $img = $(img)
    const imgSrc = $img.attr('src')
    if (imgSrc && (imgSrc.startsWith('./') || imgSrc.startsWith('~/'))) {
      $img.attr('src', baseUrl + imgSrc.substr(1))
    } else {
      if (imgSrc && imgSrc.startsWith('//')) $img.attr('src', protocol + imgSrc)
    }
    $(img).attr('style', 'max-width: 100%')
  })

  $html.find('a').each((_index: any, a: any) => {
    const $a = $(a)
    const aHref = $a.attr('href')
    if (aHref && aHref.startsWith('./'))
      $a.attr('href', baseUrl + aHref.substr(1))
  })

  const newHtml = $html.html()
    ? $html.html()
    : (encode ? htmlInjectEncode : htmlInjectDecode)($html.html())

  return (
    <>
      {React.createElement(component, {
        ref: e => renderRef(e),
        onKeyDown: (e: { keyCode: number }) => handleKeyDown(e),
        className: classnames(
          'html-content reco-edit-view ck-content',
          props.padding && 'padding',
          className,
          getClassSet(props)
        ),
        dangerouslySetInnerHTML: { __html: newHtml },
      })}
      <ImageViewer.Multi
        images={images.map(data => transformAssetsUrl(data)!)}
        visible={open}
        defaultIndex={index}
        onClose={onCancel}
      />
    </>
  )
}
