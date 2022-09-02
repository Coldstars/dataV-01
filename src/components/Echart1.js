import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default function Echart1() {
    const divRef = useRef(null)
    useEffect(() => {
        var myChart = echarts.init(divRef.current);
        myChart.setOption({
            xAxis: {
                data: ['城关', '七里河区', '西固区', '安宁区', '红谷区', '永丰区', '博览区', '渝中区', '兰州新区'],
                axisLabel: {
                    fontSize: 12 / 2420 * window.pageWidth,
                    // X轴文字换行
                    formatter(val) {
                        if (val.length > 2) {
                            const array = val.split('');
                            array.splice(2, 0, '\n');
                            return array.join('');
                        } else {
                            return val
                        }
                    },
                    // overflow: 'break',
                    // width: 24 / 2420 * window.pageWidth,
                    lineHeight: 16 / 2420 * window.pageWidth,
                    color: 'rgba(255,255,255,.4)'
                },
                axisTick: {
                    show: false,

                },

                axisLine: {
                    lineStyle: {
                        color: 'hsla(222,64%,50%,0.2)'
                    },
                },
            },
            yAxis: {
                axisLabel: {
                    fontSize: 12 / 2420 * window.pageWidth,
                    color: 'rgba(255,255,255,.4)'

                },
                splitLine: {
                    lineStyle: {
                        color: 'hsla(222,64%,50%,0.2)'
                    },
                },
            },
            grid: {
                x: 56 / 2420 * window.pageWidth,
                y: 64 / 2420 * window.pageWidth,
                x2: 28 / 2420 * window.pageWidth,
                y2: 64 / 2420 * window.pageWidth,
            },
            series: [
                {
                    type: 'bar',
                    data: [40, 30, 22, 16, 10, 20, 28, 32, 36],
                    itemStyle: {
                        maxTileWidth: 12 / 2420 * window.pageWidth
                    },
                    emphasis: {
                        itemStyle: {
                            color: 'hsla(222,64%,70%,1)'
                        }
                    },
                },

            ]
        });
    }, [])

    return (
        <div className="Echart1">
            <h2 className='title-box'>案发派出所管辖统计</h2>
            <div ref={divRef} className="chart"></div>
        </div>
    )
}