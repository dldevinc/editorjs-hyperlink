!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Hyperlink=t():e.Hyperlink=t()}(self,(()=>(()=>{"use strict";var e={858:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(81),i=n.n(o),r=n(645),s=n.n(r)()(i());s.push([e.id,".ce-inline-tool-hyperlink-wrapper {\n  outline: none;\n  border: 0;\n  border-radius: 0 0 4px 4px;\n  margin: 0;\n  font-size: 13px;\n  padding: 10px;\n  width: 300px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  display: none;\n  font-weight: 500;\n  border-top: 1px solid rgba(201, 201, 204, 0.48);\n}\n\n.ce-inline-tool-hyperlink-wrapper.ce-inline-tool-hyperlink-wrapper--showed {\n  display: block;\n}\n\n.ce-inline-tool-hyperlink--input,\n.ce-inline-tool-hyperlink--select-target {\n  border: 1px solid rgba(201, 201, 204, 0.48);\n  -webkit-box-shadow: inset 0 1px 2px 0 rgba(35, 44, 72, 0.06);\n  box-shadow: inset 0 1px 2px 0 rgba(35, 44, 72, 0.06);\n  border-radius: 5px;\n  padding: 5px 8px;\n  margin-bottom: 10px;\n  outline: none;\n  width: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.ce-inline-tool-hyperlink--select-target {\n  width: 100%;\n  display: inline-block;\n}\n.ce-inline-tool-hyperlink--select-target {\n  margin-right: 2%;\n}\n\n.ce-inline-tool-hyperlink--select-rel {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 10px;\n}\n\n.ce-inline-tool-hyperlink--checkbox-label {\n  display: flex;\n  flex: 50%;\n  padding: 3px 10px;\n  align-items: center;\n}\n.ce-inline-tool-hyperlink--checkbox-input {\n  margin-right: 5px;\n}\n\n.ce-inline-tool-hyperlink--button {\n  display: block;\n  width: 100%;\n  background-color: #34c38f;\n  color: #fff;\n  padding: 7px 0;\n  border: none;\n  text-align: center;\n  text-decoration: none;\n  font-size: 16px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n",""]);const a=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(s[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&s[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},728:(e,t,n)=>{var o=n(379),i=n.n(o),r=n(795),s=n.n(r),a=n(569),l=n.n(a),c=n(565),d=n.n(c),u=n(216),h=n.n(u),p=n(589),f=n.n(p),g=n(858),v={};v.styleTagTransform=f(),v.setAttributes=d(),v.insert=l().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=h(),i()(g.Z,v),g.Z&&g.Z.locals&&g.Z.locals},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},s=[],a=0;a<e.length;a++){var l=e[a],c=o.base?l[0]+o.base:l[0],d=r[c]||0,u="".concat(c," ").concat(d);r[c]=d+1;var h=n(u),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==h)t[h].references++,t[h].updater(p);else{var f=i(p,o);o.byIndex=a,t.splice(a,0,{identifier:u,updater:f,references:1})}s.push(u)}return s}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var r=o(e=e||[],i=i||{});return function(e){e=e||[];for(var s=0;s<r.length;s++){var a=n(r[s]);t[a].references--}for(var l=o(e,i),c=0;c<r.length;c++){var d=n(r[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}r=l}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,i&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var o={};return(()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var o=0;o<n.length;o++){var i=n[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(r=i.key,s=void 0,s=function(t,n){if("object"!==e(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var i=o.call(t,"string");if("object"!==e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r),"symbol"===e(s)?s:String(s)),i)}var r,s}function i(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}n.d(o,{default:()=>l});var r=function(){function e(){this.selection=null,this.savedSelectionRange=null,this.isFakeBackgroundEnabled=!1,this.commandBackground="backColor",this.commandRemoveFormat="removeFormat"}var t=e.prototype;return t.isElement=function(e){return e&&"object"==typeof e&&e.nodeType&&e.nodeType===Node.ELEMENT_NODE},t.isContentEditable=function(e){return"true"===e.contentEditable},t.isNativeInput=function(e){return!(!e||!e.tagName)&&["INPUT","TEXTAREA"].includes(e.tagName)},t.canSetCaret=function(e){var t=!0;if(this.isNativeInput(e))switch(e.type){case"file":case"checkbox":case"radio":case"hidden":case"submit":case"button":case"image":case"reset":t=!1}else t=this.isContentEditable(e);return t},t.CSS=function(){return{editorWrapper:"codex-editor",editorZone:"codex-editor__redactor"}},t.anchorNode=function(){var e=window.getSelection();return e?e.anchorNode:null},t.anchorElement=function(){var e=window.getSelection();if(!e)return null;var t=e.anchorNode;return t?this.isElement(t)?t:t.parentElement:null},t.anchorOffset=function(){var e=window.getSelection();return e?e.anchorOffset:null},t.isCollapsed=function(){var e=window.getSelection();return e?e.isCollapsed:null},t.isAtEditor=function(){var t=e.get(),n=t.anchorNode||t.focusNode;n&&n.nodeType===Node.TEXT_NODE&&(n=n.parentNode);var o=null;return n&&(o=n.closest("."+e.CSS.editorZone)),o&&o.nodeType===Node.ELEMENT_NODE},t.isSelectionExists=function(){return!!e.get().anchorNode},t.get=function(){return window.getSelection()},t.setCursor=function(e,t){void 0===t&&(t=0);var n=document.createRange(),o=window.getSelection();if(this.isNativeInput(e)){if(!this.canSetCaret(e))return;return e.focus(),e.selectionStart=e.selectionEnd=t,e.getBoundingClientRect()}return n.setStart(e,t),n.setEnd(e,t),o.removeAllRanges(),o.addRange(n),n.getBoundingClientRect()},t.removeFakeBackground=function(){this.isFakeBackgroundEnabled&&(this.isFakeBackgroundEnabled=!1,document.execCommand(this.commandRemoveFormat))},t.setFakeBackground=function(){document.execCommand(this.commandBackground,!1,"#a8d6ff"),this.isFakeBackgroundEnabled=!0},t.save=function(){this.savedSelectionRange=e.range},t.restore=function(){if(this.savedSelectionRange){var e=window.getSelection();e.removeAllRanges(),e.addRange(this.savedSelectionRange)}},t.clearSaved=function(){this.savedSelectionRange=null},t.collapseToEnd=function(){var e=window.getSelection(),t=document.createRange();t.selectNodeContents(e.focusNode),t.collapse(!1),e.removeAllRanges(),e.addRange(t)},t.findParentTag=function(e,t,n){void 0===t&&(t=null),void 0===n&&(n=10);var o=window.getSelection(),i=null;return o&&o.anchorNode&&o.focusNode?([o.anchorNode,o.focusNode].forEach((function(o){for(var r=n;r>0&&o.parentNode&&(o.tagName!==e||(i=o,t&&o.classList&&!o.classList.contains(t)&&(i=null),!i));)o=o.parentNode,r--})),i):null},t.expandToTag=function(e){var t=window.getSelection();t.removeAllRanges();var n=document.createRange();n.selectNodeContents(e),t.addRange(n)},i(e,null,[{key:"range",get:function(){var e=window.getSelection();return e&&e.rangeCount?e.getRangeAt(0):null}},{key:"rect",get:function(){var e,t=document.selection,n={x:0,y:0,width:0,height:0};if(t&&"Control"!==t.type)return e=t.createRange(),n.x=e.boundingLeft,n.y=e.boundingTop,n.width=e.boundingWidth,n.height=e.boundingHeight,n;if(!window.getSelection)return n;if(null===(t=window.getSelection()).rangeCount||isNaN(t.rangeCount))return n;if(0===t.rangeCount)return n;if((e=t.getRangeAt(0).cloneRange()).getBoundingClientRect&&(n=e.getBoundingClientRect()),0===n.x&&0===n.y){var o=document.createElement("span");if(o.getBoundingClientRect){o.appendChild(document.createTextNode("​")),e.insertNode(o),n=o.getBoundingClientRect();var i=o.parentNode;i.removeChild(o),i.normalize()}}return n}},{key:"text",get:function(){return window.getSelection?window.getSelection().toString():""}}]),e}();function s(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}n(728).toString();var l=function(){function e(e){e.data;var t=e.config,n=e.api;e.readOnly,this.toolbar=n.toolbar,this.inlineToolbar=n.inlineToolbar,this.tooltip=n.tooltip,this.i18n=n.i18n,this.config=t,this.selection=new r,this.commandLink="createLink",this.commandUnlink="unlink",this.CSS={wrapper:"ce-inline-tool-hyperlink-wrapper",wrapperShowed:"ce-inline-tool-hyperlink-wrapper--showed",button:"ce-inline-tool",buttonActive:"ce-inline-tool--active",buttonModifier:"ce-inline-tool--link",buttonUnlink:"ce-inline-tool--unlink",input:"ce-inline-tool-hyperlink--input",selectTarget:"ce-inline-tool-hyperlink--select-target",selectRel:"ce-inline-tool-hyperlink--select-rel",checkboxLabel:"ce-inline-tool-hyperlink--checkbox-label",checkboxInput:"ce-inline-tool-hyperlink--checkbox-input",buttonSave:"ce-inline-tool-hyperlink--button"},this.targetAttributes=this.config.availableTargets||["_blank","_self","_parent","_top"],this.relAttributes=this.config.availableRels||["alternate","author","bookmark","external","help","license","next","nofollow","noreferrer","noopener","prev","search","tag"],this.nodes={button:null,wrapper:null,input:null,selectTarget:null,selectRel:null,buttonSave:null},this.inputOpened=!1}var t=e.prototype;return t.render=function(){this.nodes.button=document.createElement("button"),this.nodes.button.type="button",this.nodes.button.classList.add(this.CSS.button,this.CSS.buttonModifier);var e=document.createElement("template");e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.69998 12.6L7.67896 12.62C6.53993 13.7048 6.52012 15.5155 7.63516 16.625V16.625C8.72293 17.7073 10.4799 17.7102 11.5712 16.6314L13.0263 15.193C14.0703 14.1609 14.2141 12.525 13.3662 11.3266L13.22 11.12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.22 11.12L16.3564 10.9805C17.2895 10.0265 17.3478 8.5207 16.4914 7.49733V7.49733C15.5691 6.39509 13.9269 6.25143 12.8271 7.17675L11.3901 8.38588C10.0935 9.47674 9.95706 11.4241 11.0888 12.6852L11.12 12.72"/></svg>';var t=e.content.firstElementChild;t.classList.add("icon","icon--link"),this.nodes.button.append(t);var n=document.createElement("template");n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M15.7795 11.5C15.7795 11.5 16.053 11.1962 16.5497 10.6722C17.4442 9.72856 17.4701 8.2475 16.5781 7.30145V7.30145C15.6482 6.31522 14.0873 6.29227 13.1288 7.25073L11.8796 8.49999"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.24517 12.3883C8.24517 12.3883 7.97171 12.6922 7.47504 13.2161C6.58051 14.1598 6.55467 15.6408 7.44666 16.5869V16.5869C8.37653 17.5731 9.93744 17.5961 10.8959 16.6376L12.1452 15.3883"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17.7802 15.1032L16.597 14.9422C16.0109 14.8624 15.4841 15.3059 15.4627 15.8969L15.4199 17.0818"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6.39064 9.03238L7.58432 9.06668C8.17551 9.08366 8.6522 8.58665 8.61056 7.99669L8.5271 6.81397"/><line x1="12.1142" x2="11.7" y1="12.2" y2="11.7858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>';var o=n.content.firstElementChild;return o.classList.add("icon","icon--unlink"),this.nodes.button.append(o),this.nodes.button},t.renderActions=function(){var e=this;this.nodes.wrapper=document.createElement("div"),this.nodes.wrapper.classList.add(this.CSS.wrapper),this.nodes.input=document.createElement("input"),this.nodes.input.placeholder="https://...",this.nodes.input.classList.add(this.CSS.input),this.nodes.input.addEventListener("blur",this.onBlur.bind(this)),this.nodes.input.addEventListener("keyup",(function(t){13===t.keyCode&&e.savePressed(t)})),this.nodes.selectTarget=document.createElement("select"),this.nodes.selectTarget.classList.add(this.CSS.selectTarget),this.addOption(this.nodes.selectTarget,this.i18n.t("Select target"),"");for(var t,n=s(this.targetAttributes);!(t=n()).done;){var o=t.value;this.addOption(this.nodes.selectTarget,o,o)}this.config.target&&(0===this.targetAttributes.length&&this.addOption(this.nodes.selectTarget,this.config.target,this.config.target),this.nodes.selectTarget.value=this.config.target);var i=[];"string"==typeof this.config.rel?i.push(this.config.rel):Array.isArray(this.config.rel)&&(i=i.concat(this.config.rel)),this.nodes.selectRel=document.createElement("div"),this.nodes.selectRel.classList.add(this.CSS.selectRel);for(var r,a=s(this.relAttributes);!(r=a()).done;){var l=r.value;this.addCheckbox(this.nodes.selectRel,l,l,i.indexOf(l)>=0)}return this.nodes.buttonSave=document.createElement("button"),this.nodes.buttonSave.type="button",this.nodes.buttonSave.classList.add(this.CSS.buttonSave),this.nodes.buttonSave.innerHTML=this.i18n.t("Save"),this.nodes.buttonSave.addEventListener("click",(function(t){e.savePressed(t)})),this.nodes.wrapper.appendChild(this.nodes.input),this.targetAttributes&&this.targetAttributes.length>0&&this.nodes.wrapper.appendChild(this.nodes.selectTarget),this.relAttributes&&this.relAttributes.length>0&&this.nodes.wrapper.appendChild(this.nodes.selectRel),this.nodes.wrapper.appendChild(this.nodes.buttonSave),this.nodes.wrapper},t.surround=function(e){if(e){this.inputOpened?(this.selection.restore(),this.selection.removeFakeBackground()):(this.selection.setFakeBackground(),this.selection.save());var t=this.selection.findParentTag("A");if(t)return this.selection.expandToTag(t),this.unlink(),this.closeActions(),this.checkState(),void this.toolbar.close()}this.toggleActions()},t.checkState=function(e){void 0===e&&(e=null);var t=this.selection.findParentTag("A");if(t){this.nodes.button.classList.add(this.CSS.buttonUnlink),this.nodes.button.classList.add(this.CSS.buttonActive),this.openActions();var n=t.getAttribute("href"),o=t.getAttribute("target"),i=(t.getAttribute("rel")||"").split(" ");this.nodes.input.value=n||"",this.nodes.selectTarget.value=o||"";for(var r,a=s(this.nodes.selectRel.getElementsByClassName(this.CSS.checkboxInput));!(r=a()).done;){var l=r.value;l.checked=-1!==i.indexOf(l.dataset.rel)}this.selection.save()}else this.nodes.button.classList.remove(this.CSS.buttonUnlink),this.nodes.button.classList.remove(this.CSS.buttonActive);return!!t},t.clear=function(){this.closeActions()},t.toggleActions=function(){this.inputOpened?this.closeActions(!1):this.openActions(!0)},t.openActions=function(e){void 0===e&&(e=!1),this.nodes.wrapper.classList.add(this.CSS.wrapperShowed),e&&this.nodes.input.focus(),this.inputOpened=!0},t.onBlur=function(){var e=this,t=this.nodes.input.value||"";if(this.config.validate&&1==!!this.config.validate&&!this.validateURL(t))return this.tooltip.show(this.nodes.input,this.i18n.t("The URL is not valid."),{placement:"top"}),void setTimeout((function(){e.tooltip.hide()}),1e3);"function"==typeof this.config.configure&&Promise.resolve(this.config.configure(t)).then((function(t){if(t.href&&(e.nodes.input.value=t.href),"string"==typeof t.target&&(e.nodes.selectTarget.value=t.target),"object"==typeof t.rels){var n={};if(t.rels instanceof Array)for(var o,i=s(t.rels);!(o=i()).done;)n[o.value]=!0;else Object.assign(n,t.rels);for(var r,a=s(e.nodes.selectRel.getElementsByClassName(e.CSS.checkboxInput));!(r=a()).done;){var l=r.value;l.dataset.rel in n&&(l.checked=n[l.dataset.rel])}}}))},t.closeActions=function(e){if(void 0===e&&(e=!0),this.selection.isFakeBackgroundEnabled){var t=new r;t.save(),this.selection.restore(),this.selection.removeFakeBackground(),t.restore()}this.nodes.wrapper.classList.remove(this.CSS.wrapperShowed),this.nodes.input.value="",this.nodes.selectTarget.value="";for(var n,o=s(this.nodes.selectRel.getElementsByClassName(this.CSS.checkboxInput));!(n=o()).done;)n.value.checked=!1;e&&this.selection.clearSaved(),this.inputOpened=!1},t.savePressed=function(e){var t=this;e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation();for(var n,o=this.nodes.input.value||"",i=this.nodes.selectTarget.value||"",r=[],a=s(this.nodes.selectRel.getElementsByClassName(this.CSS.checkboxInput));!(n=a()).done;){var l=n.value;l.checked&&r.push(l.dataset.rel)}return o.trim()?this.config.validate&&1==!!this.config.validate&&!this.validateURL(o)?(this.tooltip.show(this.nodes.input,this.i18n.t("The URL is not valid."),{placement:"top"}),void setTimeout((function(){t.tooltip.hide()}),1e3)):(o=this.prepareLink(o),this.selection.restore(),this.selection.removeFakeBackground(),this.insertLink(o,i,r.join(" ")),this.selection.collapseToEnd(),void this.inlineToolbar.close()):(this.selection.restore(),this.unlink(),e.preventDefault(),void this.closeActions())},t.validateURL=function(e){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)},t.prepareLink=function(e){return e=e.trim(),this.addProtocol(e)},t.addProtocol=function(e){if(/^(\w+):(\/\/)?/.test(e))return e;var t=/^\/(?!\/)|\?/.test(e),n="#"===e.substring(0,1),o=/^\/\//.test(e);return t||n||o||(e="http://"+e),e},t.insertLink=function(e,t,n){void 0===t&&(t=""),void 0===n&&(n="");var o=this.selection.findParentTag("A");o?(this.selection.expandToTag(o),o.href=e):(document.execCommand(this.commandLink,!1,e),o=this.selection.findParentTag("A")),o&&(this.config.className&&(o.className=this.config.className),t?o.target=t:o.removeAttribute("target"),n?o.rel=n:o.removeAttribute("rel"))},t.unlink=function(){document.execCommand(this.commandUnlink)},t.addOption=function(e,t,n){void 0===n&&(n=null);var o=document.createElement("option");o.text=t,o.value=n,e.add(o)},t.addCheckbox=function(e,t,n,o){void 0===o&&(o=!1);var i=document.createElement("input");i.type="checkbox",i.classList.add(this.CSS.checkboxInput),i.dataset.rel=n,i.checked=o;var r=document.createElement("label");r.classList.add(this.CSS.checkboxLabel),r.appendChild(i),r.insertAdjacentText("beforeend",t),e.appendChild(r)},i(e,[{key:"shortcut",get:function(){return this.config.shortcut||"CMD+L"}},{key:"title",get:function(){return"Hyperlink"}}],[{key:"isInline",get:function(){return!0}},{key:"sanitize",get:function(){return{a:{href:!0,target:!0,rel:!0,class:!0}}}}]),e}()})(),o.default})()));