webpackJsonp([32],{KF07:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("Zk8K"),o={props:["rowdata"],data:function(){return{rules:{platform:[{required:!0,message:"请选择一个平台",trigger:"change"}],name:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],m_id:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],three:[{required:!0,message:"请输入正确的内容",trigger:"blur"}]},platforms:[],paychannels:[]}},created:function(){this.getPlatforms()},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.$emit("formdata",t.rowdata),t.ruleForm={platform:"",name:"",m_id:"",three:""}})},resetForm:function(e){this.$refs[e].resetFields()},getPlatforms:function(){var e=this;Object(a.h)().then(function(t){e.platforms=t.data})}}},l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"ruleForm",attrs:{model:e.rowdata,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"platform",prop:"platform"}},[r("el-select",{attrs:{placeholder:"请选择平台"},model:{value:e.rowdata.platform,callback:function(t){e.$set(e.rowdata,"platform",t)},expression:"rowdata.platform"}},e._l(e.platforms,function(e){return r("el-option",{key:e.id,attrs:{value:e.name}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"名称",prop:"name"}},[r("el-input",{model:{value:e.rowdata.name,callback:function(t){e.$set(e.rowdata,"name",t)},expression:"rowdata.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"商户id",prop:"m_id"}},[r("el-input",{model:{value:e.rowdata.m_id,callback:function(t){e.$set(e.rowdata,"m_id",t)},expression:"rowdata.m_id"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"业务经理",prop:"three"}},[r("el-input",{model:{value:e.rowdata.three,callback:function(t){e.$set(e.rowdata,"three",t)},expression:"rowdata.three"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("立即更新")])],1)],1)},n=[],i={render:l,staticRenderFns:n},s=i,m=r("VU/8"),u=m(o,s,!1,null,null,null);t.default=u.exports}});