import Icon from "./Icon";

const explore = [
  ["Who Are We?",        "/about#who-are-we"],
  ["Our Mission",        "/about#mission"],
  ["FAQs",               "/faqs"],
  ["Books & Publications","/books"],
  ["Events",             "/events"],
  ["Blog",               "/blog"],
] as const;

const connect = [
  ["Our Centers",      "/centers"],
  ["Bhakti Essentials","/media#bhakti-essentials"],
  ["Calendar (PDF)",   "/calendar#pdf"],
  ["Donate",           "/media#donate"],
  ["Contact Us",       "mailto:bhaktabandhav@gmail.com"],
] as const;

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="f-grid">
          <div className="f-brand">
            <span className="brand">
              <span className="mark">ব</span>
              <span className="name">
                <b>Bhakta Bandhav</b>
                <span>Serve · Love</span>
              </span>
            </span>
            <p className="f-about">
              A worldwide family of devotees practicing and sharing the path of pure Bhakti-yoga,
              in the line of Srila B.V. Narayana Gosvami. Our headquarters is Sri Radhe Kunj,
              Vrindavan.
            </p>
            <div className="f-socials">
              <a href="https://www.youtube.com/@RasikanandaSwami" aria-label="YouTube" target="_blank" rel="noopener"><Icon name="yt" size={18} /></a>
              <a href="https://www.instagram.com/bhakta.bandhav" aria-label="Instagram" target="_blank" rel="noopener"><Icon name="ig" size={17} /></a>
              <a href="#" aria-label="Facebook"><Icon name="fb" size={17} /></a>
              <a href="https://wa.me/18456331906" aria-label="WhatsApp" target="_blank" rel="noopener"><Icon name="wa" size={18} /></a>
            </div>
          </div>

          <div>
            <h4>Explore</h4>
            <ul>
              {explore.map(([t, h]) => (
                <li key={t}><a href={h}>{t}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Connect</h4>
            <ul>
              {connect.map(([t, h]) => (
                <li key={t}><a href={h}>{t}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Bhakta Bandhav Calendar</h4>
            <div className="app-btns">
              <a className="app-btn" href="https://apps.apple.com/us/app/bhakta-bandhav-calendar/id6470683443" target="_blank" rel="noopener">
                <Icon name="check" size={22} />
                <span>
                  <span className="a-sm">Download on the</span>
                  <br />
                  <span className="a-lg">App Store</span>
                </span>
              </a>
              <a className="app-btn" href="https://play.google.com/store/apps/details?id=com.gaura.calendar" target="_blank" rel="noopener">
                <Icon name="check" size={22} />
                <span>
                  <span className="a-sm">Get it on</span>
                  <br />
                  <span className="a-lg">Google Play</span>
                </span>
              </a>
            </div>
            <p className="f-about" style={{ marginTop: 18 }}>
              <Icon name="mail" size={15} />
              &nbsp;<a href="mailto:bhaktabandhav@gmail.com">bhaktabandhav@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="f-bottom">
          <span>© 2026 Bhakta Bandhav Parivar. All glories to Sri Guru &amp; Sri Gauranga.</span>
          <div className="f-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies</a>
            <a href="/media#donate">Donate</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
