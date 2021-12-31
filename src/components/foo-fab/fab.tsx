import React, { FC, forwardRef, useRef, useState } from 'react'

import { AddOutline, CloseOutline } from 'antd-mobile-icons'
import classNames from 'classnames'

import { getExtraAttrs, getSlots } from '../foo'

export type FabProps = {
  className?: string
  id?: string | undefined
  style?: React.CSSProperties | object | undefined
  morphTo?: string
  href?: string | undefined
  target?: React.HTMLAttributeAnchorTarget | undefined
  text?: React.ReactNode
  children?: React.ReactNode
  position?: string
}

export const Fab: FC<FabProps> = forwardRef((props, _ref) => {
  const {
    className,
    id,
    style,
    morphTo,
    href,
    target,
    text,
    onClick,
    position = 'right-bottom',
  } = props as any
  const extraAttrs = getExtraAttrs(props)

  const elRef = useRef(null)

  const [show, setShow] = useState<boolean>()

  let hrefComputed = href
  if (hrefComputed === true) hrefComputed = '#'
  if (hrefComputed === false) hrefComputed = undefined

  const linkChildren = [] as any
  const rootChildren = [] as any

  const {
    link: linkSlots,
    default: defaultSlots,
    root: rootSlots,
    text: textSlots,
  } = getSlots(props) as any

  if (defaultSlots) {
    for (let i = 0; i < defaultSlots.length; i += 1) {
      const child = defaultSlots[i]
      let isRoot
      const tag = child.type && (child.type.displayName || child.type.name)
      if (tag === 'FabButtons' || tag === 'fab-buttons') isRoot = true
      if (isRoot) rootChildren.push(child)
      else linkChildren.push(child)
    }
  }
  let textEl
  if (text || (textSlots && textSlots.length)) {
    textEl = (
      <div className='fab-text'>
        {text}
        {textSlots}
      </div>
    )
  }
  let linkEl
  if (linkChildren.length || (linkSlots && linkSlots.length) || textEl) {
    linkEl = (
      <a target={target} href={hrefComputed} onClick={onClick}>
        {linkChildren}
        {textEl}
        {linkSlots}
      </a>
    )
  }

  const classes = classNames(className, 'fab', `fab-${position}`, {
    'fab-morph': morphTo,
    'fab-extended': typeof textEl !== 'undefined',
    'fab-opened': show,
  })

  const close = () => setShow(false)

  const dom = elRef.current as any

  // $(dom).find(".fab-close").off("click", close).on("click", close);

  let oL: number, oT: number

  return (
    <div
      id={id}
      style={style}
      className={classes}
      data-morph-to={morphTo}
      ref={elRef}
      {...extraAttrs}
      onTouchStart={e => {
        const touchDom = elRef.current as any
        const ev = e || window.event
        const touch = ev.targetTouches[0]
        oL = touch.clientX - touchDom.offsetLeft
        oT = touch.clientY - touchDom.offsetTop
      }}
      onTouchMove={e => {
        const touchDom = elRef.current as any
        const maxW = document.body.clientWidth - touchDom?.offsetWidth
        const maxH = document.body.clientHeight - touchDom?.offsetHeight
        const ev = e || window.event
        const touch = ev.targetTouches[0]
        let oLeft = touch.clientX - oL
        let oTop = touch.clientY - oT
        if (oLeft < 0) {
          oLeft = 0
        } else if (oLeft >= maxW) {
          oLeft = maxW
        }
        if (oTop < 0) {
          oTop = 0
        } else if (oTop >= maxH) {
          oTop = maxH
        }
        touchDom.style.left = oLeft + 'px'
        touchDom.style.top = oTop + 'px'
        touchDom.style.bottom = 'auto'
        touchDom.style.right = 'auto'
      }}
    >
      <a className='fab-toggle-button' onClick={() => setShow(!show)}>
        <i>
          <AddOutline />
        </i>
        <i>
          <CloseOutline />
        </i>
      </a>
      {linkEl}
      {rootChildren}
      {rootSlots}
    </div>
  )
})

Fab.displayName = 'fab'
