(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){},,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/twitter.2b9458f5.svg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/facebook.d254c1dc.svg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/instagram.a805a002.svg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n,c,s=a(1),r=a.n(s),i=a(18),o=a.n(i),l=(a(26),a(2)),d=a(3),u=a(5),j=a(4),p=a(19),b=a(6),h=(a(16),a(27),a.p+"static/media/logo.7d4b0c0a.svg"),m=(a(28),a(0)),_=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).text=n.props.data.text||"\u0422\u0435\u043a\u0441\u0442",n.link=n.props.data.link||"./link-stub",n.height=n.props.data.height,n.border=n.props.data.border,n.arrow=n.props.data.arrow,n.hover=n.props.data.hover,n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.text,t=this.link,a=this.height,n=this.border,c=this.arrow,s=this.hover;return Object(m.jsxs)("div",{className:"button "+(n?"button_border ":"button_gradient ")+("narrow"===a?"button_narrow ":"button_wide ")+(s?"button_hover ":""),children:[Object(m.jsxs)("button",{type:"button",className:"button__block"+(n?" button__block_border ":" button__block_gradient "+(c?"button__block_gradient_arrow":"")),children:[Object(m.jsx)("a",{className:"button__link",href:t,children:e}),c?Object(m.jsx)("div",{className:"button__arrow button__arrow_white"}):""]}),n?Object(m.jsx)("div",{className:"button__border "+(s?"button__border_hover ":"")}):""]})}}]),a}(r.a.Component),O=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).menuItems=n.props.data.items||!1,n.authorization=n.props.data.authorization||!1,n.userName=n.props.data.name||"\u0418\u043c\u044f",n.btnLogin={height:"narrow",text:"\u0412\u043e\u0439\u0442\u0438",border:!0},n.btnRegistr={height:"narrow",text:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"},n}return Object(d.a)(a,[{key:"printMenu",value:function(e){var t=this;return e.map((function(e){return Object(m.jsxs)("li",{className:"header__menu-li "+("active"===e.state?"header__menu-li_active":"")+("expand"===e.type?"header__menu-li_expand js-header__menu-li_expand":""),children:[Object(m.jsx)("a",{className:"header__menu-a",href:e.link,children:e.menuItem}),e.submenu&&Object(m.jsx)("ul",{className:"header__submenu",children:t.submenu(e.submenu)})]})}))}},{key:"submenu",value:function(e){return e.map((function(e){return Object(m.jsx)("li",{className:"header__submenu-li",children:Object(m.jsx)("a",{className:"header__submenu-a",href:e.sbmLink,children:e.menuItem})})}))}},{key:"render",value:function(){var e=this.menuItems,t=this.authorization,a=this.userName,n=this.btnLogin,c=this.btnRegistr;return Object(m.jsx)("header",{className:"header",children:Object(m.jsxs)("div",{className:"header__content-container",children:[Object(m.jsx)("a",{className:"header__logo-link",href:"./landing-page.html",children:Object(m.jsx)("img",{className:"header__logo",src:h,alt:"logo"})}),Object(m.jsx)("div",{className:"header__menu-mobile js-header__menu-mobile"}),Object(m.jsxs)("div",{className:"header__links header__links_hidden",children:[e&&Object(m.jsx)("nav",{className:"header__block-menu",children:Object(m.jsx)("ul",{className:"header__menu",children:this.printMenu(e)})}),t?Object(m.jsxs)("div",{className:"header__block-login",children:[Object(m.jsx)("div",{className:"header__login-vertical-line"}),Object(m.jsx)("p",{children:a})]}):Object(m.jsxs)("div",{className:"header__block-login",children:[Object(m.jsx)("div",{className:"header__btn header__btn_border",children:Object(m.jsx)(_,{data:n})}),Object(m.jsx)("div",{className:"header__btn header__btn_gradient",children:Object(m.jsx)(_,{data:c})})]})]})]})})}}]),a}(r.a.Component),x=(a(30),a.p+"static/media/logo.7d4b0c0a.svg"),f=(a(31),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).twitter={on:c.props.twitter||!1,name:"twitter",link:c.props.twitter||"./link-stub",icon:a(32).default},c.facebook={on:c.props.facebook||!1,name:"facebook",link:c.props.facebook||"./link-stub",icon:a(33).default},c.instagram={on:c.props.instagram||!1,name:"instagram",link:c.props.instagram||"./link-stub",icon:a(34).default},c.socs=[c.twitter,c.facebook,c.instagram],c}return Object(d.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"social",children:this.socs.map((function(e,t){return e.on&&Object(m.jsx)("span",{className:"social__item",children:Object(m.jsx)("a",{href:e.link,children:Object(m.jsx)("img",{className:"social__item ".concat(e.name),src:e.icon,alt:e.name})})})}))})}}]),n}(r.a.Component)),v=(a(35),a(36),function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).topic=n.props.topic||"",n.label=n.props.label||"",n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.topic,t=this.label;return""!==e&&""!==t?Object(m.jsxs)("div",{className:"topic-label",children:[Object(m.jsx)("h3",{className:"topic-label__topic",children:e}),Object(m.jsx)("p",{className:"topic-label__additional-text",children:t})]}):""!==e?Object(m.jsx)("div",{className:"topic-label",children:Object(m.jsx)("h3",{className:"topic-label__topic",children:e})}):""!==t&&Object(m.jsx)("div",{className:"topic-label",children:Object(m.jsx)("p",{className:"topic-label__additional-text",children:t})})}}]),a}(r.a.Component)),k=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).data={id:n.props.data.id,topic:n.props.data.topic||"",label:n.props.data.label||"",placeholder:n.props.data.placeholder||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435...",inputText:n.props.data.inputText||"",state:n.props.data.state||"",type:n.props.data.type||"",name:n.props.data.name||""},n}return Object(d.a)(a,[{key:"checkSubscription",value:function(e){return"subscription"===e?"input-text_subscription":""}},{key:"checkFocus",value:function(e){return"focus"===e?"input-text__input_hover":""}},{key:"checkNameDate",value:function(e){return"date"===e?"input-text__input_date":""}},{key:"render",value:function(){var e=this.data,t=e.id,a=e.topic,n=e.label,c=e.placeholder,s=e.inputText,r=e.state,i=e.type,o=e.name;return Object(m.jsxs)("div",{className:"input-text ".concat(this.checkSubscription(i)),children:[Object(m.jsx)(v,{topic:a,label:n}),Object(m.jsx)("input",{className:"input-text__input ".concat(this.checkFocus(r)," ").concat(this.checkNameDate(o)),name:o,placeholder:c,id:"inputText".concat(t),value:s})]})}}]),a}(r.a.Component),g=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).footerMenu=[{topic:"\u041d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044f",listMenu:[{text:"\u041e \u043d\u0430\u0441"},{text:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"},{text:"\u0421\u043b\u0443\u0436\u0431\u0430 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438"},{text:"\u0423\u0441\u043b\u0443\u0433\u0438"}]},{topic:"\u041e \u043d\u0430\u0441",listMenu:[{text:"\u041e \u0441\u0435\u0440\u0432\u0438\u0441\u0435"},{text:"\u041d\u0430\u0448\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430"},{text:"\u0412\u0430\u043a\u0430\u043d\u0441\u0438\u0438"},{text:"\u0418\u043d\u0432\u0435\u0441\u0442\u043e\u0440\u044b"}]},{topic:"\u0421\u043b\u0443\u0436\u0431\u0430 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438",listMenu:[{text:"\u0421\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u044f"},{text:"\u0421\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430"},{text:"\u0421\u0432\u044f\u0437\u044c \u0441 \u043d\u0430\u043c\u0438"}]}],n.inputSubscription={placeholder:"Email",id:"Footer",type:"subscription"},n}return Object(d.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("footer",{className:"footer",children:[Object(m.jsx)("div",{className:"footer__block-menu",children:Object(m.jsxs)("div",{className:"footer__content-container",children:[Object(m.jsxs)("div",{className:"footer__logo-block",children:[Object(m.jsx)("img",{className:"footer__logo",src:x,alt:"logo"}),Object(m.jsx)("p",{className:"footer__logo-text",children:"\u0411\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043d\u043e\u043c\u0435\u0440\u043e\u0432 \u0432 \u043b\u0443\u0447\u0448\u0435\u043c \u043e\u0442\u0435\u043b\u0435 2019 \u0433\u043e\u0434\u0430 \u043f\u043e \u0432\u0435\u0440\u0441\u0438\u0438 \u0430\u0441\u0441\u043e\u0446\u0438\u0430\u0446\u0438\u0438 \xab\u041e\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0432\u0437\u0433\u043b\u044f\u0434\u044b\xbb"})]}),Object(m.jsx)("ul",{className:"footer__footer-menu",children:this.footerMenu.map((function(e,t){return Object(m.jsx)("li",{className:"footer__menu-column",children:Object(m.jsxs)("ul",{className:"footer__menu-list",children:[Object(m.jsx)("li",{className:"footer__menu-topic-column",children:e.topic}),e.listMenu.map((function(e,t){return Object(m.jsx)("li",{className:"footer__menu-li",children:Object(m.jsx)("a",{className:"footer__menu-a",href:e.link||"./link-stub",children:e.text})})}))]})},t)}))}),Object(m.jsxs)("div",{className:"footer__subscription",children:[Object(m.jsx)("p",{className:"footer__subscription-topic",children:" \u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0430"}),Object(m.jsx)("p",{className:"footer__subscription-text",children:"\u041f\u043e\u043b\u0443\u0447\u0430\u0439\u0442\u0435 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0438 \u043d\u043e\u0432\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u0430"}),Object(m.jsx)("div",{className:"footer__subscription-input",children:Object(m.jsx)(k,{data:this.inputSubscription})})]})]})}),Object(m.jsx)("div",{className:"footer__copyright-block",children:Object(m.jsxs)("div",{className:"footer__copyright-content",children:[Object(m.jsx)("p",{className:"footer__copyright-text",children:" Copyright \xa9 2018 Toxin \u043e\u0442\u0435\u043b\u044c. \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b."}),Object(m.jsx)(f,{twitter:"https://twitter.com/",facebook:"https://www.facebook.com/",instagram:"https://www.instagram.com/"})]})})]})}}]),a}(r.a.Component),N=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).header={on:0!==n.props.header,items:[{menuItem:"\u041e \u043d\u0430\u0441"},{menuItem:"\u0423\u0441\u043b\u0443\u0433\u0438",type:"expand",submenu:[{menuItem:"\u0423\u0441\u043b\u0443\u0433\u0430 \u21161"},{menuItem:"\u0423\u0441\u043b\u0443\u0433\u0430 \u21162"}]},{menuItem:"\u0412\u0430\u043a\u0430\u043d\u0441\u0438\u0438"},{menuItem:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"},{menuItem:"\u0421\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u044f",type:"expand",submenu:[{menuItem:"\u0421\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435 \u21161"},{menuItem:"\u0421\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435 \u21162"}]}]},n.footer={on:0!==n.props.footer},n}return Object(d.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[this.header.on&&Object(m.jsx)(O,{data:this.header}),this.props.content&&this.props.content(),this.footer.on&&Object(m.jsx)(g,{})]})}}]),a}(r.a.Component),w=null!==(n=null===(c=document.querySelector("base"))||void 0===c?void 0:c.getAttribute("href"))&&void 0!==n?n:"/";console.log(w);a(37);var y=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).data={url:"./link-stub",text:"\u0421\u0441\u044b\u043b\u043a\u0430",type:"",classBlock:""},n}return Object(d.a)(a,[{key:"defineUrl",value:function(){return this.props.url||this.data.url}},{key:"defineText",value:function(){return this.props.text||this.data.text}},{key:"defineType",value:function(){switch(this.props.type||this.data.type){case"gray":return"link link_gray";case"clean":return"link link_clean";case"ok":return"link link_ok";default:return"link"}}},{key:"render",value:function(){return Object(m.jsx)("div",{className:this.props.classBlock,children:Object(m.jsx)("a",{className:this.defineType(),href:this.defineUrl(),children:this.defineText()})})}}]),a}(r.a.Component),C=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).data={},n}return Object(d.a)(a,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"start-page",children:[Object(m.jsx)("h2",{children:"Pages Toxin:"}),Object(m.jsxs)("div",{className:"start-page__links",children:[Object(m.jsx)(y,{classBlock:"start-page__link",text:"landing page",url:"./landing-page.html"}),Object(m.jsx)(y,{classBlock:"start-page__link",text:"registration"}),Object(m.jsx)(y,{classBlock:"start-page__link",text:"sing in"}),Object(m.jsx)(y,{classBlock:"start-page__link",text:"search room"})]})]})})}}]),a}(r.a.Component),I=(a(38),a(39),a(40),function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).dropdownDate={name:n.props.data.name,topic:n.props.data.topic||"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",label:n.props.data.label||"",activeText:n.props.data.activeText||"\u0422\u0435\u043a\u0441\u0442",id:n.props.data.id||"",state:n.props.data.state||"close",hasBtns:n.props.data.hasBtns||!0,items:n.props.data.items||[]},n.dropdownOpenClass="",n.dropdownItemsHiddenClass="",n}return Object(d.a)(a,[{key:"vars",value:function(){}},{key:"render",value:function(){var e=this.dropdownDate,t=e.name,a=e.topic,n=e.label,c=e.activeText,s=e.id,r=e.state,i=e.hasBtns,o=e.items,l=this.dropdownOpenClass,d=this.dropdownItemsHiddenClass;return"close"===r?d="dropdown__items_hidden":l="dropdown__field_actived",Object(m.jsxs)("div",{className:"dropdown js-dropdown",name:t,id:s,children:[Object(m.jsx)(v,{topic:a,label:n}),0!==o?Object(m.jsx)("div",{className:"dropdown__field js-dropdown__field ".concat(l),children:c}):Object(m.jsx)("div",{className:"dropdown__field js-dropdown__field",children:c}),0!==o&&Object(m.jsx)("div",{className:"dropdown__items ".concat(d),children:i&&Object(m.jsxs)("div",{className:"dropdown__btns js-dropdown__btns",children:[Object(m.jsx)("div",{className:"dropdown__btn-link dropdown__btn-link_clean",children:Object(m.jsx)(y,{text:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c",type:"clean"})}),Object(m.jsx)("div",{className:"dropdown__btn-link dropdown__btn-link_ok",children:Object(m.jsx)(y,{text:"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c",type:"ok"})})]})}),"date"===t&&Object(m.jsx)("div",{className:"dropdown__calendar"})]})}}]),a}(r.a.Component)),T=(a(41),a(42),a(43),a(44),a(45),function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state=n.props.state||"close",n.classWrapper=n.props.classWrapper||"",n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=this.classWrapper;return Object(m.jsx)("div",{className:t,children:"open"===e?Object(m.jsx)("div",{className:"datepicker-here js-datepicker-here"}):Object(m.jsx)("div",{className:"datepicker-here js-datepicker-here datepicker-here_hide"})})}}]),a}(r.a.Component)),B=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).fields=n.props.fields,n}return Object(d.a)(a,[{key:"getObj",value:function(e){return{topic:e.topic||"",activeDate:e.activeDate||"\u0414\u0414.\u041c\u041c.\u0413\u0413\u0413\u0413"}}},{key:"render",value:function(){var e=this,t=this.fields;return Object(m.jsxs)("div",{className:"dropdown-dates js-dropdown-dates",children:[t.map((function(t,a){return Object(m.jsxs)("div",{className:"dropdown-dates__date-block",name:"date",children:[""!==e.getObj(t).topic&&Object(m.jsx)("h3",{children:e.getObj(t).topic}),Object(m.jsx)("div",{className:"dropdown-dates__dropdown js-dropdown-dates__dropdown",children:e.getObj(t).activeDate})]},a)})),Object(m.jsx)(T,{classWrapper:"dropdown-dates__calendar",state:"open"})]})}}]),a}(r.a.Component),D=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).action=n.props.action||"./link-stub",n.button={text:"\u043f\u043e\u0434\u043e\u0431\u0440\u0430\u0442\u044c \u043d\u043e\u043c\u0435\u0440"},n.guests={topic:"\u0413\u043e\u0441\u0442\u0438",id:"dropdownFormSearchRoom",items:[{text:"\u0432\u0437\u0440\u043e\u0441\u043b\u044b\u0435",number:2},{text:"\u0434\u0435\u0442\u0438",number:1},{text:"\u043c\u043b\u0430\u0434\u0435\u043d\u0446\u044b"}]},n.fieldsDates=[{topic:"\u041f\u0440\u0438\u0431\u044b\u0442\u0438\u0435"},{topic:"\u0412\u044b\u0435\u0437\u0434"}],n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.action,t=this.button,a=this.guests,n=this.fieldsDates;return Object(m.jsxs)("form",{className:"form-search-room",action:e,children:[Object(m.jsx)("h1",{className:"form-search-room__topic",children:"\u041d\u0430\u0439\u0434\u0451\u043c \u043d\u043e\u043c\u0435\u0440\u0430 \u043f\u043e\u0434 \u0432\u0430\u0448\u0438 \u043f\u043e\u0436\u0435\u043b\u0430\u043d\u0438\u044f"}),Object(m.jsx)("div",{className:"form-search-room__dropdown-dates",children:Object(m.jsx)(B,{fields:n})}),Object(m.jsx)(I,{data:a}),Object(m.jsx)("div",{className:"form-search-room__button",children:Object(m.jsx)(_,{data:t})})]})}}]),a}(r.a.Component),M=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).data={},n}return Object(d.a)(a,[{key:"render",value:function(){return Object(m.jsx)("main",{className:"landing-page",children:Object(m.jsxs)("div",{className:"landing-page__content-container",children:[Object(m.jsx)("div",{className:"landing-page__form-search-num",children:Object(m.jsx)(D,{})}),Object(m.jsx)("p",{className:"landing-page__background-text",children:"\u041b\u0443\u0447\u0448\u0438\u0435 \u043d\u043e\u043c\u0435\u0440\u0430 \u0434\u043b\u044f \u0432\u0430\u0448\u0435\u0439 \u0440\u0430\u0431\u043e\u0442\u044b, \u043e\u0442\u0434\u044b\u0445\u0430 \u0438 \u043f\u0440\u043e\u0441\u0442\u043e \u0432\u0434\u043e\u0445\u043d\u043e\u0432\u0435\u043d\u0438\u044f"})]})})}}]),a}(r.a.Component),F=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).data={},n}return Object(d.a)(a,[{key:"render",value:function(){return console.log("".concat(w,"/landing-page.html"),"ppppppppppp"),Object(m.jsxs)(p.a,{basename:w,children:[Object(m.jsx)(b.a,{exact:!0,path:"/landing-page.html",children:Object(m.jsx)(N,{header:0,content:function(){return Object(m.jsx)(C,{})},footer:0})}),Object(m.jsx)(b.a,{exact:!0,path:"/",children:Object(m.jsx)(N,{content:function(){return Object(m.jsx)(M,{})}})})]})}}]),a}(r.a.Component),S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,52)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};o.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(F,{})}),document.getElementById("root")),S(),console.log("hi - 3!")}],[[51,1,2]]]);
//# sourceMappingURL=main.501b1229.chunk.js.map