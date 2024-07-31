(this["webpackJsonpmovie-search-app"]=this["webpackJsonpmovie-search-app"]||[]).push([[0],{28:function(e,n,t){},34:function(e,n,t){"use strict";t.r(n);var a,i,c=t(0),r=t.n(c),o=t(17),s=t.n(o),d=(t(28),t(9)),l=t(4),p=t(6),b=t(7),j=t(3);const x=b.a.div(a||(a=Object(p.a)(["\n  width: 100%;\n  height: 70px;\n  background-color: #373A40;\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  padding: 0 100px;\n"]))),h=b.a.input(i||(i=Object(p.a)(["\n  width: 30%;\n  height: 60%;\n  padding: 15px 20px;\n  border-radius: 20px;\n  border: none;\n  outline: none;\n"])));var g,m,O,u,f,v,w,y=e=>{let{onSearch:n}=e;const[t,a]=Object(c.useState)(""),[i,r]=Object(c.useState)(t);return Object(c.useEffect)((()=>{const e=setTimeout((()=>{r(t)}),500);return()=>{clearTimeout(e)}}),[t]),Object(c.useEffect)((()=>{n(i)}),[i,n]),Object(j.jsx)(x,{children:Object(j.jsx)(h,{type:"text",placeholder:"Search for a movie...",value:t,onChange:e=>a(e.target.value)})})},k=t.p+"static/media/default-poster.3f971516.jpg",_=t.p+"static/media/star.6f09a733.png";const z=b.a.div(g||(g=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: white;\n  border-radius: 8px;\n  width: 250px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  text-align: center;\n  text-decoration: none;\n  color: inherit;\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n  transition: transform 0.3s ease-in-out;\n\n  &:hover {\n    transform: scale(1.02);\n  }\n"]))),S=b.a.img(m||(m=Object(p.a)(["\n  width: 100%;\n  height: auto;\n  border-radius: 8px;\n  object-fit: cover;\n  aspect-ratio: 2 / 3;\n  margin-bottom: 10px;\n"]))),E=b.a.h3(O||(O=Object(p.a)(["\n  font-size: 1.2em;\n  color: #333;\n"]))),F=b.a.div(u||(u=Object(p.a)(["\n  display: flex;\n  justify-content: column;\n  gap: 20px;\n\n  p{\n  margin: 0;\n  }\n"]))),I=b.a.p(f||(f=Object(p.a)(["\n  font-size: 1em;\n  color: #666;\n"]))),C=b.a.div(v||(v=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 1em;\n  color: #666;\n"]))),M=b.a.img(w||(w=Object(p.a)(["\n  width: 16px;\n  height: 16px;\n  margin-right: 5px;\n"])));var A,D,N=e=>{let{movie:n}=e;const t="/movie/".concat(n.id),a=n.poster_path?"https://image.tmdb.org/t/p/w500".concat(n.poster_path):k,i=n.release_date?n.release_date.split("-")[0]:"N/A",c=n.vote_average?n.vote_average.toFixed(1):"N/A";return Object(j.jsx)(d.b,{to:t,style:{textDecoration:"none"},children:Object(j.jsxs)(z,{children:[Object(j.jsx)(S,{src:a,alt:n.title}),Object(j.jsx)(E,{children:n.title}),Object(j.jsxs)(F,{children:[Object(j.jsx)(I,{children:i}),Object(j.jsxs)(C,{children:[Object(j.jsx)(M,{src:_,alt:"star icon"}),c]})]})]})})};var P=e=>{let{movies:n}=e;const[t,a]=Object(c.useState)(10);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(T,{children:n.slice(0,t).map((e=>Object(j.jsx)(N,{movie:e},e.id)))}),t<n.length&&Object(j.jsx)(B,{onClick:()=>{a((e=>e+10))},children:"Show More"})]})};const T=b.a.div(A||(A=Object(p.a)(["\n  width: 80%;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: space-evenly;\n  gap: 16px;\n  margin-top: 50px;\n"]))),B=b.a.button(D||(D=Object(p.a)(["\n  display: block;\n  margin: 20px auto;\n  padding: 10px 20px;\n  font-size: 16px;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  &:hover {\n    background-color: #0056b3;\n  }\n"])));var L=t(35);const R="c67d7e0fab0db694bf8420e81d153a2f",$="https://api.themoviedb.org/3";var q,J,U;const G=b.a.div(q||(q=Object(p.a)(["\n  width: 100%;\n  padding: 20px;\n"]))),H=b.a.h2(J||(J=Object(p.a)(["\n  text-align: left;\n  margin-bottom: 20px;\n  padding-left: 80px;\n"]))),K=b.a.div(U||(U=Object(p.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 20px;\n"])));var Q,V,W,X=()=>{const[e,n]=Object(c.useState)([]);Object(c.useEffect)((()=>{(async()=>{try{const e=await L.a.get("".concat($,"/trending/movie/day"),{params:{api_key:R}});n(e.data.results)}catch(e){console.error("Error fetching featured movies:",e)}})()}),[]);const t=e.slice(0,5);return Object(j.jsxs)(G,{children:[Object(j.jsx)(H,{children:"Featured Movies"}),Object(j.jsx)(K,{children:t.map((e=>Object(j.jsx)(N,{movie:e},e.id)))})]})};const Y=b.a.div(Q||(Q=Object(p.a)(["\n  width: 100%;\n  padding: 20px;\n"]))),Z=b.a.h2(V||(V=Object(p.a)(["\n  text-align: left;\n  padding-left: 80px;\n"]))),ee=b.a.div(W||(W=Object(p.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 20px;\n"])));var ne,te,ae,ie=()=>{const[e,n]=Object(c.useState)([]);Object(c.useEffect)((()=>{(async()=>{try{const e=await L.a.get("".concat($,"/movie/popular"),{params:{api_key:R}});n(e.data.results)}catch(e){console.error("Error fetching popular movies:",e)}})()}),[]);const t=e.slice(0,5);return Object(j.jsxs)(Y,{children:[Object(j.jsx)(Z,{children:"Popular Movies"}),Object(j.jsx)(ee,{children:t.map((e=>Object(j.jsx)(N,{movie:e},e.id)))})]})};const ce=b.a.div(ne||(ne=Object(p.a)(["\n  width: 100%;\n  padding: 20px;\n"]))),re=b.a.h2(te||(te=Object(p.a)(["\n  text-align: left;\n  padding-left: 80px;\n"]))),oe=b.a.div(ae||(ae=Object(p.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 20px;\n"])));var se,de=()=>{const[e,n]=Object(c.useState)([]);Object(c.useEffect)((()=>{(async()=>{try{const e=await L.a.get("".concat($,"/movie/upcoming"),{params:{api_key:R}});n(e.data.results)}catch(e){console.error("Error fetching upcoming movies:",e)}})()}),[]);const t=e.slice(0,5);return Object(j.jsxs)(ce,{children:[Object(j.jsx)(re,{children:"Upcoming Movies"}),Object(j.jsx)(oe,{children:t.map((e=>Object(j.jsx)(N,{movie:e},e.id)))})]})},le=t.p+"static/media/popcorn.705659fd.avif";const pe=b.a.div(se||(se=Object(p.a)(['\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  overflow: hidden;\n  color: white;\n  padding-bottom: 50px;\n\n  &::before {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-image: url(',');\n    background-size: cover;\n    background-position: center;\n    filter: blur(10px);\n    z-index: -2;\n  }\n\n  &::after {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5); /* Dark overlay */\n    z-index: -1;\n  }\n'])),le);var be,je,xe,he,ge,me,Oe,ue,fe,ve=()=>{const[e,n]=Object(c.useState)([]),[t,a]=Object(c.useState)(!1),i=Object(c.useCallback)((async e=>{if(e.trim()){a(!0);try{const t=await(e=>L.a.get("".concat($,"/search/movie"),{params:{api_key:R,query:e}}))(e);n(t.data.results)}catch(t){console.error("Error fetching movies:",t)}}else a(!1),n([])}),[]);return Object(j.jsxs)(pe,{$backgroundImage:le,children:[Object(j.jsx)(y,{onSearch:i}),t&&e.length>0?Object(j.jsx)(P,{movies:e}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(X,{}),Object(j.jsx)(ie,{}),Object(j.jsx)(de,{})]})]})},we=t.p+"static/media/arrow-back.76bc0681.svg";const ye=b.a.div(be||(be=Object(p.a)(['\n  position: relative;\n  width: 100%;\n  padding: 50px 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 50px;\n  align-items: center;\n  color: white;\n  min-height: 100vh;\n\n  &::before {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-image: url(',');\n    background-size: cover;\n    background-position: center;\n    filter: blur(10px);\n    z-index: -2;\n  }\n\n  &::after {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5); /* Dark overlay */\n    z-index: -1;\n  }\n'])),(e=>e.$backgroundImage)),ke=b.a.div(je||(je=Object(p.a)(["\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n\n  p {\n    margin: 0;\n  }\n"]))),_e=b.a.div(xe||(xe=Object(p.a)(["\n  width: 40%;\n  padding: 50px 10px;\n  z-index: 1;\n  text-align: left;\n"]))),ze=b.a.img(he||(he=Object(p.a)(["\n  width: 30%;\n  z-index: 1;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);\n"]))),Se=b.a.h1(ge||(ge=Object(p.a)(['\n  font-family: "Roboto", sans-serif;\n  font-size: 2em;\n  margin-bottom: 16px;\n']))),Ee=b.a.nav(me||(me=Object(p.a)(["\n  width: 100px;\n  display: flex;\n  border: white solid 2px;\n  padding: 5px;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.3s ease-in-out;\n  border-radius: 20px;\n  margin-top: 50px;\n\n  &:hover {\n    background-color: rgba(255, 255, 255, 0.2);\n  }\n"]))),Fe=Object(b.a)(d.b)(Oe||(Oe=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  color: white;\n  text-align: center;\n  padding-bottom: 5px;\n"]))),Ie=b.a.img(ue||(ue=Object(p.a)(["\n  width: 18px;\n  height: 18px;\n  margin-right: 5px;\n  padding-top: 4px;\n"]))),Ce=b.a.img(fe||(fe=Object(p.a)(["\n  width: 16px;\n  height: 16px;\n  margin-right: 5px;\n"])));var Me,Ae=e=>{let{movieId:n}=e;const[t,a]=Object(c.useState)(null);if(Object(c.useEffect)((()=>{L.a.get("https://api.themoviedb.org/3/movie/".concat(n),{params:{api_key:"c67d7e0fab0db694bf8420e81d153a2f"}}).then((e=>{a(e.data)})).catch((e=>{console.error("Error fetching movie details:",e)}))}),[n]),!t)return Object(j.jsx)("div",{children:"Loading..."});const i=t.release_date?t.release_date.split("-")[0]:"N/A",r=t.poster_path?"https://image.tmdb.org/t/p/w500".concat(t.poster_path):k,o=t.runtime?"".concat(t.runtime," minutes"):"N/A",s=t.vote_average?t.vote_average.toFixed(1):"N/A";return Object(j.jsxs)(ye,{$backgroundImage:r,children:[Object(j.jsx)(ze,{src:r,alt:t.title}),Object(j.jsxs)(_e,{children:[Object(j.jsx)(Se,{children:t.title}),Object(j.jsxs)(ke,{children:[Object(j.jsx)("p",{children:i}),Object(j.jsx)("p",{children:o}),Object(j.jsx)("p",{children:t.genres.map((e=>e.name)).join(", ")}),Object(j.jsxs)("p",{children:[Object(j.jsx)(Ce,{src:_,alt:"star icon"}),s]})]}),Object(j.jsx)("p",{children:t.overview}),Object(j.jsx)(Ee,{children:Object(j.jsxs)(Fe,{to:"/",children:[Object(j.jsx)(Ie,{src:we,alt:"Back"}),"Return"]})})]})]})};const De=b.a.div(Me||(Me=Object(p.a)(["\n  width: 100%;\n  margin: 0 auto;\n"])));var Ne,Pe,Te,Be=()=>{const{id:e}=Object(l.q)();return e?Object(j.jsx)(De,{children:Object(j.jsx)(Ae,{movieId:e})}):Object(j.jsx)("div",{children:"Error: Movie ID not found."})};const Le=b.a.header(Ne||(Ne=Object(p.a)(["\n  height: 80px;\n  margin: 0;\n  padding: 16px 110px;\n  background-color: #151515;\n  color: white;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-sizing: border-box;\n"]))),Re=Object(b.a)(d.b)(Pe||(Pe=Object(p.a)(["\n  text-decoration: none;\n  color: inherit; /* Inherit color from the parent component */\n"]))),$e=b.a.h1(Te||(Te=Object(p.a)(['\n  margin: 0;\n  font-size: 1.8em;\n  font-family: "Playfair Display", serif;\n  color: white; \n'])));var qe=()=>Object(j.jsx)(Le,{children:Object(j.jsx)(Re,{to:"/",children:Object(j.jsx)($e,{children:"Movie Catalogue"})})});var Je=()=>Object(j.jsxs)(d.a,{children:[Object(j.jsx)(qe,{}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/",element:Object(j.jsx)(ve,{})}),Object(j.jsx)(l.a,{path:"/movie/:id",element:Object(j.jsx)(Be,{})})]})]});var Ue=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,36)).then((n=>{let{getCLS:t,getFID:a,getFCP:i,getLCP:c,getTTFB:r}=n;t(e),a(e),i(e),c(e),r(e)}))};s.a.createRoot(document.getElementById("root")).render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(Je,{})})),Ue()}},[[34,1,2]]]);
//# sourceMappingURL=main.6713a62a.chunk.js.map