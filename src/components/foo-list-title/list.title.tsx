import React, { FC, forwardRef, ReactNode } from 'react'

import classNames from 'classnames'

import { Container } from '../foo-container'

export type ListTitleProps = {
  className?: string
  style?: object
  children?: ReactNode
  title?: any
  extra?: any
}

export const ListTitle: FC<ListTitleProps> = forwardRef(props => {
  const { title, extra } = props
  const bodyCls = classNames('reco-title', props.className)
  return title || extra ? (
    <div className={bodyCls} style={props.style}>
      <Container direction={'row'}>
        <Container fill>{title}</Container>
        {extra}
      </Container>
    </div>
  ) : (
    <div className={bodyCls} style={props.style}>
      {props.children}
    </div>
  )
})
