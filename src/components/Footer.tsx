import { Link } from 'react-router-dom'
import { Zap, MapPin, Phone, Mail, Instagram, Linkedin, Facebook } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 text-slate-200 border-t border-slate-900">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="flex items-center justify-center w-10 h-10 bg-slate-900 border border-slate-800 text-secondary group-hover:border-secondary transition-colors">
                <Zap className="h-6 w-6 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-heading font-black tracking-tight text-white">MIDAS</span>
                <span className="text-[0.6rem] font-mono font-bold text-slate-500 uppercase tracking-widest">Locações & Serviços</span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Engenharia de manutenção com padrão industrial. Reduzimos paradas não planejadas com segurança e conformidade normativa.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-slate-800 hover:border-secondary hover:text-secondary transition-all" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-slate-800 hover:border-secondary hover:text-secondary transition-all" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-slate-800 hover:border-secondary hover:text-secondary transition-all" aria-label="Facebook"><Facebook className="h-4 w-4" /></a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-xs font-mono font-bold text-secondary uppercase tracking-widest mb-6">Navegação</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/sobre" className="text-slate-400 hover:text-white hover:text-secondary transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-slate-700"></div> A Empresa</Link></li>
              <li><Link to="/servicos" className="text-slate-400 hover:text-white hover:text-secondary transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-slate-700"></div> Nossos Serviços</Link></li>
              <li><Link to="/emergencia" className="text-red-400 hover:text-red-300 transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-red-800"></div> Plantão 24h</Link></li>
              <li><Link to="/blog" className="text-slate-400 hover:text-white hover:text-secondary transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-slate-700"></div> Blog Técnico</Link></li>
              <li><Link to="/contato" className="text-slate-400 hover:text-white hover:text-secondary transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-slate-700"></div> Fale Conosco</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xs font-mono font-bold text-secondary uppercase tracking-widest mb-6">Especialidades</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/servicos/manutencao-industrial" className="text-slate-400 hover:text-white transition-colors block border-l-2 border-transparent hover:border-secondary pl-3 -ml-3">Manutenção Industrial</Link></li>
              <li><Link to="/servicos/energia-solar" className="text-slate-400 hover:text-white transition-colors block border-l-2 border-transparent hover:border-secondary pl-3 -ml-3">Energia Solar & Inversores</Link></li>
              <li><Link to="/servicos/infraestrutura" className="text-slate-400 hover:text-white transition-colors block border-l-2 border-transparent hover:border-secondary pl-3 -ml-3">Infraestrutura Elétrica</Link></li>
              <li><Link to="/servicos/preditiva" className="text-slate-400 hover:text-white transition-colors block border-l-2 border-transparent hover:border-secondary pl-3 -ml-3">Manutenção Preditiva</Link></li>
              <li><Link to="/servicos/projetos" className="text-slate-400 hover:text-white transition-colors block border-l-2 border-transparent hover:border-secondary pl-3 -ml-3">Projetos & Laudos</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xs font-mono font-bold text-secondary uppercase tracking-widest mb-6">Central de Atendimento</h3>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-4 group">
                <div className="mt-1 p-2 bg-slate-900 border border-slate-800 group-hover:border-secondary transition-colors">
                  <MapPin className="h-4 w-4 text-secondary" />
                </div>
                <span className="text-slate-400 leading-relaxed">Base Operacional:<br /><span className="text-white">Rio Paranaíba – MG</span><br />Atuação em todo Brasil</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-2 bg-slate-900 border border-slate-800 group-hover:border-secondary transition-colors">
                  <Phone className="h-4 w-4 text-secondary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase">Plantão Técnico</span>
                  <a href="tel:+5585988154220" className="hover:text-white text-lg font-bold text-slate-300">+55 (85) 98815-4220</a>
                </div>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-2 bg-slate-900 border border-slate-800 group-hover:border-secondary transition-colors">
                  <Mail className="h-4 w-4 text-secondary" />
                </div>
                <a href="mailto:contato@midaslsltda.com.br" className="hover:text-white text-slate-400">contato@midaslsltda.com.br</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-600">
          <p>&copy; {currentYear} MIDAS LOCAÇÕES & SERVIÇOS. SYSTEM VERSION 2.5</p>
          <div className="flex gap-6">
            <Link to="/privacidade" className="hover:text-secondary">POLÍTICA DE PRIVACIDADE</Link>
            <Link to="/termos" className="hover:text-secondary">TERMOS DE USO</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
