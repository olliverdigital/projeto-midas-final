import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { ContactForm } from '@/components/ContactForm'

export default function Contato() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-slate-900 text-white py-20">
        <div className="container text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Fale Conosco</h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Estamos prontos para atender sua demanda. Entre em contato para orçamentos, dúvidas técnicas ou agendamento de visitas.
          </p>
        </div>
      </section>

      <section className="py-20 container">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Canais de Atendimento</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-blue/10 rounded-lg">
                    <Phone className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Telefone & WhatsApp</h3>
                    <p className="text-muted-foreground mb-1">Atendimento comercial e técnico.</p>
                    <a href="tel:+5585988154220" className="text-xl font-bold text-brand-blue hover:underline">
                      (85) 98815-4220
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-blue/10 rounded-lg">
                    <Mail className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">E-mail</h3>
                    <p className="text-muted-foreground mb-1">Envie seu projeto ou solicitação.</p>
                    <a href="mailto:contato@midaslsltda.com.br" className="text-lg font-medium hover:text-brand-blue transition-colors">
                      contato@midaslsltda.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-blue/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Localização</h3>
                    <p className="text-muted-foreground">
                      Rio Paranaíba – MG<br />
                      Atuação em todo o estado e regiões vizinhas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-blue/10 rounded-lg">
                    <Clock className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Horário de Atendimento</h3>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 9h às 18h<br />
                      <span className="text-red-600 font-medium">Plantão 24h para Emergências</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-xl border">
              <h3 className="font-bold text-lg mb-2">Trabalhe Conosco</h3>
              <p className="text-sm text-muted-foreground mb-4">
                É técnico ou engenheiro e quer fazer parte do time?
              </p>
              <a href="mailto:rh@midaslsltda.com.br" className="text-sm font-semibold text-brand-blue hover:underline">
                Envie seu currículo para rh@midaslsltda.com.br
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Envie uma Mensagem</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
