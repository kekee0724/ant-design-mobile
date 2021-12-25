/* eslint-disable react/no-find-dom-node */
import React, { FC, useEffect } from 'react'
import ReactDOM from 'react-dom'

import classnames from 'classnames'

import {
  getClassSet,
  PureComponent,
  prefixClass,
  PureComponentProps,
} from 'antd-mobile'

type Align = 'end' | 'center' | 'start' | 'top' | 'bottom' | 'left' | 'right'

type Direction = 'column' | 'row'

type Justify = boolean | 'end' | 'center' | 'start'

type BiRange = 'container' | 'body' | 'center'

export interface IScrollable {
  reset(): void

  getPos(): { left: number; top: number }

  mount(element: any): void

  unmount(element: any): void
}

export const hasChildrenWithVerticalFill = (children: any) => {
  let result = false

  React.Children.forEach(children, (child: any) => {
    if (result) {
      return // early-exit
    }

    if (!child) {
      return
    }

    if (!child.type) {
      return
    }

    result = !!child.type.shouldFillVerticalSpace
  })

  return result
}

export const initScrollable = (defaultPos: { left?: any; top?: any }) => {
  if (!defaultPos) {
    defaultPos = {}
  }

  let pos: { left: any; top: any }
  const scrollable: IScrollable = {
    reset() {
      pos = { left: defaultPos.left || 0, top: defaultPos.top || 0 }
    },
    getPos() {
      return { left: pos.left, top: pos.top }
    },
    mount(element) {
      const node = ReactDOM.findDOMNode(element) as any
      node.scrollLeft = pos.left
      node.scrollTop = pos.top
    },
    unmount(element) {
      const node = ReactDOM.findDOMNode(element) as any
      pos.left = node.scrollLeft
      pos.top = node.scrollTop
    },
  }

  scrollable.reset()

  return scrollable
}

export interface ContainerProps extends PureComponentProps {
  component?: any
  align?: Align
  direction?: Direction
  fill?: boolean
  body?: boolean
  justify?: Justify
  scrollable?: boolean & IScrollable
  hidden?: boolean
  page?: boolean
  id?: string
  className?: any
  range?: BiRange
}

export const Container: FC<ContainerProps> = (props, _ref: any) => {
  const {
      className,
      component: Component,
      children,
      body,
      page,
      range,
    } = props,
    classSet = getClassSet(props)
  let { direction, fill, align, justify, scrollable, hidden } = props

  initScrollable

  // componentDidMount
  // componentWillUnmount
  useEffect(() => {
    if (scrollable?.mount) {
      scrollable.mount(this)
    }
    return () => {
      if (scrollable && scrollable.unmount) {
        scrollable.unmount(this)
      }
    }
  }, [])

  // delete props.classprefix;

  switch (range) {
    case 'container':
      fill === undefined && (fill = true)
      direction === undefined && (direction = 'column')
      hidden === undefined && (hidden = true)
      break
    case 'body':
      fill === undefined && (fill = true)
      hidden === undefined && (hidden = false)
      scrollable === undefined && (scrollable = true as any)
      break
    case 'center':
      direction === undefined && (direction = 'column')
      fill === undefined && (fill = true)
      hidden === undefined && (hidden = true)
      align === undefined && (align = 'center')
      justify === undefined && (justify = 'center')
      break
    default:
      break
  }

  if (!direction) {
    if (hasChildrenWithVerticalFill(children)) {
      direction = 'column'
    }
  }

  if (direction === 'column' || scrollable) {
    fill = true
  }

  if (direction === 'column' && align === 'top') {
    align = 'start'
  }

  if (direction === 'column' && align === 'bottom') {
    align = 'end'
  }

  if (direction === 'row' && align === 'left') {
    align = 'start'
  }

  if (direction === 'row' && align === 'right') {
    align = 'end'
  }

  const classes = classnames(classSet, className, {
    [prefixClass(props, 'fill')]: fill,
    [prefixClass(props, 'body')]: body,
    [prefixClass(props, 'column')]: direction === 'column',
    [prefixClass(props, 'row')]: direction === 'row',
    [prefixClass(props, 'align-center')]: align === 'center',
    [prefixClass(props, 'align-start')]: align === 'start',
    [prefixClass(props, 'align-end')]: align === 'end',
    [prefixClass(props, 'justify-center')]: justify === 'center',
    [prefixClass(props, 'justify-start')]: justify === 'start',
    [prefixClass(props, 'justify-end')]: justify === 'end',
    [prefixClass(props, 'justified')]: justify === true,
    [prefixClass(props, 'scrollable')]: scrollable,
    [prefixClass(props, 'page')]: page,
    [prefixClass(props, 'hidden')]: hidden,
  })

  console.log(classes, props)
  // 客户列表的图片，在请求错误时要显示传过来的文字不显示错误图片
  return (
    <PureComponent>
      <Component className={classes} {...props}>
        {children}
      </Component>
    </PureComponent>
  )
}

Container.defaultProps = {
  classprefix: 'container',
  component: 'div',
}
