(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{39:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n(24),o=n.n(r),i=(n(39),n(25)),u=n(26),l=n(33),s=n(32),b=n(6),g=n(2),j=n(11),m=n(27),f=n.n(m),d="https://pixabay.com/api/",O="19534970-c150d60c17d66f9c0c2e6c44f",h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return f.a.get("".concat(d,"/?q=").concat(e,"&page=").concat(t,"&key=").concat(O,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},p=function(e){var t=e.webformatURL,n=e.largeImageURL,c=e.tags,r=e.onClick;return Object(a.jsx)("li",{className:"ImageGalleryItem",onClick:r,children:Object(a.jsx)("img",{src:t,alt:c,"data-url":n,className:"ImageGalleryItem-image"})})},x=function(e){var t=e.images,n=e.onClick;return Object(a.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(a.jsx)(p,{largeImageURL:e.largeImageURL,tag:e.tag,onClick:n,webformatURL:e.webformatURL},e.id)}))})},v=function(e){var t=e.onSubmit,n=Object(c.useState)(""),r=Object(j.a)(n,2),o=r[0],i=r[1];return Object(a.jsx)("header",{className:"Searchbar",children:Object(a.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),console.log(o),t(o)},children:[Object(a.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(a.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(a.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:o,onChange:function(e){var t=e.target.value;console.log(t),i(t)}})]})})},w=n(8),y=n(9);function L(){var e=Object(w.a)(["\ndisplay:block;\nmargin: 20px auto;\n    min-width: 300px;\n    padding: 16px 32px;\n\n    border: 1px solid #3f51b5;\n    border-radius: 5px;\n\n    font-size: 18px;\n    font-weight: 700;\n    text-align: center;\n\n    color: #fff;\n    text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #808080;\n    background-color: #3f51b5;\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n    cursor: pointer;\n  &:hover,\n&:focus {\n    color: #3f51b5;\n    background-color: #fff;\n}\n    \n"]);return L=function(){return e},e}var k=y.a.button(L()),I=function(e){var t=e.onLoadMore;return Object(a.jsx)(k,{type:"button",className:"Load-button",onClick:t,children:Object(a.jsx)("span",{className:"Load-button-label",children:"Load more"})})},N=function(e){var t=e.url,n=e.alt,c=e.onClick;return Object(a.jsx)("div",{className:"Overlay",onClick:c,children:Object(a.jsx)("div",{className:"Modal",children:Object(a.jsx)("img",{src:t,alt:n})})})},C=n(31),R=n.n(C);n(79);function S(){var e=Object(w.a)(["\nmargin: 20px auto;\ntext-align:center;\n"]);return S=function(){return e},e}var U=y.a.div(S()),F=function(){return Object(a.jsx)(U,{children:Object(a.jsx)(R.a,{type:"ThreeDots",color:"#3f51b5",height:100,width:100,timeout:3e3})})},E={images:[],loading:!1,error:null,searchQuery:"",page:1,largeImageURL:null},G=function(){var e=Object(c.useState)(Object(g.a)({},E)),t=Object(j.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){return window.addEventListener("keydown",o),function(){window.removeEventListener("keydown",o)}})),Object(c.useEffect)((function(){n.page>2&&window.scrollBy({top:document.documentElement.clientHeight,behavior:"smooth"})}),[n.page]);var o=function(e){"Escape"===e.code&&r((function(e){return Object(g.a)(Object(g.a)({},e),{},{largeImageURL:null})}))};return Object(a.jsxs)("div",{children:[Object(a.jsx)(v,{onSubmit:function(e){if(""!==e){var t=n.page;r((function(e){return Object(g.a)(Object(g.a)({},e),{},{loading:!0})})),h(e,t).then((function(t){return r((function(n){return Object(g.a)(Object(g.a)({},n),{},{images:[].concat(Object(b.a)(n.images),Object(b.a)(t)),page:n.page+1,searchQuery:e,loading:!0})}))})).catch((function(e){return r((function(e){return Object(g.a)(Object(g.a)({},e),{},{error:"something went wrong"})}))})).finally((function(){return r((function(e){return Object(g.a)(Object(g.a)({},e),{},{loading:!1})}))}))}}}),0===n.images.length&&Object(a.jsx)("h1",{children:"Please, enter your search"}),n.loading&&Object(a.jsx)(F,{}),n.images.length>0&&Object(a.jsx)(x,{images:n.images,onClick:function(e){r((function(t){return Object(g.a)(Object(g.a)({},t),{},{largeImageURL:e.target.dataset.url})}))}}),n.loading&&Object(a.jsx)(F,{}),n.images.length>0&&Object(a.jsx)(I,{onLoadMore:function(){var e=n.page,t=n.searchQuery;r((function(e){return Object(g.a)(Object(g.a)({},e),{},{loading:!0})})),h(t,e).then((function(e){return r((function(t){return Object(g.a)(Object(g.a)({},t),{},{images:[].concat(Object(b.a)(t.images),Object(b.a)(e)),page:t.page+1})}))})).catch((function(e){return r((function(e){return Object(g.a)(Object(g.a)({},e),{},{error:"something went wrong"})}))})).finally((function(){return r((function(e){return Object(g.a)(Object(g.a)({},e),{},{loading:!1})}))}))}}),n.largeImageURL&&Object(a.jsx)(N,{url:n.largeImageURL,alt:n.images.tag,onClick:function(e){"IMG"!==e.target.nodeName&&r((function(e){return Object(g.a)(Object(g.a)({},e),{},{largeImageURL:null})}))}})]})},M=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(G,{})})}}]),n}(c.Component);o.a.render(Object(a.jsx)(M,{}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.adab47ae.chunk.js.map