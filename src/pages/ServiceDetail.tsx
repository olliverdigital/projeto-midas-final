import { useParams, Link, Navigate } from 'react-router-dom'
import { CheckCircle2, ArrowLeft, PhoneCall } from 'lucide-react'
import { Button } from '@/components/ui/button'
// import { ContactForm } from '@/components/ContactForm'
import { SEO } from '@/components/SEO'
import { servicesData } from '@/data/services'

export default function ServiceDetail() {
  const { id } = useParams()
  const service = servicesData.find(s => s.id === id)

  if (!service) {
    return <Navigate to="/servicos" replace />
  }

  const Icon = service.icon

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title={`${service.title} | MIDAS Serviços`}
        description={service.description}
        canonical={`/servicos/${id}`}
      />
      <section className="bg-slate-900 text-white py-20">
        <div className="container">
          <Link to="/servicos" className="inline-flex items-center text-slate-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Serviços
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-brand-blue rounded-lg">
              <Icon className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-5xl font-heading font-bold">{service.title}</h1>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      <section className="py-20 container">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Principais Benefícios</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg border">
                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="font-medium text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">O que está incluso</h2>
              <ul className="space-y-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-blue" />
                    <span className="text-lg text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-100 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-brand-blue mb-4">Normas Técnicas</h3>
              <p className="text-slate-700">
                Todos os nossos procedimentos seguem rigorosamente as normas NR10, NBR 5410, NBR 5419 e demais regulamentações aplicáveis ao setor.
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white border shadow-lg rounded-xl p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4">Solicite uma Cotação</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Interessado em {service.title}? Preencha o formulário e fale com um especialista.
              </p>
              <Button asChild className="w-full bg-green-600 hover:bg-green-700 mb-6">
                <a href={`https://wa.me/5585988154220?text=Olá, gostaria de saber mais sobre ${service.title}`} target="_blank" rel="noreferrer">
                  <PhoneCall className="mr-2 h-4 w-4" /> Conversar no WhatsApp
                </a>
              </Button>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-muted-foreground">Ou preencha</span>
                </div>
              </div>
              <div className="mt-6">
                {/* Simplified form for sidebar if needed, or link to contact. Using full form for now but could be compact */}
                <div className="text-center">
                  <p className="mb-4 font-medium">Prefere e-mail?</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contato">Ir para Formulário Completo</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
