(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{QeBL:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),r=a.n(l),c=a("9Dj+"),i=a("H8eV"),m=a("Cia6"),s=a("F7P4"),n=a("R61B"),d=function(e){var t=e.data,a=Object(n.a)();return r.a.createElement("div",{className:"w-screen relative md:w-full md:mx-0"},r.a.createElement("div",{className:"image-holder",style:{}},r.a.createElement("img",{style:{width:"100%"},src:t.media[a?"small":"large"].url})),r.a.createElement("div",{className:"absolute flex flex-col top-0 right-0 bottom-0 left-0 justify-center p-5"},r.a.createElement("h2",{className:"featured-title pb-3 text-white"},t.title),r.a.createElement("p",{className:"featured-cost pb-4 text-white"},"From "+("GBP"===t.price.currencyCode?"£":"")+t.price.value+" "+t.price.unit),r.a.createElement("div",null,r.a.createElement(s.a,{id:t.id,variant:"white",featured:!0}))))},u=a("IujW"),o=a.n(u),p=function(e){var t,a=e.data,l=e.first,c=Object(n.a)(),i=null==a||null===(t=a.body)||void 0===t?void 0:t.split("\n").join("\n\n");return r.a.createElement("div",{className:"featured "+(l?"featured-first":"featured-second")+" w-full my-10"},r.a.createElement("div",{className:"image-holder relative"},r.a.createElement("img",{className:"same-height",style:{width:"100%"},src:a.media[c?"small":"large"].url}),r.a.createElement("div",{className:"absolute flex flex-col top-0 right-0 bottom-0 left-0 justify-end px-5 md:p-3"},r.a.createElement("h2",{className:"featured-title pb-4 text-white md:p-4"},a.title))),r.a.createElement("div",{className:"pt-4 ml-5"},r.a.createElement(o.a,{children:i})),r.a.createElement("div",{className:"pt-4 ml-5 mt-auto"},r.a.createElement("p",{className:"featured-cost pb-4 text-black pt-8"},"From "+("GBP"===a.price.currencyCode?"£":"")+a.price.value+" "+a.price.unit)),r.a.createElement("div",{className:"pt-5 md:ml-5"},r.a.createElement(s.a,{id:a.id,featured:!0})))};p.defaultProps={data:{},first:!0};var f=p,E=function(e){var t=e.items;return r.a.createElement("div",{className:"w-screen pl-5 py-6 bg-gray-efed",style:{maxWidth:1280}},r.a.createElement("h2",{className:"carousel-title pb-3 text-dark-222 lg:text-center"},"Adventure awaits out there"),r.a.createElement("p",{className:"carousel-subtitle mb-10 text-dark-222 lg:text-center"},"Get out and expreience Scandinavian way of living"),r.a.createElement("ul",{className:"m-0 p-0 list-none flex overflow-x-scroll"},t.map((function(e){return r.a.createElement("li",{key:e.id,className:"pr-5 width-quarter"},r.a.createElement("div",{className:"bg-black width-275 width-full"},r.a.createElement("img",{style:{width:"100%"},src:e.media.small.url}),r.a.createElement("div",{className:"p-5"},r.a.createElement("h5",{className:"item-title pt-4 pb-2 text-white"},e.title),r.a.createElement("p",{className:"item-cost mb-5 py-1 text-white"},(e.guidedTour?"Guided tours from":"From")+" "+("GBP"===e.price.currencyCode?"£":"")+e.price.value+" "+e.price.unit),r.a.createElement(s.a,{full:!0,id:e.id,variant:"white"}))))}))))};t.default=function(){return r.a.createElement(c.a,{goesBack:!1},r.a.createElement(i.a,{title:"Home"}),r.a.createElement(d,{data:m.featured[0]}),r.a.createElement("div",{className:"md:flex px-5"},r.a.createElement(f,{key:m.featured[1].id,first:!0,className:"md:pr-3",data:m.featured[1]}),r.a.createElement(f,{key:m.featured[2].id,className:"md:pl-3",data:m.featured[2]})),r.a.createElement(E,{items:m.carousel.items}))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-1b2738aed86afd9eafc7.js.map