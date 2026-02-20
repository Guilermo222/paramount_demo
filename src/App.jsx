import { useGateValue } from '@statsig/react-bindings';

const navItems = ['Shows', 'Movies', 'Live TV', 'Sports', 'News', 'Brands'];
const heroCharacters = ['HALO', '1883', 'FRAZIER', 'SURVIVOR', 'STAR TREK', 'YELLOWJACKETS'];

const rails = [
  {
    title: 'Featured',
    items: ['Landman', 'Dexter', 'SEAL Team', 'The Challenge', 'Tulsa King', 'NCIS'],
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

            <div className="hero-meta">
              <span className="gate-pill">Gate `background`: {gateLabel}</span>
              <span className="disclaimer-pill">Active theme: {sourceLabel}</span>
              <span className="disclaimer-pill">Clone UI demo only</span>
            </div>
          </div>

          <div className="billboard-right">
            <div className="orbital-ring ring-one" />
            <div className="orbital-ring ring-two" />
            <div className="hero-mosaic">
              {heroCharacters.map((name, idx) => (
                <div key={name} className={`mosaic-tile tile-${(idx % 6) + 1}`}>
                  <div className="poster-shine" />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

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
                  <div className={`poster-art row-${rowIndex + 1} item-${(index % 6) + 1}`}>
                    <div className="poster-shine" />
                    <div className="poster-footer">
                      <small>{row.title}</small>
                      <span>{item}</span>
                    </div>
                  </div>
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
