(this["webpackJsonpthe-modern-posts"]=this["webpackJsonpthe-modern-posts"]||[]).push([[0],Array(22).concat([function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),o=n(15),r=n.n(o),a=(n(22),n(23),n(2)),i=n(8),l=n(9),u=n(11),j=n(10),h=(n(24),n(25),n(26),n(0)),d=function(t){var e=t.title,n=t.id,c=Object(a.f)();return Object(h.jsx)("div",{className:"post-item",children:Object(h.jsx)("h2",{onClick:function(){c("/post/".concat(n))},children:e})})},m=function(t){var e=t.posts;return Object(h.jsx)("div",{className:"post-list",children:e.map((function(t){return Object(h.jsx)(d,{title:t.title,id:t.id},t.id)}))})},p=(n(28),function(t){var e=t.placeholder,n=t.handleChangeFunction;return Object(h.jsx)("div",{className:"search-input",children:Object(h.jsx)("input",{placeholder:e,onChange:n})})}),b=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(i.a)(this,n),(t=e.call(this)).setSearchInputText=function(e){t.setState({searchInput:e.target.value})},t.state={posts:[],searchInput:""},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.posts,n=t.searchInput,c=e.filter((function(t){return t.title.toLowerCase().includes(n.toLowerCase())}));return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"title",children:"THE MODERN POSTS"}),Object(h.jsx)(p,{placeholder:"Search by post",handleChangeFunction:this.setSearchInputText}),Object(h.jsxs)("div",{className:"section-title",children:[Object(h.jsx)("h2",{children:"Latest Posts"}),Object(h.jsx)("hr",{})]}),Object(h.jsx)(m,{posts:c})]})}},{key:"componentDidMount",value:function(){var t=this;fetch("https://jsonplaceholder.typicode.com/posts").then((function(t){return t.json()})).then((function(e){return t.setState({posts:e})}))}}]),n}(s.a.Component),O=n(4),f=n(12),x=n(14),v=n.n(x),C=n(17),y=n(16),S=(n(30),n(31),function(){var t=Object(a.f)();return Object(h.jsx)("div",{className:"back-button",children:Object(h.jsx)("button",{onClick:function(){return t("/")},children:Object(h.jsx)("p",{children:"Back to Posts"})})})}),g=(n(32),function(t){var e=t.title,n=t.body;return Object(h.jsxs)("div",{className:"post-info",children:[Object(h.jsx)("h2",{children:e}),Object(h.jsx)("p",{children:n})]})}),N=(n(33),n(34),function(t){var e=t.name,n=t.body,c=t.email;return Object(h.jsxs)("div",{className:"comment-info",children:[Object(h.jsx)("h4",{children:e}),Object(h.jsx)("p",{children:c}),Object(h.jsx)("p",{children:n})]})});function k(t){return t.length}var I=function(t){var e=t.comments;return Object(h.jsxs)("div",{className:"comment-list",children:[Object(h.jsxs)("h2",{children:["Comments (",k(e),")"]}),e.map((function(t,e){return Object(h.jsx)(N,Object(f.a)({},t),e)}))]})},P=(n(35),n(36),function(){return Object(h.jsxs)("div",{className:"add-comment",children:[Object(h.jsx)("input",{placeholder:"Name"}),Object(h.jsx)("input",{placeholder:"Email"}),Object(h.jsx)("textarea",{label:"comments",placeholder:"Enter your comment here.."})]})}),T=(n(37),function(t){var e=t.buttonText,n=t.handleOnClickFunction;return Object(h.jsx)("div",{className:"custom-button",children:Object(h.jsx)("button",{onClick:n||null,children:Object(h.jsx)("p",{children:e})})})}),A=function(t){var e=t.handleOnSubmit;return Object(h.jsxs)("form",{onSubmit:e,children:[Object(h.jsx)(P,{}),Object(h.jsx)(T,{buttonText:"Post Comment",type:"submit"})]})},D=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(i.a)(this,n),(t=e.call(this)).addComment=function(){var e=Object(y.a)(v.a.mark((function e(n){var c,s,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),c=n.target[0].value,s=n.target[1].value,o=n.target[2].value,e.prev=4,e.next=7,t.callAddCommentService(c,s,o);case 7:e.sent,t.setState({postComments:[].concat(Object(C.a)(t.state.postComments),[{name:c,email:s,body:o}])}),n.target.reset(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),console.error("Error Adding Comment: ",e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}(),t.state={postDetails:{},postComments:[]},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"post-details",children:[Object(h.jsx)(g,Object(f.a)({},this.state.postDetails)),Object(h.jsx)(I,{comments:this.state.postComments}),Object(h.jsxs)("div",{className:"comment-header",children:[Object(h.jsx)("h3",{children:"Write A Comment"}),Object(h.jsx)("hr",{})]}),Object(h.jsx)(A,{handleOnSubmit:this.addComment}),Object(h.jsx)(S,{})]})}},{key:"componentDidMount",value:function(){this.callPostsAndCommentsServices()}},{key:"callAddCommentService",value:function(t,e,n){return fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify({name:t,email:e,body:n}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(t){return t.json()}))}},{key:"callPostsAndCommentsServices",value:function(){var t=this;Promise.all([fetch("https://jsonplaceholder.typicode.com/posts/".concat(this.props.postId)).then((function(t){return t.json()})),fetch("https://jsonplaceholder.typicode.com/posts/".concat(this.props.postId,"/comments")).then((function(t){return t.json()}))]).then((function(e){var n=Object(O.a)(e,2),c=n[0],s=n[1];t.setState({postDetails:c}),t.setState({postComments:s})})).catch((function(t){console.error("Error Calling Services: ",t.message)}))}}]),n}(s.a.Component),F=D;function E(){var t=Object(a.g)().postId;return Object(h.jsx)(F,{postId:t})}var w=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(a.c,{children:[Object(h.jsx)(a.a,{path:"/",element:Object(h.jsx)(b,{})}),Object(h.jsx)(a.a,{path:"/post/:postId",element:Object(h.jsx)(E,{})})]})})},L=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),c(t),s(t),o(t),r(t)}))},M=n(6);r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(M.a,{children:Object(h.jsx)(w,{})})}),document.getElementById("root")),L()}]),[[38,1,2]]]);
//# sourceMappingURL=main.928c26e1.chunk.js.map