import './footer-button.less'

import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import { FooterButton, Item } from './footer.button'

export type { FooterButtonProps, ItemProps } from './footer.button'

export default attachPropertiesToComponent(FooterButton, {
  Item: Item,
})
