(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-716fd9aa"],{"3a1a":function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"flex mb-4 items-center justify-between"},[e._t("left",[a("h1",{staticClass:"gx-h5 text-black font-bold flex items-center"},[e._t("left-icon",[e.back?a("button",{staticClass:"flex items-center",on:{click:e.goBack}},[a("GxIcon",{attrs:{icon:"keyboard_backspace"}})],1):e.iconClickHandler||e.back?a("button",{staticClass:"flex items-center",on:{click:e.goBack}},[a("GxIcon",{attrs:{icon:e.icon}})],1):e.icon?a("GxIcon",{staticClass:"text-primary",attrs:{icon:e.icon}}):e._e()]),a("span",{staticClass:"font-bold ml-2"},[e._v(e._s(e.header))])],2)]),e._t("right")],2)},r=[],s=a("524e"),i={name:"GxDesktopHeader",components:{GxIcon:s["a"]},props:{header:{type:String,default:""},icon:{type:String,default:""},iconClickHandler:{type:Function,default:null},back:{type:Boolean,default:!1}},methods:{goBack(){this.iconClickHandler?this.iconClickHandler():this.$router.back()}}},n=i,c=a("2877"),l=Object(c["a"])(n,o,r,!1,null,null,null);t["a"]=l.exports},"4e3b":function(e,t,a){e.exports=a.p+"img/mo_001_6_exitousuario.28d06cde.svg"},"6d3a":function(e,t,a){},a62b:function(e,t,a){"use strict";var o=a("6d3a"),r=a.n(o);r.a},faa3:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("LayoutWebMobile",{attrs:{title:"Ajusta tu foto",icon:"keyboard_backspace","icon-click-handler":e.goBack}},[a("ResizeProfilePhoto",{attrs:{"image-src":e.imageSrc}})],1)},r=[],s=a("42b5"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return"mo"===e.$mq?a("div",{staticClass:"flex-grow flex flex-col items-center p-4"},[a("p",{staticClass:"mb-8 text-center"},[e._v("Esta fotografía aparecerá en tu perfil, podrás cambiarla cuando quieras. ")]),a("div",[e.imageSrc?a("VueCropper",{ref:"cropper",attrs:{src:e.imageSrc,alt:"Source Image","auto-crop-area":.5,"min-container-width":350,"min-container-height":350,background:!0,rotatable:!0,"check-orientation":!0,"img-style":{width:"350px",height:"350px"},"aspect-ratio":1,zoomable:!0,"crop-box-resizable":!1,"min-crop-box-width":250,"min-crop-box-height":250}}):e._e()],1),a("div",{staticClass:"mt-4",staticStyle:{"font-size":"2rem"}},[a("GxIcon",{attrs:{icon:"rotate_90_degrees_ccw"},on:{click:function(t){return e.$refs.cropper.rotate(-90)}}})],1),a("div",{staticClass:"flex-grow flex flex-col mt-8 items-center justify-end"},[a("GxButton",{attrs:{loading:e.loading},on:{click:e.onSave}},[e._v("Guardar")]),a("GxTextLink",{staticClass:"text-secondary-300 text-center",attrs:{to:{name:"uploadprofilephoto"}}},[e._v(" Elegir otra imagen ")])],1),e.showErrorAlert?a("GxCardModal",{attrs:{headline:"Ops, algo salió mal. Inténtalo de nuevo.","card-img":e.$utils.alertImages.Oops,alt:"Ops, algo salió mal. Inténtalo de nuevo."}}):e._e(),e.showSuccessAlert?a("GxCardModal",{attrs:{headline:"Foto actualizada","card-img":e.$utils.alertImages.Done,alt:"Foto actualizada"},on:{close:function(t){e.showSuccessAlert}}}):e._e()],1):a("div",{staticClass:"flex-grow flex flex-col items-center"},[a("GxDesktopHeader",{staticClass:"self-start",attrs:{icon:"keyboard_backspace",header:"Ajusta tu fotografía","icon-click-handler":e.goBack}}),a("p",{staticClass:"text-left mt-4 self-start mb-8"},[e._v("Esta fotografía aparecerá en tu perfil, podrás cambiarla cuando quieras. ")]),a("main",{staticClass:"flex-grow flex-col flex justify-center items-center"},[e.imageSrc?a("VueCropper",{ref:"cropper",attrs:{src:e.imageSrc,alt:"Source Image","auto-crop-area":.5,"min-container-width":350,"min-container-height":350,background:!0,rotatable:!0,"img-style":{width:"350px",height:"350px"},"aspect-ratio":1,zoomable:!1,"crop-box-resizable":!1,"min-crop-box-width":250,"min-crop-box-height":250}}):e._e(),a("div",{staticClass:"mt-4",staticStyle:{"font-size":"2rem"}},[a("GxIcon",{attrs:{icon:"rotate_90_degrees_ccw"},on:{click:function(t){return e.$refs.cropper.rotate(-90)}}})],1),a("div",{staticClass:"gx-controls mt-6 flex justify-start items-center"},[a("GxIcon",{staticClass:"mr-4 text-xl text-primary-600",attrs:{"html-tag":"button",icon:"remove_circle"},on:{click:function(t){return t.preventDefault(),e.deskZoomout(t)}}}),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.deskRange,expression:"deskRange",modifiers:{number:!0}}],staticClass:"w-full cursor-pointer gx-range",attrs:{id:"volume",type:"range",name:"volume",min:"0",step:"1",max:"100"},domProps:{value:e.deskRange},on:{input:e.scaleImage,__r:function(t){e.deskRange=e._n(t.target.value)},blur:function(t){return e.$forceUpdate()}}}),a("GxIcon",{staticClass:"ml-4 text-xl text-primary-600",attrs:{"html-tag":"button",icon:"add_circle"},on:{click:function(t){return t.preventDefault(),e.deskZoomin(t)}}})],1),a("div",{staticClass:"mt-8 text-center flex flex-col items-center"},[a("GxButton",{attrs:{loading:e.loading},on:{click:e.onSave}},[e._v("Guardar")]),a("GxTextLink",{staticClass:"text-secondary-300 text-center mt-2",attrs:{to:{name:"uploadprofilephoto"}}},[e._v(" Elegir otra imagen ")])],1)],1),e.showSuccessAlert?a("GxCardModal",{attrs:{headline:"Foto actualizada","card-img":e.$utils.alertImages.Done,alt:"Foto actualizada"},on:{close:function(t){e.showSuccessAlert}}}):e._e(),e.showErrorAlert?a("GxCardModal",{attrs:{headline:"Ops, algo salió mal. Inténtalo de nuevo.","card-img":e.$utils.alertImages.Oops,alt:"Ops, algo salió mal. Inténtalo de nuevo."}}):e._e()],1)},n=[],c=(a("e6cf"),a("1276"),a("5530")),l=a("95c3"),u=a.n(l),d=a("0d9e"),m=a("0ae0"),p=a("4c6a"),g=a("524e"),h=a("3a1a"),f=a("9b02"),x=a.n(f);const b={get:x.a};var k={name:"ResizeProfilePhoto",components:{GxCardModal:d["a"],VueCropper:u.a,GxIcon:g["a"],GxDesktopHeader:h["a"]},props:{imageSrc:{type:String,required:!0}},apollo:{company:p["LOCAL_COMPANY"],myAccount:{query:p["COMPANY_INFO"],variables(){return{companyNumber:this.company.number}},skip(){return!this.company}}},data(){return{file:null,company:null,croppedImage:null,customError:null,loading:!1,deskRange:50,showSuccessAlert:!1,showErrorAlert:!1,successAlertImg:a("4e3b")}},created(){this.imageSrc||this.$router.push({name:"uploadprofilephoto"})},methods:{goBack(){this.$router.push({name:"uploadprofilephoto"})},async croppedImageToBase64(){return new Promise((e,t)=>{this.$refs.cropper.getCroppedCanvas().toBlob(t=>{var a=new FileReader;a.readAsDataURL(t),a.onloadend=function(){var t=a.result;e(t)}})})},async onSave(){this.loading=!0;try{this.croppedImage=await this.croppedImageToBase64(),await this.$apollo.mutate({mutation:m["USER_UPDATE"],variables:{data:{image:this.croppedImage.split(",")[1]}},update:(e,{data:t})=>{const a={query:p["COMPANY_INFO"],variables:{companyNumber:this.company.number}},o=e.readQuery(a),r=t.userUpdate.image+"?"+(new Date).getTime();o.myAccount.image=r,e.writeQuery(Object(c["a"])({},a,{data:o})),console.log("Updated data with logo: ",r),this.$apollo.queries.myAccount.refetch()}}),this.loading=!1,this.showSuccessAlert=!0;const e=setTimeout(()=>{this.showSuccessAlert=!1,this.$router.push({name:"dashboard"})},3e3);this.$once("hook:destroyed",()=>{clearTimeout(e)})}catch(e){this.loading=!1,this.customError=b.get(e,"response.data.message","Hubo un error"),this.showErrorAlert=!0;const t=setTimeout(()=>{this.customError=null},3e3);this.$once("hook:destroyed",()=>{clearTimeout(t)})}},scaleImage(){const e=this.deskRange,t=e/50,a=this.$refs.cropper.scale;a(t)},deskZoomout(){this.deskRange>0&&(this.deskRange=this.deskRange-10,this.scaleImage())},deskZoomin(){this.deskRange<100&&(this.deskRange=this.deskRange+10,this.scaleImage())}}},v=k,_=(a("a62b"),a("2877")),y=Object(_["a"])(v,i,n,!1,null,null,null),C=y.exports,w={page:{title:"Foto de perfil",meta:[{name:"description",content:"Ajusta tu foto de perfil"}]},components:{LayoutWebMobile:s["a"],ResizeProfilePhoto:C},props:{imageSrc:{type:String,required:!0}},methods:{goBack(){this.$router.gxAnim="slide-right",this.$router.back()}}},I=w,S=Object(_["a"])(I,o,r,!1,null,null,null);t["default"]=S.exports}}]);
//# sourceMappingURL=chunk-716fd9aa.20d229f2.js.map