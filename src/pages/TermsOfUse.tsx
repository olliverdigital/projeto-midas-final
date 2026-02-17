import { SEO } from '@/components/SEO'
import { Link } from 'react-router-dom'
import { ArrowLeft, Gavel, Scale, FileWarning, ExternalLink, ShieldAlert } from 'lucide-react'

export default function TermsOfUse() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50/50">
            <SEO
                title="Termos de Uso | MIDAS Serviços"
                description="Leia os termos de uso e condições de serviço da MIDAS Locações e Serviços para entender seus direitos e responsabilidades."
                canonical="/termos"
            />

            {/* Header com Design Consistente */}
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
                            Termos de <span className="text-secondary">Uso</span>
                        </h1>
                        <p className="text-slate-400 text-lg">
                            Regras e diretrizes para o uso de nossa plataforma e serviços.
                        </p>
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="py-12 md:py-20 container px-4 sm:px-6 -mt-10">
                <article className="max-w-4xl mx-auto bg-white p-6 md:p-16 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50">

                    {/* 1. Introdução */}
                    <section className="prose prose-slate lg:prose-lg max-w-none">
                        <div className="flex items-center gap-3 mb-6 text-secondary">
                            <Gavel className="h-8 w-8" />
                            <h2 className="m-0 text-slate-900">1. Aceitação dos Termos</h2>
                        </div>
                        <p>
                            Ao acessar ao site <a href="https://www.midaslsltda.com.br" className="text-secondary no-underline hover:underline font-medium">Midas Locações e Serviços Ltda</a>,
                            você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site.
                        </p>
                    </section>

                    <hr className="my-12 border-slate-100" />

                    {/* 2. Licença de Uso - Card Style */}
                    <section className="prose prose-slate max-w-none">
                        <h3 className="text-slate-900 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm font-bold">02</span>
                            Licença de Uso
                        </h3>
                        <p>
                            É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título.
                        </p>

                        <div className="not-prose bg-slate-50 border border-slate-100 rounded-xl p-6 my-6">
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Sob esta licença, você não pode:</p>
                            <ul className="grid gap-3">
                                {[
                                    'Modificar ou copiar os materiais de propriedade da MIDAS;',
                                    'Usar os materiais para finalidade comercial ou exibição pública;',
                                    'Tentar descompilar ou fazer engenharia reversa de softwares;',
                                    'Remover direitos autorais ou notações de propriedade;',
                                    'Transferir materiais para outra pessoa ou espelhar em outros servidores.'
                                ].map((text, i) => (
                                    <li key={i} className="flex gap-3 text-slate-700 text-sm leading-relaxed">
                                        <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                                        {text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* 3 & 4. Isenção e Limitações */}
                    <section className="mt-12 grid md:grid-cols-2 gap-8 not-prose">
                        <div className="p-8 rounded-2xl bg-slate-900 text-white">
                            <div className="flex items-center gap-2 mb-4 text-secondary">
                                <ShieldAlert className="h-5 w-5" />
                                <h3 className="text-lg font-bold m-0">Isenção</h3>
                            </div>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Os materiais são fornecidos "como estão". A MIDAS não oferece garantias implícitas de comercialização ou adequação a fins específicos.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-amber-50 border border-amber-100 text-amber-900">
                            <div className="flex items-center gap-2 mb-4">
                                <FileWarning className="h-5 w-5" />
                                <h3 className="text-lg font-bold m-0">Limitações</h3>
                            </div>
                            <p className="text-sm text-amber-800/80 leading-relaxed">
                                A MIDAS não se responsabiliza por danos decorrentes do uso ou incapacidade de usar os materiais, incluindo perda de dados ou lucros.
                            </p>
                        </div>
                    </section>

                    {/* 5 & 6. Precisão e Links */}
                    <section className="mt-16 prose prose-slate max-w-none">
                        <h3 className="text-slate-900 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm font-bold">03</span>
                            Precisão e Links Externos
                        </h3>
                        <p>
                            Os materiais exibidos podem incluir erros técnicos ou tipográficos. A MIDAS não garante que o conteúdo seja preciso, completo ou atual, embora possa realizar atualizações sem aviso prévio.
                        </p>
                        <div className="flex items-start gap-3 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg mt-6">
                            <ExternalLink className="h-5 w-5 text-blue-600 mt-1 shrink-0" />
                            <p className="text-sm text-blue-800 m-0">
                                Não revisamos todos os sites vinculados e não somos responsáveis pelo conteúdo de terceiros. O risco é do usuário.
                            </p>
                        </div>
                    </section>

                    {/* Modificações e Lei */}
                    <section className="mt-16 pt-12 border-t border-slate-100">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h4 className="text-slate-900 font-bold mb-3 flex items-center gap-2">
                                    <Scale className="h-5 w-5 text-secondary" />
                                    Lei Aplicável
                                </h4>
                                <p className="text-sm text-slate-600">
                                    Estes termos são regidos pelas leis da jurisdição onde a MIDAS Locações e Serviços Ltda está sediada, submetendo-se aos tribunais locais.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-slate-900 font-bold mb-3">Modificações</h4>
                                <p className="text-sm text-slate-600">
                                    Podemos revisar estes termos a qualquer momento. Ao continuar a usar o site, você aceita a versão atualizada dos termos.
                                </p>
                            </div>
                        </div>
                    </section>

                    <footer className="mt-16 pt-8 border-t border-slate-100">
                        <p className="text-xs font-medium uppercase tracking-wider text-slate-400 m-0">
                            Documento atualizado em: 17 de Fevereiro de 2026
                        </p>
                    </footer>
                </article>
            </main>
        </div>
    )
}