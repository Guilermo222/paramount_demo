import { useGateValue } from '@statsig/react-bindings';
import QRCode from 'react-qr-code';

const navItems = ['Shows', 'Movies', 'Live TV', 'Sports', 'News', 'Brands'];
const heroCharacters = ['HALO', '1883', 'FRAZIER', 'SURVIVOR', 'STAR TREK', 'YELLOWJACKETS'];

const rails = [
  {
    title: 'Featured',
    items: ['Landman', 'Mayor of Kingstown', 'Tulsa King', 'NCIS: Tony & Ziva', 'Mobland', '1923'],
  },
  {
    title: 'Drama & Originals',
    items: ['Lioness', 'Mayor of Kingstown', 'Evil', 'Fire Country', 'Matlock', 'FBI'],
  },
  {
    title: 'Movies',
    items: ['Top Gun', 'Scream', 'Transformers', 'Smile', 'Mission: Impossible', 'Paw Patrol'],
  },
  {
    title: 'Sports & News',
    items: ['NFL on CBS', 'UEFA', 'NCAA', 'CBS News', 'PGA', 'March Madness'],
  },
];

const brands = ['CBS', 'SHOWTIME', 'Nickelodeon', 'MTV', 'Comedy Central', 'BET'];

const planCards = [
  { name: 'Essential', price: '$5.99/mo', badge: 'Streaming', copy: 'Hit shows, movies and live NFL on CBS' },
  { name: 'With SHOWTIME', price: '$11.99/mo', badge: 'Premium', copy: 'Ad-free on-demand, downloads and SHOWTIME' },
];

// Real artwork URLs extracted from https://www.paramountplus.com/ (homepage source).
const posterPool = [
  'https://wwwimage-us.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/01/72/23/5ea1c901-0c78-4f79-8e59-f64f738b61c0.jpg?format=webp',
  'https://wwwimage-us.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/01/72/77/2e470e88-94db-41eb-98f7-ce63baeedb60.jpg?format=webp',
  'https://wwwimage-us.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/01/73/74/fcd47984-b78f-42fc-96f1-b4d5920d1bd4.jpg?format=webp',
  'https://wwwimage-us.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/01/74/13/e0df6422-e848-4a20-8ada-56fb140e2d22.jpg?format=webp',
  'https://wwwimage-us.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/11/09/57/6e22d65e-d2be-4ddb-bf4d-07ba2db2de19.jpg?format=webp',
  'https://wwwimage-us.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/11/11/41/50097c24-9dfd-47fc-90f9-9715f2cf51dd.jpg?format=webp',
  'https://wwwimage-us.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/12/72/15/36f4f3b4-fae5-4bf3-9eee-51dbb6ea08e6.jpg?format=webp',
  'https://wwwimage-us.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/24/98/62/15a9eec4-644e-4f1d-a834-5eb6b855848a.jpg?format=webp',
  'https://wwwimage-us.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/45/55/14/754be1c2-f04e-4e42-a0a4-74f2a82b72d4.jpg?format=webp',
  'https://wwwimage-us.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/45/55/92/161cfaa4-0d8b-469b-bfaf-c22cace40f8d.jpg?format=webp',
  'https://wwwimage-us.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/45/57/14/6f5e1e81-58d8-4426-80b7-327231fbc2f7.jpg?format=webp',
  'https://wwwimage-us.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/45/61/31/508a3f33-bec1-4835-8c3f-a58d038b0185.jpg?format=webp',
  'https://wwwimage-us.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/45/61/80/a901cc73-e4c5-48a8-806e-671059c5fddf.jpg?format=webp',
  'https://wwwimage-us.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/45/69/18/cb5aeaca-bdcf-442c-a9d0-1c49896b9406.jpg?format=webp',
  'https://wwwimage-us.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/45/69/31/8af02e01-fa0f-42c7-a541-978604c32bf5.jpg?format=webp',
  'https://wwwimage-us.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/45/69/44/8a197b58-982e-410a-9fac-d52313855ecf.jpg?format=webp',
  'https://wwwimage-us.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/45/76/09/a06e02b9-8302-4bd9-8091-67ef331f12b9.jpg?format=webp',
  'https://wwwimage-us.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/57/94/16/9d4b26ad-dfc8-4e3b-97ab-c19ba314f9a2.jpg?format=webp',
  'https://wwwimage-us.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/58/54/29/99cbd898-4fc1-4c64-8e7c-7ce595ce74fe.jpg?format=webp',
  'https://wwwimage-us.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/58/54/76/8cc7819d-c075-4ccb-9d7c-2758818a96fc.jpg?format=webp',
  'https://wwwimage-us.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/58/54/92/52bf3034-39f1-4bbb-93ac-1fd1e916f7a0.jpg?format=webp',
  'https://wwwimage-us.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/58/55/05/b651d457-66f6-478c-99cf-9e645b225dde.jpg?format=webp',
  'https://wwwimage-us.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/71/66/44/6a937eb4-e9c2-41b2-a4c5-d56bc7a9343c.jpg?format=webp',
  'https://wwwimage-us.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/81/14/49/cdd032be-04d6-4bca-8ff2-98d05b7ec3cc.jpg?format=webp',
  'https://wwwimage-us.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/81/14/77/e202e1a8-d2dd-4275-9722-f88f4624d07b.jpg?format=webp',
  'https://wwwimage-us.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/81/14/79/6917e77a-8735-4325-b383-aef76b9d4e40.jpg?format=webp',
  'https://wwwimage-us.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/81/29/26/67045140-d41e-4472-b0e8-08ee7d4dd29b.jpg?format=webp',
  'https://wwwimage-us.pplusstatic.com/thumbnails/photos/w700-q80/cbs_page_attribute/81/29/30/84729b44-3530-4ba7-9baa-6f7021539f71.jpg?format=webp',
];

function getPosterFromPool(index) {
  return posterPool[index % posterPool.length];
}

function getBackgroundOverride() {
  if (typeof window === 'undefined') {
    return null;
  }

  const params = new URLSearchParams(window.location.search);
  const bg = params.get('bg')?.toLowerCase();

  if (bg === 'purple') {
    return true;
  }
  if (bg === 'blue') {
    return false;
  }
  if (bg === 'auto') {
    return null;
  }

  return null;
}

function App() {
  const gatePurpleEnabled = useGateValue('background');
  const showQrCode = useGateValue('paramount_qrcode');
  const overridePurpleEnabled = getBackgroundOverride();
  const purpleEnabled = overridePurpleEnabled ?? gatePurpleEnabled;
  const gateLabel = gatePurpleEnabled ? 'PURPLE VARIANT' : 'BLUE VARIANT';
  const sourceLabel =
    overridePurpleEnabled == null
      ? 'Statsig gate'
      : `URL override (${overridePurpleEnabled ? 'purple' : 'blue'})`;

  return (
    <div className={`app-shell ${purpleEnabled ? 'theme-purple' : 'theme-blue'}`}>
      <div className="page-noise" />
      <div className="backdrop-glow" />

      <header className="top-nav">
        <div className="brand-wrap">
          <span className="brand-mark">◎</span>
          <span className="brand">Paramount+</span>
        </div>

        <nav className="nav-links">
          {navItems.map((item) => (
            <a key={item} href="/" onClick={(e) => e.preventDefault()}>
              {item}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="ghost-btn">Sign In</button>
          <button className="solid-btn">Try It Free</button>
        </div>
      </header>

      <main>
        <section className="billboard">
          <div className="billboard-overlay" />
          <div className="billboard-left">
            <div className="logo-lockup">
              <div className="logo-disc">◎</div>
              <div>
                <p className="eyebrow">STREAM NOW</p>
                <div className="logo-word">Paramount+</div>
              </div>
            </div>

            <h1>Watch a mountain of entertainment.</h1>
            <p className="subcopy">
              Stream hit shows, blockbuster movies, live sports, breaking news, and exclusive originals. This React demo uses a Statsig feature gate to swap the Paramount-style blue theme to purple.
            </p>

            <div className="hero-ctas">
              <button className="solid-btn large">Try It Free</button>
              <button className="ghost-btn large">Choose Plan</button>
            </div>
          </div>

          <div className="billboard-right">
            <div className="orbital-ring ring-one" />
            <div className="orbital-ring ring-two" />
            <div className="hero-mosaic">
              {heroCharacters.map((name, idx) => (
                <div
                  key={name}
                  className={`mosaic-tile tile-${(idx % 6) + 1} has-mosaic-image`}
                >
                  <img
                    className="mosaic-image"
                    src={getPosterFromPool(idx)}
                    alt={name}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="poster-shine" />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {showQrCode && (
          <section className="qr-gate-panel">
            <div className="qr-copy">
              <p className="eyebrow">MOBILE QUICK ACCESS</p>
              <h3>Scan to open this Paramount demo on your phone.</h3>
            </div>

            <div className="qr-card" aria-label="QR code linking to the Paramount demo">
              <div className="qr-frame">
                <QRCode
                  value="https://guilermo222.github.io/paramount_demo/"
                  size={168}
                  bgColor="#FFFFFF"
                  fgColor="#0B0F18"
                />
              </div>
              <span className="qr-caption">Open on mobile</span>
            </div>
          </section>
        )}

        <section className="plans-panel">
          <div className="plans-copy">
            <p className="eyebrow">PLANS STARTING AT</p>
            <h2>$5.99/mo</h2>
            <p>Cancel anytime. Offer structure and pricing here are display-only for the UI clone.</p>
          </div>

          <div className="plan-grid">
            {planCards.map((plan, idx) => (
              <article key={plan.name} className={`plan-card ${idx === 1 ? 'featured-plan' : ''}`}>
                <span className="plan-badge">{plan.badge}</span>
                <h3>{plan.name}</h3>
                <p className="plan-price">{plan.price}</p>
                <p>{plan.copy}</p>
                <button className={idx === 1 ? 'solid-btn' : 'ghost-btn'}>Select</button>
              </article>
            ))}
          </div>
        </section>

        <section className="carousel-shell">
          <div className="row-header compact">
            <h3>Featured Brands</h3>
          </div>
          <div className="brand-grid">
            {brands.map((brand) => (
              <div key={brand} className="brand-tile">
                {brand}
              </div>
            ))}
          </div>
        </section>

        {rails.map((row, rowIndex) => (
          <section key={row.title} className="content-row">
            <div className="row-header">
              <h3>{row.title}</h3>
              <a href="/" onClick={(e) => e.preventDefault()}>
                View All
              </a>
            </div>

            <div className="card-scroller">
              {row.items.map((item, index) => (
                <article key={item} className="poster-card">
                  {/**
                   * Fill every tile with real Paramount+ artwork by position.
                   * Titles don't need to match images per user request.
                   */}
                  {(() => {
                    const posterIndex = 6 + rowIndex * 6 + index;
                    const posterUrl = getPosterFromPool(posterIndex);
                    return (
                  <div
                    className={`poster-art row-${rowIndex + 1} item-${(index % 6) + 1} has-poster-image`}
                  >
                    <img
                      className="poster-image"
                      src={posterUrl}
                      alt={item}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="poster-shine" />
                    <div className="poster-footer">
                      <small>{row.title}</small>
                      <span>{item}</span>
                    </div>
                  </div>
                    );
                  })()}
                </article>
              ))}
            </div>
          </section>
        ))}

        <section className="cta-panel">
          <div>
            <p className="eyebrow">STREAMING STARTS HERE</p>
            <h3>All your favorites. One destination.</h3>
            <p>
              The `background` gate toggles the site’s global palette variables. When enabled, every blue accent/background treatment is replaced with a purple equivalent.
            </p>
          </div>
          <button className="solid-btn large">Start Streaming</button>
        </section>
      </main>
    </div>
  );
}

export default App;
