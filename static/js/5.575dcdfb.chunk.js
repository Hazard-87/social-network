(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[5],{372:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(130),o=a(131),r=a(133),l=a(132),s=a(22),c=a(0),i=a.n(c),u=a(40),m=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){Object(r.a)(c,t);var a=Object(l.a)(c);function c(){return Object(n.a)(this,c),a.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return this.props.isAuth?i.a.createElement(e,this.props):i.a.createElement(s.a,{to:"/login"})}}]),c}(i.a.Component);return Object(u.b)(m)(t)}},373:function(e,t,a){e.exports={avatar:"MyProfile_avatar__1lRxT",status:"MyProfile_status__2Yej1",contact:"MyProfile_contact__2Knu4"}},386:function(e,t,a){e.exports={myPosts:"MyPosts_myPosts__1I3mh",newPost:"MyPosts_newPost__3roly",send:"MyPosts_send__3EjLO",posts:"MyPosts_posts__2NF7Z"}},387:function(e,t,a){e.exports={item:"Posts_item__2WbMo",like:"Posts_like__1kMoZ",newComment:"Posts_newComment__1KoNN",send:"Posts_send__20WxY",post:"Posts_post__29zt5"}},388:function(e,t,a){e.exports=a.p+"static/media/user.4b0cb4ba.png"},399:function(e,t,a){"use strict";a.r(t);var n=a(130),o=a(131),r=a(133),l=a(132),s=a(0),c=a.n(s),i=a(84),u=a(63),m=a(386),p=a.n(m),d=a(387),f=a.n(d),E=function(e){c.a.createRef();return c.a.createElement("div",{className:f.a.post},c.a.createElement("div",{className:f.a.item},c.a.createElement("img",{src:"https://www.meme-arsenal.com/memes/ae1d44253a861f53d95864dd37c55a78.jpg"})," ",e.message),c.a.createElement("div",{className:f.a.like},c.a.createElement("img",{src:"https://img.icons8.com/cotton/2x/facebook-like.png"}),e.likesCount),c.a.createElement("div",null,c.a.createElement("textarea",null)),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){}},"send")))},b=a(177),h=a(178),v=a(72),g=c.a.memo((function(e){var t=Object(u.a)(e.posts).reverse().map((function(e,t){return c.a.createElement(E,{key:t,message:e.post,likesCount:e.likesCount})}));return c.a.createElement("div",null,c.a.createElement("hr",null),c.a.createElement("div",null,c.a.createElement(P,{onSubmit:function(t){e.addPost(t.newPostBody),t.newPostBody=""}})),c.a.createElement("div",{className:p.a.posts},t))})),P=Object(h.a)({form:"addPostForm"})((function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("div",{className:p.a.field},c.a.createElement(b.a,{component:v.b,name:"newPostBody"})),c.a.createElement("div",null,c.a.createElement("button",{onClick:e.handleSubmit},"Send")))})),k=g,_=a(40),y=Object(_.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e(Object(i.a)(t))}}}))(k),j=a(373),O=a.n(j),w=a(92),S=a(375),M=function(e){var t=Object(s.useState)(!1),a=Object(S.a)(t,2),n=a[0],o=a[1],r=Object(s.useState)(e.status),l=Object(S.a)(r,2),i=l[0],u=l[1];Object(s.useEffect)((function(){u(e.status)}),[e.status]);return c.a.createElement("div",{className:O.a.status},n?c.a.createElement("div",null,c.a.createElement("input",{onChange:function(e){u(e.target.value)},autoFocus:!0,onBlur:function(){o(!1),e.updateStatus(i)},value:i})):c.a.createElement("div",null,c.a.createElement("span",{onClick:function(){o(!0)}},e.status||"-----")))},N=a(388),C=a.n(N),A=Object(h.a)({form:"edit-profile"})((function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("div",null,c.a.createElement("b",null," Full name: ",c.a.createElement(b.a,{className:O.a.input,component:v.a,name:"fullName",type:"input"}))),c.a.createElement("div",null,c.a.createElement("b",null,"looking for a job"),": ",c.a.createElement(b.a,{component:v.a,name:"lookingForAJob",type:"checkbox"})),c.a.createElement("div",null,c.a.createElement("b",null,"My professional skills"),": ",c.a.createElement(b.a,{className:O.a.field,component:v.b,name:"lookingForAJobDescription",type:"input"})),c.a.createElement("div",null,c.a.createElement("b",null,"About me"),": ",c.a.createElement(b.a,{className:O.a.field,component:v.b,name:"aboutMe",type:"input"})),c.a.createElement("div",null,c.a.createElement("b",null,"Contacts"),":",Object.keys(e.profile.contacts).map((function(e){return c.a.createElement("div",null,e," : ",c.a.createElement(b.a,{component:v.a,name:"contacts."+e,placeholder:e,type:"input"}))}))),e.error&&c.a.createElement("div",{className:O.a.formSummaryError},e.error),c.a.createElement("button",{onClick:e.handleSubmit,className:O.a.button},"save"))})),x=a(397),F=a(101),I=a(403),U={action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",listType:"picture",beforeUpload:function(e){return new Promise((function(t){var a=new FileReader;a.readAsDataURL(e),a.onload=function(){var e=document.createElement("img");e.src=a.result,e.onload=function(){var a=document.createElement("canvas");a.width=e.naturalWidth,a.height=e.naturalHeight;var n=a.getContext("2d");n.drawImage(e,0,0),n.fillStyle="red",n.textBaseline="middle",n.font="33px Arial",n.fillText("Ant Design",20,20),a.toBlob(t)}}}))}},B=function(e){var t=e.onSelectedPhoto;return c.a.createElement(c.a.Fragment,null,c.a.createElement(x.a,Object.assign({},U,{onChange:t}),c.a.createElement(F.a,{icon:c.a.createElement(I.a,null)},"Upload")))},D=function(e){return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("b",null,"Looking for a job"),": ",e.profile.lookingForAJob?"Yes":"No"," "),c.a.createElement("div",null,c.a.createElement("b",null,"My professional skills"),": ",e.profile.lookingForAJobDescription),c.a.createElement("div",null,c.a.createElement("b",null,"About me"),": ",e.profile.aboutMe),c.a.createElement("div",null,c.a.createElement("b",null,"Contacts :"),Object.keys(e.profile.contacts).map((function(t){return c.a.createElement(J,{key:t,contactTitle:t,contactValue:e.profile.contacts[t]})}))))},J=function(e){var t=e.contactTitle,a=e.contactValue;return c.a.createElement("div",{className:O.a.contact},c.a.createElement("b",null,t),": ",c.a.createElement("a",{href:a},a))},T=function(e){if(!e.profile.photos)return c.a.createElement(w.a,null);return c.a.createElement("div",{className:O.a.content},c.a.createElement("div",{className:O.a.avatar},c.a.createElement("img",{src:e.profile.photos.large?e.profile.photos.large:C.a}),e.isOwner&&c.a.createElement(B,{onSelectedPhoto:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}})),c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("b",null,e.profile.fullName)),c.a.createElement(M,Object.assign({},e,{status:e.status,updateStatus:e.updateStatus})),e.editMode?c.a.createElement(A,Object.assign({initialValues:e.profile,onSubmit:function(t){e.saveProfile(t).then((function(){e.setEditMode(!1)}))}},e)):c.a.createElement(D,e)))},R=function(e){return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement(T,Object.assign({},e,{isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,editmode:e.editMode}))),c.a.createElement("div",null,c.a.createElement(y,null)))},z=a(22),L=a(372),V=a(21),W=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizesUserId),this.props.getProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return c.a.createElement(R,Object.assign({},this.props,{savePhoto:this.props.savePhoto,isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,editMode:this.props.editMode}))}}]),a}(c.a.Component);t.default=Object(V.d)(Object(_.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizesUserId:e.auth.userId,isAuth:e.auth.isAuth,editMode:e.profilePage.editMode}}),{setUserProfile:i.h,getProfile:i.c,getStatus:i.d,updateStatus:i.i,savePhoto:i.e,saveProfile:i.f,setEditMode:i.g}),z.f,L.a)(W)}}]);
//# sourceMappingURL=5.575dcdfb.chunk.js.map