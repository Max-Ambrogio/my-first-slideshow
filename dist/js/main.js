let makeSlideshow=function(e,s=3e3){let t=document.querySelectorAll(e+" img");t[0].classList.add("show");let l=0;setInterval((function(){t[l].classList.remove("show"),l++,l===t.length&&(l=0),t[l].classList.add("show")}),IntervalTime)};makeSlideshow(".sunset"),makeSlideshow(".otherstuff",5e3);
//# sourceMappingURL=main.js.map