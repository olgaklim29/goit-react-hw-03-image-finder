(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(7),s=a.n(r),o=(a(15),a(3)),i=a(4),l=a(6),u=a(5),h=(a(16),a(9)),d=function(){function e(){Object(o.a)(this,e),this.searchQuery="",this.page=1}return Object(i.a)(e,[{key:"searchQuery",get:function(){return this._searchQuery},set:function(e){return this._searchQuery=e}},{key:"resetPage",value:function(){this.page=1}},{key:"fetchImages",value:function(e){var t="".concat("https://pixabay.com/api/","?image_type=photo&orientation=horizontal&q=").concat(this.searchQuery,"&page=").concat(this.page,"&per_page=12&key=").concat("23232157-ed61124855b6c79290677e8dc");return fetch(t).then((function(e){return e.json()})).then(this.page+=1).catch((function(e){return console.log(e)}))}}]),e}(),j=a(0);function p(e){var t=e.item;return Object(j.jsx)("li",{className:"ImageGalleryItem",children:Object(j.jsx)("img",{className:"ImageGalleryItem-image",src:t.webformatURL,alt:t.tags,"data-large":t.largeImageURL})})}function m(e){var t=e.handleClick;return Object(j.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})}var f=a(10),b=a.n(f);function g(){return Object(j.jsx)("div",{className:"Loader",children:Object(j.jsx)(b.a,{type:"ThreeDots",color:"#303f9f",height:80,width:80})})}var v=new d,O=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={searchResults:[],status:"idle"},e.handleClick=function(){v.fetchImages().then((function(t){e.setState((function(e){return{searchResults:[].concat(Object(h.a)(e.searchResults),Object(h.a)(t.hits)),status:"resolved"}}))})).catch((function(t){console.log(t),e.setState({status:"rejected"})}))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;e.searchValue!==this.props.searchValue&&(this.setState({status:"pending"}),v.resetPage(),v.searchQuery=this.props.searchValue,v.fetchImages().then((function(e){a.setState({searchResults:e.hits,status:"resolved"})})).catch((function(e){console.log(e),a.setState({status:"rejected"})}))),t.searchResults.length!==this.state.searchResults.length&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.status,a=e.searchResults,n=this.handleClick,c=this.props.openModal;return"idle"===t?Object(j.jsx)("div",{}):"pending"===t?Object(j.jsx)(g,{}):"resolved"===t?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("ul",{className:"ImageGallery",onClick:c,children:this.state.searchResults.map((function(e){return Object(j.jsx)(p,{item:e},e.id)}))}),0!==a.length?Object(j.jsx)(m,{handleClick:n}):Object(j.jsx)("p",{className:"textNotification",children:"Sorry, I didn't find anything"})]}):"regected"===t?Object(j.jsx)("p",{className:"textNotification",children:"Error!!!"}):void 0}}]),a}(n.Component),y=O,x=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={value:""},e.handleInputChange=function(t){var a=t.currentTarget.value;e.setState({value:a})},e.handleSubmite=function(t){var a=e.state.value;t.preventDefault(),e.props.getFormData(a),e.reset()},e.reset=function(){e.setState({value:""})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.value,t=this.handleInputChange,a=this.handleSubmite;return Object(j.jsx)("header",{className:"Searchbar",children:Object(j.jsxs)("form",{className:"SearchForm",onSubmit:a,children:[Object(j.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(j.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(j.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:e,onChange:t})]})})}}]),a}(n.Component),w=x,k=document.querySelector("#modal-root"),S=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(r.createPortal)(Object(j.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(j.jsx)("div",{className:"Modal",children:this.props.children})}),k)}}]),a}(n.Component),C=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={searchValue:" ",showModal:!1},e.getSearchValues=function(t){return e.setState({searchValue:t})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.openModal=function(t){var a=t.target,n=a.dataset;"IMG"===a.nodeName&&e.setState((function(e){var t=e.showModal;return{modalImg:n.large,showModal:!t}}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.searchValue,a=e.showModal,n=e.modalImg,c=this.getSearchValues,r=this.toggleModal,s=this.openModal;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(w,{getFormData:c}),Object(j.jsx)(y,{searchValue:t,openModal:s}),a&&Object(j.jsx)(S,{onClose:r,children:Object(j.jsx)("img",{src:n,alt:""})})]})}}]),a}(n.Component),N=C;s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.da0df4ac.chunk.js.map