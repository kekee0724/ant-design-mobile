import React from 'react'

import { Card, ECharts } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  return (
    <>
      <DemoBlock title={'展示地址'} padding={'0'} background={''} border={''}>
        <Card>
          <ECharts
            option={{
              tooltip: {
                trigger: 'axis',
              },
              legend: {
                data: [
                  'Email',
                  'Union Ads',
                  'Video Ads',
                  'Direct',
                  'Search Engine',
                ],
              },
              grid: {
                left: '4%',
                right: '4%',
                containLabel: true,
              },
              xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              },
              yAxis: {
                type: 'value',
              },
              dataZoom: {
                type: 'slider',
                start: 0,
                end: 100,
              },
              series: [
                {
                  name: 'Email',
                  type: 'line',
                  stack: 'Total',
                  data: [120, 132, 101, 134, 90, 230, 210],
                },
                {
                  name: 'Union Ads',
                  type: 'line',
                  stack: 'Total',
                  data: [220, 182, 191, 234, 290, 330, 310],
                },
                {
                  name: 'Video Ads',
                  type: 'line',
                  stack: 'Total',
                  data: [150, 232, 201, 154, 190, 330, 410],
                },
                {
                  name: 'Direct',
                  type: 'line',
                  stack: 'Total',
                  data: [320, 332, 301, 334, 390, 330, 320],
                },
                {
                  name: 'Search Engine',
                  type: 'line',
                  stack: 'Total',
                  data: [820, 932, 901, 934, 1290, 1330, 1320],
                },
              ],
            }}
          />
        </Card>
      </DemoBlock>
      <DemoBlock title={'自定义'} padding={'0'} background={''} border={''}>
        <Card>
          <ECharts
            option={{
              legend: {},
              tooltip: {},
              dataset: {
                source: [
                  ['product', '2015', '2016', '2017'],
                  ['Matcha Latte', 43.3, 85.8, 93.7],
                  ['Milk Tea', 83.1, 73.4, 55.1],
                  ['Cheese Cocoa', 86.4, 65.2, 82.5],
                  ['Walnut Brownie', 72.4, 53.9, 39.1],
                ],
              },
              dataZoom: {
                type: 'slider',
                start: 0,
                end: 30,
              },
              xAxis: {
                type: 'category',
              },
              yAxis: {},
              // Declare several bar series, each will be mapped
              // to a column of dataset.source by default.
              series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
            }}
          />
        </Card>
      </DemoBlock>
    </>
  )
}
