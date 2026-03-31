import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// Public pages
import PublicHome from './pages/public/PublicHome.jsx'
import Register from './pages/public/Register.jsx'
import Subscription from './pages/public/Subscription.jsx'

// Buyer pages
import BuyerRequestForm from './pages/buyer/BuyerRequestForm.jsx'
import BuyerDashboard from './pages/buyer/BuyerDashboard.jsx'
import BuyerRequests from './pages/buyer/BuyerRequests.jsx'
import BuyerProfile from './pages/buyer/BuyerProfile.jsx'
import BuyerMessages from './pages/buyer/BuyerMessages.jsx'

// Seller pages
import SellerListing from './pages/seller/SellerListing.jsx'

// Producer pages
import ProducerDashboard from './pages/producer/ProducerDashboard.jsx'
import ProducerRequests from './pages/producer/ProducerRequests.jsx'
import ProducerListings from './pages/producer/ProducerListings.jsx'
import ProducerOffers from './pages/producer/ProducerOffers.jsx'
import ProducerProfile from './pages/producer/ProducerProfile.jsx'

// Admin pages
import AdminDashboard from './pages/admin/AdminDashboard.jsx'
import AdminApproval from './pages/admin/AdminApproval.jsx'
import AdminUsers from './pages/admin/AdminUsers.jsx'
import AdminSubscriptions from './pages/admin/AdminSubscriptions.jsx'

const navLinks = [
  { path: '/', label: 'Ana Sayfa' },
  { path: '/kayit', label: 'Kayıt' },
  { path: '/abonelik', label: 'Abonelik' },
  { path: '/talep-olustur', label: 'Talep Oluştur' },
  { path: '/alici', label: 'Alıcı Paneli' },
  { path: '/alici/taleplerim', label: 'Taleplerim' },
  { path: '/alici/profil', label: 'Alıcı Profil' },
  { path: '/alici/mesajlar', label: 'Mesajlar' },
  { path: '/satici/ilan-ver', label: 'İlan Ver' },
  { path: '/uretici', label: 'Üretici Paneli' },
  { path: '/uretici/talepler', label: 'Üretici Talepler' },
  { path: '/uretici/ilanlarim', label: 'İlanlarım' },
  { path: '/uretici/tekliflerim', label: 'Tekliflerim' },
  { path: '/uretici/profil', label: 'Üretici Profil' },
  { path: '/admin', label: 'Admin' },
  { path: '/admin/onay', label: 'Admin Onay' },
  { path: '/admin/kullanicilar', label: 'Kullanıcılar' },
  { path: '/admin/abonelikler', label: 'Abonelikler' },
]

function DevNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-2 flex-wrap">
        <span className="text-orange font-bold text-sm mr-2">UcuzApalet Dev Nav:</span>
        {navLinks.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className="text-xs px-2 py-1 rounded bg-white/10 hover:bg-white/20 transition-colors whitespace-nowrap"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <DevNav />
      <div className="pt-12">
        <Routes>
          <Route path="/" element={<PublicHome />} />
          <Route path="/kayit" element={<Register />} />
          <Route path="/abonelik" element={<Subscription />} />

          <Route path="/talep-olustur" element={<BuyerRequestForm />} />
          <Route path="/alici" element={<BuyerDashboard />} />
          <Route path="/alici/taleplerim" element={<BuyerRequests />} />
          <Route path="/alici/profil" element={<BuyerProfile />} />
          <Route path="/alici/mesajlar" element={<BuyerMessages />} />

          <Route path="/satici/ilan-ver" element={<SellerListing />} />

          <Route path="/uretici" element={<ProducerDashboard />} />
          <Route path="/uretici/talepler" element={<ProducerRequests />} />
          <Route path="/uretici/ilanlarim" element={<ProducerListings />} />
          <Route path="/uretici/tekliflerim" element={<ProducerOffers />} />
          <Route path="/uretici/profil" element={<ProducerProfile />} />

          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/onay" element={<AdminApproval />} />
          <Route path="/admin/kullanicilar" element={<AdminUsers />} />
          <Route path="/admin/abonelikler" element={<AdminSubscriptions />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
