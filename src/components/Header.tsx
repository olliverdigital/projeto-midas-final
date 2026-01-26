import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, PhoneCall } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import logoImg from '@/assets/logo.png'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'A Empresa', href: '/sobre' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Emergência', href: '/emergencia', special: true },
    { name: 'Blog', href: '/blog' },
    { name: 'Contato', href: '/contato' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/20 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" aria-label="MIDAS Home">
          <div className="relative flex items-center justify-center w-12 h-12 overflow-hidden group-hover:scale-105 transition-transform">
            <img src={logoImg} alt="MIDAS Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-heading font-black tracking-tighter text-slate-900 group-hover:text-secondary transition-colors">MIDAS</span>
            <span className="text-[0.6rem] font-mono font-bold text-slate-500 tracking-widest uppercase">Locações & Serviços</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-all border-b-2 border-transparent hover:text-secondary hover:bg-secondary/5",
                isActive(item.href) ? "text-secondary border-secondary font-bold" : "text-slate-600",
                item.special && "ml-2 bg-red-50 text-red-600 border-red-200 hover:bg-red-100 hover:border-red-500 hover:text-red-700"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button asChild variant="default" className="bg-secondary hover:bg-secondary/90 text-white font-bold rounded-none h-10 px-6">
            <a href="https://wa.me/5585988154220" target="_blank" rel="noreferrer">
              <PhoneCall className="mr-2 h-4 w-4" />
              Falar com Especialista
            </a>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu" className="rounded-none hover:bg-secondary/10 hover:text-secondary">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l-secondary bg-background/95 backdrop-blur-xl">
            <div className="flex flex-col gap-6 mt-6">
              <Link to="/" className="flex items-center gap-2 mb-8 border-b border-slate-200 pb-4" onClick={() => setIsOpen(false)}>
                <div className="flex items-center justify-center w-12 h-12 overflow-hidden">
                  <img src={logoImg} alt="MIDAS Logo" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-black text-slate-900">MIDAS</span>
                  <span className="text-[0.6rem] font-mono text-slate-500 uppercase">SYSTEM MENU</span>
                </div>
              </Link>
              <nav className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium p-3 transition-colors border-l-2 border-transparent hover:bg-slate-50 hover:border-secondary hover:text-secondary bg-gradient-to-r hover:from-slate-50 hover:to-transparent",
                      isActive(item.href) ? "text-secondary border-secondary bg-slate-50 font-bold" : "text-slate-600",
                      item.special && "text-red-600 font-bold border-red-200 hover:border-red-500"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-8 border-t border-slate-200 pt-6">
                <Button asChild className="w-full bg-secondary text-white font-bold rounded-none h-12" size="lg">
                  <a href="https://wa.me/5585988154220" target="_blank" rel="noreferrer">
                    <PhoneCall className="mr-2 h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
