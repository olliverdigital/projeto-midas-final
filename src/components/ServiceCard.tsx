import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
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
    <Card className={cn("flex flex-col h-full hover:shadow-lg transition-all border-l-4 border-l-brand-blue", className)}>
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl font-heading font-bold text-slate-900">{title}</CardTitle>
        <CardDescription className="text-base mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        {features && (
          <ul className="space-y-2 mt-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
      <CardFooter>
        <Link 
          to={href} 
          className="group inline-flex items-center text-sm font-semibold text-brand-blue hover:text-brand-dark transition-colors"
        >
          Saiba mais sobre o serviço
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  )
}
