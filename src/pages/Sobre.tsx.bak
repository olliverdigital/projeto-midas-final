import { ShieldCheck, Target, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { SEO } from '@/components/SEO'
import sobreImagem from '@/assets/midaslsltda-eletronica-de-potencia.webp'
import heroBg from '@/assets/fazenda-de-paineis-solares-midas.webp'

export default function Sobre() {
  return (
    <div className="flex flex-col min-h-screen pb-20">
      <SEO
        title="Sobre Nós | MIDAS - Excelência em Engenharia"
        description="Conheça a história da MIDAS, nossa equipe certificada e nosso compromisso com segurança e eficiência em serviços industriais e de energia."
        canonical="/sobre"
      />
      <section
        className="relative bg-slate-900 text-white py-24"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-slate-900/80"></div>
        <div className="container mx-auto max-w-5xl px-6 text-justify relative z-10">

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Nossa História & Propósito
            </h1>
            <div className="w-20 h-1 bg-secondary rounded-full"></div>
          </div>

          <div className="space-y-10 text-slate-300">

            <p className="text-lg md:text-xl leading-relaxed">
              A Midas Locações e Serviços LTDA, sediada em Rio Paranaíba – MG,
              é construída sobre três pilares fundamentais:
              <span className="text-white font-medium"> experiência técnica sólida</span>,
              <span className="text-white font-medium"> visão estratégica</span> e
              <span className="text-white font-medium"> compromisso com resultados</span>.
              Fundada por José Luiz Lima dos Santos, especialista em eletrônica
              de alta potência, a empresa carrega em sua essência a vivência prática
              em ambientes industriais de alta criticidade.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              Sua trajetória teve início no Polo Petroquímico de Camaçari,
              um dos maiores complexos industriais do país. Em um cenário
              de alta exigência operacional, desenvolveu profundo domínio
              em sistemas eletroeletrônicos, manutenção industrial,
              confiabilidade operacional e segurança — fundamentos que
              sustentam a excelência técnica da Midas.
            </p>

            <div className="pt-6 border-t border-slate-800 space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                Especialização em Eletrônica de Alta Potência e Energia Solar
              </h3>

              <p className="text-lg md:text-xl leading-relaxed">
                Com o avanço da geração distribuída no Brasil, a Midas
                direcionou estrategicamente sua atuação para a eletrônica
                de alta potência aplicada à geração solar fotovoltaica,
                com foco em desempenho, eficiência e continuidade operacional.
              </p>

              <ul className="space-y-3 text-lg md:text-xl">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-3 bg-secondary rounded-full"></span>
                  Manutenção e diagnóstico de inversores fotovoltaicos
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-3 bg-secondary rounded-full"></span>
                  Suporte técnico especializado
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-3 bg-secondary rounded-full"></span>
                  Soluções em sistemas de conversão de energia
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-3 bg-secondary rounded-full"></span>
                  Análise de falhas e recuperação de equipamentos
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-3 bg-secondary rounded-full"></span>
                  Otimização de desempenho e confiabilidade operacional
                </li>
              </ul>

              <p className="text-lg md:text-xl leading-relaxed">
                O diferencial da empresa está no domínio das arquiteturas
                de inversores, eletrônica embarcada, sistemas de proteção,
                controle e monitoramento, além da integração segura com
                redes elétricas — sempre em conformidade com normas técnicas
                e requisitos de segurança.
              </p>

              <p className="text-lg md:text-xl leading-relaxed">
                A Midas atende usinas solares, sistemas de geração distribuída,
                plantas industriais e instalações comerciais, especialmente
                onde desempenho, segurança e confiabilidade são indispensáveis.
              </p>
            </div>

          </div>
        </div>
      </section>


      <section className="py-16 container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-slate-200 rounded-lg overflow-hidden shadow-lg max-w-md mx-auto">
              <img src={sobreImagem} alt="Laboratório de Eletrônica de Potência - MIDAS" width="600" height="750" loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl border border-slate-100 max-w-xs hidden md:block">
              <p className="font-heading font-bold text-brand-blue text-lg mb-2">Sede em Rio Paranaíba – MG</p>
              <p className="text-sm text-muted-foreground">Atuação regional com capacidade de mobilização rápida.</p>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-slate-900">Compromisso com a Excelência</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Atuamos nos segmentos de Manutenção Industrial, Energia Solar e Infraestrutura Elétrica. Nosso foco não é apenas consertar o que quebrou, mas garantir que sua operação continue rodando com eficiência máxima.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Com uma equipe altamente qualificada e equipamentos de diagnóstico de última geração, entregamos confiabilidade para indústrias e usinas que não podem parar.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24 relative overflow-hidden">
        {/* Background Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="container relative z-10 max-w-5xl">
          <div className="flex flex-col gap-8">

            {/* 01. Missão - Dark Card (Gold Accent) */}
            <div className="bg-slate-900 p-8 md:p-12 rounded-xl relative overflow-hidden text-white shadow-2xl group border-l-4 border-brand-gold">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Target className="w-64 h-64 -mr-20 -mt-20" />
              </div>

              <div className="relative z-10">
                <span className="inline-block text-xs font-mono tracking-widest text-brand-gold mb-4 uppercase">
                  Missão
                </span>
                <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6 leading-tight">
                  Potência e <span className="text-brand-gold">Confiabilidade</span> para Sistemas Críticos.
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
                  Fornecer soluções em locações e serviços técnicos especializados, com foco em eletrônica de alta potência e sistemas fotovoltaicos, garantindo segurança, confiabilidade e alto desempenho, contribuindo para a eficiência energética, a continuidade operacional e a sustentabilidade dos empreendimentos atendidos.
                </p>
              </div>
            </div>

            {/* 02. Visão - Dark Card (Blue Accent) */}
            <div className="bg-slate-900 p-8 md:p-12 rounded-xl relative overflow-hidden text-white shadow-2xl group border-l-4 border-brand-blue">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <ShieldCheck className="w-64 h-64 -mr-20 -mt-20" />
              </div>

              <div className="relative z-10">
                <span className="inline-block text-xs font-mono tracking-widest text-brand-gold mb-4 uppercase">
                  Visão
                </span>
                <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6 leading-tight">
                  Referência Nacional em <span className="text-brand-gold">Excelência Técnica</span>
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
                  Ser reconhecida como uma empresa de referência nacional em serviços técnicos de eletrônica industrial e fotovoltaica, especialmente em inversores de energia, destacando-se pela excelência técnica, responsabilidade profissional, inovação e capacidade de entregar soluções robustas para sistemas críticos.
                </p>
              </div>
            </div>

            {/* 03. Valores - Dark Card (Emerald Accent) */}
            <div className="bg-slate-900 p-8 md:p-12 rounded-xl relative overflow-hidden text-white shadow-2xl group border-l-4 border-emerald-500">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <CheckCircle2 className="w-64 h-64 -mr-20 -mt-20" />
              </div>

              <div className="relative z-10">
                <span className="inline-block text-xs font-mono tracking-widest text-brand-gold mb-6 uppercase">
                  Valores
                </span>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                  {[
                    { title: "Excelência Técnica", desc: "Atuação baseada em conhecimento profundo e diagnóstico assertivo." },
                    { title: "Segurança e Conformidade", desc: "Compromisso absoluto com normas técnicas e integridade." },
                    { title: "Responsabilidade Ética", desc: "Postura profissional, transparente e responsável." },
                    { title: "Confiabilidade Operacional", desc: "Soluções estáveis, duráveis e orientadas à continuidade." },
                    { title: "Energia Limpa", desc: "Atuação alinhada à transição energética e sustentabilidade." },
                    { title: "Evolução Contínua", desc: "Atualização tecnológica constante e melhoria contínua." }
                  ].map((val, i) => (
                    <div key={i} className="group/item">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] group-hover/item:scale-125 transition-transform"></div>
                        <h4 className="font-bold text-white text-lg">{val.title}</h4>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed pl-5 border-l border-emerald-500/20 group-hover/item:border-emerald-500/50 transition-colors">
                        {val.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 container text-center">
        <h2 className="text-3xl font-heading font-bold mb-12">Nossos Diferenciais</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Conformidade NR10, SPDA e PIE",
            "Equipe Técnica Especializada",
            "Atendimento de Emergência 24h",
            "Relatórios Técnicos Detalhados"
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center p-6 bg-white border rounded-lg hover:border-brand-blue transition-colors group">
              <CheckCircle2 className="h-10 w-10 text-brand-blue mb-4 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-slate-800">{item}</span>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Button asChild size="lg" className="bg-brand-blue">
            <Link to="/contato">Fale com nossa equipe</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
