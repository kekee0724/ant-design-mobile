import './foo.less'
import './image.less'
import './umi.less'

import { Foo } from './foo'
import { ImageAuto } from './images.auto'

export type { FooProps } from './foo'
export type { ImageAutoProps } from './images.auto'

export * from './core'
export * from './core-ui'

export { Foo, ImageAuto }
