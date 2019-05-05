<template>
  <div>
    <h2>Echarts</h2>
    <div id="chart" class="ctn"></div>
  </div>
</template>
<script>
  var echarts = require('echarts');

  export default {
    data() {
      return {};
    },
    mounted() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("chart"));
      //   绘制图表
      myChart.setOption({
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            data: [
              { value: 235, name: "视频广告" },
              { value: 274, name: "联盟广告" },
              { value: 310, name: "邮件营销" },
              { value: 335, name: "直接访问" },
              { value: 400, name: "搜索引擎" }
            ]
          }
        ]
      });
    }
  };
</script>
<style>
 .ctn{
     height: 500px;
 }
</style>


