import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, PhoneCall, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2" aria-label="MIDAS Home">
          <div className="flex items-center justify-center w-10 h-10 rounded bg-brand-blue text-white">
            <Zap className="h-6 w-6 fill-current" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-bold tracking-tight text-brand-blue">MIDAS</span>
            <span className="text-[0.65rem] font-medium text-muted-foreground tracking-wider uppercase">Locações & Serviços</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-blue",
                isActive(item.href) ? "text-brand-blue font-semibold" : "text-muted-foreground",
                item.special && "text-red-600 font-bold hover:text-red-700"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button asChild variant="default" className="bg-brand-blue hover:bg-brand-blue/90">
            <a href="https://wa.me/5585988154220" target="_blank" rel="noreferrer">
              <PhoneCall className="mr-2 h-4 w-4" />
              Falar com Especialista
            </a>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-6 mt-6">
              <Link to="/" className="flex items-center gap-2 mb-4" onClick={() => setIsOpen(false)}>
                <div className="flex items-center justify-center w-8 h-8 rounded bg-brand-blue text-white">
                  <Zap className="h-5 w-5 fill-current" />
                </div>
                <span className="text-lg font-bold text-brand-blue">MIDAS</span>
              </Link>
              <nav className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-brand-blue",
                      isActive(item.href) ? "text-brand-blue font-semibold" : "text-muted-foreground",
                      item.special && "text-red-600 font-bold"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-4">
                <Button asChild className="w-full bg-brand-blue" size="lg">
                  <a href="https://wa.me/5585988154220" target="_blank" rel="noreferrer">
                    <PhoneCall className="mr-2 h-4 w-4" />
                    Falar via WhatsApp
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
