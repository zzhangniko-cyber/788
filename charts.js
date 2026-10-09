/* ============================================================
   15分钟医疗圈 · 图表 option bundle（浅底纸面 · 语义色系列）
   由任务脚本从源 .option.json / 第一章 html 构建。
   全部离线内联，无 CDN。
   ============================================================ */
window.CH_OPTS = window.CH_OPTS || {};
window.CH_MAP  = window.CH_MAP  || {};

/* ---------- 图1 · 基层浅V（第一章提取） ---------- */
window.CH_OPTS['图1'] = {"backgroundColor": "transparent", "textStyle": {"fontFamily": "\"Noto Sans SC\",\"Source Han Sans SC\",\"PingFang SC\",\"Microsoft YaHei\",sans-serif", "color": "#3A3E45"}, "animationDuration": 1100, "animationDelay": 60, "grid": {"left": 56, "right": 30, "top": 34, "bottom": 46}, "tooltip": {"trigger": "axis", "backgroundColor": "#FFFDF6", "borderColor": "#E0D9C8", "textStyle": {"color": "#3A3E45", "fontSize": 12}}, "legend": {"data": ["基层占比", "医院占比"], "textStyle": {"color": "#3A3E45"}, "top": 0, "icon": "roundRect", "itemWidth": 12, "itemHeight": 8}, "xAxis": {"type": "category", "data": ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"], "boundaryGap": false, "axisLine": {"lineStyle": {"color": "#D9D5CD"}}, "axisTick": {"show": false}, "axisLabel": {"color": "#3A3E45", "fontSize": 11}}, "yAxis": {"type": "value", "min": 36, "max": 68, "axisLine": {"show": false}, "axisTick": {"show": false}, "axisLabel": {"color": "#3A3E45", "fontSize": 11, "formatter": "{value}%"}, "splitLine": {"lineStyle": {"color": "#E7E2D7"}}}, "series": [{"name": "医院基底", "type": "line", "stack": "gap", "symbol": "none", "silent": true, "lineStyle": {"width": 0}, "itemStyle": {"opacity": 0}, "areaStyle": {"opacity": 0}, "data": [40.0, 41.2, 42.1, 43.1, 44.0, 42.9, 45.8, 45.4, 44.6, 44.3, 43.8], "z": 1}, {"name": "差距", "type": "line", "stack": "gap", "symbol": "none", "silent": true, "lineStyle": {"width": 0}, "itemStyle": {"opacity": 0}, "areaStyle": {"origin": "start", "color": {"type": "linear", "x": 0, "y": 0, "x2": 0, "y2": 1, "colorStops": [{"offset": 0, "color": "rgba(232,97,107,.42)"}, {"offset": 1, "color": "rgba(232,97,107,.14)"}]}}, "data": [16.4, 13.899999999999999, 12.100000000000001, 10.0, 8.0, 10.300000000000004, 4.400000000000006, 5.300000000000004, 7.100000000000001, 7.800000000000004, 9.300000000000004], "z": 1}, {"name": "基层占比", "type": "line", "smooth": 0.3, "symbolSize": 8, "lineStyle": {"width": 3, "color": "#3FA98F"}, "itemStyle": {"color": "#3FA98F", "borderWidth": 2, "borderColor": "#FFFFFF"}, "emphasis": {"focus": "series", "scale": 1.6}, "label": {"show": true, "position": "top", "color": "#3FA98F", "fontSize": 10.5, "fontWeight": "bold", "formatter": "{c}"}, "markLine": {"silent": true, "symbol": "none", "lineStyle": {"color": "#6E5A9E", "type": "dashed", "width": 1.5}, "label": {"formatter": "目标 65%", "color": "#6E5A9E", "fontSize": 11}, "data": [{"yAxis": 65}]}, "data": [56.4, 55.1, 54.2, 53.1, 52.0, 53.2, 50.2, 50.7, 51.7, 52.1, 53.1], "z": 3}, {"name": "医院占比", "type": "line", "smooth": 0.3, "symbolSize": 7, "lineStyle": {"width": 2.5, "color": "#8A93A6"}, "itemStyle": {"color": "#8A93A6"}, "emphasis": {"focus": "series"}, "data": [40.0, 41.2, 42.1, 43.1, 44.0, 42.9, 45.8, 45.4, 44.6, 44.3, 43.8], "z": 2}]};

/* ---------- 图2 · 反向对冲双折线（第一章提取，浅色适配） ---------- */
window.CH_OPTS['图2'] = {"backgroundColor": "transparent", "textStyle": {"fontFamily": "\"Noto Sans SC\",\"Source Han Sans SC\",\"PingFang SC\",\"Microsoft YaHei\",sans-serif", "color": "#3A3E45"}, "animationDuration": 1000, "animationEasing": "cubicOut", "tooltip": {"trigger": "axis", "backgroundColor": "#FFFDF6", "borderColor": "#E0D9C8", "textStyle": {"color": "#3A3E45", "fontSize": 12}}, "xAxis": {"type": "category", "data": ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"], "boundaryGap": false, "axisLine": {"lineStyle": {"color": "#D9D5CD"}}, "axisTick": {"show": false}, "axisLabel": {"color": "#3A3E45", "fontSize": 11}}, "grid": {"left": 58, "right": 30, "top": 44, "bottom": 46}, "legend": {"textStyle": {"color": "#3A3E45"}, "top": 0, "icon": "roundRect", "itemWidth": 12, "itemHeight": 8, "data": ["村卫生室", "门诊部及诊所"]}, "yAxis": {"type": "value", "min": 0, "max": 70, "name": "万所", "nameTextStyle": {"color": "#3A3E45", "fontSize": 11}, "axisLine": {"show": false}, "axisTick": {"show": false}, "axisLabel": {"color": "#3A3E45", "fontSize": 11}, "splitLine": {"lineStyle": {"color": "#E7E2D7"}}}, "series": [{"name": "置换带", "type": "line", "symbol": "none", "silent": true, "lineStyle": {"width": 0}, "tooltip": {"show": false}, "data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "areaStyle": {"color": "transparent"}, "z": 0}, {"name": "村卫生室", "type": "line", "smooth": 0.3, "symbolSize": 8, "lineStyle": {"width": 3, "color": "#C5485C"}, "itemStyle": {"color": "#C5485C", "borderColor": "#FFFFFF", "borderWidth": 1.5}, "areaStyle": {"color": {"type": "linear", "x": 0, "y": 0, "x2": 0, "y2": 1, "colorStops": [{"offset": 0, "color": "rgba(232,97,107,.30)"}, {"offset": 1, "color": "rgba(232,97,107,.02)"}]}}, "emphasis": {"focus": "series", "scale": 1.4}, "label": {"show": true, "position": "top", "color": "#C5485C", "fontSize": 10.5, "fontWeight": "bold", "formatter": "{c}"}, "markPoint": {"symbol": "circle", "symbolSize": 12, "itemStyle": {"color": "#C5485C"}, "label": {"formatter": "−8.1万", "color": "#C5485C", "fontSize": 11, "fontWeight": "bold", "position": "left", "distance": 6}, "data": [{"coord": ["2015", 64.1]}]}, "data": [64.1, 63.9, 63.2, 62.2, 61.6, 60.9, 59.9, 58.8, 58.2, 57.0, 56.0], "z": 3}, {"name": "门诊部及诊所", "type": "line", "smooth": 0.3, "symbolSize": 8, "lineStyle": {"width": 3, "color": "#3FA98F"}, "itemStyle": {"color": "#3FA98F", "borderColor": "#FFFFFF", "borderWidth": 1.5}, "areaStyle": {"color": {"type": "linear", "x": 0, "y": 0, "x2": 0, "y2": 1, "colorStops": [{"offset": 0, "color": "rgba(63,169,143,.28)"}, {"offset": 1, "color": "rgba(63,169,143,.02)"}]}}, "emphasis": {"focus": "series", "scale": 1.4}, "label": {"show": true, "position": "bottom", "color": "#3FA98F", "fontSize": 10.5, "fontWeight": "bold", "formatter": "{c}"}, "markPoint": {"symbol": "circle", "symbolSize": 12, "itemStyle": {"color": "#3FA98F"}, "label": {"formatter": "+19万", "color": "#3FA98F", "fontSize": 11, "fontWeight": "bold", "position": "right", "distance": 6}, "data": [{"coord": ["2024", 39.9]}]}, "data": [20.9, 21.6, 22.9, 25.0, 26.7, 29.0, 30.7, 32.1, 36.3, 39.9, null], "z": 3}]};

/* ---------- 图3 · 双轴反差（第一章提取） ---------- */
window.CH_OPTS['图3'] = {"backgroundColor": "transparent", "textStyle": {"fontFamily": "\"Noto Sans SC\",\"Source Han Sans SC\",\"PingFang SC\",\"Microsoft YaHei\",sans-serif", "color": "#3A3E45"}, "animationDuration": 1000, "animationEasing": "cubicOut", "grid": {"left": 62, "right": 66, "top": 48, "bottom": 46}, "tooltip": {"trigger": "axis", "backgroundColor": "#FFFDF6", "borderColor": "#E0D9C8", "textStyle": {"color": "#3A3E45", "fontSize": 12}}, "legend": {"data": ["基层卫生人员（万人）", "占卫生人员份额（%）"], "textStyle": {"color": "#3A3E45"}, "top": 0, "icon": "roundRect", "itemWidth": 12, "itemHeight": 8}, "xAxis": {"type": "category", "data": ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"], "axisLine": {"lineStyle": {"color": "#D9D5CD"}}, "axisTick": {"show": false}, "axisLabel": {"color": "#3A3E45", "fontSize": 11}}, "yAxis": [{"type": "value", "min": 0, "max": 600, "name": "万人", "nameTextStyle": {"color": "#3A3E45", "fontSize": 11}, "axisLine": {"show": false}, "axisTick": {"show": false}, "axisLabel": {"color": "#3A3E45", "fontSize": 11}, "splitLine": {"lineStyle": {"color": "#E7E2D7"}}}, {"type": "value", "min": 30, "max": 36, "name": "%", "nameTextStyle": {"color": "#8A93A6", "fontSize": 11}, "axisLine": {"show": false}, "axisTick": {"show": false}, "axisLabel": {"color": "#8A93A6", "fontSize": 11, "formatter": "{value}%"}, "splitLine": {"show": false}}], "series": [{"name": "基层卫生人员（万人）", "type": "bar", "barWidth": "46%", "itemStyle": {"borderRadius": [3, 3, 0, 0], "color": {"type": "linear", "x": 0, "y": 0, "x2": 0, "y2": 1, "colorStops": [{"offset": 0, "color": "rgba(63,169,143,.95)"}, {"offset": 1, "color": "rgba(63,169,143,.35)"}]}}, "emphasis": {"itemStyle": {"color": "#3FA98F"}}, "label": {"show": true, "position": "top", "color": "#3A3E45", "fontSize": 10, "formatter": "{c}"}, "data": [360.3, 368.3, 382.6, 396.5, 416.1, 434.0, 443.2, 455.1, 495.3, 525.7]}, {"name": "占卫生人员份额（%）", "type": "line", "yAxisIndex": 1, "smooth": 0.3, "symbolSize": 8, "lineStyle": {"width": 3.5, "color": "#8A93A6"}, "itemStyle": {"color": "#8A93A6", "borderColor": "#FFFFFF", "borderWidth": 2}, "emphasis": {"focus": "series", "scale": 1.5}, "label": {"show": true, "position": "right", "color": "#8A93A6", "fontSize": 10.5, "fontWeight": "bold", "formatter": "{c}%", "distance": 6}, "markLine": {"silent": true, "symbol": "none", "lineStyle": {"color": "#8A93A6", "type": "dashed", "width": 1, "opacity": 0.55}, "label": {"show": true, "formatter": "33.7%（2015）", "color": "#8A93A6", "fontSize": 10.5, "position": "insideStartBottom"}, "data": [{"yAxis": 33.7}]}, "data": [33.7, 33.0, 32.6, 32.2, 32.2, 32.2, 31.7, 31.6, 32.5, 33.3]}]};

/* ---------- 图4 · 分省四象限散点（第一章提取，含数据构建逻辑） ---------- */
window.CH_OPTS['图4'] = (function () {
  var rows = [
    ["西藏",18.53,46.0,364.0,"HH"],["河北",12.07,63.5,7420.0,"HH"],["青海",10.98,46.9,595.0,"HH"],
    ["吉林",10.61,44.3,2348.0,"HL"],["山西",10.34,44.7,3481.0,"HL"],["内蒙古",10.13,44.6,2401.0,"HL"],
    ["甘肃",9.71,51.0,2492.0,"HL"],["四川",8.55,54.6,8374.0,"HH"],["江西",8.46,62.4,4528.0,"HH"],
    ["陕西",8.43,44.6,3956.0,"HL"],["湖南",8.34,65.9,6604.0,"HH"],["山东",8.31,66.4,10163.0,"HH"],
    ["河南",8.27,61.5,9872.0,"HH"],["辽宁",7.63,36.7,4197.0,"LL"],["贵州",7.46,55.2,3856.0,"LH"],
    ["重庆",6.93,58.5,3213.0,"LH"],["福建",6.89,62.2,4188.0,"LH"],["广西",6.64,51.7,5047.0,"LL"],
    ["黑龙江",6.33,33.4,3099.0,"LL"],["湖北",6.29,56.5,5844.0,"LH"],["宁夏",6.2,52.0,728.0,"LH"],
    ["海南",5.98,53.6,1027.0,"LH"],["云南",5.7,56.4,4693.0,"LH"],["浙江",5.38,57.1,6577.0,"LH"],
    ["北京",4.81,41.0,2184.0,"LL"],["安徽",4.79,61.0,6127.0,"LH"],["广东",4.73,54.8,12657.0,"LH"],
    ["天津",4.54,40.6,1363.0,"LL"],["江苏",4.27,54.6,8515.0,"LH"],["上海",2.34,36.7,2475.0,"LL"]
  ];
  var Q = {
    HH:{name:"高密度 · 高使用", color:"#3FA98F"},
    HL:{name:"高密度 · 低使用", color:"#E8616B"},
    LH:{name:"低密度 · 高使用", color:"#D8FF3E"},
    LL:{name:"低密度 · 低使用", color:"#8A93A6"}
  };
  var keyLabel = {"上海":true,"北京":true,"天津":true,"河北":true,"山东":true,"西藏":true,"广东":true};
  var MEAN_X = 7.65, MEAN_Y = 51.95;
  var series = ["HH","HL","LH","LL"].map(function (q, qi) {
    var data = rows.filter(function (r) { return r[4] === q; }).map(function (r) {
      return {
        value: [r[1], r[2]],
        name: r[0],
        pop: r[3],
        symbolSize: r[0] === "广东" || r[0] === "四川" || r[0] === "河北" ? 13 : 10,
        label: { show: keyLabel[r[0]] || false }
      };
    });
    return {
      name: Q[q].name,
      type: "scatter",
      symbolSize: 10,
      data: data,
      itemStyle: { color: Q[q].color, opacity: .92, borderColor: "#FFFFFF", borderWidth: .5 },
      emphasis: { focus: "series", label: { show: true, formatter: function (p) { return p.name; } } },
      markLine: {
        silent: true,
        symbol: "none",
        lineStyle: { color: "#8A93A6", type: "dashed", opacity: .8 },
        label: { show: false },
        data: [{ xAxis: MEAN_X }, { yAxis: MEAN_Y }]
      }
    };
  });
  return {
    backgroundColor: "transparent",
    title: { text: "机构密度 与 基层使用率", subtext: "31 省级单元 · 全国均值十字线 · r = 0.030", left: "center", top: 10,
      textStyle: { color: "#1A1D21", fontSize: 15, fontWeight: 700 },
      subtextStyle: { color: "#6E5A9E", fontSize: 12 } },
    tooltip: {
      backgroundColor: "#FFFDF6", borderColor: "#E0D9C8", textStyle: { color: "#3A3E45", fontSize: 12 },
      formatter: function (p) {
        var d = p.data;
        return "<b>" + d.name + "</b><br>每万人基层机构数：" + d.value[0] + " 所<br>非医院诊疗占比：" + d.value[1] + "%<br>常住人口：" + d.pop.toLocaleString("en-US") + " 万";
      }
    },
    legend: {
      data: ["HH","HL","LH","LL"].map(function (q) { return Q[q].name; }),
      left: "center", top: "auto", bottom: 6, itemWidth: 14, itemHeight: 9,
      textStyle: { color: "#3A3E45", fontSize: 11.5 }
    },
    grid: { left: 58, right: 56, top: 70, bottom: 48 },
    xAxis: {
      type: "value", name: "每万人基层机构数", nameLocation: "middle",
      nameGap: 30, nameTextStyle: { color: "#3A3E45" },
      min: 0, max: "dataMax",
      axisLine: { lineStyle: { color: "#D9D5CD" } }, axisLabel: { color: "#3A3E45" },
      splitLine: { lineStyle: { color: "#EDE8DC" } }
    },
    yAxis: {
      type: "value", name: "非医院诊疗占比（%）", nameLocation: "middle",
      nameGap: 40, nameTextStyle: { color: "#3A3E45" },
      min: 0, max: 80,
      axisLine: { lineStyle: { color: "#D9D5CD" } }, axisLabel: { color: "#3A3E45" },
      splitLine: { lineStyle: { color: "#EDE8DC" } }
    },
    dataZoom: [{ type: "inside", xAxisIndex: 0 }],
    series: series
  };
})();

/* ---------- 图5b / 5c / 6 / 6b（第二章 .option.json） ---------- */
window.CH_OPTS['图5b'] = {
  "backgroundColor": "transparent",
  "textStyle": {
    "fontFamily": "\"Noto Sans SC\",\"Source Han Sans SC\",\"PingFang SC\",\"Microsoft YaHei\",sans-serif",
    "color": "#3A3E45"
  },
  "animationDuration": 700,
  "animationDurationUpdate": 380,
  "animationEasingUpdate": "cubicOut",
  "tooltip": {
    "trigger": "axis",
    "axisPointer": {
      "type": "shadow"
    },
    "backgroundColor": "#FFFDF6",
    "borderColor": "#E0D9C8",
    "textStyle": {
      "color": "#3A3E45",
      "fontSize": 12
    },
    "formatter": "{b}<br/>{a}：{c} 个小区"
  },
  "legend": {
    "data": [
      "0-5分钟",
      "5-10分钟",
      "10-15分钟",
      "15-20分钟",
      "20-25分钟",
      "25-30分钟",
      "30分钟以上"
    ],
    "left": 2,
    "top": 2,
    "textStyle": {
      "color": "#3A3E45",
      "fontSize": 11
    },
    "icon": "roundRect",
    "itemWidth": 11,
    "itemHeight": 8,
    "itemGap": 9
  },
  "grid": {
    "left": 86,
    "right": 96,
    "top": 42,
    "bottom": 30
  },
  "xAxis": {
    "type": "value",
    "max": 900,
    "axisLine": {
      "show": false
    },
    "axisTick": {
      "show": false
    },
    "splitLine": {
      "lineStyle": {
        "color": "#E7E2D7"
      }
    },
    "axisLabel": {
      "color": "#3A3E45",
      "fontSize": 10.5
    }
  },
  "yAxis": {
    "type": "category",
    "data": [
      "商品房小区\nn=801",
      "城中村\nn=48",
      "老旧社区\nn=172"
    ],
    "inverse": true,
    "axisLine": {
      "lineStyle": {
        "color": "#D9D5CD"
      }
    },
    "axisTick": {
      "show": false
    },
    "axisLabel": {
      "color": "#3A3E45",
      "fontSize": 12,
      "fontWeight": "bold"
    }
  },
  "series": [
    {
      "name": "0-5分钟",
      "type": "bar",
      "stack": "all",
      "barWidth": 34,
      "itemStyle": {
        "color": "#3FA98F"
      },
      "label": {
        "show": true,
        "color": "#3A3E45",
        "fontSize": 10,
        "fontWeight": "bold",
        "formatter": "{c}"
      },
      "emphasis": {
        "focus": "series"
      },
      "data": [
        {
          "value": 193.0,
          "label": {
            "show": true
          }
        },
        {
          "value": 10.0,
          "label": {
            "show": false
          }
        },
        {
          "value": 35.0,
          "label": {
            "show": true
          }
        }
      ]
    },
    {
      "name": "5-10分钟",
      "type": "bar",
      "stack": "all",
      "barWidth": 34,
      "itemStyle": {
        "color": "#3FA98F"
      },
      "label": {
        "show": true,
        "color": "#3A3E45",
        "fontSize": 10,
        "fontWeight": "bold",
        "formatter": "{c}"
      },
      "emphasis": {
        "focus": "series"
      },
      "data": [
        {
          "value": 320.0,
          "label": {
            "show": true
          }
        },
        {
          "value": 22.0,
          "label": {
            "show": true
          }
        },
        {
          "value": 63.0,
          "label": {
            "show": true
          }
        }
      ]
    },
    {
      "name": "10-15分钟",
      "type": "bar",
      "stack": "all",
      "barWidth": 34,
      "itemStyle": {
        "color": "#3FA98F"
      },
      "label": {
        "show": true,
        "color": "#3A3E45",
        "fontSize": 10,
        "fontWeight": "bold",
        "formatter": "{c}"
      },
      "emphasis": {
        "focus": "series"
      },
      "data": [
        {
          "value": 168.0,
          "label": {
            "show": true
          }
        },
        {
          "value": 9.0,
          "label": {
            "show": false
          }
        },
        {
          "value": 49.0,
          "label": {
            "show": true
          }
        }
      ]
    },
    {
      "name": "15-20分钟",
      "type": "bar",
      "stack": "all",
      "barWidth": 34,
      "itemStyle": {
        "color": "#E8A33D"
      },
      "label": {
        "show": true,
        "color": "#3A3E45",
        "fontSize": 10,
        "fontWeight": "bold",
        "formatter": "{c}"
      },
      "emphasis": {
        "focus": "series"
      },
      "data": [
        {
          "value": 79.0,
          "label": {
            "show": true
          }
        },
        {
          "value": 5.0,
          "label": {
            "show": false
          }
        },
        {
          "value": 11.0,
          "label": {
            "show": false
          }
        }
      ]
    },
    {
      "name": "20-25分钟",
      "type": "bar",
      "stack": "all",
      "barWidth": 34,
      "itemStyle": {
        "color": "#E8A33D"
      },
      "label": {
        "show": true,
        "color": "#3A3E45",
        "fontSize": 10,
        "fontWeight": "bold",
        "formatter": "{c}"
      },
      "emphasis": {
        "focus": "series"
      },
      "data": [
        {
          "value": 22.0,
          "label": {
            "show": true
          }
        },
        {
          "value": 1.0,
          "label": {
            "show": false
          }
        },
        {
          "value": 7.0,
          "label": {
            "show": false
          }
        }
      ]
    },
    {
      "name": "25-30分钟",
      "type": "bar",
      "stack": "all",
      "barWidth": 34,
      "itemStyle": {
        "color": "#E8616B"
      },
      "label": {
        "show": true,
        "color": "#3A3E45",
        "fontSize": 10,
        "fontWeight": "bold",
        "formatter": "{c}"
      },
      "emphasis": {
        "focus": "series"
      },
      "data": [
        {
          "value": 11.0,
          "label": {
            "show": false
          }
        },
        {
          "value": 1.0,
          "label": {
            "show": false
          }
        },
        {
          "value": 3.0,
          "label": {
            "show": false
          }
        }
      ]
    },
    {
      "name": "30分钟以上",
      "type": "bar",
      "stack": "all",
      "barWidth": 34,
      "itemStyle": {
        "color": "#E8616B"
      },
      "label": {
        "show": true,
        "color": "#3A3E45",
        "fontSize": 10,
        "fontWeight": "bold",
        "formatter": "{c}"
      },
      "emphasis": {
        "focus": "series"
      },
      "data": [
        {
          "value": 8.0,
          "label": {
            "show": false
          }
        },
        {
          "value": 0.0,
          "label": {
            "show": false
          }
        },
        {
          "value": 4.0,
          "label": {
            "show": false
          }
        }
      ]
    }
  ],
  "graphic": [
    {
      "type": "text",
      "right": 96,
      "top": 2,
      "style": {
        "text": "前 3 段 = 15 分钟政策线以内",
        "fill": "#6E5A9E",
        "fontSize": 11,
        "fontWeight": "bold"
      }
    }
  ]
};
window.CH_OPTS['图5c'] = {
  "backgroundColor": "transparent",
  "textStyle": {
    "fontFamily": "\"Noto Sans SC\",\"Source Han Sans SC\",\"PingFang SC\",\"Microsoft YaHei\",sans-serif",
    "color": "#3A3E45"
  },
  "animationDuration": 1000,
  "tooltip": {
    "trigger": "axis",
    "axisPointer": {
      "type": "shadow"
    },
    "backgroundColor": "#FFFDF6",
    "borderColor": "#E6DCC9",
    "textStyle": {
      "color": "#3A3E45",
      "fontSize": 12
    }
  },
  "legend": {
    "data": [
      "样本量（个）",
      "可达率（%）",
      "中位步行（分钟）"
    ],
    "top": 0,
    "textStyle": {
      "color": "#3A3E45"
    },
    "icon": "roundRect",
    "itemWidth": 12,
    "itemHeight": 8
  },
  "grid": [
    {
      "left": 100,
      "right": "72%",
      "top": 48,
      "bottom": 40
    },
    {
      "left": "38%",
      "right": "35%",
      "top": 48,
      "bottom": 40
    },
    {
      "left": "68%",
      "right": 34,
      "top": 48,
      "bottom": 40
    }
  ],
  "xAxis": [
    {
      "gridIndex": 0,
      "type": "value",
      "axisLabel": {
        "show": false
      },
      "axisLine": {
        "show": false
      },
      "axisTick": {
        "show": false
      },
      "splitLine": {
        "lineStyle": {
          "color": "#F0E8D8"
        }
      }
    },
    {
      "gridIndex": 1,
      "type": "value",
      "min": 80,
      "max": 88,
      "axisLabel": {
        "color": "#3A3E45",
        "fontSize": 10.5,
        "formatter": "{value}%"
      },
      "axisLine": {
        "show": false
      },
      "axisTick": {
        "show": false
      },
      "splitLine": {
        "lineStyle": {
          "color": "#F0E8D8"
        }
      }
    },
    {
      "gridIndex": 2,
      "type": "value",
      "min": 7,
      "max": 10,
      "axisLabel": {
        "color": "#3A3E45",
        "fontSize": 10.5
      },
      "axisLine": {
        "show": false
      },
      "axisTick": {
        "show": false
      },
      "splitLine": {
        "lineStyle": {
          "color": "#F0E8D8"
        }
      }
    }
  ],
  "yAxis": [
    {
      "gridIndex": 0,
      "type": "category",
      "data": [
        "商品房小区",
        "城中村",
        "老旧社区"
      ],
      "inverse": true,
      "axisLine": {
        "show": false
      },
      "axisTick": {
        "show": false
      },
      "axisLabel": {
        "show": false
      }
    },
    {
      "gridIndex": 1,
      "type": "category",
      "data": [
        "商品房小区",
        "城中村",
        "老旧社区"
      ],
      "inverse": true,
      "axisLine": {
        "show": false
      },
      "axisTick": {
        "show": false
      },
      "axisLabel": {
        "show": false
      }
    },
    {
      "gridIndex": 2,
      "type": "category",
      "data": [
        "商品房小区",
        "城中村",
        "老旧社区"
      ],
      "inverse": true,
      "axisLine": {
        "show": false
      },
      "axisTick": {
        "show": false
      },
      "axisLabel": {
        "show": false
      }
    }
  ],
  "series": [
    {
      "name": "样本量（个）",
      "type": "bar",
      "xAxisIndex": 0,
      "yAxisIndex": 0,
      "barWidth": 22,
      "itemStyle": {
        "color": "#3FA98F",
        "borderRadius": [
          0,
          4,
          4,
          0
        ]
      },
      "label": {
        "show": true,
        "position": "right",
        "color": "#B8933F",
        "fontSize": 11,
        "fontWeight": "bold",
        "formatter": "{c} 个"
      },
      "data": [
        801.0,
        48.0,
        172.0
      ]
    },
    {
      "name": "可达率（%）",
      "type": "bar",
      "xAxisIndex": 1,
      "yAxisIndex": 1,
      "barWidth": 22,
      "itemStyle": {
        "color": "#3FA98F",
        "borderRadius": [
          0,
          4,
          4,
          0
        ]
      },
      "label": {
        "show": true,
        "position": "right",
        "color": "#3FA98F",
        "fontSize": 11,
        "fontWeight": "bold",
        "formatter": "{c}%"
      },
      "data": [
        85.3,
        85.4,
        85.5
      ]
    },
    {
      "name": "中位步行（分钟）",
      "type": "bar",
      "xAxisIndex": 2,
      "yAxisIndex": 2,
      "barWidth": 22,
      "itemStyle": {
        "color": "#3FA98F",
        "borderRadius": [
          0,
          4,
          4,
          0
        ]
      },
      "label": {
        "show": true,
        "position": "right",
        "color": "#B0702C",
        "fontSize": 11,
        "fontWeight": "bold",
        "formatter": "{c} 分"
      },
      "data": [
        8.2,
        8.4,
        9.3
      ]
    }
  ],
  "graphic": [
    {
      "type": "text",
      "left": 8,
      "top": "30%",
      "style": {
        "text": "商品房小区",
        "fill": "#3A3E45",
        "fontSize": 11.5,
        "fontWeight": "bold"
      }
    },
    {
      "type": "text",
      "left": 8,
      "top": "50%",
      "style": {
        "text": "城中村",
        "fill": "#3A3E45",
        "fontSize": 11.5,
        "fontWeight": "bold"
      }
    },
    {
      "type": "text",
      "left": 8,
      "top": "70%",
      "style": {
        "text": "老旧社区",
        "fill": "#3A3E45",
        "fontSize": 11.5,
        "fontWeight": "bold"
      }
    },
    {
      "type": "text",
      "left": 100,
      "top": 26,
      "style": {
        "text": "样本量",
        "fill": "#3A3E45",
        "fontSize": 11,
        "fontWeight": "bold"
      }
    },
    {
      "type": "text",
      "left": "38%",
      "top": 26,
      "style": {
        "text": "15 分钟可达率",
        "fill": "#3A3E45",
        "fontSize": 11,
        "fontWeight": "bold"
      }
    },
    {
      "type": "text",
      "left": "68%",
      "top": 26,
      "style": {
        "text": "中位步行时间",
        "fill": "#3A3E45",
        "fontSize": 11,
        "fontWeight": "bold"
      }
    }
  ]
};
window.CH_OPTS['图6']  = {
  "backgroundColor": "transparent",
  "textStyle": {
    "fontFamily": "\"Noto Sans SC\",\"Source Han Sans SC\",\"PingFang SC\",\"Microsoft YaHei\",sans-serif",
    "color": "#3A3E45"
  },
  "animationDuration": 900,
  "tooltip": {
    "trigger": "item",
    "backgroundColor": "#FFFDF6",
    "borderColor": "#E0D9C8",
    "textStyle": {
      "color": "#3A3E45",
      "fontSize": 12
    },
    "formatter": "{b}<br/>15 分钟可达率：{c}%"
  },
  "visualMap": {
    "type": "continuous",
    "min": 20,
    "max": 95,
    "left": 20,
    "bottom": 22,
    "text": [
      "可达率高",
      "低"
    ],
    "calculable": true,
    "textStyle": {
      "color": "#3A3E45",
      "fontSize": 11
    },
    "inRange": {
      "color": [
        "#A8D0B5",
        "#3FA98F",
        "#3B7A52",
        "#2C5F3F",
        "#1E4430"
      ]
    },
    "outOfRange": {
      "color": [
        "#8A93A6"
      ]
    }
  },
  "series": [
    {
      "name": "15 分钟可达率",
      "type": "map",
      "map": "sz",
      "roam": true,
      "zoom": 1.02,
      "aspectScale": 0.92,
      "label": {
        "show": true,
        "color": "#3A3E45",
        "fontSize": 10.5,
        "fontWeight": "bold"
      },
      "itemStyle": {
        "borderColor": "#C9C2B4",
        "borderWidth": 1.2,
        "areaColor": "#EFEAE0"
      },
      "emphasis": {
        "label": {
          "color": "#FFFDF6",
          "fontSize": 12
        },
        "itemStyle": {
          "borderColor": "#C5485C",
          "borderWidth": 2,
          "shadowBlur": 14,
          "shadowColor": "rgba(200,85,61,.45)"
        }
      },
      "select": {
        "itemStyle": {
          "areaColor": "#C5485C"
        }
      },
      "data": [
        {
          "name": "福田区",
          "value": 94.9,
          "samp": 98.0,
          "un": 5.0
        },
        {
          "name": "罗湖区",
          "value": 91.6,
          "samp": 95.0,
          "un": 8.0
        },
        {
          "name": "龙华区",
          "value": 89.6,
          "samp": 134.0,
          "un": 14.0
        },
        {
          "name": "盐田区",
          "value": 88.9,
          "samp": 63.0,
          "un": 7.0
        },
        {
          "name": "宝安区",
          "value": 87.2,
          "samp": 156.0,
          "un": 20.0
        },
        {
          "name": "南山区",
          "value": 85.6,
          "samp": 132.0,
          "un": 19.0
        },
        {
          "name": "龙岗区",
          "value": 85.1,
          "samp": 154.0,
          "un": 23.0
        },
        {
          "name": "坪山区",
          "value": 83.6,
          "samp": 73.0,
          "un": 12.0
        },
        {
          "name": "光明区",
          "value": 72.6,
          "samp": 95.0,
          "un": 26.0
        },
        {
          "name": "大鹏新区",
          "value": 23.8,
          "samp": 21.0,
          "un": 16.0
        }
      ]
    }
  ],
  "geo": {
    "map": "sz",
    "roam": true,
    "zoom": 1.02,
    "aspectScale": 0.92,
    "label": {
      "show": false
    },
    "silent": true,
    "itemStyle": {
      "areaColor": "transparent",
      "borderColor": "transparent"
    },
    "emphasis": {
      "disabled": true
    }
  },
  "graphic": [
    {
      "type": "text",
      "right": 22,
      "top": 8,
      "style": {
        "text": "鼠标悬停看各区数值 · 可拖动缩放",
        "fill": "#3A3E45",
        "fontSize": 11
      }
    }
  ]
};
window.CH_OPTS['图6b'] = {
  "backgroundColor": "transparent",
  "textStyle": {
    "fontFamily": "\"Noto Sans SC\",\"Source Han Sans SC\",\"PingFang SC\",\"Microsoft YaHei\",sans-serif",
    "color": "#3A3E45"
  },
  "animationDuration": 900,
  "animationDelay": 55,
  "animationEasing": "cubicOut",
  "tooltip": {
    "trigger": "item",
    "backgroundColor": "#FFFDF6",
    "borderColor": "#E6DCC9",
    "extraCssText": "box-shadow:0 4px 16px rgba(80,60,30,.13)",
    "textStyle": {
      "color": "#3A3E45",
      "fontSize": 12
    }
  },
  "grid": {
    "left": 76,
    "right": 34,
    "top": 24,
    "bottom": 46
  },
  "xAxis": {
    "type": "value",
    "min": 0,
    "max": 90,
    "interval": 30,
    "name": "不可达人口（万人）",
    "nameLocation": "middle",
    "nameGap": 28,
    "nameTextStyle": {
      "color": "#3A3E45",
      "fontSize": 11.5
    },
    "axisLine": {
      "show": false
    },
    "axisTick": {
      "show": false
    },
    "splitLine": {
      "lineStyle": {
        "color": "#F0E8D8",
        "type": "dashed"
      }
    },
    "axisLabel": {
      "color": "#3A3E45",
      "fontSize": 10.5
    }
  },
  "yAxis": {
    "type": "category",
    "inverse": true,
    "data": [
      "龙岗区",
      "宝安区",
      "光明区",
      "龙华区",
      "南山区",
      "大鹏新区",
      "坪山区",
      "罗湖区",
      "福田区",
      "盐田区"
    ],
    "axisLine": {
      "lineStyle": {
        "color": "#E6DCC9"
      }
    },
    "axisTick": {
      "show": false
    },
    "axisLabel": {
      "color": "#3A3E45",
      "fontSize": 12,
      "fontWeight": "bold",
      "margin": 12
    }
  },
  "series": [
    {
      "name": "不可达人口",
      "type": "bar",
      "barWidth": 15,
      "itemStyle": {
        "borderRadius": [
          0,
          3,
          3,
          0
        ]
      },
      "label": {
        "show": true,
        "position": "insideLeft",
        "fontSize": 11,
        "fontWeight": "bold"
      },
      "emphasis": {
        "itemStyle": {
          "shadowBlur": 10,
          "shadowColor": "rgba(120,80,30,.30)"
        }
      },
      "data": [
        {
          "name": "龙岗区",
          "value": 61.74,
          "itemStyle": {
            "color": "#E8616B",
            "borderRadius": [
              0,
              3,
              3,
              0
            ]
          },
          "label": {
            "show": true,
            "position": "insideLeft",
            "color": "#3A3E45",
            "textBorderColor": "#E8616B",
            "textBorderWidth": 1.8,
            "fontSize": 11,
            "fontWeight": "bold",
            "formatter": "61.7 万"
          },
          "tooltip": {
            "formatter": "龙岗区<br/>不可达人口：<b>61.74 万</b><br/>不可达率：14.9%　（可达率 85.1%）<br/>95% 区间：42.01 – 88.52 万<br/>常住人口：413.39 万　样本：154 个小区"
          }
        },
        {
          "name": "宝安区",
          "value": 59.02,
          "itemStyle": {
            "color": "#E8616B",
            "borderRadius": [
              0,
              3,
              3,
              0
            ]
          },
          "label": {
            "show": true,
            "position": "insideLeft",
            "color": "#3A3E45",
            "textBorderColor": "#E8616B",
            "textBorderWidth": 1.8,
            "fontSize": 11,
            "fontWeight": "bold",
            "formatter": "59.0 万"
          },
          "tooltip": {
            "formatter": "宝安区<br/>不可达人口：<b>59.02 万</b><br/>不可达率：12.8%　（可达率 87.2%）<br/>95% 区间：38.92 – 87.34 万<br/>常住人口：460.33 万　样本：156 个小区"
          }
        },
        {
          "name": "光明区",
          "value": 32.13,
          "itemStyle": {
            "color": "#E8616B",
            "borderRadius": [
              0,
              3,
              3,
              0
            ]
          },
          "label": {
            "show": true,
            "position": "insideLeft",
            "color": "#FFFFFF",
            "textBorderColor": "#E8616B",
            "textBorderWidth": 1.8,
            "fontSize": 11,
            "fontWeight": "bold",
            "formatter": "32.1 万"
          },
          "tooltip": {
            "formatter": "光明区<br/>不可达人口：<b>32.13 万</b><br/>不可达率：27.4%　（可达率 72.6%）<br/>95% 区间：22.79 – 43.54 万<br/>常住人口：117.41 万　样本：95 个小区"
          }
        },
        {
          "name": "龙华区",
          "value": 26.59,
          "itemStyle": {
            "color": "#E8616B",
            "borderRadius": [
              0,
              3,
              3,
              0
            ]
          },
          "label": {
            "show": true,
            "position": "insideLeft",
            "color": "#3A3E45",
            "textBorderColor": "#E8616B",
            "textBorderWidth": 1.8,
            "fontSize": 11,
            "fontWeight": "bold",
            "formatter": "26.6 万"
          },
          "tooltip": {
            "formatter": "龙华区<br/>不可达人口：<b>26.59 万</b><br/>不可达率：10.4%　（可达率 89.6%）<br/>95% 区间：16.10 – 42.68 万<br/>常住人口：254.46 万　样本：134 个小区"
          }
        },
        {
          "name": "南山区",
          "value": 26.55,
          "itemStyle": {
            "color": "#E8616B",
            "borderRadius": [
              0,
              3,
              3,
              0
            ]
          },
          "label": {
            "show": true,
            "position": "insideLeft",
            "color": "#3A3E45",
            "textBorderColor": "#E8616B",
            "textBorderWidth": 1.8,
            "fontSize": 11,
            "fontWeight": "bold",
            "formatter": "26.6 万"
          },
          "tooltip": {
            "formatter": "南山区<br/>不可达人口：<b>26.55 万</b><br/>不可达率：14.4%　（可达率 85.6%）<br/>95% 区间：17.36 – 39.45 万<br/>常住人口：184.44 万　样本：132 个小区"
          }
        },
        {
          "name": "大鹏新区",
          "value": 13.03,
          "itemStyle": {
            "color": "#E8616B",
            "borderRadius": [
              0,
              3,
              3,
              0
            ]
          },
          "label": {
            "show": true,
            "position": "insideLeft",
            "color": "#FFFFFF",
            "textBorderColor": "#E8616B",
            "textBorderWidth": 1.8,
            "fontSize": 11,
            "fontWeight": "bold",
            "formatter": "13.0 万"
          },
          "tooltip": {
            "formatter": "大鹏新区<br/>不可达人口：<b>13.03 万</b><br/>不可达率：76.2%　（可达率 23.8%）<br/>95% 区间：9.39 – 15.28 万<br/>常住人口：17.10 万　样本：21 个小区"
          }
        },
        {
          "name": "坪山区",
          "value": 10.26,
          "itemStyle": {
            "color": "#E8616B",
            "borderRadius": [
              0,
              3,
              3,
              0
            ]
          },
          "label": {
            "show": true,
            "position": "insideLeft",
            "color": "#3A3E45",
            "textBorderColor": "#E8616B",
            "textBorderWidth": 1.8,
            "fontSize": 11,
            "fontWeight": "bold",
            "formatter": "10.3 万"
          },
          "tooltip": {
            "formatter": "坪山区<br/>不可达人口：<b>10.26 万</b><br/>不可达率：16.4%　（可达率 83.6%）<br/>95% 区间：6.03 – 16.58 万<br/>常住人口：62.39 万　样本：73 个小区"
          }
        },
        {
          "name": "罗湖区",
          "value": 8.8,
          "itemStyle": {
            "color": "#E8616B",
            "borderRadius": [
              0,
              3,
              3,
              0
            ]
          },
          "label": {
            "show": true,
            "position": "insideLeft",
            "color": "#3A3E45",
            "textBorderColor": "#E8616B",
            "textBorderWidth": 1.8,
            "fontSize": 11,
            "fontWeight": "bold",
            "formatter": "8.8 万"
          },
          "tooltip": {
            "formatter": "罗湖区<br/>不可达人口：<b>8.80 万</b><br/>不可达率：8.4%　（可达率 91.6%）<br/>95% 区间：4.52 – 16.45 万<br/>常住人口：104.50 万　样本：95 个小区"
          }
        },
        {
          "name": "福田区",
          "value": 7.84,
          "itemStyle": {
            "color": "#E8616B",
            "borderRadius": [
              0,
              3,
              3,
              0
            ]
          },
          "label": {
            "show": true,
            "position": "insideLeft",
            "color": "#3A3E45",
            "textBorderColor": "#E8616B",
            "textBorderWidth": 1.8,
            "fontSize": 11,
            "fontWeight": "bold",
            "formatter": "7.8 万"
          },
          "tooltip": {
            "formatter": "福田区<br/>不可达人口：<b>7.84 万</b><br/>不可达率：5.1%　（可达率 94.9%）<br/>95% 区间：3.38 – 17.50 万<br/>常住人口：153.63 万　样本：98 个小区"
          }
        },
        {
          "name": "盐田区",
          "value": 2.41,
          "itemStyle": {
            "color": "#E8616B",
            "borderRadius": [
              0,
              3,
              3,
              0
            ]
          },
          "label": {
            "show": true,
            "position": "bottom",
            "color": "#3A3E45",
            "textBorderColor": "#FFFFFF",
            "textBorderWidth": 1.8,
            "fontSize": 11,
            "fontWeight": "bold",
            "formatter": "2.4 万"
          },
          "tooltip": {
            "formatter": "盐田区<br/>不可达人口：<b>2.41 万</b><br/>不可达率：11.1%　（可达率 88.9%）<br/>95% 区间：1.19 – 4.60 万<br/>常住人口：21.69 万　样本：63 个小区"
          }
        }
      ],
      "markLine": {
        "silent": true,
        "animation": false,
        "symbol": [
          "rect",
          "rect"
        ],
        "symbolSize": [
          3,
          14
        ],
        "label": {
          "show": false
        },
        "lineStyle": {
          "color": "#6E5A9E",
          "width": 1.5,
          "type": "solid"
        },
        "data": [
          [
            {
              "coord": [
                42.01,
                "龙岗区"
              ]
            },
            {
              "coord": [
                88.52,
                "龙岗区"
              ]
            }
          ],
          [
            {
              "coord": [
                38.92,
                "宝安区"
              ]
            },
            {
              "coord": [
                87.34,
                "宝安区"
              ]
            }
          ],
          [
            {
              "coord": [
                22.79,
                "光明区"
              ]
            },
            {
              "coord": [
                43.54,
                "光明区"
              ]
            }
          ],
          [
            {
              "coord": [
                16.1,
                "龙华区"
              ]
            },
            {
              "coord": [
                42.68,
                "龙华区"
              ]
            }
          ],
          [
            {
              "coord": [
                17.36,
                "南山区"
              ]
            },
            {
              "coord": [
                39.45,
                "南山区"
              ]
            }
          ],
          [
            {
              "coord": [
                9.39,
                "大鹏新区"
              ]
            },
            {
              "coord": [
                15.28,
                "大鹏新区"
              ]
            }
          ],
          [
            {
              "coord": [
                6.03,
                "坪山区"
              ]
            },
            {
              "coord": [
                16.58,
                "坪山区"
              ]
            }
          ],
          [
            {
              "coord": [
                4.52,
                "罗湖区"
              ]
            },
            {
              "coord": [
                16.45,
                "罗湖区"
              ]
            }
          ],
          [
            {
              "coord": [
                3.38,
                "福田区"
              ]
            },
            {
              "coord": [
                17.5,
                "福田区"
              ]
            }
          ],
          [
            {
              "coord": [
                1.19,
                "盐田区"
              ]
            },
            {
              "coord": [
                4.6,
                "盐田区"
              ]
            }
          ]
        ]
      }
    }
  ]
};

/* ---------- 图7 / 8 / 9 / 10（第三章 .option.json） ---------- */
window.CH_OPTS['图7']  = {
  "backgroundColor": "transparent",
  "textStyle": {
    "fontFamily": "\"Noto Sans SC\",\"Source Han Sans SC\",\"PingFang SC\",\"Microsoft YaHei\",sans-serif",
    "color": "#2E3448"
  },
  "animationDuration": 1000,
  "animationDelay": 45,
  "tooltip": {
    "trigger": "axis",
    "axisPointer": {
      "type": "shadow"
    },
    "backgroundColor": "#FFFDF6",
    "borderColor": "#DFE2EE",
    "textStyle": {
      "color": "#2E3448",
      "fontSize": 12
    },
    "formatter": "{b} 年<br/>距 65% 的缺口：<b>{c}</b> 亿人次"
  },
  "grid": {
    "left": 56,
    "right": 40,
    "top": 60,
    "bottom": 56
  },
  "xAxis": {
    "type": "category",
    "data": [
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
      "2023",
      "2024",
      "2025"
    ],
    "axisLine": {
      "lineStyle": {
        "color": "#DFE2EE"
      }
    },
    "axisTick": {
      "show": false
    },
    "axisLabel": {
      "color": "#7C849E",
      "fontSize": 10.5
    }
  },
  "yAxis": {
    "type": "value",
    "min": 0,
    "max": 15,
    "axisLine": {
      "show": false
    },
    "axisTick": {
      "show": false
    },
    "splitLine": {
      "lineStyle": {
        "color": "#EDEFF7"
      }
    },
    "axisLabel": {
      "color": "#7C849E",
      "fontSize": 10.5
    }
  },
  "series": [
    {
      "name": "距 65% 的缺口",
      "type": "bar",
      "barWidth": "52%",
      "itemStyle": {
        "borderRadius": [
          3,
          3,
          0,
          0
        ]
      },
      "label": {
        "show": true,
        "position": "top",
        "color": "#E8616B",
        "fontSize": 10.5,
        "fontWeight": "bold",
        "formatter": "{c}"
      },
      "data": [
        {
          "value": 6.7,
          "itemStyle": {
            "color": "rgba(232,97,107,0.57)",
            "borderRadius": [
              3,
              3,
              0,
              0
            ]
          }
        },
        {
          "value": 7.8,
          "itemStyle": {
            "color": "rgba(232,97,107,0.64)",
            "borderRadius": [
              3,
              3,
              0,
              0
            ]
          }
        },
        {
          "value": 8.9,
          "itemStyle": {
            "color": "rgba(232,97,107,0.72)",
            "borderRadius": [
              3,
              3,
              0,
              0
            ]
          }
        },
        {
          "value": 9.9,
          "itemStyle": {
            "color": "rgba(232,97,107,0.78)",
            "borderRadius": [
              3,
              3,
              0,
              0
            ]
          }
        },
        {
          "value": 11.4,
          "itemStyle": {
            "color": "rgba(232,97,107,0.89)",
            "borderRadius": [
              3,
              3,
              0,
              0
            ]
          }
        },
        {
          "value": 9.1,
          "itemStyle": {
            "color": "rgba(232,97,107,0.73)",
            "borderRadius": [
              3,
              3,
              0,
              0
            ]
          }
        },
        {
          "value": 12.6,
          "itemStyle": {
            "color": "rgba(232,97,107,0.97)",
            "borderRadius": [
              3,
              3,
              0,
              0
            ]
          }
        },
        {
          "value": 12.0,
          "itemStyle": {
            "color": "rgba(232,97,107,0.93)",
            "borderRadius": [
              3,
              3,
              0,
              0
            ]
          }
        },
        {
          "value": 12.7,
          "itemStyle": {
            "color": "rgba(232,97,107,0.97)",
            "borderRadius": [
              3,
              3,
              0,
              0
            ]
          }
        },
        {
          "value": 13.1,
          "itemStyle": {
            "color": "rgba(232,97,107,1.00)",
            "borderRadius": [
              3,
              3,
              0,
              0
            ]
          }
        },
        {
          "value": 12.7,
          "itemStyle": {
            "color": "rgba(232,97,107,0.97)",
            "borderRadius": [
              3,
              3,
              0,
              0
            ]
          }
        }
      ]
    }
  ],
  "graphic": [
    {
      "type": "text",
      "left": 56,
      "top": 14,
      "style": {
        "text": "缺口 ＝ 当年总诊疗人次 × 65% − 基层实际诊疗人次（单位：亿人次）",
        "fill": "#7C849E",
        "fontSize": 11
      }
    }
  ]
};
window.CH_OPTS['图8']  = {
  "backgroundColor": "transparent",
  "textStyle": {
    "fontFamily": "\"Noto Sans SC\",\"Source Han Sans SC\",\"PingFang SC\",\"Microsoft YaHei\",sans-serif",
    "color": "#3A3E45"
  },
  "animationDuration": 1100,
  "animationDelay": 55,
  "tooltip": {
    "trigger": "axis",
    "backgroundColor": "#FFFDF6",
    "borderColor": "#E0D9C8",
    "textStyle": {
      "color": "#3A3E45",
      "fontSize": 12
    }
  },
  "legend": {
    "data": [
      "全国基层占比",
      "上海社区占比"
    ],
    "top": 0,
    "textStyle": {
      "color": "#3A3E45"
    },
    "icon": "roundRect",
    "itemWidth": 12,
    "itemHeight": 8
  },
  "grid": {
    "left": 52,
    "right": 34,
    "top": 42,
    "bottom": 40
  },
  "xAxis": {
    "type": "category",
    "data": [
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
      "2023",
      "2024"
    ],
    "boundaryGap": false,
    "axisLine": {
      "lineStyle": {
        "color": "#D9D5CD"
      }
    },
    "axisTick": {
      "show": false
    },
    "axisLabel": {
      "color": "#3A3E45",
      "fontSize": 10.5
    }
  },
  "yAxis": {
    "type": "value",
    "min": 0,
    "max": 60,
    "axisLine": {
      "show": false
    },
    "axisTick": {
      "show": false
    },
    "splitLine": {
      "lineStyle": {
        "color": "#E7E2D7"
      }
    },
    "axisLabel": {
      "color": "#3A3E45",
      "fontSize": 10.5,
      "formatter": "{value}%"
    }
  },
  "series": [
    {
      "name": "全国基层占比",
      "type": "line",
      "data": [
        56.4,
        55.1,
        54.2,
        53.1,
        52.0,
        53.2,
        50.2,
        50.7,
        51.7,
        52.1
      ],
      "smooth": 0.28,
      "symbolSize": 8,
      "lineStyle": {
        "width": 3.4,
        "color": "#5B8FD9"
      },
      "itemStyle": {
        "color": "#5B8FD9",
        "borderColor": "#FFFFFF",
        "borderWidth": 2
      },
      "label": {
        "show": true,
        "position": "top",
        "color": "#5B8FD9",
        "fontSize": 10,
        "formatter": "{c}",
        "showMinLabel": true,
        "showMaxLabel": true
      },
      "endLabel": {
        "show": true,
        "formatter": "{c}%",
        "color": "#5B8FD9",
        "fontSize": 11,
        "fontWeight": "bold"
      },
      "emphasis": {
        "focus": "series"
      },
      "z": 3
    },
    {
      "name": "上海社区占比",
      "type": "line",
      "data": [
        32.7,
        32.25,
        31.78,
        31.04,
        30.44,
        33.06,
        26.07,
        24.36,
        27.36,
        27.96
      ],
      "smooth": 0.28,
      "symbolSize": 8,
      "lineStyle": {
        "width": 3.4,
        "color": "#E8616B"
      },
      "itemStyle": {
        "color": "#E8616B",
        "borderColor": "#FFFFFF",
        "borderWidth": 2
      },
      "label": {
        "show": true,
        "position": "bottom",
        "color": "#C5485C",
        "fontSize": 10,
        "formatter": "{c}"
      },
      "endLabel": {
        "show": true,
        "formatter": "{c}%",
        "color": "#C5485C",
        "fontSize": 11,
        "fontWeight": "bold"
      },
      "emphasis": {
        "focus": "series"
      },
      "z": 3
    }
  ],
  "graphic": [
    {
      "type": "text",
      "right": 18,
      "top": 44,
      "style": {
        "text": "⚠ 两条线口径不同\n只看方向，不比高低",
        "fill": "#3A3E45",
        "fontSize": 11,
        "lineHeight": 16
      }
    }
  ]
};
window.CH_OPTS['图9']  = {
  "backgroundColor": "transparent",
  "textStyle": {
    "fontFamily": "\"Noto Sans SC\",\"Source Han Sans SC\",\"PingFang SC\",\"Microsoft YaHei\",sans-serif",
    "color": "#3A3E45"
  },
  "animationDuration": 1100,
  "animationDelay": 60,
  "tooltip": {
    "trigger": "axis",
    "backgroundColor": "#FFFDF6",
    "borderColor": "#E0D9C8",
    "textStyle": {
      "color": "#3A3E45",
      "fontSize": 12
    }
  },
  "legend": {
    "data": [
      "下限值（「超 X%」）",
      "精确值",
      "无官方发布"
    ],
    "top": 0,
    "textStyle": {
      "color": "#3A3E45"
    }
  },
  "grid": {
    "left": 54,
    "right": 40,
    "top": 30,
    "bottom": 40
  },
  "xAxis": {
    "type": "category",
    "data": [
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
      "2023",
      "2024"
    ],
    "boundaryGap": false,
    "axisLine": {
      "lineStyle": {
        "color": "#D9D5CD"
      }
    },
    "axisTick": {
      "show": false
    },
    "axisLabel": {
      "color": "#3A3E45",
      "fontSize": 10.5
    }
  },
  "yAxis": {
    "type": "value",
    "min": 0,
    "max": 55,
    "axisLine": {
      "show": false
    },
    "axisTick": {
      "show": false
    },
    "splitLine": {
      "lineStyle": {
        "color": "#E7E2D7"
      }
    },
    "axisLabel": {
      "color": "#3A3E45",
      "fontSize": 10.5,
      "formatter": "{value}%"
    }
  },
  "series": [
    {
      "name": "下限值（「超 X%」）",
      "type": "line",
      "connectNulls": true,
      "symbolSize": 12,
      "smooth": 0.3,
      "lineStyle": {
        "width": 3,
        "color": "#6E5A9E"
      },
      "itemStyle": {
        "color": "#6E5A9E",
        "borderColor": "#6E5A9E",
        "borderWidth": 2
      },
      "label": {
        "show": true,
        "position": "bottom",
        "color": "#5F5087",
        "fontSize": 10.5,
        "formatter": "{c}"
      },
      "data": [
        "-",
        {
          "value": 30.0,
          "symbol": "emptyCircle"
        },
        "-",
        {
          "value": 30.0,
          "symbol": "emptyCircle"
        },
        {
          "value": 30.0,
          "symbol": "emptyCircle"
        },
        {
          "value": 34.0,
          "symbol": "emptyCircle"
        },
        {
          "value": 35.0,
          "symbol": "emptyCircle"
        },
        {
          "value": 44.36
        },
        {
          "value": 45.0
        }
      ]
    },
    {
      "name": "精确值",
      "type": "line",
      "connectNulls": true,
      "symbolSize": 13,
      "smooth": 0.3,
      "lineStyle": {
        "width": 3.4,
        "color": "#3FA98F"
      },
      "itemStyle": {
        "color": "#3FA98F",
        "borderColor": "#FFFFFF",
        "borderWidth": 2
      },
      "label": {
        "show": true,
        "position": "top",
        "color": "#2E968B",
        "fontSize": 11,
        "fontWeight": "bold",
        "formatter": "{c}"
      },
      "data": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        44.36,
        45.0
      ]
    }
  ],
  "graphic": [
    {
      "type": "text",
      "left": 54,
      "bottom": 58,
      "style": {
        "text": "空心点＝原文「超/以上」（下限值）· 实心点＝精确值",
        "fill": "#3A3E45",
        "fontSize": 11
      }
    }
  ]
};
window.CH_OPTS['图10'] = {
  "backgroundColor": "transparent",
  "textStyle": {
    "fontFamily": "\"Noto Sans SC\",\"Source Han Sans SC\",\"PingFang SC\",\"Microsoft YaHei\",sans-serif",
    "color": "#3A3E45"
  },
  "animationDuration": 1100,
  "animationDelay": 60,
  "tooltip": {
    "trigger": "axis",
    "backgroundColor": "#FFFDF6",
    "borderColor": "#E0D9C8",
    "textStyle": {
      "color": "#3A3E45",
      "fontSize": 12
    }
  },
  "grid": {
    "left": 58,
    "right": 40,
    "top": 40,
    "bottom": 40
  },
  "xAxis": {
    "type": "category",
    "data": [
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
      "2023",
      "2024",
      "2025"
    ],
    "boundaryGap": false,
    "axisLine": {
      "lineStyle": {
        "color": "#D9D5CD"
      }
    },
    "axisTick": {
      "show": false
    },
    "axisLabel": {
      "color": "#3A3E45",
      "fontSize": 10.5
    }
  },
  "yAxis": {
    "type": "value",
    "min": 0,
    "max": 1.2,
    "axisLine": {
      "show": false
    },
    "axisTick": {
      "show": false
    },
    "splitLine": {
      "lineStyle": {
        "color": "#E7E2D7"
      }
    },
    "axisLabel": {
      "color": "#3A3E45",
      "fontSize": 10.5,
      "formatter": "{value}%"
    }
  },
  "series": [
    {
      "type": "line",
      "data": [
        {
          "value": 0.24
        },
        "-",
        {
          "value": 0.44,
          "symbol": "emptyCircle",
          "symbolSize": 12
        },
        {
          "value": 0.44
        },
        {
          "value": 0.54
        },
        {
          "value": 0.61
        },
        {
          "value": 0.68
        },
        {
          "value": 0.65,
          "symbol": "emptyCircle",
          "symbolSize": 12
        },
        {
          "value": 0.61
        },
        {
          "value": 0.69
        },
        "-"
      ],
      "connectNulls": true,
      "smooth": 0.3,
      "symbolSize": 11,
      "lineStyle": {
        "width": 3.4,
        "color": "#E8616B"
      },
      "itemStyle": {
        "color": "#E8616B",
        "borderColor": "#FFFFFF",
        "borderWidth": 2
      },
      "areaStyle": {
        "color": {
          "type": "linear",
          "x": 0,
          "y": 0,
          "x2": 0,
          "y2": 1,
          "colorStops": [
            {
              "offset": 0,
              "color": "rgba(232,97,107,.28)"
            },
            {
              "offset": 1,
              "color": "rgba(232,97,107,0)"
            }
          ]
        }
      },
      "label": {
        "show": true,
        "position": "top",
        "color": "#C5485C",
        "fontSize": 10.5,
        "formatter": "{c}%"
      },
      "markLine": {
        "silent": true,
        "symbol": "none",
        "lineStyle": {
          "color": "#6E5A9E",
          "type": "dashed",
          "width": 1.6
        },
        "label": {
          "formatter": "1% 线（十年未破）",
          "color": "#6E5A9E",
          "fontSize": 11
        },
        "data": [
          {
            "yAxis": 1.0
          }
        ]
      }
    }
  ],
  "graphic": [
    {
      "type": "text",
      "left": 58,
      "top": 34,
      "style": {
        "text": "空心点＝自行反推的推算值（非官方发布）",
        "fill": "#3A3E45",
        "fontSize": 11
      }
    }
  ]
};

/* ---------- 图11 / 12 / 13（第四章 .option.json） ---------- */
window.CH_OPTS['图11'] = {
  "backgroundColor": "transparent",
  "textStyle": {
    "fontFamily": "\"Noto Sans SC\",\"Source Han Sans SC\",\"PingFang SC\",\"Microsoft YaHei\",sans-serif",
    "color": "#3A3E45"
  },
  "animationDuration": 1200,
  "animationDelay": 60,
  "tooltip": {
    "trigger": "axis",
    "backgroundColor": "#FFFDF6",
    "borderColor": "#E0D9C8",
    "textStyle": {
      "color": "#3A3E45",
      "fontSize": 12
    },
    "formatter": "{b}:00<br/>{a0}: {c0}%　{a1}: {c1}%　{a2}: {c2}%"
  },
  "legend": {
    "data": [
      {
        "name": "工作日",
        "itemStyle": {
          "color": "#E8A33D"
        }
      },
      {
        "name": "周六",
        "itemStyle": {
          "color": "#5B8FD9"
        }
      },
      {
        "name": "周日",
        "itemStyle": {
          "color": "#3FA98F"
        }
      }
    ],
    "top": 0,
    "textStyle": {
      "color": "#3A3E45"
    },
    "icon": "roundRect",
    "itemWidth": 12,
    "itemHeight": 8
  },
  "grid": {
    "left": 50,
    "right": 34,
    "top": 44,
    "bottom": 46
  },
  "graphic": [
    {
      "type": "text",
      "left": 50,
      "top": 24,
      "style": {
        "text": "红色区间＝一天中的两个「时间缺口」",
        "fill": "#3A3E45",
        "fontSize": 11
      }
    }
  ],
  "series": [
    {
      "name": "工作日",
      "type": "line",
      "data": [
        1.1,
        1.1,
        1.1,
        1.1,
        1.1,
        1.1,
        1.1,
        1.1,
        80.2,
        84.2,
        84.8,
        84.8,
        50.7,
        51.1,
        84.7,
        85.1,
        85.1,
        74.9,
        63.3,
        60.0,
        57.6,
        14.2,
        1.1,
        1.1
      ],
      "smooth": 0.22,
      "symbol": "circle",
      "symbolSize": 5,
      "lineStyle": {
        "width": 3.4,
        "color": "#E8A33D"
      },
      "itemStyle": {
        "color": "#E8A33D"
      },
      "areaStyle": {
        "color": {
          "type": "linear",
          "x": 0,
          "y": 0,
          "x2": 0,
          "y2": 1,
          "colorStops": [
            {
              "offset": 0,
              "color": "#E8A33D56"
            },
            {
              "offset": 1,
              "color": "#E8A33D05"
            }
          ]
        }
      },
      "markArea": {
        "silent": true,
        "itemStyle": {
          "color": "rgba(232,97,107,.15)"
        },
        "label": {
          "show": true,
          "color": "#C5485C",
          "fontSize": 11,
          "fontWeight": "bold",
          "position": "insideTop"
        },
        "data": [
          [
            {
              "xAxis": "12",
              "name": "午休塌陷"
            },
            {
              "xAxis": "13"
            }
          ],
          [
            {
              "xAxis": "21",
              "name": "晚间断崖"
            },
            {
              "xAxis": "23"
            }
          ]
        ]
      },
      "emphasis": {
        "focus": "series"
      },
      "z": 4
    },
    {
      "name": "周六",
      "type": "line",
      "data": [
        1.1,
        1.1,
        1.1,
        1.1,
        1.1,
        1.1,
        1.1,
        1.1,
        79.5,
        83.5,
        84.1,
        84.1,
        49.5,
        49.6,
        83.8,
        84.1,
        84.0,
        71.5,
        56.6,
        52.6,
        50.9,
        14.2,
        1.1,
        1.1
      ],
      "smooth": 0.22,
      "symbol": "none",
      "lineStyle": {
        "width": 2.2,
        "color": "#5B8FD9",
        "type": [
          6,
          3
        ]
      },
      "itemStyle": {
        "color": "#5B8FD9"
      },
      "areaStyle": {
        "color": {
          "type": "linear",
          "x": 0,
          "y": 0,
          "x2": 0,
          "y2": 1,
          "colorStops": [
            {
              "offset": 0,
              "color": "#5B8FD928"
            },
            {
              "offset": 1,
              "color": "#5B8FD905"
            }
          ]
        }
      },
      "z": 2
    },
    {
      "name": "周日",
      "type": "line",
      "data": [
        1.1,
        1.1,
        1.1,
        1.1,
        1.1,
        1.1,
        1.1,
        1.1,
        77.5,
        81.5,
        82.1,
        82.1,
        48.9,
        49.1,
        81.8,
        82.1,
        82.0,
        70.4,
        56.5,
        52.5,
        50.8,
        14.2,
        1.1,
        1.1
      ],
      "smooth": 0.22,
      "symbol": "none",
      "lineStyle": {
        "width": 2.2,
        "color": "#3FA98F",
        "type": [
          2,
          2
        ]
      },
      "itemStyle": {
        "color": "#3FA98F"
      },
      "areaStyle": {
        "color": {
          "type": "linear",
          "x": 0,
          "y": 0,
          "x2": 0,
          "y2": 1,
          "colorStops": [
            {
              "offset": 0,
              "color": "#3FA98F28"
            },
            {
              "offset": 1,
              "color": "#3FA98F05"
            }
          ]
        }
      },
      "z": 3
    }
  ],
  "xAxis": {
    "type": "category",
    "data": [
      "00",
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23"
    ],
    "boundaryGap": false,
    "axisLine": {
      "lineStyle": {
        "color": "#D9D5CD"
      }
    },
    "axisTick": {
      "show": false
    },
    "axisLabel": {
      "color": "#3A3E45",
      "fontSize": 10,
      "interval": 1
    }
  },
  "yAxis": {
    "type": "value",
    "min": 0,
    "max": 95,
    "axisLine": {
      "show": false
    },
    "axisTick": {
      "show": false
    },
    "splitLine": {
      "lineStyle": {
        "color": "#E7E2D7"
      }
    },
    "axisLabel": {
      "color": "#3A3E45",
      "fontSize": 10.5,
      "formatter": "{value}%"
    }
  }
};
window.CH_OPTS['图12'] = {
  "backgroundColor": "transparent",
  "textStyle": {
    "fontFamily": "\"Noto Sans SC\",\"Source Han Sans SC\",\"PingFang SC\",\"Microsoft YaHei\",sans-serif",
    "color": "#3A3E45"
  },
  "animationDuration": 1200,
  "animationDelay": 70,
  "tooltip": {
    "trigger": "axis",
    "backgroundColor": "#FFFDF6",
    "borderColor": "#E0D9C8",
    "textStyle": {
      "color": "#3A3E45",
      "fontSize": 12
    }
  },
  "legend": {
    "data": [
      {
        "name": "机构开诊率",
        "itemStyle": {
          "color": "#E8A33D"
        }
      },
      {
        "name": "城市人作息（示意）",
        "itemStyle": {
          "color": "#8A93A6"
        }
      }
    ],
    "top": 0,
    "textStyle": {
      "color": "#3A3E45"
    }
  },
  "grid": [
    {
      "left": 66,
      "right": 40,
      "top": 58,
      "height": "34%"
    },
    {
      "left": 66,
      "right": 40,
      "top": "64%",
      "height": "26%"
    }
  ],
  "xAxis": [
    {
      "type": "category",
      "data": [
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23"
      ],
      "boundaryGap": false,
      "gridIndex": 0,
      "axisLine": {
        "lineStyle": {
          "color": "#D9D5CD"
        }
      },
      "axisTick": {
        "show": false
      },
      "axisLabel": {
        "show": false
      }
    },
    {
      "type": "category",
      "data": [
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23"
      ],
      "boundaryGap": false,
      "gridIndex": 1,
      "axisLine": {
        "lineStyle": {
          "color": "#D9D5CD"
        }
      },
      "axisTick": {
        "show": false
      },
      "axisLabel": {
        "color": "#3A3E45",
        "fontSize": 10,
        "interval": 1
      }
    }
  ],
  "yAxis": [
    {
      "type": "value",
      "min": 0,
      "max": 100,
      "gridIndex": 0,
      "name": "机构开诊率",
      "nameGap": 12,
      "nameTextStyle": {
        "color": "#3A3E45",
        "fontSize": 10,
        "align": "left"
      },
      "axisLine": {
        "show": false
      },
      "axisTick": {
        "show": false
      },
      "splitLine": {
        "lineStyle": {
          "color": "#E7E2D7"
        }
      },
      "axisLabel": {
        "color": "#3A3E45",
        "fontSize": 10,
        "formatter": "{value}%"
      }
    },
    {
      "type": "value",
      "min": 0,
      "max": 100,
      "gridIndex": 1,
      "name": "城市人作息",
      "nameGap": 12,
      "nameTextStyle": {
        "color": "#3A3E45",
        "fontSize": 10,
        "align": "left"
      },
      "axisLine": {
        "show": false
      },
      "axisTick": {
        "show": false
      },
      "splitLine": {
        "lineStyle": {
          "color": "#E7E2D7"
        }
      },
      "axisLabel": {
        "show": false
      }
    }
  ],
  "series": [
    {
      "name": "机构开诊率",
      "type": "line",
      "data": [
        0.8,
        0.8,
        0.8,
        0.8,
        0.8,
        0.8,
        0.8,
        0.9,
        94.9,
        98.7,
        99.1,
        99.3,
        62.4,
        62.2,
        98.7,
        99.0,
        99.1,
        88.3,
        73.4,
        70.7,
        68.2,
        16.1,
        0.8,
        0.8
      ],
      "smooth": 0.22,
      "xAxisIndex": 0,
      "yAxisIndex": 0,
      "symbol": "none",
      "lineStyle": {
        "width": 3.4,
        "color": "#E8A33D"
      },
      "itemStyle": {
        "color": "#E8A33D"
      },
      "areaStyle": {
        "color": {
          "type": "linear",
          "x": 0,
          "y": 0,
          "x2": 0,
          "y2": 1,
          "colorStops": [
            {
              "offset": 0,
              "color": "#E8A33D47"
            },
            {
              "offset": 1,
              "color": "#E8A33D05"
            }
          ]
        }
      },
      "markArea": {
        "silent": true,
        "itemStyle": {
          "color": "rgba(232,97,107,.15)"
        },
        "label": {
          "show": true,
          "color": "#C5485C",
          "fontSize": 10,
          "position": "insideTop"
        },
        "data": [
          [
            {
              "xAxis": "12",
              "name": "午休塌陷"
            },
            {
              "xAxis": "13"
            }
          ],
          [
            {
              "xAxis": "21",
              "name": "晚间断崖"
            },
            {
              "xAxis": "22"
            }
          ]
        ]
      }
    },
    {
      "name": "城市人作息（示意）",
      "type": "line",
      "data": [
        0,
        0,
        0,
        0,
        0,
        0,
        5,
        35,
        62,
        48,
        42,
        46,
        72,
        58,
        44,
        42,
        50,
        68,
        80,
        74,
        60,
        34,
        12,
        3
      ],
      "smooth": 0.35,
      "xAxisIndex": 1,
      "yAxisIndex": 1,
      "symbol": "none",
      "lineStyle": {
        "width": 2.4,
        "color": "#8A93A6"
      },
      "itemStyle": {
        "color": "#8A93A6"
      },
      "areaStyle": {
        "color": {
          "type": "linear",
          "x": 0,
          "y": 0,
          "x2": 0,
          "y2": 1,
          "colorStops": [
            {
              "offset": 0,
              "color": "#8A93A638"
            },
            {
              "offset": 1,
              "color": "#8A93A605"
            }
          ]
        }
      },
      "markArea": {
        "silent": true,
        "itemStyle": {
          "color": "rgba(233,180,76,.15)"
        },
        "label": {
          "show": true,
          "color": "#E8A33D",
          "fontSize": 10,
          "position": "insideTop"
        },
        "data": [
          [
            {
              "xAxis": "18",
              "name": "下班就医高峰"
            },
            {
              "xAxis": "21"
            }
          ]
        ]
      }
    }
  ],
  "graphic": [
    {
      "type": "text",
      "left": 66,
      "top": 24,
      "style": {
        "text": "上轨＝机构什么时候开门　下轨＝人什么时候想看病",
        "fill": "#3A3E45",
        "fontSize": 11
      }
    },
    {
      "type": "text",
      "left": "center",
      "top": "57%",
      "style": {
        "text": "↓ 当机构关门时，人刚好有空 ↓",
        "fill": "#C5485C",
        "fontSize": 12,
        "fontWeight": "bold",
        "align": "center"
      }
    }
  ]
};
window.CH_OPTS['图13'] = {
  "backgroundColor": "transparent",
  "textStyle": {
    "fontFamily": "\"Noto Sans SC\",\"Source Han Sans SC\",\"PingFang SC\",\"Microsoft YaHei\",sans-serif",
    "color": "#3A3E45"
  },
  "animationDuration": 900,
  "tooltip": {
    "backgroundColor": "#FFFDF6",
    "borderColor": "#E0D9C8",
    "textStyle": {
      "color": "#3A3E45",
      "fontSize": 11
    },
    "formatter": "可达率 {c}%"
  },
  "visualMap": {
    "min": 0,
    "max": 100,
    "calculable": true,
    "orient": "horizontal",
    "left": "center",
    "bottom": 2,
    "itemWidth": 12,
    "itemHeight": 100,
    "text": [
      "高",
      "低"
    ],
    "textStyle": {
      "color": "#3A3E45",
      "fontSize": 10
    },
    "inRange": {
      "color": [
        "#C5485C",
        "#E8616B",
        "#E8A33D",
        "#3FA98F",
        "#3B7A52"
      ]
    }
  },
  "grid": {
    "left": 104,
    "right": 34,
    "top": 62,
    "bottom": 66
  },
  "xAxis": {
    "type": "category",
    "data": [
      "00",
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23"
    ],
    "boundaryGap": true,
    "axisLine": {
      "lineStyle": {
        "color": "#D9D5CD"
      }
    },
    "axisTick": {
      "show": false
    },
    "axisLabel": {
      "color": "#3A3E45",
      "fontSize": 9.5,
      "interval": 2
    }
  },
  "yAxis": {
    "type": "category",
    "data": [
      "福田区 (n=84)",
      "罗湖区 (n=87)",
      "盐田区 (n=58)",
      "南山区 (n=122)",
      "宝安区 (n=138)",
      "龙华区 (n=100)",
      "龙岗区 (n=147)",
      "坪山区 (n=57)",
      "光明区 (n=40)",
      "大鹏新区 (n=17)"
    ],
    "inverse": true,
    "axisLine": {
      "lineStyle": {
        "color": "#D9D5CD"
      }
    },
    "axisTick": {
      "show": false
    },
    "axisLabel": {
      "color": "#3A3E45",
      "fontSize": 10.5
    }
  },
  "series": [
    {
      "name": "可达率",
      "type": "heatmap",
      "data": [
        [
          0,
          0,
          0.0
        ],
        [
          1,
          0,
          0.0
        ],
        [
          2,
          0,
          0.0
        ],
        [
          3,
          0,
          0.0
        ],
        [
          4,
          0,
          0.0
        ],
        [
          5,
          0,
          0.0
        ],
        [
          6,
          0,
          0.0
        ],
        [
          7,
          0,
          0.0
        ],
        [
          8,
          0,
          92.9
        ],
        [
          9,
          0,
          92.9
        ],
        [
          10,
          0,
          94.0
        ],
        [
          11,
          0,
          94.0
        ],
        [
          12,
          0,
          16.7
        ],
        [
          13,
          0,
          20.2
        ],
        [
          14,
          0,
          94.0
        ],
        [
          15,
          0,
          94.0
        ],
        [
          16,
          0,
          94.0
        ],
        [
          17,
          0,
          77.4
        ],
        [
          18,
          0,
          48.8
        ],
        [
          19,
          0,
          46.4
        ],
        [
          20,
          0,
          38.1
        ],
        [
          21,
          0,
          0.0
        ],
        [
          22,
          0,
          0.0
        ],
        [
          23,
          0,
          0.0
        ],
        [
          0,
          1,
          0.0
        ],
        [
          1,
          1,
          0.0
        ],
        [
          2,
          1,
          0.0
        ],
        [
          3,
          1,
          0.0
        ],
        [
          4,
          1,
          0.0
        ],
        [
          5,
          1,
          0.0
        ],
        [
          6,
          1,
          0.0
        ],
        [
          7,
          1,
          0.0
        ],
        [
          8,
          1,
          74.7
        ],
        [
          9,
          1,
          90.8
        ],
        [
          10,
          1,
          90.8
        ],
        [
          11,
          1,
          90.8
        ],
        [
          12,
          1,
          56.3
        ],
        [
          13,
          1,
          56.3
        ],
        [
          14,
          1,
          90.8
        ],
        [
          15,
          1,
          90.8
        ],
        [
          16,
          1,
          90.8
        ],
        [
          17,
          1,
          81.6
        ],
        [
          18,
          1,
          59.8
        ],
        [
          19,
          1,
          54.0
        ],
        [
          20,
          1,
          50.6
        ],
        [
          21,
          1,
          29.9
        ],
        [
          22,
          1,
          0.0
        ],
        [
          23,
          1,
          0.0
        ],
        [
          0,
          2,
          0.0
        ],
        [
          1,
          2,
          0.0
        ],
        [
          2,
          2,
          0.0
        ],
        [
          3,
          2,
          0.0
        ],
        [
          4,
          2,
          0.0
        ],
        [
          5,
          2,
          0.0
        ],
        [
          6,
          2,
          0.0
        ],
        [
          7,
          2,
          0.0
        ],
        [
          8,
          2,
          87.9
        ],
        [
          9,
          2,
          87.9
        ],
        [
          10,
          2,
          87.9
        ],
        [
          11,
          2,
          87.9
        ],
        [
          12,
          2,
          8.6
        ],
        [
          13,
          2,
          8.6
        ],
        [
          14,
          2,
          87.9
        ],
        [
          15,
          2,
          87.9
        ],
        [
          16,
          2,
          87.9
        ],
        [
          17,
          2,
          87.9
        ],
        [
          18,
          2,
          53.4
        ],
        [
          19,
          2,
          53.4
        ],
        [
          20,
          2,
          53.4
        ],
        [
          21,
          2,
          0.0
        ],
        [
          22,
          2,
          0.0
        ],
        [
          23,
          2,
          0.0
        ],
        [
          0,
          3,
          0.0
        ],
        [
          1,
          3,
          0.0
        ],
        [
          2,
          3,
          0.0
        ],
        [
          3,
          3,
          0.0
        ],
        [
          4,
          3,
          0.0
        ],
        [
          5,
          3,
          0.0
        ],
        [
          6,
          3,
          0.0
        ],
        [
          7,
          3,
          0.0
        ],
        [
          8,
          3,
          85.2
        ],
        [
          9,
          3,
          86.9
        ],
        [
          10,
          3,
          86.9
        ],
        [
          11,
          3,
          86.9
        ],
        [
          12,
          3,
          67.2
        ],
        [
          13,
          3,
          67.2
        ],
        [
          14,
          3,
          86.9
        ],
        [
          15,
          3,
          86.9
        ],
        [
          16,
          3,
          86.9
        ],
        [
          17,
          3,
          62.3
        ],
        [
          18,
          3,
          56.6
        ],
        [
          19,
          3,
          56.6
        ],
        [
          20,
          3,
          54.1
        ],
        [
          21,
          3,
          0.8
        ],
        [
          22,
          3,
          0.0
        ],
        [
          23,
          3,
          0.0
        ],
        [
          0,
          4,
          0.0
        ],
        [
          1,
          4,
          0.0
        ],
        [
          2,
          4,
          0.0
        ],
        [
          3,
          4,
          0.0
        ],
        [
          4,
          4,
          0.0
        ],
        [
          5,
          4,
          0.0
        ],
        [
          6,
          4,
          0.0
        ],
        [
          7,
          4,
          0.0
        ],
        [
          8,
          4,
          79.0
        ],
        [
          9,
          4,
          84.1
        ],
        [
          10,
          4,
          86.2
        ],
        [
          11,
          4,
          86.2
        ],
        [
          12,
          4,
          64.5
        ],
        [
          13,
          4,
          64.5
        ],
        [
          14,
          4,
          86.2
        ],
        [
          15,
          4,
          86.2
        ],
        [
          16,
          4,
          86.2
        ],
        [
          17,
          4,
          84.1
        ],
        [
          18,
          4,
          79.7
        ],
        [
          19,
          4,
          79.7
        ],
        [
          20,
          4,
          79.7
        ],
        [
          21,
          4,
          9.4
        ],
        [
          22,
          4,
          0.0
        ],
        [
          23,
          4,
          0.0
        ],
        [
          0,
          5,
          6.0
        ],
        [
          1,
          5,
          6.0
        ],
        [
          2,
          5,
          6.0
        ],
        [
          3,
          5,
          6.0
        ],
        [
          4,
          5,
          6.0
        ],
        [
          5,
          5,
          6.0
        ],
        [
          6,
          5,
          6.0
        ],
        [
          7,
          5,
          6.0
        ],
        [
          8,
          5,
          81.0
        ],
        [
          9,
          5,
          85.0
        ],
        [
          10,
          5,
          85.0
        ],
        [
          11,
          5,
          85.0
        ],
        [
          12,
          5,
          73.0
        ],
        [
          13,
          5,
          73.0
        ],
        [
          14,
          5,
          85.0
        ],
        [
          15,
          5,
          88.0
        ],
        [
          16,
          5,
          88.0
        ],
        [
          17,
          5,
          82.0
        ],
        [
          18,
          5,
          82.0
        ],
        [
          19,
          5,
          80.0
        ],
        [
          20,
          5,
          80.0
        ],
        [
          21,
          5,
          65.0
        ],
        [
          22,
          5,
          6.0
        ],
        [
          23,
          5,
          6.0
        ],
        [
          0,
          6,
          2.0
        ],
        [
          1,
          6,
          2.0
        ],
        [
          2,
          6,
          2.0
        ],
        [
          3,
          6,
          2.0
        ],
        [
          4,
          6,
          2.0
        ],
        [
          5,
          6,
          2.0
        ],
        [
          6,
          6,
          2.0
        ],
        [
          7,
          6,
          2.0
        ],
        [
          8,
          6,
          81.0
        ],
        [
          9,
          6,
          84.4
        ],
        [
          10,
          6,
          84.4
        ],
        [
          11,
          6,
          84.4
        ],
        [
          12,
          6,
          62.6
        ],
        [
          13,
          6,
          62.6
        ],
        [
          14,
          6,
          83.7
        ],
        [
          15,
          6,
          83.7
        ],
        [
          16,
          6,
          83.7
        ],
        [
          17,
          6,
          78.2
        ],
        [
          18,
          6,
          69.4
        ],
        [
          19,
          6,
          68.7
        ],
        [
          20,
          6,
          68.7
        ],
        [
          21,
          6,
          2.0
        ],
        [
          22,
          6,
          2.0
        ],
        [
          23,
          6,
          2.0
        ],
        [
          0,
          7,
          0.0
        ],
        [
          1,
          7,
          0.0
        ],
        [
          2,
          7,
          0.0
        ],
        [
          3,
          7,
          0.0
        ],
        [
          4,
          7,
          0.0
        ],
        [
          5,
          7,
          0.0
        ],
        [
          6,
          7,
          0.0
        ],
        [
          7,
          7,
          0.0
        ],
        [
          8,
          7,
          82.5
        ],
        [
          9,
          7,
          82.5
        ],
        [
          10,
          7,
          82.5
        ],
        [
          11,
          7,
          82.5
        ],
        [
          12,
          7,
          24.6
        ],
        [
          13,
          7,
          24.6
        ],
        [
          14,
          7,
          82.5
        ],
        [
          15,
          7,
          82.5
        ],
        [
          16,
          7,
          82.5
        ],
        [
          17,
          7,
          77.2
        ],
        [
          18,
          7,
          64.9
        ],
        [
          19,
          7,
          33.3
        ],
        [
          20,
          7,
          21.1
        ],
        [
          21,
          7,
          7.0
        ],
        [
          22,
          7,
          0.0
        ],
        [
          23,
          7,
          0.0
        ],
        [
          0,
          8,
          0.0
        ],
        [
          1,
          8,
          0.0
        ],
        [
          2,
          8,
          0.0
        ],
        [
          3,
          8,
          0.0
        ],
        [
          4,
          8,
          0.0
        ],
        [
          5,
          8,
          0.0
        ],
        [
          6,
          8,
          0.0
        ],
        [
          7,
          8,
          0.0
        ],
        [
          8,
          8,
          60.0
        ],
        [
          9,
          8,
          65.0
        ],
        [
          10,
          8,
          67.5
        ],
        [
          11,
          8,
          67.5
        ],
        [
          12,
          8,
          30.0
        ],
        [
          13,
          8,
          30.0
        ],
        [
          14,
          8,
          67.5
        ],
        [
          15,
          8,
          67.5
        ],
        [
          16,
          8,
          67.5
        ],
        [
          17,
          8,
          35.0
        ],
        [
          18,
          8,
          27.5
        ],
        [
          19,
          8,
          27.5
        ],
        [
          20,
          8,
          27.5
        ],
        [
          21,
          8,
          22.5
        ],
        [
          22,
          8,
          0.0
        ],
        [
          23,
          8,
          0.0
        ],
        [
          0,
          9,
          0.0
        ],
        [
          1,
          9,
          0.0
        ],
        [
          2,
          9,
          0.0
        ],
        [
          3,
          9,
          0.0
        ],
        [
          4,
          9,
          0.0
        ],
        [
          5,
          9,
          0.0
        ],
        [
          6,
          9,
          0.0
        ],
        [
          7,
          9,
          0.0
        ],
        [
          8,
          9,
          23.5
        ],
        [
          9,
          9,
          23.5
        ],
        [
          10,
          9,
          23.5
        ],
        [
          11,
          9,
          23.5
        ],
        [
          12,
          9,
          5.9
        ],
        [
          13,
          9,
          5.9
        ],
        [
          14,
          9,
          23.5
        ],
        [
          15,
          9,
          23.5
        ],
        [
          16,
          9,
          23.5
        ],
        [
          17,
          9,
          17.6
        ],
        [
          18,
          9,
          17.6
        ],
        [
          19,
          9,
          17.6
        ],
        [
          20,
          9,
          17.6
        ],
        [
          21,
          9,
          0.0
        ],
        [
          22,
          9,
          0.0
        ],
        [
          23,
          9,
          0.0
        ]
      ],
      "itemStyle": {
        "borderColor": "#FFFFFF",
        "borderWidth": 1.6
      },
      "emphasis": {
        "itemStyle": {
          "borderColor": "#3A3E45",
          "borderWidth": 2
        }
      }
    }
  ],
  "graphic": [
    {
      "type": "text",
      "left": 104,
      "top": 20,
      "style": {
        "text": "每行是一个区的一整天：绿＝可达率高，暗＝门关了 / 走不到",
        "fill": "#3A3E45",
        "fontSize": 11
      }
    },
    {
      "type": "text",
      "left": 104,
      "top": 40,
      "style": {
        "text": "十条带的缺口位置几乎对齐——这是全区共享的午休（12 点）与晚间断崖（21 点）",
        "fill": "#3A3E45",
        "fontSize": 11
      }
    }
  ]
};

/* ---------- 图14 / 15 / 16（第五章 .option.json） ---------- */
window.CH_OPTS['图14'] = {
  "backgroundColor": "transparent",
  "textStyle": {
    "fontFamily": "\"Noto Sans SC\",\"Source Han Sans SC\",\"PingFang SC\",\"Microsoft YaHei\",sans-serif",
    "color": "#3A3E45"
  },
  "animationDuration": 1100,
  "animationDelay": 70,
  "tooltip": {
    "trigger": "axis",
    "backgroundColor": "#FFFDF6",
    "borderColor": "#E0D9C8",
    "textStyle": {
      "color": "#3A3E45",
      "fontSize": 12
    },
    "formatter": "{b}<br/>2022: {c} 个"
  },
  "legend": {
    "data": [
      {
        "name": "2022年",
        "itemStyle": {
          "color": "#5B8FD9"
        }
      },
      {
        "name": "2024年",
        "itemStyle": {
          "color": "#E8A33D"
        }
      }
    ],
    "top": 0,
    "textStyle": {
      "color": "#3A3E45"
    }
  },
  "grid": {
    "left": 130,
    "right": 74,
    "top": 48,
    "bottom": 40
  },
  "xAxis": {
    "type": "value",
    "min": 200,
    "axisLine": {
      "show": false
    },
    "axisTick": {
      "show": false
    },
    "splitLine": {
      "lineStyle": {
        "color": "#EEF1E0"
      }
    },
    "axisLabel": {
      "color": "#3A3E45",
      "fontSize": 10.5
    }
  },
  "yAxis": {
    "type": "category",
    "data": [
      "社区卫生服务中心",
      "社区卫生服务站",
      "社卫机构合计"
    ],
    "inverse": true,
    "axisLine": {
      "lineStyle": {
        "color": "#D9D5CD"
      }
    },
    "axisTick": {
      "show": false
    },
    "axisLabel": {
      "color": "#3A3E45",
      "fontSize": 12,
      "fontWeight": "bold"
    }
  },
  "series": [
    {
      "name": "2022年",
      "type": "scatter",
      "data": [
        [
          352,
          0
        ],
        [
          1621,
          1
        ],
        [
          2123,
          2
        ]
      ],
      "symbolSize": 18,
      "itemStyle": {
        "color": "#5B8FD9",
        "borderColor": "#FFFFFF",
        "borderWidth": 2
      },
      "z": 3,
      "label": {
        "show": true,
        "position": "left",
        "color": "#5B8FD9",
        "fontSize": 11,
        "fontWeight": "bold",
        "formatter": "{@[0]}",
        "distance": 10
      },
      "markLine": {
        "silent": true,
        "symbol": "none",
        "lineStyle": {
          "color": "#8A93A6",
          "width": 4
        },
        "data": [
          [
            {
              "coord": [
                352,
                0
              ]
            },
            {
              "coord": [
                376,
                0
              ]
            }
          ],
          [
            {
              "coord": [
                1621,
                1
              ]
            },
            {
              "coord": [
                1760,
                1
              ]
            }
          ],
          [
            {
              "coord": [
                2123,
                2
              ]
            },
            {
              "coord": [
                2136,
                2
              ]
            }
          ]
        ]
      }
    },
    {
      "name": "2024年",
      "type": "scatter",
      "data": [
        [
          376,
          0
        ],
        [
          1760,
          1
        ],
        [
          2136,
          2
        ]
      ],
      "symbolSize": 18,
      "itemStyle": {
        "color": "#E8A33D",
        "borderColor": "#FFFFFF",
        "borderWidth": 2
      },
      "z": 4,
      "label": {
        "show": true,
        "position": "right",
        "color": "#C8962B",
        "fontSize": 11,
        "fontWeight": "bold",
        "formatter": "{@[0]}",
        "distance": 10
      }
    }
  ],
  "graphic": [
    {
      "type": "text",
      "left": 130,
      "top": 16,
      "style": {
        "text": "每个圆点＝一年的机构数；连线越往右伸，说明网点扩得越多",
        "fill": "#3A3E45",
        "fontSize": 11
      }
    }
  ]
};
window.CH_OPTS['图15'] = {
  "backgroundColor": "transparent",
  "textStyle": {
    "fontFamily": "\"Noto Sans SC\",\"Source Han Sans SC\",\"PingFang SC\",\"Microsoft YaHei\",sans-serif",
    "color": "#3A3E45"
  },
  "animationDuration": 1200,
  "animationDelay": 80,
  "tooltip": {
    "trigger": "axis",
    "backgroundColor": "#FFFDF6",
    "borderColor": "#E0D9C8",
    "textStyle": {
      "color": "#3A3E45",
      "fontSize": 12
    }
  },
  "legend": {
    "data": [
      {
        "name": "长汀县",
        "itemStyle": {
          "color": "#3FA98F"
        }
      },
      {
        "name": "全国（对照）",
        "itemStyle": {
          "color": "#8A93A6"
        }
      }
    ],
    "top": 0,
    "textStyle": {
      "color": "#3A3E45"
    }
  },
  "grid": {
    "left": 56,
    "right": 80,
    "top": 50,
    "bottom": 40
  },
  "xAxis": {
    "type": "category",
    "data": [
      "2018 建设前",
      "2025 建成后"
    ],
    "boundaryGap": true,
    "axisLine": {
      "lineStyle": {
        "color": "#D9D5CD"
      }
    },
    "axisTick": {
      "show": false
    },
    "axisLabel": {
      "color": "#3A3E45",
      "fontSize": 12,
      "fontWeight": "bold"
    }
  },
  "yAxis": {
    "type": "value",
    "min": 50,
    "max": 82,
    "axisLine": {
      "show": false
    },
    "axisTick": {
      "show": false
    },
    "splitLine": {
      "lineStyle": {
        "color": "#EEF1E0"
      }
    },
    "axisLabel": {
      "color": "#3A3E45",
      "fontSize": 10.5,
      "formatter": "{value}%"
    }
  },
  "series": [
    {
      "name": "长汀县",
      "type": "line",
      "data": [
        65.03,
        78.0
      ],
      "smooth": false,
      "symbol": "circle",
      "symbolSize": 16,
      "lineStyle": {
        "width": 4,
        "color": "#3FA98F"
      },
      "itemStyle": {
        "color": "#3FA98F",
        "borderColor": "#FFFFFF",
        "borderWidth": 2
      },
      "label": {
        "show": true,
        "position": "top",
        "color": "#3FA98F",
        "fontSize": 13,
        "fontWeight": "bold",
        "formatter": "{c}%"
      },
      "endLabel": {
        "show": false
      },
      "markPoint": {
        "symbol": "roundRect",
        "symbolSize": [
          78,
          26
        ],
        "itemStyle": {
          "color": "#EAF3DC"
        },
        "label": {
          "color": "#3FA98F",
          "fontSize": 11.5,
          "fontWeight": "bold"
        },
        "data": [
          {
            "coord": [
              0.5,
              71.515
            ],
            "value": "↑ 12.97 pt"
          }
        ]
      }
    },
    {
      "name": "全国（对照）",
      "type": "line",
      "data": [
        53.1,
        53.1
      ],
      "symbol": "circle",
      "symbolSize": 12,
      "lineStyle": {
        "width": 3,
        "color": "#8A93A6",
        "type": [
          6,
          3
        ]
      },
      "itemStyle": {
        "color": "#8A93A6"
      },
      "label": {
        "show": true,
        "position": "bottom",
        "color": "#3A3E45",
        "fontSize": 11,
        "formatter": "{c}%"
      }
    }
  ],
  "graphic": [
    {
      "type": "text",
      "left": 56,
      "top": 18,
      "style": {
        "text": "绿＝长汀县（县口径）· 灰＝全国（公报口径）；仅看趋势，不可直接相减",
        "fill": "#3A3E45",
        "fontSize": 11
      }
    }
  ]
};
window.CH_OPTS['图16'] = {
  "backgroundColor": "transparent",
  "textStyle": {
    "fontFamily": "\"Noto Sans SC\",\"Source Han Sans SC\",\"PingFang SC\",\"Microsoft YaHei\",sans-serif",
    "color": "#3A3E45"
  },
  "animationDuration": 1000,
  "animationDelay": 80,
  "tooltip": {
    "trigger": "axis",
    "axisPointer": {
      "type": "shadow"
    },
    "backgroundColor": "#FFFDF6",
    "borderColor": "#E0D9C8",
    "textStyle": {
      "color": "#3A3E45",
      "fontSize": 12
    },
    "formatter": "{b}: {c} 家"
  },
  "grid": {
    "left": 150,
    "right": 70,
    "top": 48,
    "bottom": 44
  },
  "xAxis": {
    "type": "value",
    "max": 30,
    "axisLine": {
      "show": false
    },
    "axisTick": {
      "show": false
    },
    "splitLine": {
      "lineStyle": {
        "color": "#EEF1E0"
      }
    },
    "axisLabel": {
      "color": "#3A3E45",
      "fontSize": 10.5
    }
  },
  "yAxis": {
    "type": "category",
    "data": [
      "工作日延至 22:00",
      "周末延至 17:00",
      "24 小时开诊（2023）"
    ],
    "inverse": true,
    "axisLine": {
      "lineStyle": {
        "color": "#D9D5CD"
      }
    },
    "axisTick": {
      "show": false
    },
    "axisLabel": {
      "color": "#3A3E45",
      "fontSize": 11.5,
      "fontWeight": "bold"
    }
  },
  "series": [
    {
      "type": "bar",
      "barWidth": 26,
      "itemStyle": {
        "borderRadius": [
          0,
          4,
          4,
          0
        ]
      },
      "label": {
        "show": true,
        "position": "right",
        "color": "#3A3E45",
        "fontSize": 12,
        "fontWeight": "bold",
        "formatter": "{c} 家",
        "distance": 8
      },
      "data": [
        {
          "value": 26,
          "itemStyle": {
            "color": "#3FA98F"
          }
        },
        {
          "value": 26,
          "itemStyle": {
            "color": "#E8A33D"
          }
        },
        {
          "value": 6,
          "itemStyle": {
            "color": "#5B8FD9"
          }
        }
      ]
    }
  ],
  "graphic": [
    {
      "type": "text",
      "left": 150,
      "top": 14,
      "style": {
        "text": "前两条＝26 家中心（2025-04）· 第三条＝31 家机构中的 24 小时点（2023-09，口径不同）",
        "fill": "#3A3E45",
        "fontSize": 10.5
      }
    },
    {
      "type": "text",
      "left": 150,
      "bottom": 12,
      "style": {
        "text": "前两条等长说明「延时」是全区统一动作；24 小时兜底仍是少数",
        "fill": "#3A3E45",
        "fontSize": 11
      }
    }
  ]
};

/* ---------- 深圳分区地图 GeoJSON ---------- */
window.CH_MAP['sz'] = {"type": "FeatureCollection", "features": [{"type": "Feature", "properties": {"name": "罗湖区", "adcode": 440303}, "geometry": {"type": "MultiPolygon", "coordinates": [[[[114.105173, 22.531628], [114.10791, 22.532322], [114.112216, 22.531684], [114.113768, 22.53384], [114.114838, 22.532802], [114.114592, 22.52861], [114.115636, 22.52732], [114.117609, 22.526975], [114.120223, 22.528233], [114.122073, 22.531493], [114.125064, 22.53221], [114.127564, 22.535368], [114.130475, 22.537003], [114.132659, 22.536895], [114.13422, 22.537748], [114.135106, 22.538847], [114.136755, 22.539159], [114.139403, 22.53881], [114.142061, 22.540593], [114.143026, 22.540779], [114.146253, 22.540086], [114.147121, 22.539317], [114.149165, 22.539303], [114.150129, 22.538484], [114.153138, 22.539112], [114.153471, 22.541306], [114.155304, 22.543332], [114.156505, 22.543695], [114.156725, 22.544985], [114.15583, 22.544212], [114.15483, 22.544468], [114.154611, 22.54593], [114.155076, 22.548007], [114.156584, 22.548599], [114.156874, 22.551621], [114.157672, 22.552072], [114.159926, 22.552031], [114.161075, 22.552627], [114.163416, 22.55618], [114.165591, 22.55889], [114.166679, 22.559095], [114.168187, 22.556575], [114.170582, 22.55672], [114.172318, 22.558466], [114.173967, 22.558378], [114.17551, 22.556897], [114.178238, 22.556841], [114.180948, 22.557269], [114.182316, 22.556776], [114.182711, 22.552799], [114.185921, 22.551318], [114.186798, 22.552673], [114.191718, 22.55197], [114.193112, 22.552617], [114.194138, 22.551644], [114.195506, 22.551812], [114.197225, 22.553008], [114.199383, 22.552822], [114.200523, 22.553139], [114.201356, 22.554256], [114.202882, 22.553903], [114.2034, 22.556119], [114.204277, 22.556603], [114.206943, 22.559509], [114.207066, 22.562024], [114.203786, 22.567844], [114.203759, 22.569948], [114.205829, 22.571131], [114.207513, 22.572574], [114.211609, 22.573799], [114.214003, 22.57386], [114.217432, 22.575163], [114.219967, 22.578176], [114.218949, 22.580215], [114.218765, 22.581919], [114.219528, 22.584582], [114.219019, 22.588916], [114.217757, 22.59008], [114.216722, 22.592459], [114.213678, 22.596071], [114.214082, 22.598292], [114.213845, 22.599288], [114.212643, 22.599633], [114.209513, 22.598771], [114.206969, 22.601653], [114.205452, 22.601956], [114.203154, 22.601183], [114.198865, 22.60304], [114.198699, 22.604842], [114.199243, 22.606373], [114.200199, 22.607034], [114.199883, 22.609092], [114.196857, 22.613295], [114.192402, 22.61619], [114.18878, 22.61524], [114.184763, 22.615287], [114.183193, 22.61491], [114.181632, 22.61599], [114.177177, 22.615589], [114.17601, 22.614286], [114.17516, 22.612192], [114.172669, 22.610358], [114.170634, 22.610246], [114.166933, 22.609287], [114.16346, 22.606382], [114.161636, 22.60527], [114.161575, 22.604488], [114.159943, 22.601388], [114.154251, 22.60143], [114.150261, 22.599344], [114.146007, 22.595499], [114.145955, 22.592813], [114.144297, 22.591267], [114.141938, 22.591244], [114.139991, 22.590331], [114.13907, 22.588749], [114.135281, 22.588106], [114.133878, 22.589163], [114.130826, 22.586695], [114.12987, 22.588306], [114.128704, 22.588944], [114.124792, 22.58866], [114.123722, 22.587729], [114.123468, 22.58893], [114.122205, 22.589009], [114.121723, 22.590667], [114.119556, 22.589982], [114.117443, 22.591253], [114.114128, 22.590494], [114.112216, 22.589466], [114.108024, 22.589014], [114.107489, 22.588195], [114.105998, 22.588302], [114.105743, 22.589396], [114.102244, 22.592212], [114.100367, 22.592808], [114.099543, 22.594177], [114.096736, 22.597389], [114.093412, 22.600149], [114.091474, 22.599907], [114.089668, 22.598511], [114.089054, 22.599069], [114.085265, 22.600969], [114.082879, 22.601197], [114.08116, 22.600857], [114.077293, 22.598069], [114.075328, 22.598096], [114.075363, 22.59636], [114.076477, 22.594279], [114.073609, 22.592417], [114.071592, 22.592748], [114.070785, 22.591519], [114.068391, 22.589549], [114.067795, 22.588218], [114.066426, 22.587766], [114.066304, 22.585671], [114.069005, 22.581216], [114.070522, 22.579987], [114.07225, 22.579181], [114.074399, 22.576132], [114.074425, 22.575303], [114.075942, 22.572467], [114.077284, 22.571168], [114.077968, 22.569436], [114.079099, 22.568519], [114.082625, 22.570186], [114.084616, 22.570302], [114.088001, 22.569557], [114.090159, 22.567639], [114.092237, 22.564463], [114.093193, 22.564328], [114.096833, 22.56491], [114.101604, 22.566261], [114.104524, 22.567872], [114.104559, 22.555933], [114.104279, 22.555435], [114.104586, 22.546033], [114.104805, 22.532513], [114.105173, 22.531628]]]]}}, {"type": "Feature", "properties": {"name": "福田区", "adcode": 440304}, "geometry": {"type": "MultiPolygon", "coordinates": [[[[114.066304, 22.585671], [114.06212, 22.586477], [114.059393, 22.587533], [114.057709, 22.586393], [114.054639, 22.58529], [114.053745, 22.584624], [114.053534, 22.582235], [114.052561, 22.581747], [114.047518, 22.582408], [114.045317, 22.584163], [114.041098, 22.583907], [114.038204, 22.582971], [114.034301, 22.582626], [114.03032, 22.580564], [114.028066, 22.581458], [114.023514, 22.581649], [114.022154, 22.580289], [114.018866, 22.579074], [114.014875, 22.579554], [114.009464, 22.57886], [114.005272, 22.57514], [114.005017, 22.571443], [114.005421, 22.568235], [114.004061, 22.56627], [114.003342, 22.563183], [114.003939, 22.560478], [114.005386, 22.558312], [114.0055, 22.556343], [114.002895, 22.555775], [114.001202, 22.555788], [113.99758, 22.554946], [113.998422, 22.553879], [113.998168, 22.552086], [113.998852, 22.55014], [113.999878, 22.549744], [113.999562, 22.548957], [113.997729, 22.54864], [113.99623, 22.546792], [113.997203, 22.545008], [113.996703, 22.543304], [113.996721, 22.538633], [113.99787, 22.532396], [113.99544, 22.53296], [113.996151, 22.53207], [113.995484, 22.530533], [113.994353, 22.530566], [113.9933, 22.527678], [113.994388, 22.521926], [113.990547, 22.520482], [113.990748, 22.510584], [114.010551, 22.510249], [114.024049, 22.509806], [114.025163, 22.509331], [114.0291, 22.505265], [114.030898, 22.504277], [114.036967, 22.503364], [114.042107, 22.502791], [114.046009, 22.502185], [114.050587, 22.501193], [114.053789, 22.499889], [114.057077, 22.499623], [114.05998, 22.500727], [114.062322, 22.502824], [114.06298, 22.507827], [114.064602, 22.510547], [114.069119, 22.51378], [114.077003, 22.515484], [114.079205, 22.514394], [114.080301, 22.512997], [114.081573, 22.512424], [114.084291, 22.513388], [114.087642, 22.515899], [114.090299, 22.51943], [114.090343, 22.520995], [114.088177, 22.522932], [114.085949, 22.523878], [114.083485, 22.526113], [114.08402, 22.527553], [114.085686, 22.528414], [114.088256, 22.528712], [114.090352, 22.529318], [114.091246, 22.530068], [114.092904, 22.532545], [114.094114, 22.53357], [114.097245, 22.534404], [114.100148, 22.532192], [114.101946, 22.531241], [114.105173, 22.531628], [114.104805, 22.532513], [114.104586, 22.546033], [114.104279, 22.555435], [114.104559, 22.555933], [114.104524, 22.567872], [114.101604, 22.566261], [114.096833, 22.56491], [114.093193, 22.564328], [114.092237, 22.564463], [114.090159, 22.567639], [114.088001, 22.569557], [114.084616, 22.570302], [114.082625, 22.570186], [114.079099, 22.568519], [114.077968, 22.569436], [114.077284, 22.571168], [114.075942, 22.572467], [114.074425, 22.575303], [114.074399, 22.576132], [114.07225, 22.579181], [114.070522, 22.579987], [114.069005, 22.581216], [114.066304, 22.585671]]]]}}, {"type": "Feature", "properties": {"name": "南山区", "adcode": 440305}, "geometry": {"type": "MultiPolygon", "coordinates": [[[[114.023514, 22.581649], [114.023944, 22.582408], [114.025215, 22.587389], [114.026417, 22.590285], [114.02604, 22.591938], [114.0239, 22.593348], [114.023207, 22.595145], [114.023645, 22.597156], [114.023181, 22.599945], [114.0219, 22.602356], [114.020839, 22.601862], [114.016656, 22.602626], [114.015752, 22.604353], [114.014366, 22.605731], [114.012858, 22.606219], [114.009297, 22.611084], [114.008797, 22.615906], [114.006815, 22.619113], [114.005552, 22.619094], [114.004316, 22.620244], [114.003939, 22.621496], [114.002807, 22.622222], [114.001737, 22.625717], [113.999203, 22.625094], [113.996563, 22.626634], [113.994853, 22.626509], [113.993774, 22.625834], [113.99245, 22.629799], [113.992406, 22.631214], [113.991222, 22.631949], [113.989985, 22.634044], [113.98888, 22.634984], [113.98596, 22.63645], [113.983618, 22.636412], [113.982118, 22.637297], [113.978452, 22.636976], [113.97619, 22.637283], [113.974734, 22.636124], [113.971471, 22.638311], [113.970042, 22.640536], [113.967455, 22.640419], [113.96663, 22.640838], [113.966727, 22.642337], [113.968735, 22.644282], [113.967849, 22.648884], [113.967086, 22.650783], [113.965797, 22.651518], [113.964341, 22.651192], [113.961149, 22.651309], [113.959991, 22.652477], [113.957606, 22.651592], [113.954703, 22.649336], [113.952905, 22.650974], [113.950853, 22.650829], [113.949406, 22.652197], [113.946722, 22.650969], [113.944038, 22.650592], [113.940776, 22.647618], [113.940521, 22.64625], [113.937522, 22.645087], [113.937645, 22.643077], [113.936583, 22.638683], [113.933952, 22.637059], [113.932347, 22.636561], [113.931655, 22.634807], [113.930172, 22.634225], [113.929348, 22.633062], [113.928936, 22.631354], [113.929997, 22.630195], [113.930164, 22.629124], [113.929304, 22.627626], [113.929287, 22.626183], [113.93126, 22.623023], [113.930453, 22.619322], [113.92962, 22.618568], [113.927498, 22.615599], [113.928839, 22.612359], [113.929559, 22.611554], [113.930076, 22.609245], [113.929962, 22.607853], [113.928559, 22.606727], [113.927822, 22.604008], [113.925033, 22.603184], [113.923533, 22.600117], [113.925814, 22.595438], [113.926287, 22.59332], [113.927024, 22.592245], [113.928006, 22.592138], [113.928541, 22.590778], [113.926278, 22.590811], [113.924472, 22.589959], [113.924419, 22.587617], [113.924937, 22.584587], [113.928199, 22.582613], [113.929541, 22.580792], [113.929032, 22.578767], [113.926498, 22.57385], [113.92242, 22.571555], [113.916166, 22.565935], [113.915912, 22.565139], [113.916079, 22.557265], [113.915772, 22.556776], [113.910685, 22.553157], [113.901389, 22.545376], [113.895653, 22.54308], [113.860932, 22.526416], [113.864063, 22.515983], [113.863747, 22.511982], [113.861046, 22.504943], [113.860134, 22.502008], [113.859379, 22.495636], [113.862808, 22.475835], [113.866983, 22.465258], [113.87, 22.45955], [113.881726, 22.446786], [113.885234, 22.444549], [113.888593, 22.443235], [113.891768, 22.442638], [113.893627, 22.442717], [113.895495, 22.443393], [113.897547, 22.44474], [113.900819, 22.447485], [113.915737, 22.455962], [113.939907, 22.471711], [113.94688, 22.47734], [113.948976, 22.48028], [113.953185, 22.487622], [113.955062, 22.486896], [113.95522, 22.487492], [113.95351, 22.488307], [113.954764, 22.490986], [113.957036, 22.500555], [113.95914, 22.504924], [113.962166, 22.507612], [113.966034, 22.509718], [113.976541, 22.510626], [113.990748, 22.510584], [113.990547, 22.520482], [113.994388, 22.521926], [113.9933, 22.527678], [113.994353, 22.530566], [113.995484, 22.530533], [113.996151, 22.53207], [113.99544, 22.53296], [113.99787, 22.532396], [113.996721, 22.538633], [113.996703, 22.543304], [113.997203, 22.545008], [113.99623, 22.546792], [113.997729, 22.54864], [113.999562, 22.548957], [113.999878, 22.549744], [113.998852, 22.55014], [113.998168, 22.552086], [113.998422, 22.553879], [113.99758, 22.554946], [114.001202, 22.555788], [114.002895, 22.555775], [114.0055, 22.556343], [114.005386, 22.558312], [114.003939, 22.560478], [114.003342, 22.563183], [114.004061, 22.56627], [114.005421, 22.568235], [114.005017, 22.571443], [114.005272, 22.57514], [114.009464, 22.57886], [114.014875, 22.579554], [114.018866, 22.579074], [114.022154, 22.580289], [114.023514, 22.581649]]], [[[113.819931, 22.396343], [113.822729, 22.396539], [113.824377, 22.397938], [113.824781, 22.401047], [113.824184, 22.404343], [113.819124, 22.410156], [113.818396, 22.412692], [113.817063, 22.415922], [113.814879, 22.41823], [113.814283, 22.419418], [113.81124, 22.420425], [113.808687, 22.418905], [113.807012, 22.418425], [113.805092, 22.418803], [113.804486, 22.421474], [113.803688, 22.423026], [113.802294, 22.423529], [113.799715, 22.423194], [113.7989, 22.42249], [113.798303, 22.419222], [113.797312, 22.417754], [113.795918, 22.416766], [113.794997, 22.416766], [113.79312, 22.418239], [113.790024, 22.418654], [113.788218, 22.418108], [113.786858, 22.417185], [113.78628, 22.415992], [113.786692, 22.413587], [113.7882, 22.412352], [113.792235, 22.41141], [113.798207, 22.408977], [113.801364, 22.407368], [113.801847, 22.404907], [113.802425, 22.403812], [113.803995, 22.402446], [113.807302, 22.400255], [113.814186, 22.397859], [113.819931, 22.396343]]], [[[113.844479, 22.510216], [113.845882, 22.509382], [113.850521, 22.504822], [113.855091, 22.502833], [113.856801, 22.503574], [113.857011, 22.504813], [113.856862, 22.509578], [113.852661, 22.511814], [113.850372, 22.513281], [113.848697, 22.513575], [113.845663, 22.516873], [113.844409, 22.517082], [113.84254, 22.51582], [113.842514, 22.512666], [113.844479, 22.510216]]], [[[113.839629, 22.498528], [113.84725, 22.491941], [113.849136, 22.491713], [113.85189, 22.495295], [113.851986, 22.496609], [113.844452, 22.50335], [113.84276, 22.503532], [113.839471, 22.500667], [113.839629, 22.498528]]]]}}, {"type": "Feature", "properties": {"name": "宝安区", "adcode": 440306}, "geometry": {"type": "MultiPolygon", "coordinates": [[[[113.910957, 22.829993], [113.910018, 22.831847], [113.908957, 22.83267], [113.904274, 22.832879], [113.902239, 22.838367], [113.902388, 22.840212], [113.903949, 22.840137], [113.906028, 22.838018], [113.906572, 22.838567], [113.90837, 22.837888], [113.911439, 22.838762], [113.912027, 22.837898], [113.913544, 22.837173], [113.91664, 22.838195], [113.918096, 22.836457], [113.920008, 22.835732], [113.919657, 22.83458], [113.92142, 22.835221], [113.92299, 22.834779], [113.922463, 22.835778], [113.920104, 22.83622], [113.917885, 22.837972], [113.91785, 22.840109], [113.919482, 22.839784], [113.919297, 22.841016], [113.920666, 22.841201], [113.922411, 22.84234], [113.92356, 22.842391], [113.925252, 22.841689], [113.927305, 22.842707], [113.929804, 22.841583], [113.931777, 22.841778], [113.934777, 22.840732], [113.933286, 22.841912], [113.930155, 22.842029], [113.928462, 22.843125], [113.92627, 22.843525], [113.924533, 22.842828], [113.922253, 22.843413], [113.920359, 22.841638], [113.919236, 22.842568], [113.91678, 22.840686], [113.916579, 22.839375], [113.914763, 22.839161], [113.912869, 22.840235], [113.910799, 22.839343], [113.906835, 22.840035], [113.90487, 22.840133], [113.904397, 22.842052], [113.905493, 22.842609], [113.90323, 22.842438], [113.903634, 22.84365], [113.905081, 22.845063], [113.902923, 22.843822], [113.900748, 22.844524], [113.900608, 22.846122], [113.900231, 22.844138], [113.898109, 22.842749], [113.897047, 22.844264], [113.898793, 22.845407], [113.897328, 22.845109], [113.896153, 22.845974], [113.893925, 22.846192], [113.892811, 22.847424], [113.89275, 22.84892], [113.894495, 22.849951], [113.892803, 22.850332], [113.892881, 22.851587], [113.891469, 22.851991], [113.891531, 22.853599], [113.893083, 22.853775], [113.894644, 22.852047], [113.895039, 22.850407], [113.896276, 22.851513], [113.898073, 22.85411], [113.899485, 22.85549], [113.899731, 22.857098], [113.898582, 22.856038], [113.898451, 22.855035], [113.894837, 22.854352], [113.894416, 22.855564], [113.892846, 22.855402], [113.892434, 22.85706], [113.891882, 22.856619], [113.889724, 22.857074], [113.889145, 22.857897], [113.89097, 22.859346], [113.891057, 22.861749], [113.89054, 22.859746], [113.889654, 22.859774], [113.887312, 22.858524], [113.886207, 22.858649], [113.888777, 22.855759], [113.886076, 22.854282], [113.885585, 22.852744], [113.884445, 22.853037], [113.884392, 22.851461], [113.883497, 22.851884], [113.882647, 22.850537], [113.881042, 22.85141], [113.880989, 22.852711], [113.88177, 22.853422], [113.880673, 22.853892], [113.8802, 22.851954], [113.8787, 22.852414], [113.878875, 22.854208], [113.879937, 22.854918], [113.878376, 22.855207], [113.877683, 22.854449], [113.878253, 22.852749], [113.877507, 22.851917], [113.876429, 22.848111], [113.875429, 22.847312], [113.874324, 22.84457], [113.873412, 22.845477], [113.871, 22.845658], [113.87143, 22.843116], [113.873596, 22.840137], [113.872789, 22.840714], [113.872333, 22.839956], [113.87271, 22.837516], [113.870789, 22.836987], [113.868404, 22.837312], [113.866264, 22.836661], [113.864387, 22.836968], [113.862501, 22.834909], [113.861809, 22.833362], [113.860984, 22.834152], [113.857064, 22.832614], [113.856196, 22.835681], [113.854424, 22.835216], [113.851284, 22.837484], [113.850592, 22.836843], [113.846285, 22.835351], [113.845224, 22.834426], [113.842742, 22.833697], [113.841514, 22.833994], [113.841102, 22.83141], [113.838594, 22.829779], [113.83741, 22.827474], [113.836542, 22.826526], [113.836524, 22.823877], [113.834717, 22.822171], [113.836717, 22.82146], [113.838673, 22.819764], [113.838383, 22.818737], [113.838848, 22.817356], [113.838585, 22.813419], [113.838778, 22.811997], [113.840085, 22.810826], [113.84005, 22.808028], [113.837234, 22.800963], [113.834174, 22.799443], [113.832306, 22.798866], [113.830859, 22.797528], [113.827473, 22.798453], [113.827526, 22.796556], [113.828289, 22.795924], [113.824912, 22.79293], [113.820843, 22.792089], [113.816388, 22.792284], [113.814783, 22.79174], [113.813432, 22.790415], [113.812976, 22.789063], [113.814651, 22.785962], [113.813722, 22.784251], [113.810555, 22.782285], [113.806863, 22.78208], [113.80589, 22.782596], [113.804241, 22.784484], [113.802259, 22.784879], [113.800356, 22.783744], [113.800198, 22.781834], [113.801584, 22.779816], [113.801969, 22.777929], [113.801434, 22.776329], [113.799733, 22.775065], [113.796602, 22.774205], [113.795137, 22.773303], [113.792427, 22.77049], [113.791857, 22.767649], [113.793708, 22.764897], [113.794164, 22.762214], [113.79355, 22.757876], [113.792655, 22.756081], [113.790831, 22.753398], [113.789025, 22.75177], [113.78699, 22.750585], [113.780667, 22.748488], [113.775799, 22.746051], [113.769371, 22.742042], [113.762389, 22.736871], [113.751453, 22.715403], [113.752006, 22.705565], [113.753163, 22.698523], [113.758355, 22.683273], [113.757838, 22.678761], [113.765494, 22.665761], [113.767003, 22.659466], [113.769002, 22.654557], [113.773282, 22.64323], [113.782289, 22.625694], [113.803408, 22.593185], [113.832192, 22.570232], [113.836708, 22.56519], [113.838217, 22.56234], [113.838375, 22.559318], [113.835954, 22.553656], [113.835112, 22.551225], [113.834191, 22.544268], [113.834279, 22.541329], [113.834691, 22.539569], [113.836112, 22.538474], [113.839041, 22.537967], [113.842891, 22.539303], [113.851153, 22.542591], [113.852986, 22.542861], [113.854757, 22.542312], [113.856555, 22.53962], [113.859686, 22.52936], [113.860932, 22.526416], [113.895653, 22.54308], [113.901389, 22.545376], [113.910685, 22.553157], [113.915772, 22.556776], [113.916079, 22.557265], [113.915912, 22.565139], [113.916166, 22.565935], [113.92242, 22.571555], [113.926498, 22.57385], [113.929032, 22.578767], [113.929541, 22.580792], [113.928199, 22.582613], [113.924937, 22.584587], [113.924419, 22.587617], [113.924472, 22.589959], [113.926278, 22.590811], [113.928541, 22.590778], [113.928006, 22.592138], [113.927024, 22.592245], [113.926287, 22.59332], [113.925814, 22.595438], [113.923533, 22.600117], [113.925033, 22.603184], [113.927822, 22.604008], [113.928559, 22.606727], [113.929962, 22.607853], [113.930076, 22.609245], [113.929559, 22.611554], [113.928839, 22.612359], [113.927498, 22.615599], [113.92962, 22.618568], [113.930453, 22.619322], [113.93126, 22.623023], [113.929287, 22.626183], [113.929304, 22.627626], [113.930164, 22.629124], [113.929997, 22.630195], [113.928936, 22.631354], [113.929348, 22.633062], [113.930172, 22.634225], [113.931655, 22.634807], [113.932347, 22.636561], [113.933952, 22.637059], [113.936583, 22.638683], [113.937645, 22.643077], [113.937522, 22.645087], [113.940521, 22.64625], [113.940776, 22.647618], [113.944038, 22.650592], [113.946722, 22.650969], [113.949406, 22.652197], [113.950853, 22.650829], [113.952905, 22.650974], [113.954703, 22.649336], [113.957606, 22.651592], [113.959991, 22.652477], [113.961149, 22.651309], [113.964341, 22.651192], [113.965797, 22.651518], [113.967086, 22.650783], [113.96749, 22.652821], [113.969077, 22.652742], [113.97041, 22.653733], [113.970454, 22.65599], [113.972638, 22.657456], [113.972085, 22.658447], [113.973331, 22.661099], [113.972813, 22.662723], [113.973418, 22.66423], [113.971357, 22.666603], [113.96998, 22.669535], [113.968051, 22.6708], [113.967797, 22.672345], [113.967016, 22.672982], [113.968481, 22.675039], [113.968867, 22.676662], [113.970708, 22.677653], [113.969787, 22.678719], [113.972471, 22.680347], [113.974576, 22.680426], [113.974234, 22.682562], [113.975628, 22.68486], [113.975479, 22.686325], [113.973892, 22.686125], [113.974488, 22.688005], [113.975374, 22.689214], [113.974339, 22.690638], [113.975751, 22.691908], [113.974532, 22.693234], [113.975436, 22.693736], [113.97683, 22.69341], [113.978286, 22.693708], [113.978549, 22.695057], [113.97597, 22.695215], [113.975628, 22.696127], [113.977856, 22.697472], [113.978286, 22.696243], [113.980092, 22.696481], [113.979786, 22.698937], [113.978803, 22.698779], [113.978031, 22.699965], [113.975023, 22.699532], [113.974769, 22.700402], [113.976786, 22.700439], [113.975883, 22.701351], [113.976444, 22.702026], [113.975795, 22.702816], [113.973655, 22.701946], [113.973778, 22.70337], [113.975453, 22.703649], [113.9764, 22.707803], [113.978198, 22.710417], [113.977856, 22.712198], [113.97726, 22.712752], [113.974725, 22.711487], [113.973953, 22.71184], [113.972024, 22.711287], [113.970261, 22.710101], [113.968454, 22.711012], [113.967858, 22.712356], [113.965674, 22.712673], [113.963736, 22.713743], [113.962754, 22.715445], [113.96164, 22.715561], [113.961245, 22.71418], [113.959877, 22.714338], [113.959579, 22.71564], [113.958763, 22.71604], [113.957948, 22.71798], [113.956571, 22.718849], [113.955755, 22.716947], [113.954685, 22.717901], [113.953142, 22.717463], [113.952493, 22.718175], [113.951589, 22.71584], [113.950519, 22.714059], [113.946617, 22.711249], [113.94288, 22.711128], [113.940863, 22.708514], [113.938592, 22.708714], [113.940925, 22.706379], [113.940425, 22.704202], [113.938276, 22.702835], [113.937276, 22.703095], [113.935093, 22.706398], [113.931313, 22.708031], [113.929594, 22.7073], [113.929208, 22.706528], [113.92762, 22.705719], [113.927454, 22.706933], [113.925156, 22.709468], [113.921165, 22.709212], [113.919596, 22.709803], [113.916833, 22.709249], [113.916245, 22.71018], [113.913798, 22.709045], [113.913246, 22.706361], [113.911606, 22.705342], [113.90623, 22.705123], [113.905528, 22.702449], [113.906256, 22.700621], [113.903651, 22.697369], [113.901739, 22.696797], [113.901485, 22.694973], [113.90323, 22.695727], [113.903906, 22.695025], [113.904081, 22.692927], [113.905142, 22.692154], [113.905204, 22.690898], [113.904046, 22.690819], [113.901555, 22.692047], [113.899556, 22.692513], [113.898766, 22.693736], [113.896942, 22.694104], [113.898187, 22.692303], [113.8976, 22.691364], [113.893978, 22.688549], [113.891119, 22.688019], [113.889873, 22.68901], [113.883673, 22.68994], [113.882129, 22.687544], [113.879875, 22.686218], [113.879349, 22.687688], [113.87742, 22.689787], [113.876692, 22.689628], [113.874297, 22.691694], [113.875885, 22.693824], [113.879524, 22.695695], [113.879726, 22.696211], [113.878805, 22.698369], [113.8777, 22.699421], [113.877393, 22.701249], [113.87863, 22.700686], [113.880454, 22.700765], [113.880673, 22.702398], [113.877955, 22.702258], [113.876928, 22.703081], [113.876595, 22.704672], [113.87585, 22.704458], [113.874175, 22.707845], [113.875709, 22.709301], [113.876841, 22.71117], [113.875376, 22.711803], [113.875034, 22.713366], [113.878104, 22.714859], [113.879866, 22.714794], [113.881901, 22.715505], [113.882313, 22.717794], [113.881743, 22.719138], [113.879726, 22.720445], [113.878174, 22.723194], [113.87877, 22.724445], [113.878656, 22.726012], [113.877858, 22.726454], [113.877069, 22.728258], [113.878174, 22.731049], [113.879796, 22.731109], [113.88098, 22.732067], [113.882568, 22.734193], [113.881629, 22.735788], [113.882498, 22.738038], [113.884032, 22.740243], [113.883033, 22.742066], [113.88205, 22.742754], [113.880901, 22.744791], [113.881375, 22.745995], [113.87941, 22.747269], [113.879814, 22.748381], [113.879472, 22.749659], [113.877034, 22.751161], [113.878042, 22.755714], [113.8767, 22.758048], [113.873017, 22.760717], [113.874157, 22.762093], [113.86979, 22.764218], [113.869763, 22.765199], [113.868728, 22.765785], [113.868176, 22.768174], [113.865773, 22.768746], [113.865729, 22.769937], [113.863966, 22.770192], [113.863247, 22.771471], [113.863712, 22.772694], [113.860502, 22.772973], [113.860107, 22.774079], [113.860818, 22.776613], [113.862554, 22.778649], [113.861335, 22.778273], [113.859485, 22.781871], [113.858967, 22.783624], [113.858958, 22.787166], [113.857809, 22.788017], [113.859984, 22.78877], [113.862195, 22.788644], [113.864247, 22.790397], [113.865887, 22.790281], [113.877165, 22.795343], [113.879402, 22.797128], [113.881717, 22.797686], [113.881778, 22.800005], [113.882568, 22.800981], [113.883515, 22.80331], [113.883559, 22.806178], [113.884883, 22.809943], [113.88462, 22.810989], [113.886918, 22.813536], [113.887049, 22.814293], [113.888935, 22.816896], [113.88826, 22.818021], [113.88833, 22.819582], [113.889531, 22.821609], [113.890198, 22.819847], [113.890952, 22.820335], [113.890856, 22.82153], [113.892724, 22.822013], [113.891084, 22.8206], [113.892776, 22.819108], [113.894206, 22.820479], [113.894039, 22.819424], [113.894855, 22.819085], [113.895565, 22.820015], [113.895144, 22.821432], [113.896205, 22.823923], [113.89767, 22.82601], [113.89731, 22.826833], [113.898301, 22.82786], [113.901029, 22.828928], [113.903046, 22.828208], [113.905204, 22.828464], [113.907475, 22.829621], [113.910957, 22.829993]]], [[[113.823334, 22.543807], [113.8245, 22.544025], [113.824307, 22.54485], [113.823334, 22.543807]]]]}}, {"type": "Feature", "properties": {"name": "龙岗区", "adcode": 440307}, "geometry": {"type": "MultiPolygon", "coordinates": [[[[114.355782, 22.765794], [114.35658, 22.768718], [114.356221, 22.772796], [114.356501, 22.774302], [114.355212, 22.776985], [114.354107, 22.778147], [114.350441, 22.778524], [114.347836, 22.777422], [114.346293, 22.777905], [114.34439, 22.779816], [114.344179, 22.781513], [114.342609, 22.783698], [114.34275, 22.784437], [114.344258, 22.785604], [114.345293, 22.787231], [114.346494, 22.788128], [114.348205, 22.788379], [114.351125, 22.78969], [114.351844, 22.792256], [114.351958, 22.795334], [114.351713, 22.79723], [114.350722, 22.79756], [114.350011, 22.799136], [114.351195, 22.802929], [114.352827, 22.803747], [114.35337, 22.804584], [114.35316, 22.806624], [114.349792, 22.806554], [114.347871, 22.80919], [114.345328, 22.808507], [114.343144, 22.808669], [114.341592, 22.809896], [114.337321, 22.809483], [114.335304, 22.808985], [114.330515, 22.809269], [114.329314, 22.80635], [114.327507, 22.805272], [114.32406, 22.80483], [114.320657, 22.806508], [114.318553, 22.806559], [114.318246, 22.804663], [114.316456, 22.801409], [114.314466, 22.80014], [114.31308, 22.800563], [114.313001, 22.802264], [114.311151, 22.80357], [114.308344, 22.803566], [114.306116, 22.802599], [114.305353, 22.801706], [114.298513, 22.80232], [114.295478, 22.802789], [114.29432, 22.803422], [114.294855, 22.806382], [114.292777, 22.807526], [114.291628, 22.808595], [114.286901, 22.807196], [114.284814, 22.80826], [114.282753, 22.804742], [114.282867, 22.80238], [114.279604, 22.798917], [114.275964, 22.797449], [114.275973, 22.795273], [114.274509, 22.794023], [114.268466, 22.792098], [114.26815, 22.79108], [114.269308, 22.788932], [114.264809, 22.7846], [114.264116, 22.784456], [114.261432, 22.781773], [114.258336, 22.782773], [114.25446, 22.782922], [114.253337, 22.781606], [114.252223, 22.781229], [114.250811, 22.781662], [114.250426, 22.783307], [114.246575, 22.787515], [114.245505, 22.790652], [114.243594, 22.791787], [114.242436, 22.791238], [114.239936, 22.792084], [114.23492, 22.792991], [114.233806, 22.793948], [114.234166, 22.798127], [114.233245, 22.800721], [114.232561, 22.8049], [114.231771, 22.807103], [114.229263, 22.809018], [114.228939, 22.810477], [114.229202, 22.812513], [114.227825, 22.813471], [114.225816, 22.813694], [114.224255, 22.812783], [114.223659, 22.810617], [114.220554, 22.808242], [114.218055, 22.809353], [114.215643, 22.80774], [114.211854, 22.80027], [114.213012, 22.79915], [114.211337, 22.795994], [114.210162, 22.792633], [114.207241, 22.789783], [114.203198, 22.788946], [114.202444, 22.788342], [114.198155, 22.787487], [114.196655, 22.785678], [114.193279, 22.785557], [114.18999, 22.785734], [114.185789, 22.783284], [114.185333, 22.78181], [114.183263, 22.779695], [114.179343, 22.779161], [114.180027, 22.777138], [114.179492, 22.773847], [114.179624, 22.772982], [114.181579, 22.771578], [114.182097, 22.771996], [114.181106, 22.774056], [114.180834, 22.775711], [114.181693, 22.776315], [114.182658, 22.775488], [114.182948, 22.773716], [114.184237, 22.772917], [114.185754, 22.772805], [114.188008, 22.770388], [114.187605, 22.768872], [114.186157, 22.768128], [114.183228, 22.768658], [114.182228, 22.767891], [114.182053, 22.765278], [114.183535, 22.764618], [114.185026, 22.765171], [114.186947, 22.763748], [114.188104, 22.763572], [114.192402, 22.764613], [114.195594, 22.765664], [114.197094, 22.764934], [114.198032, 22.765687], [114.2004, 22.76565], [114.201067, 22.764771], [114.199742, 22.760568], [114.202514, 22.758606], [114.204373, 22.759126], [114.205645, 22.758643], [114.206574, 22.757248], [114.203821, 22.755239], [114.20311, 22.755137], [114.204128, 22.75105], [114.205075, 22.751222], [114.205505, 22.752589], [114.209741, 22.751152], [114.210495, 22.750157], [114.209346, 22.74845], [114.209206, 22.746762], [114.208337, 22.745777], [114.208741, 22.744488], [114.211854, 22.743582], [114.213284, 22.741605], [114.215564, 22.739415], [114.215196, 22.737829], [114.215678, 22.735569], [114.212126, 22.733727], [114.211424, 22.732058], [114.209679, 22.731137], [114.2086, 22.72943], [114.208653, 22.726542], [114.20825, 22.724263], [114.208662, 22.719817], [114.209267, 22.719031], [114.208065, 22.714668], [114.206636, 22.714124], [114.205864, 22.715329], [114.203303, 22.715608], [114.201654, 22.713715], [114.199988, 22.713008], [114.196717, 22.710231], [114.19655, 22.708384], [114.197147, 22.7073], [114.198927, 22.706361], [114.199488, 22.702035], [114.199286, 22.700877], [114.197234, 22.696844], [114.198708, 22.696192], [114.198953, 22.694085], [114.19719, 22.68961], [114.197111, 22.688149], [114.195103, 22.688042], [114.191919, 22.688958], [114.191051, 22.68794], [114.192621, 22.683729], [114.193489, 22.684441], [114.196848, 22.683236], [114.197155, 22.682362], [114.195357, 22.680077], [114.19099, 22.677007], [114.190849, 22.675895], [114.187499, 22.673555], [114.186552, 22.672215], [114.185807, 22.669995], [114.186526, 22.66967], [114.186254, 22.668148], [114.187508, 22.666375], [114.185833, 22.664724], [114.183193, 22.66444], [114.182088, 22.662997], [114.181176, 22.659661], [114.179124, 22.656134], [114.176168, 22.654212], [114.172529, 22.654394], [114.169985, 22.655715], [114.169319, 22.656776], [114.170546, 22.658247], [114.170125, 22.659247], [114.168617, 22.660499], [114.168266, 22.662192], [114.167056, 22.66256], [114.164504, 22.661611], [114.164249, 22.657162], [114.162522, 22.656813], [114.160847, 22.6574], [114.161075, 22.659038], [114.162697, 22.661043], [114.160829, 22.664993], [114.159908, 22.66511], [114.159022, 22.662881], [114.157961, 22.661685], [114.157154, 22.66162], [114.157014, 22.66417], [114.156155, 22.663951], [114.155023, 22.660261], [114.153567, 22.660689], [114.154699, 22.663323], [114.153936, 22.663956], [114.155453, 22.668209], [114.15547, 22.668934], [114.157724, 22.668181], [114.160496, 22.668846], [114.162618, 22.667101], [114.163092, 22.665766], [114.163899, 22.665375], [114.166205, 22.67067], [114.167389, 22.672731], [114.167135, 22.675043], [114.166337, 22.678351], [114.168231, 22.678779], [114.167433, 22.680696], [114.163618, 22.682725], [114.161627, 22.685274], [114.160101, 22.685004], [114.158829, 22.685944], [114.151778, 22.690135], [114.152866, 22.691843], [114.151936, 22.69535], [114.150603, 22.697374], [114.149884, 22.699453], [114.146709, 22.70036], [114.14506, 22.701174], [114.14463, 22.702751], [114.146016, 22.705975], [114.143841, 22.70764], [114.143148, 22.709687], [114.144525, 22.710491], [114.144666, 22.714184], [114.139421, 22.716152], [114.137307, 22.716329], [114.137299, 22.714501], [114.136176, 22.712677], [114.135334, 22.712101], [114.131756, 22.713482], [114.130642, 22.714845], [114.130002, 22.716459], [114.127537, 22.716924], [114.125687, 22.716789], [114.124555, 22.715217], [114.123556, 22.715203], [114.121977, 22.716259], [114.12124, 22.718682], [114.119697, 22.719598], [114.117601, 22.723152], [114.115443, 22.72298], [114.113365, 22.721031], [114.109418, 22.717408], [114.109278, 22.71411], [114.10691, 22.711826], [114.106498, 22.709798], [114.104603, 22.708193], [114.104042, 22.705528], [114.100806, 22.704654], [114.098841, 22.704654], [114.097271, 22.704054], [114.093439, 22.700179], [114.093965, 22.695899], [114.093895, 22.694206], [114.095438, 22.693313], [114.09628, 22.692094], [114.098525, 22.690117], [114.100218, 22.689959], [114.101911, 22.688838], [114.101121, 22.688196], [114.097192, 22.687781], [114.096657, 22.687479], [114.09514, 22.68479], [114.095289, 22.683515], [114.099613, 22.675802], [114.100113, 22.675355], [114.100034, 22.672238], [114.100604, 22.668646], [114.098394, 22.667897], [114.095052, 22.665505], [114.092614, 22.663402], [114.091799, 22.661457], [114.089211, 22.658875], [114.085905, 22.660313], [114.08523, 22.662034], [114.085353, 22.663402], [114.0833, 22.664463], [114.082555, 22.665454], [114.081301, 22.668325], [114.081397, 22.669651], [114.080406, 22.67026], [114.080371, 22.671554], [114.079319, 22.67281], [114.078722, 22.674373], [114.075977, 22.675239], [114.07403, 22.673443], [114.072574, 22.673127], [114.069312, 22.674969], [114.067952, 22.672694], [114.063638, 22.668846], [114.059752, 22.664565], [114.057612, 22.665598], [114.054288, 22.666101], [114.054183, 22.664877], [114.054823, 22.663812], [114.056507, 22.662648], [114.056016, 22.66041], [114.054517, 22.659526], [114.054964, 22.649052], [114.051131, 22.650224], [114.050228, 22.647167], [114.053394, 22.647381], [114.055174, 22.646325], [114.055937, 22.642337], [114.054604, 22.641387], [114.054183, 22.640229], [114.056174, 22.636524], [114.05585, 22.63497], [114.052298, 22.635593], [114.052149, 22.632699], [114.053122, 22.632252], [114.053026, 22.629487], [114.051464, 22.628943], [114.051, 22.626676], [114.054034, 22.624838], [114.052754, 22.624154], [114.054166, 22.622697], [114.055385, 22.622687], [114.056358, 22.621142], [114.056104, 22.617735], [114.058305, 22.617265], [114.058402, 22.611531], [114.058998, 22.610544], [114.059708, 22.607202], [114.059516, 22.605847], [114.058156, 22.602928], [114.060419, 22.601392], [114.060892, 22.59811], [114.062515, 22.595676], [114.063445, 22.596607], [114.061857, 22.598744], [114.063453, 22.599293], [114.064085, 22.598022], [114.065558, 22.596625], [114.067663, 22.597119], [114.069935, 22.595513], [114.071592, 22.592748], [114.073609, 22.592417], [114.076477, 22.594279], [114.075363, 22.59636], [114.075328, 22.598096], [114.077293, 22.598069], [114.08116, 22.600857], [114.082879, 22.601197], [114.085265, 22.600969], [114.089054, 22.599069], [114.089668, 22.598511], [114.091474, 22.599907], [114.093412, 22.600149], [114.096736, 22.597389], [114.099543, 22.594177], [114.100367, 22.592808], [114.102244, 22.592212], [114.105743, 22.589396], [114.105998, 22.588302], [114.107489, 22.588195], [114.108024, 22.589014], [114.112216, 22.589466], [114.114128, 22.590494], [114.117443, 22.591253], [114.119556, 22.589982], [114.121723, 22.590667], [114.122205, 22.589009], [114.123468, 22.58893], [114.123722, 22.587729], [114.124792, 22.58866], [114.128704, 22.588944], [114.12987, 22.588306], [114.130826, 22.586695], [114.133878, 22.589163], [114.135281, 22.588106], [114.13907, 22.588749], [114.139991, 22.590331], [114.141938, 22.591244], [114.144297, 22.591267], [114.145955, 22.592813], [114.146007, 22.595499], [114.150261, 22.599344], [114.154251, 22.60143], [114.159943, 22.601388], [114.161575, 22.604488], [114.161636, 22.60527], [114.16346, 22.606382], [114.166933, 22.609287], [114.170634, 22.610246], [114.172669, 22.610358], [114.17516, 22.612192], [114.17601, 22.614286], [114.177177, 22.615589], [114.181632, 22.61599], [114.183193, 22.61491], [114.184763, 22.615287], [114.18878, 22.61524], [114.192402, 22.61619], [114.196857, 22.613295], [114.199883, 22.609092], [114.200199, 22.607034], [114.199243, 22.606373], [114.198699, 22.604842], [114.198865, 22.60304], [114.203154, 22.601183], [114.205452, 22.601956], [114.206969, 22.601653], [114.209513, 22.598771], [114.212643, 22.599633], [114.213845, 22.599288], [114.214082, 22.598292], [114.213678, 22.596071], [114.216722, 22.592459], [114.217757, 22.59008], [114.219019, 22.588916], [114.219528, 22.584582], [114.218765, 22.581919], [114.219511, 22.581653], [114.222291, 22.583735], [114.224492, 22.584438], [114.224913, 22.585862], [114.227491, 22.589777], [114.228939, 22.59075], [114.229552, 22.593734], [114.230359, 22.594833], [114.23071, 22.598492], [114.23299, 22.600731], [114.233166, 22.601658], [114.234718, 22.602416], [114.23549, 22.603748], [114.234841, 22.607081], [114.234104, 22.607881], [114.234753, 22.609375], [114.24084, 22.615645], [114.243488, 22.616069], [114.24519, 22.618], [114.249022, 22.62023], [114.250925, 22.620356], [114.254828, 22.620104], [114.259889, 22.618871], [114.262985, 22.620439], [114.265317, 22.622557], [114.266326, 22.626271], [114.266186, 22.628305], [114.263835, 22.630181], [114.263099, 22.631228], [114.258705, 22.634183], [114.259055, 22.637585], [114.257968, 22.640806], [114.259336, 22.642495], [114.260336, 22.647181], [114.261397, 22.648652], [114.262616, 22.648949], [114.264326, 22.650536], [114.26979, 22.653831], [114.267387, 22.657535], [114.267624, 22.660527], [114.267001, 22.66203], [114.26801, 22.664654], [114.269238, 22.665259], [114.269957, 22.666594], [114.271237, 22.666929], [114.270772, 22.668204], [114.272421, 22.669837], [114.271939, 22.670619], [114.273351, 22.673489], [114.276166, 22.674048], [114.276745, 22.674815], [114.28127, 22.67563], [114.283165, 22.675392], [114.283814, 22.676797], [114.285085, 22.678086], [114.285971, 22.67824], [114.287629, 22.677467], [114.289751, 22.677104], [114.290541, 22.677612], [114.291356, 22.679626], [114.293908, 22.681608], [114.297206, 22.680678], [114.298995, 22.681222], [114.302082, 22.684381], [114.302415, 22.685837], [114.310291, 22.685795], [114.316097, 22.68666], [114.31857, 22.691191], [114.322876, 22.688349], [114.322561, 22.691787], [114.32349, 22.700407], [114.320605, 22.702328], [114.321359, 22.703575], [114.323271, 22.702472], [114.324104, 22.703472], [114.323911, 22.704561], [114.326051, 22.704268], [114.32684, 22.705105], [114.328086, 22.70444], [114.328945, 22.707412], [114.328752, 22.710561], [114.333304, 22.711175], [114.336093, 22.711235], [114.337514, 22.711817], [114.341601, 22.715333], [114.341811, 22.719352], [114.340461, 22.721877], [114.340154, 22.724231], [114.341022, 22.729263], [114.340882, 22.733904], [114.339101, 22.734816], [114.338628, 22.736006], [114.339049, 22.740991], [114.339899, 22.741447], [114.340522, 22.74394], [114.340075, 22.74646], [114.337996, 22.746395], [114.337365, 22.747413], [114.339075, 22.749822], [114.340671, 22.754198], [114.341346, 22.754918], [114.342364, 22.7545], [114.343197, 22.755235], [114.344714, 22.755193], [114.344433, 22.758541], [114.3461, 22.759782], [114.345653, 22.760489], [114.347477, 22.761126], [114.348029, 22.764399], [114.347828, 22.765287], [114.34909, 22.767905], [114.35066, 22.768923], [114.352178, 22.768258], [114.353458, 22.765994], [114.355782, 22.765794]]]]}}, {"type": "Feature", "properties": {"name": "大鹏新区", "adcode": 440399}, "geometry": {"type": "MultiPolygon", "coordinates": [[[[114.339294, 22.623358], [114.340434, 22.622092], [114.341303, 22.620277], [114.342294, 22.619588], [114.343258, 22.617828], [114.341969, 22.616637], [114.342758, 22.614281], [114.342627, 22.613383], [114.337952, 22.605861], [114.337672, 22.603468], [114.339171, 22.602374], [114.344205, 22.601867], [114.345547, 22.602863], [114.348363, 22.603385], [114.350459, 22.602589], [114.350204, 22.599842], [114.350538, 22.597012], [114.353519, 22.59001], [114.359518, 22.591574], [114.364105, 22.593385], [114.374849, 22.598641], [114.3819, 22.601499], [114.388863, 22.602933], [114.398344, 22.602859], [114.401194, 22.602398], [114.404632, 22.601476], [114.410508, 22.599544], [114.416121, 22.596858], [114.422567, 22.592743], [114.42718, 22.588795], [114.430697, 22.583381], [114.432039, 22.576839], [114.43346, 22.57088], [114.434714, 22.566601], [114.437143, 22.562615], [114.439739, 22.560007], [114.44451, 22.556897], [114.449194, 22.55353], [114.458052, 22.545036], [114.464489, 22.537808], [114.467594, 22.533356], [114.470269, 22.526845], [114.471935, 22.522229], [114.472101, 22.518452], [114.471523, 22.513505], [114.469926, 22.50764], [114.468093, 22.4951], [114.468172, 22.49141], [114.469672, 22.485368], [114.474443, 22.464508], [114.476697, 22.459135], [114.480293, 22.452919], [114.48523, 22.446697], [114.489817, 22.443664], [114.494167, 22.441976], [114.500771, 22.43994], [114.506954, 22.438579], [114.517654, 22.439432], [114.525433, 22.440583], [114.531327, 22.442727], [114.535343, 22.445145], [114.539273, 22.449247], [114.543079, 22.456008], [114.544912, 22.460072], [114.54642, 22.462462], [114.549227, 22.465747], [114.551314, 22.466577], [114.555076, 22.467578], [114.559093, 22.467909], [114.562864, 22.467942], [114.566425, 22.46844], [114.58543, 22.473407], [114.597173, 22.477009], [114.611434, 22.482041], [114.616547, 22.485736], [114.619318, 22.488927], [114.625782, 22.49837], [114.627799, 22.502982], [114.628466, 22.508772], [114.628387, 22.513635], [114.627045, 22.519928], [114.624607, 22.524958], [114.620914, 22.530827], [114.619573, 22.534264], [114.618064, 22.538963], [114.616301, 22.542819], [114.614539, 22.545166], [114.609417, 22.54743], [114.605146, 22.547513], [114.599357, 22.547975], [114.595165, 22.548477], [114.589631, 22.549739], [114.583518, 22.551672], [114.578572, 22.553609], [114.574888, 22.555709], [114.572538, 22.557809], [114.5681, 22.560752], [114.565092, 22.564282], [114.562408, 22.568309], [114.559733, 22.57318], [114.558892, 22.576374], [114.559058, 22.58325], [114.561409, 22.588115], [114.565259, 22.593809], [114.572292, 22.602691], [114.578072, 22.606839], [114.583352, 22.610358], [114.586702, 22.612871], [114.59299, 22.621175], [114.595761, 22.626374], [114.600541, 22.634802], [114.603137, 22.638749], [114.604646, 22.643025], [114.605233, 22.647139], [114.604646, 22.651583], [114.602883, 22.655278], [114.599112, 22.65813], [114.593578, 22.660145], [114.580256, 22.661494], [114.576818, 22.660829], [114.565846, 22.657739], [114.553208, 22.656213], [114.545841, 22.656227], [114.529792, 22.65719], [114.515242, 22.655501], [114.513988, 22.655422], [114.512225, 22.656432], [114.512269, 22.658572], [114.514488, 22.66075], [114.510848, 22.665668], [114.509208, 22.665901], [114.50584, 22.668474], [114.503955, 22.668916], [114.498403, 22.669144], [114.495281, 22.668837], [114.49429, 22.669688], [114.492054, 22.669814], [114.489177, 22.669074], [114.487484, 22.669153], [114.48395, 22.668227], [114.482073, 22.668255], [114.481065, 22.664938], [114.48017, 22.662979], [114.478109, 22.661802], [114.472365, 22.664603], [114.471514, 22.666236], [114.469137, 22.667134], [114.466778, 22.667641], [114.460183, 22.66779], [114.458201, 22.669111], [114.456333, 22.669725], [114.453412, 22.669963], [114.451956, 22.669218], [114.450439, 22.667571], [114.450448, 22.666194], [114.449729, 22.66531], [114.447492, 22.665217], [114.441213, 22.6635], [114.436784, 22.662546], [114.435661, 22.661746], [114.433872, 22.661732], [114.431943, 22.660931], [114.430732, 22.66242], [114.428934, 22.660983], [114.426821, 22.658279], [114.424751, 22.656883], [114.422988, 22.656827], [114.420945, 22.655739], [114.42112, 22.654775], [114.419849, 22.654599], [114.418893, 22.653054], [114.418182, 22.653607], [114.413858, 22.654352], [114.412131, 22.653486], [114.41221, 22.652053], [114.410736, 22.650527], [114.409228, 22.652388], [114.40757, 22.652174], [114.410298, 22.649717], [114.408851, 22.648628], [114.407474, 22.648489], [114.406702, 22.649182], [114.404615, 22.648754], [114.404176, 22.647865], [114.402659, 22.646785], [114.400607, 22.646753], [114.3968, 22.64518], [114.395783, 22.6439], [114.394318, 22.643081], [114.389723, 22.64209], [114.389293, 22.640075], [114.389968, 22.637022], [114.388706, 22.636445], [114.386715, 22.637688], [114.38539, 22.63719], [114.382584, 22.638218], [114.381014, 22.638092], [114.380891, 22.639209], [114.378278, 22.641308], [114.376918, 22.643975], [114.375699, 22.644487], [114.374892, 22.643537], [114.372665, 22.642151], [114.371314, 22.640331], [114.372104, 22.639023], [114.374866, 22.638618], [114.375077, 22.638032], [114.373375, 22.635342], [114.37498, 22.634877], [114.375357, 22.632596], [114.3742, 22.632182], [114.372033, 22.632843], [114.37099, 22.631866], [114.367525, 22.632736], [114.36785, 22.631763], [114.367218, 22.629455], [114.366385, 22.62898], [114.366894, 22.623474], [114.365193, 22.622175], [114.36293, 22.623307], [114.360948, 22.622664], [114.359773, 22.623735], [114.35758, 22.624219], [114.354388, 22.627239], [114.354168, 22.626257], [114.352064, 22.62696], [114.351809, 22.629022], [114.350853, 22.631447], [114.347661, 22.630795], [114.3461, 22.631698], [114.344328, 22.631279], [114.344968, 22.629152], [114.343758, 22.628389], [114.343311, 22.626592], [114.342408, 22.626606], [114.339899, 22.625447], [114.339294, 22.623358]]]]}}, {"type": "Feature", "properties": {"name": "盐田区", "adcode": 440308}, "geometry": {"type": "MultiPolygon", "coordinates": [[[[114.202882, 22.553903], [114.206162, 22.554592], [114.206811, 22.553581], [114.210837, 22.553828], [114.212617, 22.553623], [114.214503, 22.553977], [114.215915, 22.55366], [114.217502, 22.551951], [114.220712, 22.551933], [114.221931, 22.552883], [114.223282, 22.552762], [114.225764, 22.55028], [114.226307, 22.548962], [114.228991, 22.547988], [114.230763, 22.545939], [114.230964, 22.543746], [114.230508, 22.543043], [114.231271, 22.540831], [114.232561, 22.540044], [114.235481, 22.541217], [114.237998, 22.542936], [114.25032, 22.553283], [114.258827, 22.55882], [114.261055, 22.559593], [114.275377, 22.562275], [114.280981, 22.562857], [114.286813, 22.562978], [114.289988, 22.562806], [114.292426, 22.562983], [114.294557, 22.563737], [114.298548, 22.566633], [114.300688, 22.567499], [114.304854, 22.568719], [114.306581, 22.570512], [114.308318, 22.57317], [114.309826, 22.576122], [114.311852, 22.578609], [114.316886, 22.582198], [114.32214, 22.587375], [114.325332, 22.588637], [114.330629, 22.588898], [114.337093, 22.588325], [114.343399, 22.588339], [114.347003, 22.588679], [114.353519, 22.59001], [114.350538, 22.597012], [114.350204, 22.599842], [114.350459, 22.602589], [114.348363, 22.603385], [114.345547, 22.602863], [114.344205, 22.601867], [114.339171, 22.602374], [114.337672, 22.603468], [114.337952, 22.605861], [114.342627, 22.613383], [114.342758, 22.614281], [114.341969, 22.616637], [114.343258, 22.617828], [114.342294, 22.619588], [114.341303, 22.620277], [114.340434, 22.622092], [114.339294, 22.623358], [114.335216, 22.62589], [114.331848, 22.625987], [114.329463, 22.623409], [114.328428, 22.622869], [114.323806, 22.623046], [114.322762, 22.623572], [114.322069, 22.624856], [114.320877, 22.625689], [114.31893, 22.625838], [114.318421, 22.62467], [114.316921, 22.624382], [114.313571, 22.624335], [114.31058, 22.62616], [114.310177, 22.628105], [114.306853, 22.62986], [114.304827, 22.630511], [114.297302, 22.633918], [114.29532, 22.639698], [114.293645, 22.640135], [114.285892, 22.640512], [114.283358, 22.641308], [114.28113, 22.641527], [114.280104, 22.64297], [114.280174, 22.643751], [114.276806, 22.645818], [114.27571, 22.646772], [114.274482, 22.649801], [114.274272, 22.651136], [114.26979, 22.653831], [114.264326, 22.650536], [114.262616, 22.648949], [114.261397, 22.648652], [114.260336, 22.647181], [114.259336, 22.642495], [114.257968, 22.640806], [114.259055, 22.637585], [114.258705, 22.634183], [114.263099, 22.631228], [114.263835, 22.630181], [114.266186, 22.628305], [114.266326, 22.626271], [114.265317, 22.622557], [114.262985, 22.620439], [114.259889, 22.618871], [114.254828, 22.620104], [114.250925, 22.620356], [114.249022, 22.62023], [114.24519, 22.618], [114.243488, 22.616069], [114.24084, 22.615645], [114.234753, 22.609375], [114.234104, 22.607881], [114.234841, 22.607081], [114.23549, 22.603748], [114.234718, 22.602416], [114.233166, 22.601658], [114.23299, 22.600731], [114.23071, 22.598492], [114.230359, 22.594833], [114.229552, 22.593734], [114.228939, 22.59075], [114.227491, 22.589777], [114.224913, 22.585862], [114.224492, 22.584438], [114.222291, 22.583735], [114.219511, 22.581653], [114.218765, 22.581919], [114.218949, 22.580215], [114.219967, 22.578176], [114.217432, 22.575163], [114.214003, 22.57386], [114.211609, 22.573799], [114.207513, 22.572574], [114.205829, 22.571131], [114.203759, 22.569948], [114.203786, 22.567844], [114.207066, 22.562024], [114.206943, 22.559509], [114.204277, 22.556603], [114.2034, 22.556119], [114.202882, 22.553903]]]]}}, {"type": "Feature", "properties": {"name": "龙华区", "adcode": 440309}, "geometry": {"type": "MultiPolygon", "coordinates": [[[[114.113365, 22.721031], [114.11176, 22.721435], [114.110532, 22.722431], [114.107182, 22.723003], [114.105226, 22.730965], [114.1042, 22.731653], [114.10284, 22.731379], [114.099402, 22.735648], [114.100823, 22.736541], [114.101034, 22.737811], [114.100279, 22.741275], [114.098096, 22.743135], [114.098745, 22.745293], [114.098464, 22.74719], [114.096175, 22.746428], [114.09215, 22.746051], [114.091693, 22.746967], [114.092825, 22.748018], [114.089948, 22.749543], [114.08651, 22.748873], [114.084397, 22.750566], [114.081055, 22.747599], [114.081239, 22.745995], [114.079494, 22.745325], [114.075767, 22.742284], [114.074811, 22.740889], [114.072487, 22.742294], [114.07239, 22.746395], [114.070794, 22.749125], [114.069005, 22.749659], [114.06619, 22.747981], [114.063427, 22.749576], [114.063611, 22.751343], [114.06462, 22.752384], [114.064576, 22.755904], [114.063436, 22.755993], [114.059919, 22.755077], [114.058937, 22.753872], [114.057139, 22.754956], [114.05649, 22.756676], [114.053885, 22.756318], [114.05349, 22.755686], [114.049658, 22.756369], [114.048562, 22.757039], [114.048676, 22.758173], [114.049746, 22.75974], [114.051877, 22.760903], [114.05221, 22.763283], [114.050728, 22.765087], [114.049175, 22.766036], [114.048711, 22.768458], [114.049824, 22.769495], [114.049763, 22.771178], [114.048623, 22.77182], [114.046667, 22.771322], [114.045448, 22.769788], [114.044562, 22.767584], [114.041958, 22.766677], [114.039844, 22.764283], [114.037809, 22.764269], [114.036152, 22.764976], [114.035213, 22.766761], [114.032135, 22.766291], [114.031004, 22.764246], [114.029162, 22.764897], [114.028144, 22.766073], [114.026987, 22.766533], [114.026119, 22.765441], [114.025847, 22.76359], [114.02247, 22.761814], [114.018918, 22.761405], [114.017883, 22.760242], [114.014445, 22.760521], [114.012928, 22.761726], [114.011007, 22.762163], [114.008754, 22.761363], [114.007692, 22.7622], [114.00657, 22.764125], [114.005026, 22.764167], [114.002693, 22.763618], [114.002483, 22.762972], [114.000115, 22.76206], [113.99851, 22.760921], [113.996563, 22.758564], [113.993625, 22.759066], [113.992792, 22.757713], [113.99323, 22.755825], [113.992327, 22.753979], [113.993581, 22.753468], [113.994721, 22.753742], [113.996624, 22.753342], [113.997677, 22.754133], [113.999624, 22.753737], [114.000878, 22.751756], [114.004202, 22.750324], [114.00471, 22.751975], [114.006166, 22.750803], [114.003746, 22.748683], [114.006175, 22.746516], [114.00714, 22.745284], [114.008868, 22.744019], [114.009201, 22.73994], [114.008508, 22.738829], [114.008341, 22.736225], [114.008754, 22.735811], [114.006175, 22.735969], [114.005228, 22.737122], [114.003465, 22.736532], [114.002307, 22.734718], [113.999668, 22.733225], [113.996905, 22.730319], [113.99566, 22.729867], [113.992923, 22.726951], [113.991169, 22.72564], [113.990678, 22.724575], [113.988047, 22.723291], [113.98724, 22.721082], [113.985855, 22.718863], [113.984109, 22.717222], [113.982688, 22.71645], [113.981671, 22.716891], [113.979391, 22.714091], [113.97726, 22.712752], [113.977856, 22.712198], [113.978198, 22.710417], [113.9764, 22.707803], [113.975453, 22.703649], [113.973778, 22.70337], [113.973655, 22.701946], [113.975795, 22.702816], [113.976444, 22.702026], [113.975883, 22.701351], [113.976786, 22.700439], [113.974769, 22.700402], [113.975023, 22.699532], [113.978031, 22.699965], [113.978803, 22.698779], [113.979786, 22.698937], [113.980092, 22.696481], [113.978286, 22.696243], [113.977856, 22.697472], [113.975628, 22.696127], [113.97597, 22.695215], [113.978549, 22.695057], [113.978286, 22.693708], [113.97683, 22.69341], [113.975436, 22.693736], [113.974532, 22.693234], [113.975751, 22.691908], [113.974339, 22.690638], [113.975374, 22.689214], [113.974488, 22.688005], [113.973892, 22.686125], [113.975479, 22.686325], [113.975628, 22.68486], [113.974234, 22.682562], [113.974576, 22.680426], [113.972471, 22.680347], [113.969787, 22.678719], [113.970708, 22.677653], [113.968867, 22.676662], [113.968481, 22.675039], [113.967016, 22.672982], [113.967797, 22.672345], [113.968051, 22.6708], [113.96998, 22.669535], [113.971357, 22.666603], [113.973418, 22.66423], [113.972813, 22.662723], [113.973331, 22.661099], [113.972085, 22.658447], [113.972638, 22.657456], [113.970454, 22.65599], [113.97041, 22.653733], [113.969077, 22.652742], [113.96749, 22.652821], [113.967086, 22.650783], [113.967849, 22.648884], [113.968735, 22.644282], [113.966727, 22.642337], [113.96663, 22.640838], [113.967455, 22.640419], [113.970042, 22.640536], [113.971471, 22.638311], [113.974734, 22.636124], [113.97619, 22.637283], [113.978452, 22.636976], [113.982118, 22.637297], [113.983618, 22.636412], [113.98596, 22.63645], [113.98888, 22.634984], [113.989985, 22.634044], [113.991222, 22.631949], [113.992406, 22.631214], [113.99245, 22.629799], [113.993774, 22.625834], [113.994853, 22.626509], [113.996563, 22.626634], [113.999203, 22.625094], [114.001737, 22.625717], [114.002807, 22.622222], [114.003939, 22.621496], [114.004316, 22.620244], [114.005552, 22.619094], [114.006815, 22.619113], [114.008797, 22.615906], [114.009297, 22.611084], [114.012858, 22.606219], [114.014366, 22.605731], [114.015752, 22.604353], [114.016656, 22.602626], [114.020839, 22.601862], [114.0219, 22.602356], [114.023181, 22.599945], [114.023645, 22.597156], [114.023207, 22.595145], [114.0239, 22.593348], [114.02604, 22.591938], [114.026417, 22.590285], [114.025215, 22.587389], [114.023944, 22.582408], [114.023514, 22.581649], [114.028066, 22.581458], [114.03032, 22.580564], [114.034301, 22.582626], [114.038204, 22.582971], [114.041098, 22.583907], [114.045317, 22.584163], [114.047518, 22.582408], [114.052561, 22.581747], [114.053534, 22.582235], [114.053745, 22.584624], [114.054639, 22.58529], [114.057709, 22.586393], [114.059393, 22.587533], [114.06212, 22.586477], [114.066304, 22.585671], [114.066426, 22.587766], [114.067795, 22.588218], [114.068391, 22.589549], [114.070785, 22.591519], [114.071592, 22.592748], [114.069935, 22.595513], [114.067663, 22.597119], [114.065558, 22.596625], [114.064085, 22.598022], [114.063453, 22.599293], [114.061857, 22.598744], [114.063445, 22.596607], [114.062515, 22.595676], [114.060892, 22.59811], [114.060419, 22.601392], [114.058156, 22.602928], [114.059516, 22.605847], [114.059708, 22.607202], [114.058998, 22.610544], [114.058402, 22.611531], [114.058305, 22.617265], [114.056104, 22.617735], [114.056358, 22.621142], [114.055385, 22.622687], [114.054166, 22.622697], [114.052754, 22.624154], [114.054034, 22.624838], [114.051, 22.626676], [114.051464, 22.628943], [114.053026, 22.629487], [114.053122, 22.632252], [114.052149, 22.632699], [114.052298, 22.635593], [114.05585, 22.63497], [114.056174, 22.636524], [114.054183, 22.640229], [114.054604, 22.641387], [114.055937, 22.642337], [114.055174, 22.646325], [114.053394, 22.647381], [114.050228, 22.647167], [114.051131, 22.650224], [114.054964, 22.649052], [114.054517, 22.659526], [114.056016, 22.66041], [114.056507, 22.662648], [114.054823, 22.663812], [114.054183, 22.664877], [114.054288, 22.666101], [114.057612, 22.665598], [114.059752, 22.664565], [114.063638, 22.668846], [114.067952, 22.672694], [114.069312, 22.674969], [114.072574, 22.673127], [114.07403, 22.673443], [114.075977, 22.675239], [114.078722, 22.674373], [114.079319, 22.67281], [114.080371, 22.671554], [114.080406, 22.67026], [114.081397, 22.669651], [114.081301, 22.668325], [114.082555, 22.665454], [114.0833, 22.664463], [114.085353, 22.663402], [114.08523, 22.662034], [114.085905, 22.660313], [114.089211, 22.658875], [114.091799, 22.661457], [114.092614, 22.663402], [114.095052, 22.665505], [114.098394, 22.667897], [114.100604, 22.668646], [114.100034, 22.672238], [114.100113, 22.675355], [114.099613, 22.675802], [114.095289, 22.683515], [114.09514, 22.68479], [114.096657, 22.687479], [114.097192, 22.687781], [114.101121, 22.688196], [114.101911, 22.688838], [114.100218, 22.689959], [114.098525, 22.690117], [114.09628, 22.692094], [114.095438, 22.693313], [114.093895, 22.694206], [114.093965, 22.695899], [114.093439, 22.700179], [114.097271, 22.704054], [114.098841, 22.704654], [114.100806, 22.704654], [114.104042, 22.705528], [114.104603, 22.708193], [114.106498, 22.709798], [114.10691, 22.711826], [114.109278, 22.71411], [114.109418, 22.717408], [114.113365, 22.721031]]]]}}, {"type": "Feature", "properties": {"name": "坪山区", "adcode": 440310}, "geometry": {"type": "MultiPolygon", "coordinates": [[[[114.355782, 22.765794], [114.353458, 22.765994], [114.352178, 22.768258], [114.35066, 22.768923], [114.34909, 22.767905], [114.347828, 22.765287], [114.348029, 22.764399], [114.347477, 22.761126], [114.345653, 22.760489], [114.3461, 22.759782], [114.344433, 22.758541], [114.344714, 22.755193], [114.343197, 22.755235], [114.342364, 22.7545], [114.341346, 22.754918], [114.340671, 22.754198], [114.339075, 22.749822], [114.337365, 22.747413], [114.337996, 22.746395], [114.340075, 22.74646], [114.340522, 22.74394], [114.339899, 22.741447], [114.339049, 22.740991], [114.338628, 22.736006], [114.339101, 22.734816], [114.340882, 22.733904], [114.341022, 22.729263], [114.340154, 22.724231], [114.340461, 22.721877], [114.341811, 22.719352], [114.341601, 22.715333], [114.337514, 22.711817], [114.336093, 22.711235], [114.333304, 22.711175], [114.328752, 22.710561], [114.328945, 22.707412], [114.328086, 22.70444], [114.32684, 22.705105], [114.326051, 22.704268], [114.323911, 22.704561], [114.324104, 22.703472], [114.323271, 22.702472], [114.321359, 22.703575], [114.320605, 22.702328], [114.32349, 22.700407], [114.322561, 22.691787], [114.322876, 22.688349], [114.31857, 22.691191], [114.316097, 22.68666], [114.310291, 22.685795], [114.302415, 22.685837], [114.302082, 22.684381], [114.298995, 22.681222], [114.297206, 22.680678], [114.293908, 22.681608], [114.291356, 22.679626], [114.290541, 22.677612], [114.289751, 22.677104], [114.287629, 22.677467], [114.285971, 22.67824], [114.285085, 22.678086], [114.283814, 22.676797], [114.283165, 22.675392], [114.28127, 22.67563], [114.276745, 22.674815], [114.276166, 22.674048], [114.273351, 22.673489], [114.271939, 22.670619], [114.272421, 22.669837], [114.270772, 22.668204], [114.271237, 22.666929], [114.269957, 22.666594], [114.269238, 22.665259], [114.26801, 22.664654], [114.267001, 22.66203], [114.267624, 22.660527], [114.267387, 22.657535], [114.26979, 22.653831], [114.274272, 22.651136], [114.274482, 22.649801], [114.27571, 22.646772], [114.276806, 22.645818], [114.280174, 22.643751], [114.280104, 22.64297], [114.28113, 22.641527], [114.283358, 22.641308], [114.285892, 22.640512], [114.293645, 22.640135], [114.29532, 22.639698], [114.297302, 22.633918], [114.304827, 22.630511], [114.306853, 22.62986], [114.310177, 22.628105], [114.31058, 22.62616], [114.313571, 22.624335], [114.316921, 22.624382], [114.318421, 22.62467], [114.31893, 22.625838], [114.320877, 22.625689], [114.322069, 22.624856], [114.322762, 22.623572], [114.323806, 22.623046], [114.328428, 22.622869], [114.329463, 22.623409], [114.331848, 22.625987], [114.335216, 22.62589], [114.339294, 22.623358], [114.339899, 22.625447], [114.342408, 22.626606], [114.343311, 22.626592], [114.343758, 22.628389], [114.344968, 22.629152], [114.344328, 22.631279], [114.3461, 22.631698], [114.347661, 22.630795], [114.350853, 22.631447], [114.351809, 22.629022], [114.352064, 22.62696], [114.354168, 22.626257], [114.354388, 22.627239], [114.35758, 22.624219], [114.359773, 22.623735], [114.360948, 22.622664], [114.36293, 22.623307], [114.365193, 22.622175], [114.366894, 22.623474], [114.366385, 22.62898], [114.367218, 22.629455], [114.36785, 22.631763], [114.367525, 22.632736], [114.37099, 22.631866], [114.372033, 22.632843], [114.3742, 22.632182], [114.375357, 22.632596], [114.37498, 22.634877], [114.373375, 22.635342], [114.375077, 22.638032], [114.374866, 22.638618], [114.372104, 22.639023], [114.371314, 22.640331], [114.372665, 22.642151], [114.374892, 22.643537], [114.375699, 22.644487], [114.376918, 22.643975], [114.378278, 22.641308], [114.380891, 22.639209], [114.381014, 22.638092], [114.382584, 22.638218], [114.38539, 22.63719], [114.386715, 22.637688], [114.388706, 22.636445], [114.389968, 22.637022], [114.389293, 22.640075], [114.389723, 22.64209], [114.394318, 22.643081], [114.395783, 22.6439], [114.3968, 22.64518], [114.400607, 22.646753], [114.402659, 22.646785], [114.404176, 22.647865], [114.404615, 22.648754], [114.406702, 22.649182], [114.407474, 22.648489], [114.408851, 22.648628], [114.410298, 22.649717], [114.40757, 22.652174], [114.409228, 22.652388], [114.410736, 22.650527], [114.41221, 22.652053], [114.412131, 22.653486], [114.413858, 22.654352], [114.418182, 22.653607], [114.418893, 22.653054], [114.419849, 22.654599], [114.42112, 22.654775], [114.420945, 22.655739], [114.422988, 22.656827], [114.424751, 22.656883], [114.426821, 22.658279], [114.428934, 22.660983], [114.430732, 22.66242], [114.43175, 22.663542], [114.432311, 22.665552], [114.431706, 22.667794], [114.430864, 22.667711], [114.429601, 22.668762], [114.428549, 22.672424], [114.428663, 22.673945], [114.427926, 22.675634], [114.428171, 22.676751], [114.430075, 22.677351], [114.43139, 22.677258], [114.434109, 22.678156], [114.436608, 22.68011], [114.43681, 22.681222], [114.441309, 22.68219], [114.444844, 22.687688], [114.445344, 22.688986], [114.444809, 22.692443], [114.442458, 22.695848], [114.441993, 22.697569], [114.440134, 22.696816], [114.438213, 22.697095], [114.436284, 22.697965], [114.433819, 22.699811], [114.430469, 22.700621], [114.426374, 22.699932], [114.423971, 22.703249], [114.423857, 22.707124], [114.425128, 22.7089], [114.422971, 22.710128], [114.421708, 22.711668], [114.420576, 22.714017], [114.419103, 22.712496], [114.417068, 22.711649], [114.416393, 22.712575], [114.413832, 22.712417], [114.411982, 22.711477], [114.407746, 22.711226], [114.409228, 22.713575], [114.407711, 22.716124], [114.407395, 22.717868], [114.404895, 22.721473], [114.403553, 22.722608], [114.403413, 22.723947], [114.405413, 22.725807], [114.406991, 22.725705], [114.406535, 22.727682], [114.407509, 22.731095], [114.411447, 22.733662], [114.412631, 22.735471], [114.41392, 22.736248], [114.413271, 22.738359], [114.413911, 22.740164], [114.41513, 22.742154], [114.415919, 22.744335], [114.415718, 22.745883], [114.414876, 22.747339], [114.414367, 22.749576], [114.414201, 22.752384], [114.418366, 22.752803], [114.420541, 22.753886], [114.420831, 22.755797], [114.420498, 22.756857], [114.417507, 22.757308], [114.41791, 22.758038], [114.419875, 22.758215], [114.421225, 22.758815], [114.420787, 22.759856], [114.422813, 22.76028], [114.422594, 22.761465], [114.421252, 22.762284], [114.419752, 22.761953], [114.419147, 22.760768], [114.417691, 22.765138], [114.418209, 22.766417], [114.415016, 22.769276], [114.414657, 22.77248], [114.413946, 22.773661], [114.412368, 22.774739], [114.411622, 22.776715], [114.410684, 22.777877], [114.408816, 22.77797], [114.406816, 22.778989], [114.405843, 22.780718], [114.404685, 22.781322], [114.401177, 22.779444], [114.399353, 22.778854], [114.396327, 22.77732], [114.395467, 22.771717], [114.395125, 22.771503], [114.395432, 22.768639], [114.396125, 22.765678], [114.394836, 22.759787], [114.389819, 22.757499], [114.388109, 22.757215], [114.38632, 22.759596], [114.383435, 22.759629], [114.38054, 22.760205], [114.379637, 22.760996], [114.376629, 22.762618], [114.372182, 22.763585], [114.369227, 22.764655], [114.368131, 22.765882], [114.365631, 22.766059], [114.361676, 22.764195], [114.358685, 22.763771], [114.355966, 22.764906], [114.355782, 22.765794]]]]}}, {"type": "Feature", "properties": {"name": "光明区", "adcode": 440311}, "geometry": {"type": "MultiPolygon", "coordinates": [[[[113.910957, 22.829993], [113.907475, 22.829621], [113.905204, 22.828464], [113.903046, 22.828208], [113.901029, 22.828928], [113.898301, 22.82786], [113.89731, 22.826833], [113.89767, 22.82601], [113.896205, 22.823923], [113.895144, 22.821432], [113.895565, 22.820015], [113.894855, 22.819085], [113.894039, 22.819424], [113.894206, 22.820479], [113.892776, 22.819108], [113.891084, 22.8206], [113.892724, 22.822013], [113.890856, 22.82153], [113.890952, 22.820335], [113.890198, 22.819847], [113.889531, 22.821609], [113.88833, 22.819582], [113.88826, 22.818021], [113.888935, 22.816896], [113.887049, 22.814293], [113.886918, 22.813536], [113.88462, 22.810989], [113.884883, 22.809943], [113.883559, 22.806178], [113.883515, 22.80331], [113.882568, 22.800981], [113.881778, 22.800005], [113.881717, 22.797686], [113.879402, 22.797128], [113.877165, 22.795343], [113.865887, 22.790281], [113.864247, 22.790397], [113.862195, 22.788644], [113.859984, 22.78877], [113.857809, 22.788017], [113.858958, 22.787166], [113.858967, 22.783624], [113.859485, 22.781871], [113.861335, 22.778273], [113.862554, 22.778649], [113.860818, 22.776613], [113.860107, 22.774079], [113.860502, 22.772973], [113.863712, 22.772694], [113.863247, 22.771471], [113.863966, 22.770192], [113.865729, 22.769937], [113.865773, 22.768746], [113.868176, 22.768174], [113.868728, 22.765785], [113.869763, 22.765199], [113.86979, 22.764218], [113.874157, 22.762093], [113.873017, 22.760717], [113.8767, 22.758048], [113.878042, 22.755714], [113.877034, 22.751161], [113.879472, 22.749659], [113.879814, 22.748381], [113.87941, 22.747269], [113.881375, 22.745995], [113.880901, 22.744791], [113.88205, 22.742754], [113.883033, 22.742066], [113.884032, 22.740243], [113.882498, 22.738038], [113.881629, 22.735788], [113.882568, 22.734193], [113.88098, 22.732067], [113.879796, 22.731109], [113.878174, 22.731049], [113.877069, 22.728258], [113.877858, 22.726454], [113.878656, 22.726012], [113.87877, 22.724445], [113.878174, 22.723194], [113.879726, 22.720445], [113.881743, 22.719138], [113.882313, 22.717794], [113.881901, 22.715505], [113.879866, 22.714794], [113.878104, 22.714859], [113.875034, 22.713366], [113.875376, 22.711803], [113.876841, 22.71117], [113.875709, 22.709301], [113.874175, 22.707845], [113.87585, 22.704458], [113.876595, 22.704672], [113.876928, 22.703081], [113.877955, 22.702258], [113.880673, 22.702398], [113.880454, 22.700765], [113.87863, 22.700686], [113.877393, 22.701249], [113.8777, 22.699421], [113.878805, 22.698369], [113.879726, 22.696211], [113.879524, 22.695695], [113.875885, 22.693824], [113.874297, 22.691694], [113.876692, 22.689628], [113.87742, 22.689787], [113.879349, 22.687688], [113.879875, 22.686218], [113.882129, 22.687544], [113.883673, 22.68994], [113.889873, 22.68901], [113.891119, 22.688019], [113.893978, 22.688549], [113.8976, 22.691364], [113.898187, 22.692303], [113.896942, 22.694104], [113.898766, 22.693736], [113.899556, 22.692513], [113.901555, 22.692047], [113.904046, 22.690819], [113.905204, 22.690898], [113.905142, 22.692154], [113.904081, 22.692927], [113.903906, 22.695025], [113.90323, 22.695727], [113.901485, 22.694973], [113.901739, 22.696797], [113.903651, 22.697369], [113.906256, 22.700621], [113.905528, 22.702449], [113.90623, 22.705123], [113.911606, 22.705342], [113.913246, 22.706361], [113.913798, 22.709045], [113.916245, 22.71018], [113.916833, 22.709249], [113.919596, 22.709803], [113.921165, 22.709212], [113.925156, 22.709468], [113.927454, 22.706933], [113.92762, 22.705719], [113.929208, 22.706528], [113.929594, 22.7073], [113.931313, 22.708031], [113.935093, 22.706398], [113.937276, 22.703095], [113.938276, 22.702835], [113.940425, 22.704202], [113.940925, 22.706379], [113.938592, 22.708714], [113.940863, 22.708514], [113.94288, 22.711128], [113.946617, 22.711249], [113.950519, 22.714059], [113.951589, 22.71584], [113.952493, 22.718175], [113.953142, 22.717463], [113.954685, 22.717901], [113.955755, 22.716947], [113.956571, 22.718849], [113.957948, 22.71798], [113.958763, 22.71604], [113.959579, 22.71564], [113.959877, 22.714338], [113.961245, 22.71418], [113.96164, 22.715561], [113.962754, 22.715445], [113.963736, 22.713743], [113.965674, 22.712673], [113.967858, 22.712356], [113.968454, 22.711012], [113.970261, 22.710101], [113.972024, 22.711287], [113.973953, 22.71184], [113.974725, 22.711487], [113.97726, 22.712752], [113.979391, 22.714091], [113.981671, 22.716891], [113.982688, 22.71645], [113.984109, 22.717222], [113.985855, 22.718863], [113.98724, 22.721082], [113.988047, 22.723291], [113.990678, 22.724575], [113.991169, 22.72564], [113.992923, 22.726951], [113.99566, 22.729867], [113.996905, 22.730319], [113.999668, 22.733225], [114.002307, 22.734718], [114.003465, 22.736532], [114.005228, 22.737122], [114.006175, 22.735969], [114.008754, 22.735811], [114.008341, 22.736225], [114.008508, 22.738829], [114.009201, 22.73994], [114.008868, 22.744019], [114.00714, 22.745284], [114.006175, 22.746516], [114.003746, 22.748683], [114.006166, 22.750803], [114.00471, 22.751975], [114.004202, 22.750324], [114.000878, 22.751756], [113.999624, 22.753737], [113.997677, 22.754133], [113.996624, 22.753342], [113.994721, 22.753742], [113.993581, 22.753468], [113.992327, 22.753979], [113.99323, 22.755825], [113.992792, 22.757713], [113.993625, 22.759066], [113.996563, 22.758564], [113.99851, 22.760921], [114.000115, 22.76206], [114.002483, 22.762972], [114.002693, 22.763618], [114.000501, 22.767128], [113.9963, 22.768523], [113.995326, 22.771285], [113.998738, 22.774167], [113.998431, 22.776552], [113.99687, 22.777166], [113.996695, 22.778184], [113.994151, 22.782438], [113.993941, 22.784456], [113.992511, 22.787831], [113.992871, 22.788965], [113.990959, 22.794046], [113.991169, 22.795598], [113.990862, 22.800205], [113.984469, 22.800293], [113.980926, 22.799731], [113.981127, 22.800884], [113.984092, 22.800754], [113.984592, 22.803556], [113.982522, 22.802743], [113.982022, 22.802004], [113.979943, 22.800819], [113.9784, 22.800921], [113.978663, 22.800024], [113.977523, 22.798955], [113.977768, 22.800791], [113.976269, 22.800256], [113.975979, 22.801558], [113.974927, 22.801376], [113.97576, 22.799215], [113.974997, 22.798439], [113.973129, 22.800279], [113.972269, 22.802255], [113.972726, 22.803826], [113.974199, 22.805439], [113.976172, 22.805662], [113.9784, 22.806513], [113.977172, 22.807373], [113.97697, 22.809097], [113.975725, 22.810417], [113.973734, 22.810724], [113.972348, 22.812499], [113.969121, 22.81289], [113.968568, 22.812179], [113.966104, 22.812429], [113.964867, 22.813415], [113.965174, 22.814911], [113.964762, 22.815846], [113.961394, 22.813368], [113.959062, 22.81341], [113.958895, 22.814256], [113.957351, 22.814674], [113.956974, 22.814005], [113.954983, 22.815051], [113.955422, 22.816775], [113.954676, 22.816761], [113.954475, 22.81849], [113.95558, 22.819643], [113.95465, 22.821032], [113.952589, 22.82219], [113.950502, 22.822706], [113.948029, 22.825155], [113.947879, 22.82686], [113.946897, 22.827488], [113.9441, 22.827697], [113.942766, 22.828817], [113.939767, 22.8293], [113.939171, 22.830676], [113.937364, 22.831113], [113.93782, 22.832711], [113.931286, 22.831921], [113.929488, 22.83201], [113.924524, 22.830578], [113.920648, 22.831313], [113.916763, 22.830248], [113.915535, 22.829035], [113.914281, 22.830109], [113.910957, 22.829993]]]]}}]};