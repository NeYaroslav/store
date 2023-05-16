var it = (a, t, e) => {
  if (!t.has(a)) throw TypeError("Cannot " + e);
};
var i = (a, t, e) => (
    it(a, t, "read from private field"), e ? e.call(a) : t.get(a)
  ),
  c = (a, t, e) => {
    if (t.has(a))
      throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(a) : t.set(a, e);
  },
  d = (a, t, e, r) => (
    it(a, t, "write to private field"), r ? r.call(a, e) : t.set(a, e), e
  );
var u = (a, t, e) => (it(a, t, "access private method"), e);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) r(n);
  new MutationObserver((n) => {
    for (const s of n)
      if (s.type === "childList")
        for (const l of s.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function e(n) {
    const s = {};
    return (
      n.integrity && (s.integrity = n.integrity),
      n.referrerPolicy && (s.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : n.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(n) {
    if (n.ep) return;
    n.ep = !0;
    const s = e(n);
    fetch(n.href, s);
  }
})();
const v = { sofas: "дивани", wardrobes: "шафи", tables: "столи" },
  J = [
    {
      id: 1,
      title: "Диван прямий Кедр Торонто блакитний 2470x1090x850 мм",
      price: 17256,
      prevPrice: 21570,
      category: v.sofas,
      rate: 8,
      img: "https://cdn.27.ua/799/d5/1a/2479386_3.jpeg",
    },
    {
      id: 2,
      title: "Диван прямий Берегиня Чілл сірий 1940x810x720 мм ",
      price: 8900,
      prevPrice: 11250,
      category: v.sofas,
      rate: 7,
      img: "https://cdn.27.ua/799/c2/13/6930963_2.jpeg",
    },
    {
      id: 3,
      title: "Диван кутовий VECTOR Ріо лівий сірий 2590x1570x1050 мм",
      price: 26950,
      prevPrice: 25e3,
      category: v.sofas,
      rate: 9,
      img: "https://cdn.27.ua/799/30/31/6434865_1.jpeg",
    },
    {
      id: 4,
      title: "Диван прямий Елегант Епісофт 17 сірий 1590x950x830 мм",
      price: 14326,
      prevPrice: null,
      category: v.sofas,
      rate: null,
      img: "https://cdn.27.ua/799/0a/7a/3410554_1.jpeg",
    },
    {
      id: 5,
      title: "Шафа для одягу Doros Гелар (3 дв.+ 3 шух.) білий",
      price: 6300,
      prevPrice: 7400,
      category: v.wardrobes,
      rate: 6,
      img: "https://cdn.27.ua/799/38/a4/4143268_2.jpeg",
    },
    {
      id: 6,
      title: "Шафа Грейд Естер-Люкс -1 1000х2380х540 мм, дуб сонома",
      price: 9500,
      prevPrice: null,
      category: v.wardrobes,
      rate: 9,
      img: "https://cdn.27.ua/799/86/24/4228644_1.jpeg",
    },
    {
      id: 7,
      title: "Стіл обідній Art in Head Гаральд круглий білий",
      price: 2250,
      prevPrice: 2500,
      category: v.tables,
      rate: 8,
      img: "https://cdn.27.ua/799/9b/cb/7052235_1.jpeg",
    },
    {
      id: 8,
      title: "Стіл-книжка Пєхотін 3 дуб сонома",
      price: 2220,
      prevPrice: null,
      category: v.tables,
      rate: 10,
      img: "https://cdn.27.ua/799/b8/e1/375009_8.jpeg",
    },
    {
      id: 9,
      title: "Стіл розкладний Urban Flex 80(136)x60 білий",
      price: 2616,
      prevPrice: 3270,
      category: v.tables,
      rate: 9,
      img: "https://cdn.27.ua/799/9b/b5/7052213_3.jpeg",
    },
    {
      id: 10,
      title: "Обідній стіл у стилі лофт Серія 1.1 1200х600 мм Урбан лайт",
      price: 2800,
      prevPrice: null,
      category: v.tables,
      rate: 9,
      img: "https://cdn.27.ua/sc--media--prod/default/1d/9d/79/1d9d7914-978f-48f4-9947-6435303938f4.jpg",
    },
  ];
var g, x, j, rt;
class st {
  constructor(t) {
    c(this, j);
    c(this, g, void 0);
    c(this, x, void 0);
    i(this, x), d(this, g, JSON.parse(localStorage.getItem(i(this, x))) ?? {});
  }
  add(t) {
    i(this, g)[t] == null ? (i(this, g)[t] = 1) : i(this, g)[t]++,
      u(this, j, rt).call(this);
  }
  remove(t) {
    i(this, g)[t] != null && i(this, g)[t]--, u(this, j, rt).call(this);
  }
  get() {
    return i(this, g);
  }
}
(g = new WeakMap()),
  (x = new WeakMap()),
  (j = new WeakSet()),
  (rt = function () {
    localStorage.setItem(i(this, x), JSON.stringify(i(this, g)));
  });
var f, N, L, y, A, H;
class Et {
  constructor(t, e, r, n) {
    c(this, f, void 0);
    c(this, N, void 0);
    c(this, L, void 0);
    c(this, y, void 0);
    c(this, A, void 0);
    c(this, H, void 0);
    d(this, f, t), d(this, N, e), d(this, A, r), d(this, H, n);
  }
  watch() {
    i(this, L) &&
      i(this, L).addEventListener("click", (t) => {
        i(this, A).call(this, t, i(this, L), i(this, f).id);
      }),
      i(this, y) &&
        i(this, y).addEventListener("click", (t) => {
          i(this, H).call(this, t, i(this, y), i(this, f).id);
        });
  }
  createCard() {
    const t = i(this, N).get()[i(this, f).id];
    if (!t) return;
    const e = document.createElement("div");
    e.classList.add("cart__item", "cart-item");
    const r = document.createElement("div");
    r.classList.add("card-item__header");
    const n = document.createElement("div");
    n.classList.add("cart-item__img");
    const s = document.createElement("img");
    (s.src = i(this, f).img), (s.alt = i(this, f).title), n.append(s);
    const l = document.createElement("h5");
    l.classList.add("cart-item__title"),
      (l.innerText = i(this, f).title),
      r.append(n, l);
    const o = document.createElement("span");
    o.classList.add("cart-item__price"),
      (o.innerText = `${i(this, f).price} x ${t}`); //! add number of items
    const h = document.createElement("div");
    h.classList.add("cart-item__controllers");
    const m = document.createElement("button");
    m.classList.add("cart-item__add-button"),
      (m.innerText = "+"),
      d(this, L, m);
    const B = document.createElement("span");
    B.classList.add("cart-item__label"), (B.innerText = t); //! show number of items
    const E = document.createElement("button");
    E.classList.add("cart-item__remove-button"),
      (E.innerText = "-"),
      d(this, y, E),
      h.append(m, B, E);
    const et = document.createElement("span");
    et.classList.add("cart-item__total-price"),
      (et.innerText = t * i(this, f).price); //! calculate totla price
    return e.append(r, o, h, et), console.log(e), e;
  }
}
(f = new WeakMap()),
  (N = new WeakMap()),
  (L = new WeakMap()),
  (y = new WeakMap()),
  (A = new WeakMap()),
  (H = new WeakMap());
function Lt() {
  const a = document.getElementById("full-price"),
    t = new st("cart"),
    e = J.map((o) => new Et(o, t, s, l)),
    r = document.getElementById("cart");
  function n() {
    (r.innerHTML = ""),
      r.append(...e.map((m) => m.createCard() ?? "")),
      e.forEach((m) => m.watch());
    const o = t.get(),
      h = J.reduce((m, B) => {
        const E = o[B.id];
        return E ? m + E * B.price : m;
      }, 0);
    a.innerText = h;
  }
  n();
  function s(o, h, m) {
    t.add(m), n();
  }
  function l(o, h, m) {
    t.remove(m), n();
  }
}
var C, P, T, O, R, b, F, z, W, at, Z, ot, q, dt, K, lt;
class yt {
  constructor(t, e, r, n, s) {
    c(this, F);
    c(this, W);
    c(this, Z);
    c(this, q);
    c(this, K);
    c(this, C, void 0);
    c(this, P, void 0);
    c(this, T, void 0);
    c(this, O, void 0);
    c(this, R, void 0);
    c(this, b, void 0);
    d(this, C, t), d(this, P, e), d(this, T, r), d(this, O, n), d(this, R, s);
  }
  watch() {
    form.addEventListener("submit", (t) => {
      t.preventDefault(),
        u(this, W, at).call(this),
        u(this, Z, ot).call(this),
        u(this, q, dt).call(this),
        u(this, K, lt).call(this),
        !i(this, b) && alert("форму заповнено успішно");
    });
  }
}
(C = new WeakMap()),
  (P = new WeakMap()),
  (T = new WeakMap()),
  (O = new WeakMap()),
  (R = new WeakMap()),
  (b = new WeakMap()),
  (F = new WeakSet()),
  (z = function (t, e) {
    i(this, b) || (d(this, b, !0), t.focus(), (i(this, O).innerText = e));
  }),
  (W = new WeakSet()),
  (at = function () {
    d(this, b, !1), (i(this, O).innerText = "");
  }),
  (Z = new WeakSet()),
  (ot = function () {
    const t = "Неправельний формат електронної адреси",
      e = i(this, C).value;
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e) ||
      u(this, F, z).call(this, i(this, C), t);
  }),
  (q = new WeakSet()),
  (dt = function () {
    const t = "Ім'я має містити тільки символи кирилиці та пробіл",
      e = i(this, P).value;
    /^[а-яії]+ [а-яії]+$/i.test(e) || u(this, F, z).call(this, i(this, P), t);
  }),
  (K = new WeakSet()),
  (lt = function () {
    const t = "Введіть повідомлення";
    i(this, T).value.trim().length || u(this, F, z).call(this, i(this, T), t);
  });
function bt() {
  const a = document.getElementById("email"),
    t = document.getElementById("name"),
    e = document.getElementById("message"),
    r = document.getElementById("form"),
    n = document.getElementById("error");
  new yt(a, t, e, n, r).watch();
}
var S, _, k, U, pt;
class ut {
  constructor(t, e) {
    c(this, U);
    c(this, S, void 0);
    c(this, _, void 0);
    c(this, k, void 0);
    d(this, S, t),
      d(this, k, e),
      d(this, _, JSON.parse(localStorage.getItem(i(this, S))) ?? []);
  }
  toggle(t) {
    i(this, _).indexOf(t) !== -1
      ? i(this, _).splice(i(this, _).indexOf(t), 1)
      : i(this, _).push(t),
      u(this, U, pt).call(this);
  }
  getTransformedData() {
    return (
      i(this, k).forEach((t) => {
        t.isFavourite = i(this, _).includes(t.id);
      }),
      i(this, k)
    );
  }
}
(S = new WeakMap()),
  (_ = new WeakMap()),
  (k = new WeakMap()),
  (U = new WeakSet()),
  (pt = function () {
    localStorage.setItem(i(this, S), JSON.stringify(i(this, _)));
  });
var p, $, w, D, I, M, Y, ht, G, ft, Q, gt, V, nt, X, vt, tt, _t;
class mt {
  constructor(t, e, r, n) {
    c(this, Y);
    c(this, G);
    c(this, Q);
    c(this, V);
    c(this, X);
    c(this, tt);
    c(this, p, void 0);
    c(this, $, void 0);
    c(this, w, void 0);
    c(this, D, void 0);
    c(this, I, void 0);
    c(this, M, void 0);
    d(this, p, t), d(this, $, e), d(this, M, r), d(this, D, n);
  }
  watch() {
    i(this, w) &&
      i(this, w).addEventListener("click", (t) => {
        i(this, D).call(this, t, i(this, w), i(this, p).id);
      }),
      i(this, I) &&
        i(this, I).addEventListener("click", (t) => {
          var e;
          i(this, M).call(this, t, i(this, I), i(this, p).id),
            console.log((e = i(this, p)) == null ? void 0 : e.isFavourite);
        });
  }
  createProductCard() {
    const t = document.createElement("div");
    t.classList.add("grid-products__product", "product-card");
    const e = document.createElement("div");
    e.classList.add("product-card__img");
    const r = document.createElement("img");
    (r.src = i(this, p).img), (r.alt = i(this, p).title);
    const n = u(this, G, ft).call(this);
    n && e.append(n), e.append(r, u(this, X, vt).call(this));
    const s = document.createElement("div");
    s.classList.add("product-card__info");
    const l = document.createElement("div");
    l.classList.add("product-card__review");
    const o = u(this, Y, ht)
      .call(this)
      .map((m) => u(this, V, nt).call(this, m)); //! does work without bind?
    l.append(...o);
    const h = document.createElement("h4");
    return (
      h.classList.add("product-card__title"),
      (h.innerText = i(this, p).title),
      s.append(l, h, u(this, Q, gt).call(this), u(this, tt, _t).call(this)),
      t.append(e, s),
      t
    );
  }
}
(p = new WeakMap()),
  ($ = new WeakMap()),
  (w = new WeakMap()),
  (D = new WeakMap()),
  (I = new WeakMap()),
  (M = new WeakMap()),
  (Y = new WeakSet()),
  (ht = function () {
    const t = {
        halfLine: "star-half-line",
        fill: "star-fill",
        line: "star-line",
      },
      e = [],
      r = i(this, p).rate;
    for (let s = r; s > 0; s--)
      e.at(-1) === t.halfLine ? (e[e.length - 1] = t.fill) : e.push(t.halfLine);
    e.length = 5;
    const n = Math.max(e.lastIndexOf(t.fill), e.lastIndexOf(t.halfLine));
    return e.fill(t.line, n + 1), e;
  }),
  (G = new WeakSet()),
  (ft = function () {
    const t = 100 - Math.round((i(this, p).price * 100) / i(this, p).prevPrice);
    let e = null;
    return (
      t > 0 &&
        ((e = document.createElement("span")),
        e.classList.add("product-card__tag"),
        (e.innerHTML = `-${t}%`)),
      e
    );
  }),
  (Q = new WeakSet()),
  (gt = function () {
    const t = document.createElement("div");
    t.classList.add("product-card__prices");
    const e = document.createElement("span");
    e.classList.add("product-card__current-price"),
      (e.innerText = i(this, p).price),
      t.append(e);
    let r = null;
    return (
      i(this, p).prevPrice > i(this, p).price &&
        ((r = document.createElement("span")),
        r.classList.add("product-card__prev-price"),
        (r.innerText = i(this, p).prevPrice)),
      r && t.append(r),
      t
    );
  }),
  (V = new WeakSet()),
  (nt = function (t) {
    const e = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
      r = document.createElementNS("http://www.w3.org/2000/svg", "use");
    return r.setAttribute("href", `${i(this, $)}#${t}`), e.append(r), e;
  }),
  (X = new WeakSet()),
  (vt = function () {
    var e;
    const t = document.createElement("button");
    return (
      t.classList.add(
        "product-card__fav-btn",
        ((e = i(this, p)) == null ? void 0 : e.isFavourite) &&
          "product-card__fav-btn_fav"
      ),
      t.append(u(this, V, nt).call(this, "heart")),
      d(this, I, t),
      t
    );
  }),
  (tt = new WeakSet()),
  (_t = function () {
    const t = document.createElement("button");
    return (
      t.classList.add("product-card__buy-btn"),
      (t.innerText = "В кошик"),
      d(this, w, t),
      t
    );
  });
function wt() {
  const a = new st("cart"),
    t = document.getElementById("products"),
    e = new ut("favourite", J);
  function r() {
    const l = e
      .getTransformedData()
      .filter((o) => o.isFavourite)
      .map((o) => new mt(o, "./assets/sprite-3a8e0957.svg", n, s));
    (t.innerHTML = ""),
      t.append(...l.map((o) => o.createProductCard())),
      l.forEach((o) => o.watch());
  }
  r();
  function n(l, o, h) {
    e.toggle(h), r();
  }
  function s(l, o, h) {
    a.add(h);
  }
}
function It() {
  const a = new st("cart"),
    t = new ut("favourite", J),
    e = t
      .getTransformedData()
      .map((s) => new mt(s, "./assets/sprite-3a8e0957.svg", r, n));
  document
    .getElementById("products")
    .append(...e.map((s) => s.createProductCard())),
    e.forEach((s) => s.watch());
  function r(s, l, o) {
    t.toggle(o), l.classList.toggle("product-card__fav-btn_fav");
  }
  function n(s, l, o) {
    a.add(o);
  }
}
function Bt(a, t) {
  !a ||
    !t ||
    (window.addEventListener("resize", ct(a)),
    document.addEventListener("DOMContentLoaded", ct(a)),
    (t.innerText = `© ${new Date().getFullYear()}`));
}
function ct(a) {
  return () => {
    document.body.style.setProperty("--headerHeight", `${a.clientHeight}px`);
  };
}
const xt = document.getElementById("header"),
  Ct = document.getElementById("footer");
Bt(xt, Ct);
document.getElementById("index-page")
  ? It()
  : document.getElementById("favourite-page")
  ? wt()
  : document.getElementById("contacts-page")
  ? bt()
  : document.getElementById("cart-page") && Lt();
