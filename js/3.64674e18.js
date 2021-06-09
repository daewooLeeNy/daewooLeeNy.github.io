(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"3f32":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("div",{staticClass:"q-pa-md"},[a("q-card",{staticClass:"bg-secondary text-white",attrs:{bordered:""}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("낙원이란?")]),a("div",{staticClass:"text-subtitle2"},[t._v("\n          일하지 않고도 원하는 생활을 할 수 있는 재정 상태를 말합니다.\n          "),a("br"),t._v("예를들어, 원하는 생활 수준(월 500만원)을 하기 위한 생활비가\n          자본소득으로 획득이 가능 할때(월 500만원)이 들어온다면\n          낙원(Paradise) 상태 입니다. (혹은 경제적자유 상태)\n          "),a("br")])])],1)],1),a("div",{staticClass:"q-pa-md"},[a("h4",{staticClass:"q-my-md"},[t._v("당신의 자산 목표 금액은?")]),a("p",[t._v("\n      현재의 자산과 저축금액을 입력해서 은퇴시점의 자산이 어느정도 수준인지\n      계산해보세요.\n      "),a("br"),t._v("그리고 자산/저축/은퇴시점/수익율을 수치를 조절 하면서 재정\n      목표치를 정해보세요.\n    ")]),a("q-btn",{attrs:{color:"primary",label:"자산:2억 저축:1200 은퇴:10년후 수익:10% 예제","icon-right":"open_in_new"},on:{click:function(e){t.sample=!0,t.maximized=!t.$q.screen.gt.md}}}),a("div",{staticClass:"row q-col-gutter-xs"},[a("div",{staticClass:"col-6 col-xl-2 input-short-won"},[a("q-input",{attrs:{value:t.assets,label:"보유 자산","stack-label":"",dense:t.dense,suffix:"만원",placeholder:"은퇴기간 동안 자본소득을 발생 시키는 자산 금액입니다"},on:{input:t.changeAssets}},[a("q-tooltip",[t._v("현재 자산을 만원 단위로 입력해주세요.")])],1)],1),a("div",{staticClass:"col-6 col-xl-2 input-short-won"},[a("q-input",{attrs:{value:t.yearSavingAmount,label:"저축금액(연)","stack-label":"",dense:t.dense,suffix:"만원",placeholder:"한해 동안 저축 가능한 금액입니다"},on:{input:t.changeYearSavingAmount}},[a("q-tooltip",[t._v("한해 동안 저축 가능한 금액을 만원 단위로 입력해주세요.")])],1)],1),a("div",{staticClass:"col-4 input-short-won"},[a("q-input",{attrs:{value:t.termsOfRetire,label:"은퇴시기","stack-label":"",dense:t.dense,suffix:"년 후",placeholder:"은퇴까지 남은 기간을 입력해주세요"},on:{input:t.changeTermsOfRetire}},[a("q-tooltip",[t._v("은퇴까지 남은 기간을 입력해주세요.")])],1)],1),a("div",{staticClass:"col-4"},[a("q-input",{attrs:{value:t.interest,label:"명목 수익율","stack-label":"",dense:t.dense,suffix:"%",placeholder:"목표 명목수익율 (숫자만 입력)"},on:{input:t.changeInterest}},[a("q-tooltip",[t._v("\n            명목 수익율은 인플레이션을 고려하지 않은 일반적으로 우리 눈에\n            보이는 수익율입니다.\n          ")])],1)],1),a("div",{staticClass:"col-4"},[a("q-input",{attrs:{value:t.inflation,label:"저축 증가율","stack-label":"",dense:t.dense,suffix:"%",placeholder:"실질 저축금액을 유지하기 위한 비율(=인플레이션)"},on:{input:t.changeInflation}},[a("q-tooltip",[t._v("\n            예상 인플레이션을 입력해주세요. 저축금액을 매년 인플레이션 만큼\n            추가로 저축 한다고 가정합니다. (2~3%)\n          ")])],1)],1)]),a("q-separator",{attrs:{spaced:""}}),a("div",{staticClass:"row q-col-gutter-xs"},[a("div",{staticClass:"col-6 col-md-4"},[a("q-field",{attrs:{"bg-color":"cyan-1",label:"은퇴 후 자산","stack-label":"",hint:"자산 * 수익율^은퇴시기 + 저축금액 * (수익율 ^ 은퇴시기 - 저축증가율 ^ 은퇴시기) / (실질수익율)"},scopedSlots:t._u([{key:"control",fn:function(){return[a("div",{staticClass:"self-center full-width no-outline",attrs:{tabindex:"0"}},[t._v("\n              "+t._s(t._f("perThousand")(t._f("formatMultipleUnitFrom10TTo100M")(t.totalAssets),!0))+"\n            ")])]},proxy:!0}])},[a("q-tooltip",[t._v(t._s(t.termsOfRetire||"X")+" 년 후에 모아지는 돈입니다.")])],1)],1),a("div",{staticClass:"col-6 col-md-4"},[a("q-field",{attrs:{"bg-color":"cyan-1",label:"은퇴 후 월 수입","stack-label":"",hint:"은퇴 후 자산과 실질 수익율로 벌어들이는 월 수입"},scopedSlots:t._u([{key:"control",fn:function(){return[a("div",{staticClass:"self-center full-width no-outline",attrs:{tabindex:"0"}},[t.totalAssets>0&&t.foundMonthlySpend>0?a("span",[t._v("\n                "+t._s(t._f("perThousandFloor")(t._f("format10Thousand")(t.foundMonthlySpend)))+"\n                만원 /\n                "+t._s(t.foundInterest)+" % (명목:"+t._s(t.addNumber(t.foundInterest,t.inflation))+"%)\n              ")]):t._e()])]},proxy:!0}])},[a("q-tooltip",[t._v("\n            모아지는 돈과 가장 근사한 낙원금액을 만들기 위한 월금액과 실질\n            실질 수익율을 보여줍니다.\n          ")])],1)],1)])],1),a("div",{staticClass:"q-pa-md"},[a("h4",{staticClass:"q-my-md"},[t._v("당신의 낙원 금액은?")]),a("div",{staticClass:"text-subtitle1"},[t._v("\n      원하는 낙원금액(월 소비액)을 선택해보세요. 낙원을 이루기 위한 자산을\n      알수 있습니다.\n    ")]),a("div",{staticClass:"text-body text-grey"},[t._v("\n      Tip. 낙원금액 계산을 위해선 자산 목표 금액 부분의 수익율/은퇴시기/저축\n      증감율(인플레)를 입력 하셔야 합니다.\n      "),a("br"),t._v("\n      Tip. 월 소비금액과 수익율에 따라서 낙원 금액이 어떻게 차이 나는지 확인\n      해보세요.\n      "),a("br"),t._v("\n      Tip. 은퇴 후 자산을 계산 하시면 낙원을 이루기 위한 자산과 은퇴 후 자산의\n      차이를 알 수 있습니다.\n    ")]),a("div",{staticClass:"row q-col-gutter-xs"},[a("div",{staticClass:"col-6 col-md-4"},[a("q-select",{attrs:{filled:"",value:t.monthlySpend,options:t.monthlySpends,label:"월 소비액","stack-label":"",dense:t.dense,"options-dense":t.denseOpts,hint:"현재가치 기준"},on:{input:t.changeMonthlySpend},scopedSlots:t._u([{key:"option",fn:function(e){return[a("q-item",t._g(t._b({},"q-item",e.itemProps,!1),e.itemEvents),[a("q-item-section",[a("q-item-label",{attrs:{caption:""}},[t._v("\n                  "+t._s(t._f("perThousand")(t._f("format10Thousand")(e.opt)))+"\n                  만원\n                ")])],1)],1)]}},{key:"selected",fn:function(){return[t.monthlySpend?a("span",[t._v(t._s(t._f("perThousand")(t._f("format10Thousand")(t.monthlySpend)))+" 만원")]):a("span")]},proxy:!0}])})],1),a("div",{staticClass:"col-6 col-md-4"},[a("q-field",{attrs:{label:"낙원 금액","stack-label":"",hint:"연복리 실질 수익율, 현재 가치의 월 금액","bg-color":"green-1"},scopedSlots:t._u([{key:"control",fn:function(){return[a("div",{staticClass:"self-center full-width no-outline",attrs:{tabindex:"0"}},[t.paradiseAmount>0?a("span",[t._v("\n                "+t._s(t.termsOfRetire)+"년후\n                "+t._s(t._f("perThousand")(t._f("formatMultipleUnitFrom10TTo100M")(t.paradiseAmount),!0))+"/연"+t._s(t.addNumber(t.interest,-t.inflation))+"%로 월"+t._s(t._f("perThousand")(t._f("format10Thousand")(t.monthlySpend)))+"만원 Paradise!\n              ")]):t._e()])]},proxy:!0}])},[a("q-tooltip",[t._v("\n            "+t._s(t.termsOfRetire)+"년 후에 수익율"+t._s(t.interest)+"%로 월 소비액("+t._s(t._f("perThousand")(t._f("format10Thousand")(t.monthlySpend)))+"만원. ("+t._s(t.termsOfRetire)+"년 인플레 포함 =\n            "+t._s(t.monthlySpend*Math.pow(1+t.interest,t.termsOfRetire))+"만원)을\n            평생~ 쓸 수 있는 낙원을 이룰수 있는 금액입니다.\n          ")])],1)],1),a("div",{staticClass:"col-6 col-md-4"},[a("q-field",{attrs:{label:"낙원까지 남은금액","bg-color":t.paradiseStateColor(),"stack-label":"",hint:"[낙원금액 - 은퇴 후 자산]으로 낙원금액과의 차이"},scopedSlots:t._u([{key:"control",fn:function(){return[a("div",{staticClass:"self-center full-width no-outline",attrs:{tabindex:"0"}},[t.paradiseAmount>0&&t.totalAssets>0?a("span",[t._v("\n                "+t._s(t._f("perThousand")(t._f("formatMultipleUnitFrom10TTo100M")(t.addNumber(t.paradiseAmount,-t.totalAssets))))+"\n              ")]):t._e()])]},proxy:!0}])},[a("q-tooltip",[t._v("\n            입력하신 자산과 저축액, 수익율로 산출된 모을수 있는 돈과 낙원\n            금액과의 차이 입니다. (음수는 낙원금액을 초과)\n          ")])],1)],1)])]),a("div",{staticClass:"q-pa-md"},[a("q-table",{attrs:{title:"낙원 테이블",data:t.paradise_data,columns:t.paradise_columns,"row-key":"name",pagination:{rowsPerPage:40}},scopedSlots:t._u([{key:"body-cell",fn:function(e){return[a("q-td",{class:e.row[e.col.field+"_color"]},[t._v(t._s(e.value))])]}},{key:"bottom",fn:function(){return[a("div",[t._v("\n          ** 월 금액: 현재 가치, 수익율: 실질 수익율,\n        ")]),a("div",[t._v("\n          낙원금액 계산식: (월 금액 * 12 * (1+인플레이션) ^ 은퇴시기) / 실질\n          수익율\n        ")])]},proxy:!0}])})],1),a("div",{staticClass:"q-pa-md"},[a("q-card",{staticClass:"bg-grey-9 my-card",attrs:{dark:"",bordered:""}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("어떻게 만들게 되었나?")])]),a("q-separator",{attrs:{dark:"",inset:""}}),a("q-card-section",[t._v("\n        할 수 있다! 알고 투자(Kangcfa) 채널의 '투자는 선택이 아니라\n        생존이다!'에서 영감을 얻어 작성 하게 되었습니다. 자산적인 목표 기준을\n        잡을때 도움이 될 것 같다는 생각이 듭니다.\n      ")]),a("q-card-section",[a("div",{staticClass:"row q-col-gutter-xs"},[a("div",{staticClass:"col-6 col-xs-12 col-sm-12 col-md-6",staticStyle:{position:"relative",height:"0","padding-bottom":"50.25%"}},[a("iframe",{staticStyle:{position:"absolute",width:"100%",height:"100%"},attrs:{src:"https://www.youtube.com/embed/-CKWF_PTQNg",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),a("div",{staticClass:"col-6 col-xs-12 col-sm-12 col-md-6",staticStyle:{position:"relative",height:"0","padding-bottom":"50.25%"}},[a("iframe",{staticStyle:{position:"absolute",width:"100%",height:"100%"},attrs:{src:"https://www.youtube.com/embed/XxoEzDS1Mpw",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])])],1)],1),a("q-dialog",{attrs:{maximized:!1},model:{value:t.sample,callback:function(e){t.sample=e},expression:"sample"}},[a("q-card",[a("q-card-section",[a("div",{staticClass:"text-h8 text-red"},[t._v("\n          자산은 2억, 월 100만원씩 저축(년 1,200만원), 은퇴시기는 10년후, 명목\n          수익율은 10%, 월 소비액 500만원 예제 입니다.\n        ")])]),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.sample=!1,t.useDefault()}}},[t._v("사용하기")]),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{color:"primary"}},[t._v("닫기")])],1),a("img",{attrs:{src:"statics/sample.png"}})],1)],1)],1)},s=[],i=a("4db1"),o=a.n(i),r=(a("a481"),a("6612")),l=a.n(r),u=a("2ef0"),c=a.n(u),d={name:"ParadiseCalculatorMain",data:function(){var t=this;return{assets:"",interest:"",yearSavingAmount:"",inflation:3,termsOfRetire:"",dense:!1,denseOpts:!1,monthlySpends:[],monthlySpend:"",paradiseAmount:"",paradise_data:[],paradise_columns:[{name:"monthlySpend",required:!0,label:"월 금액",align:"center",field:"monthlySpend",format:function(e){return"월 ".concat(t.format10ThousandUnitNumber(e))},sortable:!1}],foundMonthlySpend:"",foundInterest:"",sample:!1,maximized:!1}},mounted:function(){var t;l.a.nullFormat(""),this.assets=this.formatNumber(this.assets),this.yearSavingAmount=this.formatNumber(this.yearSavingAmount),this.interest=this.formatNumber(this.interest),this.inflation=this.formatNumber(this.inflation),this.termsOfRetire=this.formatNumber(this.termsOfRetire),(t=this.monthlySpends).push.apply(t,o()(this.createMonthlySpends())),this.createParadiseColumns(),this.initParadaiseDatas()},watch:{monthlySpend:function(){this.inflation>0&&this.interest>0&&this.termsOfRetire>0&&(this.paradiseAmount=this.calculateParadiseAmount(),this.initParadaiseDatas())},assets:function(){this.isReadyCalculation&&this.initParadaiseDatas()},yearSavingAmount:function(){this.isReadyCalculation&&this.initParadaiseDatas()},inflation:function(){this.isReadyCalculation&&(this.paradiseAmount=this.calculateParadiseAmount(),this.initParadaiseDatas())},interest:function(t){this._isReadyCalculation({assets:this.assets,yearSavingAmount:this.yearSavingAmount,interest:t,termsOfRetire:this.termsOfRetire})&&(this.paradiseAmount=this.calculateParadiseAmount(),this.initParadaiseDatas())},termsOfRetire:function(t){this._isReadyCalculation({assets:this.assets,yearSavingAmount:this.yearSavingAmount,interest:this.interest,termsOfRetire:t})&&(this.paradiseAmount=this.calculateParadiseAmount(),this.initParadaiseDatas())}},computed:{isReadyCalculation:function(){return this._isReadyCalculation({assets:this.assets,yearSavingAmount:this.yearSavingAmount,interest:this.interest,termsOfRetire:this.termsOfRetire})},totalAssets:function(){if(this.assets<=0&&this.yearSavingAmount<=0||this.termsOfRetire<=0)return"";var t=l()(this.assets||0).multiply(1e4).value(),e=l()(this.yearSavingAmount||0).multiply(1e4).value(),a=l()(this.interest||0).value(),n=l()(this.termsOfRetire||0).value(),s=l()(this.inflation||0).value(),i=t*Math.pow(1+a/100,n),o=(a-s)/100;0===o&&(o=1);var r=Math.pow(1+a/100,n)-Math.pow(1+s/100,n),u=e*r/o,c=(i+u).toFixed(2);return this.sendGATotalAssets(c),c}},methods:{_isReadyCalculation:function(t){var e=t.assets,a=t.yearSavingAmount,n=t.interest,s=t.termsOfRetire;return(l()(e).value()>0||l()(a).value()>0)&&l()(n).value()>0&&l()(s).value()>0},initParadaiseDatas:c.a.debounce((function(){var t;this.paradise_data.splice(0,this.paradise_data.length),(t=this.paradise_data).push.apply(t,o()(this.calculateParadiseDatas())),this.findNearParadiseValue()}),0),changeAssets:function(t){this.assets=this.formatNumber(t),this.sendGAInputAssets(t)},changeYearSavingAmount:function(t){this.yearSavingAmount=l()(t).format("0,0")},changeInterest:function(t){this.interest=this.formatNumber(t),this.sendGAInterest(t)},changeInflation:function(t){this.inflation=this.formatNumber(t),this.sendGAInflation(t)},changeTermsOfRetire:function(t){this.termsOfRetire=this.formatNumber(t),this.sendGATermsOfRetire(t)},changeMonthlySpend:function(t){this.monthlySpend=t,this.sendGAMonthlySpend(t)},sendGAInputAssets:c.a.debounce((function(t){window.gtag("event","input",{event_category:"자산",event_label:t?t.replace(/,/g,""):t})}),5e3),sendGAYearSavingAmount:c.a.debounce((function(t){window.gtag("event","input",{event_category:"연저축",event_label:t})}),5e3),sendGAInterest:c.a.debounce((function(t){window.gtag("event","input",{event_category:"수익율",event_label:t})}),5e3),sendGAInflation:c.a.debounce((function(t){window.gtag("event","input",{event_category:"인플레이션",event_label:t})}),5e3),sendGATermsOfRetire:c.a.debounce((function(t){window.gtag("event","input",{event_category:"기간",event_label:t})}),5e3),sendGAMonthlySpend:c.a.debounce((function(t){window.gtag("event","select",{event_category:"월소비금액",event_label:t})}),2e3),sendGATotalAssets:c.a.debounce((function(t){var e=this.amountClassfication(t,1e8);window.gtag("event","calculate",{event_category:"은퇴 총자산",event_label:e?"".concat(e," 억"):e})}),2e3),sendGACalculatedMonthlySpend:c.a.debounce((function(t){var e=this.amountClassfication(t,1e6);window.gtag("event","calculate",{event_category:"은퇴 월소비",event_label:e?"".concat(e," 백만"):e})}),2e3),amountClassfication:function(t,e){if(isNaN(t))return t;var a=(t/e).toFixed(1);return a>10&&a<100?a=5*Math.floor(a/5):a>100&&(a=100*Math.floor(a/100)),a},inputNumberHandler:function(t){t.value=l()(t.value).format("0,0")},inputAmount10ThousandUnitHandler:function(t){t.value=this.format10ThousandUnitNumber(t.value)},format10ThousandUnitNumber:function(t){return this.formatNumber(l()(t).value()/1e4)},formatNumber:function(t){return l.a.nullFormat(""),l()(t).format("0,0")},createMonthlySpends:function(){var t=c.a.range(1,30),e=[],a=1e6;return t.forEach((function(){e.push(a),a+=5e5})),e},calculateTotalAssets:c.a.debounce((function(){var t=l()(this.assets||0).multiply(1e4).value(),e=l()(this.yearSavingAmount||0).multiply(1e4).value(),a=l()(this.interest).value(),n=l()(this.termsOfRetire).value(),s=l()(this.inflation).value(),i=(l()(t).value()*Math.pow(1+a/100,n)+e*(Math.pow(1+a/100,n)-Math.pow(1+s/100,n))/((a-s)/100)).toFixed(2);return i}),100),calculateParadiseDatas:function(){var t=this,e=c.a.range(1,20),a=[],n=void 0,s=[],i=l()(this.totalAssets).value(),o=this.addNumber(this.interest,-this.inflation),r=l()(this.monthlySpend).value();return this.monthlySpends.forEach((function(l,u){var c={};c.monthlySpend=l,e.forEach((function(e){var a="interest".concat(e);if(c[a]=t.calculateParadiseAmount(c.monthlySpend,e,t.inflation,t.termsOfRetire),i&&e===o){var l=Math.abs(i-c[a]);void 0===n||l<n?(n=l,s=[{index:u,colName:a}]):l===n&&s.push({index:u,colName:a})}r&&r===c.monthlySpend&&o===e&&(c[a+"_color"]="bg-green-1")})),a.push(c)})),s.forEach((function(t){return a[t.index][t.colName+"_color"]="bg-cyan-1"})),a},createParadiseColumns:function(){var t=this,e=c.a.range(1,20);e.forEach((function(e){var a="interest".concat(e);t.paradise_columns.push({name:a,field:a,label:"".concat(e,"%"),align:"center",format:function(e){return t.format10ThousandUnitNumber(e)},sortable:!1})}))},calculateParadiseAmount:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.monthlySpend,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:parseInt(this.interest||0)-parseInt(this.inflation||0),a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.inflation,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.termsOfRetire;if(!(e<=0||a<=0)){var s=e/100,i=a/100,o=12*t*Math.pow(1+i,n)/s;return o}},calculateParadiseMonthlyIncome:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:parseInt(this.interest||0)-parseInt(this.inflation||0),a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.inflation,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.termsOfRetire;if(!(e<=0)){var s=e/100,i=a/100,o=t/Math.pow(1+i,n)*s/12;return o}},findNearParadiseValue:function(){var t=this.addNumber(this.interest,-this.inflation);this.foundMonthlySpend=Math.floor(this.calculateParadiseMonthlyIncome(this.totalAssets)),this.foundInterest=t,this.sendGACalculatedMonthlySpend(this.foundMonthlySpend)},paradiseStateColor:function(){if(isNaN(this.paradiseAmount)||this.paradiseAmount<=0)return"";if(isNaN(this.totalAssets)||this.totalAssets<=0)return"";var t=["red","yellow","green"],e=(this.paradiseAmount-this.totalAssets)/this.totalAssets;return e>=.5?t[0]:e>-.5&&e<.5?t[1]:t[2]},useDefault:function(){this.assets=this.formatNumber(2e4),this.yearSavingAmount=this.formatNumber(1200),this.interest=10,this.inflation=2,this.termsOfRetire=10,this.monthlySpend=5e6},addNumber:function(t,e){return parseInt(t||0)+parseInt(e||0)}}},h=d,f=(a("f457"),a("2877")),m=Object(f["a"])(h,n,s,!1,null,null,null);e["default"]=m.exports},e52e:function(t,e,a){},f457:function(t,e,a){"use strict";var n=a("e52e"),s=a.n(n);s.a}}]);