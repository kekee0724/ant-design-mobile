import React, { forwardRef, useState } from 'react'

import { mergeProps } from '../../utils/with-default-props'
import { ListTitle } from '../foo-list-title'

export type FoldProps = {
  title?: any
  showText?: any
  hideText?: any
  children?: any
  defaultShow?: boolean | undefined
}

export const Fold = forwardRef((p: FoldProps, _ref: any) => {
  const defaultProps = {
    titleShow: 'true',
    showText: '展开',
    hideText: '收起',
    defaultShow: false,
  }

  const props: FoldProps = mergeProps(defaultProps, p)

  const { title, showText, hideText, children, defaultShow } = props

  const [show, setShow] = useState<boolean | undefined>(defaultShow)

  return (
    <div className='reco-fold'>
      <ListTitle
        title={title}
        extra={
          <a onClick={() => setShow(!show)}>{!show ? showText : hideText}</a>
        }
      />
      {show && children}
    </div>
  )
})
