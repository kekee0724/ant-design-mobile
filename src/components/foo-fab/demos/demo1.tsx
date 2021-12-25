import React from 'react'

import { Fab, FabButton, FabButtons } from 'antd-mobile'
import { AppOutline } from 'antd-mobile-icons'
import { DemoBlock } from 'demos'

export default () => {
  return (
    <>
      <DemoBlock title='基础用法'>
        <Fab position='right-top'>
          <FabButtons position='left'>
            <FabButton>1</FabButton>
            <FabButton>2</FabButton>
            <FabButton>3</FabButton>
          </FabButtons>
        </Fab>

        <Fab position='right-bottom'>
          <FabButtons position='top'>
            <FabButton label='Action 1'>1</FabButton>
            <FabButton label='Action 2'>2</FabButton>
            <FabButton label='Third Action'>3</FabButton>
          </FabButtons>
        </Fab>

        <Fab position='left-bottom'>
          <FabButtons position='top'>
            <FabButton>1</FabButton>
            <FabButton>2</FabButton>
            <FabButton>3</FabButton>
          </FabButtons>
        </Fab>

        <Fab position='left-top' style={{ '--fab-margin': '50px' }}>
          <FabButtons position='bottom'>
            <FabButton>1</FabButton>
            <FabButton>2</FabButton>
            <FabButton>3</FabButton>
          </FabButtons>
        </Fab>

        <Fab position='center-center'>
          <FabButtons position='center'>
            <FabButton>1</FabButton>
            <FabButton>2</FabButton>
            <FabButton>3</FabButton>
            <FabButton>4</FabButton>
          </FabButtons>
        </Fab>

        <Fab position='center-bottom' text={<AppOutline fontSize={28} />} />
      </DemoBlock>
    </>
  )
}
