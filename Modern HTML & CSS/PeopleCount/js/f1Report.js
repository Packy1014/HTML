var chartDom = document.getElementById('report-chart');
var myChart = echarts.init(chartDom);
var option;

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // Use axis to trigger tooltip
            type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
        }
    },
    legend: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        inverse: true,
        data: ['Cor1', 'Cor2', 'Cor3', 'Cor4', 'Cor5', 'Cor6', 'Cor7', 'Cor8', 'Cor9', 'Cor10', 'Cor11']
    },
    series: [{
        name: 'Left',
        type: 'bar',
        stack: 'total',
        label: {
            show: true
        },
        color: '#60A5FA',
        emphasis: {
            focus: 'series',
            formatter: 'Left'
        },
        data: [61224, 61850, 44163, 105717, 16820, 73488, 7040, 560, 51991, 5430, 12567]
    }, {
        name: 'Right',
        type: 'bar',
        stack: 'total',
        label: {
            show: true
        },
        color: '#EE6666',
        emphasis: {
            focus: 'series',
            formatter: 'Right'
        },
        data: [73082, 62111, 42406, 81473, 20360, 60166, 272, 42105, 7547, 61485, 20592]
    }]
};
option && myChart.setOption(option);