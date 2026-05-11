/* global React, ReactDOM */

const { useState, useEffect, useRef } = React;
const COPY = window.GARDEN_COPY;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "buttonShape": "pill"
} /*EDITMODE-END*/;

/* ───── Header ───── */
function Header({ lang, setLang, t, onReserveClick }) {
  const [scrolled, setScrolled] = useState(false);
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
  ["contact", t.nav.contact]];


  return (
    <header className={"site-header " + (scrolled ? "is-scrolled" : "")}>
      <div className="site-header__inner">
        <a href="#top" className="brand" aria-label="Garden Resto">
          <img className="brand__logo" src="assets/logo.png" alt="Garden Resto" style={{ objectFit: "scale-down" }} />
        </a>
        <nav className="nav" aria-label="Primary">
          {links.map(([id, label]) =>
          <a key={id} href={"#" + id}>{label}</a>
          )}
        </nav>
        <div className="lang" role="group" aria-label="Language">
          {["et", "ru", "en"].map((l) =>
          <button
            key={l}
            className={lang === l ? "is-active" : ""}
            onClick={() => setLang(l)}
            aria-pressed={lang === l}>
            {l}</button>
          )}
        </div>
        <button className="btn btn--ink btn--small" onClick={onReserveClick} style={{ marginLeft: 4 }}>
          {t.nav.reserve}
        </button>
      </div>
    </header>);

}

/* ───── Placeholder ───── */
function Placeholder({ label, variant = "", src }) {
  return (
      <div className={"placeholder " + (variant ? "placeholder--" + variant : "")} style={ src ? { backgroundImage: `url(${src})`, backgroundSize: "cover", backgroundPosition: "center center" } : { backgroundSize: "cover", backgroundPosition: "center center" }}>

      <span className="placeholder__label">{label}</span>
    </div>);

}

/* ───── Hero ───── */
function Hero({ t }) {
  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        <div>
          <span className="mono">{t.hero.kicker}</span>
          <h1 className="display hero__title">
            <span className="l1" style={{ fontSize: "65px" }}>{t.hero.title1}</span>
            <span className="l2" style={{ fontSize: "70px" }}>{t.hero.title2}</span>
            <span className="l3" style={{ fontSize: "65px" }}>{t.hero.title3}</span>
          </h1>
          <p className="hero__lead">{t.hero.lead}</p>
          <div className="hero__meta" style={{ fontFamily: "Helvetica" }}>
            <span>{t.hero.address}</span>
            <span>{t.hero.hours}</span>
          </div>
          <div className="hero__ctas">
            <a href="#menu" className="btn btn--ink">{t.hero.ctaMenu} <span className="arrow">→</span></a>
            <a href="#contact" className="btn btn--ghost">{t.hero.ctaFind}</a>
          </div>
        </div>
        <div className="hero__visual">
          <Placeholder label="Hero — guests at a window table" variant="dark" />
        </div>
      </div>
    </section>);

}

/* ───── Story ───── */
function Story({ t }) {
  return (
    <section id="story" className="story">
      <div className="wrap">
        <div className="section-label mono">{t.story.sectionLabel}</div>
        <div className="story__intro">
          <div>
            <h2 className="display story__heading">{t.story.heading}</h2>
            <div className="story__paragraphs">
              {t.story.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
          <div className="story__portrait">
            <Placeholder label="Family portrait — Vyacheslav & Tatiana" />
          </div>
        </div>

        <div className="timeline">
          {t.story.timeline.map((item, i) =>
          <div key={i} className="timeline__item">
              <div className="timeline__year">{item.year}</div>
              <h3 className="timeline__title">{item.title}</h3>
              <p className="timeline__body">{item.body}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ───── Comeback / atmosphere gallery ───── */
function Comeback({ t }) {
  return (
    <section id="atmosphere">
      <div className="wrap">
        <div className="section-label mono">{t.comeback.sectionLabel}</div>
        <h2 className="display comeback__heading">{t.comeback.heading}</h2>
        <p style={{ color: "var(--ink-soft)", maxWidth: "44ch" }}>{t.comeback.caption}</p>
        <div className="gallery">
          <Placeholder label="Dining room — afternoon light" />
          <Placeholder label="Bar / coffee corner" variant="leaf" />
          <Placeholder label="Plated breakfast" variant="dark" />
          <Placeholder label="Window seat, mug" />
          <Placeholder label="Guests around a table" variant="terracotta" />
        </div>
      </div>
    </section>);

}

/* ───── Breakfast ───── */
function Breakfast({ t }) {
  return (
    <section id="breakfast" className="breakfast">
      <div className="wrap">
        <div className="breakfast__tag">{t.breakfast.tag}</div>
        <div className="section-label mono">{t.breakfast.sectionLabel}</div>
        <h2 className="display breakfast__heading">
          {t.breakfast.heading}<br />
          <em>{t.breakfast.heading2}</em>
        </h2>
        <p className="breakfast__body">{t.breakfast.body}</p>
      </div>
    </section>);

}

/* ───── Dishes ───── */
function Dishes({ t }) {
  return (
    <section id="kitchen">
      <div className="wrap">
        <div className="section-label mono">{t.dishes.sectionLabel}</div>
        <h2 className="display dishes__heading">{t.dishes.heading}</h2>
        <div className="dishes__grid">
          {t.dishes.items.map((it, i) =>
          <article key={i}>
              <div className="dish__photo">
                <Placeholder label="PHOTO" variant={i % 3 === 0 ? "" : i % 3 === 1 ? "dark" : "leaf"} />
              </div>
              <h3 className="dish__name">{it.name}</h3>
              <p className="dish__caption">{it.caption}</p>
            </article>
          )}
        </div>
      </div>
    </section>);

}

/* ───── Desserts ───── */
function Desserts({ t, onOrder }) {
  return (
    <section id="desserts" className="desserts">
      <div className="wrap">
        <div className="section-label mono">{t.desserts.sectionLabel}</div>
        <div className="desserts__intro">
          <div>
            <h2 className="display desserts__heading">{t.desserts.heading}</h2>
            <div className="desserts__paragraphs">
              {t.desserts.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="desserts__cta">
              <button className="btn btn--terracotta" onClick={onOrder}>
                {t.desserts.cta} <span className="arrow">→</span>
              </button>
            </div>
          </div>
          <div style={{ aspectRatio: "4/5" }}>
            <Placeholder label="Tatiana — at the dessert counter" variant="terracotta" />
          </div>
        </div>

        <div className="desserts__favs">
          <div className="mono section-label desserts__favs-label">{t.desserts.favoritesHeading}</div>
          <div className="desserts__list">
            {t.desserts.items.map((d, i) =>
            <article key={i}>
                <div className="dessert__photo">
                  <Placeholder label={d.name} variant={i % 2 === 0 ? "terracotta" : ""} />
                </div>
                <h3 className="dessert__name">{d.name}</h3>
                <p className="dessert__caption">{d.caption}</p>
              </article>
            )}
          </div>
        </div>
      </div>
    </section>);

}

/* ───── Menu ───── */
function Menu({ t }) {
  return (
    <section id="menu">
      <div className="wrap">
        <div className="section-label mono">{t.menu.sectionLabel}</div>
        <div className="menu__head">
          <h2 className="display menu__heading">{t.menu.heading}</h2>
          <p className="menu__lead">{t.menu.lead}</p>
        </div>
        <div className="menu__cats">
          {t.menu.categories.map((cat, ci) =>
          <div key={ci}>
              <h3 className="menu__cat-name">— {cat.name}</h3>
              <div className="menu__list">
                {cat.dishes.map((d, di) =>
              <div key={di} className="menu__item">
                    <div>
                      <div className="menu__item-name">{d.name}</div>
                      <div className="menu__item-desc">{d.desc}</div>
                    </div>
                    <div className="menu__item-price">{d.price}</div>
                  </div>
              )}
              </div>
            </div>
          )}
        </div>
        <p className="menu__footnote">{t.menu.footnote}</p>
      </div>
    </section>);

}

/* ───── Events form ───── */
function Events({ t, formRef }) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState({ name: "", contact: "", date: "", guests: "", details: "" });

  const onChange = (k) => (e) => setData((d) => ({ ...d, [k]: e.target.value }));

  const encode = (d) => Object.keys(d)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(d[k]))
    .join("&");

  const submit = (e) => {
    e.preventDefault();
    setError(false);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "events", ...data }),
    })
      .then(() => {
        setSent(true);
        setTimeout(() => setSent(false), 4500);
        setData({ name: "", contact: "", date: "", guests: "", details: "" });
      })
      .catch(() => setError(true));
  };

  return (
    <section id="events" className="events" ref={formRef}>
      <div className="wrap events__inner">
        <div>
          <div className="section-label mono">{t.events.sectionLabel}</div>
          <h2 className="display events__heading">
            <em>{t.events.heading}</em>
          </h2>
          <p className="events__body">{t.events.body}</p>
        </div>
        <form className="form" onSubmit={submit}>
          <h3 className="form__title">{t.events.formTitle}</h3>
          {sent && <div className="form__success">{t.events.fields.sent}</div>}
          {error && <div className="form__error">{t.events.fields.error}</div>}
          <div className="field">
            <label>{t.events.fields.name}</label>
            <input type="text" required value={data.name} onChange={onChange("name")} />
          </div>
          <div className="field">
            <label>{t.events.fields.contact}</label>
            <input type="text" required value={data.contact} onChange={onChange("contact")} />
          </div>
          <div className="field-row">
            <div className="field">
              <label>{t.events.fields.date}</label>
              <input type="text" placeholder="2026-06-12" value={data.date} onChange={onChange("date")} />
            </div>
            <div className="field">
              <label>{t.events.fields.guests}</label>
              <input type="number" min="2" max="40" value={data.guests} onChange={onChange("guests")} />
            </div>
          </div>
          <div className="field">
            <label>{t.events.fields.details}</label>
            <textarea rows="3" value={data.details} onChange={onChange("details")} />
          </div>
          <button type="submit" className="btn btn--terracotta">
            {t.events.fields.submit} <span className="arrow">→</span>
          </button>
        </form>
      </div>
    </section>);

}

/* ───── Contact / Footer ───── */
function Contact({ t, onReserve }) {
  // Highlight today's row (0=Sun, 1=Mon ...). t.contact.hours is Mon-first.
  const todayJs = new Date().getDay();
  const todayIdx = (todayJs + 6) % 7; // Mon=0

  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <div className="section-label mono">{t.contact.sectionLabel}</div>
        <div className="contact__head">
          <h2 className="display contact__heading">
            <em>{t.contact.heading}</em>
          </h2>
        </div>

        <div className="contact__grid">
          <a
            className="map-card"
            href="https://share.google/rkFq91LqIWDjCMQh1"
            target="_blank"
            rel="noopener"
            aria-label="Open in Google Maps">
            <iframe
              title="Map"
              src="https://maps.google.com/maps?q=Vana-Kalamaja+7a,+Tallinn,+Estonia&hl=en&z=17&output=embed"
              loading="lazy">
            </iframe>
            <div className="map-card__pin">Vana-Kalamaja 7a · Open in Maps ↗</div>
          </a>

          <div className="contact__col">
            <div>
              <span className="mono contact__block-label">{t.contact.addressLabel}</span>
              <div className="contact__address">
                {t.contact.address.map((a, i) => <p key={i}>{a}</p>)}
              </div>
            </div>

            <div>
              <span className="mono contact__block-label">{t.contact.hoursLabel}</span>
              <table className="hours-table">
                <tbody>
                  {t.contact.hours.map((row, i) =>
                  <tr key={i} className={i === todayIdx ? "is-today" : ""}>
                      <td>{row.d}</td>
                      <td>{row.h}</td>
                    </tr>
                  )}
                </tbody>
              </table>
              <p className="contact__breakfast-note">{t.contact.breakfastNote}</p>
            </div>

            <div>
              <span className="mono contact__block-label">{t.contact.contactLabel}</span>
              <a href={"tel:" + t.contact.phone.replace(/\s/g, "")} className="contact__phone">{t.contact.phone}</a>
              <a href={"mailto:" + t.contact.email} className="contact__email">{t.contact.email}</a>
            </div>

            <div>
              <span className="mono contact__block-label">{t.contact.socialLabel}</span>
              <div className="socials">
                <a href="#" target="_blank" rel="noopener">Instagram</a>
                <a href="#" target="_blank" rel="noopener">Facebook</a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact__cta-row">
          <p>"<span className="serif-italic">Sama pere. Sama hing.</span>"</p>
          <button className="btn btn--ink" onClick={onReserve}>
            {t.contact.reserveCta} <span className="arrow">→</span>
          </button>
        </div>

        <div className="footer-mark">
          <img className="footer-mark__logo" src="assets/logo.png" alt="Garden Resto" />
          <p className="footer-mark__sub serif-italic">Vana-Kalamaja 7a · Tallinn</p>
        </div>

        <div className="footer-bottom">
          <span>{t.contact.footerNote}</span>
          <span>EE / RU / EN</span>
        </div>
      </div>
    </section>);

}

/* ───── Tweaks ───── */
function Tweaks({ tweaks, setTweak }) {
  return (
    <TweaksPanel>
      <TweakSection title="Button shape">
        <TweakRadio
          value={tweaks.buttonShape}
          onChange={(v) => setTweak("buttonShape", v)}
          options={[
          { label: "Pill", value: "pill" },
          { label: "Rounded", value: "rounded" },
          { label: "Square", value: "square" }]
          } />
        
      </TweakSection>
    </TweaksPanel>);

}

/* ───── App ───── */
function App() {
  const detect = () => {
    const saved = localStorage.getItem("gr_lang");
    if (saved && COPY[saved]) return saved;
    const nav = (navigator.language || "en").slice(0, 2).toLowerCase();
    if (COPY[nav]) return nav;
    return "et";
  };

  const [lang, setLangRaw] = useState(detect);
  const setLang = (l) => {setLangRaw(l);localStorage.setItem("gr_lang", l);};
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const eventsRef = useRef(null);

  useEffect(() => {
    document.documentElement.lang = lang;
    const radii = { pill: "999px", rounded: "10px", square: "0px" };
    document.documentElement.style.setProperty("--btn-radius", radii[tweaks.buttonShape] || "999px");
  }, [lang, tweaks.buttonShape]);

  const t = COPY[lang];
  const scrollToEvents = () => {
    document.getElementById("events")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Header lang={lang} setLang={setLang} t={t} onReserveClick={scrollToEvents} />
      <main>
        <Hero t={t} />
        <Story t={t} />
        <Comeback t={t} />
        <Breakfast t={t} />
        <Dishes t={t} />
        <Desserts t={t} onOrder={scrollToEvents} />
        <Menu t={t} />
        <Events t={t} formRef={eventsRef} />
        <Contact t={t} onReserve={scrollToEvents} />
      </main>
      <Tweaks tweaks={tweaks} setTweak={setTweak} />
    </>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
