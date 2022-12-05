(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3,6],{"0192":function(t,e,n){"use strict";var a=n("ec26");e["a"]={methods:{getUserUuid:function(){var t=this.$session.get("user-uuid"),e=t||Object(a["a"])();return t||(this.$session.set("user-uuid",e),t=e),t}}}},"02b7":function(t,e,n){"use strict";var a=n("0fae"),i=n.n(a);i.a},"0fae":function(t,e,n){},"1fcf":function(t,e,n){},"4b8a":function(t,e,n){"use strict";var a=n("7894"),i=n.n(a);i.a},7894:function(t,e,n){},"826b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"small"},[n("canvas",{ref:"myFirst"})])},i=[],s=(n("c5f6"),n("d549")),r=n("6612"),o=n.n(r),l=n("cdba"),u={components:{},props:{asset:{required:!1,type:Number},yearSavingAmount:{required:!1,type:Number},interest:{required:!1,type:Number},periodOfRetire:{required:!1,type:Number},inflation:{required:!1,type:Number}},data:function(){return{datacollection:{},thisChart:null}},mounted:function(){this.initChart()},watch:{asset:function(){this.updateData()},yearSavingAmount:function(){this.updateData()},interest:function(){this.updateData()},periodOfRetire:function(){this.updateData()},inflation:function(){this.updateData()}},methods:{initChart:function(){var t=this.fillData(),e=t.assetData,n=t.yearSavingData,a=t.yData;this.loadChart(e,n,a)},fillData:function(){var t=Object(l["b"])({asset:this.asset,yearSavingAmount:this.yearSavingAmount,interest:this.interest,periodOfRetire:this.periodOfRetire,inflation:this.inflation}),e=t.reduce((function(t,e){return t.push(e.totalAsset),t}),[]),n=t.reduce((function(t,e){return t.push(e.calAsset),t}),[]),a=t.reduce((function(t,e){return t.push(e.calYearSavingAmount),t}),[]),i=t.reduce((function(t,e){return t.push("".concat(e.periodOfRetire,"년")),t}),[]);return{historyOfAssets:t,totalAssetData:e,assetData:n,yearSavingData:a,yData:i}},updateData:function(){var t=this.fillData(),e=t.assetData,n=t.yearSavingData,a=t.yData;if(this.thisChart){var i=[];this.asset>0&&i.push(this.addXAxisAsset(e)),this.yearSavingAmount>0&&i.push(this.addXAxisYearSaving(n)),this.thisChart.data.datasets=i,this.thisChart.data.labels=a,this.thisChart.update()}},addXAxisAsset:function(t){return{label:"자산",backgroundColor:"#FBE7C6",borderColor:"#FBE7C6",data:t,fill:!0}},addXAxisYearSaving:function(t){return{label:"저축",backgroundColor:"#B4F8C8",borderColor:"#B4F8C8",data:t,fill:!0}},loadChart:function(t,e,n){var a=n,i=[];this.asset>0&&i.push(this.addXAxisAsset(t)),this.yearSavingAmount>0&&i.push(this.addXAxisYearSaving(e));var r=function(t){var e=0;return t&&t.length>=2?(t.forEach((function(t){e+=t.parsed.y})),"총자산: "+o()(e).format("0,0")):""},l={labels:a,datasets:i},u={type:"bar",data:l,options:{plugins:{title:{display:!0,text:function(t){return"총 자산 증가 추이"}},tooltip:{callbacks:{footer:r}}},hover:{mode:"nearest",intersect:!1},interaction:{mode:"index",axis:"x",intersect:!1},radius:.5,elements:{line:{tension:.5}},scales:{x:{display:!0,grid:{display:!1},stacked:!0},y:{display:!0,grid:{display:!1},stacked:!0}}}};this.thisChart=new s["a"](this.$refs.myFirst,u)}}},d=u,c=(n("e0dc"),n("2877")),h=Object(c["a"])(d,a,i,!1,null,null,null);e["default"]=h.exports},8680:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var a=n("fa84"),i=n.n(a),s=n("967e"),r=n.n(s),o=n("bc3a"),l=n.n(o),u=n("6612"),d=n.n(u),c="https://fibit.kr",h=function(){var t=i()(r.a.mark((function t(e){var n,a,i,s,o,u,h,f,p,m,v,g;return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.userUuid,a=e.assets,i=void 0===a?0:a,s=e.yearSavingAmount,o=void 0===s?0:s,u=e.termsOfRetire,h=e.interest,f=e.inflation,p=e.totalAssets,m=e.paradiseAmount,t.next=3,l.a.request({method:"POST",url:"".concat(c,"/calculated"),data:{user_uuid:n,assets:d()(i).multiply(1e4).value(),saving:d()(o).multiply(1e4).value(),retirement:parseInt(u),earning_rate:parseFloat(h),inflation:parseFloat(f),calculated_assets:parseInt(p),target_assets:parseInt(m)}});case 3:return v=t.sent,g=v.data,t.abrupt("return",g);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},ba29:function(t,e,n){},bfc1:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",[n("ins",{staticClass:"kakao_ad_area",staticStyle:{display:"none"},attrs:{"data-ad-unit":"DAN-xEuxbdjl3PYr84Rx","data-ad-width":"728","data-ad-height":"90"}}),n("div",{staticClass:"q-pa-md"},[n("h4",{staticClass:"q-my-md"},[t._v("당신의 자산 목표 금액은?")]),n("p",[t._v("\n      현재의 자산과 저축금액을 입력해서 은퇴시점의 자산이 어느정도 수준인지\n      계산해보세요.\n      "),n("br"),t._v("그리고 자산/저축/은퇴시점/수익율을 수치를 조절 하면서 재정\n      목표치를 정해보세요.\n    ")]),n("div",{staticClass:"q-gutter-sm"},[n("q-btn",{staticClass:"tag",attrs:{label:"예: 현재 자산2억, 연1200만원 저축, 연10% 수익율 그리고 10년후 은퇴"},on:{click:t.showExample}}),n("q-btn",{staticClass:"tag",attrs:{label:"#자산1억 10% 10년"},on:{click:t.useFavorite1}}),n("q-btn",{staticClass:"tag",attrs:{label:"#자산1억 10년 10억 목표"},on:{click:t.useFavorite2}})],1),n("div",{staticClass:"row q-col-gutter-xs"},[n("div",{staticClass:"col-6 col-xl-2 input-short-won"},[n("q-input",{attrs:{value:t.asset,label:"보유 자산","stack-label":"",dense:t.dense,suffix:"만원",placeholder:"은퇴기간 동안 자본소득을 발생 시키는 자산 금액입니다"},on:{input:t.changeAssets}},[n("q-tooltip",[t._v("현재 자산을 만원 단위로 입력해주세요.")])],1)],1),n("div",{staticClass:"col-6 col-xl-2 input-short-won"},[n("q-input",{attrs:{value:t.yearSavingAmount,label:"저축금액(연)","stack-label":"",dense:t.dense,suffix:"만원",placeholder:"한해 동안 저축 가능한 금액입니다"},on:{input:t.changeYearSavingAmount}},[n("q-tooltip",[t._v("한해 동안 저축 가능한 금액을 만원 단위로 입력해주세요.")])],1)],1),n("div",{staticClass:"col-4 input-short-won"},[n("q-input",{attrs:{value:t.periodOfRetire,label:"은퇴시기","stack-label":"",dense:t.dense,suffix:"년 후",placeholder:"은퇴까지 남은 기간을 입력해주세요"},on:{input:t.changeperiodOfRetire}},[n("q-tooltip",[t._v("은퇴까지 남은 기간을 입력해주세요.")])],1)],1),n("div",{staticClass:"col-4"},[n("q-input",{attrs:{value:t.interest,label:"명목 수익율","stack-label":"",dense:t.dense,suffix:"%",placeholder:"목표 명목수익율 (숫자만 입력)"},on:{input:t.changeInterest}},[n("q-tooltip",[t._v("\n            명목 수익율은 인플레이션을 고려하지 않은 일반적으로 우리 눈에\n            보이는 수익율입니다.\n          ")])],1)],1),n("div",{staticClass:"col-4"},[n("q-input",{attrs:{value:t.inflation,label:"저축 증가율","stack-label":"",dense:t.dense,suffix:"%",placeholder:"실질 저축금액을 유지하기 위한 비율(=인플레이션)"},on:{input:t.changeInflation}},[n("q-tooltip",[t._v("\n            예상 인플레이션을 입력해주세요. 저축금액을 매년 인플레이션 만큼\n            추가로 저축 한다고 가정합니다. (2~3%)\n          ")])],1)],1)]),n("q-separator",{attrs:{spaced:""}}),n("div",{staticClass:"row q-col-gutter-xs"},[n("div",{staticClass:"col-6 col-md-4"},[n("q-field",{attrs:{"bg-color":"cyan-1",label:"은퇴 후 자산","stack-label":"",hint:"자산 * 수익율^은퇴시기 + 저축금액 * (수익율 ^ 은퇴시기 - 저축증가율 ^ 은퇴시기) / (실질수익율)"},scopedSlots:t._u([{key:"control",fn:function(){return[n("div",{staticClass:"self-center full-width no-outline",attrs:{tabindex:"0"}},[t._v("\n              "+t._s(t._f("perThousand")(t._f("formatMultipleUnitFrom10TTo100M")(t.totalAsset),!0))+"\n            ")])]},proxy:!0}])},[n("q-tooltip",[t._v(t._s(t.periodOfRetire||"X")+" 년 후에 모아지는 돈입니다.")])],1)],1),n("div",{staticClass:"col-6 col-md-4"},[n("q-field",{attrs:{"bg-color":"cyan-1",label:"은퇴 후 월 수입","stack-label":"",hint:"은퇴 후 자산과 실질 수익율로 벌어들이는 월 수입"},scopedSlots:t._u([{key:"control",fn:function(){return[n("div",{staticClass:"self-center full-width no-outline",attrs:{tabindex:"0"}},[t.totalAsset>0&&t.foundMonthlySpend>0?n("span",[t._v("\n                "+t._s(t._f("perThousandFloor")(t._f("format10Thousand")(t.foundMonthlySpend)))+"\n                만원 /\n                "+t._s((100*t.foundInterest).toFixed(0))+" % (명목:"+t._s(t.interest)+"%)\n              ")]):t._e()])]},proxy:!0}])},[n("q-tooltip",[t._v("\n            은퇴 자산으로 벌어들이는 월 수입과 실질 수익율을 보여줍니다.\n          ")])],1)],1)])],1),n("div",{staticClass:"q-pa-md"},[t.totalAsset>0?n("asset-bar-chart",{attrs:{asset:t.numeralAsset,yearSavingAmount:t.numeralYearSavingAmount,interest:t.numeralInterest,periodOfRetire:t.numeralPeriodOfRetire,inflation:t.numeralInflation}}):t._e()],1),n("div",{staticClass:"q-pa-md"},[n("h4",{staticClass:"q-my-md"},[t._v("당신의 낙원 금액은?")]),n("div",{staticClass:"text-subtitle1"},[t._v("\n      원하는 낙원금액(월 소비액)을 선택해보세요. 낙원을 이루기 위한 자산을\n      알수 있습니다.\n    ")]),n("div",{staticClass:"text-body text-grey"},[t._v("\n      Tip. 낙원금액 계산을 위해선 자산 목표 금액 부분의 수익율/은퇴시기/저축\n      증감율(인플레)를 입력 하셔야 합니다.\n      "),n("br"),t._v("\n      Tip. 월 소비금액과 수익율에 따라서 낙원 금액이 어떻게 차이 나는지 확인\n      해보세요.\n      "),n("br"),t._v("\n      Tip. 은퇴 후 자산을 계산 하시면 낙원을 이루기 위한 자산과 은퇴 후 자산의\n      차이를 알 수 있습니다.\n    ")]),n("div",{staticClass:"row q-col-gutter-xs"},[n("div",{staticClass:"col-6 col-md-4"},[n("q-select",{attrs:{filled:"",value:t.monthlySpend,options:t.monthlySpends,label:"월 소비액","stack-label":"",dense:t.dense,"options-dense":t.denseOpts,hint:"현재가치 기준"},on:{input:t.changeMonthlySpend},scopedSlots:t._u([{key:"option",fn:function(e){return[n("q-item",t._g(t._b({},"q-item",e.itemProps,!1),e.itemEvents),[n("q-item-section",[n("q-item-label",{attrs:{caption:""}},[t._v("\n                  "+t._s(t._f("perThousand")(t._f("format10Thousand")(e.opt)))+"\n                  만원\n                ")])],1)],1)]}},{key:"selected",fn:function(){return[t.monthlySpend?n("span",[t._v(t._s(t._f("perThousand")(t._f("format10Thousand")(t.monthlySpend)))+" 만원")]):n("span")]},proxy:!0}])})],1),n("div",{staticClass:"col-6 col-md-4"},[n("q-field",{attrs:{label:"낙원 금액","stack-label":"",hint:"연복리 실질 수익율, 현재 가치의 월 금액","bg-color":"green-1"},scopedSlots:t._u([{key:"control",fn:function(){return[n("div",{staticClass:"self-center full-width no-outline",attrs:{tabindex:"0"}},[t.paradiseAmount>0?n("span",[t._v("\n                "+t._s(t.periodOfRetire)+"년후\n                "+t._s(t._f("perThousand")(t._f("formatMultipleUnitFrom10TTo100M")(t.paradiseAmount),!0))+"/연"+t._s(t.addNumber(t.interest,-t.inflation))+"%로 월"+t._s(t._f("perThousand")(t._f("format10Thousand")(t.monthlySpend)))+"만원 Paradise!\n              ")]):t._e()])]},proxy:!0}])},[n("q-tooltip",[t._v("\n            "+t._s(t.periodOfRetire)+"년 후에 수익율"+t._s(t.interest)+"%로 월 소비액("+t._s(t._f("perThousand")(t._f("format10Thousand")(t.monthlySpend)))+"만원. ("+t._s(t.periodOfRetire)+"년 인플레 포함 =\n            "+t._s(t.monthlySpend*Math.pow(1+t.interest,t.periodOfRetire))+"만원)을\n            평생~ 쓸 수 있는 낙원을 이룰수 있는 금액입니다.\n          ")])],1)],1),n("div",{staticClass:"col-6 col-md-4"},[n("q-field",{attrs:{label:"낙원까지 남은금액","bg-color":t.paradiseStateColor(),"stack-label":"",hint:"[낙원금액 - 은퇴 후 자산]으로 낙원금액과의 차이"},scopedSlots:t._u([{key:"control",fn:function(){return[n("div",{staticClass:"self-center full-width no-outline",attrs:{tabindex:"0"}},[t.paradiseAmount>0&&t.totalAsset>0?n("span",[t._v("\n                "+t._s(t._f("perThousand")(t._f("formatMultipleUnitFrom10TTo100M")(t.addNumber(t.paradiseAmount,-t.totalAsset))))+"\n              ")]):t._e()])]},proxy:!0}])},[n("q-tooltip",[t._v("\n            입력하신 자산과 저축액, 수익율로 산출된 모을수 있는 돈과 낙원\n            금액과의 차이 입니다. (음수는 낙원금액을 초과)\n          ")])],1)],1)])]),n("q-dialog",{attrs:{maximized:!1},model:{value:t.sample,callback:function(e){t.sample=e},expression:"sample"}},[n("q-card",[n("q-card-section",[n("div",{staticClass:"text-h8 text-red"},[t._v("\n          자산은 2억, 월 100만원씩 저축(년 1,200만원), 은퇴시기는 10년후, 명목\n          수익율은 10%, 월 소비액 500만원 예제 입니다.\n        ")])]),n("q-card-actions",{attrs:{align:"right"}},[n("q-btn",{attrs:{flat:"",color:"primary"},on:{click:t.useExample1}},[t._v("사용하기")]),n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{color:"primary"}},[t._v("닫기")])],1),n("img",{attrs:{src:"statics/sample.png"}})],1)],1)],1)},i=[],s=n("fa84"),r=n.n(s),o=n("4db1"),l=n.n(o),u=n("967e"),d=n.n(u),c=(n("7f7f"),n("a481"),n("6612")),h=n.n(c),f=n("2ef0"),p=n.n(f),m=n("cdba"),v=n("826b"),g=n("8680"),y=n("0192"),b={name:"ParadiseCalculatorMain",components:{AssetBarChart:v["default"]},mixins:[y["a"]],data:function(){var t=this;return{asset:"",interest:"",yearSavingAmount:"",inflation:3,periodOfRetire:"",dense:!1,denseOpts:!1,monthlySpends:[],monthlySpend:"",totalAsset:"",paradiseAmount:"",paradise_data:[],paradise_columns:[{name:"monthlySpend",required:!0,label:"월 금액",align:"center",field:"monthlySpend",format:function(e){return"월 ".concat(t.format10ThousandUnitNumber(e))},sortable:!1}],foundMonthlySpend:"",foundInterest:"",sample:!1,maximized:!1,slide:1,slideStyle:"height:initial",userUuid:"",resultId:0}},mounted:function(){var t;h.a.nullFormat(""),this.userUuid=this.getUserUuid(),window.gtag("event","page_view",{page_title:this.$route.name,page_location:this.$route.name,page_path:this.$route.path}),(t=this.monthlySpends).push.apply(t,l()(this.createMonthlySpends()))},watch:{monthlySpend:function(){this.numeralInflation>0&&this.numeralInterest>0&&this.numeralPeriodOfRetire>0&&(this.paradiseAmount=this.calculateParadiseAmount(),this.initParadaiseDatas())},asset:function(){this.isReadyCalculation&&this.initParadaiseDatas()},yearSavingAmount:function(){this.isReadyCalculation&&this.initParadaiseDatas()},inflation:function(){this.isReadyCalculation&&(this.paradiseAmount=this.calculateParadiseAmount(),this.initParadaiseDatas())},interest:function(t){this._isReadyCalculation({asset:this.asset,yearSavingAmount:this.yearSavingAmount,interest:t,periodOfRetire:this.periodOfRetire})&&(this.paradiseAmount=this.calculateParadiseAmount(),this.initParadaiseDatas())},periodOfRetire:function(t){this._isReadyCalculation({asset:this.asset,yearSavingAmount:this.yearSavingAmount,interest:this.interest,periodOfRetire:t})&&(this.paradiseAmount=this.calculateParadiseAmount(),this.initParadaiseDatas())}},computed:{isReadyCalculation:function(){return this._isReadyCalculation({asset:this.asset,yearSavingAmount:this.yearSavingAmount,interest:this.interest,periodOfRetire:this.periodOfRetire})},numeralAsset:function(){return h()(this.asset||0).multiply(1e4).value()},numeralYearSavingAmount:function(){return h()(this.yearSavingAmount||0).multiply(1e4).value()},numeralPeriodOfRetire:function(){return h()(this.periodOfRetire||0).value()},numeralInterest:function(){return h()(this.interest||0).divide(100).value()},numeralInflation:function(){return h()(this.inflation||0).divide(100).value()}},methods:{_isReadyCalculation:function(t){var e=t.asset,n=t.yearSavingAmount,a=t.interest,i=t.periodOfRetire;return(h()(e).value()>0||h()(n).value()>0)&&h()(a).value()>0&&h()(i).value()>0},initParadaiseDatas:p.a.debounce((function(){var t={asset:this.numeralAsset,yearSavingAmount:this.numeralYearSavingAmount,periodOfRetire:this.numeralPeriodOfRetire,interest:this.numeralInterest,inflation:this.numeralInflation},e=Object(m["a"])(t),n=e.totalAsset;this.totalAsset=n,this.findNearParadiseValue(),this.sendGATotalAsset(n),this.sendGAInputs(t),this.sendResult()}),0),changeAssets:function(t){this.asset=this.formatNumber(t),this.sendGAInputAssets(t)},changeYearSavingAmount:function(t){this.yearSavingAmount=h()(t).format("0,0")},changeInterest:function(t){this.interest=this.formatNumber(t),this.sendGAInterest(t)},changeInflation:function(t){this.inflation=this.formatNumber(t),this.sendGAInflation(t)},changeperiodOfRetire:function(t){this.periodOfRetire=this.formatNumber(t),this.sendGAperiodOfRetire(t)},changeMonthlySpend:function(t){this.monthlySpend=t,this.sendGAMonthlySpend(t)},sendGAInputAssets:p.a.debounce((function(t){window.gtag("event","input",{event_category:"자산",event_label:t?t.replace(/,/g,""):t})}),5e3),sendGAYearSavingAmount:p.a.debounce((function(t){window.gtag("event","input",{event_category:"연저축",event_label:t})}),5e3),sendGAInterest:p.a.debounce((function(t){window.gtag("event","input",{event_category:"수익율",event_label:t})}),5e3),sendGAInflation:p.a.debounce((function(t){window.gtag("event","input",{event_category:"인플레이션",event_label:t})}),5e3),sendGAperiodOfRetire:p.a.debounce((function(t){window.gtag("event","input",{event_category:"기간",event_label:t})}),5e3),sendGAMonthlySpend:p.a.debounce((function(t){window.gtag("event","select",{event_category:"월소비금액",event_label:t})}),2e3),sendGATotalAsset:p.a.debounce((function(t){var e=this.amountClassfication(t,1e8);window.gtag("event","calculate",{event_category:"은퇴 총자산",event_label:e?"".concat(e," 억"):e})}),2e3),sendGAInputs:p.a.debounce((function(t){var e=[];for(var n in t)e.push("".concat(n,"=").concat(t[n]));window.gtag("event","input",{event_category:"계산입력값",event_label:e.join("&")})}),2e3),sendGACalculatedMonthlySpend:p.a.debounce((function(t){var e=this.amountClassfication(t,1e6);window.gtag("event","calculate",{event_category:"은퇴 월소비",event_label:e?"".concat(e," 백만"):e})}),2e3),amountClassfication:function(t,e){if(isNaN(t))return t;var n=(t/e).toFixed(1);return n>10&&n<100?n=5*Math.floor(n/5):n>100&&(n=100*Math.floor(n/100)),n},inputNumberHandler:function(t){t.value=h()(t.value).format("0,0")},inputAmount10ThousandUnitHandler:function(t){t.value=this.format10ThousandUnitNumber(t.value)},format10ThousandUnitNumber:function(t){return this.formatNumber(h()(t).value()/1e4)},formatNumber:function(t){return h.a.nullFormat(""),h()(t).format("0,0")},createMonthlySpends:function(){var t=p.a.range(1,30),e=[],n=1e6;return t.forEach((function(){e.push(n),n+=5e5})),e},calculateParadiseAmount:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.monthlySpend,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.numeralInterest-this.numeralInflation,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.numeralInflation,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.periodOfRetire;if(!(e<=0||n<=0)){var i=12*t*Math.pow(1+n,a)/e;return i}},calculateParadiseMonthlyIncome:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.numeralInterest-this.numeralInflation,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.numeralInflation,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.periodOfRetire;if(!(e<=0)){var i=t/Math.pow(1+n,a)*e/12;return i}},findNearParadiseValue:function(){var t=this.numeralInterest-this.numeralInflation;this.foundMonthlySpend=Math.floor(this.calculateParadiseMonthlyIncome(this.totalAsset)),this.foundInterest=t,this.sendGACalculatedMonthlySpend(this.foundMonthlySpend)},paradiseStateColor:function(){if(isNaN(this.paradiseAmount)||this.paradiseAmount<=0)return"";if(isNaN(this.totalAsset)||this.totalAsset<=0)return"";var t=["red","yellow","green"],e=(this.paradiseAmount-this.totalAsset)/this.totalAsset;return e>=.5?t[0]:e>-.5&&e<.5?t[1]:t[2]},useDefault:function(){this.asset=this.formatNumber(2e4),this.yearSavingAmount=this.formatNumber(1200),this.interest=10,this.inflation=2,this.periodOfRetire=10,this.monthlySpend=5e6},favoriteSet1:function(){this.asset=this.formatNumber(1e4),this.yearSavingAmount=this.formatNumber(0),this.interest=10,this.inflation=3,this.periodOfRetire=10,this.monthlySpend=0},favoriteSet2:function(){this.asset=this.formatNumber(1e4),this.yearSavingAmount=this.formatNumber(0),this.interest=26,this.inflation=3,this.periodOfRetire=10,this.monthlySpend=0},addNumber:function(t,e){return parseInt(t||0)+parseInt(e||0)},showExample:function(){this.useExample1()},useExample1:function(){window.gtag("event","click",{event_category:"tag",event_label:"use1"}),this.sample=!1,this.useDefault()},useFavorite1:function(){this.favoriteSet1(),this.sendGASetTag("favorite1")},useFavorite2:function(){this.favoriteSet2(),this.sendGASetTag("favorite2")},sendGASetTag:function(t){var e=this.asset,n=this.yearSavingAmount,a=this.interest,i=this.inflation,s=this.periodOfRetire,r=this.monthlySpend;window.gtag("event","click",{event_category:"tag",event_label:JSON.stringify({tag:t,asset:e,yearSavingAmount:n,interest:a,inflation:i,periodOfRetire:s,monthlySpend:r})})},bannerLoaded:function(t){this.slideStyle="height:".concat(t.currentTarget.height,"px")},sendResult:p.a.debounce(r()(d.a.mark((function t(){var e;return d.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.isReadyCalculation){t.next=2;break}return t.abrupt("return");case 2:if(!this.resultId||!this.monthlySpend){t.next=6;break}this.updateTarget(),t.next=10;break;case 6:return t.next=8,Object(g["a"])({userUuid:this.userUuid,assets:this.asset,yearSavingAmount:this.yearSavingAmount,termsOfRetire:this.periodOfRetire,interest:this.interest,inflation:this.inflation,totalAssets:this.totalAsset,paradiseAmount:this.paradiseAmount});case 8:e=t.sent,this.resultId=e.id;case 10:case"end":return t.stop()}}),t,this)}))),2e3),updateTarget:function(){}}},A=b,_=(n("02b7"),n("e914"),n("4b8a"),n("2877")),S=Object(_["a"])(A,a,i,!1,null,"39a9dcc0",null);e["default"]=S.exports},cdba:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return a}));n("456d"),n("8a81"),n("d25f"),n("9986"),n("8e6e"),n("c47a"),n("6612");var a=function(t){var e=t.asset,n=t.yearSavingAmount,a=t.interest,r=t.periodOfRetire,o=t.inflation,l=i({asset:e,interest:a,periodOfRetire:r,inflation:o}),u=s({yearSavingAmount:n,interest:a,periodOfRetire:r,inflation:o}),d=l+u;return{totalAsset:d,calAsset:l,calYearSavingAmount:u,asset:e,yearSavingAmount:n,interest:a,periodOfRetire:r,inflation:o}},i=function(t){var e=t.asset,n=t.interest,a=t.periodOfRetire,i=e*Math.pow(1+n,a);return i},s=function(t){var e=t.yearSavingAmount,n=t.interest,a=t.periodOfRetire,i=t.inflation,s=n-i,r=Math.pow(1+n,a)-Math.pow(1+i,a),o=e*r/(s||1);return o},r=function(t){for(var e=t.asset,n=t.yearSavingAmount,i=t.interest,s=t.periodOfRetire,r=t.inflation,o=[],l=1;l<=s;l++){var u=a({asset:e,yearSavingAmount:n,interest:i,periodOfRetire:l,inflation:r});o.push(u)}return o}},e0dc:function(t,e,n){"use strict";var a=n("ba29"),i=n.n(a);i.a},e914:function(t,e,n){"use strict";var a=n("1fcf"),i=n.n(a);i.a}}]);