!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},s=t.parcelRequired7c6;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var s={id:e,exports:{}};return r[e]=s,t.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=s),s("9VC5X");var i=s("hBW9e"),a=s("4Nugj"),d=s("9XBOy");a.refs.btnWatched.addEventListener("click",(function(){var e=(0,i.load)("watched");if(0!==e.length){a.refs.titleLibrary.classList.add("visually-hidden"),a.refs.listLibrary.innerHTML="";var t=(0,d.createMarkupLibrary)(e);a.refs.listLibrary.insertAdjacentHTML("beforeend",t)}})),s("5YNLl");var o=s("bpxeT"),l=s("2TvXO"),c=s("b7ONl");d=s("9XBOy"),a=s("4Nugj");function f(){return(f=e(o)(e(l).mark((function t(r){var n,s,i,o;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),window.addEventListener("keydown",b),!r.target.closest(".library__list")||r.target.classList.contains("library__link")){e.next=22;break}return a.refs.btnAddWatched.textContent="Remove from watched",n=r.target,s=n.dataset.id,a.refs.modal.classList.toggle("is-hidden"),a.refs.body.classList.toggle("no-scroll"),a.refs.btnAddWatched.setAttribute("data-id",s),a.refs.btnAddQueue.setAttribute("data-id",s),e.prev=11,e.next=14,c.getMovieById(s);case 14:i=e.sent,o=(0,d.createMarkupModal)(i),a.refs.modalList.insertAdjacentHTML("beforeend",o),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(11),console.log(e.t0.message);case 22:case"end":return e.stop()}}),t,null,[[11,19]])})))).apply(this,arguments)}function u(){a.refs.modal.classList.toggle("is-hidden"),a.refs.body.classList.toggle("no-scroll"),a.refs.modalList.innerHTML=""}function b(e){"Escape"===e.code&&(u(),window.removeEventListener("keydown",b))}s("hBW9e"),a.refs.closeModalBtn.addEventListener("click",u),a.refs.listLibrary.addEventListener("click",(function(e){return f.apply(this,arguments)}))}();
//# sourceMappingURL=library.b086a13f.js.map
