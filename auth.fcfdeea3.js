const e=document.querySelector(".watched_movies"),t=document.querySelector(".queue_movies"),o=document.querySelectorAll(".logged-out"),n=document.querySelectorAll(".logged-in"),l=e=>{e?(n.forEach((e=>e.style.display="block")),o.forEach((e=>e.style.display="none"))):(n.forEach((e=>e.style.display="none")),o.forEach((e=>e.style.display="block")))},c=t=>{if(console.log(t),t.length){let o="";t.forEach((e=>{const t=e.data(),n=`\n          <li>\n            <div class="collapsible-header grey lighten-4"> ${t.title} </div>\n            <div class="collapsible-body white"> ${t.content} </div>\n          </li>\n        `;o+=n})),e.innerHTML=o}else e.innerHTML='<h5 class="center-align">Login to view your Library</h5>'},s=e=>{if(e.length){let o="";e.forEach((e=>{const t=e.data(),n=`\n          <li>\n            <div class="collapsible-header grey lighten-4"> ${t.title} </div>\n            <div class="collapsible-body white"> ${t.content} </div>\n          </li>\n        `;o+=n})),t.innerHTML=o}};document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".modal");M.Modal.init(e);const t=document.querySelectorAll(".collapsible");M.Collapsible.init(t)})),auth.onAuthStateChanged((e=>{e?(console.log("user logged in: ",e),db.collection("watched_movies").get().then((t=>{c(t.docs),l(e)})),db.collection("queue_movies").get().then((t=>{s(t.docs),l(e)}))):(console.log("user logged out"),l(e),c([]),s([]))}));const i=document.querySelector("#create-form");i.addEventListener("submit",(function(e){e.preventDefault(),db.collection("watched_movies").add({title:i.title.value,content:i.content.value}).then((()=>{const e=document.querySelector("#modal-create");M.Modal.getInstance(e).close(),i.reset()})).catch((e=>{console.log(e.message)}))}));document.querySelector(".film-gallery__list");const a=document.querySelector(".modal__btn--watched");console.log(a),a.addEventListener("click",(function(e){console.log(e)})),i.addEventListener("submit",(function(e){e.preventDefault(),db.collection("queue_movies").add({title:i.title.value,content:i.content.value}).then((()=>{const e=document.querySelector("#modal-create");M.Modal.getInstance(e).close(),i.reset()})).catch((e=>{console.log(e.message)}))}));const d=document.querySelector("#signup-form");d.addEventListener("submit",(function(e){e.preventDefault();const t=d["signup-email"].value,o=d["signup-password"].value;console.log(t,o),auth.createUserWithEmailAndPassword(t,o).then((e=>{const t=document.querySelector("#modal-signup");M.Modal.getInstance(t).close(),d.reset()}))}));document.querySelector("#logout").addEventListener("click",(function(e){e.preventDefault(),auth.signOut().then((()=>{}))}));const r=document.querySelector("#login-form");r.addEventListener("submit",(function(e){e.preventDefault();const t=r["login-email"].value,o=r["login-password"].value;auth.signInWithEmailAndPassword(t,o).then((e=>{console.log(e.user);const t=document.querySelector("#modal-login");M.Modal.getInstance(t).close(),r.reset()}))}));
//# sourceMappingURL=auth.fcfdeea3.js.map
