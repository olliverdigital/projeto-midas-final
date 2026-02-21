import { ArrowRight, ShieldAlert, Zap, Factory, Sun, Activity, ClipboardCheck, PhoneCall, ChevronRight, Gauge } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SEO } from '@/components/SEO'
import { Button } from '@/components/ui/button'
import { ServiceCard } from '@/components/ServiceCard'
import { ContactForm } from '@/components/ContactForm'
import { Testimonials } from '@/components/Testimonials'
import heroBg from '@/assets/midaslsltda-especialistas-em-manutencao-de-inversores.webp'
import trustImage from '@/assets/midaslsltda-eletronica-de-potencia (1).webp'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO
        title="MIDAS - Engenharia de Manutenção Industrial e Energia Solar"
        description="Especialistas em manutenção industrial, energia solar e infraestrutura elétrica. Atendimento 24/7, laudos NR10/SPDA e gestão de ativos."
        canonical="/"
      />

      {/* HERO SECTION: Massive Typographic Overlay */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-slate-950 border-b-4 border-secondary">

        {/* Background Image with Professional Technical Overlay */}
        <div className="absolute inset-0 z-0 select-none overflow-hidden">

          {/* Background Image */}
          <img
            src={heroBg}
            alt="Industrial Technical Background"
            width="1920"
            height="1080"
            loading="eager"
            decoding="sync"
            className="
              w-full h-full object-cover
              opacity-40
              grayscale-[60%]
              contrast-110
              brightness-90
              scale-105
            "
          />

          {/* Smart Gradient Overlay (focus on text area) */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-r
              from-slate-950/90
              via-slate-950/65
              to-transparent
            "
          ></div>

          {/* Subtle Noise / Tech Texture */}
          <div
            className="
              absolute inset-0
              bg-[url('https://grainy-gradients.vercel.app/noise.svg')]
              opacity-10
              hover:opacity-20
              transition-opacity
              duration-1000
            "
          ></div>

          {/* Technical Status Panel */}
          <div className="absolute top-0 right-0 p-8 hidden lg:block z-20 pointer-events-none">
            <div className="border border-white/20 bg-slate-950/50 backdrop-blur-sm p-4 font-mono text-xs text-secondary tracking-[0.2em] w-64 shadow-lg">
              <p>STATUS: ONLINE</p>
              <p>SYSTEM: NOMINAL</p>
              <p>COORD: 03.7319° S, 38.5267° W</p>
            </div>
          </div>

        </div>

        <div className="container relative z-10 pt-20 px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8 animate-in slide-in-from-left duration-700 fade-in">
              <div className="inline-flex items-center border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-sm font-mono font-bold text-secondary tracking-widest uppercase">
                <span className="h-2 w-2 bg-secondary mr-3 animate-pulse shadow-[0_0_10px_#f97316]"></span>
                System Maintenance Protocol
              </div>

              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-heading font-black tracking-tighter text-white leading-[0.9]">
                ZERO<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">DOWNTIME.</span>
              </h1>

              <p className="text-xl text-slate-400 max-w-xl leading-relaxed font-light border-l-2 border-secondary/50 pl-6">
                Manutenção técnica de precisão para indústrias que não podem parar.
                <span className="block mt-2 font-mono text-sm text-slate-500 uppercase tracking-wider">
                  // NR10 • SPDA • SUBESTAÇÕES
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold text-lg h-14 px-8 rounded-none border border-secondary hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                  <a href="#contato">
                    INICIAR DIAGNÓSTICO <ChevronRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-slate-700 bg-slate-900/50 text-white hover:bg-white hover:text-slate-950 font-medium h-14 px-8 rounded-none transition-all">
                  <a href="https://wa.me/5534998099418" target="_blank" rel="noreferrer">
                    <PhoneCall className="mr-2 h-5 w-5" /> WhatsApp Direto
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-5 relative mt-12 lg:mt-0">
              <div className="absolute -inset-1 bg-gradient-to-b from-secondary to-transparent opacity-20 blur-lg rounded-none"></div>
              <div className="relative bg-slate-900/90 backdrop-blur-md border border-slate-700 p-8 shadow-2xl animate-in fade-in zoom-in duration-700 delay-300">
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-secondary"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-secondary"></div>

                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                  <Zap className="text-secondary h-6 w-6" />
                  Solicitação Rápida
                </h3>
                <p className="text-slate-400 text-sm mb-6 font-mono">
                  // RESPOSTA TÉCNICA EM ATÉ 2H
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIAGNOSTIC LIST SECTION (Replacing "Dores") */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="container px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="sticky top-24">
              <h2 className="text-xs font-mono font-bold text-secondary uppercase tracking-[0.2em] mb-4">
                Análise de Riscos Operacionais
              </h2>
              <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-900 mb-6 leading-tight">
                SUA OPERAÇÃO <br />
                <span className="text-slate-400">ESTÁ EM RISCO?</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Falhas não detectadas em sistemas críticos geram custos exponenciais.
                Nossa abordagem preditiva identifica anomalias antes que elas se tornem paradas.
              </p>
              <Button asChild variant="link" className="text-slate-900 font-bold p-0 hover:text-secondary decoration-2 text-lg">
                <Link to="/servicos">VER TODAS AS SOLUÇÕES <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>

            <div className="space-y-4">
              {[
                {
                  id: "ERR-01",
                  title: "Paradas Não Planejadas",
                  desc: "Falha súbita em equipamentos críticos interrompendo a linha de produção.",
                  icon: <ShieldAlert className="h-6 w-6 text-red-600" />,
                  status: "CRITICAL"
                },
                {
                  id: "WRN-02",
                  title: "Ineficiência Energética",
                  desc: "Equipamentos desregulados consumindo até 30% mais energia que o nominal.",
                  icon: <Activity className="h-6 w-6 text-orange-600" />,
                  status: "WARNING"
                },
                {
                  id: "REG-03",
                  title: "Risco Regulatório (NR10)",
                  desc: "Multas por falta de laudos técnicos atualizados ou SPDA ineficiente.",
                  icon: <ClipboardCheck className="h-6 w-6 text-slate-600" />,
                  status: "PENDING"
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  // MUDANÇAS AQUI:
                  // 1. 'top-32' (ou top-40): Faz o card travar mais para baixo, não cobrindo o texto imediatamente.
                  // 2. 'z-10': Garante que o card fique na camada correta.
                  // 3. 'mb-24' (opcional no último): Dá espaço extra para rolar o fim.
                  className="sticky top-80 lg:static z-10 group bg-white p-6 border-l-4 border-slate-200 hover:border-secondary transition-all hover:shadow-lg hover:translate-x-2"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-mono text-xs font-bold text-slate-300 group-hover:text-secondary transition-colors">
                      {item.id}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${item.status === 'CRITICAL' ? 'bg-red-50 text-red-600 border-red-200' :
                      item.status === 'WARNING' ? 'bg-orange-50 text-orange-600 border-orange-200' :
                        'bg-slate-100 text-slate-600 border-slate-200'
                      }`}>
                      {item.status}
                    </span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES: Technical Grid */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        {/* Background Grid Line */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

        <div className="container relative z-10 px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-slate-800 pb-8">
            <div className="max-w-2xl">
              <h2 className="text-xs font-mono font-bold text-secondary uppercase tracking-[0.2em] mb-3">Capacidade Técnica</h2>
              <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-4">SOLUÇÕES INTEGRADAS</h2>
              <p className="text-lg text-slate-400">
                Engenharia de manutenção com rastreabilidade total e conformidade normativa.
              </p>
            </div>
            <Button asChild variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white rounded-none h-12 px-6 font-bold transition-all">
              <Link to="/servicos">CATÁLOGO COMPLETO <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <div className="relative group overflow-hidden border border-red-900/50 bg-red-950/10 p-6 hover:bg-red-950/20 transition-all">
              <div className="absolute top-0 right-0 p-2 opacity-50"><ShieldAlert className="w-12 h-12 text-red-800" /></div>
              <ShieldAlert className="h-8 w-8 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Atendimento de Emergência</h3>
              <p className="text-slate-400 text-sm mb-6">Plantão técnico 24/7 para sistemas críticos.</p>
              <ul className="space-y-2 mb-6 text-sm text-slate-300">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-red-500 rounded-full"></div> Plantão 24h</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-red-500 rounded-full"></div> Equipe Volante</li>
              </ul>
              <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white font-bold rounded-none">
                <Link to="/emergencia">CHAMAR AGORA</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST/ABOUT SECTION: Dark Tech */}
      <section className="py-24 bg-white overflow-hidden relative border-t border-slate-200">
        <div className="container relative z-10 px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 mb-6 border border-slate-200 bg-slate-50 text-slate-600 text-xs font-mono font-bold tracking-widest uppercase rounded-full">
                Por que MIDAS?
              </div>
              <h2 className="text-4xl font-heading font-black text-slate-900 mb-8">
                RIGOR TÉCNICO <br /> & CONFIABILIDADE.
              </h2>

              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { title: "Equipe Certificada", desc: "100% dos técnicos com NR10, NR35 e SEP atualizados.", icon: <ClipboardCheck className="text-secondary" /> },
                  { title: "Rastreabilidade", desc: "Relatórios fotográficos e laudos detalhados de cada intervenção.", icon: <Gauge className="text-secondary" /> },
                  { title: "Instrumentação", desc: "Equipamentos Fluke e FLIR de última geração calibrated.", icon: <Activity className="text-secondary" /> },
                  { title: "Ambientes Críticos", desc: "Expertise em indústrias de alto risco e usinas de geração.", icon: <Factory className="text-secondary" /> }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-slate-100 rounded-full mb-1">
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-secondary translate-x-4 translate-y-4 -z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-50"></div>
              <img
                src={trustImage}
                alt="Laboratório de eletrônica de potência MIDAS - rigor técnico e instrumentação de precisão"
                width="800"
                height="600"
                loading="lazy"
                decoding="async"
                className="w-full max-h-[450px] object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl border border-slate-900"
              />
              <div className="absolute -bottom-8 -left-8 bg-slate-900 p-8 text-white border-l-4 border-secondary shadow-xl max-w-xs">
                <p className="text-5xl font-mono font-bold text-white mb-1">+500</p>
                <p className="text-slate-400 text-xs font-mono uppercase tracking-wider">Ativos Críticos Gerenciados</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <Testimonials />

      {/* CTA SECTION: Minimal Dark */}
      <section id="contato" className="py-24 bg-slate-950 border-t border-slate-900">
        <div className="container px-4 sm:px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-12 lg:p-16 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full group-hover:bg-secondary/20 transition-all"></div>

            <div className="relative z-10 text-center">
              <h2 className="text-3xl lg:text-5xl font-heading font-black text-white mb-6">
                EVITE O PRÓXIMO <span className="text-red-500">DOWNTIME</span>.
              </h2>
              <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                Não espere a falha acontecer. Solicite uma avaliação técnica hoje mesmo.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold h-14 px-10 rounded-none text-lg">
                  <a href="https://wa.me/5534998099418" target="_blank" rel="noreferrer">
                    <PhoneCall className="mr-2 h-5 w-5" /> ATENDIMENTO
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-slate-700 text-white hover:bg-white hover:text-slate-950 font-medium h-14 px-10 rounded-none bg-transparent">
                  <Link to="/contato">
                    Solicitar Orçamento
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
