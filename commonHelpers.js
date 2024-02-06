import{i as c,S as u}from"./assets/vendor-7659544d.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const n={form:document.querySelector(".form"),textInput:document.querySelector("#query"),searchBtn:document.querySelector(".search-button"),galleryList:document.querySelector(".gallery-list"),loader:document.querySelector(".loader")},f={captions:!0,captionDelay:250,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionClass:"",captionHTML:!0};n.form.addEventListener("submit",d);function d(o){o.preventDefault(),y();const e=o.currentTarget.elements.query.value,i=new URLSearchParams({key:"42031589-0742425241f8784341d5a922f",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0});p(i).then(a=>{g(a)}).catch(a=>{console.log(a)}).finally(()=>{n.form.reset()})}function m(o){return o.map(e=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img
            class="gallery-image"
            src="${e.webformatURL}"
            data-source="${e.largeImageURL}"
            alt="${e.tags}"
          />
        </a>
      </li>
      `).join(`
`)}function l(){n.loader.classList.add("is-hidden")}function y(){n.loader.classList.remove("is-hidden")}function g(o){if(o.total===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n.galleryList.innerHTML="",l();return}n.galleryList.innerHTML=m(o.hits),l(),new u(".gallery-list a",f).refresh()}function p(o){return fetch(`https://pixabay.com/api/?${o}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}
//# sourceMappingURL=commonHelpers.js.map
