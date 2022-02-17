import React, { Component } from 'react'

import { Dialog } from 'antd-mobile'
import * as echarts from 'echarts'
import ReactECharts from 'echarts-for-react'
import { EChartsReactProps } from 'echarts-for-react/lib/types'
import { imageProps } from './util'

export interface EChartsProps extends EChartsReactProps {}

const judge =
  localStorage.getItem('theme') === 'skin-black' ||
  (window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
const theme = judge ? 'ant-dark' : 'ant'

const initialState = { theme: theme }

type EChartsState = Readonly<typeof initialState>

export class ECharts extends Component<EChartsProps, EChartsState> {
  readonly state: EChartsState = initialState

  constructor(props: EChartsProps | Readonly<EChartsProps>) {
    super(props)
    const defaultTheme = {
      color: [
        '#5b8ff9',
        '#cdddfd',
        '#61ddaa',
        '#cdf3e4',
        '#65789b',
        '#ced4de',
        '#f6bd16',
        '#fcebb9',
        '#7262fd',
        '#d3cefd',
        '#78d3f8',
        '#d3eef9',
        '#9661bc',
        '#decfea',
        '#f6903d',
        '#ffe0c7',
        '#008685',
        '#bbdede',
        '#333333',
        '#ffe0ed',
      ],
      backgroundColor: 'rgba(0,0,0,0)',
      textStyle: {},
      title: {
        textStyle: {
          color: '#008acd',
        },
        subtextStyle: {
          color: '#aaaaaa',
        },
      },
      line: {
        itemStyle: {
          borderWidth: 1,
        },
        lineStyle: {
          width: 2,
        },
        symbolSize: 3,
        symbol: 'emptyCircle',
        smooth: true,
      },
      radar: {
        itemStyle: {
          borderWidth: 1,
        },
        lineStyle: {
          width: 2,
        },
        symbolSize: 3,
        symbol: 'emptyCircle',
        smooth: true,
      },
      bar: {
        itemStyle: {
          barBorderWidth: 0,
          barBorderColor: '#ccc',
        },
      },
      pie: {
        itemStyle: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
      },
      scatter: {
        itemStyle: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
      },
      boxplot: {
        itemStyle: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
      },
      parallel: {
        itemStyle: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
      },
      sankey: {
        itemStyle: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
      },
      funnel: {
        itemStyle: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
      },
      gauge: {
        itemStyle: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
      },
      candlestick: {
        itemStyle: {
          color: '#d87a80',
          color0: '#2ec7c9',
          borderColor: '#d87a80',
          borderColor0: '#2ec7c9',
          borderWidth: 1,
        },
      },
      graph: {
        itemStyle: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
        lineStyle: {
          width: 1,
          color: '#aaaaaa',
        },
        symbolSize: 3,
        symbol: 'emptyCircle',
        smooth: true,
        color: [
          '#5b8ff9',
          '#cdddfd',
          '#61ddaa',
          '#cdf3e4',
          '#65789b',
          '#ced4de',
          '#f6bd16',
          '#fcebb9',
          '#7262fd',
          '#d3cefd',
          '#78d3f8',
          '#d3eef9',
          '#9661bc',
          '#decfea',
          '#f6903d',
          '#ffe0c7',
          '#008685',
          '#bbdede',
          '#333333',
          '#ffe0ed',
        ],
        label: {
          color: '#eeeeee',
        },
      },
      map: {
        itemStyle: {
          areaColor: '#dddddd',
          borderColor: '#eeeeee',
          borderWidth: 0.5,
        },
        label: {
          color: '#d87a80',
        },
        emphasis: {
          itemStyle: {
            areaColor: 'rgba(254,153,78,1)',
            borderColor: '#444',
            borderWidth: 1,
          },
          label: {
            color: 'rgb(100,0,0)',
          },
        },
      },
      geo: {
        itemStyle: {
          areaColor: '#dddddd',
          borderColor: '#eeeeee',
          borderWidth: 0.5,
        },
        label: {
          color: '#d87a80',
        },
        emphasis: {
          itemStyle: {
            areaColor: 'rgba(254,153,78,1)',
            borderColor: '#444',
            borderWidth: 1,
          },
          label: {
            color: 'rgb(100,0,0)',
          },
        },
      },
      categoryAxis: {
        axisLine: {
          show: true,
          lineStyle: {
            color: '#999999',
          },
        },
        axisTick: {
          show: true,
          lineStyle: {
            color: '#999999',
          },
        },
        axisLabel: {
          show: true,
          color: '#666666',
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: ['#eee'],
          },
        },
        splitArea: {
          show: false,
          areaStyle: {
            color: ['rgba(250,250,250,0)', 'rgba(200,200,200,0)'],
          },
        },
      },
      valueAxis: {
        axisLine: {
          show: true,
          lineStyle: {
            color: '#999999',
          },
        },
        axisTick: {
          show: true,
          lineStyle: {
            color: '#999999',
          },
        },
        axisLabel: {
          show: true,
          color: '#666666',
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: ['#f7f7f7'],
          },
        },
        splitArea: {
          show: true,
          areaStyle: {
            color: ['rgba(250,250,250,0)', 'rgba(200,200,200,0)'],
          },
        },
      },
      logAxis: {
        axisLine: {
          show: true,
          lineStyle: {
            color: '#333333',
          },
        },
        axisTick: {
          show: true,
          lineStyle: {
            color: '#333333',
          },
        },
        axisLabel: {
          show: true,
          color: '#333',
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: ['#eeeeee'],
          },
        },
        splitArea: {
          show: true,
          areaStyle: {
            color: ['rgba(250,250,250,0)', 'rgba(200,200,200,0)'],
          },
        },
      },
      timeAxis: {
        axisLine: {
          show: true,
          lineStyle: {
            color: '#333333',
          },
        },
        axisTick: {
          show: true,
          lineStyle: {
            color: '#333',
          },
        },
        axisLabel: {
          show: true,
          color: '#333',
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: ['#f7f7f7'],
          },
        },
        splitArea: {
          show: false,
          areaStyle: {
            color: ['rgba(250,250,250,0)', 'rgba(200,200,200,0)'],
          },
        },
      },
      toolbox: {
        iconStyle: {
          borderColor: '#2ec7c9',
        },
        emphasis: {
          iconStyle: {
            borderColor: '#18a4a6',
          },
        },
      },
      legend: {
        textStyle: {
          color: '#333333',
        },
      },
      tooltip: {
        axisPointer: {
          lineStyle: {
            color: '#008acd',
            width: '1',
          },
          crossStyle: {
            color: '#008acd',
            width: '1',
          },
        },
      },
      timeline: {
        lineStyle: {
          color: '#008acd',
          width: 1,
        },
        itemStyle: {
          color: '#008acd',
          borderWidth: 1,
        },
        controlStyle: {
          color: '#008acd',
          borderColor: '#008acd',
          borderWidth: 0.5,
        },
        checkpointStyle: {
          color: '#2ec7c9',
          borderColor: '#2ec7c9',
        },
        label: {
          color: '#008acd',
        },
        emphasis: {
          itemStyle: {
            color: '#a9334c',
          },
          controlStyle: {
            color: '#008acd',
            borderColor: '#008acd',
            borderWidth: 0.5,
          },
          label: {
            color: '#008acd',
          },
        },
      },
      visualMap: {
        color: ['#5ab1ef', '#e0ffff'],
      },
      dataZoom: {
        backgroundColor: 'rgba(47,69,84,0)',
        dataBackgroundColor: '#efefff',
        fillerColor: 'rgba(182,162,222,0.2)',
        handleColor: '#008acd',
        handleSize: '100%',
        moveHandleSize: 14,
        textStyle: {
          color: '#333333',
        },
      },
      markPoint: {
        label: {
          color: '#eeeeee',
        },
        emphasis: {
          label: {
            color: '#eeeeee',
          },
        },
      },
    }
    echarts.registerTheme('ant', defaultTheme)
    const darkTheme = {
      color: [
        '#5b8ff9',
        '#cdddfd',
        '#61ddaa',
        '#cdf3e4',
        '#65789b',
        '#ced4de',
        '#f6bd16',
        '#fcebb9',
        '#7262fd',
        '#d3cefd',
        '#78d3f8',
        '#d3eef9',
        '#9661bc',
        '#decfea',
        '#f6903d',
        '#ffe0c7',
        '#008685',
        '#bbdede',
        '#333333',
        '#ffe0ed',
      ],
      backgroundColor: 'rgba(0,0,0,0)',
      textStyle: {},
      title: {
        textStyle: {
          color: '#008acd',
        },
        subtextStyle: {
          color: '#aaaaaa',
        },
      },
      line: {
        itemStyle: {
          borderWidth: 1,
        },
        lineStyle: {
          width: 2,
        },
        symbolSize: 3,
        symbol: 'emptyCircle',
        smooth: true,
      },
      radar: {
        itemStyle: {
          borderWidth: 1,
        },
        lineStyle: {
          width: 2,
        },
        symbolSize: 3,
        symbol: 'emptyCircle',
        smooth: true,
      },
      bar: {
        itemStyle: {
          barBorderWidth: 0,
          barBorderColor: '#ccc',
        },
      },
      pie: {
        itemStyle: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
      },
      scatter: {
        itemStyle: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
      },
      boxplot: {
        itemStyle: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
      },
      parallel: {
        itemStyle: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
      },
      sankey: {
        itemStyle: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
      },
      funnel: {
        itemStyle: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
      },
      gauge: {
        itemStyle: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
      },
      candlestick: {
        itemStyle: {
          color: '#d87a80',
          color0: '#2ec7c9',
          borderColor: '#d87a80',
          borderColor0: '#2ec7c9',
          borderWidth: 1,
        },
      },
      graph: {
        itemStyle: {
          borderWidth: 0,
          borderColor: '#ccc',
        },
        lineStyle: {
          width: 1,
          color: '#aaaaaa',
        },
        symbolSize: 3,
        symbol: 'emptyCircle',
        smooth: true,
        color: [
          '#5b8ff9',
          '#cdddfd',
          '#61ddaa',
          '#cdf3e4',
          '#65789b',
          '#ced4de',
          '#f6bd16',
          '#fcebb9',
          '#7262fd',
          '#d3cefd',
          '#78d3f8',
          '#d3eef9',
          '#9661bc',
          '#decfea',
          '#f6903d',
          '#ffe0c7',
          '#008685',
          '#bbdede',
          '#333333',
          '#ffe0ed',
        ],
        label: {
          color: '#eeeeee',
        },
      },
      map: {
        itemStyle: {
          areaColor: '#dddddd',
          borderColor: '#333333',
          borderWidth: 0.5,
        },
        label: {
          color: '#d87a80',
        },
        emphasis: {
          itemStyle: {
            areaColor: 'rgba(254,153,78,1)',
            borderColor: '#444',
            borderWidth: 1,
          },
          label: {
            color: 'rgb(100,0,0)',
          },
        },
      },
      geo: {
        itemStyle: {
          areaColor: '#9c9c9c',
          borderColor: '#333333',
          borderWidth: 0.5,
        },
        label: {
          color: '#d87a80',
        },
        emphasis: {
          itemStyle: {
            areaColor: 'rgba(254,153,78,1)',
            borderColor: '#444',
            borderWidth: 1,
          },
          label: {
            color: 'rgb(100,0,0)',
          },
        },
      },
      categoryAxis: {
        axisLine: {
          show: true,
          lineStyle: {
            color: '#9c9c9c',
          },
        },
        axisTick: {
          show: true,
          lineStyle: {
            color: '#9c9c9c',
          },
        },
        axisLabel: {
          show: true,
          color: '#9c9c9c',
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: ['#9c9c9c'],
          },
        },
        splitArea: {
          show: false,
          areaStyle: {
            color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)'],
          },
        },
      },
      valueAxis: {
        axisLine: {
          show: true,
          lineStyle: {
            color: '#9c9c9c',
          },
        },
        axisTick: {
          show: true,
          lineStyle: {
            color: '#9c9c9c',
          },
        },
        axisLabel: {
          show: true,
          color: '#9c9c9c',
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: ['#464646'],
          },
        },
        splitArea: {
          show: true,
          areaStyle: {
            color: ['rgba(34,34,85,0)', 'rgba(0,0,0,0)'],
          },
        },
      },
      logAxis: {
        axisLine: {
          show: true,
          lineStyle: {
            color: '#333333',
          },
        },
        axisTick: {
          show: true,
          lineStyle: {
            color: '#333333',
          },
        },
        axisLabel: {
          show: true,
          color: '#333',
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: ['#333333'],
          },
        },
        splitArea: {
          show: true,
          areaStyle: {
            color: ['rgba(250,250,250,0)', 'rgba(154,154,154,0)'],
          },
        },
      },
      timeAxis: {
        axisLine: {
          show: true,
          lineStyle: {
            color: '#333333',
          },
        },
        axisTick: {
          show: true,
          lineStyle: {
            color: '#333',
          },
        },
        axisLabel: {
          show: true,
          color: '#333',
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: ['#333333'],
          },
        },
        splitArea: {
          show: false,
          areaStyle: {
            color: ['rgba(250,250,250,0)', 'rgba(200,200,200,0)'],
          },
        },
      },
      toolbox: {
        iconStyle: {
          borderColor: '#2ec7c9',
        },
        emphasis: {
          iconStyle: {
            borderColor: '#18a4a6',
          },
        },
      },
      legend: {
        textStyle: {
          color: '#999999',
        },
      },
      tooltip: {
        backgroundColor: 'rgba(70,70,70,0.8)',
        borderColor: 'rgba(56,56,56,0.9)',
        textStyle: {
          color: '#d2d2d2',
        },
        axisPointer: {
          lineStyle: {
            color: '#008acd',
            width: '1',
          },
          crossStyle: {
            color: '#008acd',
            width: '1',
          },
        },
      },
      timeline: {
        lineStyle: {
          color: '#008acd',
          width: 1,
        },
        itemStyle: {
          color: '#008acd',
          borderWidth: 1,
        },
        controlStyle: {
          color: '#008acd',
          borderColor: '#008acd',
          borderWidth: 0.5,
        },
        checkpointStyle: {
          color: '#2ec7c9',
          borderColor: '#2ec7c9',
        },
        label: {
          color: '#008acd',
        },
        emphasis: {
          itemStyle: {
            color: '#a9334c',
          },
          controlStyle: {
            color: '#008acd',
            borderColor: '#008acd',
            borderWidth: 0.5,
          },
          label: {
            color: '#008acd',
          },
        },
      },
      visualMap: {
        color: ['#5ab1ef', '#333333'],
      },
      dataZoom: {
        backgroundColor: 'rgba(47,69,84,0)',
        dataBackgroundColor: '#efefff',
        fillerColor: 'rgba(182,162,222,0.2)',
        handleColor: '#008acd',
        handleSize: '100%',
        moveHandleSize: 14,
        textStyle: {
          color: '#ffffff',
        },
      },
      markPoint: {
        label: {
          color: '#eeeeee',
        },
        emphasis: {
          label: {
            color: '#eeeeee',
          },
        },
      },
    }
    echarts.registerTheme('ant-dark', darkTheme)
  }
  echartRef: any
  setTheme(e: any) {
    this.setState({
      theme: e.detail,
    })
  }
  componentDidUpdate() {
    const instance = this.echartRef && this.echartRef.getEchartsInstance()
    if (instance) {
      instance.setOption(this.props.option)
    }
  }

  componentDidMount() {
    if (!localStorage.getItem('echartsFirst')) {
      Dialog.alert({
        title: '图表操作提示',
        content: (
          <>
            当前页面涉及图表操作，图表下方滑块的顶部操作条按住为滑动左右查看，左右操作条按住拖动控制显示数量，空白处滑动为创建显示位置
            <svg
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              viewBox='0 0 624 114'
              width='100%'
            >
              <image {...imageProps} />
            </svg>
          </>
        ),
      })
      localStorage.setItem('echartsFirst', 'no')
    }

    const theme = localStorage.getItem('theme')
    if (theme === 'skin-default') {
      this.setState({
        theme: 'ant',
      })
    } else {
      this.setState({
        theme: 'ant-dark',
      })
    }
    window.addEventListener('bi:theme', this.setTheme.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('bi:theme', this.setTheme.bind(this))
  }

  refreshOption() {
    this.echartRef.getEchartsInstance().setOption(this.props)
  }

  render() {
    return (
      <ReactECharts
        ref={ref => {
          this.echartRef = ref
        }}
        theme={this.state.theme || 'ant'}
        {...this.props}
      />
    )
  }
}
