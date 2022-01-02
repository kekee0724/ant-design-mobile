import React from 'react'

import { connect } from 'dva'
import { freeze } from 'immer'

import { CoreComponentProps } from '../container/core-component'

const pageMapping = new Map<any, any>()

export const replacePage = <C = React.ComponentType<CoreComponentProps>>(
  original: C,
  target: C
) => {
  pageMapping.set(original, target)
}

const connectTo = <R = any, C = React.ComponentType<CoreComponentProps>>(
  component: C,
  mapStateToProps: (state: any) => R = (state: any) => state,
  getPrimaryReducer?: (state: R) => any
) => {
  return connect((state: any) => {
    const nextState = mapStateToProps(state),
      primaryReducer =
        typeof getPrimaryReducer === 'function' && getPrimaryReducer(nextState)
    return {
      state: freeze(
        primaryReducer ? { ...primaryReducer, ...nextState } : nextState
      ),
    }
  })(pageMapping.get(component) ?? component)
}

export const template = <
  P extends CoreComponentProps,
  R = any,
  C = React.CElement<P, any>
>(
  component: C,
  mapStateToProps: (state: any) => R = (state: any) => state,
  getPrimaryReducer?: (state: R) => any
): ((props: P) => React.CElement<P, any>) => {
  return (props: P) => {
    return React.createElement(
      connectTo(component, mapStateToProps, getPrimaryReducer),
      props
    )
  }
}
