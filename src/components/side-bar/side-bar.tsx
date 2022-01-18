import { FC, ReactNode, ReactElement, ComponentProps } from 'react'
import React from 'react'
import classNames from 'classnames'
import Badge from '../badge'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { usePropsValue } from '../../utils/use-props-value'

const classPrefix = `adm-side-bar`

export type SideBarItemProps = {
  title?: ReactNode
  disabled?: boolean
  badge?: ReactNode
} & NativeProps

export const SideBarItem: FC<SideBarItemProps> = () => {
  return null
}

export type SideBarProps = {
  activeKey?: string | null
  defaultActiveKey?: string | null
  onChange?: (key: string) => void
} & NativeProps<
  '--width' | '--height' | '--item-border-radius' | '--background-color'
>

export const SideBar: FC<SideBarProps> = props => {
  let firstActiveKey: string | null = null

  const items: ReactElement<ComponentProps<typeof SideBarItem>>[] = []

  React.Children.forEach(props.children, (child, index) => {
    if (!React.isValidElement(child)) return
    const key = child.key
    if (typeof key !== 'string') return
    if (index === 0) {
      firstActiveKey = key
    }
    items.push(child)
  })

  const [activeKey, setActiveKey] = usePropsValue({
    value: props.activeKey,
    defaultValue: props.defaultActiveKey ?? firstActiveKey,
    onChange: v => {
      if (v === null) return
      props.onChange?.(v)
    },
  })

  return withNativeProps(
    props,
    <div className={classNames(classPrefix)}>
      {items.map(item => {
        const active = item.key === activeKey
        return withNativeProps(
          item.props,
          <div
            key={item.key}
            onClick={() => {
              const { key } = item
              if (key === undefined || key === null || item.props.disabled)
                return
              setActiveKey(key.toString())
            }}
            className={classNames(`${classPrefix}-item`, {
              [`${classPrefix}-item-active`]: active,
              [`${classPrefix}-item-disabled`]: item.props.disabled,
            })}
          >
            <Badge content={item.props.badge}>
              <div className={`${classPrefix}-item-title`}>
                {active && <div className={`${classPrefix}-item-highlight`} />}
                {item.props.title}
              </div>
            </Badge>
          </div>
        )
      })}
    </div>
  )
}
