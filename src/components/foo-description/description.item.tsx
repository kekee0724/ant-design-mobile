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
  direction?: 'column' | 'row'
}

export const DescriptionItem = forwardRef((p: DescriptionProps) => {
  const defaultProps = {
    bodyCls: '',
    labelWidth: '80px',
    style: {},
    // align: "center",
    labelColon: true,
    span: 1,
    direction: 'row',
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
    direction,
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
            <Container direction={direction} align={align} justify={justify}>
              {label && (
                <div
                  className='margin-right-xxs reco-describe'
                  style={{ width: width || labelWidth }}
                >
                  {label}
                  {labelColon && ':'}
                </div>
              )}
              <Container fill>{children}</Container>
            </Container>
          </Grid.Item>
        )
      }}
    </WidthContext.Consumer>
  )
})
