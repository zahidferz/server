(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c535e"],{"3db9":function(e,n,t){"use strict";t.r(n);var c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("LedgerAccounts")},i=[],l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"flex flex-col w-full px-10 justify-center pb-15"},[e._m(0),t("div",{staticClass:"flex flex-col w-full items-start px-8"},[t("div",{staticClass:"flex flex-col w-full"},[this.loading?t("GxLoader",{staticClass:"mt-20 mb-5"}):e._e()],1),e.ledgerAccounts?t("GxLedgerAccounts",{staticClass:"mt-5 mb-15 w-full",attrs:{accountingFirmNumberProp:e.accountingFirmNumber,clientNumberProp:e.clientNumber,ledgerAccountsProp:e.ledgerAccounts,editCatalog:!0,showCollapsed:!0,showArrowCollapse:!0,beginningPeriodId:e.beginningPeriod,endingPeriodId:e.endingPeriod},on:{finishRender:e.finishRender}}):e._e()],1)])},s=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"flex block w-full divide-y flex justify-between items-stretch pr-5"},[t("div",{staticClass:"flex"},[t("span",{staticClass:"text-2xl"},[e._v("Configuración del catálogo de cuentas")])])])}],r=t("7fc4"),o=t("51b4"),u=t("4c6a"),a={name:"LedgerAccounts",data(){return{accountingFirmNumber:null,ledgerAccounts:null,levels:null,loading:!0,clientNumber:localStorage.getItem("clientNumber"),beginningPeriod:null,endingPeriod:null}},components:{GxLedgerAccounts:r["a"],GxLoader:o["a"]},apollo:{getLedgerAccounts:{query:u["p"],variables(){return{clientNumber:[localStorage.getItem("clientNumber")]}},update(e){this.accountingFirmNumber=e.myAccountingFirms[0].accountingFirmNumber,this.ledgerAccounts=e.myAccountingFirms[0].clients[0].accounting.chartOfAccounts.ledgerAccounts,this.levels=e.myAccountingFirms[0].clients[0].accounting.chartOfAccounts.levels,this.beginningPeriod=e.myAccountingFirms[0].clients[0].accounting.beginningPeriod,this.endingPeriod=e.myAccountingFirms[0].clients[0].accounting.endingPeriod},fetchPolicy:"no-cache"}},watch:{},computed:{},created(){},methods:{downloadExcel(){},finishRender(){this.loading=!1}}},d=a,g=t("2877"),m=Object(g["a"])(d,l,s,!1,null,null,null),f=m.exports,b={name:"LedgerAccountsView",components:{LedgerAccounts:f}},h=b,p=Object(g["a"])(h,c,i,!1,null,null,null);n["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0c535e.e7ad0557.js.map