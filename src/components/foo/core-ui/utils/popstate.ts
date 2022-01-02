import { ReactChild, ReactFragment, ReactPortal } from 'react'
import Dialog from '../../../dialog'
import { browser } from '../../core'

// 该方法当前页不显示时（包含子路由已显示）务必移除，否则有未知错误
let callbacks: () => void
let hasListenersBack = false
let listenersBackIdentifier: string | null | undefined
function popstateFun() {
  callbacks()
  window.removeEventListener('popstate', popstateFun)
  hasListenersBack = false
  listenersBackIdentifier = null
}
class PopstateHandler {
  // 页面中有多处需要注册时加上identifier区分
  popstateListener(callback: () => void, identifier?: string) {
    if (!hasListenersBack) {
      hasListenersBack = true
      callbacks = callback
      listenersBackIdentifier = identifier
      history.pushState(null, '', location.href)
      window.addEventListener('popstate', popstateFun)
    }
  }
  removePopstateListener(identifier?: string) {
    // 监听时未添加标识或者与监听时添加标识一样可移除
    const promise = new Promise(function (resolve) {
      setTimeout(() => {
        if (
          (listenersBackIdentifier && listenersBackIdentifier === identifier) ||
          !identifier
        ) {
          window.removeEventListener('popstate', popstateFun)
          hasListenersBack = false
          listenersBackIdentifier = null
          history.back()
          setTimeout(() => {
            resolve('')
          }, 100)
        }
      })
    })
    return promise
  }
}
export const popstateHandler = new PopstateHandler()

// 安卓返回键优先关闭弹框
export function callModal(
  content: any,
  callback?: () => any,
  cancelback?: () => any,
  title?: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined,
  suretext?: string,
  canceltext?: string
) {
  const modal = Dialog.show({
    title: title ? title : '操作提示',
    content: content,
    closeOnAction: true,
    actions: [
      [
        {
          key: 'cancel',
          text: canceltext ? canceltext : '取消',
          onClick() {
            popstateHandler.removePopstateListener()
            cancelback && cancelback()
          },
        },
        {
          key: 'ok',
          text: suretext ? suretext : '确认',
          onClick() {
            popstateHandler.removePopstateListener()
            callback && callback()
          },
        },
      ],
    ],
  })

  popstateHandler.popstateListener(() => {
    modal.close()
  })
}

export function androidExit(
  judgebool: boolean,
  callback: () => void,
  identifier?: string | undefined
) {
  if (browser.versions.android) {
    if (judgebool) {
      popstateHandler.popstateListener(() => {
        callback()
      }, identifier)
    } else {
      return popstateHandler.removePopstateListener(identifier)
    }
  } else {
    if (!judgebool) {
      return Promise.resolve()
    }
  }
}
