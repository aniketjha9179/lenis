import t from"tiny-emitter";import s from"virtual-scroll";class i extends t{constructor({lerp:t=.1,smooth:i=!0}={}){var o,e,l;super(),this.onResize=t=>{const s=t[0];s&&(this.maxScroll=s.contentRect.height-this.windowHeight)},this.onWindowResize=()=>{this.windowHeight=window.innerHeight,this.windowWidth=window.innerWidth},this.onVirtualScroll=({deltaY:t,originalEvent:s})=>{var i,o;this.stopped?s.preventDefault():(this.smooth&&!s.ctrlKey&&s.preventDefault(),this.targetScroll-=t,this.targetScroll=(o=this.maxScroll,(i=this.targetScroll)<0?0:i>o?o:i))},this.onScroll=t=>{this.scrolling&&this.smooth||(this.targetScroll=this.scroll=window.scrollY,this.emit("scroll",{scroll:this.scroll}))},this.lerp=t,this.smooth=i,window.addEventListener("scroll",this.onScroll,!1),window.addEventListener("resize",this.onWindowResize,!1);const r=(null==(o=navigator)||null==(e=o.userAgentData)?void 0:e.platform)||(null==(l=navigator)?void 0:l.platform)||"unknown";this.virtualScroll=new s({firefoxMultiplier:50,mouseMultiplier:r.indexOf("Win")>-1?1:.4,useKeyboard:!1,useTouch:!1,passive:!1}),this.virtualScroll.on(this.onVirtualScroll),this.onWindowResize(),this.maxScroll=document.body.offsetHeight-this.windowHeight,this.resizeObserver=new ResizeObserver(this.onResize),this.resizeObserver.observe(document.body),this.targetScroll=this.scroll=window.scrollY}start(){this.stopped=!1}stop(){this.stopped=!0}destroy(){window.removeEventListener("scroll",this.onScroll,!1),window.removeEventListener("resize",this.onWindowResize,!1),this.virtualScroll.destroy(),this.resizeObserver.disconnect()}raf(){var t;this.smooth&&!this.stopped&&(this.scroll=(1-(t=this.lerp))*this.scroll+t*this.targetScroll,Math.round(this.scroll)===Math.round(this.targetScroll)&&(this.scroll=this.targetScroll),this.scrolling&&(window.scrollTo(0,this.scroll),this.emit("scroll",{scroll:this.scroll})),this.scrolling=this.scroll!==this.targetScroll)}scrollTo(t,{offset:s=0}={}){let i;if("number"==typeof t)i=t;else if("#top"===t)i=0;else if("#bottom"===t)i=this.maxScroll;else{let s;if("string"==typeof t)s=document.querySelector(t);else{if(null==t||!t.nodeType)return;s=t}if(!t)return;i=s.getBoundingClientRect().top+this.scroll}i+=s,this.targetScroll=i,this.scrolling=!0,this.smooth||(this.scroll=i)}}export{i as default};
//# sourceMappingURL=lenis.modern.js.map
