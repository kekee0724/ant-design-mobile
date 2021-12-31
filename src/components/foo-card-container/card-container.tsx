import React, { forwardRef } from 'react'

export type CardContainerProps = {
  children?: any
}

export const CardContainer = forwardRef(
  (props: CardContainerProps, _ref: any) => {
    const { children } = props

    return <div className='card'>{children}</div>
  }
)
