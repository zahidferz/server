(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30652a5e"],{"0f36":function(t,e,a){t.exports={"bullet-list":"GxBulletList_bullet-list_36MTu"}},"42b5":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return"mo"===t.$mq?a("MqLayout",{key:"layout",staticClass:"flex flex-col bg-white",attrs:{id:"layout",mq:"mo"}},[a("header",{key:"topbar-container",staticClass:"sticky top-0 z-20 bg-white top-bar",class:{"shadow-5":t.tabs,"shadow-3":t.hasScrolled}},[a("transition",{key:"default-transition",attrs:{name:"input-fade",mode:"out-in"},on:{"after-enter":t.focusMobileSearch}},[t.mobileSearch?a("nav",{key:"search-container",staticClass:"flex items-center p-4 h-14 justify-left gx-h5",class:[t.onSearchClasses]},[a("button",{staticClass:"flex items-center mr-4 leading-none focus:outline-none"},[a("GxIcon",{attrs:{icon:"close"},on:{click:function(e){return e.stopPropagation(),t.cancelMobileSearch(e)}}})],1),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.search,expression:"search",modifiers:{trim:!0}}],ref:"mobileSearch",staticClass:"w-full leading-none bg-transparent focus:outline-none gxMobileSearchInput",class:t.placeholderColor,attrs:{placeholder:t.placeholder,autofocus:"",type:"search"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]):a("nav",{key:"default-topbar",staticClass:"flex justify-start w-full p-4 h-14 items-bottom"},[!t.mobileSearch&&t.breadcrumb?a("GxBreadcrumb",{key:"GxBreadcrumb",attrs:{classes:t.hasScrolled?t.breadcrumbClassesWithScroll:t.breadcrumbClassesWithoutScroll,"has-scrolled":t.hasScrolled}},[a("h1",{staticClass:"font-bold gx-h5"},[t._v(t._s(t.title))])]):t._e(),t.mobileSearch||t.breadcrumb?t._e():a("h1",{key:"title-container",staticClass:"flex items-center font-bold justy-left items-bottom gx-h5"},[t.iconClickHandler?a("GxIcon",{staticClass:"mr-4",class:[t.iconClasses],staticStyle:{"font-size":"20px"},attrs:{icon:t.icon,"html-tag":"button"},on:{click:function(e){return e.stopPropagation(),t.iconClickHandler(e)}}}):t.hasDrawer&&!t.iconClickHandler?a("GxIcon",{staticClass:"mr-4",class:[t.iconClasses],staticStyle:{"font-size":"20px"},attrs:{icon:t.icon,"html-tag":"button"},on:{click:function(e){e.stopPropagation(),t.drawerLeft=!t.drawerLeft}}}):a("GxIcon",{staticClass:"mr-4",class:[t.iconClasses],staticStyle:{"font-size":"20px"},attrs:{icon:t.icon}}),t._t("title",[a("span",[t._v(" "+t._s(t.title)+" ")])])],2),a("div",{key:"right-icons",staticClass:"flex items-center ml-auto gx-h5"},[t._t("topbar-right"),t.hasSearch?a("GxIcon",{key:"search-icon",staticClass:"leading-none icon-button focus:outline-none",attrs:{"html-tag":"button",icon:"search"},on:{click:function(e){t.mobileSearch=!0}}}):t._e(),t.hasDrawerRight?a("GxIcon",{key:"right-drawer",staticClass:"ml-4 leading-none icon-button",attrs:{"html-tag":"button",icon:"more_vert"},on:{click:function(e){t.drawerRight=!t.drawerRight}}}):t._e()],2)],1)]),t._t("header2"),t.tabs?a("div",{key:"tabs-container"},[t._t("tabs")],2):t._e()],2),t.hasDrawer?a("TopBarLeftDrawer",{key:"TopBarLeftDrawer",attrs:{open:t.drawerLeft,"a-drawer-open":t.drawerOPen},on:{open:function(e){t.drawerOPen=!0},close:function(e){return t.onCloseDrawer("drawerLeft")}}}):t._e(),t.hasDrawerRight?a("TopBarRightDrawer",{key:"TopBarRightDrawer",attrs:{open:t.drawerRight,"a-drawer-open":t.drawerOPen},on:{open:function(e){t.drawerOPen=!0},close:function(e){return t.onCloseDrawer("drawerRight")}}}):t._e(),a("div",{staticClass:"flex flex-col flex-grow",class:{"gx-padding-menu pb-14":t.withPaddingBottom},attrs:{id:"mobileMainContent"}},[t._t("default",null,null,{hasScrolled:t.hasScrolled,search:t.search})],2)],1):a("div",{staticClass:"flex flex-col flex-grow",class:{"pb-4":t.withPaddingBottom}},[t._t("default")],2)},o=[],s=(a("caad"),a("ac1f"),a("2532"),a("5319"),a("841c"),a("524e")),n=a("f21d"),i=a("6f0d"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"flex-grow flex justify-start"},[a("RouterLink",{staticClass:"flex justify-start items-center gx-h5",attrs:{tag:"li",to:{name:"dashboard"}}},[a("GxIcon",{class:[t.classes.icon],attrs:{icon:"dashboard"}}),a("GxIcon",{staticClass:"gxNext mx-1",class:[t.classes.next],attrs:{icon:"navigate_next"}})],1),t._l(t.matchedRoutes,(function(e,r){return a("RouterLink",{key:e.name,staticClass:"flex justify-start items-center  gx-h5",attrs:{tag:"li",to:{name:e.name}}},[e.meta.icon?[a("GxIcon",{class:[e.name===t.$route.name||e.redirect.name===t.$route.name?t.classes.active:t.classes.icon],attrs:{icon:e.meta.icon}}),r!==t.matchedRoutes.length-1&&t.matchedRoutes[r+1].meta.icon?a("GxIcon",{staticClass:"mx-1  gxNext",class:[t.classes.next],attrs:{icon:"navigate_next"}}):t._e()]:t._e()],2)})),a("div",{staticClass:"ml-4 title"},[t._t("default")],2)],2)},c=[],u=(a("fb6a"),{name:"GxBreadcrumb",components:{GxIcon:s["a"]},props:{hasScrolled:{type:Boolean,default:!1},classes:{type:Object,default:null}},computed:{matchedRoutes:function(){return this.$route.matched.slice(1)}}}),d=u,h=(a("8e44"),a("2877")),m=Object(h["a"])(d,l,c,!1,null,"3157a3f7",null),f=m.exports,p={name:"LayoutWebMobile",components:{TopBarLeftDrawer:n["a"],TopBarRightDrawer:i["a"],GxBreadcrumb:f,GxIcon:s["a"]},props:{dark:{type:Boolean,default:!1},breadcrumb:{type:Boolean,default:!1},hasSearch:{type:Boolean,default:!1},onSearchClasses:{type:String,default:"text-black"},placeholder:{type:String,default:"Buscar"},hasDrawer:{type:Boolean,default:!1},hasDrawerRight:{type:Boolean,default:!1},hasStickyElement:{type:Boolean,default:!1},title:{type:String,default:null},icon:{type:String,default:""},iconClassWithoutScroll:{type:String,default:"text-black"},iconClassWithScroll:{type:String,default:"text-black"},topBarClassWithScroll:{type:String,default:""},topBarClassWithoutScroll:{type:String,default:"text-black bg-white"},iconClickHandler:{type:Function,default:null},iconRight:{type:String,default:null},iconRightClickHandler:{type:Function,default:null},withPaddingBottom:{type:Boolean,default:!0},noHorizontalPadding:{type:Boolean,default:!1},tabs:{type:Boolean,default:!1},breadcrumbClassesWithScroll:{type:Object,default:function(){return{icon:"text-gray-700",next:"text-black",active:"text-primary"}}},breadcrumbClassesWithoutScroll:{type:Object,default:function(){return{icon:"text-gray-700",next:"text-black",active:"text-primary"}}},searchTerm:{type:String,default:""}},data:function(){return{hasScrolled:!1,activeDeskTopBarMenu:null,drawerLeft:!1,mobileSearch:!1,drawerRight:!1,customTopBar:!1,drawerOPen:!1,search:""}},computed:{hasTopBar:function(){return this.title||this.icon||this.iconRight||this.hasDrawer},iconClasses:function(){return this.hasScrolled?this.iconClassWithScroll:this.iconClassWithoutScroll},topBarClasses:function(){return this.hasScrolled?(this.topBarClassWithScroll.includes("bg-"),this.topBarClassWithScroll):this.topBarClassWithoutScroll?this.topBarClassWithoutScroll:""},placeholderColor:function(){return"bg-primary-500 text-white"===this.onSearchClasses?"placeholder-bg-dark":"placeholder-bg-white"}},watch:{search:function(t){"mo"===this.$mq&&this.$emit("search",t)}},reactiveProvide:{name:"topBarSearch",include:["search"]},mounted:function(){var t=this;this.$route.query.searchTerm&&this.hasSearch&&this.setMobileSearch(this.$route.query.searchTerm),this.$route.query.drawerRight&&this.$nextTick((function(){t.drawerRight=!0;var e=Object.assign({},t.$route.query);delete e.drawerRight,t.$router.replace({query:e})}));var e=0,a=!1;"de"===this.$mq?document.getElementById("gxDeMain")&&document.getElementById("gxDeMain").addEventListener("scroll",(function(r){e=r.target.scrollTop,a||(window.requestAnimationFrame((function(){t.hasScrolled=e>0,a=!1})),a=!0)})):window.addEventListener("scroll",(function(r){e=window.scrollY,a||(window.requestAnimationFrame((function(){t.hasScrolled=e>0,a=!1})),a=!0)}))},created:function(){this.searchTerm&&(this.search=this.searchTerm,this.mobileSearch=!0)},methods:{onCloseDrawer:function(t){this[t]=!1,this.drawerOPen=!1},cancelMobileSearch:function(){this.search="",this.mobileSearch=!1},focusMobileSearch:function(){this.$refs.mobileSearch&&this.$refs.mobileSearch.focus()},onActiveMenu:function(t){this.activeDeskTopBarMenu=t},showCustomTopBar:function(){this.customTopBar=!0},hideCustomTopBar:function(){this.customTopBar=!1},setMobileSearch:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.search=t,this.mobileSearch=!0}}},b=p,g=(a("f320"),Object(h["a"])(b,r,o,!1,null,"f3d6798e",null));e["a"]=g.exports},"50bf":function(t,e,a){},"597e":function(t,e,a){},"73ac":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("LayoutWebMobile",{attrs:{icon:"keyboard_backspace","icon-click-handler":t.goBack,title:"Subir el CSD"}},[a("UploadCSDSummary")],1)},o=[],s=a("42b5"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex-grow flex flex-col p-4 pt-0",class:{"pt-0":"mo"===t.$mq}},[a("img",{staticClass:"self-center",attrs:{src:t.$utils.alertImages.Do,width:"176",heigth:"176",alt:"Sube tus certificados"}}),a("h1",{staticClass:"gx-h3 text-center"},[t._v("Sube el Certificado de Sello Digital (CSD)")]),a("p",{staticClass:"my-8"},[t._v(" El CSD es un archivo digital emitido por el SAT que se usa únicamente para facturar. Recuerda que es diferente a la Fiel. ")]),a("p",{staticClass:"mb-4"},[t._v(" El CSD está compuesto de tres elementos: ")]),a("GxBulletList",{staticClass:"mb-8",attrs:{inputs:[{label:"1. Certificado de seguridad (archivo .cer)"},{label:"2. Llave privada (archivo .key)"},{label:"3. Contraseña de la llave privada"}]}}),a("p",{staticClass:"mb-4 text-center gx-caption"},[t._v(" Tu información está protegida. "),a("GxTextLink",{attrs:{"target-blank":"",to:{name:"privacypolicy",query:{initialTab:2}}}},[t._v("Conoce cómo.")])],1),a("GxButton",{staticClass:"mx-auto",attrs:{to:{name:"howtouploadcsd"}}},[t._v("Continuar")]),a("GxTextLink",{staticClass:"text-center gx-caption text-secondary",on:{click:function(e){e.stopPropagation(),t.showSkipCerAlert=!t.showSkipCerAlert}}},[t._v("Hacerlo después")]),t.showSkipCerAlert?a("GxCardModal",{attrs:{headline:"¿No tienes los certificados?","text-body":"Recibe un correo electrónico para que nos respondas con tus archivos y nosotros nos encargaremos del resto.","card-img":"mo"===t.$mq?t.$utils.alertImages.Khaaa:t.$utils.alertImages.Dissapointed,alt:"¿No tienes los certificados?",loading:t.cardloading},on:{close:t.closeSkipAlert},scopedSlots:t._u([{key:"actions",fn:function(){return[a("div",{staticClass:"flex self-end de:mt-8"},[a("GxButton",{staticClass:"de:text-white de:border-white text-alert mr-4",attrs:{plain:"mo"===t.$mq,ghost:"de"===t.$mq},on:{click:t.closeSkipAlert}},[t._v("salir")]),a("GxButton",{attrs:{plain:"mo"===t.$mq,dark:"de"===t.$mq},on:{click:t.sendEmail}},[t._v("Recibir mail")])],1)]},proxy:!0}],null,!1,3146837294)}):t._e(),t.customError?a("GxCardModal",{attrs:{headline:"Hubo un error","card-img":t.$utils.alertImages.Oops,alt:"Comprueba que tu información esté correcta y que sean archivos de tu CSD","text-body":t.customError},on:{click:function(e){t.customError=!t.customError}}}):t._e()],1)},i=[],l=(a("96cf"),a("1da1")),c=a("8785"),u=a("f58e"),d=a("0d9e"),h=a("0ae0"),m=a("9530"),f=a.n(m);function p(){var t=Object(c["a"])(["\n      {\n        myAccount {\n          userNumber\n          companies {\n            company {\n              companyNumber\n            }\n          }\n        }\n      }\n    "]);return p=function(){return t},t}var b={name:"UploadCSDSummary",components:{GxBulletList:u["a"],GxCardModal:d["a"]},apollo:{myAccount:f()(p())},data:function(){return{customError:null,showSkipCerAlert:!1,loading:!1,cardloading:!1}},methods:{closeSkipAlert:function(){this.showSkipCerAlert=!1,this.$router.push({name:"dashboard"})},openInfo:function(){alert("need to implement")},sendEmail:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.cardloading=!0,e.next=4,t.$apollo.mutate({mutation:h["SEND_EMAIL_UPLOAD_CSD"],variables:{companyNumber:t.myAccount.companies[0].company.companyNumber}});case 4:t.cardloading=!1,t.$router.push({name:"dashboard"}),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),t.cardloading=!1,t.customError=t.$utils.parseServerError(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()},toDashboard:function(){this.$router.push({name:"dashboard"})}}},g=b,x=a("2877"),y=Object(x["a"])(g,n,i,!1,null,null,null),C=y.exports,S={page:{title:"Resumen de CSD",meta:[{name:"description",content:"Resumen de CSD"}]},components:{LayoutWebMobile:s["a"],UploadCSDSummary:C},methods:{goBack:function(){this.$router.gxAnim="slide-right",this.$router.back()}}},w=S,v=Object(x["a"])(w,r,o,!1,null,null,null);e["default"]=v.exports},"8e44":function(t,e,a){"use strict";var r=a("50bf"),o=a.n(r);o.a},c036:function(t,e,a){"use strict";var r=a("0f36"),o=a.n(r);e["default"]=o.a},f320:function(t,e,a){"use strict";var r=a("597e"),o=a.n(r);o.a},f58e:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.inputs,(function(e,r){return a("ol",{key:r},[a("li",{staticClass:"bullet-list",class:{"mb-4 de:mb-2":r!==t.inputs.length-1}},[t._v(t._s(e.label))])])})),0)},o=[],s={name:"GxBulletList",props:{inputs:{type:Array,required:!0}}},n=s,i=a("c036"),l=a("2877");function c(t){this["$style"]=i["default"].locals||i["default"]}var u=Object(l["a"])(n,r,o,!1,c,null,null);e["a"]=u.exports}}]);
//# sourceMappingURL=chunk-30652a5e-legacy.8b3d0160.js.map