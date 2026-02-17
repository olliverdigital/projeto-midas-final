import { useState } from 'react'
import { Cookie, Shield, BarChart3, Megaphone, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { useCookieConsent, type CookiePreferences } from '@/hooks/useCookieConsent'

interface CookiePreferencesModalProps {
    isOpen: boolean
    onClose: () => void
}

export function CookiePreferencesModal({ isOpen, onClose }: CookiePreferencesModalProps) {
    const { preferences: savedPreferences, savePreferences, acceptAll } = useCookieConsent()

    const [localPreferences, setLocalPreferences] = useState<CookiePreferences>(savedPreferences)

    const handleSave = () => {
        savePreferences(localPreferences)
        onClose()
    }

    const handleAcceptAll = () => {
        acceptAll()
        onClose()
    }

    const togglePreference = (category: keyof CookiePreferences) => {
        if (category === 'essential') return // Essenciais não podem ser desativados

        setLocalPreferences(prev => ({
            ...prev,
            [category]: !prev[category]
        }))
    }

    const cookieCategories = [
        {
            id: 'essential' as const,
            icon: Shield,
            title: 'Cookies Essenciais',
            description: 'Necessários para o funcionamento básico do site. Não podem ser desativados.',
            examples: 'Autenticação, segurança, preferências de idioma',
            required: true
        },
        {
            id: 'analytics' as const,
            icon: BarChart3,
            title: 'Cookies Analíticos',
            description: 'Nos ajudam a entender como os visitantes interagem com o site.',
            examples: 'Google Analytics, métricas de performance',
            required: false
        },
        {
            id: 'marketing' as const,
            icon: Megaphone,
            title: 'Cookies de Marketing',
            description: 'Usados para rastrear visitantes e exibir anúncios relevantes.',
            examples: 'Google Ads, Facebook Pixel, remarketing',
            required: false
        }
    ]

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-3 text-2xl font-bold text-slate-900">
                        <Cookie className="h-7 w-7 text-secondary" />
                        Gerenciar Cookies
                    </DialogTitle>
                    <DialogDescription className="text-slate-600">
                        Personalize suas preferências de cookies. Você pode alterar estas configurações a qualquer momento.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 py-6">
                    {cookieCategories.map((category) => {
                        const Icon = category.icon
                        const isEnabled = localPreferences[category.id]

                        return (
                            <div
                                key={category.id}
                                className={`p-6 rounded-xl border-2 transition-all ${isEnabled
                                    ? 'border-secondary/30 bg-secondary/5'
                                    : 'border-slate-200 bg-slate-50'
                                    }`}
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex gap-4 flex-1">
                                        <div className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${isEnabled ? 'bg-secondary/10 border border-secondary/20' : 'bg-slate-200'
                                            }`}>
                                            <Icon className={`h-6 w-6 ${isEnabled ? 'text-secondary' : 'text-slate-500'}`} />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <h3 className="font-bold text-slate-900">{category.title}</h3>
                                                {category.required && (
                                                    <span className="text-xs font-bold px-2 py-0.5 bg-slate-900 text-white rounded">
                                                        OBRIGATÓRIO
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm text-slate-600 mb-3">{category.description}</p>
                                            <p className="text-xs text-slate-500">
                                                <strong>Exemplos:</strong> {category.examples}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Toggle Switch */}
                                    <button
                                        onClick={() => togglePreference(category.id)}
                                        disabled={category.required}
                                        className={`relative inline-flex h-7 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 ${isEnabled ? 'bg-secondary' : 'bg-slate-300'
                                            } ${category.required ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        role="switch"
                                        aria-checked={isEnabled}
                                        aria-label={`Toggle ${category.title}`}
                                    >
                                        <span
                                            aria-hidden="true"
                                            className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${isEnabled ? 'translate-x-7' : 'translate-x-0'
                                                }`}
                                        />
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-slate-200">
                    <Button
                        onClick={onClose}
                        variant="outline"
                        className="flex-1 rounded-none h-12 border-slate-300"
                    >
                        Cancelar
                    </Button>
                    <Button
                        onClick={handleSave}
                        className="flex-1 bg-slate-900 hover:bg-slate-800 text-white rounded-none h-12 font-bold"
                    >
                        <CheckCircle2 className="mr-2 h-5 w-5" />
                        Salvar Preferências
                    </Button>
                    <Button
                        onClick={handleAcceptAll}
                        className="flex-1 bg-secondary hover:bg-secondary/90 text-white rounded-none h-12 font-bold"
                    >
                        Aceitar Todos
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
