import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  features?: string[]
  className?: string
}

export function ServiceCard({ title, description, icon, href, features, className }: ServiceCardProps) {
  return (
    <div className={cn(
      "group relative flex flex-col h-full bg-slate-900/50 border border-slate-800 hover:border-secondary/50 transition-all duration-300 p-6 overflow-hidden",
      className
    )}>
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Tech Corner Markers */}
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-slate-700 group-hover:border-secondary transition-colors"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-slate-700 group-hover:border-secondary transition-colors"></div>

      <div className="relative z-10 flex-1">
        <div className="w-12 h-12 rounded-none bg-slate-800 text-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>

        <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-secondary transition-colors">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">{description}</p>

        {features && (
          <ul className="space-y-3 border-t border-slate-800 pt-4 mb-6">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs font-mono text-slate-500 uppercase tracking-wide">
                <span className="w-1.5 h-1.5 bg-slate-700 group-hover:bg-secondary mt-1 transition-colors"></span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="relative z-10 mt-auto">
        <Link
          to={href}
          className="inline-flex items-center text-sm font-bold text-white group-hover:text-secondary transition-colors"
        >
          DETALHES TÉCNICOS
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}
