(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{JBfp:function(t,e,n){t.exports={description:"index-module--description--WbOJg",livestreamContainer:"index-module--livestreamContainer--376vk",livestream:"index-module--livestream--3HYJw",hackathonTitle:"index-module--hackathonTitle--2KJ22",buttons:"index-module--buttons--1nWpx"}},eI7z:function(t,e,n){t.exports={sponsorTier:"index-module--sponsorTier--nJxHv",sponsor:"index-module--sponsor--Wiqxf",sponsorLogo:"index-module--sponsorLogo--FtlBb",sponsorButtonContainer:"index-module--sponsorButtonContainer--2Pufd",tier1:"index-module--tier1--1WVZb",tier2:"index-module--tier2--pdj2Z",tier3:"index-module--tier3--3gUND",tier4:"index-module--tier4--27arH"}},gHPf:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",(function(){return E}));var o=n("nKUr"),r=n("q1tI"),s=n("Zttt"),i=n("wtQ5"),a=n("dI71"),c=n("zfRm"),l=n.n(c),u=n("Aj3y"),p=function(t){function e(){return t.apply(this,arguments)||this}return Object(a.a)(e,t),e.prototype.render=function(){return Object(o.jsxs)("section",{className:Object(u.a)(l.a.hackathonDef),children:[Object(o.jsx)("div",{className:"row justify-content-center py-5",children:Object(o.jsx)("div",{className:"text-center",children:Object(o.jsx)("h1",{children:"We make hackathons happen."})})}),Object(o.jsx)("div",{className:"row justify-content-center py-5",children:Object(o.jsxs)("div",{className:Object(u.a)("container",l.a.lrContainer),children:[Object(o.jsxs)("div",{className:l.a.left,children:[Object(o.jsxs)("h4",{children:["Royal Hackaway is an initiative of the"," ",Object(o.jsx)("a",{href:"https://cmpsc.uk",children:"Computing Society at Royal Holloway, Univertiy of London"})]}),Object(o.jsx)("h4",{children:"We aim to create great experiences for students of every background of study by hosting inclusive events where people can learn and grow."})]}),Object(o.jsxs)("div",{className:l.a.right,children:[Object(o.jsx)("h1",{children:"hackathon"}),Object(o.jsx)("h5",{className:"font-weight-light",children:Object(o.jsx)("i",{children:"/ˈhækəθɒn/"})}),Object(o.jsx)("h4",{className:"font-weight-light",children:Object(o.jsx)("i",{children:"an event, typically lasting several days, in which a large number of people meet to engage in collaborative computer programming."})})]})]})})]})},e}(r.Component),d=n("JBfp"),m=n.n(d),h=n("Wbzz");function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function j(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function b(t,e,n){return e&&j(t.prototype,e),n&&j(t,n),t}function v(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&O(t,e)}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function O(t,e){return(O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function x(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=y(t);if(e){var r=y(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return x(this,n)}}function T(t){return function(t){if(Array.isArray(t))return g(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return g(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function S(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=String(t);if(0===e)return n;var o=n.match(/(.*?)([0-9]+)(.*)/),r=o?o[1]:"",s=o?o[3]:"",i=o?o[2]:n,a=i.length>=e?i:(T(Array(e)).map((function(){return"0"})).join("")+i).slice(-1*e);return"".concat(r).concat(a).concat(s)}var k={daysInHours:!1,zeroPadTime:2};function D(t,e){var n=t.days,o=t.hours,r=t.minutes,s=t.seconds,i=Object.assign(Object.assign({},k),e),a=i.daysInHours,c=i.zeroPadTime,l=i.zeroPadDays,u=void 0===l?c:l,p=Math.min(2,c),d=a?S(o+24*n,c):S(o,p);return{days:a?"":S(n,u),hours:d,minutes:S(r,p),seconds:S(s,p)}}var C=function(t){v(n,t);var e=w(n);function n(){var t;return f(this,n),(t=e.apply(this,arguments)).state={count:t.props.count||3},t.startCountdown=function(){t.interval=window.setInterval((function(){0===t.state.count-1?(t.stopCountdown(),t.props.onComplete&&t.props.onComplete()):t.setState((function(t){return{count:t.count-1}}))}),1e3)},t.stopCountdown=function(){clearInterval(t.interval)},t.addTime=function(e){t.stopCountdown(),t.setState((function(t){return{count:t.count+e}}),t.startCountdown)},t}return b(n,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?Object(r.cloneElement)(this.props.children,{count:this.state.count}):null}}]),n}(r.Component),N=function(t){v(n,t);var e=w(n);function n(t){var o;if(f(this,n),(o=e.call(this,t)).mounted=!1,o.initialTimestamp=o.calcOffsetStartTimestamp(),o.offsetStartTimestamp=o.props.autoStart?0:o.initialTimestamp,o.offsetTime=0,o.legacyMode=!1,o.legacyCountdownRef=Object(r.createRef)(),o.tick=function(){var t=o.calcTimeDelta(),e=t.completed&&!o.props.overtime?void 0:o.props.onTick;o.setTimeDeltaState(t,void 0,e)},o.start=function(){if(!o.isStarted()){var t=o.offsetStartTimestamp;o.offsetStartTimestamp=0,o.offsetTime+=t?o.calcOffsetStartTimestamp()-t:0;var e=o.calcTimeDelta();o.setTimeDeltaState(e,"STARTED",o.props.onStart),o.props.controlled||e.completed&&!o.props.overtime||(o.clearTimer(),o.interval=window.setInterval(o.tick,o.props.intervalDelay))}},o.pause=function(){o.isPaused()||(o.clearTimer(),o.offsetStartTimestamp=o.calcOffsetStartTimestamp(),o.setTimeDeltaState(o.state.timeDelta,"PAUSED",o.props.onPause))},o.stop=function(){o.isStopped()||(o.clearTimer(),o.offsetStartTimestamp=o.calcOffsetStartTimestamp(),o.offsetTime=o.offsetStartTimestamp-o.initialTimestamp,o.setTimeDeltaState(o.calcTimeDelta(),"STOPPED",o.props.onStop))},o.isStarted=function(){return o.isStatus("STARTED")},o.isPaused=function(){return o.isStatus("PAUSED")},o.isStopped=function(){return o.isStatus("STOPPED")},o.isCompleted=function(){return o.isStatus("COMPLETED")},o.handleOnComplete=function(t){o.props.onComplete&&o.props.onComplete(t)},t.date){var s=o.calcTimeDelta();o.state={timeDelta:s,status:s.completed?"COMPLETED":"STOPPED"}}else o.legacyMode=!0;return o}return b(n,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(t){this.legacyMode||this.shallowCompare(this.props,t)||(this.props.date!==t.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0),this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var t=this.props,e=t.date,n=t.now,o=t.precision,r=t.controlled,s=t.overtime;return function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=n.now,r=void 0===o?Date.now:o,s=n.precision,i=void 0===s?0:s,a=n.controlled,c=n.offsetTime,l=void 0===c?0:c,u=n.overtime;e="string"==typeof t?new Date(t).getTime():t instanceof Date?t.getTime():t,a||(e+=l);var p=a?e:e-r(),d=Math.min(20,Math.max(0,i)),m=Math.round(1e3*parseFloat(((u?p:Math.max(0,p))/1e3).toFixed(d))),h=Math.abs(m)/1e3;return{total:m,days:Math.floor(h/86400),hours:Math.floor(h/3600%24),minutes:Math.floor(h/60%60),seconds:Math.floor(h%60),milliseconds:Number((h%1*1e3).toFixed()),completed:m<=0}}(e,{now:n,precision:o,controlled:r,offsetTime:this.offsetTime,overtime:s})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(t){this.legacyCountdownRef.current.addTime(t)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(t){return this.state.status===t}},{key:"shallowCompare",value:function(t,e){var n=Object.keys(t);return n.length===Object.keys(e).length&&!n.some((function(n){var o=t[n],r=e[n];return!e.hasOwnProperty(n)||!(o===r||o!=o&&r!=r)}))}},{key:"setTimeDeltaState",value:function(t,e,n){var o=this;if(this.mounted){var r;!this.state.timeDelta.completed&&t.completed&&(this.props.overtime||this.clearTimer(),r=this.handleOnComplete);return this.setState((function(n){var r=e||n.status;return t.completed&&!o.props.overtime?r="COMPLETED":e||"COMPLETED"!==r||(r="STOPPED"),{timeDelta:t,status:r}}),(function(){n&&n(o.state.timeDelta),r&&r(o.state.timeDelta)}))}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var t=this.props,e=t.daysInHours,n=t.zeroPadTime,o=t.zeroPadDays,r=this.state.timeDelta;return Object.assign(Object.assign({},r),{api:this.getApi(),props:this.props,formatted:D(r,{daysInHours:e,zeroPadTime:n,zeroPadDays:o})})}},{key:"render",value:function(){if(this.legacyMode){var t=this.props,e=t.count,n=t.children,o=t.onComplete;return Object(r.createElement)(C,{ref:this.legacyCountdownRef,count:e,onComplete:o},n)}var s=this.props,i=s.className,a=s.overtime,c=s.children,l=s.renderer,u=this.getRenderProps();if(l)return l(u);if(c&&this.state.timeDelta.completed&&!a)return Object(r.cloneElement)(c,{countdown:u});var p=u.formatted,d=p.days,m=p.hours,h=p.minutes,f=p.seconds;return Object(r.createElement)("span",{className:i},u.total<0?"-":"",d,d?":":"",m,":",h,":",f)}}]),n}(r.Component);N.defaultProps=Object.assign(Object.assign({},k),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0});var P=N,_=function(t){function e(){return t.apply(this,arguments)||this}return Object(a.a)(e,t),e.prototype.render=function(){var t=this.props,e=t.show_ticket_button,n=void 0===e||e,r=t.show_sponsor_button,s=t.show_livestream,i=t.sponsor_document,a=t.livestream_youtube,c=t.name,l=t.full_description,p=t.slug,d=t.start;return Object(o.jsxs)("section",{className:Object(u.a)(m.a.hackathonTitle),children:[Object(o.jsx)("div",{className:"row justify-content-center py-4",children:Object(o.jsx)("div",{className:"col-12 col-xs-12 col-sm-8 text-center py-4",children:Object(o.jsx)("h1",{className:"py-2",children:"Create something awesome"})})}),Object(o.jsx)("div",{className:"row justify-content-center py-2",children:s?Object(o.jsx)("div",{className:"col-12 col-sm-8 col-m-6 col-xl-4",children:Object(o.jsx)("div",{className:m.a.livestreamContainer,children:Object(o.jsx)("iframe",{className:m.a.livestream,src:"https://www.youtube.com/embed/"+a+"?autoplay=1",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"col-12 col-sm-8 col-m-6 col-xl-4 text-center",children:Object(o.jsx)("p",{className:m.a.description,children:l})}),Object(o.jsx)("div",{className:"col-12 text-center",children:Object(o.jsx)(P,{renderer:function(t){var e=t.days,n=t.hours,r=t.minutes,s=t.seconds;return Object(o.jsxs)("span",{className:"display-4",children:[e," day",1!==e&&"s",", ",n," hour",1!==n&&"s",", ",r," minute",1!==r&&"s"," and ",s," second",1!==s&&"s"]})},date:d})})]})}),Object(o.jsx)("div",{className:"row justify-content-center py-5",children:Object(o.jsx)("div",{className:"col",children:Object(o.jsxs)("div",{className:m.a.buttons,children:[n?Object(o.jsx)("a",{className:"btn btn-hackaway-white px-4",children:"Get a Ticket"}):Object(o.jsx)("a",{className:"btn btn-hackaway-white px-4 disabled",children:"Tickets coming soon™"}),Object(o.jsx)(h.Link,{className:"btn btn-hackaway-white px-4",to:p,children:c}),r&&Object(o.jsx)("a",{className:"btn btn-hackaway-white px-4",href:null==i?void 0:i.publicURL,children:"Sponsor Us"})]})})})]})},e}(r.Component),M=n("vVOu"),E=(e.default=function(t){var e=t.data.allMarkdownRemark.nodes[0],n=e.fields,r=e.frontmatter,a=r.name,c=r.show_ticket_button,l=r.show_sponsors_list,u=r.sponsors,d=r.show_sponsor_button,m=r.sponsor_document,h=r.show_livestream,f=r.livestream_youtube,j=r.full_description,b=r.start,v=n.slug;return Object(o.jsxs)(s.a,{children:[Object(o.jsx)(i.a,{title:"Home"}),Object(o.jsx)(_,{show_ticket_button:c,show_sponsor_button:d,show_livestream:h,sponsor_document:m,livestream_youtube:f,full_description:j,name:a,slug:v,start:b}),Object(o.jsx)(p,{}),l&&Object(o.jsx)(M.a,{sponsors:u})]})},"3555669824")},vVOu:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var o=n("dI71"),r=n("nKUr"),s=n("q1tI"),i=n("Aj3y"),a=n("eI7z"),c=n.n(a),l=function(t){function e(){return t.apply(this,arguments)||this}return Object(o.a)(e,t),e.prototype.render=function(){var t=this.props,e=t.sponsors,n=t.sponsor_document,o=void 0===n?null:n,s=t.show_sponsor_button,a=void 0!==s&&s;return Object(r.jsxs)("section",{children:[Object(r.jsx)("h2",{className:"text-center display-4",children:"Sponsors"}),e.map((function(t){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{className:"text-center",style:{color:t.colour},children:Object(r.jsx)("b",{children:t.name})}),Object(r.jsx)("div",{className:Object(i.a)("row","justify-content-center",c.a.sponsorTier),children:t.tier_sponsors.map((function(e){return Object(r.jsx)("a",{href:e.link,className:Object(i.a)("align-middle","rounded",c.a.sponsor),style:{},children:Object(r.jsx)("img",{className:Object(i.a)(c.a.sponsorLogo,c.a["tier"+t.tier]),src:e.image.publicURL,alt:e.name,title:e.name})},e.name)}))})]},t.name)})),a&&Object(r.jsx)("div",{className:Object(i.a)("text-center",c.a.sponsorButtonContainer),children:Object(r.jsx)("a",{href:null==o?void 0:o.publicURL,className:"btn btn-hackaway-white btn-lg",children:"Become a sponsor"})})]})},e}(s.Component)},zfRm:function(t,e,n){t.exports={hackathonDef:"index-module--hackathonDef--29X88",lrContainer:"index-module--lrContainer--GR-Ud",left:"index-module--left--3PN8s",right:"index-module--right--2rmNG"}}}]);
//# sourceMappingURL=component---src-pages-home-js-c4e72d04e56ce48a1227.js.map