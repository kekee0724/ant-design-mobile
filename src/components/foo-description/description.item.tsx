import React, { CSSProperties, forwardRef, ReactNode } from 'react'

import classNames from 'classnames'

import { mergeProps } from '../../utils/with-default-props'
import { Container } from '../foo-container'
import Grid from '../grid'
import { WidthContext } from './description'

export type DescriptionProps = {
  bodyCls?: string
  style?: CSSProperties
  label?: string | ReactNode
  children?: ReactNode
  labelWidth?: string
  labelColon?: boolean
  align?: 'center' | 'top' | 'bottom'
  justify?: 'start' | 'center' | 'end'
  hide?: boolean
  span?: number
}

export const DescriptionItem = forwardRef((p: DescriptionProps, _ref: any) => {
  const defaultProps = {
    bodyCls: '',
    labelWidth: '80px',
    style: {},
    // align: "center",
    labelColon: true,
    span: 1,
  }

  const props = mergeProps(defaultProps, p)

  const {
    bodyCls,
    style,
    children,
    label,
    labelWidth,
    align,
    justify,
    labelColon,
    hide,
    span,
  } = props
  return (
    <WidthContext.Consumer>
      {width => {
        return (
          <Grid.Item
            span={span}
            className={classNames(bodyCls, hide && 'none')}
            style={style}
          >
            <Container direction={'row'} align={align} justify={justify}>
              <div
                className='margin-right-xxs reco-describe'
                style={{ width: labelWidth || width }}
              >
                {label}
                {labelColon && ':'}
              </div>
              <Container fill>{children}</Container>
            </Container>
          </Grid.Item>
        )
      }}
    </WidthContext.Consumer>
  )
})
