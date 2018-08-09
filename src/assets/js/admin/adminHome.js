/**
* 初始化Echart图表
**/
var initChart = {
	self:null,
	getTagObj:function(id){
		return this.self.$echarts.init(document.getElementById(id));
	},
	initPie:function(id){
		var mychart = this.getTagObj(id);
		var option = {
				title : {
		        text: '星级图',
		        left:"10",
		        textStyle:{
		        	color:'#666'
		        }
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        orient:"vertical",
		        right:"10",
		        data:['rose1','rose2','rose3','rose4','rose5']
		    },
		    calculable : true,
		    series : [
		        {
		            name:'星级',
		            type:'pie',
		            radius : [30, 100],
		            center : ['50%', '50%'],
		            roseType : 'area',
		            itemStyle : {
                normal : {
		                    label : {
		                        show : false
		                    }
		                }
		            },
		            data:[
		                {value:10, name:'rose1'},
		                {value:5, name:'rose2'},
		                {value:15, name:'rose3'},
		                {value:25, name:'rose4'},
		                {value:20, name:'rose5'}
		            ]
		        }
		    ]
		}
		mychart.setOption(option);
		window.onresize = mychart.resize;
	},
	initLine:function(id,data){
		var mychart = this.getTagObj(id);
		var option = {
	    title: {
	        text: '出勤表',
	        left:"10",
	        textStyle:{
	        	color:'#666'
	        }
	    },
	    tooltip: {
	        trigger: 'axis',
	        formatter: function (params) {
	            params = params[0];
	            var date = new Date(params.name);
	            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
	        },
	        axisPointer: {
	            animation: false
	        }
	    },
	    xAxis: {
	        type: 'time',
	        splitLine: {
	            show: false
	        }
	    },
	    yAxis: {
	        type: 'value',
	        boundaryGap: [0, '100%'],
	        splitLine: {
	            show: false
	        }
	    },
	    series: [{
	        name: '模拟数据',
	        type: 'line',
	        showSymbol: false,
	        hoverAnimation: false,
	        data: data
	    }]
		};
		mychart.setOption(option);
	}
}
export { //很关键
  initChart
}