(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fca039a"],{"42b5":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return"mo"===e.$mq?a("MqLayout",{key:"layout",staticClass:"flex flex-col bg-white",attrs:{id:"layout",mq:"mo"}},[a("header",{key:"topbar-container",staticClass:"sticky top-0 z-20 bg-white top-bar",class:{"shadow-5":e.tabs,"shadow-3":e.hasScrolled}},[a("transition",{key:"default-transition",attrs:{name:"input-fade",mode:"out-in"},on:{"after-enter":e.focusMobileSearch}},[e.mobileSearch?a("nav",{key:"search-container",staticClass:"flex items-center p-4 h-14 justify-left gx-h5",class:[e.onSearchClasses]},[a("button",{staticClass:"flex items-center mr-4 leading-none focus:outline-none"},[a("GxIcon",{attrs:{icon:"close"},on:{click:function(t){return t.stopPropagation(),e.cancelMobileSearch(t)}}})],1),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.search,expression:"search",modifiers:{trim:!0}}],ref:"mobileSearch",staticClass:"w-full leading-none bg-transparent focus:outline-none gxMobileSearchInput",class:e.placeholderColor,attrs:{placeholder:e.placeholder,autofocus:"",type:"search"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]):a("nav",{key:"default-topbar",staticClass:"flex justify-start w-full p-4 h-14 items-bottom"},[!e.mobileSearch&&e.breadcrumb?a("GxBreadcrumb",{key:"GxBreadcrumb",attrs:{classes:e.hasScrolled?e.breadcrumbClassesWithScroll:e.breadcrumbClassesWithoutScroll,"has-scrolled":e.hasScrolled}},[a("h1",{staticClass:"font-bold gx-h5"},[e._v(e._s(e.title))])]):e._e(),e.mobileSearch||e.breadcrumb?e._e():a("h1",{key:"title-container",staticClass:"flex items-center font-bold justy-left items-bottom gx-h5"},[e.iconClickHandler?a("GxIcon",{staticClass:"mr-4",class:[e.iconClasses],staticStyle:{"font-size":"20px"},attrs:{icon:e.icon,"html-tag":"button"},on:{click:function(t){return t.stopPropagation(),e.iconClickHandler(t)}}}):e.hasDrawer&&!e.iconClickHandler?a("GxIcon",{staticClass:"mr-4",class:[e.iconClasses],staticStyle:{"font-size":"20px"},attrs:{icon:e.icon,"html-tag":"button"},on:{click:function(t){t.stopPropagation(),e.drawerLeft=!e.drawerLeft}}}):a("GxIcon",{staticClass:"mr-4",class:[e.iconClasses],staticStyle:{"font-size":"20px"},attrs:{icon:e.icon}}),e._t("title",[a("span",[e._v(" "+e._s(e.title)+" ")])])],2),a("div",{key:"right-icons",staticClass:"flex items-center ml-auto gx-h5"},[e._t("topbar-right"),e.hasSearch?a("GxIcon",{key:"search-icon",staticClass:"leading-none icon-button focus:outline-none",attrs:{"html-tag":"button",icon:"search"},on:{click:function(t){e.mobileSearch=!0}}}):e._e(),e.hasDrawerRight?a("GxIcon",{key:"right-drawer",staticClass:"ml-4 leading-none icon-button",attrs:{"html-tag":"button",icon:"more_vert"},on:{click:function(t){e.drawerRight=!e.drawerRight}}}):e._e()],2)],1)]),e._t("header2"),e.tabs?a("div",{key:"tabs-container"},[e._t("tabs")],2):e._e()],2),e.hasDrawer?a("TopBarLeftDrawer",{key:"TopBarLeftDrawer",attrs:{open:e.drawerLeft,"a-drawer-open":e.drawerOPen},on:{open:function(t){e.drawerOPen=!0},close:function(t){return e.onCloseDrawer("drawerLeft")}}}):e._e(),e.hasDrawerRight?a("TopBarRightDrawer",{key:"TopBarRightDrawer",attrs:{open:e.drawerRight,"a-drawer-open":e.drawerOPen},on:{open:function(t){e.drawerOPen=!0},close:function(t){return e.onCloseDrawer("drawerRight")}}}):e._e(),a("div",{staticClass:"flex flex-col flex-grow",class:{"gx-padding-menu pb-14":e.withPaddingBottom},attrs:{id:"mobileMainContent"}},[e._t("default",null,null,{hasScrolled:e.hasScrolled,search:e.search})],2)],1):a("div",{staticClass:"flex flex-col flex-grow",class:{"pb-4":e.withPaddingBottom}},[e._t("default")],2)},n=[],o=(a("caad"),a("ac1f"),a("2532"),a("5319"),a("841c"),a("524e")),i=a("f21d"),s=a("6f0d"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"flex-grow flex justify-start"},[a("RouterLink",{staticClass:"flex justify-start items-center gx-h5",attrs:{tag:"li",to:{name:"dashboard"}}},[a("GxIcon",{class:[e.classes.icon],attrs:{icon:"dashboard"}}),a("GxIcon",{staticClass:"gxNext mx-1",class:[e.classes.next],attrs:{icon:"navigate_next"}})],1),e._l(e.matchedRoutes,(function(t,r){return a("RouterLink",{key:t.name,staticClass:"flex justify-start items-center  gx-h5",attrs:{tag:"li",to:{name:t.name}}},[t.meta.icon?[a("GxIcon",{class:[t.name===e.$route.name||t.redirect.name===e.$route.name?e.classes.active:e.classes.icon],attrs:{icon:t.meta.icon}}),r!==e.matchedRoutes.length-1&&e.matchedRoutes[r+1].meta.icon?a("GxIcon",{staticClass:"mx-1  gxNext",class:[e.classes.next],attrs:{icon:"navigate_next"}}):e._e()]:e._e()],2)})),a("div",{staticClass:"ml-4 title"},[e._t("default")],2)],2)},l=[],u=(a("fb6a"),{name:"GxBreadcrumb",components:{GxIcon:o["a"]},props:{hasScrolled:{type:Boolean,default:!1},classes:{type:Object,default:null}},computed:{matchedRoutes:function(){return this.$route.matched.slice(1)}}}),d=u,m=(a("8e44"),a("2877")),f=Object(m["a"])(d,c,l,!1,null,"3157a3f7",null),h=f.exports,p={name:"LayoutWebMobile",components:{TopBarLeftDrawer:i["a"],TopBarRightDrawer:s["a"],GxBreadcrumb:h,GxIcon:o["a"]},props:{dark:{type:Boolean,default:!1},breadcrumb:{type:Boolean,default:!1},hasSearch:{type:Boolean,default:!1},onSearchClasses:{type:String,default:"text-black"},placeholder:{type:String,default:"Buscar"},hasDrawer:{type:Boolean,default:!1},hasDrawerRight:{type:Boolean,default:!1},hasStickyElement:{type:Boolean,default:!1},title:{type:String,default:null},icon:{type:String,default:""},iconClassWithoutScroll:{type:String,default:"text-black"},iconClassWithScroll:{type:String,default:"text-black"},topBarClassWithScroll:{type:String,default:""},topBarClassWithoutScroll:{type:String,default:"text-black bg-white"},iconClickHandler:{type:Function,default:null},iconRight:{type:String,default:null},iconRightClickHandler:{type:Function,default:null},withPaddingBottom:{type:Boolean,default:!0},noHorizontalPadding:{type:Boolean,default:!1},tabs:{type:Boolean,default:!1},breadcrumbClassesWithScroll:{type:Object,default:function(){return{icon:"text-gray-700",next:"text-black",active:"text-primary"}}},breadcrumbClassesWithoutScroll:{type:Object,default:function(){return{icon:"text-gray-700",next:"text-black",active:"text-primary"}}},searchTerm:{type:String,default:""}},data:function(){return{hasScrolled:!1,activeDeskTopBarMenu:null,drawerLeft:!1,mobileSearch:!1,drawerRight:!1,customTopBar:!1,drawerOPen:!1,search:""}},computed:{hasTopBar:function(){return this.title||this.icon||this.iconRight||this.hasDrawer},iconClasses:function(){return this.hasScrolled?this.iconClassWithScroll:this.iconClassWithoutScroll},topBarClasses:function(){return this.hasScrolled?(this.topBarClassWithScroll.includes("bg-"),this.topBarClassWithScroll):this.topBarClassWithoutScroll?this.topBarClassWithoutScroll:""},placeholderColor:function(){return"bg-primary-500 text-white"===this.onSearchClasses?"placeholder-bg-dark":"placeholder-bg-white"}},watch:{search:function(e){"mo"===this.$mq&&this.$emit("search",e)}},reactiveProvide:{name:"topBarSearch",include:["search"]},mounted:function(){var e=this;this.$route.query.searchTerm&&this.hasSearch&&this.setMobileSearch(this.$route.query.searchTerm),this.$route.query.drawerRight&&this.$nextTick((function(){e.drawerRight=!0;var t=Object.assign({},e.$route.query);delete t.drawerRight,e.$router.replace({query:t})}));var t=0,a=!1;"de"===this.$mq?document.getElementById("gxDeMain")&&document.getElementById("gxDeMain").addEventListener("scroll",(function(r){t=r.target.scrollTop,a||(window.requestAnimationFrame((function(){e.hasScrolled=t>0,a=!1})),a=!0)})):window.addEventListener("scroll",(function(r){t=window.scrollY,a||(window.requestAnimationFrame((function(){e.hasScrolled=t>0,a=!1})),a=!0)}))},created:function(){this.searchTerm&&(this.search=this.searchTerm,this.mobileSearch=!0)},methods:{onCloseDrawer:function(e){this[e]=!1,this.drawerOPen=!1},cancelMobileSearch:function(){this.search="",this.mobileSearch=!1},focusMobileSearch:function(){this.$refs.mobileSearch&&this.$refs.mobileSearch.focus()},onActiveMenu:function(e){this.activeDeskTopBarMenu=e},showCustomTopBar:function(){this.customTopBar=!0},hideCustomTopBar:function(){this.customTopBar=!1},setMobileSearch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.search=e,this.mobileSearch=!0}}},b=p,g=(a("f320"),Object(m["a"])(b,r,n,!1,null,"f3d6798e",null));t["a"]=g.exports},"50bf":function(e,t,a){},5833:function(e,t,a){},"597e":function(e,t,a){},"8e44":function(e,t,a){"use strict";var r=a("50bf"),n=a.n(r);n.a},a48d:function(e,t,a){"use strict";var r=a("bf76"),n=a.n(r);n.a},aa94:function(e,t,a){"use strict";var r=a("5833"),n=a.n(r);n.a},bf76:function(e,t,a){},c19f:function(e,t,a){"use strict";var r=a("23e7"),n=a("da84"),o=a("621a"),i=a("2626"),s="ArrayBuffer",c=o[s],l=n[s];r({global:!0,forced:l!==c},{ArrayBuffer:c}),i(s)},cb3a:function(e,t,a){e.exports=a.p+"img/mo_001_7_factura.04fb8016.svg"},d289:function(e,t,a){e.exports=a.p+"img/mo_001_7_certificados.9224eaa7.svg"},d777:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("LayoutWebMobile",{attrs:{title:"Así se verá tu logo en la factura",icon:"keyboard_backspace","icon-click-handler":e.goBack}},[a("InvoicePreview")],1)},n=[],o=a("42b5"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex-grow relative flex flex-col items-center",class:{"p-4":"mo"===e.$mq}},[a("MqLayout",{staticClass:"flex-grow w-full flex flex-col justify-start items-center",attrs:{mq:"de"}},[a("nav",{staticClass:"flex w-full gx-h4 font-bold justify-start items-center mt-4 mb-8"},[a("GxIcon",{staticClass:"cursor-pointer pr-4",attrs:{icon:"keyboard_backspace"},on:{click:e.goBack}}),a("p",{staticClass:"font-bold"},[e._v("Así se verá tu logo en la factura")])],1),e.pdfFile?a("GxPDFViewer",{staticClass:"mt-4 w-full",attrs:{blob:e.pdfFile}}):e._e(),e.showButton?a("GxButton",{staticClass:" ml-auto mt-8 mb-8",on:{click:e.onSave}},[e._v("Continuar")]):a("GxButton",{attrs:{loading:!0}},[e._v("Loading")]),e.showSavedInvoiceAlert?a("GxCardModal",{attrs:{headline:"Tu factura quedó perfecta","text-body":"Ahora sube tus certificados para poder emitir facturas.","card-img":e.$utils.alertImages.Perfect,alt:"Tu factura quedó perfecta"},on:{click:e.nextPage}}):e._e(),e.showUploadCSDSummary?a("GxModal",{attrs:{alt:"modal"}},[a("div",{staticClass:"flex-grow items-center flex flex-col w-108 rounded-lg px-12 py-8 shadow-2 bg-white"},[a("img",{staticClass:"mb-8",attrs:{src:e.$utils.alertImages.Do,width:"176",height:"176",alt:"alt"}}),a("h1",{staticClass:"gx-h4 font-bold text-center mb-8"},[e._v("Sube el Certificado de Sello Digital (CSD)")]),a("p",[e._v("El CSD es un archivo digital emitido por el SAT que se usa únicamente para facturar. Recuerda que es diferente a la Fiel. "),a("GxButtonCircle",{staticClass:"text-white",attrs:{transparent:"",icon:"help",label:"¿Qué es un certificado de sello digital y de dónde lo obtengo?"},on:{click:e.openInfo}})],1),a("p",{staticClass:"my-4 self-start"},[e._v("El CSD está compuesto de tres elementos:")]),a("ol",{staticClass:"px-2 mb-2 self-start"},[a("li",{staticClass:"mb-4"},[e._v("1. Certificado de seguridad (archivo .cer)")]),a("li",{staticClass:"mb-4"},[e._v("2. Llave privada (archivo .key)")]),a("li",[e._v("3. Contraseña de la llave privada")])]),a("div",{staticClass:"flex flex-col items-center"},[a("p",{staticClass:"de:gx-caption mb-8"},[e._v("Tu información está protegida. "),a("GxTextLink",{attrs:{"target-blank":"",to:{name:"privacypolicy"}}},[e._v("Conoce cómo.")])],1),a("GxButton",{staticClass:"mx-auto mt-2",on:{click:function(t){return e.$router.push({name:"howtouploadcsd"})}}},[e._v("Continuar")]),a("GxTextLink",{staticClass:"text-center de:gx-caption",on:{click:e.onShowSkipCSDAlert}},[e._v("Hacerlo después")])],1)])]):e._e(),e.showSkipCSDAlert?a("GxCardModal",{key:"CasdModal",attrs:{headline:"¿No tienes los certificados?","text-body":"Recibe un correo electrónico para que nos respondas con tus archivos y nosotros nos encargaremos del resto.","card-img":e.$utils.alertImages.Khaaa,alt:"¿No tienes los certificados?"},scopedSlots:e._u([{key:"actions",fn:function(){return[a("div",{staticClass:"flex justify-center de:mt-8"},[a("GxButton",{staticClass:"mr-4",attrs:{ghost:""},on:{click:function(t){return e.$router.push({name:"dashboard"})}}},[e._v("salir")]),a("GxButton",{attrs:{loading:e.loading},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.sendEmail(t)}}},[e._v("Recibir mail")])],1)]},proxy:!0}],null,!1,2077656641)}):e._e(),e.customError?a("GxCardModal",{key:"ErrorModal",attrs:{headline:e.customError,"card-img":e.$utils.alertImages.Oops,alt:"Comprueba que tu información esté correcta y que sean archivos de tu CSD","text-body":"Comprueba que tu información esté correcta y que sean archivos de tu CSD."},on:{click:function(t){e.customError=!e.customError}}}):e._e()],1),a("MqLayout",{staticClass:"flex-grow  w-full flex flex-col items-center  relative overflow-x-scroll",attrs:{mq:"mo"}},[e.pdfFile?a("GxPDFViewer",{staticClass:"mt-4 w-full",attrs:{blob:e.pdfFile}}):e._e(),a("GxFab",{staticClass:"gxFab",attrs:{icon:"save","data-testid":"gxiconsaveinvoice",label:"Guardar"},on:{click:e.onSave}}),e.showSavedInvoiceAlert?a("GxCardModal",{attrs:{headline:"Tu factura quedó perfecta","text-body":"Ahora sube tus certificados para poder emitir facturas.","card-img":e.$utils.alertImages.Perfect,alt:"Tu factura quedó perfecta"},on:{click:e.nextPage}}):e._e()],1)],1)},s=[],c=a("3835"),l=a("8785"),u=(a("96cf"),a("1da1")),d=a("0d9e"),m=a("4847"),f=a("524e"),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"iframeWrapper",staticClass:"flex flex-col flex-grow"},[a("iframe",{attrs:{src:"/pdfviewer/web/viewer.html?file=",frameborder:"0"}})])},p=[],b=(a("c19f"),a("ace4"),a("d3b7"),a("5cc6"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a"),a("72f7"),{name:"GxPDFViewer",props:{blob:{type:String,required:!0}},computed:{uint8Array:function(){return this.blob?this.base64ToUint8Array(this.blob):null}},created:function(){localStorage.removeItem("pdfjs.history")},mounted:function(){this.renderPDF()},methods:{renderPDF:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:document.querySelector("iframe").contentWindow&&document.querySelector("iframe").contentWindow.PDFViewerApplication?(a=document.querySelector("iframe").contentWindow.PDFViewerApplication.open(e.uint8Array),window.alpha=a,e.adjustViewerHeight()):setTimeout((function(){e.renderPDF()}),100);case 1:case"end":return t.stop()}}),t)})))()},adjustViewerHeight:function(){var e=this;if(document.querySelector("iframe").contentDocument.querySelector("#viewer").clientHeight>0){var t=document.querySelector("iframe").contentDocument.querySelector("#viewer").clientHeight,a=document.querySelector("iframe").contentWindow.PDFViewerApplication.pagesCount;document.querySelector("iframe").style.height="".concat(t+50*a,"px")}else setTimeout((function(){e.adjustViewerHeight()}),100)},base64ToUint8Array:function(e){for(var t=atob(e),a=new Uint8Array(new ArrayBuffer(t.length)),r=0;r<t.length;r++)a[r]=t.charCodeAt(r);return a}}}),g=b,x=(a("aa94"),a("2877")),y=Object(x["a"])(g,h,p,!1,null,null,null),v=y.exports,w=a("9b02"),C=a.n(w),S=a("0ae0"),k=a("4c6a"),_=a("9530"),B=a.n(_);function D(){var e=Object(l["a"])(["\n          {\n            myAccount {\n              companies {\n                company {\n                  companyNumber\n                }\n              }\n            }\n          }\n        "]);return D=function(){return e},e}var P={name:"InvoicePreview",components:{GxCardModal:d["a"],GxIcon:f["a"],GxModal:m["a"],GxPDFViewer:v},apollo:{company:k["LOCAL_COMPANY"],clients:{query:function(){return k["CLIENTS_SHORT_QUERY"]},fetchPolicy:"cache-and-network",variables:function(){return{companyNumber:this.company.number}},update:function(e){return e.myAccount.companies[0].company.clients},skip:function(){return!this.company}}},data:function(){return{showSavedInvoiceAlert:!1,savedInvoiceAlertImg:a("cb3a"),successTimeout:null,scale:.5,initialScale:0,invoiceData:null,showUploadCSDSummary:!1,summaryImg:a("d289"),alertImg:this.$utils.alertImages.retencion_de_usuario,showButton:!1,showSkipCSDAlert:!1,customError:null,loading:!1,rendering:!1,pdfFile:null}},computed:{},watch:{clients:function(e){var t=this;e&&e.list&&e.list[0]&&this.getInvoiceBase64().then((function(e){t.pdfFile=e}))}},methods:{nextPage:function(){this.$router.push({name:"howtouploadcsd"})},getInvoiceBase64:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={clientId:e.clients.list[0].clientId,date:"2019-12-17T06:00:00.000Z",expectedPaymentMethod:"PUE",expectedPaymentMethodDescription:"Pago en una sola exhibición",expectedPaymentForm:{code:"03",paymentType:"Transferencia electrónica de fondos",usesBank:!0},saleAdditionalDataLocalizedInput_MEX:{usoCfdi:"G03"},items:[{itemReferenceId:"E411016A-24B2-48D4-BC26-E8367A0C3FE1",description:"Concepto 1",additionalNotes:"",key:"A",quantity:"1",unit:" Contenedores de veinte pies",unitBasePrice:"32",currency:"MXN",discountPercentage:"0",discountAmount:"0",discountDescription:"",unitPriceWithDiscounts:"32",unitTotalPrice:"37.12",subtotalAmount:"32",totalAmount:"37.12",position:1,itemAdditionalDataLocalizedInput_MEX:{claveProductoServicioSAT:"60102401",claveProductoServicioSATDescripcion:"Abacos",claveUnidadMedidaSAT:"20"},transferredTaxesPerUnit:[{rate:"16",amount:"5.12",taxName:"IVA",code:"IVA",isFreeTax:!1}],withheldTaxesPerUnit:[]}],discountPercentage:"0",discountAmount:"0",subtotal:"32",totalTransferredTaxes:"5.12",totalWithheldTaxes:"0",total:"37.12",currency:"MXN",exchangeRate:"1",status:"draft",paymentStatus:"fullyPaid",expectedPaymentSchedule:[],receivedPayments:[{date:"2019-12-17T06:00:00.000Z",amountPaidToThisSale:"37.12"}],incomeCategoryId:"69470585-9402-41E8-859C-613914EFBCE5",internalNotes:"",externalNotes:""},t.next=3,e.$apollo.mutate({mutation:S["PREVIEW_SALE"],variables:{companyNumber:e.company.number,branchNumber:e.company.branchNumber,data:a}});case 3:return r=t.sent,e.showButton=!0,t.abrupt("return",r.data.saleInvoicePreviewCreate.saleInvoicePreviewFile);case 6:case"end":return t.stop()}}),t)})))()},getCompanyNumber:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var a,r,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$apollo.query({query:B()(D())});case 2:return a=t.sent,r=a.data,n=Object(c["a"])(r.myAccount.companies,1),o=n[0],t.abrupt("return",o.company.companyNumber);case 6:case"end":return t.stop()}}),t)})))()},onSave:function(){var e=this;this.showSavedInvoiceAlert=!0,this.successTimeout=setTimeout((function(){e.nextPage()}),3e3)},onShowSkipCSDAlert:function(){this.showUploadCSDSummary=!1,this.showSkipCSDAlert=!0},goBack:function(){this.$router.back()},openInfo:function(){window.open("http://ayuda.gestionix.com/es/articles/439200-que-es-un-certificado-de-sello-digital-y-de-donde-lo-obtengo","_blank")},sendEmail:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.loading=!0,t.next=4,e.$apollo.mutate({mutation:S["SEND_EMAIL_UPLOAD_CSD"],variables:{companyNumber:e.company.number}});case 4:e.loading=!1,e.$router.push({name:"dashboard"}),t.next=15;break;case 8:t.prev=8,t.t0=t["catch"](0),e.loading=!1,e.showSkipCSDAlert=!1,e.customError=C()(t.t0,"response.data.message","Hubo un error"),a=setTimeout((function(){e.customError=null}),3e3),e.$once("hook:destroyed",(function(){clearTimeout(a)}));case 15:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}},T=P,A=(a("a48d"),Object(x["a"])(T,i,s,!1,null,"19b23dd9",null)),I=A.exports,q={page:{title:"Venta - Borrador de factura",meta:[{name:"description",content:"Venta - Borrador de factura"}]},components:{LayoutWebMobile:o["a"],InvoicePreview:I},methods:{goBack:function(){this.$router.back()}}},G=q,R=Object(x["a"])(G,r,n,!1,null,null,null);t["default"]=R.exports},f320:function(e,t,a){"use strict";var r=a("597e"),n=a.n(r);n.a}}]);
//# sourceMappingURL=chunk-6fca039a-legacy.68c5ea13.js.map