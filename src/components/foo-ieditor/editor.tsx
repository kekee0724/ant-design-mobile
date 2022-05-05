import React, { FC, useEffect } from 'react'

import * as Simditor from 'simditor'

import { PureComponentProps } from '../foo'

export interface IEditorProps extends PureComponentProps {
  placeholder?: string
  value?: string
  onChange?: (v: any) => void
}
export const IEditor: FC<IEditorProps> = props => {
  const { value, placeholder, onChange } = props

  let editor: any
  const textareaRef: any = React.createRef()
  useEffect(() => {
    editor = new Simditor({
      textarea: textareaRef.current,
      toolbarFloat: false,
      toolbar: ['bold', 'underline', 'fontScale', 'color', 'ol'],
      allowedTags: [
        'br',
        'span',
        'a',
        'img',
        'b',
        'strong',
        'i',
        'strike',
        'u',
        'font',
        'p',
        'ul',
        'ol',
        'li',
        'blockquote',
        'pre',
        'code',
        'h1',
        'h2',
        'h3',
        'h4',
        'hr',
        'table',
        'tbody',
        'tr',
        'td',
        'div',
      ],
      allowedAttributes: {
        img: [
          'src',
          'alt',
          'width',
          'height',
          'data-non-image',
          'style',
          'class',
        ],
        a: ['href', 'target', 'style', 'class'],
        font: ['color', 'style', 'class'],
        code: ['class', 'style', 'class'],
        table: [
          'cellSpacing',
          'cellPadding',
          'width',
          'border',
          'bgColor',
          'style',
          'class',
        ],
        td: [
          'height',
          'background',
          'width',
          'align',
          'style',
          'vAlign',
          'style',
          'class',
        ],
        div: ['id', 'style', 'class'],
        span: ['style', 'class'],
      },
    })
    editor.on('valuechanged', () => {
      if (onChange) onChange(editor.getValue())
    })
    setTimeout(() => editor.setValue(value || ''), 500)
    // return () => {
    //   effect
    // };
  }, [])

  return (
    <div className='width-full'>
      <textarea
        ref={textareaRef}
        className='width-full'
        placeholder={placeholder}
      />
    </div>
  )
}
