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
      // Industrial Tech Card: Sharp edges, solid background, high contrast
      "group relative flex flex-col h-full",
      "bg-slate-900 border-2 border-slate-800",
      "hover:border-secondary hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]",
      "hover:translate-x-2", // Lateral slide animation on hover
      "transition-all duration-300 p-6 overflow-hidden",
      "rounded-none", // Sharp edges for industrial/technical feel
      className
    )}>

      {/* Subtle orange glow on hover */}
      <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Technical corner markers - more prominent */}
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-slate-700 group-hover:border-secondary transition-colors duration-300"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-slate-700 group-hover:border-secondary transition-colors duration-300"></div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-500"></div>

      <div className="relative z-10 flex-1">
        {/* Icon container - sharp, technical */}
        <div className="w-14 h-14 rounded-none bg-slate-800/80 border border-slate-700 text-secondary flex items-center justify-center mb-6 group-hover:scale-105 group-hover:border-secondary group-hover:shadow-[0_0_15px_rgba(249,115,22,0.2)] transition-all duration-300">
          {icon}
        </div>

        {/* Title - maximum contrast, no hover color change */}
        <h3 className="text-xl font-heading font-black text-white mb-3 leading-tight">
          {title}
        </h3>

        {/* Description - high contrast for readability */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* Features list - technical style, no hover on text */}
        {features && (
          <ul className="space-y-2.5 border-t border-slate-800 pt-4 mb-6">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs font-mono text-slate-400 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-slate-700 group-hover:bg-secondary mt-1.5 transition-colors duration-300 flex-shrink-0"></span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* CTA Link - technical precision, only element with text hover */}
      <div className="relative z-10 mt-auto pt-4 border-t border-slate-800/50">
        <Link
          to={href}
          className="inline-flex items-center text-xs font-mono font-bold text-slate-400 uppercase tracking-widest group-hover:text-secondary transition-colors duration-300"
        >
          <span className="relative">
            DETALHES TÉCNICOS
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
          </span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 duration-300" />
        </Link>
      </div>
    </div>
  )
}