import React, { Component } from 'react'

import { Dialog } from 'antd-mobile'
import * as echarts from 'echarts'
import ReactECharts from 'echarts-for-react'
import { EChartsReactProps } from 'echarts-for-react/lib/types'

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
  echartRef
  setTheme(e) {
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
              <image
                x='0px'
                y='0px'
                width='624px'
                height='114px'
                xlinkHref='data:img/png;base64,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'
              />
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
