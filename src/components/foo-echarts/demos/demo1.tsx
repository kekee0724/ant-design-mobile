import React from 'react'

import { Card, ECharts } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  return (
    <>
      <DemoBlock title={'line-5'} padding={'0'} background={''} border={''}>
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
      <DemoBlock title={'bar-3'} padding={'0'} background={''} border={''}>
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
      <DemoBlock title={'pie'} padding={'0'} background={''} border={''}>
        <Card>
          <ECharts
            option={{
              'tooltip': {
                'trigger': 'item',
                'formatter': '{a} <br/>{b}: {c} ({d}%)',
              },
              'legend': {
                'icon': 'circle',
                'left': 0,
                'itemWidth': 10,
                'itemHeight': 10,
                'data': ['制造业'],
              },
              'color': [
                '#61a5e8',
                '#7ecf51',
                '#eecb5f',
                '#999CFF',
                '#0FAD5E',
                '#61b225',
                '#A143D0',
                '#aaa930',
                '#fa8c16',
                '#3399ff',
                '#05ff00',
              ],
              'series': [
                {
                  'name': '企业概览',
                  'type': 'pie',
                  'radius': ['55%', '70%'],
                  'center': ['50%', '60%'],
                  'label': {
                    'show': true,
                    'position': 'center',
                    'formatter': '31家\n企业总数',
                  },
                  'emphasis': {
                    'disabled': false,
                  },
                  'labelLine': {
                    'show': false,
                  },
                  'data': [
                    {
                      'name': '制造业',
                      'value': 31,
                    },
                  ],
                },
              ],
            }}
          />
        </Card>
      </DemoBlock>
      <DemoBlock title={'line-2'} padding={'0'} background={''} border={''}>
        <Card>
          <ECharts
            option={{
              'dataZoom': {
                'type': 'slider',
                'start': 0,
                'end': 100,
              },
              'color': ['#3399ff', '#b061ff', '#de22c0', '#ff669d'],
              'legend': {
                'icon': 'diamond',
                'itemWidth': 8,
                'itemHeight': 8,
                'left': 0,
                'top': 0,
              },
              'tooltip': {
                'trigger': 'axis',
              },
              'grid': {
                'left': '5%',
                'right': '4%',
                'containLabel': true,
              },
              'xAxis': [
                {
                  'type': 'category',
                  'boundaryGap': false,
                  'axisLabel': {
                    'show': true,
                    'rotate': 40,
                  },
                  'data': [
                    '1~1月',
                    '1~2月',
                    '1~3月',
                    '1~4月',
                    '1~5月',
                    '1~6月',
                    '1~7月',
                    '1~8月',
                    '1~9月',
                    '1~10月',
                  ],
                },
              ],
              'yAxis': [
                {
                  'type': 'value',
                },
              ],
              'series': [
                {
                  'name': '2021年',
                  'type': 'line',
                  'smooth': false,
                  'showSymbol': false,
                  'symbolSize': 8,
                  'zlevel': 3,
                  'itemStyle': {
                    'color': '#008FFA',
                    'barBorderRadius': '100%',
                    'borderWidth': 0,
                  },
                  'lineStyle': {
                    'width': 3,
                    'color': '#008FFA',
                  },
                  'data': [
                    534.476564, 1010.929142, 1618.400789, 2017.197254,
                    2821.935927, 3237.234222, 3781.17059, 4408.921697,
                    4804.631427, 5358.994251,
                  ],
                },
                {
                  'name': '2020年',
                  'type': 'line',
                  'smooth': false,
                  'showSymbol': false,
                  'symbolSize': 8,
                  'zlevel': 3,
                  'itemStyle': {
                    'color': '#AA57FA',
                    'barBorderRadius': '100%',
                    'borderWidth': 0,
                  },
                  'lineStyle': {
                    'width': 3,
                    'color': '#AA57FA',
                  },
                  'data': [
                    319.771145, 941.938535, 1462.650803, 2189.005681,
                    2658.188676, 3323.785344, 3845.971206, 4404.015465,
                    4801.493372, 5190.127046, 5936.620206, 6756.216936,
                  ],
                },
              ],
            }}
          />
        </Card>
      </DemoBlock>
      <DemoBlock title={'line-3'} padding={'0'} background={''} border={''}>
        <Card>
          <ECharts
            option={{
              'dataZoom': {
                'type': 'slider',
                'start': 0,
                'end': 100,
              },
              'color': ['#3399ff', '#b061ff', '#de22c0', '#ff669d'],
              'legend': {
                'icon': 'diamond',
                'itemWidth': 8,
                'itemHeight': 8,
                'left': 0,
                'top': 0,
              },
              'tooltip': {
                'trigger': 'axis',
              },
              'grid': {
                'left': '5%',
                'right': '4%',
                'containLabel': true,
              },
              'xAxis': [
                {
                  'type': 'category',
                  'boundaryGap': false,
                  'data': [
                    '2020-11',
                    '2020-12',
                    '2021-01',
                    '2021-02',
                    '2021-03',
                    '2021-04',
                    '2021-05',
                    '2021-06',
                    '2021-07',
                    '2021-08',
                    '2021-09',
                    '2021-10',
                  ],
                  'axisLabel': {
                    'show': true,
                    'rotate': 40,
                  },
                },
              ],
              'yAxis': [
                {
                  'type': 'value',
                },
              ],
              'series': [
                {
                  'name': '浦东新区总量',
                  'type': 'line',
                  'smooth': false,
                  'showSymbol': false,
                  'symbolSize': 8,
                  'zlevel': 3,
                  'itemStyle': {
                    'color': '#008FFA',
                    'barBorderRadius': '100%',
                    'borderWidth': 0,
                  },
                  'lineStyle': {
                    'width': 3,
                    'color': '#008FFA',
                  },
                  'data': [
                    2109.931445, 4204.967317, 6350.352402, 8792.170273,
                    12565.104434, 16104.321688, 18481.605535, 21750.373072,
                    24962.359276, 27215.987746, 30848.171547, 34248.205203,
                    2493.206205, 4995.582924, 8027.847964, 11682.043069,
                    14856.223537, 17764.540621, 20783.584701, 23153.853909,
                    25948.067769, 28808.329508,
                  ],
                },
                {
                  'name': '上海市总量',
                  'type': 'line',
                  'smooth': false,
                  'showSymbol': false,
                  'symbolSize': 8,
                  'zlevel': 3,
                  'itemStyle': {
                    'color': '#AA57FA',
                    'barBorderRadius': '100%',
                    'borderWidth': 0,
                  },
                  'lineStyle': {
                    'width': 3,
                    'color': '#AA57FA',
                  },
                  'data': [
                    14571.147092, 27547.269561, 38812.240484, 57547.62257,
                    86264.248671, 104094.597847, 121581.953962, 143372.574735,
                    163490.798877, 177730.321666, 206068.563501, 223253.901082,
                    22890.89064, 40979.824081, 67056.048029, 90120.69415,
                    108405.165682, 137099.77911, 158386.644659, 171790.802703,
                    191694.028311, 216434.464785,
                  ],
                },
                {
                  'name': '全国总量',
                  'type': 'line',
                  'smooth': false,
                  'showSymbol': false,
                  'symbolSize': 8,
                  'zlevel': 3,
                  'itemStyle': {
                    'color': '#FF5C93',
                    'barBorderRadius': '100%',
                    'borderWidth': 0,
                  },
                  'lineStyle': {
                    'width': 3,
                    'color': '#FF5C93',
                  },
                  'data': [
                    84034.892985, 180044.814137, 289238.50736, 406693.033019,
                    615348.734001, 749481.717459, 851181.187948, 993033.710187,
                    1095680.627685, 1180854.867566, 1452934.022109,
                    1539909.693963, 225159.997624, 345336.547062, 572449.268081,
                    771195.09748, 898378.313752, 1154572.835601, 1341347.115795,
                    1436326.809512, 1617579.96154, 1847074.681129,
                  ],
                },
              ],
            }}
          />
        </Card>
      </DemoBlock>
      <DemoBlock
        title={'line-1-bar-2'}
        padding={'0'}
        background={''}
        border={''}
      >
        <Card>
          <ECharts
            option={{
              'color': ['#427ef6', '#f59a23', '#7ecf51'],
              'grid': {
                'left': '4%',
                'right': '2%',
                'containLabel': true,
              },
              'dataZoom': {
                'type': 'slider',
                'start': 0,
                'end': 100,
              },
              'tooltip': {
                'trigger': 'axis',
                'axisPointer': {
                  'type': 'cross',
                },
              },
              'legend': {
                'data': ['2021', '2020', '增速'],
              },
              'xAxis': [
                {
                  'type': 'category',
                  'data': [
                    '1月',
                    '2月',
                    '3月',
                    '4月',
                    '5月',
                    '6月',
                    '7月',
                    '8月',
                    '9月',
                    '10月',
                  ],
                },
              ],
              'yAxis': [
                {
                  'type': 'value',
                },
                {
                  'type': 'value',
                  'position': 'right',
                  'axisLabel': {
                    'formatter': '{value}%',
                  },
                },
              ],
              'series': [
                {
                  'name': 2021,
                  'type': 'bar',
                  'data': [
                    89547.37539, 98192.003979, 96279.047894, 91195.780066,
                    91102.299901, 89281.554598, 93256.847475, 86566.640533,
                    92272.93903, 88070.679716,
                  ],
                },
                {
                  'name': 2020,
                  'type': 'bar',
                  'data': [
                    96900.6207, 94529.833718, 100438.404321, 92339.087501,
                    96315.286014, 89351.384617, 90719.725414, 92117.403261,
                    94766.923443, 92462.848261, 97002.265042, 96401.681609,
                  ],
                },
                {
                  'name': '增速',
                  'type': 'line',
                  'yAxisIndex': 1,
                  'data': [
                    -7.59, 3.87, -4.14, -1.24, -5.41, -0.08, 2.8, -6.03, -2.63,
                    -4.75,
                  ],
                },
              ],
            }}
          />
        </Card>
      </DemoBlock>
    </>
  )
}
