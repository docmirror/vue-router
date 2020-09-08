(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{556:function(t,s,a){"use strict";a.r(s);var e=a(46),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"遅延ローディングルート"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#遅延ローディングルート","aria-hidden":"true"}},[t._v("#")]),t._v(" 遅延ローディングルート")]),t._v(" "),a("div",{staticClass:"vueschool"},[a("a",{attrs:{href:"https://vueschool.io/courses/vue-router-for-everyone?friend=vuejs",target:"_blank",rel:"sponsored noopener",title:"Learn how to build powerful Single Page Applications with the Vue Router on Vue School"}},[t._v("Watch a free video course about Vue Router on Vue School")])]),t._v(" "),a("p",[t._v("バンドラーを使ってアプリケーションを構築している時、バンドルされる JavaScript が非常に大きいものになり得ます。結果的にページのロード時間に影響を与えてしまいます。もし各ルートコンポーネントごとに別々のチャンクにして、訪れたルートの時だけロードできればより効率的でしょう。")]),t._v(" "),a("p",[t._v("Vue の "),a("a",{attrs:{href:"http://jp.vuejs.org/guide/components.html#%E9%9D%9E%E5%90%8C%E6%9C%9F%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88",target:"_blank",rel:"noopener noreferrer"}},[t._v("非同期コンポーネント機能"),a("OutboundLink")],1),t._v(" と webpack の "),a("a",{attrs:{href:"https://webpack.js.org/guides/code-splitting-async/",target:"_blank",rel:"noopener noreferrer"}},[t._v("コード分割機能"),a("OutboundLink")],1),t._v(" を組み合わせることでとても簡単に遅延ロードするルートコンポーネントができます。")]),t._v(" "),a("p",[t._v("最初に、非同期コンポーネントは Promise (コンポーネント自身解決する必要がある) を返すファクトリ関数として定義できます:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* component definition */")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("次に、webpack 2 において "),a("a",{attrs:{href:"https://github.com/tc39/proposal-dynamic-import",target:"_blank",rel:"noopener noreferrer"}},[t._v("動的 import"),a("OutboundLink")],1),t._v(" 構文を使用して、コード分割ポイントを示すことができます:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./Foo.vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// returns a Promise")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("Note: Babel を使用している場合、Babel が構文を正しく解析するために "),a("a",{attrs:{href:"https://babeljs.io/docs/plugins/syntax-dynamic-import/",target:"_blank",rel:"noopener noreferrer"}},[t._v("syntax-dynamic-import"),a("OutboundLink")],1),t._v(" プラグインを追加する必要があります。")])]),t._v(" "),a("p",[t._v("2 つを組み合わせることで、これは、webpack によって自動的にコード分割される非同期コンポーネントを定義する方法です:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./Foo.vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"同じチャンク内でのコンポーネントグループ化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同じチャンク内でのコンポーネントグループ化","aria-hidden":"true"}},[t._v("#")]),t._v(" 同じチャンク内でのコンポーネントグループ化")]),t._v(" "),a("p",[t._v("しばしば同じ非同期のチャンクに、そのルート配下のネストされた全てのコンポーネントをグループ化したいと思うかもしれません。それを実現するためには、 特別なコメント構文 (webpack > 2.4 必須)を使用してチャンクの名前を提供する "),a("a",{attrs:{href:"https://webpack.js.org/guides/code-splitting-async/#chunk-names",target:"_blank",rel:"noopener noreferrer"}},[t._v("名前付きチャンク"),a("OutboundLink")],1),t._v(" を使う必要があります。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/* webpackChunkName: "group-foo" */')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./Foo.vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Bar")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/* webpackChunkName: "group-foo" */')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./Bar.vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Baz")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/* webpackChunkName: "group-foo" */')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./Baz.vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("webpack は同じチャンク名のどんな非同期のモジュールも同じ非同期のチャンクにグループします。")])])},[],!1,null,null,null);s.default=n.exports}}]);