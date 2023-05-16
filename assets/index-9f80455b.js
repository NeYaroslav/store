var N = (i, t, e) => {
  if (!t.has(i)) throw TypeError("Cannot " + e);
};
var r = (i, t, e) => (
    N(i, t, "read from private field"), e ? e.call(i) : t.get(i)
  ),
  n = (i, t, e) => {
    if (t.has(i))
      throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(i) : t.set(i, e);
  },
  d = (i, t, e, s) => (
    N(i, t, "write to private field"), s ? s.call(i, e) : t.set(i, e), e
  );
var l = (i, t, e) => (N(i, t, "access private method"), e);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) s(c);
  new MutationObserver((c) => {
    for (const a of c)
      if (a.type === "childList")
        for (const p of a.addedNodes)
          p.tagName === "LINK" && p.rel === "modulepreload" && s(p);
  }).observe(document, { childList: !0, subtree: !0 });
  function e(c) {
    const a = {};
    return (
      c.integrity && (a.integrity = c.integrity),
      c.referrerPolicy && (a.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : c.crossOrigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function s(c) {
    if (c.ep) return;
    c.ep = !0;
    const a = e(c);
    fetch(c.href, a);
  }
})();
const h = { sofas: "дивани", wardrobes: "шафи", tables: "столи" },
  q = [
    {
      id: 1,
      title: "Диван прямий Кедр Торонто блакитний 2470x1090x850 мм",
      price: 17256,
      prevPrice: 21570,
      category: h.sofas,
      rate: 8,
      img: "https://cdn.27.ua/799/d5/1a/2479386_3.jpeg",
    },
    {
      id: 2,
      title: "Диван прямий Берегиня Чілл сірий 1940x810x720 мм ",
      price: 8900,
      prevPrice: 11250,
      category: h.sofas,
      rate: 7,
      img: "https://cdn.27.ua/799/c2/13/6930963_2.jpeg",
    },
    {
      id: 3,
      title: "Диван кутовий VECTOR Ріо лівий сірий 2590x1570x1050 мм",
      price: 26950,
      prevPrice: 25e3,
      category: h.sofas,
      rate: 9,
      img: "https://cdn.27.ua/799/30/31/6434865_1.jpeg",
    },
    {
      id: 4,
      title: "Диван прямий Елегант Епісофт 17 сірий 1590x950x830 мм",
      price: 14326,
      prevPrice: null,
      category: h.sofas,
      rate: null,
      img: "https://cdn.27.ua/799/0a/7a/3410554_1.jpeg",
    },
    {
      id: 5,
      title: "Шафа для одягу Doros Гелар (3 дв.+ 3 шух.) білий",
      price: 6300,
      prevPrice: 7400,
      category: h.wardrobes,
      rate: 6,
      img: "https://cdn.27.ua/799/38/a4/4143268_2.jpeg",
    },
    {
      id: 6,
      title: "Шафа Грейд Естер-Люкс -1 1000х2380х540 мм, дуб сонома",
      price: 9500,
      prevPrice: null,
      category: h.wardrobes,
      rate: 9,
      img: "https://cdn.27.ua/799/86/24/4228644_1.jpeg",
    },
    {
      id: 7,
      title: "Стіл обідній Art in Head Гаральд круглий білий",
      price: 2250,
      prevPrice: 2500,
      category: h.tables,
      rate: 8,
      img: "https://cdn.27.ua/799/9b/cb/7052235_1.jpeg",
    },
    {
      id: 8,
      title: "Стіл-книжка Пєхотін 3 дуб сонома",
      price: 2220,
      prevPrice: null,
      category: h.tables,
      rate: 10,
      img: "https://cdn.27.ua/799/b8/e1/375009_8.jpeg",
    },
    {
      id: 9,
      title: "Стіл розкладний Urban Flex 80(136)x60 білий",
      price: 2616,
      prevPrice: 3270,
      category: h.tables,
      rate: 9,
      img: "https://cdn.27.ua/799/9b/b5/7052213_3.jpeg",
    },
    {
      id: 10,
      title: "Обідній стіл у стилі лофт Серія 1.1 1200х600 мм Урбан лайт",
      price: 2800,
      prevPrice: null,
      category: h.tables,
      rate: 9,
      img: "https://cdn.27.ua/sc--media--prod/default/1d/9d/79/1d9d7914-978f-48f4-9947-6435303938f4.jpg",
    },
  ];
var u, L, w, D;
class z {
  constructor(t) {
    n(this, w);
    n(this, u, void 0);
    n(this, L, void 0);
    r(this, L), d(this, u, JSON.parse(localStorage.getItem(r(this, L))) ?? {});
  }
  add(t) {
    r(this, u)[t] == null ? (r(this, u)[t] = 1) : r(this, u)[t]++,
      l(this, w, D).call(this);
  }
  remove(t) {
    r(this, u)[t] != null && r(this, u)[t]--, l(this, w, D).call(this);
  }
  get() {
    return r(this, u);
  }
}
(u = new WeakMap()),
  (L = new WeakMap()),
  (w = new WeakSet()),
  (D = function () {
    localStorage.setItem(r(this, L), JSON.stringify(r(this, u)));
  });
var y, g, b, T, $;
class K {
  constructor(t, e) {
    n(this, T);
    n(this, y, void 0);
    n(this, g, void 0);
    n(this, b, void 0);
    d(this, y, t),
      d(this, b, e),
      d(this, g, JSON.parse(localStorage.getItem(r(this, y))) ?? []);
  }
  toggle(t) {
    r(this, g).indexOf(t) !== -1
      ? r(this, g).splice(r(this, g).indexOf(t), 1)
      : r(this, g).push(t),
      l(this, T, $).call(this);
  }
  getTransformedData() {
    return (
      r(this, b).forEach((t) => {
        t.isFavourite = r(this, g).includes(t.id);
      }),
      r(this, b)
    );
  }
}
(y = new WeakMap()),
  (g = new WeakMap()),
  (b = new WeakMap()),
  (T = new WeakSet()),
  ($ = function () {
    localStorage.setItem(r(this, y), JSON.stringify(r(this, g)));
  });
var o, P, m, x, v, O, S, A, j, J, B, k, I, H, F, R, C, W;
class U {
  constructor(t, e, s, c) {
    n(this, S);
    n(this, j);
    n(this, B);
    n(this, I);
    n(this, F);
    n(this, C);
    n(this, o, void 0);
    n(this, P, void 0);
    n(this, m, void 0);
    n(this, x, void 0);
    n(this, v, void 0);
    n(this, O, void 0);
    d(this, o, t), d(this, P, e), d(this, O, s), d(this, x, c);
  }
  watch() {
    r(this, m) &&
      r(this, m).addEventListener("click", (t) => {
        r(this, x).call(this, t, r(this, m), r(this, o).id);
      }),
      r(this, v) &&
        r(this, v).addEventListener("click", (t) => {
          var e;
          r(this, O).call(this, t, r(this, v), r(this, o).id),
            console.log((e = r(this, o)) == null ? void 0 : e.isFavourite);
        });
  }
  createProductCard() {
    const t = document.createElement("div");
    t.classList.add("grid-products__product", "product-card");
    const e = document.createElement("div");
    e.classList.add("product-card__img");
    const s = document.createElement("img");
    (s.src = r(this, o).img), (s.alt = r(this, o).title);
    const c = l(this, j, J).call(this);
    c && e.append(c), e.append(s, l(this, F, R).call(this));
    const a = document.createElement("div");
    a.classList.add("product-card__info");
    const p = document.createElement("div");
    p.classList.add("product-card__review");
    const f = l(this, S, A)
      .call(this)
      .map((E) => l(this, I, H).call(this, E)); //! does work without bind?
    p.append(...f);
    const _ = document.createElement("h4");
    return (
      _.classList.add("product-card__title"),
      (_.innerText = r(this, o).title),
      a.append(p, _, l(this, B, k).call(this), l(this, C, W).call(this)),
      t.append(e, a),
      t
    );
  }
}
(o = new WeakMap()),
  (P = new WeakMap()),
  (m = new WeakMap()),
  (x = new WeakMap()),
  (v = new WeakMap()),
  (O = new WeakMap()),
  (S = new WeakSet()),
  (A = function () {
    const t = {
        halfLine: "star-half-line",
        fill: "star-fill",
        line: "star-line",
      },
      e = [],
      s = r(this, o).rate;
    for (let a = s; a > 0; a--)
      e.at(-1) === t.halfLine ? (e[e.length - 1] = t.fill) : e.push(t.halfLine);
    e.length = 5;
    const c = Math.max(e.lastIndexOf(t.fill), e.lastIndexOf(t.halfLine));
    return e.fill(t.line, c + 1), e;
  }),
  (j = new WeakSet()),
  (J = function () {
    const t = 100 - Math.round((r(this, o).price * 100) / r(this, o).prevPrice);
    let e = null;
    return (
      t > 0 &&
        ((e = document.createElement("span")),
        e.classList.add("product-card__tag"),
        (e.innerHTML = `-${t}%`)),
      e
    );
  }),
  (B = new WeakSet()),
  (k = function () {
    const t = document.createElement("div");
    t.classList.add("product-card__prices");
    const e = document.createElement("span");
    e.classList.add("product-card__current-price"),
      (e.innerText = r(this, o).price),
      t.append(e);
    let s = null;
    return (
      r(this, o).prevPrice > r(this, o).price &&
        ((s = document.createElement("span")),
        s.classList.add("product-card__prev-price"),
        (s.innerText = r(this, o).prevPrice)),
      s && t.append(s),
      t
    );
  }),
  (I = new WeakSet()),
  (H = function (t) {
    const e = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
      s = document.createElementNS("http://www.w3.org/2000/svg", "use");
    return s.setAttribute("href", `${r(this, P)}#${t}`), e.append(s), e;
  }),
  (F = new WeakSet()),
  (R = function () {
    var e;
    const t = document.createElement("button");
    return (
      t.classList.add(
        "product-card__fav-btn",
        ((e = r(this, o)) == null ? void 0 : e.isFavourite) &&
          "product-card__fav-btn_fav"
      ),
      t.append(l(this, I, H).call(this, "heart")),
      d(this, v, t),
      t
    );
  }),
  (C = new WeakSet()),
  (W = function () {
    const t = document.createElement("button");
    return (
      t.classList.add("product-card__buy-btn"),
      (t.innerText = "В кошик"),
      d(this, m, t),
      t
    );
  });
function V(i, t) {
  !i ||
    !t ||
    (window.addEventListener("resize", M(i)),
    document.addEventListener("DOMContentLoaded", M(i)),
    (t.innerText = `© ${new Date().getFullYear()}`));
}
function M(i) {
  return () => {
    document.body.style.setProperty("--headerHeight", `${i.clientHeight}px`);
  };
}
if (document.getElementById("index-page")) {
  let a = function (f, _, E) {
      s.toggle(E), _.classList.toggle("product-card__fav-btn_fav");
    },
    p = function (f, _, E) {
      e.add(E);
    };
  var onFavouriteButtonClick = a,
    onCartButtonClick = p;
  const i = document.getElementById("header"),
    t = document.getElementById("footer");
  V(i, t);
  const e = new z("cart"),
    s = new K("favourite", q),
    c = s
      .getTransformedData()
      .map((f) => new U(f, "./assets/sprite-3a8e0957.svg", a, p));
  document
    .getElementById("products")
    .append(...c.map((f) => f.createProductCard())),
    c.forEach((f) => f.watch());
}
