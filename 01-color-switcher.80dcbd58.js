const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.getElementById("info");let o=null;function l(){const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.body.style.backgroundColor=t,n.value=`Aktualny kolor: ${t}`}t.addEventListener("click",(function(){clearInterval(o),o=setInterval(l,750)})),e.addEventListener("click",(function(){clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.80dcbd58.js.map
