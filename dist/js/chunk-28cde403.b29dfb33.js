(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28cde403"],{3982:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("LayoutWebMobile",{attrs:{"icon-class-without-scroll":"text-black","icon-click-handler":e.goBack,"has-drawer":"de"===e.$mq,icon:"keyboard_backspace","no-top-padding":"",title:"Actualizar mi información"}},[a("UploadateMyInfo")],1)},r=[],o=a("42b5"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex flex-col flex-grow"},[a("MqLayout",{staticClass:"flex",attrs:{mq:"de"}},["de"===e.$mq?a("GxDesktopHeader",{attrs:{header:"Actualizar mi información",icon:"keyboard_backspace","icon-click-handler":e.goBack}}):e._e()],1),a("div",{staticClass:"flex p-4 mt-4 de:p-8 de:mx-auto de:mt-32 de:p-4 de:shadow-3 de:relative de:rounded-lg de:w-108"},[a("GxForm",{staticClass:"flex flex-col flex-grow",on:{submit:e.onSubmit}},[e.initialDataSet?a("GxTextFieldName",{staticClass:"mb-4 de:mb-2",attrs:{label:"Nombre","left-icon":"face",required:"",autofocus:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}):e._e(),e.initialDataSet?a("GxTextFieldName",{staticClass:"mb-4 de:mb-2",attrs:{label:"Apellido","left-icon":"face",required:""},model:{value:e.lastname,callback:function(t){e.lastname=t},expression:"lastname"}}):e._e(),e.initialDataSet?a("GxTextFieldPhone",{attrs:{label:"Teléfono",required:""},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}):e._e(),a("div",{staticClass:"flex flex-col items-center justify-end flex-grow mx-auto"},[a("p",{staticClass:"h-4"},[e.customError?a("span",{staticClass:"text-alert"},[e._v(e._s(e.customError))]):e._e()]),a("GxButton",{staticClass:"mt-4",attrs:{loading:e.loading,type:"submit"}},[e._v(" Actualizar ")])],1)],1),e.showSuccessAlert?a("GxCardModal",{attrs:{headline:"Info actualizada","card-img":e.$utils.alertImages.Done,alt:"Imagen de éxito"},on:{click:e.closeSuccesModal,close:e.closeSuccesModal}}):e._e(),e.showErrorAlert?a("GxCardModal",{attrs:{headline:"Ops, algo salió mal. Inténtalo de nuevo.","card-img":e.$utils.alertImages.Oops,alt:"Ops, algo salió mal. Inténtalo de nuevo."},on:{close:function(t){e.showErrorAlert=!1}}}):e._e()],1)],1)},i=[],n=(a("e6cf"),a("5530")),c=a("0d9e"),u=a("9530"),h=a.n(u),d=a("0ae0"),m=a("4c6a"),f=a("3a1a");let p,b=e=>e;var g={name:"UpdateMyInfo",components:{GxCardModal:c["a"],GxDesktopHeader:f["a"]},apollo:{company:m["LOCAL_COMPANY"],myAccount:{query:h()(p||(p=b`
        {
          myAccount {
            firstName
            lastName
            mobilePhone
          }
        }
      `)),error(e){this.error=e.message}}},data(){return{company:null,name:"",phone:"",lastname:"",showSuccessAlert:!1,showErrorAlert:!1,successAlertImg:a("4e3b"),errorAlertImg:a("a0cc"),loading:!1,nameError:null,invalidName:!1,lastnameError:null,invalidLastname:!1,phoneError:null,invalidPhone:!1,customError:null,initialDataSet:!1,timeout:null}},watch:{myAccount:{handler:function(e){e&&this.setFormData(e)},immediate:!0},name(e){this.nameError=""},lastname(e){this.lastnameError=""},phone(e){this.phoneError=""}},methods:{setFormData(e){this.name=e.firstName,this.phone=e.mobilePhone,this.lastname=e.lastName,this.initialDataSet=!0},async onSubmit(){try{this.loading=!0,await this.$apollo.mutate({mutation:d["USER_UPDATE"],variables:{data:{firstName:this.name,lastName:this.lastname,mobilePhone:this.phone}},update:(e,{data:{userUpdate:{firstName:t,lastName:a,mobilePhone:s}}})=>{const r={query:m["COMPANY_INFO"],variables:{companyNumber:this.company.number}},o=e.readQuery(r);o.myAccount.firstName=t,o.myAccount.lastName=a,o.myAccount.mobilePhone=s,e.writeQuery(Object(n["a"])({},r,{data:o}))}}),this.loading=!1,this.showSuccessAlert=!0,this.timeout=setTimeout(()=>{this.closeSuccesModal()},3e3)}catch(e){this.loading=!1,this.customError=this.$utils.parseErrorServer(e),this.showErrorAlert=!0}},closeSuccesModal(){this.timeout&&clearTimeout(this.timeout),this.showSuccessAlert=!1,this.$router.push({name:"dashboard"})},goBack(){this.$router.gxAnim="slide-right",this.$router.back()}}},x=g,y=a("2877"),w=Object(y["a"])(x,l,i,!1,null,null,null),S=w.exports,C={page:{title:"Actualizar información",meta:[{name:"description",content:"Actualizar información"}]},components:{LayoutWebMobile:o["a"],UploadateMyInfo:S},methods:{goBack(){this.$router.push({name:"dashboard",query:{drawerRight:!0}})}}},k=C,v=Object(y["a"])(k,s,r,!1,null,null,null);t["default"]=v.exports},"3a1a":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"flex mb-4 items-center justify-between"},[e._t("left",[a("h1",{staticClass:"gx-h5 text-black font-bold flex items-center"},[e._t("left-icon",[e.back?a("button",{staticClass:"flex items-center",on:{click:e.goBack}},[a("GxIcon",{attrs:{icon:"keyboard_backspace"}})],1):e.iconClickHandler||e.back?a("button",{staticClass:"flex items-center",on:{click:e.goBack}},[a("GxIcon",{attrs:{icon:e.icon}})],1):e.icon?a("GxIcon",{staticClass:"text-primary",attrs:{icon:e.icon}}):e._e()]),a("span",{staticClass:"font-bold ml-2"},[e._v(e._s(e.header))])],2)]),e._t("right")],2)},r=[],o=a("524e"),l={name:"GxDesktopHeader",components:{GxIcon:o["a"]},props:{header:{type:String,default:""},icon:{type:String,default:""},iconClickHandler:{type:Function,default:null},back:{type:Boolean,default:!1}},methods:{goBack(){this.iconClickHandler?this.iconClickHandler():this.$router.back()}}},i=l,n=a("2877"),c=Object(n["a"])(i,s,r,!1,null,null,null);t["a"]=c.exports},"42b5":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return"mo"===e.$mq?a("MqLayout",{key:"layout",staticClass:"flex flex-col bg-white",attrs:{id:"layout",mq:"mo"}},[a("header",{key:"topbar-container",staticClass:"sticky top-0 z-20 bg-white top-bar",class:{"shadow-5":e.tabs,"shadow-3":e.hasScrolled}},[a("transition",{key:"default-transition",attrs:{name:"input-fade",mode:"out-in"},on:{"after-enter":e.focusMobileSearch}},[e.mobileSearch?a("nav",{key:"search-container",staticClass:"flex items-center p-4 h-14 justify-left gx-h5",class:[e.onSearchClasses]},[a("button",{staticClass:"flex items-center mr-4 leading-none focus:outline-none"},[a("GxIcon",{attrs:{icon:"close"},on:{click:function(t){return t.stopPropagation(),e.cancelMobileSearch(t)}}})],1),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.search,expression:"search",modifiers:{trim:!0}}],ref:"mobileSearch",staticClass:"w-full leading-none bg-transparent focus:outline-none gxMobileSearchInput",class:e.placeholderColor,attrs:{placeholder:e.placeholder,autofocus:"",type:"search"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]):a("nav",{key:"default-topbar",staticClass:"flex justify-start w-full p-4 h-14 items-bottom"},[!e.mobileSearch&&e.breadcrumb?a("GxBreadcrumb",{key:"GxBreadcrumb",attrs:{classes:e.hasScrolled?e.breadcrumbClassesWithScroll:e.breadcrumbClassesWithoutScroll,"has-scrolled":e.hasScrolled}},[a("h1",{staticClass:"font-bold gx-h5"},[e._v(e._s(e.title))])]):e._e(),e.mobileSearch||e.breadcrumb?e._e():a("h1",{key:"title-container",staticClass:"flex items-center font-bold justy-left items-bottom gx-h5"},[e.iconClickHandler?a("GxIcon",{staticClass:"mr-4",class:[e.iconClasses],staticStyle:{"font-size":"20px"},attrs:{icon:e.icon,"html-tag":"button"},on:{click:function(t){return t.stopPropagation(),e.iconClickHandler(t)}}}):e.hasDrawer&&!e.iconClickHandler?a("GxIcon",{staticClass:"mr-4",class:[e.iconClasses],staticStyle:{"font-size":"20px"},attrs:{icon:e.icon,"html-tag":"button"},on:{click:function(t){t.stopPropagation(),e.drawerLeft=!e.drawerLeft}}}):a("GxIcon",{staticClass:"mr-4",class:[e.iconClasses],staticStyle:{"font-size":"20px"},attrs:{icon:e.icon}}),e._t("title",[a("span",[e._v(" "+e._s(e.title)+" ")])])],2),a("div",{key:"right-icons",staticClass:"flex items-center ml-auto gx-h5"},[e._t("topbar-right"),e.hasSearch?a("GxIcon",{key:"search-icon",staticClass:"leading-none icon-button focus:outline-none",attrs:{"html-tag":"button",icon:"search"},on:{click:function(t){e.mobileSearch=!0}}}):e._e(),e.hasDrawerRight?a("GxIcon",{key:"right-drawer",staticClass:"ml-4 leading-none icon-button",attrs:{"html-tag":"button",icon:"more_vert"},on:{click:function(t){e.drawerRight=!e.drawerRight}}}):e._e()],2)],1)]),e._t("header2"),e.tabs?a("div",{key:"tabs-container"},[e._t("tabs")],2):e._e()],2),e.hasDrawer?a("TopBarLeftDrawer",{key:"TopBarLeftDrawer",attrs:{open:e.drawerLeft,"a-drawer-open":e.drawerOPen},on:{open:function(t){e.drawerOPen=!0},close:function(t){return e.onCloseDrawer("drawerLeft")}}}):e._e(),e.hasDrawerRight?a("TopBarRightDrawer",{key:"TopBarRightDrawer",attrs:{open:e.drawerRight,"a-drawer-open":e.drawerOPen},on:{open:function(t){e.drawerOPen=!0},close:function(t){return e.onCloseDrawer("drawerRight")}}}):e._e(),a("div",{staticClass:"flex flex-col flex-grow",class:{"gx-padding-menu pb-14":e.withPaddingBottom},attrs:{id:"mobileMainContent"}},[e._t("default",null,null,{hasScrolled:e.hasScrolled,search:e.search})],2)],1):a("div",{staticClass:"flex flex-col flex-grow",class:{"pb-4":e.withPaddingBottom}},[e._t("default")],2)},r=[],o=(a("cca6"),a("2532"),a("5319"),a("841c"),a("524e")),l=a("f21d"),i=a("6f0d"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"flex-grow flex justify-start"},[a("RouterLink",{staticClass:"flex justify-start items-center gx-h5",attrs:{tag:"li",to:{name:"dashboard"}}},[a("GxIcon",{class:[e.classes.icon],attrs:{icon:"dashboard"}}),a("GxIcon",{staticClass:"gxNext mx-1",class:[e.classes.next],attrs:{icon:"navigate_next"}})],1),e._l(e.matchedRoutes,(function(t,s){return a("RouterLink",{key:t.name,staticClass:"flex justify-start items-center  gx-h5",attrs:{tag:"li",to:{name:t.name}}},[t.meta.icon?[a("GxIcon",{class:[t.name===e.$route.name||t.redirect.name===e.$route.name?e.classes.active:e.classes.icon],attrs:{icon:t.meta.icon}}),s!==e.matchedRoutes.length-1&&e.matchedRoutes[s+1].meta.icon?a("GxIcon",{staticClass:"mx-1  gxNext",class:[e.classes.next],attrs:{icon:"navigate_next"}}):e._e()]:e._e()],2)})),a("div",{staticClass:"ml-4 title"},[e._t("default")],2)],2)},c=[],u=(a("fb6a"),{name:"GxBreadcrumb",components:{GxIcon:o["a"]},props:{hasScrolled:{type:Boolean,default:!1},classes:{type:Object,default:null}},computed:{matchedRoutes(){return this.$route.matched.slice(1)}}}),h=u,d=(a("8e44"),a("2877")),m=Object(d["a"])(h,n,c,!1,null,"3157a3f7",null),f=m.exports,p={name:"LayoutWebMobile",components:{TopBarLeftDrawer:l["a"],TopBarRightDrawer:i["a"],GxBreadcrumb:f,GxIcon:o["a"]},props:{dark:{type:Boolean,default:!1},breadcrumb:{type:Boolean,default:!1},hasSearch:{type:Boolean,default:!1},onSearchClasses:{type:String,default:"text-black"},placeholder:{type:String,default:"Buscar"},hasDrawer:{type:Boolean,default:!1},hasDrawerRight:{type:Boolean,default:!1},hasStickyElement:{type:Boolean,default:!1},title:{type:String,default:null},icon:{type:String,default:""},iconClassWithoutScroll:{type:String,default:"text-black"},iconClassWithScroll:{type:String,default:"text-black"},topBarClassWithScroll:{type:String,default:""},topBarClassWithoutScroll:{type:String,default:"text-black bg-white"},iconClickHandler:{type:Function,default:null},iconRight:{type:String,default:null},iconRightClickHandler:{type:Function,default:null},withPaddingBottom:{type:Boolean,default:!0},noHorizontalPadding:{type:Boolean,default:!1},tabs:{type:Boolean,default:!1},breadcrumbClassesWithScroll:{type:Object,default:()=>({icon:"text-gray-700",next:"text-black",active:"text-primary"})},breadcrumbClassesWithoutScroll:{type:Object,default:()=>({icon:"text-gray-700",next:"text-black",active:"text-primary"})},searchTerm:{type:String,default:""}},data(){return{hasScrolled:!1,activeDeskTopBarMenu:null,drawerLeft:!1,mobileSearch:!1,drawerRight:!1,customTopBar:!1,drawerOPen:!1,search:""}},computed:{hasTopBar(){return this.title||this.icon||this.iconRight||this.hasDrawer},iconClasses(){return this.hasScrolled?this.iconClassWithScroll:this.iconClassWithoutScroll},topBarClasses(){return this.hasScrolled?(this.topBarClassWithScroll.includes("bg-"),this.topBarClassWithScroll):this.topBarClassWithoutScroll?this.topBarClassWithoutScroll:""},placeholderColor(){return"bg-primary-500 text-white"===this.onSearchClasses?"placeholder-bg-dark":"placeholder-bg-white"}},watch:{search(e){"mo"===this.$mq&&this.$emit("search",e)}},reactiveProvide:{name:"topBarSearch",include:["search"]},mounted(){this.$route.query.searchTerm&&this.hasSearch&&this.setMobileSearch(this.$route.query.searchTerm),this.$route.query.drawerRight&&this.$nextTick(()=>{this.drawerRight=!0;let e=Object.assign({},this.$route.query);delete e.drawerRight,this.$router.replace({query:e})});let e=0,t=!1;"de"===this.$mq?document.getElementById("gxDeMain")&&document.getElementById("gxDeMain").addEventListener("scroll",a=>{e=a.target.scrollTop,t||(window.requestAnimationFrame(()=>{this.hasScrolled=e>0,t=!1}),t=!0)}):window.addEventListener("scroll",a=>{e=window.scrollY,t||(window.requestAnimationFrame(()=>{this.hasScrolled=e>0,t=!1}),t=!0)})},created(){this.searchTerm&&(this.search=this.searchTerm,this.mobileSearch=!0)},methods:{onCloseDrawer(e){this[e]=!1,this.drawerOPen=!1},cancelMobileSearch(){this.search="",this.mobileSearch=!1},focusMobileSearch(){this.$refs.mobileSearch&&this.$refs.mobileSearch.focus()},onActiveMenu(e){this.activeDeskTopBarMenu=e},showCustomTopBar(){this.customTopBar=!0},hideCustomTopBar(){this.customTopBar=!1},setMobileSearch(e=""){this.search=e,this.mobileSearch=!0}}},b=p,g=(a("f320"),Object(d["a"])(b,s,r,!1,null,"f3d6798e",null));t["a"]=g.exports},"4e3b":function(e,t,a){e.exports=a.p+"img/mo_001_6_exitousuario.28d06cde.svg"},"50bf":function(e,t,a){},"597e":function(e,t,a){},"60da":function(e,t,a){"use strict";var s=a("83ab"),r=a("d039"),o=a("df75"),l=a("7418"),i=a("d1e7"),n=a("7b0b"),c=a("44ad"),u=Object.assign,h=Object.defineProperty;e.exports=!u||r((function(){if(s&&1!==u({b:1},u(h({},"a",{enumerable:!0,get:function(){h(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},a=Symbol(),r="abcdefghijklmnopqrst";return e[a]=7,r.split("").forEach((function(e){t[e]=e})),7!=u({},e)[a]||o(u({},t)).join("")!=r}))?function(e,t){var a=n(e),r=arguments.length,u=1,h=l.f,d=i.f;while(r>u){var m,f=c(arguments[u++]),p=h?o(f).concat(h(f)):o(f),b=p.length,g=0;while(b>g)m=p[g++],s&&!d.call(f,m)||(a[m]=f[m])}return a}:u},"8e44":function(e,t,a){"use strict";var s=a("50bf"),r=a.n(s);r.a},a0cc:function(e,t,a){e.exports=a.p+"img/De_errorplataforma.03309574.svg"},cca6:function(e,t,a){var s=a("23e7"),r=a("60da");s({target:"Object",stat:!0,forced:Object.assign!==r},{assign:r})},f320:function(e,t,a){"use strict";var s=a("597e"),r=a.n(s);r.a}}]);
//# sourceMappingURL=chunk-28cde403.b29dfb33.js.map