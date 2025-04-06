import{a as f,S as h,i as l}from"./assets/vendor-DVva8SYe.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="23726631-21d3c8e5c551d1cabdf8b5ecc";function y(s){return f.get("https://pixabay.com/api/",{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits).catch(r=>console.log(r)),[]}const n=document.querySelector(".gallery"),c=document.querySelector(".loader");function g(s){const r=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:i,comments:d,downloads:m})=>`
    <li class="gallery-item">
  <a class="gallery-link" href="${o}">
    <img
      class="gallery-image"
      src="${a}"
      alt="${e}"
    />
  </a>
  <div class="info">
    <h2 class="title">Likes<h2>
   <p class="item">${t}</p>
    <h2 class="title">Views<h2>
   <p class="item">${i}</p>
    <h2 class="title">Comments<h2>
   <p class="item">${d}</p>
    <h2 class="title">Downloads<h2>
   <p class="item">${m}</p>
  <div>
</li>
`).join("");n.innerHTML=r}new h(".gallery-link",{captionsData:"alt",captionDelay:250});function L(){n.innerHTML=""}function b(){c.classList.remove(".is-hidden")}function S(){c.classList.add(".is-hidden")}const u=document.querySelector(".form");u.addEventListener("submit",q);function q(s){s.preventDefault();const r=s.target.elements["search-text"].value.trim();if(r===""){l.error({title:Error,message:"Please enter your search query!"});return}b(),L(),y(r).then(o=>{o.length===0?l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):g(o)}).catch(o=>{l.error({title:"Error",message:"Cannot fetch images"})}).finally(()=>{S(),u.reset()})}
//# sourceMappingURL=index.js.map
