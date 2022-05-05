import React, { Component } from 'react'

import { AddOutline } from 'antd-mobile-icons'

import {
  CoreComponentProps,
  CoreComponentState,
  getObjectProp,
  goTo,
} from '../foo/index'
import { ImageText } from '../foo-image-text'
import Modal from '../modal'
import TabBar from '../tab-bar'
// import React, { CSSProperties, FC, forwardRef, ReactNode } from 'react'

// import classNames from 'classnames'

// export interface HintProps {
//   className?: string
//   style?: CSSProperties
//   children?: ReactNode
// }

// export const Hint: FC<HintProps> = forwardRef(props => {
//   const { className, children, style } = props
//   const bodyCls = classNames('reco-hint', className)

//   return (
//     <div className={bodyCls} style={style}>
//       {children}
//     </div>
//   )
// })

export interface TabBarComposeProps extends CoreComponentProps {
  type: string
  items?: Levi.Config.Client.TabBar.Item[]
  isActive?: Levi.Config.Client.TabBar.isActive
  component?: any
  modalPage?: any
}

export interface TabBarComposeState extends CoreComponentState {
  modal?: boolean
}

export class TabBarCompose<
  P extends TabBarComposeProps = TabBarComposeProps,
  S extends TabBarComposeState = TabBarComposeState
> extends Component<P, S> {
  state = {
    modal: false,
  } as S

  items: Levi.Config.Client.TabBar.Item[]
  isActive: Levi.Config.Client.TabBar.isActive
  modalAnimationType: string
  modalClassName: string
  modalPage: any

  constructor(props: P, context?: any) {
    super(props, context)

    this.items = getObjectProp(client, 'tabBar.items', [])
    this.isActive = getObjectProp(
      client,
      'tabBar.isActive',
      (type, item) => type === item.type
    )
    this.modalAnimationType = getObjectProp(
      client,
      'tabBar.modalAnimationType',
      'slide-up'
    )
    this.modalClassName = getObjectProp(
      client,
      'tabBar.modalClassName',
      'reco-bar-modal'
    )
    // this.modalPage = OaApp.Page; // 调试完注释掉
  }

  showModal = () => {
    this.setState({
      modal: !this.state.modal,
    })
  }

  hideModal = () => {
    this.setState({
      modal: false,
    })
  }

  renderItem(item: any): React.ReactNode {
    if (item.key) {
      return (
        <TabBar.Item
          key={item.key}
          icon={(active: boolean) =>
            active ? (
              <i className={`${item.icon}_on`} />
            ) : (
              <i className={`${item.icon}`} />
            )
          }
          title={item.title}
        />
      )
    } else {
      return (
        <TabBar.Item
          key={'add'}
          icon={(active: boolean) => (active ? item.selectedIcon : item.icon)}
          title={item.title}
        />
      )
    }
  }

  getItems(hasMore: boolean) {
    const { items = this.items } = this.props

    return this.attachMoreItem(items, hasMore)
  }

  getMoreItem(hasMore: boolean): Levi.Config.Client.TabBar.Item | null {
    return hasMore
      ? ({
          icon: (
            <ImageText
              className='reco-more-add'
              width={48}
              height={34}
              radius={8}
              icon={<AddOutline fontSize={28} />}
              backIcon={true}
              backClass={'back-primary'}
            />
          ),
          selectedIcon: null,
          type: 'apply',
        } as any)
      : null
  }

  attachMoreItem(items: Levi.Config.Client.TabBar.Item[], hasMore: boolean) {
    const moreItem = this.getMoreItem(hasMore),
      item = moreItem && (items[2] || (items[2] = moreItem))

    if (moreItem) {
      item!.type === moreItem.type
        ? (items[2] = moreItem)
        : items.splice(2, 0, moreItem)
    }

    return items
  }

  renderItems(hasMore = false): React.ReactNode {
    return this.getItems(hasMore).map(item => this.renderItem(item))
  }

  render(): React.ReactNode {
    const {
        modalPage,
        children,
        history,
        location,
        match,
        staticContext,
        wrap,
      } = this.props as any,
      child =
        typeof children === 'function' ? (children as any)(this) : children

    return (
      <TabBarModalContext.Consumer>
        {(ModalPage: any) => {
          ModalPage = modalPage || ModalPage || this.modalPage
          return ModalPage ? (
            <>
              <TabBar
                activeKey={location?.pathname}
                onChange={e => {
                  if (e === 'add') {
                    this.showModal()
                  } else {
                    e != location?.pathname && goTo(this.props, e, this.state)
                  }
                }}
              >
                {this.renderItems(!0)}
              </TabBar>
              {child}
              <Modal
                style={{ height: '100%' }}
                visible={this.state.modal!}
                afterClose={this.hideModal}
                className={this.modalClassName}
                content={
                  <ModalPage
                    history={history}
                    location={location}
                    match={match}
                    staticContext={staticContext}
                    showModal={this.showModal}
                    hideModal={this.hideModal}
                    wrap={wrap}
                  />
                }
              />
            </>
          ) : (
            <>
              <TabBar
                activeKey={location?.pathname}
                onChange={e =>
                  e != location?.pathname && goTo(this.props, e, this.state)
                }
              >
                {this.renderItems()}
              </TabBar>
              {child}
            </>
          )
        }}
      </TabBarModalContext.Consumer>
    )
  }
}

export const TabBarContext = React.createContext(TabBarCompose)

export const TabBarModalContext = React.createContext(null as any)
