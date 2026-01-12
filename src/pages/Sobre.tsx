import { ShieldCheck, Users, Target, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import solarMaintenance from '@/assets/solar-maintenance.jpg'

export default function Sobre() {
  return (
    <div className="flex flex-col min-h-screen pb-20">
      <section className="bg-slate-900 text-white py-20">
        <div className="container text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Nossa História & Propósito</h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            A MIDAS Locações & Serviços Ltda nasceu para preencher uma lacuna crítica no mercado industrial: a necessidade de manutenção técnica especializada que une agilidade, segurança e profundidade técnica.
          </p>
        </div>
      </section>

      <section className="py-16 container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-video bg-slate-200 rounded-lg overflow-hidden shadow-lg">
              <img src={solarMaintenance} alt="Equipe MIDAS realizando manutenção em usina solar fotovoltaica" className="w-full h-full object-cover" />
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

      <section className="bg-slate-50 py-20">
        <div className="container grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border text-center">
            <div className="w-16 h-16 bg-blue-100 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Missão</h3>
            <p className="text-muted-foreground">
              Prover soluções de engenharia e manutenção que garantam a disponibilidade, segurança e eficiência dos ativos de nossos clientes.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border text-center">
            <div className="w-16 h-16 bg-amber-100 text-brand-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Visão</h3>
            <p className="text-muted-foreground">
              Ser a referência técnica regional em serviços de infraestrutura crítica e energia renovável até 2028.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border text-center">
            <div className="w-16 h-16 bg-slate-100 text-slate-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Valores</h3>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>Segurança em primeiro lugar</li>
              <li>Rigor técnico e normativo</li>
              <li>Transparência nas relações</li>
              <li>Compromisso com o resultado</li>
            </ul>
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
