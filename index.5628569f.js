!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var i=t[e];delete t[e];var d={id:e,exports:{}};return n[e]=d,i.call(d.exports,d,d.exports),d.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,n){t[e]=n},e.parcelRequired7c6=i);var d=i("bOlkj"),s=document.querySelector(".breed-select"),o=document.querySelector(".loader"),c=document.querySelector(".error"),r=document.querySelector(".cat-info");window.addEventListener("load",(function(){var e;(0,d.fetchBreeds)().then((function(n){e=n,n.forEach((function(e){var n=document.createElement("option");n.value=e.id,n.textContent=e.name,s.appendChild(n),s.classList.remove("is-hidden"),o.classList.add("is-hidden")}))})).catch((function(e){console.log(e),c.classList.remove("is-hidden"),s.classList.add("is-hidden"),o.classList.add("is-hidden")})),s.addEventListener("change",(function(){var n=s.value;o.classList.remove("is-hidden"),r.classList.add("is-hidden"),c.classList.add("is-hidden"),(0,d.fetchCatByBreed)(n).then((function(n){var t=n[0],i=e.find((function(e){return e.id===t.breeds[0].id})),d=function(e,n){return"<img src='".concat(e.url,"' width='300' alt='").concat(n.name,"'/>\n        <div class='textInfo'><h1>").concat(n.name,"</h1>\n        <p>").concat(n.description,"</p>\n        <p><b>Temperament:</b> ").concat(n.temperament,"</p></div>")}(t,i);r.innerHTML=d,o.classList.add("is-hidden"),r.classList.remove("is-hidden")})).catch((function(e){console.log(e),c.classList.remove("is-hidden"),o.classList.add("is-hidden")}))}))}))}();
//# sourceMappingURL=index.5628569f.js.map