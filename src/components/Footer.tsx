import { Link } from 'react-router-dom'
import { Zap, MapPin, Phone, Mail, Instagram, Linkedin, Facebook } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-200 border-t border-slate-800">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded bg-brand-blue text-white">
                <Zap className="h-5 w-5 fill-current" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">MIDAS</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Referência técnica em manutenção industrial e energia solar. Reduzimos paradas não planejadas com segurança e conformidade normativa.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-brand-gold transition-colors" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-brand-gold transition-colors" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="hover:text-brand-gold transition-colors" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-white mb-4">Acesso Rápido</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/sobre" className="hover:text-brand-gold transition-colors">A Empresa</Link></li>
              <li><Link to="/servicos" className="hover:text-brand-gold transition-colors">Nossos Serviços</Link></li>
              <li><Link to="/emergencia" className="text-red-400 hover:text-red-300 font-medium transition-colors">Plantão 24h</Link></li>
              <li><Link to="/blog" className="hover:text-brand-gold transition-colors">Blog Técnico</Link></li>
              <li><Link to="/contato" className="hover:text-brand-gold transition-colors">Fale Conosco</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-white mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/servicos/manutencao-industrial" className="hover:text-brand-gold transition-colors">Manutenção Industrial</Link></li>
              <li><Link to="/servicos/energia-solar" className="hover:text-brand-gold transition-colors">Energia Solar & Inversores</Link></li>
              <li><Link to="/servicos/infraestrutura" className="hover:text-brand-gold transition-colors">Infraestrutura Elétrica</Link></li>
              <li><Link to="/servicos/preditiva" className="hover:text-brand-gold transition-colors">Manutenção Preditiva</Link></li>
              <li><Link to="/servicos/projetos" className="hover:text-brand-gold transition-colors">Projetos & Laudos</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-white mb-4">Contato</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
                <span>Rio Paranaíba – MG<br/>Atuação Regional</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-gold shrink-0" />
                <a href="tel:+5585988154220" className="hover:text-white">+55 (85) 98815-4220</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-gold shrink-0" />
                <a href="mailto:contato@midaslsltda.com.br" className="hover:text-white">contato@midaslsltda.com.br</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>&copy; {currentYear} MIDAS Locações & Serviços Ltda. Todos os direitos reservados.</p>
          <p className="mt-2">CNPJ: XX.XXX.XXX/0001-XX | Política de Privacidade</p>
        </div>
      </div>
    </footer>
  )
}
