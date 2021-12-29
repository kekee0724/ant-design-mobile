import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import { Description } from './description'
import { DescriptionItem } from './description.item'

export type { DescriptionProps } from './description.item'
export type { Description } from './description'

export default attachPropertiesToComponent(Description, {
  Item: DescriptionItem,
})
