import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ServiceCard } from '@/components/ServiceCard'
import { SEO } from '@/components/SEO'
import { servicesData } from '@/data/services'

export default function Servicos() {
  return (
    <div className="flex flex-col min-h-screen pb-20">
      <SEO
        title="Nossos Serviços | Manutenção Industrial e Elétrica"
        description="Portfólio completo: Manutenção Preditiva, Usinas Solares, Subestações, Laudos Técnicos e mais. Soluções integradas para sua indústria."
        canonical="/servicos"
      />
      <section className="bg-slate-900 text-white py-20">
        <div className="container text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Nossas Soluções</h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Oferecemos um portfólio completo de serviços para garantir a integridade, segurança e eficiência dos seus ativos industriais e energéticos.
          </p>
        </div>
      </section>

      <section className="py-20 container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.shortDesc}
              icon={<service.icon className="h-6 w-6" />}
              href={service.id === 'emergencia' ? '/emergencia' : `/servicos/${service.id}`}
              features={service.features.slice(0, 3)} // Show first 3 features on card
            />
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">Precisa de um escopo personalizado?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Entendemos que cada operação tem suas particularidades. Nossos engenheiros podem desenvolver um plano de manutenção sob medida para sua planta.
          </p>
          <Button asChild size="lg" className="bg-brand-blue">
            <Link to="/contato">Solicitar Visita Técnica <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

import { Button } from '@/components/ui/button'
