import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import allmecAvatar from "@/assets/Allmec-solucao-em-montagens.jpeg"
import fazendaSucupiraAvatar from "@/assets/fazenda-sucupira.jpeg"
import triadeEngenhariaAvatar from "@/assets/marcos-dutra-triade-engenharia.jpeg"

interface Testimonial {
    id: string
    name: string
    profession: React.ReactNode
    rating: number
    description: string
    avatarUrl: string | any
}

const TESTIMONIALS: Testimonial[] = [
    {

        id: "testimonial-1",

        name: "Alexandre Fontenele",

        // Usando JSX para incluir o link

        profession: (

            <>
                Diretor da{" "}
                <a
                    href="https://www.allmecservicos.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline transition-all"
                >
                    Allmec
                </a>
            </>
        ),
        rating: 5,
        description: "A Midas Locações e Serviços, realizou a manutenção das nossas máquinas de solda, equipamentos elétricos e inversores com muita competência e agilidade. Serviço eficaz, bem executado e dentro do prazo. Recomendo!",
        avatarUrl: allmecAvatar,

    },
    {
        id: "testimonial-2",
        name: "Rosanne Thaís Lopes",
        profession: "Gerente da Fazenda Sucupira",
        rating: 5,
        description:
            "Agradecemos pelo excelente serviço prestado no inversor de energia solar. A dedicação, profissionalismo e atenção foram fundamentais e ficamos muito satisfeitos com o resultado e certamente recomendamos seus serviços.",
        avatarUrl: fazendaSucupiraAvatar,
    },
    {
        id: "testimonial-3",
        name: "Marcos Dutra",
        profession: (

            <>
                Gerente da{" "}
                <a
                    href="https://www.triadeengenharia.eng.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline transition-all"
                >
                    Tríade Engenharia
                </a>
            </>
        ),
        rating: 5,
        description:
            "Fiquei extremamente satisfeito com o atendimento da Midas Locações e Serviços. O serviço de manutenção foi realizado com rapidez e eficiência. A equipe demonstrou grande conhecimento técnico e profissionalismo. Recomendo sem dúvidas pela confiança e excelência no trabalho.",
        avatarUrl: triadeEngenhariaAvatar,
    },
    {
        id: "testimonial-4",
        name: "Juliana Costa",
        profession: "Coordenadora de Facilities",
        rating: 5,
        description:
            "Atendimento de emergência 24/7 salvou nossa operação. Resposta rápida e solução eficiente. A MIDAS é nosso parceiro estratégico em manutenção.",
        avatarUrl:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60",
    },
]

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
    return (
        <div
            className="group relative bg-slate-900/90 border border-slate-700 p-6 hover:border-secondary transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl"
            style={{
                animationDelay: `${index * 100}ms`,
            }}
        >
            {/* Corner Accents */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>

            {/* Rating Stars */}
            <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-slate-300 leading-relaxed mb-6 text-sm">
                "{testimonial.description}"
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                <Avatar className="size-12 border-2 border-slate-700">
                    <AvatarImage
                        src={testimonial.avatarUrl}
                        alt={`Foto de ${testimonial.name}`}
                    />
                    <AvatarFallback className="bg-slate-800 text-white font-bold">
                        {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                    </AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-bold text-white text-sm">{testimonial.name}</p>
                    <p className="text-xs text-slate-400">{testimonial.profession}</p>
                </div>
            </div>
        </div>
    )
}

export function Testimonials() {
    return (
        <section className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-900">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

            <div className="container relative z-10 px-4 sm:px-6">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-xs font-mono font-bold text-secondary uppercase tracking-[0.2em] mb-3">
                        Validação Técnica
                    </h2>
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-4">
                        O QUE NOSSOS CLIENTES DIZEM
                    </h2>
                    <p className="text-lg text-slate-400">
                        Depoimentos de profissionais que confiam na MIDAS para manter suas
                        operações críticas funcionando sem interrupções.
                    </p>
                </div>

                {/* Testimonials Grid - Horizontal on Desktop, Vertical on Mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
