webpackJsonp([44],{"5KTh":function(e,t,r){var l=r("Uydn");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);r("rjj0")("43ea5d0e",l,!0)},B9mW:function(e,t,r){"use strict";function l(e){r("5KTh")}Object.defineProperty(t,"__esModule",{value:!0});var o=r("BO1k"),s=r.n(o),a=r("EMlb"),i=r("nSkA"),n=r("vMJZ"),u=r("QmSG"),c=r("0xDb"),m={components:{},data:function(){return{route_path:this.$route.path.split("/"),ruleForm:{name:"",type:"",content:"",create_user:localStorage.getItem("username"),level:1,complete:0,action_user:[],follow_user:[],from_user:"",pid:"",is_public:!0},rules:{name:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],action_user:[{required:!0,type:"array",message:"请输入正确的内容",trigger:"change"}],content:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],type:[{required:!0,message:"请输入正确的内容",trigger:"blur"}]},users:[],toolbars:{preview:!0,bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,ol:!0,help:!0},uploadurl:u.uploadurl,types:[],img_file:{},sendnotice:!1,fileList:[],count:0,enclosureData:[],enclosureForm:{project:"",create_user:localStorage.getItem("username"),file:""}}},created:function(){this.getUsers(),this.getTypes()},methods:{postForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.ruleForm.pid="po"+Object(c.a)(),Object(a.v)(t.ruleForm).then(function(e){t.$message({type:"success",message:"恭喜你，新建成功"});var r=!0,l=!1,o=void 0;try{for(var n,u=s()(t.fileList);!(r=(n=u.next()).done);r=!0){var m=n.value,p=new FormData;p.append("username",t.enclosureForm.create_user),p.append("file",m),p.append("create_time",Object(c.a)(m.uid)),p.append("type",m.type),p.append("archive",t.route_path[1]),Object(i.i)(p).then(function(r){t.enclosureForm.file=r.data.filepath,t.enclosureForm.project=e.data.id,Object(a.x)(t.enclosureForm)})}}catch(e){l=!0,o=e}finally{try{!r&&u.return&&u.return()}finally{if(l)throw o}}var d={action_user:t.ruleForm.action_user.join()+t.ruleForm.follow_user.join()+t.ruleForm.test_user,title:"【"+t.ruleForm.type+"】"+t.ruleForm.title,message:"提交人: "+t.ruleForm.create_user+"\n指派人: "+t.ruleForm.action_user.join()+"\n任务地址: http://"+window.location.host+"/#/projects/viewproject/"+e.data.id};Object(i.h)(d),t.$router.push("/projects/projects")})})},resetForm:function(e){this.$refs[e].resetFields()},getUsers:function(){var e=this,t={groups__name:"ITDept"};Object(n.f)(t).then(function(t){e.users=t.data})},getTypes:function(){var e=this;Object(a.n)().then(function(t){e.types=t.data})},imgAdd:function(e,t){var r=this.$refs.md,l=new FormData;l.append("username",this.ruleForm.create_user),l.append("file",t),l.append("create_time",Object(c.a)(t.lastModified)),l.append("type",t.type),l.append("archive",this.route_path[1]),Object(i.i)(l).then(function(t){r.$imglst2Url([[e,t.data.file]])})},handleSuccess:function(e,t){this.fileList.push(t.raw),this.count+=1},handleRemove:function(e,t){this.fileList.remove(e),this.count-=1}}},p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[r("el-card",[r("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"名称",prop:"name"}},[r("el-input",{attrs:{placeholder:"请输入名称"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"指派人",prop:"action_user"}},[r("el-select",{attrs:{filterable:"",multiple:"",placeholder:"请选择指派人"},model:{value:e.ruleForm.action_user,callback:function(t){e.$set(e.ruleForm,"action_user",t)},expression:"ruleForm.action_user"}},e._l(e.users,function(e){return r("el-option",{key:e.id,attrs:{value:e.username}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"抄送人",prop:"follow_user"}},[r("el-select",{attrs:{filterable:"",multiple:"",placeholder:"请选择跟踪人"},model:{value:e.ruleForm.follow_user,callback:function(t){e.$set(e.ruleForm,"follow_user",t)},expression:"ruleForm.follow_user"}},e._l(e.users,function(e){return r("el-option",{key:e.id,attrs:{value:e.username}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"需求人",prop:"from_user"}},[r("el-input",{attrs:{placeholder:"请输入需求人"},model:{value:e.ruleForm.from_user,callback:function(t){e.$set(e.ruleForm,"from_user",t)},expression:"ruleForm.from_user"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"类型",prop:"type"}},[r("el-select",{attrs:{placeholder:"请选择类型"},model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},e._l(e.types,function(e){return r("el-option",{key:e.id,attrs:{value:e.name}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"内容",prop:"content"}},[r("mavon-editor",{ref:"md",staticStyle:{"z-index":"1"},attrs:{code_style:"monokai",toolbars:e.toolbars},on:{imgAdd:e.imgAdd},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}}),e._v(" "),r("a",{staticClass:"tips"},[e._v(" Tip：截图可以直接 Ctrl + v 粘贴到内容里面")])],1),e._v(" "),r("el-form-item",{attrs:{label:"等级",prop:"level"}},[r("el-rate",{attrs:{colors:["#99A9BF","#F7BA2A","#ff1425"],"show-text":"",texts:["E","D","C","B","A"]},model:{value:e.ruleForm.level,callback:function(t){e.$set(e.ruleForm,"level",t)},expression:"ruleForm.level"}}),e._v(" "),r("a",{staticClass:"tips"},[e._v("Tip：星数代表问题紧急程度，星数越多，代表越紧急")])],1),e._v(" "),r("el-form-item",{attrs:{label:"是否公开",prop:"is_public"}},[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.ruleForm.is_public,callback:function(t){e.$set(e.ruleForm,"is_public",t)},expression:"ruleForm.is_public"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"附件"}},[r("el-upload",{ref:"upload",attrs:{action:e.uploadurl,"on-success":e.handleSuccess,"on-remove":e.handleRemove,"file-list":e.fileList}},[r("el-button",{attrs:{slot:"trigger",size:"mini",type:"success",plain:"",disabled:e.count>4},slot:"trigger"},[e._v("\n            上传\n          ")]),e._v(" "),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[r("p",[e._v("上传文件不超过10m，"),r("a",{staticStyle:{color:"red"}},[e._v("最多只能上传5个文件")])])])],1),e._v(" "),r("hr",{staticClass:"heng"})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.postForm("ruleForm")}}},[e._v("提交")]),e._v(" "),r("el-button",{attrs:{type:"danger"},on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("清空")])],1)],1)],1)],1)},d=[],f={render:p,staticRenderFns:d},_=f,v=r("VU/8"),h=l,F=v(m,_,!1,h,null,null);t.default=F.exports},Uydn:function(e,t,r){t=e.exports=r("FZ+f")(!1),t.push([e.i,".addticket{margin:50px;width:80%}",""])}});