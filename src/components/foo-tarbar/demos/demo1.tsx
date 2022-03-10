import React from 'react'

import { Container, TabBarContext } from 'antd-mobile'

export default (props: any) => {
  return (
    <Container direction='column' fill>
      <TabBarContext.Consumer>
        {(TabBar: any) => <TabBar {...props} type={'my'} />}
      </TabBarContext.Consumer>
    </Container>
  )
}
