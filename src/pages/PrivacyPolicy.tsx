import { SEO } from '@/components/SEO'
import { Link } from 'react-router-dom'
import { ArrowLeft, ShieldCheck, Lock, FileText, Info } from 'lucide-react'

export default function PrivacyPolicy() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50/50">
            <SEO
                title="Política de Privacidade | MIDAS Serviços"
                description="Saiba como a MIDAS Locações e Serviços protege seus dados e garante sua privacidade."
                canonical="/privacidade"
            />

            {/* Header com Gradiente Suave */}
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
                            Política de <span className="text-secondary">Privacidade</span>
                        </h1>
                        <p className="text-slate-400 text-lg">
                            Transparência e segurança no tratamento dos seus dados pessoais.
                        </p>
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="py-12 md:py-20 container px-4 sm:px-6 -mt-10">
                <article className="max-w-4xl mx-auto bg-white p-6 md:p-16 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50">

                    {/* Intro Section */}
                    <section className="prose prose-slate lg:prose-lg max-w-none">
                        <div className="flex items-center gap-3 mb-6 text-secondary">
                            <ShieldCheck className="h-8 w-8" />
                            <h2 className="m-0 text-slate-900">Nossa Filosofia</h2>
                        </div>
                        <p>
                            A sua privacidade é fundamental para o <strong>Midas Locações e Serviços Ltda</strong>. Operamos com base em três pilares:
                            transparência, segurança e respeito ao usuário em todos os nossos canais digitais.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 my-10 not-prose">
                            <div className="p-5 rounded-xl bg-slate-50 border border-slate-100">
                                <Lock className="h-6 w-6 text-secondary mb-3" />
                                <h4 className="font-bold text-slate-900">Coleta Mínima</h4>
                                <p className="text-sm text-slate-600">Solicitamos dados apenas quando essencial para a execução dos nossos serviços.</p>
                            </div>
                            <div className="p-5 rounded-xl bg-slate-50 border border-slate-100">
                                <FileText className="h-6 w-6 text-secondary mb-3" />
                                <h4 className="font-bold text-slate-900">Retenção Ética</h4>
                                <p className="text-sm text-slate-600">Armazenamos informações apenas pelo tempo necessário, seguindo as normas da LGPD.</p>
                            </div>
                        </div>
                    </section>

                    <hr className="my-12 border-slate-100" />

                    {/* Links e Terceiros */}
                    <section className="prose prose-slate max-w-none">
                        <h3 className="text-slate-900 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm">01</span>
                            Segurança e Terceiros
                        </h3>
                        <p>
                            Utilizamos meios comercialmente aceitáveis para evitar perdas, roubos e acessos não autorizados. No entanto, o nosso site pode conter links para ambientes externos.
                        </p>
                        <blockquote className="bg-amber-50 border-amber-200 text-amber-900 italic">
                            Importante: Não temos controle sobre o conteúdo de sites de terceiros e não nos responsabilizamos por suas respectivas políticas.
                        </blockquote>
                    </section>

                    {/* Compromisso - Card de destaque */}
                    <section className="mt-16 p-8 rounded-2xl bg-slate-900 text-slate-300 shadow-inner">
                        <h3 className="text-white mt-0 flex items-center gap-2">
                            Compromisso do Usuário
                        </h3>
                        <p className="text-slate-400 mb-6">
                            Ao utilizar nossa plataforma, você concorda em:
                        </p>
                        <ul className="grid gap-4 list-none p-0">
                            {[
                                { title: 'Legalidade', desc: 'Não realizar atividades ilegais ou contrárias à boa fé.' },
                                { title: 'Respeito', desc: 'Não difundir conteúdo discriminatório, xenofóbico ou abusivo.' },
                                { title: 'Integridade', desc: 'Não introduzir vírus ou sistemas maliciosos que causem danos.' }
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-3 items-start border-b border-slate-800 pb-3 last:border-0">
                                    <span className="text-secondary font-bold">0{idx + 1}.</span>
                                    <div>
                                        <strong className="text-white block">{item.title}</strong>
                                        <span className="text-sm">{item.desc}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Final Section */}
                    <section className="mt-16 prose prose-slate max-w-none">
                        <h3 className="text-slate-900 flex items-center gap-2">
                            <Info className="text-secondary h-6 w-6" />
                            Dúvidas e Contato
                        </h3>
                        <p>
                            Se você não tem certeza sobre a necessidade de aceitar cookies ou sobre como tratamos seus dados,
                            recomendamos manter as configurações padrão para garantir o pleno funcionamento das ferramentas do site.
                        </p>
                        <p>
                            Para qualquer esclarecimento, nossa equipe está à disposição através dos nossos canais oficiais de atendimento.
                        </p>
                    </section>

                    <footer className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs font-medium uppercase tracking-wider text-slate-400 m-0">
                            Última atualização: 17 de Fevereiro de 2026
                        </p>
                        <div className="flex gap-4">
                            {/* Espaço para links rápidos se necessário */}
                        </div>
                    </footer>
                </article>
            </main>
        </div>
    )
}