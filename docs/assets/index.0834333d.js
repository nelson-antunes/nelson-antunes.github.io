import { p as pushScopeId, a as popScopeId, r as resolveComponent, o as openBlock, c as createBlock, b as createVNode, w as withScopeId, d as defineComponent, u as useI18n, t as toDisplayString, e as withDirectives, v as vModelSelect, f as createTextVNode, F as Fragment, g as createRouter, h as createWebHashHistory, l as library, i as faLinkedin, j as faGithub, k as faTwitter, m as createI18n, n as createApp, q as FontAwesomeIcon } from "./vendor.a933f8bd.js";
var Profiles_vue_vue_type_style_index_0_scoped_true_lang = ".profiles[data-v-2f622e2d] {\n  font-size: 1.5rem;\n  margin-right: 0.5rem;\n  transition: 200ms;\n}\n.profiles[data-v-2f622e2d]:hover {\n  color: var(--light-primary);\n}";
const _sfc_main$5 = {};
const _withId$1 = /* @__PURE__ */ withScopeId("data-v-2f622e2d");
pushScopeId("data-v-2f622e2d");
const _hoisted_1$3 = {
  class: "profiles",
  target: "_blank",
  href: "https://www.linkedin.com/in/nelson-antonio-antunes-junior-b5659199/"
};
const _hoisted_2$2 = {
  class: "profiles",
  target: "_blank",
  href: "https://github.com/nelson-antunes"
};
const _hoisted_3$2 = {
  class: "profiles",
  target: "_blank",
  href: "https://twitter.com/nelson_antunes_"
};
popScopeId();
const _sfc_render$5 = /* @__PURE__ */ _withId$1((_ctx, _cache) => {
  const _component_FontAwesomeIcon = resolveComponent("FontAwesomeIcon");
  return openBlock(), createBlock("div", null, [
    createVNode("a", _hoisted_1$3, [
      createVNode(_component_FontAwesomeIcon, { icon: ["fab", "linkedin"] })
    ]),
    createVNode("a", _hoisted_2$2, [
      createVNode(_component_FontAwesomeIcon, { icon: ["fab", "github"] })
    ]),
    createVNode("a", _hoisted_3$2, [
      createVNode(_component_FontAwesomeIcon, { icon: ["fab", "twitter"] })
    ])
  ]);
});
_sfc_main$5.render = _sfc_render$5;
_sfc_main$5.__scopeId = "data-v-2f622e2d";
var _sfc_main$4 = defineComponent({
  setup() {
    return {
      locale: useI18n({ useScope: "global" }).locale
    };
  }
});
const _hoisted_1$2 = { class: "select" };
const _hoisted_2$1 = { for: "locale" };
const _hoisted_3$1 = /* @__PURE__ */ createVNode("option", { value: "pt-br" }, "\u{1F1E7}\u{1F1F7}", -1);
const _hoisted_4$1 = /* @__PURE__ */ createVNode("option", { value: "en" }, "\u{1F1FA}\u{1F1F8}", -1);
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1$2, [
    createVNode("label", _hoisted_2$1, [
      createVNode("b", null, toDisplayString(_ctx.$t("language")) + ":", 1)
    ]),
    withDirectives(createVNode("select", {
      name: "locale",
      id: "locale",
      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.locale = $event)
    }, [
      _hoisted_3$1,
      _hoisted_4$1
    ], 512), [
      [vModelSelect, _ctx.locale]
    ])
  ]);
}
_sfc_main$4.render = _sfc_render$4;
var _sfc_main$3 = defineComponent({
  components: {
    Profiles: _sfc_main$5,
    LocaleSelect: _sfc_main$4
  }
});
var Navbar_vue_vue_type_style_index_0_scoped_true_lang = ".nav[data-v-539bd3a4] {\n  display: flex;\n  box-sizing: border-box;\n  align-items: center;\n}\n.nav-title[data-v-539bd3a4] {\n  font-size: 2.5rem;\n  font-weight: bold;\n  margin: 0.5rem 1rem;\n}\n.nav-elements[data-v-539bd3a4] {\n  display: flex;\n  flex-grow: 1;\n  align-items: center;\n  justify-content: space-between;\n  margin: 1rem;\n}\n.menu .menu-item[data-v-539bd3a4] {\n  border-radius: 5%;\n  margin-right: 1rem;\n  padding: 0.5rem 0.8rem;\n  color: var(--medium-primary);\n  background-color: var(--dark-secondary);\n  transition: ease-in-out 300ms;\n}\n.menu .menu-item[data-v-539bd3a4]:hover {\n  /*background-color: var(--light-primary);*/\n  box-shadow: 0 0 5px 2px var(--medium-primary);\n}\n.menu .menu-item.router-link-active[data-v-539bd3a4] {\n  color: var(--dark-secondary);\n  background-color: var(--medium-primary);\n}";
const _withId = /* @__PURE__ */ withScopeId("data-v-539bd3a4");
pushScopeId("data-v-539bd3a4");
const _hoisted_1$1 = { class: "nav" };
const _hoisted_2 = /* @__PURE__ */ createVNode("div", { class: "nav-title" }, [
  /* @__PURE__ */ createVNode("span", null, "nelson")
], -1);
const _hoisted_3 = { class: "nav-elements" };
const _hoisted_4 = { class: "menu" };
const _hoisted_5 = { class: "nav" };
popScopeId();
const _sfc_render$3 = /* @__PURE__ */ _withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_router_link = resolveComponent("router-link");
  const _component_Profiles = resolveComponent("Profiles");
  const _component_LocaleSelect = resolveComponent("LocaleSelect");
  return openBlock(), createBlock("header", null, [
    createVNode("nav", _hoisted_1$1, [
      _hoisted_2,
      createVNode("div", _hoisted_3, [
        createVNode("div", _hoisted_4, [
          createVNode(_component_router_link, {
            class: "menu-item",
            to: "/"
          }, {
            default: _withId(() => [
              createTextVNode(toDisplayString(_ctx.$t("home")), 1)
            ]),
            _: 1
          }),
          createVNode(_component_router_link, {
            class: "menu-item",
            to: "/cv"
          }, {
            default: _withId(() => [
              createTextVNode(toDisplayString(_ctx.$t("resume")), 1)
            ]),
            _: 1
          }),
          createVNode(_component_router_link, {
            class: "menu-item",
            to: "/projects"
          }, {
            default: _withId(() => [
              createTextVNode(toDisplayString(_ctx.$t("projects")), 1)
            ]),
            _: 1
          })
        ]),
        createVNode("div", _hoisted_5, [
          createVNode(_component_Profiles),
          createVNode(_component_LocaleSelect)
        ])
      ])
    ])
  ]);
});
_sfc_main$3.render = _sfc_render$3;
_sfc_main$3.__scopeId = "data-v-539bd3a4";
const _sfc_main$2 = {};
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createBlock("footer");
}
_sfc_main$2.render = _sfc_render$2;
var _sfc_main$1 = defineComponent({
  name: "App",
  components: {
    Navbar: _sfc_main$3,
    Footer: _sfc_main$2
  }
});
var App_vue_vue_type_style_index_0_global_true_lang = "\n#app {\n  font-family: Avenir, Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n}\n* {\n  margin: 0\n}\n:root {\n  --dark-secondary: #022738;\n  --dark-primary: #26706F;\n  --medium-secondary: #4D869E;\n  --medium-primary: #28DEAD;\n  --light-primary: #3FFCD3;\n  --white87: rgba(255,255,255,87);\n\n  background-color: var(--dark-secondary);\n  color: var(--white87);\n}\na {\n  color: var(--medium-primary);\n  font-weight: bold;\n  text-decoration: none;\n}\n";
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Navbar = resolveComponent("Navbar");
  const _component_router_view = resolveComponent("router-view");
  const _component_Footer = resolveComponent("Footer");
  return openBlock(), createBlock(Fragment, null, [
    createVNode(_component_Navbar),
    createVNode(_component_router_view),
    createVNode(_component_Footer)
  ], 64);
}
_sfc_main$1.render = _sfc_render$1;
let scriptRel;
const seen = {};
const base = "/";
const __vitePreload = function preload(baseModule, deps) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  if (scriptRel === void 0) {
    const relList = document.createElement("link").relList;
    scriptRel = relList && relList.supports && relList.supports("modulepreload") ? "modulepreload" : "preload";
  }
  return Promise.all(deps.map((dep) => {
    dep = `${base}${dep}`;
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", rej);
      });
    }
  })).then(() => baseModule());
};
const _sfc_main = defineComponent({
  name: "Raiz",
  setup() {
    let { t } = useI18n();
    return { t };
  }
});
const _hoisted_1 = /* @__PURE__ */ createVNode("section", null, " \u{1F6A7} \u{1F3D7} \u{1F6A7} ", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("article", null, [
    createVNode("h1", null, toDisplayString(_ctx.t("hello")), 1),
    _hoisted_1
  ]);
}
_sfc_main.render = _sfc_render;
const routes = [
  {
    path: "/",
    name: "home",
    component: _sfc_main
  },
  {
    path: "/projects",
    name: "projects",
    component: function() {
      return __vitePreload(() => import("./Projects.d4953ec9.js"), true ? ["assets/Projects.d4953ec9.js","assets/vendor.a933f8bd.js"] : void 0);
    }
  },
  {
    path: "/cv",
    name: "cv",
    component: function() {
      return __vitePreload(() => import("./CV.22e25cee.js"), true ? ["assets/CV.22e25cee.js","assets/vendor.a933f8bd.js"] : void 0);
    }
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
const en = {
  home: "home",
  projects: "projects",
  resume: "resume",
  hello: "hello",
  language: "language"
};
var messages = {
  "pt-br": {
    home: "in\xEDcio",
    projects: "projetos",
    resume: "curr\xEDculo",
    hello: "ol\xE1",
    language: "idioma"
  },
  en
};
library.add({ faLinkedin, faGithub, faTwitter });
const i18n = createI18n({
  fallbackLocale: "en",
  globalInjection: true,
  locale: "pt-br",
  messages
});
createApp(_sfc_main$1).use(router).use(i18n).component("FontAwesomeIcon", FontAwesomeIcon).mount("#app");
