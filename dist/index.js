"use strict";var __create=Object.create;var __defProp=Object.defineProperty;var __getOwnPropDesc=Object.getOwnPropertyDescriptor;var __getOwnPropNames=Object.getOwnPropertyNames;var __getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty;var __export=(target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})},__copyProps=(to,from,except,desc)=>{if(from&&typeof from=="object"||typeof from=="function")for(let key of __getOwnPropNames(from))!__hasOwnProp.call(to,key)&&key!==except&&__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to};var __toESM=(mod,isNodeMode,target)=>(target=mod!=null?__create(__getProtoOf(mod)):{},__copyProps(isNodeMode||!mod||!mod.__esModule?__defProp(target,"default",{value:mod,enumerable:!0}):target,mod)),__toCommonJS=mod=>__copyProps(__defProp({},"__esModule",{value:!0}),mod);var src_exports={};__export(src_exports,{UIDFork:()=>UIDFork,uid:()=>uid,useUID:()=>useUID2,useUIDSeed:()=>useUIDSeed2});module.exports=__toCommonJS(src_exports);var import_react3=__toESM(require("react"));var React3=__toESM(require("react")),import_react2=require("react");var React=__toESM(require("react"));var generateUID=function(){var counter2=1,map=new WeakMap,uid2=function(item,index){return typeof item=="number"||typeof item=="string"?index?"idx-".concat(index):"val-".concat(item):map.has(item)?"uid"+map.get(item):(map.set(item,counter2++),uid2(item))};return uid2},uid=generateUID();var createSource=function(prefix){return prefix===void 0&&(prefix=""),{value:1,prefix,uid:generateUID()}},counter=createSource(),source=React.createContext(createSource()),getId=function(source2){return source2.value++},getPrefix=function(source2){return source2?source2.prefix:""};var React2=require("react"),import_react=require("react");var generateUID2=function(context){var quartz=context||counter,prefix=getPrefix(quartz),id=getId(quartz),uid2=prefix+id,gen=function(item){return uid2+quartz.uid(item)};return{uid:uid2,gen}},useUIDState=function(){var context=(0,import_react.useContext)(source),uid2=(0,import_react.useState)(function(){return generateUID2(context)})[0];return uid2},useUID=function(){var uid2=useUIDState().uid;return uid2},useUIDSeed=function(){var gen=useUIDState().gen;return gen};var UIDFork=function(_a){var children=_a.children,_b=_a.prefix,prefix=_b===void 0?"":_b,id=useUID(),valueSource=(0,import_react2.useState)(function(){return createSource(id+"-"+prefix)})[0];return React3.createElement(source.Provider,{value:valueSource},children)};console.debug("*** THIS IS MY FORKED PASTE PACKAGE AT TROGERS-TWILIO ***");var useId="useId",maybeReactUseId=import_react3.default[useId],useUID2=maybeReactUseId!==void 0?maybeReactUseId:useUID,useUIDSeed2=maybeReactUseId!==void 0?()=>{let id=maybeReactUseId();return seed=>`${id}-${seed}`}:useUIDSeed;0&&(module.exports={UIDFork,uid,useUID,useUIDSeed});
