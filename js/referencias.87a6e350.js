(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["referencias"],{"2d68":function(t,n,a){},"3cd8":function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"container-fluid banner-interno"},[a("div",{staticClass:"banner-interno__fondo",style:{"background-image":"url("+t.globalData.fondoBannerPrincipal+")"}}),a("div",{staticClass:"container"},[a("div",{staticClass:"banner-interno__titulo py-5"},[t.icono.length?a("div",{staticClass:"banner-interno__titulo__icono me-3"},[a("i",{class:t.icono})]):t._e(),a("h1",{staticClass:"h3 mb-0"},[t._v(t._s(t.titulo))])])])])},i=[],r=a("cdd9"),s={name:"BannerInterno",props:{icono:{type:String,default:""},titulo:{type:String,default:""}},data:function(){return{globalData:r["c"]}}},c=s,o=(a("d75e"),a("2877")),l=Object(o["a"])(c,e,i,!1,null,"3f7f20c1",null);n["a"]=l.exports},"44d6":function(t,n,a){},"7c1e":function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"curso-main-container referencias"},[a("BannerInterno",{staticClass:"cWhite",attrs:{icono:"fas fa-book",titulo:"Referencias bibliográficas"}}),a("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},t._l(t.orderedData,(function(n){return a("div",{key:n.link,staticClass:"referencias__item"},[t._v(" "+t._s(n.referencia)+" "),n.link?a("a",{attrs:{href:n.link,target:"_blank"}},[t._v(t._s(n.link)+" "),a("i",{staticClass:"fas fa-external-link-alt"})]):t._e(),a("hr",{staticClass:"my-3"})])})),0)],1)},i=[],r=a("2909"),s=(a("1276"),a("ac1f"),a("cdd9")),c=a("3cd8"),o={name:"Referencias",components:{BannerInterno:c["a"]},data:function(){return{referenciasData:s["f"]}},computed:{orderedData:function(){var t=Object(r["a"])(this.referenciasData).sort((function(t,n){var a=t.referencia.split(" ")[0].toLowerCase(),e=n.referencia.split(" ")[0].toLowerCase();return a<e?-1:a>e?1:0}));return t}}},l=o,f=(a("9aa9"),a("2877")),u=Object(f["a"])(l,e,i,!1,null,"7fa958e4",null);n["default"]=u.exports},"9aa9":function(t,n,a){"use strict";a("44d6")},d75e:function(t,n,a){"use strict";a("2d68")}}]);
//# sourceMappingURL=referencias.87a6e350.js.map