(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[5],{413:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(43),r=a(44),o=a(47),l=a(46),s=a(18),i=a(0),c=a.n(i),u=a(28),m=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){Object(o.a)(i,t);var a=Object(l.a)(i);function i(){return Object(n.a)(this,i),a.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){return this.props.isAuth?c.a.createElement(e,this.props):c.a.createElement(s.a,{to:"/login"})}}]),i}(c.a.Component);return Object(u.b)(m)(t)}},414:function(e,t,a){e.exports=a.p+"static/media/user.4b0cb4ba.png"},421:function(e,t,a){e.exports={avatar:"MyProfile_avatar__1RRyK",status:"MyProfile_status__mVfxj",contact:"MyProfile_contact__vKyqc"}},429:function(e,t,a){e.exports={myPosts:"MyPosts_myPosts__2y_2I",newPost:"MyPosts_newPost__1_5FO",send:"MyPosts_send__hQ1gk",posts:"MyPosts_posts__3SjJC"}},430:function(e,t,a){e.exports={item:"Posts_item__E3G83",like:"Posts_like__AOF3L",newComment:"Posts_newComment__1dJ2o",send:"Posts_send__WLL5v",post:"Posts_post__2xOck"}},460:function(e,t,a){"use strict";a.r(t);var n=a(43),r=a(44),o=a(47),l=a(46),s=a(0),i=a.n(s),c=a(89),u=a(62),m=a(429),p=a.n(m),d=a(430),f=a.n(d),E=a(400),b=a(72),h=a(428),v=function(e){i.a.createRef();return i.a.createElement("div",{className:f.a.post},i.a.createElement("div",{className:f.a.item},i.a.createElement("img",{src:"https://www.meme-arsenal.com/memes/ae1d44253a861f53d95864dd37c55a78.jpg"})," ",e.message),i.a.createElement("div",{className:f.a.like},i.a.createElement("img",{src:"https://img.icons8.com/cotton/2x/facebook-like.png"}),e.likesCount),i.a.createElement("div",null,i.a.createElement(b.a,{id:"standard-basic",label:"Comment"})),i.a.createElement("div",null,i.a.createElement(E.a,{onClick:function(){},variant:"contained",className:f.a.button,endIcon:i.a.createElement(h.a,null,"send")},"send")))},g=a(171),y=a(172),P=a(74),_=a(358),O=i.a.memo((function(e){var t=Object(u.a)(e.posts).reverse().map((function(e){return i.a.createElement(v,{message:e.post,likesCount:e.likesCount})}));return i.a.createElement("div",null,i.a.createElement("hr",null),i.a.createElement("div",null,i.a.createElement(j,{onSubmit:function(t){e.addPost(t.newPostBody),t.newPostBody=""}})),i.a.createElement("div",{className:p.a.posts},t))})),j=Object(y.a)({form:"addPostForm"})((function(e){var t=Object(_.a)((function(e){return{field:{"& .MuiTextField-root":{margin:e.spacing(1),width:"98ch"}},root:{"& > *":{margin:e.spacing(1),width:"150px",float:"right",marginRight:"13px",marginBottom:"10px"}}}}))();return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",{className:t.field},i.a.createElement(g.a,{component:P.f,name:"newPostBody",label:"New Post"})),i.a.createElement("div",{className:t.root},i.a.createElement(E.a,{onClick:e.handleSubmit,variant:"contained",color:"primary",endIcon:i.a.createElement(h.a,null,"send")},"Send")))})),k=O,w=a(28),S=Object(w.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e(Object(c.a)(t))}}}))(k),M=a(421),N=a.n(M),C=a(98),x=a(131),A=function(e){var t=Object(s.useState)(!1),a=Object(x.a)(t,2),n=a[0],r=a[1],o=Object(s.useState)(e.status),l=Object(x.a)(o,2),c=l[0],u=l[1];Object(s.useEffect)((function(){u(e.status)}),[e.status]);return i.a.createElement("div",{className:N.a.status},n?i.a.createElement("div",null,i.a.createElement("input",{onChange:function(e){u(e.target.value)},autoFocus:!0,onBlur:function(){r(!1),e.updateStatus(c)},value:c})):i.a.createElement("div",null,i.a.createElement("span",{onClick:function(){r(!0)}},e.status||"-----")))},F=a(414),I=a.n(F),J=a(452),B=a.n(J),D=a(431),L=a.n(D),R=Object(y.a)({form:"edit-profile"})((function(e){var t=L()((function(e){return{button:{margin:e.spacing(1)},field:{margin:e.spacing(1),width:"40ch"},input:{margin:e.spacing(1),width:"25ch"}}}))();return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement("b",null," Full name: ",i.a.createElement(g.a,{className:t.input,component:P.c,name:"fullName",type:"input"}))),i.a.createElement("div",null,i.a.createElement("b",null,"looking for a job"),": ",i.a.createElement(g.a,{component:P.b,name:"lookingForAJob",type:"checkbox"})),i.a.createElement("div",null,i.a.createElement("b",null,"My professional skills"),": ",i.a.createElement(g.a,{className:t.field,component:P.f,name:"lookingForAJobDescription",type:"input"})),i.a.createElement("div",null,i.a.createElement("b",null,"About me"),": ",i.a.createElement(g.a,{className:t.field,component:P.f,name:"aboutMe",type:"input"})),i.a.createElement("div",null,i.a.createElement("b",null,"Contacts"),":",Object.keys(e.profile.contacts).map((function(e){return i.a.createElement("div",null,e," : ",i.a.createElement(g.a,{component:P.c,name:"contacts."+e,placeholder:e,type:"input"}))}))),e.error&&i.a.createElement("div",{className:t.formSummaryError},e.error),i.a.createElement(E.a,{onClick:e.handleSubmit,variant:"contained",color:"primary",size:"small",className:t.button,startIcon:i.a.createElement(B.a,null)},"save"))})),U=a(405),V=a(453),z=a.n(V),T=a(406),K=function(e){return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job"),": ",e.profile.lookingForAJob?"Yes":"No"," "),i.a.createElement("div",null,i.a.createElement("b",null,"My professional skills"),": ",e.profile.lookingForAJobDescription),i.a.createElement("div",null,i.a.createElement("b",null,"About me"),": ",e.profile.aboutMe),i.a.createElement("div",null,i.a.createElement("b",null,"Contacts :"),Object.keys(e.profile.contacts).map((function(t){return i.a.createElement(q,{key:t,contactTitle:t,contactValue:e.profile.contacts[t]})}))))},q=function(e){var t=e.contactTitle,a=e.contactValue;return i.a.createElement("div",{className:N.a.contact},i.a.createElement("b",null,t),": ",i.a.createElement("a",{href:a},a))},G=function(e){var t=Object(_.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},input:{display:"none"}}}))();if(!e.profile.photos)return i.a.createElement(C.a,null);return i.a.createElement(T.a,{direction:"row",container:!0,justify:"flex-start"},i.a.createElement(T.a,{sm:4,className:N.a.avatar},i.a.createElement("img",{src:e.profile.photos.large?e.profile.photos.large:I.a}),e.isOwner&&i.a.createElement("div",{className:t.root},i.a.createElement("input",{accept:"image/*",className:t.input,id:"icon-button-file",type:"file",onChange:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}}),i.a.createElement("label",{htmlFor:"icon-button-file"},i.a.createElement(U.a,{color:"primary","aria-label":"upload picture",component:"span"},i.a.createElement(z.a,null))))),i.a.createElement(T.a,{sm:7},i.a.createElement("div",null,i.a.createElement("b",null,e.profile.fullName)),i.a.createElement(A,Object.assign({},e,{status:e.status,updateStatus:e.updateStatus})),e.editMode?i.a.createElement(R,Object.assign({initialValues:e.profile,onSubmit:function(t){e.saveProfile(t).then((function(){e.setEditMode(!1)}))}},e)):i.a.createElement(K,e)))},Q=function(e){return i.a.createElement("div",null,i.a.createElement(T.a,{container:!0,direction:"column"},i.a.createElement(T.a,{xs:12},i.a.createElement(G,Object.assign({},e,{isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,editmode:e.editMode}))),i.a.createElement(T.a,{xs:12},i.a.createElement(S,null))))},W=a(18),Y=a(413),H=a(16),X=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizesUserId),this.props.getProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return i.a.createElement(Q,Object.assign({},this.props,{savePhoto:this.props.savePhoto,isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,editMode:this.props.editMode}))}}]),a}(i.a.Component);t.default=Object(H.d)(Object(w.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizesUserId:e.auth.userId,isAuth:e.auth.isAuth,editMode:e.profilePage.editMode}}),{setUserProfile:c.h,getProfile:c.c,getStatus:c.d,updateStatus:c.i,savePhoto:c.e,saveProfile:c.f,setEditMode:c.g}),W.f,Y.a)(X)}}]);
//# sourceMappingURL=5.900b9c03.chunk.js.map