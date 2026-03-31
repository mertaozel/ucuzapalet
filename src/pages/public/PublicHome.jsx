import { useNavigate } from 'react-router-dom'

// --- SVG Components ---

function HeroPalletBg() {
  return (
    <svg
      width="520"
      height="260"
      viewBox="0 0 520 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 0,
        opacity: 0.08,
        color: '#1B3D6F',
        pointerEvents: 'none',
      }}
    >
      {/* 5 horizontal planks */}
      <rect x="10" y="10"  width="500" height="30" rx="5" fill="currentColor" />
      <rect x="10" y="54"  width="500" height="30" rx="5" fill="currentColor" />
      <rect x="10" y="98"  width="500" height="30" rx="5" fill="currentColor" />
      <rect x="10" y="142" width="500" height="30" rx="5" fill="currentColor" />
      <rect x="10" y="186" width="500" height="30" rx="5" fill="currentColor" />
      {/* 3 vertical support blocks underneath */}
      <rect x="18"  y="220" width="140" height="28" rx="4" fill="currentColor" />
      <rect x="190" y="220" width="140" height="28" rx="4" fill="currentColor" />
      <rect x="362" y="220" width="140" height="28" rx="4" fill="currentColor" />
    </svg>
  )
}

function PalletIcon({ color }) {
  return (
    <svg
      width="80"
      height="60"
      viewBox="0 0 80 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 0.2 }}
    >
      <rect x="2"  y="2"  width="76" height="10" rx="2" fill={color} />
      <rect x="2"  y="16" width="76" height="10" rx="2" fill={color} />
      <rect x="2"  y="30" width="76" height="10" rx="2" fill={color} />
      <rect x="4"  y="44" width="20" height="13" rx="2" fill={color} />
      <rect x="30" y="44" width="20" height="13" rx="2" fill={color} />
      <rect x="56" y="44" width="20" height="13" rx="2" fill={color} />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M5 12l5 5L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function LightningIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CoinIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
      <text x="12" y="17" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="sans-serif">₺</text>
    </svg>
  )
}

// --- Data ---

const listings = [
  {
    title: 'EPAL Euro Palet',
    location: 'İstanbul, Tuzla',
    dims: '120×80 cm · 150 adet',
    imgBg: '#FEF9F0',
    svgColor: '#D97706',
    type: 'Sıfır',
    status: 'Müsait',
  },
  {
    title: 'İkinci El Euro Palet',
    location: 'Ankara, Ostim',
    dims: '120×80 cm · 300 adet',
    imgBg: '#FEF9F0',
    svgColor: '#D97706',
    type: '2.El',
    status: 'Müsait',
  },
  {
    title: 'Plastik Palet — Beyaz',
    location: 'İzmir, Kemalpaşa',
    dims: '120×100 cm · 80 adet',
    imgBg: '#F0F9FF',
    svgColor: '#0284C7',
    type: 'Sıfır',
    status: 'Rezerve',
  },
  {
    title: 'Özel Ölçü Ahşap Palet',
    location: 'Bursa, Nilüfer',
    dims: '100×120 cm · 500 adet',
    imgBg: '#FEF9F0',
    svgColor: '#D97706',
    type: 'Sıfır',
    status: 'Müsait',
  },
  {
    title: 'Temiz Hurda Palet',
    location: 'Kocaeli, Gebze',
    dims: '80×80 cm · 200 adet',
    imgBg: '#FEF9F0',
    svgColor: '#D97706',
    type: '2.El',
    status: 'Müsait',
  },
  {
    title: 'ISPM-15 İhracat Paleti',
    location: 'Mersin, Liman',
    dims: '120×100 cm · 1000 adet',
    imgBg: '#FEF9F0',
    svgColor: '#D97706',
    type: 'Sıfır',
    status: 'Müsait',
  },
]

const steps = [
  {
    num: 1,
    title: 'İhtiyacını birkaç soruda anlat',
    desc: 'İhtiyacına özel soruları cevapla. İletişim bilgilerini gizli tutabilirsin.',
  },
  {
    num: 2,
    title: 'Özel fiyat teklifleri al',
    desc: 'İlgilenen onaylı satıcılar sana özel teklif gönderir.',
  },
  {
    num: 3,
    title: 'Karşılaştır ve seç',
    desc: 'Yorumları incele, pazarlık yap. En uygun fiyatı tercih et.',
  },
]

// --- Sub-components ---

function NavPillButton({ children, style = {}, onMouseEnter, onMouseLeave, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '6px 16px',
        borderRadius: '9999px',
        border: '1px solid rgba(255,255,255,0.3)',
        background: 'transparent',
        color: 'white',
        fontSize: '13px',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        ...style,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  )
}

function ListingCard({ item }) {
  const typeBadge =
    item.type === 'Sıfır'
      ? { bg: '#DCFCE7', text: '#15803D' }
      : { bg: '#FEF3C7', text: '#B45309' }

  const statusBadge =
    item.status === 'Müsait'
      ? { bg: '#DCFCE7', text: '#15803D' }
      : { bg: '#FEF3C7', text: '#B45309' }

  return (
    <div
      style={{
        backgroundColor: 'white',
        border: '1px solid #E5E7EB',
        borderRadius: '12px',
        overflow: 'hidden',
        transition: 'all 0.2s',
        cursor: 'pointer',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {/* Image area */}
      <div
        style={{
          height: '96px',
          backgroundColor: item.imgBg,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <PalletIcon color={item.svgColor} />
        <span
          style={{
            position: 'absolute',
            top: '6px',
            right: '6px',
            fontSize: '9px',
            fontWeight: 700,
            padding: '2px 7px',
            borderRadius: '10px',
            backgroundColor: typeBadge.bg,
            color: typeBadge.text,
          }}
        >
          {item.type}
        </span>
      </div>

      {/* Card body */}
      <div style={{ padding: '14px 16px' }}>
        <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#111827', margin: '0 0 8px 0' }}>
          {item.title}
        </h3>
        <p style={{ fontSize: '13px', color: '#4B5563', margin: '0 0 3px 0' }}>📍 {item.location}</p>
        <p style={{ fontSize: '13px', color: '#4B5563', margin: '0 0 8px 0' }}>📐 {item.dims}</p>
        <span
          style={{
            display: 'inline-block',
            fontSize: '10px',
            fontWeight: 600,
            padding: '2px 7px',
            borderRadius: '10px',
            backgroundColor: statusBadge.bg,
            color: statusBadge.text,
          }}
        >
          {item.status}
        </span>
        <button
          style={{
            marginTop: '10px',
            width: '100%',
            height: '36px',
            border: '1px solid #E5E7EB',
            borderRadius: '8px',
            backgroundColor: 'white',
            color: '#374151',
            fontSize: '13px',
            cursor: 'pointer',
            display: 'block',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = '#1B3D6F'
            e.currentTarget.style.color = 'white'
            e.currentTarget.style.borderColor = '#1B3D6F'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = 'white'
            e.currentTarget.style.color = '#374151'
            e.currentTarget.style.borderColor = '#E5E7EB'
          }}
        >
          Detayları Gör
        </button>
      </div>
    </div>
  )
}

// --- Main Component ---

export default function PublicHome() {
  const navigate = useNavigate()

  return (
    <div style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
      {/* Responsive styles */}
      <style>{`
        .ph-nav-links { display: flex; gap: 10px; align-items: center; }
        .ph-nav-left-btn { display: block; }
        .ph-hero-buttons { flex-direction: row; }
        .ph-listings-grid { grid-template-columns: repeat(3, 1fr); }
        .ph-why-grid { grid-template-columns: repeat(3, 1fr); }
        .ph-steps-grid { grid-template-columns: repeat(3, 1fr); }
        .ph-footer-grid { grid-template-columns: repeat(3, 1fr); }

        @media (max-width: 768px) {
          .ph-nav-links { display: none !important; }
          .ph-nav-left-btn { display: none !important; }
          .ph-listings-grid { grid-template-columns: repeat(2, 1fr); }
          .ph-steps-grid { grid-template-columns: 1fr; }
          .ph-footer-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 375px) {
          .ph-hero-buttons { flex-direction: column; align-items: center; }
          .ph-listings-grid { grid-template-columns: 1fr; }
          .ph-why-grid { grid-template-columns: 1fr; }
          .ph-footer-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 40,
          backgroundColor: '#1B3D6F',
          height: '58px',
          padding: '0 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Left */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Logo square */}
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              backgroundColor: '#F4742B',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <span style={{ color: 'white', fontWeight: 700, fontSize: '18px', lineHeight: 1 }}>U</span>
          </div>
          <span style={{ color: 'white', fontSize: '16px', fontWeight: 700 }}>UcuzApalet</span>

          {/* "Nasıl Palet Seçilir?" — hidden on mobile */}
          <div className="ph-nav-left-btn" style={{ marginLeft: '8px' }}>
            <NavPillButton
              onMouseEnter={e => {
                e.currentTarget.style.background = 'white'
                e.currentTarget.style.color = '#1B3D6F'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = 'white'
              }}
            >
              Nasıl Palet Seçilir?
            </NavPillButton>
          </div>
        </div>

        {/* Right */}
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          {/* Kayıt Ol + Giriş Yap — hidden on mobile */}
          <div className="ph-nav-links">
            <NavPillButton>Kayıt Ol</NavPillButton>
            <NavPillButton>Giriş Yap</NavPillButton>
          </div>

          {/* Palet Sat — always visible */}
          <button
            style={{
              padding: '6px 16px',
              borderRadius: '9999px',
              border: 'none',
              backgroundColor: '#F4742B',
              color: 'white',
              fontSize: '13px',
              fontWeight: 700,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            Palet Sat
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section
        style={{
          backgroundColor: 'white',
          padding: '96px 40px 80px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <HeroPalletBg />

        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Eyebrow */}
          <p
            style={{
              fontSize: '13px',
              fontWeight: 700,
              color: '#2E7D52',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              margin: '0 0 16px 0',
            }}
          >
            TÜRKİYE'NİN PALET PLATFORMU
          </p>

          {/* H1 */}
          <h1
            style={{
              fontSize: 'clamp(36px, 5vw, 48px)',
              fontWeight: 800,
              color: '#111827',
              lineHeight: 1.15,
              margin: '0 0 16px 0',
            }}
          >
            Sıfır ve ikinci el
            <br />
            palet alın, satın.
          </h1>

          {/* Subtitle */}
          <p style={{ fontSize: '18px', color: '#4B5563', margin: '0 0 36px 0' }}>
            Üreticiler ve alıcıları buluşturan güvenilir dijital platform.
          </p>

          {/* Button row */}
          <div
            className="ph-hero-buttons"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              flexWrap: 'wrap',
            }}
          >
            <button
              onClick={() => navigate('/talep-olustur')}
              style={{
                width: '220px',
                height: '56px',
                borderRadius: '9999px',
                border: 'none',
                backgroundColor: '#F4742B',
                color: 'white',
                fontSize: '16px',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 0 0 4px #FED7AA',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#e0611a'
                e.currentTarget.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#F4742B'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Teklif Al
            </button>

            <button
              style={{
                width: '180px',
                height: '56px',
                borderRadius: '9999px',
                border: '2px solid #1B3D6F',
                backgroundColor: 'transparent',
                color: '#1B3D6F',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#1B3D6F'
                e.currentTarget.style.color = 'white'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = '#1B3D6F'
              }}
            >
              İlanları Gör
            </button>
          </div>

          {/* Helper text */}
          <p style={{ fontSize: '13px', color: '#9CA3AF', margin: '16px 0 0 0' }}>
            Ücretsiz talep oluştur — satıcılar seni bulsun.
          </p>
        </div>
      </section>

      {/* ── SON İLANLAR ── */}
      <section style={{ backgroundColor: 'white', padding: '72px 40px' }}>
        {/* Header */}
        <div>
          <span
            style={{
              display: 'inline-block',
              backgroundColor: '#2E7D52',
              color: 'white',
              fontSize: '12px',
              fontWeight: 700,
              padding: '4px 14px',
              borderRadius: '20px',
            }}
          >
            SON İLANLAR
          </span>
          <p style={{ fontSize: '14px', color: '#4B5563', margin: '4px 0 0 0' }}>
            En yeni palet ilanları
          </p>
        </div>

        {/* Listings grid */}
        <div
          className="ph-listings-grid"
          style={{ display: 'grid', gap: '20px', marginTop: '24px' }}
        >
          {listings.map((item, idx) => (
            <ListingCard key={idx} item={item} />
          ))}
        </div>

        {/* See all */}
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <button
            style={{
              width: '220px',
              height: '52px',
              borderRadius: '9999px',
              border: 'none',
              backgroundColor: '#1B3D6F',
              color: 'white',
              fontSize: '15px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#162F56')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#1B3D6F')}
          >
            Tüm İlanları Gör
          </button>
        </div>
      </section>

      {/* ── NEDEN UCUZAPALET ── */}
      <section style={{ backgroundColor: '#F0FAF5', padding: '72px 40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#111827', margin: '0 0 48px 0' }}>
          Neden UcuzApalet.com?
        </h2>

        <div
          className="ph-why-grid"
          style={{ display: 'grid', gap: '32px', maxWidth: '900px', margin: '0 auto' }}
        >
          {[
            { Icon: CheckIcon, title: 'Güvenilir', text: 'Onaylı satıcılar ve alıcılar' },
            { Icon: LightningIcon, title: 'Hızlı', text: 'Anında ilan oluşturma ve görüntüleme' },
            { Icon: CoinIcon, title: 'Ekonomik', text: 'Uygun fiyatlarla ilan verme' },
          ].map(({ Icon, title, text }) => (
            <div key={title} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  backgroundColor: '#2E7D52',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Icon />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#111827', margin: '16px 0 0 0' }}>
                {title}
              </h3>
              <p style={{ fontSize: '15px', color: '#4B5563', margin: '8px 0 0 0', textAlign: 'center' }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── NASIL ÇALIŞIR ── */}
      <section style={{ backgroundColor: 'white', padding: '80px 40px' }}>
        <h2
          style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#111827',
            textAlign: 'center',
            margin: '0 0 56px 0',
          }}
        >
          Nasıl Çalışır?
        </h2>

        <div
          className="ph-steps-grid"
          style={{ display: 'grid', gap: '32px', maxWidth: '900px', margin: '0 auto' }}
        >
          {steps.map(step => (
            <div key={step.num} style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#1B3D6F',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                }}
              >
                {step.num}
              </div>

              {/* Placeholder image */}
              <div
                style={{
                  width: '200px',
                  height: '140px',
                  backgroundColor: '#F3F4F6',
                  borderRadius: '12px',
                  margin: '20px auto 0',
                }}
              />

              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#111827', margin: '20px 0 0 0' }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '14px', color: '#4B5563', margin: '8px 0 0 0', lineHeight: 1.6 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: '#1B3D6F', padding: '56px 40px 32px' }}>
        <div className="ph-footer-grid" style={{ display: 'grid', gap: '40px' }}>
          {/* Col 1 — Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  backgroundColor: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <span style={{ color: '#1B3D6F', fontWeight: 700, fontSize: '18px', lineHeight: 1 }}>U</span>
              </div>
              <span style={{ color: 'white', fontSize: '16px', fontWeight: 700 }}>UcuzApalet</span>
            </div>
            <p style={{ fontSize: '14px', color: '#93C5FD', margin: '12px 0 0 0', lineHeight: 1.6 }}>
              Palet alım satım platformu. Üreticiler ve alıcıları buluşturan güvenilir çözüm.
            </p>
          </div>

          {/* Col 2 — Quick links */}
          <div>
            <h4 style={{ color: 'white', fontSize: '14px', fontWeight: 700, margin: '0 0 12px 0' }}>
              Hızlı Linkler
            </h4>
            {['Palet İlanları', 'Alım Talepleri', 'Nasıl Çalışır?', 'Hakkımızda'].map(link => (
              <a
                key={link}
                href="#"
                style={{
                  display: 'block',
                  fontSize: '14px',
                  color: '#93C5FD',
                  marginBottom: '8px',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                onMouseLeave={e => (e.currentTarget.style.color = '#93C5FD')}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h4 style={{ color: 'white', fontSize: '14px', fontWeight: 700, margin: '0 0 12px 0' }}>
              İletişim
            </h4>
            <p style={{ fontSize: '14px', color: '#93C5FD', margin: 0 }}>info@ucuzapalet.com</p>
            <p style={{ fontSize: '14px', color: '#93C5FD', margin: '4px 0 0 0' }}>+90 XXX XXX XX XX</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.15)',
            paddingTop: '20px',
            marginTop: '40px',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          <span style={{ fontSize: '13px', color: '#93C5FD' }}>
            © 2025 UcuzApalet.com — Tüm hakları saklıdır.
          </span>
          <span style={{ fontSize: '13px', color: '#93C5FD' }}>
            Gizlilik Politikası | Kullanım Koşulları
          </span>
        </div>
      </footer>
    </div>
  )
}
