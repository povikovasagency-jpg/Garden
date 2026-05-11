/* global React, ReactDOM */

const { useState, useEffect, useRef } = React;
const COPY = window.GARDEN_COPY;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "buttonShape": "pill"
} /*EDITMODE-END*/;

/* ───── Header ───── */
function Header({ lang, setLang, t, onReserveClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["story", t.nav.story],
    ["breakfast", t.nav.breakfast],
    ["menu", t.nav.menu],
    ["desserts", t.nav.desserts],
    ["events", t.nav.events],
    ["contact", t.nav.contact],
  ];

  return (
    <>
      <header className={"site-header " + (scrolled ? "is-scrolled" : "")}>
        <div className="site-header__inner">
          <a href="#top" className="brand" aria-label="Garden Resto">
            <img className="brand__logo" src="assets/logo.png" alt="Garden Resto" style={{ objectFit: "scale-down" }} />
          </a>
          <nav className="nav" aria-label="Primary">
            {links.map(([id, label]) => (
              <a key={id} href={"#" + id}>{label}</a>
            ))}
          </nav>
          <div className="lang" role="group" aria-label="Language">
            {["et", "ru", "en"].map((l) => (
              <button key={l} className={lang === l ? "is-active" : ""} onClick={() => setLang(l)} aria-pressed={lang === l}>{l}</button>
            ))}
          </div>
          <button className="btn btn--ink btn--small" onClick={onReserveClick} style={{ marginLeft: 4 }}>
            {t.nav.reserve}
          </button>
          <button className=
