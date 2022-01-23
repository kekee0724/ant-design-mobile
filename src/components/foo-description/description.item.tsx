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
  labelJustify?: boolean
  align?: 'center' | 'top' | 'bottom'
  justify?: 'start' | 'center' | 'end'
  hide?: boolean
  span?: number
  direction?: 'column' | 'row'
}

export const DescriptionItem = forwardRef((p: DescriptionProps) => {
  const defaultProps = {
    bodyCls: '',
    style: {},
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
    direction,
    labelJustify,
  } = props

  return (
    <WidthContext.Consumer>
      {obj => {
        return (
          <Grid.Item
            span={span}
            className={classNames(bodyCls, hide && 'none')}
            style={style}
          >
            <Container
              direction={direction || obj?.direction}
              align={align || obj?.align}
              justify={justify || obj.justify}
            >
              {label && (
                <div
                  className={classNames(
                    'margin-right-xxs reco-describe',
                    (labelJustify || obj?.labelJustify) && 'text-justify'
                  )}
                  style={{ width: labelWidth || obj?.width }}
                >
                  {label}
                  {(labelColon || obj?.labelColon) && ':'}
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
