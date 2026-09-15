import { useState } from 'react'
import './App.css'

const tabs = [
  { id: 'home', label: 'Home' },
]

const glamourImages = [
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
]

const reviews = [
  {
    name: 'Rhea',
    city: 'Mumbai',
    initials: 'R',
    rating: '★★★★★',
    text: 'Premium access quality bahut accha tha, library ka selection bhi smooth aur clean tha. Delivery fast thi aur overall value bilkul worth it.',
  },
  {
    name: 'Aisha',
    city: 'Delhi',
    initials: 'A',
    rating: '★★★★★',
    text: 'Payment se access tak sab kuch easy aur smooth tha. Content fresh tha, experience premium feel kar raha tha, aur support bhi quick response diya.',
  },
  {
    name: 'Vikram',
    city: 'Jaipur',
    initials: 'V',
    rating: '★★★★★',
    text: 'Overall experience bahut solid tha. Catalog ka layout clean tha, quality strong thi, aur access process bilkul easy aur hassle-free tha.',
  },
  {
    name: 'Naina',
    city: 'Bengaluru',
    initials: 'N',
    rating: '★★★★★',
    text: 'Very polished experience tha aur value bhi achha laga. Private delivery aur secure access ne trust feel kara, overall premium vibe bahut accha tha.',
  },
]

const policyContent = {
  'privacy-policy': {
    title: 'Privacy Policy',
    text: 'Hum aapke personal data ko sirf purchase, account access aur support ke liye use karte hain. Aapki privacy ko secure rakhna hamari priority hai.',
  },
  terms: {
    title: 'Terms',
    text: 'Access sirf successful payment ke baad diya jata hai. User ko content ko private aur personal use ke liye access milta hai.',
  },
  support: {
    title: 'Support',
    text: 'Purchase ke baad aapko support milega. Agar aapko access, payment ya account se related koi issue hota hai, hum help karte hain.',
  },
}

function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [selectedPolicy, setSelectedPolicy] = useState(null)

  return (
    <main className="product-page">
      <div className="phone-shell">
        <header className="status-bar" aria-label="Phone status">
          <span className="time">4:43</span>
          <div className="status-icons" aria-hidden="true">
            <span>◔</span>
            <span>◉</span>
            <span>▣</span>
            <span>⌁</span>
            <span>42%</span>
          </div>
        </header>

        <nav className="page-tabs" aria-label="Page tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={activeTab === tab.id ? 'tab-button active' : 'tab-button'}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {activeTab === 'home' && (
          <>
            <section className="glamour-slider" aria-label="Featured collection gallery">
              <div className="slider-track">
                {[...glamourImages, ...glamourImages].map((image, index) => (
                  <img key={`${image}-${index}`} src={image} alt={`Featured model ${(index % glamourImages.length) + 1}`} className="slider-image" />
                ))}
              </div>
            </section>

            <section className="offer-banner" aria-label="Special offer banner">
              <div className="offer-left">
                <span className="mini-badge">18+</span>
                <span className="mini-badge">PRIVATE</span>
                <span className="mini-badge secure">SECURE</span>
              </div>

              <div className="offer-main">
                <span className="offer-title">VIP MEMBER ACCESS</span>
                <span className="offer-price">₹49</span>
              </div>

              <div className="offer-right">
                <span className="offer-tag">BEST VALUE</span>
                <span className="offer-tag small">LIMITED TIME</span>
              </div>
            </section>

            <a
              href="https://t.me/desireX12_bot"
              target="_blank"
              rel="noreferrer"
              className="download-cta"
              aria-label="View Demo"
            >
              <span className="cta-label">View Demo</span>
          
            </a>

            <section className="bundle-card">
              <div className="card-header">
                <span className="seller-pill">★ BEST SELLER</span>
              </div>

              <div className="bundle-body">
                <p className="bundle-label">PREMIUM PRIVATE COLLECTION</p>
                <h2>Exclusive Access</h2>

                <ul className="feature-list">
                  <li><span className="icon blue">◉</span> 50,000+ curated premium clips</li>
                  <li><span className="icon orange">◉</span> Fresh uploads every week</li>
                  <li><span className="icon yellow">◉</span> Instant access after payment</li>
                  <li><span className="icon silver">◉</span> One-time payment, lifetime access</li>
                  <li><span className="icon pink">◉</span> Secure and private delivery</li>
                </ul>
              </div>
            </section>
          </>
        )}

        {activeTab === 'catalog' && (
          <section className="info-card panel-card">
            <h2>Catalog Overview</h2>
            <div className="info-block">
              <span className="info-dot"></span>
              <p>Curated premium library with exclusive access to trending, high-quality content updates described as 18+ entertainment only.</p>
            </div>
            <div className="info-block">
              <span className="info-dot pink"></span>
              <p>Private member vault with weekend releases, premium collections, and category-based browsing for a seamless experience.</p>
            </div>
            <div className="info-block">
              <span className="info-dot gold"></span>
              <p>Lifetime access, secure checkout, and discreet delivery designed for convenience and privacy-conscious members.</p>
            </div>
          </section>
        )}

        

        {activeTab === 'support' && (
          <section className="info-card panel-card">
            <h2>Support</h2>
            <div className="support-box">
              <p>Email</p>
              <span className="value-box">support@luxevault.co</span>
              <p>Response Time</p>
              <span className="value-box">Within 12–24 hours</span>
              <button type="button" className="small-btn">Contact Support</button>
            </div>
          </section>
        )}

        <section className="reviews-block">
          <a
            href="https://t.me/desireX12_bot"
            target="_blank"
            rel="noreferrer"
            className="telegram-demo-button"
            aria-label="View Demo on Telegram"
          >
            <span className="cta-label">View Demo</span>
            <span className="cta-arrow">↓</span>
          </a>

          <div className="reviews-header">
            <div>
              <p className="review-label">CUSTOMER FEEDBACK</p>
              <h3>What members say</h3>
            </div>
            <span className="review-count">100+ positive reviews</span>
          </div>

          <div className="reviews-list">
            {reviews.map((review) => (
              <article className="review-card" key={review.name}>
                <div className="review-top">
                  <div className="avatar" style={{ background: `linear-gradient(135deg, ${review.name === 'Rhea' ? '#f7a7b5' : review.name === 'Aisha' ? '#c99efb' : review.name === 'Vikram' ? '#f5c76a' : '#78d9d1'} 0%, ${review.name === 'Rhea' ? '#d95d82' : review.name === 'Aisha' ? '#7d65d7' : review.name === 'Vikram' ? '#dc8e5d' : '#4faab5'} 100%)` }}>{review.initials}</div>
                  <div className="review-user">
                    <h4>{review.name}</h4>
                    <span>{review.city}</span>
                  </div>
                  <div className="stars" aria-label="5 star review">{review.rating}</div>
                </div>

                <div className="review-tag">Verified member</div>
                <p>{review.text}</p>
              </article>
            ))}
          </div>
        </section>

        {selectedPolicy && (
          <section className="policy-anchors" aria-label="Selected policy and support section">
            <article className="policy-anchor-card">
              <h4>{policyContent[selectedPolicy].title}</h4>
              <p>{policyContent[selectedPolicy].text}</p>
            </article>
          </section>
        )}

        <section className="privacy-footer">
          <div className="privacy-header">
            <button type="button" className="footer-link" onClick={() => setSelectedPolicy('privacy-policy')}>Privacy Policy</button>
            <button type="button" className="footer-link" onClick={() => setSelectedPolicy('terms')}>Terms</button>
            <button type="button" className="footer-link" onClick={() => setSelectedPolicy('support')}>Support</button>
          </div>
          <div className="security-note">Secure payment • Private access</div>
        </section>
      </div>
    </main>
  )
}

export default App
