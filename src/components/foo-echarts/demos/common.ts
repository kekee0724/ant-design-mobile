export const option1 = {
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
        534.476564, 1010.929142, 1618.400789, 2017.197254, 2821.935927,
        3237.234222, 3781.17059, 4408.921697, 4804.631427, 5358.994251,
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
        319.771145, 941.938535, 1462.650803, 2189.005681, 2658.188676,
        3323.785344, 3845.971206, 4404.015465, 4801.493372, 5190.127046,
        5936.620206, 6756.216936,
      ],
    },
  ],
}

export const option2 = {
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
        2109.931445, 4204.967317, 6350.352402, 8792.170273, 12565.104434,
        16104.321688, 18481.605535, 21750.373072, 24962.359276, 27215.987746,
        30848.171547, 34248.205203, 2493.206205, 4995.582924, 8027.847964,
        11682.043069, 14856.223537, 17764.540621, 20783.584701, 23153.853909,
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
        14571.147092, 27547.269561, 38812.240484, 57547.62257, 86264.248671,
        104094.597847, 121581.953962, 143372.574735, 163490.798877,
        177730.321666, 206068.563501, 223253.901082, 22890.89064, 40979.824081,
        67056.048029, 90120.69415, 108405.165682, 137099.77911, 158386.644659,
        171790.802703, 191694.028311, 216434.464785,
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
        84034.892985, 180044.814137, 289238.50736, 406693.033019, 615348.734001,
        749481.717459, 851181.187948, 993033.710187, 1095680.627685,
        1180854.867566, 1452934.022109, 1539909.693963, 225159.997624,
        345336.547062, 572449.268081, 771195.09748, 898378.313752,
        1154572.835601, 1341347.115795, 1436326.809512, 1617579.96154,
        1847074.681129,
      ],
    },
  ],
}

export const option3 = {
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
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
}

export const option4 = {
  'color': ['#427ef6', '#62daab', '#7ecf51'],
  'grid': {
    'left': '2%',
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
    'data': ['2021', '增长率'],
    'left': 0,
    'itemWidth': 8,
    'itemHeight': 8,
  },
  'xAxis': [
    {
      'type': 'category',
      'axisTick': {
        'show': false,
      },
      'splitLine': {
        'show': false,
        'lineStyle': {
          'color': '#384267',
          'type': 'dashed',
        },
      },
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
        '11月',
        '12月',
      ],
    },
  ],
  'yAxis': [
    {
      'type': 'value',
      'axisTick': {
        'show': false,
      },
      'splitLine': {
        'show': false,
      },
    },
    {
      'type': 'value',
      'position': 'right',
      'axisTick': {
        'show': false,
      },
      'axisLine': {
        'show': false,
      },
      'splitLine': {
        'show': false,
      },
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
        108734.7, 108154.83, 108004.97, 111322.81, 105826.9, 111322.81,
        108323.85, 112424.21, 114316.91, 109250.92, 107867.04, 112914.88,
      ],
    },
    {
      'name': '增长率',
      'type': 'line',
      'yAxisIndex': 1,
      'data': [
        -21.42, -0.53, -0.14, 3.07, -4.94, 5.19, -2.31, 3.79, 1.68, -20.7,
        -1.27, 4.68,
      ],
    },
  ],
}

export const option5 = {
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
        89547.37539, 98192.003979, 96279.047894, 91195.780066, 91102.299901,
        89281.554598, 93256.847475, 86566.640533, 92272.93903, 88070.679716,
      ],
    },
    {
      'name': 2020,
      'type': 'bar',
      'data': [
        96900.6207, 94529.833718, 100438.404321, 92339.087501, 96315.286014,
        89351.384617, 90719.725414, 92117.403261, 94766.923443, 92462.848261,
        97002.265042, 96401.681609,
      ],
    },
    {
      'name': '增速',
      'type': 'line',
      'yAxisIndex': 1,
      'data': [
        -7.59, 3.87, -4.14, -1.24, -5.41, -0.08, 2.8, -6.03, -2.63, -4.75,
      ],
    },
  ],
}

export const option6 = {
  'color': ['#427ef6', '#62daab', '#7ecf51'],
  'dataZoom': {
    'type': 'slider',
    'start': 0,
    'end': 100,
  },
  'grid': {
    'left': '2%',
    'right': '2%',
    'containLabel': true,
  },
  'tooltip': {
    'trigger': 'axis',
    'axisPointer': {
      'type': 'cross',
    },
  },
  'legend': {
    'data': ['2021', '2020', '增长率'],
    'left': 0,
    'itemWidth': 8,
    'itemHeight': 8,
  },
  'xAxis': [
    {
      'type': 'category',
      'axisTick': {
        'show': false,
      },
      'splitLine': {
        'show': false,
        'lineStyle': {
          'color': '#384267',
          'type': 'dashed',
        },
      },
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
        '11月',
        '12月',
      ],
    },
  ],
  'yAxis': [
    {
      'type': 'value',
      'axisTick': {
        'show': false,
      },
      'splitLine': {
        'show': false,
      },
    },
    {
      'type': 'value',
      'position': 'right',
      'axisTick': {
        'show': false,
      },
      'axisLine': {
        'show': false,
      },
      'splitLine': {
        'show': false,
      },
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
        108734.7, 108154.83, 108004.97, 111322.81, 105826.9, 111322.81,
        108323.85, 112424.21, 114316.91, 109250.92, 107867.04, 112914.88,
      ],
    },
    {
      'name': 2020,
      'type': 'bar',
      'data': [
        140141.34, 138418.49, 137746.23, 139229.1, 137624.68, 138489.69,
        139921.07, 139740.18, 137552.89, 137764.03, 138184.23, 138373.67,
      ],
    },
    {
      'name': '增长率',
      'type': 'line',
      'yAxisIndex': 1,
      'data': [
        -22.41, -21.86, -21.59, -20.04, -23.1, -19.62, -22.58, -19.55, -16.89,
        -20.7, -21.94, -18.4,
      ],
    },
  ],
}

export const option7 = {
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
}

export const option8 = {
  'tooltip': {
    'trigger': 'item',
    'formatter': '{a} <br/>{b}: {c} ({d}%)',
  },
  'legend': {
    'icon': 'circle',
    'left': 0,
    'itemWidth': 10,
    'itemHeight': 10,
    'data': [
      '科学研究和技术服务业',
      '租赁和商务服务业',
      '信息传输、软件和信息技术服务业',
      '文化、体育和娱乐业',
      '水利、环境和公共设施管理业',
      '居民服务、修理和其他服务业',
      '教育',
    ],
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
        'formatter': '272家\n企业总数',
      },
      'emphasis': {
        'disabled': false,
      },
      'labelLine': {
        'show': false,
      },
      'data': [
        {
          'name': '科学研究和技术服务业',
          'value': 145,
        },
        {
          'name': '租赁和商务服务业',
          'value': 58,
        },
        {
          'name': '信息传输、软件和信息技术服务业',
          'value': 55,
        },
        {
          'name': '文化、体育和娱乐业',
          'value': 5,
        },
        {
          'name': '水利、环境和公共设施管理业',
          'value': 4,
        },
        {
          'name': '居民服务、修理和其他服务业',
          'value': 3,
        },
        {
          'name': '教育',
          'value': 2,
        },
      ],
    },
  ],
}

export const option9 = {
  'legend': {
    'bottom': 0,
  },
  'color': [
    '#5B8FF9',
    '#CDDDFD',
    '#5AD8A6',
    '#CDF3E4',
    '#5D7092',
    '#CED4DE',
    '#F6BD16',
    '#FCEBB9',
    '#6F5EF9',
    '#D3CEFD',
    '#6DC8EC',
    '#D3EEF9',
    '#945FB9',
    '#DECFEA',
    '#FF9845',
    '#FFE0C7',
    '#1E9493',
    '#BBDEDE',
    '#FF99C3',
    '#FFE0ED',
  ],
  'series': [
    {
      'name': '税收统计',
      'type': 'pie',
      'radius': ['25%', '35%'],
      'center': ['50%', '50%'],
      'label': {
        'show': true,
        'formatter': '{b}\n{proportion|{c}\n占比:{d}%}',
        'lineHeight': 20,
        'rich': {
          'proportion': {
            'fontSize': 12,
            'color': '#ff9a1b',
            'lineHeight': 12,
          },
        },
      },
      'data': [
        {
          'name': '工业',
          'value': 99284.93,
          'lastValue': 112196.23,
          'tb': -11.51,
        },
        {
          'name': '建筑业',
          'value': 36296.14,
          'lastValue': 32792.41,
          'tb': 10.68,
        },
        {
          'name': '服务业',
          'value': 968882.02,
          'lastValue': 1233214.37,
          'tb': -21.43,
        },
        {
          'name': '交通运输业',
          'value': 16944.35,
          'lastValue': 18639.24,
          'tb': -9.09,
        },
        {
          'name': '批零住餐业',
          'value': 172657.62,
          'lastValue': 216496.75,
          'tb': -20.25,
        },
        {
          'name': '金融业',
          'value': 9603.57,
          'lastValue': 17738.44,
          'tb': -45.86,
        },
        {
          'name': '房地产业',
          'value': 3583.49,
          'lastValue': 21027.63,
          'tb': -82.96,
        },
        {
          'name': '其他行业',
          'value': 1400.74,
          'lastValue': 1335.42,
          'tb': 4.89,
        },
      ],
    },
  ],
}

export const option10 = {
  'tooltip': {
    'show': true,
  },
  'title': {
    'text': 79,
    'left': 'center',
    'top': 'middle',
    'textStyle': {
      'color': '#09ff6d',
      'fontSize': 16,
      'fontWeight': 'bold',
    },
  },
  'radar': {
    'radius': '65%',
    'center': ['50%', '50%'],
    'name': {
      'textStyle': {
        'color': '#333',
      },
    },
    'axisLine': {
      'lineStyle': {
        'color': '#ebebeb',
      },
    },
    'splitLine': {
      'lineStyle': {
        'width': 1,
        'color': '#ebebeb',
      },
    },
    'splitArea': {
      'areaStyle': {
        'color': ['#fff', '#f8f8f8'],
      },
    },
    'indicator': [
      {
        'name': '照面特质',
        'max': 100,
      },
      {
        'name': '经营健康',
        'max': 100,
      },
      {
        'name': '运营能力',
        'max': 100,
      },
      {
        'name': '融资能力',
        'max': 100,
      },
      {
        'name': '财务法务',
        'max': 100,
      },
    ],
  },
  'series': [
    {
      'name': '综合指数',
      'type': 'radar',
      'symbol': 'circle',
      'symbolSize': 5,
      'itemStyle': {
        'color': '#09ff6d',
      },
      'areaStyle': {
        'color': '#09ff6d',
        'width': 0.5,
        'opacity': 0.1,
      },
      'lineStyle': {
        'color': '#09ff6d',
        'width': 1,
      },
      'data': [
        {
          'itemStyle': {
            'color': '#09ff6d',
          },
          'value': [80, 79, 75, 84, 75],
        },
      ],
    },
  ],
}

export const option11 = {
  'grid': {
    'top': '15%',
    'left': 0,
    'right': 15,
    'bottom': '3%',
    'containLabel': true,
  },
  'tooltip': {
    'showDelay': 0,
    'axisPointer': {
      'show': true,
      'type': 'cross',
      'lineStyle': {
        'type': 'dashed',
        'width': 1,
      },
    },
  },
  'xAxis': [
    {
      'type': 'value',
      'scale': true,
      'axisLabel': {
        'formatter': '{value}',
      },
      'splitLine': {
        'show': false,
      },
    },
  ],
  'yAxis': [
    {
      'name': '工业产值（万元）',
      'nameTextStyle': {
        'color': '#999999',
        'fontSize': 12,
        'padding': [0, 0, 0, 30],
      },
      'type': 'value',
      'scale': true,
      'axisLabel': {
        'show': true,
        'textStyle': {
          'fontSize': 12,
        },
      },
      'splitLine': {
        'show': true,
      },
      'axisLine': {
        'show': true,
      },
      'axisTick': {
        'show': false,
      },
    },
  ],
  'series': [
    {
      'name': '用气',
      'type': 'scatter',
      'data': [
        [3634.59, 2381.16],
        [3228.24, 3596.55],
        [2264.31, 2863.76],
        [3316.01, 2258.76],
        [2681.06, 3290.92],
        [2351.64, 2608.88],
        [3404.77, 2450.32],
        [2091.46, 3082.5],
        [3477.43, 2464.53],
        [3842.63, 2553.95],
        [3550.46, 2133.98],
        [3608.89, 2343.23],
        [2775.63, 2096.62],
        [3935.12, 2737.18],
        [2200.83, 2231.87],
        [3541.91, 2143.47],
        [2506.95, 3814.2],
        [3566.09, 3547.49],
        [2026.94, 2796.51],
        [2228.72, 3917.31],
        [2862.82, 3482.84],
        [3591.22, 3282.58],
        [2800.9, 3508.95],
        [2918.06, 3894.61],
        [3516.46, 2535.1],
        [2482.23, 2098.01],
        [2434.63, 2563.51],
        [3982.85, 3747.97],
        [3581.66, 2419.01],
        [3794.65, 2901.23],
        [2584.65, 2323.65],
      ],
      'symbol': 'circle',
      'itemStyle': {
        'shadowBlur': 10,
        'shadowColor': 'rgba(25, 100, 150, 0.3)',
        'shadowOffsetY': 5,
        'borderType': 'solid',
        'color': '#3399ff',
      },
    },
  ],
}

export const option12 = {
  'grid': {
    'left': 0,
    'top': '5%',
    'right': 15,
    'bottom': '3%',
    'containLabel': true,
  },
  'tooltip': {
    'showDelay': 0,
    'axisPointer': {
      'show': true,
      'type': 'cross',
      'lineStyle': {
        'type': 'dashed',
        'width': 1,
      },
    },
  },
  'xAxis': [
    {
      'type': 'value',
      'scale': true,
      'axisLabel': {
        'formatter': '{value}',
      },
      'splitLine': {
        'show': false,
      },
    },
  ],
  'yAxis': [
    {
      'type': 'value',
      'scale': true,
      'axisLabel': {
        'show': true,
        'textStyle': {
          'fontSize': 12,
        },
      },
      'splitLine': {
        'show': true,
      },
      'axisLine': {
        'show': true,
      },
      'axisTick': {
        'show': false,
      },
    },
  ],
  'series': [
    {
      'name': '用电量增速',
      'type': 'scatter',
      'data': [
        [-30.24, 42.42],
        [3.24, -25.21],
        [29.35, -42.75],
        [-6.32, -26.61],
        [-45.91, 78.57],
        [60.58, -37.91],
        [63.83, -42.35],
        [-23.48, 130.56],
        [9.03, 24.07],
        [-10.35, 9.41],
        [-10.99, -3.85],
        [-19.71, 96.43],
        [-43.13, 77.94],
        [-6.18, -16.67],
        [8.21, 4.05],
        [6.84, -16.36],
        [-28.75, 27.27],
        [19.61, 31.17],
        [-23.39, 33.63],
        [44.74, -57.42],
        [8.53, -27.78],
        [5.02, -1.27],
        [-31.15, 29.13],
        [-8.52, -20.59],
        [-6.59, -42],
        [-1.47, 32],
        [0.65, -2.02],
        [43.48, -17.32],
        [-6.09, 13.13],
        [9.05, 57.28],
        [-34.56, 30.49],
      ],
      'symbol': 'circle',
      'itemStyle': {
        'shadowBlur': 10,
        'shadowColor': 'rgba(25, 100, 150, 0.3)',
        'shadowOffsetY': 5,
        'borderType': 'solid',
        'color': '#3399ff',
      },
    },
  ],
}

export const option13 = {
  'tooltip': {
    'trigger': 'axis',
    'textStyle': {
      'fontSize': 14,
    },
    'axisPointer': {
      'type': 'shadow',
    },
  },
  'legend': {
    // 'top': '9%',
    'left': 'center',
    // 'itemWidth': 15,
    // 'itemHeight': 15,
    // 'textStyle': {
    // 'fontSize': 14,
    // 'color': '#fff',
    // },
  },
  // 'grid': {
  //   'left': '5%',
  //   'right': '15%',
  //   'top': '128',
  //   'bottom': '4%',
  //   'containLabel': true,
  // },
  'xAxis': {
    'type': 'value',
    'axisTick': {
      'show': false,
    },
    'axisLine': {
      'show': false,
    },
    'axisLabel': {
      'show': false,
    },
    'boundaryGap': [0, 0.01],
    'splitLine': {
      'show': false,
    },
  },
  'yAxis': {
    'type': 'category',
    'axisTick': {
      'show': false,
    },
    'axisLabel': {
      // 'color': '#fff',
      // 'fontSize': 14,
      'fontFamily': 'PingFangSC-Regular',
      // 'align': 'right',
      'fontWeight': '400',
    },
    'axisLine': {
      'show': false,
      'lineStyle': {
        'color': '#6A97FF',
      },
    },
    'data': [
      '美妆珠宝',
      '绿色造纸',
      '电力能源',
      '清洁煤炭',
      '新材料',
      '建材家居',
      '品牌服装',
    ],
  },
  'series': [
    {
      'name': '工业企业数',
      'type': 'bar',
      'color': '#00cc00',
      'data': [
        {
          'rate': 2.1972245773362196,
          'value': 9,
        },
        {
          'rate': 5.476463551931511,
          'value': 239,
        },
        {
          'rate': 2.5649493574615367,
          'value': 13,
        },
        {
          'rate': 3.8501476017100584,
          'value': 47,
        },
        {
          'rate': 6.481577129276431,
          'value': 653,
        },
        {
          'rate': 4.962844630259907,
          'value': 143,
        },
        {
          'rate': 4.844187086458591,
          'value': 127,
        },
      ],
      'label': {
        'show': true,
        'position': 'right',
        // 'fontSize': 14,
      },
      'itemStyle': {
        'normal': {
          'color': '#3399ff',
        },
      },
    },
    {
      'name': '规上企业数',
      'type': 'bar',
      'color': '#50FAAB',
      'data': [
        {
          'rate': 1,
          'value': 1,
        },
        {
          'rate': 2.772588722239781,
          'value': 16,
        },
        {
          'rate': 1,
          'value': 1,
        },
        {
          'rate': 1.0986122886681096,
          'value': 3,
        },
        {
          'rate': 4.532599493153256,
          'value': 93,
        },
        {
          'rate': 2.8903717578961645,
          'value': 18,
        },
        {
          'rate': 1,
          'value': 1,
        },
      ],
      'label': {
        'show': true,
        'position': 'right',
        // 'fontSize': 14,
      },
      'itemStyle': {
        'normal': {
          'color': '#00cc00',
        },
      },
    },
  ],
}

export const option14 = {
  'color': ['#fff', '#999999', '#666666'],
  'itemStyle': {
    'color': '#fffcf9',
  },
  'series': [
    {
      'type': 'graph',
      'layout': 'force',
      'force': {
        'repulsion': 80,
        'edgeLength': 10,
      },
      'itemStyle': {
        'color': 'rgba(0,0,0,0)',
      },
      'roam': 'scale',
      'symbol': '',
      'symbolSize': 1,
      'label': {
        'normal': {
          'show': true,
          'color': 'auto',
          'fontSize': 14,
        },
      },
      'data': [
        {
          'name': '煤矿分类',
          'value': 2,
          'draggable': false,
          'itemStyle': {
            'color': '#fffcf9',
          },
          'label': {
            'normal': {
              'color': '#ffc53d',
              'fontSize': 29,
            },
          },
        },
        {
          'name': '质量提升',
          'value': 2,
          'draggable': false,
          'itemStyle': {
            'color': '#fffcf9',
          },
          'label': {
            'normal': {
              'color': '#17c3b2',
              'fontSize': 42,
            },
          },
        },
        {
          'name': '国有建设用地上不动产登记',
          'value': 2,
          'draggable': false,
          'itemStyle': {
            'color': '#fffcf9',
          },
          'label': {
            'normal': {
              'color': '#ffa940',
              'fontSize': 42,
            },
          },
        },
        {
          'name': '农村饮水安全',
          'value': 2,
          'draggable': false,
          'itemStyle': {
            'color': '#fffcf9',
          },
          'label': {
            'normal': {
              'color': '#29008A',
              'fontSize': 38,
            },
          },
        },
        {
          'name': '林业生态建设',
          'value': 2,
          'draggable': false,
          'itemStyle': {
            'color': '#fffcf9',
          },
          'label': {
            'normal': {
              'color': '#ffa940',
              'fontSize': 48,
            },
          },
        },
      ],
    },
  ],
}

export const option15 = {
  'tooltip': {
    'trigger': 'axis',
    'axisPointer': {
      'type': 'shadow',
    },
    'textStyle': {
      'fontSize': 32,
    },
  },
  'grid': {
    'top': '40',
    'right': '3%',
    'left': '120',
    'bottom': '106',
  },
  'xAxis': [
    {
      'type': 'category',
      'data': [
        '工业',
        '建筑业',
        '服务业',
        '交通运输业',
        '批发零售和住宿餐饮业',
        '金融业',
        '房地产业',
        '其他行业',
      ],
      'axisLine': {
        'lineStyle': {
          'color': 'rgba(255,255,255,0.12)',
        },
      },
      'axisLabel': {
        'margin': 10,
        'color': '#fff',
        'rotate': 24,
        'textStyle': {
          'fontSize': 22,
        },
      },
    },
  ],
  'yAxis': [
    {
      'name': '人',
      'nameTextStyle': {
        'padding': [0, 60, 0, -10],
        'fontSize': 24,
        'color': '#adacac',
      },
      'axisLabel': {
        'formatter': '{value}',
        'color': '#33FAFF',
        'fontSize': 26,
      },
      'axisLine': {
        'show': false,
        'lineStyle': {
          'color': '#f0f0f0',
          'fontSize': 40,
        },
      },
      'axisTick': {
        'show': false,
      },
      'splitLine': {
        'show': false,
        'lineStyle': {
          'color': '#f0f0f0',
        },
      },
    },
  ],
  'series': [
    {
      'type': 'bar',
      'data': [42778, 4651, 11816, 1819, 15850, 689, 1618, 2774],
      'barWidth': '24px',
      'label': {
        'normal': {
          'show': true,
          'fontSize': 24,
          'color': '#fff',
          'position': 'top',
        },
      },
      'itemStyle': {
        'normal': {
          'color': {
            'x': 0,
            'y': 0,
            'x2': 0,
            'y2': 1,
            'type': 'linear',
            'global': false,
            'colorStops': [
              {
                'offset': 0,
                'color': '#ff8d35',
              },
              {
                'offset': 1,
                'color': '#f704d5',
              },
            ],
          },
          'barBorderRadius': [30, 30, 30, 30],
        },
      },
    },
  ],
}

export const option16 = {
  'dataZoom': [],
  'legend': {
    'data': [
      '一产增加值',
      '二产增加值',
      '三产增加值',
      '全国增速',
      '郑州增速',
      '新密增速',
    ],
    'left': '18%',
    'top': 15,
    'itemWidth': 32,
    'itemHeight': 15,
    'type': 'plain',
    'textStyle': {
      'color': '#FFF',
      'fontSize': 28,
    },
  },
  'tooltip': {
    'trigger': 'axis',
    'textStyle': {
      'color': '#fff',
      'fontSize': 28,
    },
    'axisPointer': {
      'type': 'shadow',
    },
  },
  'grid': {
    'borderWidth': 0,
    'top': 80,
    'bottom': 140,
    'left': 120,
    'right': 85,
  },
  'calculable': true,
  'xAxis': [
    {
      'type': 'category',
      'axisLine': {
        'lineStyle': {
          'color': 'rgba(255,255,255,.5)',
        },
      },
      'splitLine': {
        'show': false,
      },
      'axisTick': {
        'show': false,
      },
      'splitArea': {
        'show': false,
      },
      'axisLabel': {
        'interval': 0,
        'color': 'rgba(255,255,255,0.7)',
        'fontSize': 26,
        'rotate': 25,
      },
      'data': [
        '2021年1季度',
        '2021年1-2季度',
        '2021年1-3季度',
        '2021年1-4季度',
      ],
    },
  ],
  'yAxis': [
    {
      'name': '亿元',
      'nameTextStyle': {
        'color': '#FDFDFD',
        'padding': [0, 0, 0, -100],
        'fontSize': 28,
      },
      'nameGap': 15,
      'type': 'value',
      'splitLine': {
        'show': true,
        'lineStyle': {
          'type': 'dashed',
          'color': 'RGBA(3, 75, 97, 1)',
        },
      },
      'axisLine': {
        'show': false,
      },
      'axisTick': {
        'show': false,
      },
      'axisLabel': {
        'interval': 0,
        'color': 'rgba(255,255,255,0.5)',
        'fontSize': 28,
      },
      'splitArea': {
        'show': false,
      },
    },
    {
      'name': '%',
      'nameTextStyle': {
        'color': '#FDFDFD',
        'padding': [0, 0, 0, 60],
        'fontSize': 28,
      },
      'type': 'value',
      'splitLine': {
        'show': false,
      },
      'axisLabel': {
        'interval': 0,
        'color': 'rgba(255,255,255,0.5)',
        'fontSize': 28,
        'formatter': '{value}%',
      },
    },
  ],
  'series': [
    {
      'name': '三产增加值',
      'type': 'bar',
      'stack': '1',
      'barMaxWidth': 50,
      'barGap': '10%',
      'itemStyle': {
        'normal': {
          'color': '#39f',
        },
      },
      'data': [79.9, 165.89, 232.78, 321.4],
    },
    {
      'name': '二产增加值',
      'type': 'bar',
      'stack': '1',
      'barMaxWidth': 50,
      'barGap': '10%',
      'itemStyle': {
        'normal': {
          'color': '#00cc00',
        },
      },
      'data': [79.93, 179.15, 269.51, 363.7],
    },
    {
      'name': '一产增加值',
      'type': 'bar',
      'stack': '1',
      'barMaxWidth': 50,
      'barGap': '10%',
      'itemStyle': {
        'normal': {
          'color': '#ff7713',
        },
      },
      'data': [2.68, 10.48, 16.22, 28.2],
    },
    {
      'name': '全国增速',
      'type': 'line',
      'yAxisIndex': 1,
      'symbolSize': 15,
      'symbol': 'circle',
      'itemStyle': {
        'normal': {
          'color': '#33faff',
          'barBorderRadius': '100%',
        },
        'borderWidth': 0,
      },
      'smooth': false,
      'lineStyle': {
        'normal': {
          'width': 3,
          'color': '#33faff',
        },
      },
      'data': [18.3, 12.7, 9.8, 8.1],
    },
    {
      'name': '郑州增速',
      'type': 'line',
      'yAxisIndex': 1,
      'symbolSize': 15,
      'symbol': 'circle',
      'itemStyle': {
        'normal': {
          'color': '#ff669d',
          'barBorderRadius': '100%',
        },
        'borderWidth': 0,
      },
      'smooth': false,
      'lineStyle': {
        'normal': {
          'width': 2,
          'color': '#ff669d',
        },
      },
      'data': [18.4, 12.5, 6.96, 4.7],
    },
    {
      'name': '新密增速',
      'type': 'line',
      'yAxisIndex': 1,
      'symbolSize': 15,
      'symbol': 'circle',
      'itemStyle': {
        'normal': {
          'color': '#b061ff',
          'barBorderRadius': '100%',
        },
        'borderWidth': 0,
      },
      'smooth': false,
      'lineStyle': {
        'normal': {
          'width': 3,
          'color': '#b061ff',
        },
      },
      'data': [18.1, 13.12, 6.05, 0.99],
    },
  ],
}

export const option17 = {
  'dataZoom': [],
  'legend': {
    'data': ['固定资产投资'],
    'left': '18%',
    'top': 15,
    'itemWidth': 32,
    'itemHeight': 15,
    'type': 'plain',
    'textStyle': {
      'color': '#FFF',
      'fontSize': 28,
    },
  },
  'tooltip': {
    'trigger': 'axis',
    'textStyle': {
      'color': '#fff',
      'fontSize': 28,
    },
    'axisPointer': {
      'type': 'shadow',
    },
  },
  'grid': {
    'borderWidth': 0,
    'top': 80,
    'bottom': 160,
    'left': 120,
    'right': 85,
  },
  'calculable': true,
  'xAxis': [
    {
      'type': 'category',
      'axisLine': {
        'lineStyle': {
          'color': 'rgba(255,255,255,.5)',
        },
      },
      'splitLine': {
        'show': false,
      },
      'axisTick': {
        'show': false,
      },
      'splitArea': {
        'show': false,
      },
      'axisLabel': {
        'interval': 0,
        'color': 'rgba(255,255,255,0.7)',
        'fontSize': 26,
        'rotate': 40,
      },
      'data': [
        '牛店镇',
        '米村镇',
        '大隗镇',
        '城关镇',
        '来集镇',
        '袁庄乡',
        '曲梁镇',
        '青屏街街道',
        '超化镇',
        '伏羲山风景区',
        '西大街街道',
        '平陌镇',
        '岳村镇',
        '苟堂镇',
        '刘寨镇',
        '新华路街道',
        '白寨镇',
      ],
    },
  ],
  'yAxis': [
    {
      'name': '%',
      'nameTextStyle': {
        'color': '#FDFDFD',
        'padding': [0, 0, 0, -100],
        'fontSize': 28,
      },
      'nameGap': 15,
      'type': 'value',
      'splitLine': {
        'show': true,
        'lineStyle': {
          'type': 'dashed',
          'color': 'RGBA(3, 75, 97, 1)',
        },
      },
      'axisLine': {
        'show': false,
      },
      'axisTick': {
        'show': false,
      },
      'axisLabel': {
        'interval': 0,
        'color': 'rgba(255,255,255,0.5)',
        'fontSize': 28,
      },
      'splitArea': {
        'show': false,
      },
    },
  ],
  'series': [
    {
      'name': '固定资产投资',
      'type': 'bar',
      'stack': '1',
      'barMaxWidth': 50,
      'barGap': '10%',
      'itemStyle': {
        'normal': {
          'color': '#39f',
        },
      },
      'data': [
        37.69, 8.91, 6.78, 1.7, -4.49, -7.38, -15.16, -18.38, -18.89, -21.71,
        -25.28, -32.31, -32.48, -32.94, -34.71, -38.79, -40.8,
      ],
    },
  ],
}
