import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react'
import { ContactForm } from '@/components/ContactForm'
import { SEO } from '@/components/SEO'

export default function Contato() {
  // @ts-ignore
  const googleMapsUrl = "https://www.google.com/maps/place/Midas+Loca%C3%A7%C3%B5es+e+Servi%C3%A7os+Ltda/@-19.2020676,-46.2341693,17z/data=!3m1!4b1!4m6!3m5!1s0x94b1fff3ce75c225:0x8a8a4c0376e34e61!8m2!3d-19.2020676!4d-46.2341693!16s%2Fg%2F11y4vj0w2v?entry=ttu";

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Contato | Solicite um Orçamento - MIDAS"
        description="Fale com nossos engenheiros. Solicite visita técnica ou orçamento para manutenção industrial e projetos elétricos."
        canonical="/contato"
      />

      {/* Header */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container text-center max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Fale Conosco</h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Estamos prontos para atender sua demanda. Entre em contato para orçamentos, dúvidas técnicas ou agendamento de visitas.
          </p>
        </div>
      </section>

      {/* Canais de Atendimento e Formulário */}
      <section className="py-20 container px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-brand-blue pl-4">Canais de Atendimento</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-blue/10 rounded-lg shrink-0">
                    <Phone className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Telefone & WhatsApp</h3>
                    <p className="text-muted-foreground mb-1 text-sm">Atendimento comercial e técnico.</p>
                    <a href="tel:+5534998099418" className="text-xl font-bold text-brand-blue hover:text-brand-blue/80 transition-colors">
                      (34) 99809-9418
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-blue/10 rounded-lg shrink-0">
                    <Mail className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">E-mail</h3>
                    <p className="text-muted-foreground mb-1 text-sm">Envie seu projeto ou solicitação.</p>
                    <a href="mailto:contato@midaslsltda.com.br" className="text-lg font-medium hover:text-brand-blue transition-colors break-all">
                      contato@midaslsltda.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-blue/10 rounded-lg shrink-0">
                    <MapPin className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Localização</h3>
                    <address className="text-muted-foreground not-italic leading-relaxed">
                      R. Antônio Caetano Vieira, 3<br />
                      Jardim Primavera, Rio Paranaíba – MG<br />
                      CEP: 38810-000
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-blue/10 rounded-lg shrink-0">
                    <Clock className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Horário de Atendimento</h3>
                    <p className="text-muted-foreground text-sm">Segunda a Sexta: 08h às 17h</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-red-50 text-red-600 text-xs font-bold rounded-full uppercase tracking-wider">
                      Plantão 24h para Emergências
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-lg mb-2">Trabalhe Conosco</h3>
              <p className="text-sm text-muted-foreground mb-4">
                É técnico ou engenheiro e quer fazer parte do time?
              </p>
              <a href="mailto:rh@midaslsltda.com.br" className="inline-flex items-center text-sm font-semibold text-brand-blue hover:underline">
                rh@midaslsltda.com.br
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Envie uma Mensagem</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Seção do Mapa - Google Maps Embed Profissional */}
      <section className="pb-20 container px-4 sm:px-6">
        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white">
          {/* Header do Mapa */}
          <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-gradient-to-r from-slate-50 to-white">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Nossa Localização</h3>
              <p className="text-slate-600 text-sm">R. Antônio Caetano Vieira, 3 - Rio Paranaíba – MG</p>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=MIDAS+Locações+e+Serviços+Ltda,R.+Antônio+Caetano+Vieira,+3,+Rio+Paranaíba+-+MG"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto flex items-center justify-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-blue/90 transition-all text-sm shadow-md hover:shadow-lg group"
            >
              <MapPin className="h-4 w-4" />
              Como Chegar
              <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Google Maps Embed */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-slate-100">
            <iframe
              src="https://maps.google.com/maps?q=Midas%20Loca%C3%A7%C3%B5es%20e%20Servi%C3%A7os%20Ltda,%20R.%20Ant%C3%B4nio%20Caetano%20Vieira,%203%20-%20Rio%20Parana%C3%ADba%20%E2%80%93%20MG&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da MIDAS Locações e Serviços no Google Maps"
              className="absolute inset-0"
            />
          </div>

          {/* Footer Informativo */}
          <div className="p-4 bg-slate-50 border-t border-slate-100">
            <p className="text-xs text-slate-500 text-center">
              📍 Atendemos todo o Brasil com foco em soluções industriais
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}