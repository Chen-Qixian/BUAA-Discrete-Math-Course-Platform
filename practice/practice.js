function monitorClick(){
    var oListGroupItem = document.getElementsByClassName('list-group-item');
    console.log(oListGroupItem);
    var len = oListGroupItem.length;
    for(var i = 0 ; i < len ; i ++){
        (function(n){
            oListGroupItem[n].onclick = function(){
                for(var j = 0 ; j < len ; j ++){
                    oListGroupItem[j].className = 'list-group-item';
                }
                oListGroupItem[n].className = 'list-group-item active';
            }
        }(i))
    }
}

function operateEchart(){
    var oDomPieChart = document.getElementsByClassName('pie_graph')[0];
    var pieChart = echarts.init(oDomPieChart,'macarons');
    pieOption = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data:['已解决','尝试过','未解决']
        },
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:223, name:'已解决',itemStyle:{color:'#449d44'}},
                    {value:100, name:'尝试过',itemStyle:{color:'#f7dc58'}},
                    {value:642, name:'未解决',itemStyle:{color:'#106afe'}}
                ]
            }
        ]
    };
    pieChart.setOption(pieOption);
}

function init(){
    monitorClick();
    operateEchart();
    
}

init();
