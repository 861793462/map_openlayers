define(['backbone','config','common','style','echarts'],
	function(Backbone,url,method,style){
		var dataMap = Backbone.View.extend({
			el:'container',
			initialize:function(){
				this.render();
			},
			render:function(){
				//数据统计
				$("#statistics").click(function(){
					statistics_open();
				})
				function statistics_open(){
				  style.map_close();
				  style.st_period_close();
				  style.Trend_close();
				  $('.statistic-map').show();
				  $('.MySwitch').show();
				  statistics();
				}
				function statistics(){
 				 // $('#statistic-map').width($('#container').width()-20) ;
 				 // $('#statistic-map').height($('#container').height()-60);
 				 // 基于准备好的dom，初始化echarts实例
 				 var myChart = echarts.init(document.getElementById('statistic-map'));
 				 $.get('./data/statistics.json',function (statisticsData) {
 				   // 指定图表的配置项和数据
 				   option = {
 				     tooltip : {
 				       trigger: 'axis',
 				       axisPointer : {            // 坐标轴指示器，坐标轴触发有效
 				         type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
 				       }
 				     },
 				     legend: {
 				       data:[ '移动','联通','电信']
 				     },
 				     toolbox: {
 				       show : true,
 				       feature : {
 				         mark : {show: true},
 				         dataView : {show: true, readOnly: false},
 				         magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
 				         restore : {show: true},
 				         saveAsImage : {show: true}
 				       }
 				     },
 				     calculable : true,
 				     xAxis : [
 				       {
 				         type : 'value'
 				       }
 				     ],
 				     yAxis : [
 				       {
 				         type : 'category',
 				         data : ['北京市','天津市','河北省','山西省','内蒙古自治区','辽宁省','吉林省','黑龙江省','上海市','江苏省','浙江省','安徽省','福建省','山东省','江西省','河南省','湖北省','湖南省','广东省','广西壮族自治区','重庆市','四川省','贵州省','云南省','西藏自治区','陕西省','甘肃省','青海省','宁夏回族自治区','新疆维吾尔自治区']
 				       }
 				     ],
 				     series : [
 				       {
 				         name:'移动',
 				         type:'bar',
 				         stack: '总量',
 				         itemStyle : { normal: {color:'rgb(143,195,31)',label : {show: true, position: 'insideRight'}}},
 				         data:statisticsData.yidong
 				       },
 				       {
 				         name:'联通',
 				         type:'bar',
 				         stack: '总量',
 				         itemStyle : { normal: {color:'rgb(255 ,128, 0 )',label : {show: true, position: 'insideRight'}}},
 				         data:statisticsData.liantong
 				       },{
 				         name:'电信',
 				         type:'bar',
 				         stack: '总量',
 				         itemStyle : { normal: {color:'rgb(5,39,175)',label : {show: true, position: 'insideRight'}}},
 				         data:statisticsData.dianxin
 				       }
 				     ]
 				   };
 				   // 使用刚指定的配置项和数据显示图表。
 				   myChart.setOption(option);
				  });
				}
				//态势图
				$("#trend").click(function(){
					style.Trend_open();
				});
			// 	$("#download-btn").click(function(){
			// 		image_download()
			// 	})
			// 	//态势图下载
			// function image_download(){
			//   var canvas = $("#usefor-download-canvas")[0];
			//   canvas.height = $(".map_body").height();
			//   canvas.width = $(".map_body").width();
			//   html2canvas(document.querySelector(".map_body"), {canvas: canvas}).then(function(canvas) {
			//     var type = 'png';
			//     var imgData = new Image();
			//     imgData = canvas.toDataURL("image/png");
			//     imgData = imgData.replace(_fixType(type),'image/octet-stream');
			//     var filename = 'baidufe_' + (new Date()).getTime() + '.' + type;
			//     saveFile(imgData,filename);
			//   });
			// }




	}
	})
	return dataMap;
	
})