import { useParams, Link } from 'react-router-dom'
import { SEO } from '@/components/SEO'
import { Button } from '@/components/ui/button'
import { Calendar, User, Tag, ArrowLeft, Share2 } from 'lucide-react'
import { posts } from './Blog'

export default function BlogPost() {
    const { slug } = useParams()
    const post = posts.find(p => p.slug === slug)

    if (!post) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] container text-center">
                <h1 className="text-4xl font-bold mb-4">Artigo não encontrado</h1>
                <p className="text-muted-foreground mb-8">O artigo que você procura não existe ou foi removido.</p>
                <Button asChild>
                    <Link to="/blog">Voltar para o Blog</Link>
                </Button>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background pb-20">
            <SEO
                title={post.title}
                description={post.excerpt}
                canonical={`/blog/${post.slug}`}
            />

            {/* Hero Header */}
            <div className="relative h-[400px] w-full bg-slate-900">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="container relative z-20 h-full flex flex-col justify-end pb-12 px-4">
                    <Button asChild variant="link" className="text-white mb-6 p-0 w-fit hover:text-secondary decoration-0">
                        <Link to="/blog" className="flex items-center gap-2">
                            <ArrowLeft className="h-4 w-4" /> Voltar para o Blog
                        </Link>
                    </Button>

                    <div className="flex items-center gap-4 text-sm text-secondary font-bold uppercase tracking-wider mb-4">
                        <span className="bg-secondary/20 px-3 py-1 rounded backdrop-blur-sm border border-secondary/30">
                            {post.category}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-heading font-black text-white max-w-4xl leading-tight mb-6">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-slate-300">
                        <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-secondary" />
                            {post.author}
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-secondary" />
                            {post.date}
                        </div>
                        <div className="flex items-center gap-2">
                            <Tag className="h-4 w-4 text-secondary" />
                            Leitura de 5 min
                        </div>
                    </div>
                </div>
            </div>

            <article className="container max-w-3xl mt-12 bg-white p-8 md:p-12 shadow-sm border border-slate-100 rounded-lg">
                {/* Placeholder Content Area */}
                <div className="prose prose-slate prose-lg max-w-none">
                    <p className="lead text-xl text-slate-600 font-medium mb-8">
                        {post.excerpt}
                    </p>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r">
                        <p className="text-blue-900 m-0 font-medium">
                            💡 <strong>Nota do Editor:</strong> O conteúdo completo deste artigo será disponibilizado em breve.
                            Estamos finalizando os detalhes técnicos para trazer a análise mais completa sobre {post.title.toLowerCase()}.
                        </p>
                    </div>

                    <h3>O que você vai aprender neste artigo:</h3>
                    <ul>
                        <li>Principais desafios da {post.category}</li>
                        <li>Melhores práticas do mercado industrial</li>
                        <li>Como a MIDAS atua neste cenário</li>
                        <li>Análise de ROI e eficiência operacional</li>
                    </ul>

                    <hr className="my-10 border-slate-200" />

                    <p>
                        Fique atento às nossas atualizações. Enquanto isso, se você tem uma emergência ou dúvida específica sobre
                        {post.category}, entre em contato com nosso time de engenharia.
                    </p>
                </div>

                {/* Share & CTA */}
                <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <span className="font-bold text-slate-900 flex items-center gap-2">
                            <Share2 className="h-4 w-4" /> Compartilhar:
                        </span>
                        <div className="flex gap-2">
                            <Button size="icon" variant="outline" className="h-8 w-8 rounded-full" title="LinkedIn">in</Button>
                            <Button size="icon" variant="outline" className="h-8 w-8 rounded-full" title="WhatsApp">WA</Button>
                        </div>
                    </div>
                    <Button asChild className="bg-secondary hover:bg-secondary/90 text-white font-bold rounded-none h-12 px-8">
                        <Link to="/contato">FALE COM UM ESPECIALISTA</Link>
                    </Button>
                </div>
            </article>
        </div>
    )
}
