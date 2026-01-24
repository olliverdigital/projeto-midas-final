import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { CheckCircle2, Loader2, Send, AlertCircle } from 'lucide-react'

// Schema de validação com Zod
const contactFormSchema = z.object({
  name: z.string()
    .min(3, 'Nome deve ter pelo menos 3 caracteres')
    .max(100, 'Nome muito longo'),
  company: z.string().optional(),
  email: z.string()
    .email('E-mail inválido')
    .min(1, 'E-mail é obrigatório'),
  phone: z.string()
    .min(10, 'Telefone inválido')
    .regex(/^[\d\s()+-]+$/, 'Telefone deve conter apenas números e caracteres válidos'),
  service: z.string()
    .min(1, 'Selecione um serviço'),
  message: z.string()
    .min(10, 'Mensagem deve ter pelo menos 10 caracteres')
    .max(1000, 'Mensagem muito longa')
})

type ContactFormData = z.infer<typeof contactFormSchema>

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur'
  })

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError(null)

    try {
      const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT
      if (formspreeEndpoint) {
        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })
        if (!response.ok) throw new Error('Erro ao enviar formulário')
      } else {
        console.log('Dados do formulário:', data)
        await new Promise(resolve => setTimeout(resolve, 1500))
      }
      setIsSuccess(true)
      reset()
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      setSubmitError('Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato via WhatsApp.')
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-slate-900 border border-secondary/20 p-8 text-center animate-in fade-in zoom-in duration-300">
        <div className="w-16 h-16 bg-slate-800 text-secondary border border-secondary flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-black text-white mb-2">SOLICITAÇÃO ENVIADA</h3>
        <p className="text-slate-400 mb-8 font-mono text-sm">
          // PROTOCOLO: {Math.random().toString(36).substr(2, 9).toUpperCase()}<br />
          Aguarde contato da engenharia em até 2h.
        </p>
        <Button
          variant="outline"
          onClick={() => setIsSuccess(false)}
          className="bg-transparent border-slate-700 text-white hover:text-slate-900 hover:bg-white rounded-none w-full font-bold"
        >
          NOVA SOLICITAÇÃO
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {submitError && (
        <div className="bg-red-950/20 border border-red-900/50 p-4 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-red-400">{submitError}</p>
        </div>
      )}

      <div className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-slate-300 font-mono text-xs uppercase">Nome Completo *</Label>
            <Input
              id="name"
              placeholder="Ex: João Silva"
              {...register('name')}
              className={`bg-slate-950 border-slate-800 text-white rounded-none focus:border-secondary focus:ring-secondary/50 placeholder:text-slate-600 ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && <p className="text-xs text-red-500 font-mono mt-1">{errors.name.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="company" className="text-slate-300 font-mono text-xs uppercase">Empresa</Label>
            <Input
              id="company"
              placeholder="Sua empresa"
              {...register('company')}
              className="bg-slate-950 border-slate-800 text-white rounded-none focus:border-secondary focus:ring-secondary/50 placeholder:text-slate-600"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-slate-300 font-mono text-xs uppercase">E-mail Corporativo *</Label>
            <Input
              id="email"
              type="email"
              placeholder="joao@empresa.com"
              {...register('email')}
              className={`bg-slate-950 border-slate-800 text-white rounded-none focus:border-secondary focus:ring-secondary/50 placeholder:text-slate-600 ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && <p className="text-xs text-red-500 font-mono mt-1">{errors.email.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-slate-300 font-mono text-xs uppercase">WhatsApp *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(85) 99999-9999"
              {...register('phone')}
              className={`bg-slate-950 border-slate-800 text-white rounded-none focus:border-secondary focus:ring-secondary/50 placeholder:text-slate-600 ${errors.phone ? 'border-red-500' : ''}`}
            />
            {errors.phone && <p className="text-xs text-red-500 font-mono mt-1">{errors.phone.message}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="service" className="text-slate-300 font-mono text-xs uppercase">Interesse *</Label>
          <select
            id="service"
            {...register('service')}
            className={`flex h-10 w-full items-center justify-between border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary disabled:cursor-not-allowed disabled:opacity-50 rounded-none ${errors.service ? 'border-red-500' : ''}`}
          >
            <option value="">Selecione um serviço...</option>
            <option value="Manutenção Industrial">Manutenção Industrial</option>
            <option value="Energia Solar">Energia Solar & Inversores</option>
            <option value="Infraestrutura Elétrica">Infraestrutura Elétrica</option>
            <option value="Manutenção Preditiva">Manutenção Preditiva</option>
            <option value="Projetos e Laudos">Projetos & Laudos Técnicos</option>
            <option value="Emergência">Atendimento de Emergência</option>
            <option value="Outros">Outros assuntos</option>
          </select>
          {errors.service && <p className="text-xs text-red-500 font-mono mt-1">{errors.service.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-slate-300 font-mono text-xs uppercase">Como podemos ajudar? *</Label>
          <Textarea
            id="message"
            placeholder="Descreva sua necessidade..."
            className={`min-h-[120px] bg-slate-950 border-slate-800 text-white rounded-none focus:border-secondary focus:ring-secondary/50 placeholder:text-slate-600 ${errors.message ? 'border-red-500' : ''}`}
            {...register('message')}
          />
          {errors.message && <p className="text-xs text-red-500 font-mono mt-1">{errors.message.message}</p>}
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-secondary hover:bg-secondary/90 text-white h-14 text-lg font-bold tracking-wide rounded-none border border-secondary shadow-[0_0_15px_rgba(249,115,22,0.2)]"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> ENVIANDO...
          </>
        ) : (
          <>
            SOLICITAR ATENDIMENTO <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
      <p className="text-[10px] text-center text-slate-500 font-mono uppercase tracking-widest mt-4">
        // Connection Secured • 256-bit Encryption
      </p>
    </form>
  )
}
