(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{15:function(e,t,i){},16:function(e,t,i){},17:function(e,t,i){},19:function(e,t,i){"use strict";i.r(t);var a,n=i(6),c=i.n(n),s=(i(14),i(9)),l=i(2),r=i(1),o=(i(15),i(16),i(17),i(0)),d=function(e){var t=e.movie;return Object(o.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("figure",{className:"image is-4by3",children:Object(o.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsxs)("div",{className:"media",children:[Object(o.jsx)("div",{className:"media-left",children:Object(o.jsx)("figure",{className:"image is-48x48",children:Object(o.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(o.jsx)("div",{className:"media-content",children:Object(o.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(o.jsxs)("div",{className:"content",children:[t.description,Object(o.jsx)("br",{}),Object(o.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},m=function(e){var t=e.movies;return Object(o.jsx)("div",{className:"movies",children:t.map((function(e){return Object(o.jsx)(d,{movie:e},e.imdbId)}))})},j=i(7),b=i.n(j);!function(e){e.ImgUrl="imgUrl",e.ImdbUrl="imdbUrl"}(a||(a={}));var h=function(e){var t=e.name,i=e.value,n=e.label,c=void 0===n?t:n,s=e.placeholder,d=void 0===s?"Enter ".concat(c):s,m=e.required,j=void 0!==m&&m,h=e.onChange,u=void 0===h?function(){}:h,g=Object(r.useState)((function(){return"".concat(t,"-").concat(Math.random().toFixed(16).slice(2))})),O=Object(l.a)(g,1)[0],p=Object(r.useState)(!1),v=Object(l.a)(p,2),f=v[0],w=v[1],x=!1,M="";return t!==a.ImgUrl&&t!==a.ImdbUrl||(x=f&&j&&!/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@,.\w_]*)#?(?:[,.!/\\\w]*))?)$/.test(i),M="Please enter valid URL for ".concat(c)),i||(x=f&&j&&!i,M="".concat(c," is required")),Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{className:"label",htmlFor:O,children:c}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("input",{type:"text",id:O,"data-cy":"movie-".concat(t),className:b()("input",{"is-danger":x}),placeholder:d,value:i,onChange:function(e){return u(e.target.value)},onBlur:function(){return w(!0)}})}),x&&Object(o.jsx)("p",{className:"help is-danger",children:M})]})},u=function(e){var t=e.onAdd;function i(e){return e.trim()}var a=Object(r.useState)(0),n=Object(l.a)(a,2),c=n[0],s=n[1],d=Object(r.useState)(""),m=Object(l.a)(d,2),j=m[0],b=m[1],u=Object(r.useState)(""),g=Object(l.a)(u,2),O=g[0],p=g[1],v=Object(r.useState)(""),f=Object(l.a)(v,2),w=f[0],x=f[1],M=Object(r.useState)(""),N=Object(l.a)(M,2),U=N[0],I=N[1],y=Object(r.useState)(""),T=Object(l.a)(y,2),B=T[0],_=T[1],k=!i(j)||!i(w)||!i(U)||!i(B),z=function(e){(e.preventDefault(),j&&w&&U&&B)&&(t({title:j,description:O,imgUrl:w,imdbUrl:U,imdbId:B}),b(""),p(""),x(""),I(""),_(""),s(c+1))};return Object(o.jsxs)("form",{className:"NewMovie",onSubmit:function(e){return z(e)},children:[Object(o.jsx)("h2",{className:"title",children:"Add a movie"}),Object(o.jsx)(h,{name:"title",label:"Title",value:j,onChange:b,required:!0}),Object(o.jsx)(h,{name:"description",label:"Description",value:O,onChange:p}),Object(o.jsx)(h,{name:"imgUrl",label:"Image URL",value:w,onChange:x,required:!0}),Object(o.jsx)(h,{name:"imdbUrl",label:"Imdb URL",value:U,onChange:I,required:!0}),Object(o.jsx)(h,{name:"imdbId",label:"Imdb ID",value:B,onChange:_,required:!0}),Object(o.jsx)("div",{className:"field is-grouped",children:Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",disabled:k,children:"Add"})})})]},c)},g=i(8),O=function(){var e=Object(r.useState)(g),t=Object(l.a)(e,2),i=t[0],a=t[1];return Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)("div",{className:"page-content",children:Object(o.jsx)(m,{movies:i})}),Object(o.jsx)("div",{className:"sidebar",children:Object(o.jsx)(u,{onAdd:function(e){a((function(t){return[].concat(Object(s.a)(t),[e])}))}})})]})};c.a.render(Object(o.jsx)(O,{}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')}},[[19,1,2]]]);
//# sourceMappingURL=main.19b7474b.chunk.js.map