"use strict";(self["webpackChunkfirst_project"]=self["webpackChunkfirst_project"]||[]).push([[862],{8957:function(t,e,l){l.d(e,{Z:function(){return g}});var o=l(3396),a=l(7139),s=l(9242);const i={"aria-label":"Page navigation example"},r={class:"pagination justify-content-center"},d=(0,o._)("li",{class:"page-item"},[(0,o._)("a",{class:"page-link",href:"#","aria-label":"Previous"},[(0,o._)("span",{"aria-hidden":"true"},"«")])],-1),c=["onClick"],n=(0,o._)("li",{class:"page-item"},[(0,o._)("a",{class:"page-link",href:"#","aria-label":"Next"},[(0,o._)("span",{"aria-hidden":"true"},"»")])],-1);function u(t,e,l,u,p,m){return(0,o.wg)(),(0,o.iD)("nav",i,[(0,o._)("ul",r,[d,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.pages.total_pages,(t=>((0,o.wg)(),(0,o.iD)("li",{class:(0,a.C_)(["page-item",{active:t===l.pages.current_page}]),key:t},[(0,o._)("a",{class:"page-link",href:"#",onClick:(0,s.iM)((e=>m.updatePage(t)),["prevent"])},(0,a.zw)(t),9,c)],2)))),128)),n])])}var p={props:["pages"],methods:{updatePage(t){this.$emit("emit-pages",t)}}},m=l(89);const h=(0,m.Z)(p,[["render",u]]);var g=h},3862:function(t,e,l){l.r(e),l.d(e,{default:function(){return pt}});var o=l(3396),a=l(7139);const s={class:"text-end"},i={class:"table mt-5"},r=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",{width:"120"},"分類"),(0,o._)("th",null,"產品名稱"),(0,o._)("th",{width:"120"},"原價"),(0,o._)("th",{width:"120"},"售價"),(0,o._)("th",{width:"100"},"是否啟用"),(0,o._)("th",{width:"200"},"編輯")])],-1),d={class:"text-right"},c={class:"text-right"},n={key:0,class:"text-success"},u={key:1,class:"text-muted"},p={class:"btn-group"},m=["onClick"],h=["onClick"];function g(t,e,l,g,_,b){const f=(0,o.up)("Loading"),P=(0,o.up)("Pagination"),y=(0,o.up)("ProductModal"),v=(0,o.up)("DelModal");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(f,{active:_.isLoading},null,8,["active"]),(0,o._)("div",s,[(0,o._)("button",{class:"btn btn-primary mt-3",type:"button",onClick:e[0]||(e[0]=t=>b.openModal(!0))}," 增加一個產品 ")]),(0,o._)("table",i,[r,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(_.products,(e=>((0,o.wg)(),(0,o.iD)("tr",{key:e.id},[(0,o._)("td",null,(0,a.zw)(e.category),1),(0,o._)("td",null,(0,a.zw)(e.title),1),(0,o._)("td",d,(0,a.zw)(t.$filters.currency(e.origin_price)),1),(0,o._)("td",c,(0,a.zw)(t.$filters.currency(e.price)),1),(0,o._)("td",null,[e.is_enabled?((0,o.wg)(),(0,o.iD)("span",n,"啟用")):((0,o.wg)(),(0,o.iD)("span",u,"未啟用"))]),(0,o._)("td",null,[(0,o._)("div",p,[(0,o._)("button",{class:"btn btn-outline-primary btn-sm",onClick:t=>b.openModal(!1,e)},"編輯",8,m),(0,o._)("button",{class:"btn btn-outline-danger btn-sm",onClick:t=>b.openDelProductModal(e)},"刪除",8,h)])])])))),128))])]),(0,o.Wm)(P,{pages:_.pagination,onEmitPages:b.getProducts},null,8,["pages","onEmitPages"]),(0,o.Wm)(y,{ref:"productModal",product:_.tempProduct,onUpdateProduct:b.updateProduct},null,8,["product","onUpdateProduct"]),(0,o.Wm)(v,{item:_.tempProduct,ref:"delModal",onDelItem:b.delProduct},null,8,["item","onDelItem"])],64)}l(560);var _=l(9242);const b={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},f={class:"modal-dialog modal-xl",role:"document"},P={class:"modal-content border-0"},y=(0,o._)("div",{class:"modal-header bg-dark text-white"},[(0,o._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,o._)("span",null,"新增產品")]),(0,o._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),v={class:"modal-body"},w={class:"row"},k={class:"col-sm-4"},x={class:"mb-3"},M=(0,o._)("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),D={class:"mb-3"},U=(0,o._)("label",{for:"customFile",class:"form-label"},[(0,o.Uk)("或 上傳圖片 "),(0,o._)("i",{class:"fas fa-spinner fa-spin"})],-1),C=["src"],$={key:0,class:"mt-5"},V=["onUpdate:modelValue"],L=["onClick"],Z={key:0},j={class:"col-sm-8"},F={class:"mb-3"},z=(0,o._)("label",{for:"title",class:"form-label"},"標題",-1),H={class:"row gx-2"},I={class:"mb-3 col-md-6"},N=(0,o._)("label",{for:"category",class:"form-label"},"分類",-1),W={class:"mb-3 col-md-6"},Y=(0,o._)("label",{for:"price",class:"form-label"},"單位",-1),K={class:"row gx-2"},q={class:"mb-3 col-md-6"},E=(0,o._)("label",{for:"origin_price",class:"form-label"},"原價",-1),O={class:"mb-3 col-md-6"},A=(0,o._)("label",{for:"price",class:"form-label"},"售價",-1),B=(0,o._)("hr",null,null,-1),G={class:"mb-3"},J=(0,o._)("label",{for:"description",class:"form-label"},"產品描述",-1),Q={class:"mb-3"},R=(0,o._)("label",{for:"content",class:"form-label"},"說明內容",-1),S={class:"mb-3"},T={class:"form-check"},X=(0,o._)("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),tt={class:"modal-footer"},et=(0,o._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消",-1);function lt(t,e,l,a,s,i){return(0,o.wg)(),(0,o.iD)("div",b,[(0,o._)("div",f,[(0,o._)("div",P,[y,(0,o._)("div",v,[(0,o._)("div",w,[(0,o._)("div",k,[(0,o._)("div",x,[M,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"image",placeholder:"請輸入圖片連結","onUpdate:modelValue":e[0]||(e[0]=t=>s.tempProduct.imageUrl=t)},null,512),[[_.nr,s.tempProduct.imageUrl]])]),(0,o._)("div",D,[U,(0,o._)("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:e[1]||(e[1]=(...t)=>i.uploadFile&&i.uploadFile(...t))},null,544)]),(0,o._)("img",{class:"img-fluid",alt:"",src:s.tempProduct.imageUrl},null,8,C),s.tempProduct.images?((0,o.wg)(),(0,o.iD)("div",$,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.tempProduct.images,((t,e)=>((0,o.wg)(),(0,o.iD)("div",{class:"mb-3 input-group",key:e},[(0,o.wy)((0,o._)("input",{type:"url",class:"form-control form-control",placeholder:"請輸入連結","onUpdate:modelValue":t=>s.tempProduct.images[e]=t},null,8,V),[[_.nr,s.tempProduct.images[e]]]),(0,o._)("button",{type:"button",class:"btn btn-outline-danger",onClick:t=>s.tempProduct.images.splice(e,1)}," 移除 ",8,L)])))),128)),s.tempProduct.images[s.tempProduct.images.length-1]||!s.tempProduct.images.length?((0,o.wg)(),(0,o.iD)("div",Z,[(0,o._)("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[2]||(e[2]=t=>s.tempProduct.images.push(""))}," 新增圖片 ")])):(0,o.kq)("",!0)])):(0,o.kq)("",!0)]),(0,o._)("div",j,[(0,o._)("div",F,[z,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入標題","onUpdate:modelValue":e[3]||(e[3]=t=>s.tempProduct.title=t)},null,512),[[_.nr,s.tempProduct.title]])]),(0,o._)("div",H,[(0,o._)("div",I,[N,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"category",placeholder:"請輸入分類","onUpdate:modelValue":e[4]||(e[4]=t=>s.tempProduct.category=t)},null,512),[[_.nr,s.tempProduct.category]])]),(0,o._)("div",W,[Y,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"unit",placeholder:"請輸入單位","onUpdate:modelValue":e[5]||(e[5]=t=>s.tempProduct.unit=t)},null,512),[[_.nr,s.tempProduct.unit]])])]),(0,o._)("div",K,[(0,o._)("div",q,[E,(0,o.wy)((0,o._)("input",{type:"number",class:"form-control",id:"origin_price",placeholder:"請輸入原價","onUpdate:modelValue":e[6]||(e[6]=t=>s.tempProduct.origin_price=t)},null,512),[[_.nr,s.tempProduct.origin_price,void 0,{number:!0}]])]),(0,o._)("div",O,[A,(0,o.wy)((0,o._)("input",{type:"number",class:"form-control",id:"price",placeholder:"請輸入售價","onUpdate:modelValue":e[7]||(e[7]=t=>s.tempProduct.price=t)},null,512),[[_.nr,s.tempProduct.price,void 0,{number:!0}]])])]),B,(0,o._)("div",G,[J,(0,o.wy)((0,o._)("textarea",{type:"text",class:"form-control",id:"description",placeholder:"請輸入產品描述","onUpdate:modelValue":e[8]||(e[8]=t=>s.tempProduct.description=t)},null,512),[[_.nr,s.tempProduct.description]])]),(0,o._)("div",Q,[R,(0,o.wy)((0,o._)("textarea",{type:"text",class:"form-control",id:"content",placeholder:"請輸入產品說明內容","onUpdate:modelValue":e[9]||(e[9]=t=>s.tempProduct.content=t)},null,512),[[_.nr,s.tempProduct.content]])]),(0,o._)("div",S,[(0,o._)("div",T,[(0,o.wy)((0,o._)("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":e[10]||(e[10]=t=>s.tempProduct.is_enabled=t),"true-value":1,"false-value":0,id:"is_enabled"},null,512),[[_.e8,s.tempProduct.is_enabled]]),X])])])])]),(0,o._)("div",tt,[et,(0,o._)("button",{type:"button",class:"btn btn-primary",onClick:e[11]||(e[11]=e=>t.$emit("update-product",s.tempProduct))},"確認")])])])],512)}var ot=l(1339),at={props:{product:{type:Object,default(){return{}}}},watch:{product(){this.tempProduct=this.product}},data(){return{modal:{},tempProduct:{}}},methods:{uploadFile(){const t=this.$refs.fileInput.files[0],e=new FormData;e.append("file-to-upload",t);const l="https://vue3-course-api.hexschool.io/api/rou-api/admin/upload";this.$http.post(l,e).then((t=>{t.data.success&&(this.tempProduct.imageUrl=t.data.imageUrl)}))}},mixins:[ot.Z]},st=l(89);const it=(0,st.Z)(at,[["render",lt]]);var rt=it,dt=l(9774),ct=l(8957),nt={data(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1}},components:{ProductModal:rt,DelModal:dt.Z,Pagination:ct.Z},inject:["emitter"],methods:{getProducts(t=1){const e=`https://vue3-course-api.hexschool.io/api/rou-api/admin/products/?page=${t}`;this.isLoading=!0,this.$http.get(e).then((t=>{this.isLoading=!1,t.data.success&&(this.products=t.data.products,this.pagination=t.data.pagination)}))},openModal(t,e){this.tempProduct=t?{}:{...e},this.isNew=t;const l=this.$refs.productModal;l.showModal()},updateProduct(t){this.tempProduct=t;let e="https://vue3-course-api.hexschool.io/api/rou-api/admin/product",l="post";this.isNew||(e=`https://vue3-course-api.hexschool.io/api/rou-api/admin/product/${t.id}`,l="put");const o=this.$refs.productModal;this.$http[l](e,{data:this.tempProduct}).then((t=>{o.hideModal(),t.data.success?(this.getProducts(),this.emitter.emit("push-message",{style:"success",title:"更新成功"})):this.emitter.emit("push-message",{style:"danger",title:"更新失敗",content:t.data.message.join("、")})}))},openDelProductModal(t){this.tempProduct={...t};const e=this.$refs.delModal;e.showModal()},delProduct(){const t=`https://vue3-course-api.hexschool.io/api/rou-api/admin/product/${this.tempProduct.id}`;this.$http.delete(t).then((t=>{const e=this.$refs.delModal;e.hideModal(),this.getProducts()}))}},created(){this.getProducts()}};const ut=(0,st.Z)(nt,[["render",g]]);var pt=ut}}]);
//# sourceMappingURL=862.6c52a7cd.js.map