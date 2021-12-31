import React, { useState } from 'react'

import {
  CheckList,
  Container,
  Fold,
  List,
  Navbar as NavBar,
  Popup,
} from 'antd-mobile'
import { CloseOutline } from 'antd-mobile-icons'

export default () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Fold title='单选' defaultShow={true}>
        <CheckList mode={'card'} defaultValue={['B']}>
          <CheckList.Item value='A'>A</CheckList.Item>
          <CheckList.Item value='B'>B</CheckList.Item>
          <CheckList.Item value='C' disabled>
            C
          </CheckList.Item>
          <CheckList.Item value='D' readOnly>
            D
          </CheckList.Item>
        </CheckList>
      </Fold>
      <List mode='card'>
        <List.Item onClick={() => setVisible(true)}>抽屉展示</List.Item>
      </List>
      <Popup
        visible={visible}
        onMaskClick={() => {
          setVisible(false)
        }}
        position='right'
        bodyStyle={{ minWidth: '60vw' }}
      >
        <Container range={'container'}>
          <NavBar
            backArrow={null}
            right={
              <CloseOutline fontSize={18} onClick={() => setVisible(false)} />
            }
          >
            筛选
          </NavBar>
          <Container range={'body'}>
            <Fold title='筛选条件1' defaultShow={true}>
              <CheckList mode={'card'} defaultValue={['B']}>
                <CheckList.Item value='A'>A</CheckList.Item>
                <CheckList.Item value='B'>B</CheckList.Item>
                <CheckList.Item value='C' disabled>
                  C
                </CheckList.Item>
                <CheckList.Item value='D' readOnly>
                  D
                </CheckList.Item>
              </CheckList>
            </Fold>
            <Fold title='筛选条件2' defaultShow={true}>
              <CheckList mode={'card'} defaultValue={['B']}>
                <CheckList.Item value='A'>A</CheckList.Item>
                <CheckList.Item value='B'>B</CheckList.Item>
                <CheckList.Item value='C' disabled>
                  C
                </CheckList.Item>
                <CheckList.Item value='D' readOnly>
                  D
                </CheckList.Item>
              </CheckList>
            </Fold>
          </Container>
        </Container>
      </Popup>
    </>
  )
}
