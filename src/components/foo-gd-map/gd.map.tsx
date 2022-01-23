import React, { FC, useEffect, useState } from 'react'

import { Empty, List } from 'antd-mobile'
import { QuestionCircleOutline } from 'antd-mobile-icons'

import AMapLoader from '@amap/amap-jsapi-loader'

import { mergeProps } from '../../utils/with-default-props'
import { getLocation, PureComponentProps } from '../foo'

export interface GDMapProps extends PureComponentProps {
  address?: string
  title?: string
  mapStyle?: string
  titleStyle?: string
  custom?: boolean
  option?: object
  init?: any
}

const defaultProps = {
  address: '浦东新区纳贤路800号',
  title: '地图',
}

export const GDMap: FC<GDMapProps> = p => {
  const props = mergeProps(defaultProps, p)

  const { title, address, option, mapStyle, titleStyle, init, custom } = props
  let spaceMap: any
  const [show, setShow] = useState(false)

  useEffect(() => {
    AMapLoader.load({
      key: server?.mapKey ? server.mapKey : '', // 申请好的Web端开发者Key，首次调用 load 时必填
      version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      // AMapUI: {
      //     // 是否加载 AMapUI，缺省不加载
      //     version: "1.1", // AMapUI 缺省 1.1
      //     plugins: [], // 需要加载的 AMapUI ui插件
      // },
      // Loca: {
      //     // 是否加载 Loca， 缺省不加载
      //     version: "2.0.0", // Loca 版本，缺省 1.3.2
      // },
    })
      .then(() => {
        custom ? customMap(option) : address && renderMapStyle(address!)
      })
      .catch(e => {
        console.log(e)
      })
    // return () => {
    //   cleanup
    // }
  }, [])

  const customMap = (option: object | undefined) => {
    const map = new AMap.Map(spaceMap, option)
    init && init(map)
  }

  const renderMapStyle = (address: string) => {
    new AMap.plugin('AMap.Geocoder', () => {
      const geocoder = new AMap.Geocoder({ city: '全国' })
      geocoder.getLocation(address, (status: any, result: any) => {
        if (status === 'complete' && result.info === 'OK') {
          const lnglat = result.geocodes[0].location,
            map = new AMap.Map(spaceMap, {
              zoom: 15,
              center: [lnglat.lng, lnglat.lat],
            }),
            marker = new AMap.Marker({
              position: new AMap.LngLat(lnglat.lng, lnglat.lat),
              title: address,
            })

          map.add(marker)

          const infoWindow = new AMap.InfoWindow({
            content: address,
            offset: new AMap.Pixel(0, -40),
          })
          marker.on('click', () => {
            infoWindow.open(map, [lnglat.lng, lnglat.lat])
          })
          infoWindow.open(map, [lnglat.lng, lnglat.lat])
        } else {
          getLocation().then((data: any) => {
            if (data && data.Longitude) {
              const lnglat = {
                  lng: data!.Longitude,
                  lat: data!.Latitude,
                },
                map = new AMap.Map(spaceMap, {
                  zoom: 15,
                  center: [lnglat.lng, lnglat.lat],
                }),
                marker = new AMap.Marker({
                  position: new AMap.LngLat(lnglat.lng, lnglat.lat),
                  title: address,
                })

              map.add(marker)
            }
          })
          setShow(false)
        }
      })
    })
  }

  return custom ? (
    <div className='space-map' ref={e => (spaceMap = e)} />
  ) : (
    <List className={mapStyle} mode='card'>
      {title && (
        <List.Item className={titleStyle}>
          <span>{title}</span>
        </List.Item>
      )}
      <List.Item>
        {!show ? (
          <div
            className='space-map'
            ref={e => (spaceMap = e)}
            style={{ height: '180px' }}
          />
        ) : null}
        {show ? (
          <Empty
            style={{ padding: '64px 0' }}
            image={
              <QuestionCircleOutline
                style={{
                  color: 'var(--adm-color-light)',
                  fontSize: 48,
                }}
              />
            }
            description='未找到该地址，请确认该地址是否有误'
          />
        ) : null}
      </List.Item>
    </List>
  )
}
