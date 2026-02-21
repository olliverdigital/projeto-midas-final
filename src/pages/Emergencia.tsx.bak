import { ShieldAlert, PhoneCall, Clock, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SEO } from '@/components/SEO'

export default function Emergencia() {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Plantão 24/7 | Atendimento de Emergência Elétrica"
        description="Resposta rápida para falhas críticas. Equipe volante disponível 24 horas para subestações, geradores e paradas de linha."
        canonical="/emergencia"
      />
      <section className="bg-red-600 text-white py-24 text-center">
        <div className="container max-w-3xl">
          <div className="inline-flex items-center justify-center bg-white/20 p-3 rounded-full mb-6 animate-pulse">
            <ShieldAlert className="h-10 w-10" />
          </div>
          <h1 className="text-5xl font-heading font-bold mb-6">Plantão de Emergência 24h</h1>
          <p className="text-xl text-red-100 mb-8">
            Seu equipamento parou? Atendimento imediato para situações críticas em sistemas elétricos e industriais.
          </p>
          <Button asChild size="lg" className="bg-white text-red-600 hover:bg-red-50 font-bold text-lg h-14 px-10 shadow-xl">
            <a href="https://wa.me/5534998099418" target="_blank" rel="noreferrer">
              <PhoneCall className="mr-2 h-6 w-6" /> LIGAR AGORA: (34) 99809-9418
            </a>
          </Button>
          <p className="mt-4 text-sm text-red-200">Clique para falar diretamente no WhatsApp</p>
        </div>
      </section>

      <section className="py-16 container">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">Quando acionar o plantão?</h2>
            <ul className="space-y-4">
              {[
                "Parada total de subestação ou QGBT",
                "Falha crítica em inversor solar central",
                "Curto-circuito ou princípio de incêndio elétrico",
                "Rompimento de cabos ou falha de infraestrutura",
                "Parada de linha de produção por motivo elétrico"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 bg-red-50 p-4 rounded-lg border border-red-100">
                  <ShieldAlert className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                  <span className="font-medium text-red-900">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-50 p-8 rounded-xl border">
            <h3 className="text-2xl font-bold mb-6">Nosso Compromisso</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Clock className="h-8 w-8 text-brand-blue shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">Resposta Rápida</h4>
                  <p className="text-muted-foreground">Tempo de mobilização otimizado para a região de Rio Paranaíba e entorno.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-8 w-8 text-brand-blue shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">Diagnóstico Preciso</h4>
                  <p className="text-muted-foreground">Equipe equipada com termovisores e analisadores de energia para identificar a raiz do problema.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <ShieldAlert className="h-8 w-8 text-brand-blue shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">Segurança Total</h4>
                  <p className="text-muted-foreground">Mesmo na emergência, seguimos rigorosamente os protocolos da NR10.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
