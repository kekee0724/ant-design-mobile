import React, { FC, useContext, useEffect, useRef } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import classNames from 'classnames'
import { CheckboxGroupContext } from './group-context'
import { usePropsValue } from '../../utils/use-props-value'
import { mergeProps } from '../../utils/with-default-props'
import { devWarning } from '../../utils/dev-log'
import { CheckIcon } from './check-icon'
import { IndeterminateIcon } from './indeterminate-icon'
import { isDev } from '../../utils/is-dev'

const classPrefix = `adm-checkbox`

export type CheckboxValue = string | number

export type CheckboxProps = {
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
  value?: CheckboxValue
  indeterminate?: boolean
  block?: boolean
  id?: string
  icon?: (checked: boolean, indeterminate: boolean) => React.ReactNode
} & NativeProps<'--icon-size' | '--font-size' | '--gap'>

const defaultProps = {
  defaultChecked: false,
  indeterminate: false,
}

export const Checkbox: FC<CheckboxProps> = p => {
  const groupContext = useContext(CheckboxGroupContext)

  const props = mergeProps(defaultProps, p)

  let [checked, setChecked] = usePropsValue({
    value: props.checked,
    defaultValue: props.defaultChecked,
    onChange: props.onChange,
  }) as [boolean, (v: boolean) => void]
  let disabled = props.disabled

  const { value } = props
  if (groupContext && value !== undefined) {
    if (isDev) {
      if (p.checked !== undefined) {
        devWarning(
          'Checkbox',
          'When used within `Checkbox.Group`, the `checked` prop of `Checkbox` will not work.'
        )
      }
      if (p.defaultChecked !== undefined) {
        devWarning(
          'Checkbox',
          'When used within `Checkbox.Group`, the `defaultChecked` prop of `Checkbox` will not work.'
        )
      }
    }

    checked = groupContext.value.includes(value)
    setChecked = (checked: boolean) => {
      if (checked) {
        groupContext.check(value)
      } else {
        groupContext.uncheck(value)
      }
      props.onChange?.(checked)
    }
    disabled = disabled || groupContext.disabled
  }

  const renderIcon = () => {
    if (props.icon) {
      return (
        <div className={`${classPrefix}-custom-icon`}>
          {props.icon(checked, props.indeterminate)}
        </div>
      )
    }

    return (
      <div className={`${classPrefix}-icon`}>
        {props.indeterminate ? <IndeterminateIcon /> : checked && <CheckIcon />}
      </div>
    )
  }

  const inputRef = useRef<HTMLInputElement>(null)
  const labelRef = useRef<HTMLLabelElement>(null)
  useEffect(() => {
    labelRef.current?.addEventListener(
      'click',
      e => {
        if (e.target !== inputRef.current) {
          e.stopPropagation()
          e.stopImmediatePropagation()
        }
      },
      {
        capture: false,
      }
    )
  }, [])

  return withNativeProps(
    props,
    <label
      ref={labelRef}
      className={classNames(classPrefix, {
        [`${classPrefix}-checked`]: checked && !props.indeterminate,
        [`${classPrefix}-indeterminate`]: props.indeterminate,
        [`${classPrefix}-disabled`]: disabled,
        [`${classPrefix}-block`]: props.block,
      })}
    >
      <input
        ref={inputRef}
        type='checkbox'
        checked={checked}
        onChange={e => {
          setChecked(e.target.checked)
        }}
        disabled={disabled}
        id={props.id}
      />
      {renderIcon()}
      {props.children && (
        <div className={`${classPrefix}-content`}>{props.children}</div>
      )}
    </label>
  )
}
