import { browser } from '../../core'
import { postBridgeMessage, webkitPostMessage } from './browser'

export function jpush(flag: any) {
  postBridgeMessage('jpush', flag)
}

export function jpushRegister(name: any) {
  postBridgeMessage('jpushRegister', name)
}

export function jpushRegisterTag(tag: any) {
  postBridgeMessage('jpushRegisterTag', tag)
}

export function jpushRemove() {
  postBridgeMessage('jpushRemove')
}

export function getNoticationStatus() {
  if (browser.versions.android) {
    localStorage.notificationStatus = 1
  } else if (
    browser.versions.ios ||
    browser.versions.iPhone ||
    browser.versions.iPad
  ) {
    webkitPostMessage('giveNotificationStatus', '推送')
  }
}
