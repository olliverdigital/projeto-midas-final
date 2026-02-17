import { useState } from 'react'
import { SEO } from '@/components/SEO'
import { Link } from 'react-router-dom'
import { ArrowLeft, Cookie, Shield, BarChart3, Megaphone, Settings, Info, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CookiePreferencesModal } from '@/components/CookiePreferencesModal'

export default function CookiePolicy() {
    const [isPreferencesOpen, setIsPreferencesOpen] = useState(false)

    return (
        <div className="flex flex-col min-h-screen bg-slate-50/50">
            <SEO
                title="Política de Cookies | MIDAS Serviços"
                description="Entenda como a MIDAS utiliza cookies e como você pode gerenciar suas preferências."
                canonical="/cookies"
            />

            {/* Header */}
            <header className="bg-slate-950 text-white py-16 md:py-24">
                <div className="container px-4 sm:px-6">
                    <Link
                        to="/"
                        className="inline-flex items-center text-slate-400 hover:text-secondary mb-8 transition-all group"
                    >
                        <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
                        <span className="text-sm font-medium">Voltar para a Home</span>
                    </Link>
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                            Política de <span className="text-secondary">Cookies</span>
                        </h1>
                        <p className="text-slate-400 text-lg">
                            Transparência total sobre como usamos cookies para melhorar sua experiência.
                        </p>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="py-12 md:py-20 container px-4 sm:px-6 -mt-10">
                <article className="max-w-4xl mx-auto bg-white p-6 md:p-16 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50">

                    {/* Intro */}
                    <section className="prose prose-slate lg:prose-lg max-w-none">
                        <div className="flex items-center gap-3 mb-6 text-secondary">
                            <Cookie className="h-8 w-8" />
                            <h2 className="m-0 text-slate-900">O que são Cookies?</h2>
                        </div>
                        <p>
                            Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita um site.
                            Eles permitem que o site lembre suas ações e preferências ao longo do tempo.
                        </p>
                        <p>
                            Na <strong>MIDAS Locações e Serviços</strong>, utilizamos cookies de forma responsável e transparente,
                            sempre respeitando sua privacidade conforme a LGPD (Lei Geral de Proteção de Dados).
                        </p>
                    </section>

                    <hr className="my-12 border-slate-100" />

                    {/* Tipos de Cookies */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-8">Tipos de Cookies que Utilizamos</h2>

                        <div className="space-y-6">
                            {/* Essenciais */}
                            <div className="p-6 rounded-xl border-2 border-secondary/30 bg-secondary/5">
                                <div className="flex gap-4 items-start">
                                    <div className="shrink-0 w-12 h-12 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                                        <Shield className="h-6 w-6 text-secondary" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-3">
                                            <h3 className="font-bold text-slate-900 text-lg">Cookies Essenciais</h3>
                                            <span className="text-xs font-bold px-2 py-0.5 bg-slate-900 text-white rounded">
                                                SEMPRE ATIVOS
                                            </span>
                                        </div>
                                        <p className="text-sm text-slate-600 mb-3">
                                            Necessários para o funcionamento básico do site. Não podem ser desativados pois são fundamentais
                                            para navegação e segurança.
                                        </p>
                                        <div className="text-xs text-slate-500">
                                            <strong>Exemplos:</strong> Autenticação, preferências de sessão, segurança CSRF, gerenciamento de consentimento
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Analíticos */}
                            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50">
                                <div className="flex gap-4 items-start">
                                    <div className="shrink-0 w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center">
                                        <BarChart3 className="h-6 w-6 text-slate-500" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-3">
                                            <h3 className="font-bold text-slate-900 text-lg">Cookies Analíticos</h3>
                                            <span className="text-xs font-medium px-2 py-0.5 bg-blue-100 text-blue-700 rounded">
                                                OPCIONAL
                                            </span>
                                        </div>
                                        <p className="text-sm text-slate-600 mb-3">
                                            Nos ajudam a entender como os visitantes interagem com nosso site, permitindo melhorias contínuas
                                            na experiência do usuário.
                                        </p>
                                        <div className="text-xs text-slate-500">
                                            <strong>Exemplos:</strong> Google Analytics, métricas de performance, heat maps, análise de navegação
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Marketing */}
                            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50">
                                <div className="flex gap-4 items-start">
                                    <div className="shrink-0 w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center">
                                        <Megaphone className="h-6 w-6 text-slate-500" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-3">
                                            <h3 className="font-bold text-slate-900 text-lg">Cookies de Marketing</h3>
                                            <span className="text-xs font-medium px-2 py-0.5 bg-amber-100 text-amber-700 rounded">
                                                OPCIONAL
                                            </span>
                                        </div>
                                        <p className="text-sm text-slate-600 mb-3">
                                            Utilizados para rastrear visitantes através de diferentes sites e exibir anúncios mais relevantes
                                            aos seus interesses.
                                        </p>
                                        <div className="text-xs text-slate-500">
                                            <strong>Exemplos:</strong> Google Ads, Facebook Pixel, remarketing tags, conversões publicitárias
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <hr className="my-12 border-slate-100" />

                    {/* Como Gerenciar */}
                    <section className="prose prose-slate max-w-none">
                        <div className="flex items-center gap-3 mb-6 text-secondary">
                            <Settings className="h-7 w-7" />
                            <h2 className="m-0 text-slate-900">Como Gerenciar Cookies</h2>
                        </div>

                        <p>
                            Você tem total controle sobre os cookies que aceita. Pode gerenciar suas preferências de três formas:
                        </p>

                        <div className="not-prose mt-8 p-8 rounded-2xl bg-slate-900 text-white">
                            <h3 className="text-xl font-bold mb-4">Gerenciar Agora</h3>
                            <p className="text-slate-300 mb-6 text-sm">
                                Clique no botão abaixo para abrir o gerenciador de preferências e personalizar
                                suas configurações de cookies.
                            </p>
                            <Button
                                onClick={() => setIsPreferencesOpen(true)}
                                className="bg-secondary hover:bg-secondary/90 text-white font-bold h-12 px-8 rounded-none"
                            >
                                <Settings className="mr-2 h-5 w-5" />
                                Abrir Gerenciador de Cookies
                            </Button>
                        </div>

                        <div className="mt-8 grid md:grid-cols-2 gap-6 not-prose">
                            <div className="p-5 rounded-xl bg-slate-50 border border-slate-100">
                                <h4 className="font-bold text-slate-900 mb-2">Navegador</h4>
                                <p className="text-sm text-slate-600">
                                    Configure diretamente nas configurações do seu navegador (Chrome, Firefox, Safari, Edge).
                                </p>
                            </div>
                            <div className="p-5 rounded-xl bg-slate-50 border border-slate-100">
                                <h4 className="font-bold text-slate-900 mb-2">Banner de Cookies</h4>
                                <p className="text-sm text-slate-600">
                                    Na primeira visita, o banner permite aceitar, rejeitar ou personalizar suas preferências.
                                </p>
                            </div>
                        </div>
                    </section>

                    <hr className="my-12 border-slate-100" />

                    {/* Cookies de Terceiros */}
                    <section className="prose prose-slate max-w-none">
                        <h3 className="text-slate-900 flex items-center gap-2">
                            <Info className="text-secondary h-6 w-6" />
                            Cookies de Terceiros
                        </h3>
                        <p>
                            Alguns cookies são definidos por serviços de terceiros que aparecem em nossas páginas.
                            Não temos controle sobre esses cookies.
                        </p>
                        <blockquote className="bg-blue-50 border-blue-200 text-blue-900 italic">
                            Os cookies de terceiros seguem as políticas de privacidade dos respectivos fornecedores
                            (Google, Facebook, etc.). Recomendamos revisar essas políticas diretamente nos sites deles.
                        </blockquote>
                    </section>

                    <hr className="my-12 border-slate-100" />

                    {/* Atualizações */}
                    <section className="prose prose-slate max-w-none">
                        <h3 className="text-slate-900 flex items-center gap-2">
                            <Calendar className="text-secondary h-6 w-6" />
                            Atualizações desta Política
                        </h3>
                        <p>
                            Podemos atualizar esta Política de Cookies periodicamente. Quando fizermos alterações significativas,
                            notificaremos você através de um aviso no site.
                        </p>
                        <p className="text-sm text-slate-500">
                            Recomendamos revisar esta página regularmente para se manter informado sobre como protegemos sua privacidade.
                        </p>
                    </section>

                    <footer className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs font-medium uppercase tracking-wider text-slate-400 m-0">
                            Última atualização: 17 de Fevereiro de 2026
                        </p>
                        <div className="flex gap-4 text-sm">
                            <Link to="/privacidade" className="text-secondary hover:underline font-medium">
                                Política de Privacidade
                            </Link>
                            <Link to="/termos" className="text-secondary hover:underline font-medium">
                                Termos de Uso
                            </Link>
                        </div>
                    </footer>
                </article>
            </main>

            {/* Modal de Preferências */}
            <CookiePreferencesModal
                isOpen={isPreferencesOpen}
                onClose={() => setIsPreferencesOpen(false)}
            />
        </div>
    )
}
