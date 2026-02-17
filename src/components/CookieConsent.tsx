import { useState } from 'react'
import { Cookie, Settings, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCookieConsent } from '@/hooks/useCookieConsent'
import { Link } from 'react-router-dom'

interface CookieConsentProps {
    onOpenPreferences: () => void
}

export function CookieConsent({ onOpenPreferences }: CookieConsentProps) {
    const { hasConsent, acceptAll, rejectAll } = useCookieConsent()
    const [isVisible, setIsVisible] = useState(!hasConsent)

    const handleAcceptAll = () => {
        acceptAll()
        setIsVisible(false)
    }

    const handleRejectAll = () => {
        rejectAll()
        setIsVisible(false)
    }

    const handleCustomize = () => {
        onOpenPreferences()
    }

    if (!isVisible || hasConsent) {
        return null
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[60] animate-in slide-in-from-bottom duration-500">
            <div className="bg-slate-900 border-t border-slate-800 shadow-2xl">
                <div className="container px-4 sm:px-6 py-6">
                    <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
                        {/* Icon & Text */}
                        <div className="flex-1 flex gap-4">
                            <div className="shrink-0">
                                <div className="w-12 h-12 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                                    <Cookie className="h-6 w-6 text-secondary" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                                    <Shield className="h-5 w-5 text-secondary" />
                                    Sua Privacidade é Importante
                                </h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Utilizamos cookies essenciais para o funcionamento do site e cookies analíticos para melhorar sua experiência.
                                    Você pode gerenciar suas preferências a qualquer momento.{' '}
                                    <Link to="/cookies" className="text-secondary hover:underline font-medium">
                                        Saiba mais
                                    </Link>
                                </p>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                            {/* Personalizar - Botão de Apoio */}
                            <Button
                                onClick={handleCustomize}
                                variant="ghost" // Mudança para ghost para não poluir visualmente
                                className="text-slate-300 hover:text-white hover:bg-slate-800 rounded-md h-11 px-6 font-medium transition-all"
                            >
                                <Settings className="mr-2 h-4 w-4" />
                                Personalizar
                            </Button>

                            {/* Rejeitar - Botão de Contorno */}
                            <Button
                                onClick={handleRejectAll}
                                variant="outline"
                                className="border-slate-600 text-slate-500 hover:bg-slate-200 hover:text-slate-900 rounded-md h-11 px-6 transition-colors"
                            >
                                Rejeitar Não-Essenciais
                            </Button>

                            {/* Aceitar - Call to Action Principal */}
                            <Button
                                onClick={handleAcceptAll}
                                className="bg-secondary hover:bg-secondary/90 text-white border-none rounded-md h-11 px-8 font-bold shadow-lg shadow-secondary/20 transition-all active:scale-95"
                            >
                                Aceitar Todos
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
