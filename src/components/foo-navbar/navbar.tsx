import React, { FC, ReactNode } from 'react'

import { mergeProps } from '../../utils/with-default-props'
import { PureComponentProps } from '../foo'
import { Fab, FabButton, FabButtons } from '../foo-fab'
import AntNavBar from '../nav-bar'
import type { NavBarProps } from '../nav-bar'

export interface NavBarProp extends PureComponentProps, NavBarProps {
  visible?: boolean
  content?: string | ReactNode
  fabContent?: ReactNode
  fabContentOpen?: boolean
}

const renderFab = (right: any) => {
  if (!right) return null
  if (!right.props.children || !Array.isArray(right.props.children)) {
    return <Fab position='right-bottom' text={right} />
  } else if (right.props.children.length > 1) {
    return (
      <Fab position='right-bottom'>
        <FabButtons position='top'>
          {right.props.children.map((item: ReactNode, index: number) => {
            return <FabButton key={index}>{item}</FabButton>
          })}
        </FabButtons>
      </Fab>
    )
  }
}

const defaultProps = {
  visible: client.showheader,
  fabContentOpen: true,
}

export const NavBar: FC<NavBarProp> = p => {
  const props = mergeProps(defaultProps, p)
  const {
    visible,
    right,
    back,
    backArrow,
    left,
    onBack,
    fabContent,
    children,
    fabContentOpen,
  } = props
  // const [delay, setDelay] = useState(0)
  if (visible) {
    return (
      <>
        <AntNavBar
          left={left}
          right={right}
          onBack={onBack}
          backArrow={backArrow}
          back={back}
        >
          {children}
        </AntNavBar>
      </>
    )
  } else {
    return <>{fabContentOpen && (fabContent || renderFab(right))}</>
  }
}
