(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{489:function(t,s,a){"use strict";a.r(s);var e=a(46),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"chargement-a-la-volee"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chargement-a-la-volee","aria-hidden":"true"}},[t._v("#")]),t._v(" Chargement à la volée")]),t._v(" "),a("p",[t._v("Pendant la construction d'applications avec un empaqueteur (« bundler »), le paquetage JavaScript peut devenir un peu lourd, et donc cela peut affecter le temps de chargement de la page. Il serait plus efficace si l'on pouvait séparer chaque composant de route dans des fragments séparés, et de les charger uniquement lorsque la route est visitée.")]),t._v(" "),a("p",[t._v("En combinant la "),a("a",{attrs:{href:"https://fr.vuejs.org/v2/guide/components.html#Composants-asynchrones",target:"_blank",rel:"noopener noreferrer"}},[t._v("fonctionnalité de composant asynchrone"),a("OutboundLink")],1),t._v(" de Vue et la "),a("a",{attrs:{href:"https://webpack.js.org/guides/code-splitting-async/",target:"_blank",rel:"noopener noreferrer"}},[t._v("fonctionnalité de scission de code"),a("OutboundLink")],1),t._v(" de webpack, il est très facile de charger à la volée les composants de route.")]),t._v(" "),a("p",[t._v("Premièrement, un composant asynchrone peut définir une fonction fabrique qui retourne une Promesse (qui devrait résoudre le composant lui-même) :")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* définition du composant */")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Deuxièmement, avec webpack 2, nous pouvons utiliser la syntaxe d'"),a("a",{attrs:{href:"https://github.com/tc39/proposal-dynamic-import",target:"_blank",rel:"noopener noreferrer"}},[t._v("import dynamique"),a("OutboundLink")],1),t._v(" pour indiquer un point de scission de code :")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./Foo.vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// returns a Promise")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("si vous utilisez Babel, vous aurez besoin d'ajouter le plugin "),a("a",{attrs:{href:"http://babeljs.io/docs/plugins/syntax-dynamic-import/",target:"_blank",rel:"noopener noreferrer"}},[t._v("syntax-dynamic-import"),a("OutboundLink")],1),t._v(" de façon à ce que Babel puisse analyser correctement la syntaxe.")])]),t._v(" "),a("p",[t._v("En combinant les deux, on définit un composant asynchrone qui sera automatiquement scindé par webpack :")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./Foo.vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Rien n'a besoin d'être modifié dans la configuration de la route, utilisez "),a("code",[t._v("Foo")]),t._v(" comme d'habitude.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueRouter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  routes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Foo "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"grouper-des-composants-dans-le-meme-fragment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grouper-des-composants-dans-le-meme-fragment","aria-hidden":"true"}},[t._v("#")]),t._v(" Grouper des composants dans le même fragment")]),t._v(" "),a("p",[t._v("Parfois on aimerait grouper tous les composants imbriqués sous la même route, dans un seul et même fragment asynchrone. Pour arriver à cela, nous avons besoin d'utiliser les "),a("a",{attrs:{href:"https://webpack.js.org/guides/code-splitting-async/#chunk-names",target:"_blank",rel:"noopener noreferrer"}},[t._v("fragments nommés"),a("OutboundLink")],1),t._v(" en donnant un nom au fragment en utilisant une syntaxe de commentaire spéciale (requires webpack > 2.4) :")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/* webpackChunkName: "group-foo" */')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./Foo.vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Bar")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/* webpackChunkName: "group-foo" */')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./Bar.vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Baz")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/* webpackChunkName: "group-foo" */')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./Baz.vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("webpack groupera tous les modules asynchrones avec le même nom de fragment dans le même fragment asynchrone.")])])},[],!1,null,null,null);s.default=n.exports}}]);