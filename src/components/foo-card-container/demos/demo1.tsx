import React from 'react'

import { CardContainer, Collapse } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  return (
    <DemoBlock title='基础用法' background='' padding='0'>
      <CardContainer>
        <Collapse defaultActiveKey={['1']}>
          <Collapse.Panel key='1' title='第一项'>
            这里是第一项的内容
            <br />
            这里是第一项的内容
            <br />
            这里是第一项的内容
            <br />
            这里是第一项的内容
            <br />
            这里是第一项的内容
            <br />
            这里是第一项的内容
            <br />
          </Collapse.Panel>
          <Collapse.Panel key='2' title='第二项'>
            这里是第二项的内容
          </Collapse.Panel>
          <Collapse.Panel key='3' title='第三项'>
            这里是第三项的内容
          </Collapse.Panel>
        </Collapse>
      </CardContainer>
    </DemoBlock>
  )
}
