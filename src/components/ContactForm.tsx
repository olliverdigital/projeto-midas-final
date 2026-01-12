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
      // Integração com Formspree (ou outro serviço)
      const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT

      if (formspreeEndpoint) {
        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })

        if (!response.ok) {
          throw new Error('Erro ao enviar formulário')
        }
      } else {
        // Fallback: apenas simula envio se não houver endpoint configurado
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
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center animate-in fade-in zoom-in duration-300">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Mensagem Enviada!</h3>
        <p className="text-green-700 mb-6">
          Recebemos sua solicitação. Nossa equipe técnica entrará em contato em breve pelo WhatsApp ou E-mail.
        </p>
        <Button
          variant="outline"
          onClick={() => setIsSuccess(false)}
          className="bg-white border-green-300 text-green-700 hover:bg-green-50"
        >
          Enviar nova mensagem
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-6 md:p-8 rounded-lg shadow-sm border">
      {submitError && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-red-800">{submitError}</p>
        </div>
      )}

      <div className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome Completo *</Label>
            <Input
              id="name"
              placeholder="Ex: João Silva"
              {...register('name')}
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && (
              <p className="text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Empresa</Label>
            <Input
              id="company"
              placeholder="Nome da sua empresa"
              {...register('company')}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail Corporativo *</Label>
            <Input
              id="email"
              type="email"
              placeholder="joao@empresa.com"
              {...register('email')}
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">WhatsApp *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(85) 98815-4220"
              {...register('phone')}
              className={errors.phone ? 'border-red-500' : ''}
            />
            {errors.phone && (
              <p className="text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="service">Interesse *</Label>
          <select
            id="service"
            {...register('service')}
            className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${errors.service ? 'border-red-500' : ''}`}
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
          {errors.service && (
            <p className="text-sm text-red-600">{errors.service.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Como podemos ajudar? *</Label>
          <Textarea
            id="message"
            placeholder="Descreva brevemente sua necessidade ou problema..."
            className={`min-h-[120px] ${errors.message ? 'border-red-500' : ''}`}
            {...register('message')}
          />
          {errors.message && (
            <p className="text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-brand-blue hover:bg-brand-dark h-12 text-lg font-semibold"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enviando...
          </>
        ) : (
          <>
            Solicitar Contato <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
      <p className="text-xs text-center text-muted-foreground mt-4">
        Seus dados estão seguros. Responderemos em até 2 horas em horário comercial.
      </p>
    </form>
  )
}
