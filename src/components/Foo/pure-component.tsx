import React, { FC, useEffect, useRef } from 'react'

import Classnames from 'classnames'

import { ClassValue } from './type'

export type PureComponentProps = {
  children?: React.ReactNode
  key?: React.Key
  ref?: React.LegacyRef<any>
  classprefix?: string
  active?: boolean | string
  selected?: boolean | string
  disabled?: boolean
  className?: string
}

const CLASSNAMES = {
  disabled: 'disabled',
  active: 'active',
}

const setClassNS = (
  props: PureComponentProps,
  classprefix?: string
): string => {
  return classprefix || props.classprefix || ''
}

export const getClassSet = (
  props: PureComponentProps,
  ignorePrefix?: boolean
) => {
  const classNames: any = {}
  const { active, selected, disabled } = props
  if (props.classprefix) {
    const classprefix = setClassNS(props)
    // don't return prefix if ignore flag set
    !ignorePrefix && (classNames[classprefix] = true)
  }
  classNames[CLASSNAMES['active']] = active || selected
  classNames[CLASSNAMES['disabled']] = disabled
  return classNames
}

export const prefixClass = (props: PureComponentProps, subClass?: string) => {
  return setClassNS(props) + '-' + subClass
}

export const classnames = (...classes: ClassValue[]) => {
  return Classnames(...classes)
}

export const PureComponent: FC<PureComponentProps> = (props, _ref: any) => {
  const nextProps = useRef(props)

  useEffect(() => {
    if (!shallowCompare(nextProps, props)) {
      console.log('!shallowCompare')
      // componentReceiveProps(nextProps, nextContext);
    }
    return () => {
      console.log('!fullShallowCompare')
      !fullShallowCompare(nextProps, props)
    }
  }, [])

  return <>{props.children}</>
}

function shallowCompare(a: any, b: any) {
  const akeys = Object.keys(a),
    bkeys = Object.keys(b)

  return (
    akeys.length === bkeys.length &&
    !akeys.concat(bkeys).some(key => key !== 'children' && a[key] !== b[key])
  )
}

function fullShallowCompare(a: any, b: any) {
  const akeys = Object.keys(a),
    bkeys = Object.keys(b)

  return (
    akeys.length === bkeys.length &&
    !akeys.concat(bkeys).some(key => a[key] !== b[key])
  )
}
