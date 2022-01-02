import React, { ComponentClass, FC, FunctionComponent } from 'react'

// import { Action, AnyAction } from "redux";
// import { SubscriptionAPI } from "dva";
import { LocationDescriptorObject } from 'history'
import PropTypes from 'prop-types'

import { resolvePath } from '../utils/resolve'
// import { resolvePath } from '../'
import { PureComponentProps, PureComponentState } from './pure-component'
// import { URLSearchParams, isAuth } from "../http";
// import { PluginHost, CorePlugin, AttachPlugin, IAttachInfo } from "../plugins";
import { Location, MessageInstance, PageWrap } from './type'

const PREFIX_REG = /^(\\|\/)/

export interface CoreComponentProps extends PureComponentProps {
  history: any
  location?: Location
  match?: any
  staticContext?: any
  wrap?: PageWrap
  state: Readonly<any>
  pageType: 'page'
  readonly: any
  namespace: string
  dispatch: any
  message: any
  createMessageTools: () => MessageInstance
}

export interface CoreComponentState extends PureComponentState {}

export const childContextTypes = {
  registerPlugins: PropTypes.func,
  removePlugins: PropTypes.func,
  goBack: PropTypes.func,
  goTo: PropTypes.func,
}

export const getDerivedStateFromProps = (
  props: CoreComponentProps,
  state: CoreComponentState
) => {
  return props.state || state
}

export const inputData = (props: CoreComponentProps, data: any) => {
  return dispatch(props, 'input', data)
}

export const dispatch = (
  props: CoreComponentProps,
  action: string,
  data?: any
) => {
  const { namespace, message } = props
  const target: any =
    typeof action === 'string' ? { type: action, data } : action

  if (!/\//.test(target.type)) {
    if (!namespace)
      throw new Error('必须通过属性 namespace 设置页面所属命名空间。')

    target.type = `${namespace}/${target.type}`
  }

  target && (data && (target.data = data), (target.message = message))

  return props.dispatch(target)
}

export const getSearchParams = (props: CoreComponentProps, nextProps?: any) => {
  const { match, location } = nextProps || props
  return (
    location &&
    match &&
    (match?.searchParams || new URLSearchParams(props?.location?.search))
  )
}

export const getSearchParam = (
  props: CoreComponentProps,
  key: string,
  nextProps?: Readonly<any>
) => {
  const { match } = nextProps || props

  return (
    (match &&
      (match.searchParams || getSearchParams(nextProps as any)) &&
      match.searchParams?.get(key)) ||
    ''
  )
}

export const getHistory = (props: CoreComponentProps) => {
  return props.history
}

export const goBack = (props: CoreComponentProps, e?: MouseEvent | boolean) => {
  __goBack(props, e)
}

const __goBack = (props: CoreComponentProps, e?: MouseEvent | boolean) => {
  props.wrap ? props.wrap?.goBack(e) : getHistory(props).goBack()
}

export const goTo = (
  props: CoreComponentProps,
  path: string | LocationDescriptorObject,
  state?: CoreComponentState
) => {
  __goTo(props, resolveRoutePath(props, path, state), state)
}

const __goTo = (
  props: CoreComponentProps,
  path: string | LocationDescriptorObject,
  state?: CoreComponentState
) => {
  getHistory(props).push(path, state)
}

export const jump = (
  props: CoreComponentProps,
  path: string | LocationDescriptorObject,
  state?: CoreComponentState
) => {
  __jump(props, resolveRoutePath(props, path, state), state)
}

const __jump = (
  props: CoreComponentProps,
  path: string | LocationDescriptorObject,
  state?: CoreComponentState
) => {
  getHistory(props).replace(path as any, state)
}

export const renderEmbeddedView = (
  component: string | FunctionComponent<any> | ComponentClass<any, any>,
  props?: React.ClassAttributes<any>,
  ...children: React.ReactNode[]
) => {
  const { history, location, match, staticContext, wrap } = props as any
  return React.createElement(
    component,
    {
      history,
      location,
      match,
      staticContext,
      wrap,
      ...props,
    },
    ...children
  )
}

const resolveRoutePath = (
  props: CoreComponentProps,
  path: string | LocationDescriptorObject | any,
  _state?: CoreComponentState
) => {
  const { match } = props,
    history = getHistory(props)

  if ((match || history) && path) {
    const isString = typeof path === 'string'
    let paths: any = isString
      ? (path as string)
      : (path as LocationDescriptorObject).pathname

    if (!PREFIX_REG.test(paths)) {
      paths = resolvePath(
        match ? match?.url : history?.location?.pathname,
        paths
      )

      isString
        ? (path = paths)
        : ((path as LocationDescriptorObject).pathname = paths)
    }
  }

  return path
}

export const CoreComponent: FC<CoreComponentProps> = props => {
  return <>{props.children}</>
}

CoreComponent.defaultProps = {
  classprefix: 'view',
}
