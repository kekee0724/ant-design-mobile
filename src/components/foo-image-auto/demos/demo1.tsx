import React from 'react'

import { ImageAuto } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  return (
    <>
      <DemoBlock title='基础用法'>
        <ImageAuto
          ratio={'16:9'}
          src={
            'https://fat.bitechdevelop.com/reco-ipark-10-1-mobileapi/userFile/picture/std_post/20211116/d9041e5b-9468-4338-9b92-a67bd9714b3d.jpg'
          }
          borderRadius={8}
        />
        <br />
        <ImageAuto
          ratio={'1:1'}
          src={
            'https://fat.bitechdevelop.com/reco-ipark-10-1-mobileapi/userFile/picture/std_post/20211116/d9041e5b-9468-4338-9b92-a67bd9714b3d.jpg'
          }
          borderRadius={8}
        />
        <br />
        <ImageAuto
          ratio={'2:3'}
          src={
            'https://fat.bitechdevelop.com/reco-ipark-10-1-mobileapi/userFile/picture/std_post/20211116/d9041e5b-9468-4338-9b92-a67bd9714b3d.jpg'
          }
          borderRadius={8}
        />
        <br />
        <ImageAuto
          ratio={'4:3'}
          src={
            'https://fat.bitechdevelop.com/reco-ipark-10-1-mobileapi/userFile/picture/std_post/20211116/d9041e5b-9468-4338-9b92-a67bd9714b3d.jpg'
          }
          borderRadius={8}
        />
        <br />
      </DemoBlock>
      <DemoBlock title='自适应外部容器大小'>
        <div style={{ width: 100 }}>
          <ImageAuto
            ratio={'16:9'}
            src={
              'https://fat.bitechdevelop.com/reco-ipark-10-1-mobileapi/userFile/picture/std_post/20211116/d9041e5b-9468-4338-9b92-a67bd9714b3d.jpg'
            }
            borderRadius={8}
          />
          <br />
          <ImageAuto
            ratio={'1:1'}
            src={
              'https://fat.bitechdevelop.com/reco-ipark-10-1-mobileapi/userFile/picture/std_post/20211116/d9041e5b-9468-4338-9b92-a67bd9714b3d.jpg'
            }
            borderRadius={8}
          />
          <br />
          <ImageAuto
            ratio={'2:3'}
            src={
              'https://fat.bitechdevelop.com/reco-ipark-10-1-mobileapi/userFile/picture/std_post/20211116/d9041e5b-9468-4338-9b92-a67bd9714b3d.jpg'
            }
            borderRadius={8}
          />
          <br />
          <ImageAuto
            ratio={'4:3'}
            src={
              'https://fat.bitechdevelop.com/reco-ipark-10-1-mobileapi/userFile/picture/std_post/20211116/d9041e5b-9468-4338-9b92-a67bd9714b3d.jpg'
            }
            borderRadius={8}
          />
        </div>
      </DemoBlock>
    </>
  )
}
