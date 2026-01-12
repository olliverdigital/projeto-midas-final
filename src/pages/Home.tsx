import { ArrowRight, CheckCircle2, ShieldAlert, Zap, Factory, Sun, Activity, ClipboardCheck, PhoneCall } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ServiceCard } from '@/components/ServiceCard'
import { ContactForm } from '@/components/ContactForm'
import heroBg from '@/assets/hero-bg.jpg'
import industrialMaintenance from '@/assets/industrial-maintenance.jpg'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Fundo industrial técnico"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/50"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in slide-in-from-left duration-700">
              <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-300">
                <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
                Especialistas em Equipamentos Críticos
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-white leading-tight">
                Reduzimos paradas não planejadas com <span className="text-brand-gold">manutenção técnica especializada</span>.
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
                Garanta a confiabilidade da sua operação. Atuamos com manutenção preventiva, corretiva e preditiva, em total conformidade com NR10, SPDA e PIE.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="bg-brand-gold hover:bg-brand-gold/90 text-slate-900 font-bold text-base h-12 px-8">
                  <a href="#contato">
                    Agendar Avaliação Gratuita <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-slate-600 text-white hover:bg-slate-800 h-12 px-8">
                  <a href="https://wa.me/5585988154220" target="_blank" rel="noreferrer">
                    <PhoneCall className="mr-2 h-5 w-5" /> WhatsApp Especialista
                  </a>
                </Button>
              </div>
            </div>

            {/* Form on Hero (Lead Magnet style) - Desktop Only */}
            <div className="hidden lg:block bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-2xl animate-in fade-in zoom-in duration-1000 delay-300">
              <h3 className="text-xl font-bold text-white mb-2">Solicite um Orçamento Rápido</h3>
              <p className="text-slate-400 text-sm mb-6">Resposta técnica em até 2 horas.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Dores / Problemas */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              Sua operação não pode parar por falhas evitáveis
            </h2>
            <p className="text-lg text-muted-foreground">
              A falta de manutenção especializada gera custos ocultos que corroem sua margem de lucro.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldAlert className="h-10 w-10 text-red-500" />,
                title: "Paradas Inesperadas",
                desc: "Downtime não planejado que interrompe a produção e gera prejuízos imediatos."
              },
              {
                icon: <Activity className="h-10 w-10 text-orange-500" />,
                title: "Eficiência Comprometida",
                desc: "Equipamentos desregulados consomem mais energia e entregam menos performance."
              },
              {
                icon: <ClipboardCheck className="h-10 w-10 text-slate-600" />,
                title: "Riscos Regulatórios",
                desc: "Multas e interdições por falta de conformidade com NR10, SPDA e laudos atualizados."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border shadow-sm hover:shadow-md transition-all text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-24 container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">Soluções Técnicas Integradas</h2>
            <p className="text-lg text-muted-foreground">
              Da manutenção preditiva à intervenção emergencial, cobrimos todo o ciclo de vida dos seus ativos.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link to="/servicos">Ver todos os serviços <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Manutenção Industrial"
            description="Gestão completa de ativos para maximizar disponibilidade e vida útil."
            icon={<Factory className="h-6 w-6" />}
            href="/servicos/manutencao-industrial"
            features={["Preventiva e Corretiva", "Mecânica e Elétrica", "Gestão de Ativos"]}
          />
          <ServiceCard
            title="Energia Solar & Inversores"
            description="Especialistas em O&M de usinas fotovoltaicas e inversores centrais."
            icon={<Sun className="h-6 w-6" />}
            href="/servicos/energia-solar"
            features={["Limpeza Técnica", "Análise de Performance", "Reparo de Inversores"]}
          />
          <ServiceCard
            title="Infraestrutura Elétrica"
            description="Manutenção e montagem de subestações, QGBTs e redes de distribuição."
            icon={<Zap className="h-6 w-6" />}
            href="/servicos/infraestrutura"
            features={["Subestações", "Cabeamento Estruturado", "Quadros de Comando"]}
          />
          <ServiceCard
            title="Manutenção Preditiva"
            description="Diagnóstico avançado para antecipar falhas antes que elas parem sua produção."
            icon={<Activity className="h-6 w-6" />}
            href="/servicos/preditiva"
            features={["Termografia", "Análise de Vibração", "Ultrassom"]}
          />
          <ServiceCard
            title="Projetos & Laudos"
            description="Documentação técnica para garantir segurança jurídica e operacional."
            icon={<ClipboardCheck className="h-6 w-6" />}
            href="/servicos/projetos"
            features={["Laudos NR10 e SPDA", "Projetos Elétricos", "Prontuário das Instalações"]}
          />
          <ServiceCard
            title="Atendimento de Emergência"
            description="Plantão técnico 24/7 para restabelecimento rápido de sistemas críticos."
            icon={<ShieldAlert className="h-6 w-6" />}
            href="/emergencia"
            features={["Plantão 24h", "Equipe Volante", "Peças Críticas"]}
            className="border-l-red-500 bg-red-50/50"
          />
        </div>
      </section>

      {/* Diferenciais / Sobre */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-800/50 skew-x-12 translate-x-20"></div>
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Por que confiar na MIDAS?</h2>
              <div className="space-y-8">
                {[
                  { title: "Equipe 100% Qualificada", desc: "Técnicos certificados NR10, NR35 e SEP, com treinamento contínuo." },
                  { title: "Rastreabilidade Total", desc: "Relatórios fotográficos e laudos detalhados de cada intervenção." },
                  { title: "Equipamentos de Ponta", desc: "Utilizamos as melhores ferramentas de diagnóstico do mercado (Fluke, FLIR)." },
                  { title: "Atuação em Ambientes Críticos", desc: "Experiência comprovada em indústrias de alto risco e usinas de geração." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 bg-brand-gold/20 p-2 rounded-lg h-fit">
                      <CheckCircle2 className="h-6 w-6 text-brand-gold" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={industrialMaintenance}
                alt="Equipe técnica MIDAS em campo"
                className="rounded-lg shadow-2xl border-4 border-slate-700 rotate-2 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -left-6 bg-brand-blue p-6 rounded-lg shadow-xl max-w-xs">
                <p className="text-4xl font-bold text-white mb-1">+500</p>
                <p className="text-blue-200 font-medium">Equipamentos críticos atendidos com sucesso</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final + Form Section */}
      <section id="contato" className="py-24 container">
        <div className="bg-brand-blue rounded-2xl overflow-hidden shadow-2xl relative">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-16 text-white flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Evite prejuízos. Fale com um especialista agora.</h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Não espere a falha acontecer. Solicite uma avaliação técnica gratuita e descubra como podemos otimizar sua operação.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-gold" />
                  <span>Diagnóstico inicial sem compromisso</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-gold" />
                  <span>Plano de manutenção personalizado</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-gold" />
                  <span>Atendimento rápido e eficiente</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-blue-50 font-bold">
                  <a href="https://wa.me/5585988154220" target="_blank" rel="noreferrer">
                    <PhoneCall className="mr-2 h-5 w-5" /> Chamar no WhatsApp
                  </a>
                </Button>
              </div>
            </div>
            <div className="bg-white p-8 lg:p-12">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900">Solicitar Contato</h3>
                <p className="text-muted-foreground">Preencha o formulário abaixo.</p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
