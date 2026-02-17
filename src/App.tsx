import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense, useState } from 'react'
import { PhoneCall, Loader2 } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Toaster } from '@/components/ui/sonner'
import { SEOHead } from '@/components/seo/SEOHead'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'
import { CookieConsent } from '@/components/CookieConsent'
import { CookiePreferencesModal } from '@/components/CookiePreferencesModal'

// Lazy load all pages for better performance
const Home = lazy(() => import('@/pages/Home'))
const Sobre = lazy(() => import('@/pages/Sobre'))
const Contato = lazy(() => import('@/pages/Contato'))
const Blog = lazy(() => import('@/pages/Blog'))
const Servicos = lazy(() => import('@/pages/Servicos'))
const ServiceDetail = lazy(() => import('@/pages/ServiceDetail'))
const Emergencia = lazy(() => import('@/pages/Emergencia'))
const BlogPost = lazy(() => import('@/pages/BlogPost'))
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy'))
const TermsOfUse = lazy(() => import('@/pages/TermsOfUse'))
const CookiePolicy = lazy(() => import('@/pages/CookiePolicy'))
const NotFound = lazy(() => import('@/pages/NotFound'))

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="text-center">
      <Loader2 className="h-12 w-12 animate-spin text-brand-blue mx-auto mb-4" />
      <p className="text-muted-foreground">Carregando...</p>
    </div>
  </div>
)

export default function App() {
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <SEOHead />
      <SchemaMarkup />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-background px-4 py-2 border rounded-md z-[100]">Pular para o conteúdo principal</a>
      <Header />

      <main id="main-content" className="flex-1 scroll-mt-20">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/servicos/:id" element={<ServiceDetail />} />
            <Route path="/emergencia" element={<Emergencia />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/privacidade" element={<PrivacyPolicy />} />
            <Route path="/termos" element={<TermsOfUse />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <Toaster />

      {/* Cookie Consent Banner */}
      <CookieConsent onOpenPreferences={() => setIsPreferencesOpen(true)} />

      {/* Cookie Preferences Modal */}
      <CookiePreferencesModal
        isOpen={isPreferencesOpen}
        onClose={() => setIsPreferencesOpen(false)}
      />

      <a
        href={`https://wa.me/5534998099418`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-green-600 text-white px-5 py-3 shadow-lg hover:bg-green-700 transition-all z-50 animate-in fade-in slide-in-from-bottom-4 font-bold border-2 border-white"
        aria-label="Falar com especialista agora"
      >
        <PhoneCall className="h-5 w-5" /> WhatsApp
      </a>
    </div>
  )
}
