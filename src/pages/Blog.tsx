import { Link } from 'react-router-dom'
import { Calendar, User, ArrowRight, Tag } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import industrialMaintenance from '@/assets/industrial-maintenance.jpg'
import heroBg from '@/assets/hero-bg.jpg'
import solarMaintenance from '@/assets/solar-maintenance.jpg'

const posts = [
  {
    id: 1,
    title: "Manutenção Preventiva vs Corretiva: Qual o melhor custo-benefício?",
    excerpt: "Entenda por que esperar o equipamento quebrar pode custar até 7x mais do que investir em planos de manutenção programada.",
    category: "Gestão de Manutenção",
    date: "12 Mar 2024",
    author: "Téc. Luiz Lima",
    image: industrialMaintenance
  },
  {
    id: 2,
    title: "A importância da termografia na prevenção de incêndios elétricos",
    excerpt: "Saiba como a inspeção termográfica identifica pontos quentes invisíveis a olho nu e evita paradas críticas na sua planta.",
    category: "Manutenção Preditiva",
    date: "05 Mar 2024",
    author: "Téc. Luiz Lima",
    image: heroBg
  },
  {
    id: 3,
    title: "Energia Solar: Sujeira nos painéis reduz geração em até 25%",
    excerpt: "Estudos mostram o impacto da falta de limpeza técnica em usinas fotovoltaicas e como recuperar essa performance.",
    category: "Energia Solar",
    date: "28 Fev 2024",
    author: "Téc. Luiz Lima",
    image: solarMaintenance
  }
]

export default function Blog() {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Blog Técnico MIDAS | Artigos e Notícias"
        description="Conteúdo educativo sobre engenharia de manutenção, eficiência energética, normas regulamentadoras (NR10) e tendências do setor."
        canonical="/blog"
      />
      <section className="bg-slate-900 text-white py-20">
        <div className="container text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Blog Técnico</h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Artigos, estudos de caso e novidades sobre manutenção industrial, normas técnicas e eficiência energética.
          </p>
        </div>
      </section>

      <section className="py-20 container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="flex flex-col overflow-hidden hover:shadow-lg transition-all border-slate-200">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-2 text-brand-blue font-medium">
                    <Tag className="h-4 w-4" />
                    {post.category}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                </div>
                <CardTitle className="line-clamp-2 hover:text-brand-blue transition-colors">
                  <Link to="#">{post.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-6">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <User className="h-4 w-4 text-slate-400" />
                    {post.author}
                  </div>
                  <Button variant="ghost" size="sm" className="text-brand-blue hover:text-brand-dark p-0 hover:bg-transparent">
                    Ler artigo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-4">Não encontrou o que procurava?</h2>
          <p className="text-muted-foreground mb-8">
            Nossos especialistas estão à disposição para tirar dúvidas técnicas específicas sobre sua operação.
          </p>
          <Button asChild variant="outline">
            <Link to="/contato">Falar com um Consultor</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
