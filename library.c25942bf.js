!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var o=n[e];delete n[e];var l={id:e,exports:{}};return r[e]=l,o.call(l.exports,l,l.exports),l.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){n[e]=r},e.parcelRequired7c6=o),o("9VC5X");var l=o("hBW9e"),i=o("4Nugj"),t=o("9XBOy");console.log(i.refs.btnWatched),i.refs.btnWatched.addEventListener("click",(function(){console.log("in onClickWatched");var e=(0,l.load)("watched");if(console.log(e),console.log(e.length),console.log(i.refs.titleLibrary),0!==e.length){i.refs.titleLibrary.classList.add("visually-hidden"),i.refs.listLibrary.innerHTML="";var r=(0,t.createMarkupLibrary)(e);i.refs.listLibrary.insertAdjacentHTML("beforeend",r)}})),o("epRYx"),o("5YNLl")}();
//# sourceMappingURL=library.c25942bf.js.map
