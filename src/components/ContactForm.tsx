import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { CheckCircle2, Loader2, Send, PhoneCall } from 'lucide-react'

const contactFormSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres').max(100, 'Nome muito longo'),
  company: z.string().optional(),
  email: z.string().email('E-mail inválido').min(1, 'E-mail é obrigatório'),
  phone: z.string().min(10, 'Telefone inválido'),
  service: z.string().min(1, 'Selecione um serviço'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres')
})

type ContactFormData = z.infer<typeof contactFormSchema>

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false)

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '5534998099418'

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset, getValues } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur'
  })

  // Função para abrir WhatsApp com dados preenchidos
  const handleWhatsAppFallback = () => {
    const data = getValues()
    const text = `Olá, vim pelo site.\n\n*Nome*: ${data.name}\n*Empresa*: ${data.company || 'N/A'}\n*Serviço*: ${data.service}\n\n*Mensagem*: ${data.message}`
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank')
  }

  const onSubmit = async (data: ContactFormData) => {
    // Simula tempo de processamento para UX
    await new Promise(resolve => setTimeout(resolve, 800))

    // Formata mensagem para WhatsApp
    const text = `*SOLICITAÇÃO VIA SITE*\n\n*Nome*: ${data.name}\n*Empresa*: ${data.company || 'N/A'}\n*Email*: ${data.email}\n*Telefone*: ${data.phone}\n*Serviço*: ${data.service}\n\n*Mensagem*: ${data.message}`

    // Abre WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
    window.open(whatsappUrl, '_blank')

    setIsSuccess(true)
    reset()
  }

  if (isSuccess) {
    return (
      <div className="bg-slate-900 border border-green-500/30 p-8 text-center animate-in fade-in zoom-in">
        <div className="w-16 h-16 bg-green-900/20 text-green-500 border border-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Solicitação Recebida!</h3>
        <p className="text-slate-300 mb-6">Recebemos seus dados. Se for urgente, clique abaixo.</p>
        <Button onClick={handleWhatsAppFallback} className="w-full bg-green-600 hover:bg-green-700 text-white font-bold h-12">
          <PhoneCall className="mr-2 h-4 w-4" /> AGILIZAR NO WHATSAPP
        </Button>
        <Button onClick={() => setIsSuccess(false)} variant="link" className="mt-4 text-slate-400">
          Enviar nova solicitação
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

      <div className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-slate-300 text-xs uppercase">Nome Completo *</Label>
            <Input id="name" placeholder="Ex: João Silva" {...register('name')} className="bg-slate-950 border-slate-800 text-white rounded-none focus:ring-secondary/50" />
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="company" className="text-slate-300 text-xs uppercase">Empresa</Label>
            <Input id="company" placeholder="Sua empresa" {...register('company')} className="bg-slate-950 border-slate-800 text-white rounded-none focus:ring-secondary/50" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-slate-300 text-xs uppercase">E-mail Corporativo *</Label>
            <Input id="email" type="email" placeholder="joao@empresa.com" {...register('email')} className="bg-slate-950 border-slate-800 text-white rounded-none focus:ring-secondary/50" />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-slate-300 text-xs uppercase">WhatsApp *</Label>
            <Input id="phone" type="tel" placeholder="(34) 99999-9999" {...register('phone')} className="bg-slate-950 border-slate-800 text-white rounded-none focus:ring-secondary/50" />
            {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="service" className="text-slate-300 text-xs uppercase">Interesse *</Label>
          <select id="service" {...register('service')} className="flex h-10 w-full bg-slate-950 border border-slate-800 text-white px-3 py-2 text-sm focus:ring-2 focus:ring-secondary/50 rounded-none">
            <option value="">Selecione um serviço...</option>
            <option value="Manutenção Industrial">Manutenção Industrial</option>
            <option value="Energia Solar">Energia Solar & Inversores</option>
            <option value="Laudos Técnicos">Laudos Técnicos</option>
            <option value="Outros">Outros</option>
          </select>
          {errors.service && <p className="text-xs text-red-500 mt-1">{errors.service.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-slate-300 text-xs uppercase">Mensagem *</Label>
          <Textarea id="message" placeholder="Descreva sua necessidade..." {...register('message')} className="bg-slate-950 border-slate-800 text-white min-h-[100px] rounded-none focus:ring-secondary/50" />
          {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
        </div>
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full bg-secondary hover:bg-secondary/90 text-white h-14 text-lg font-bold rounded-none border border-secondary shadow-[0_0_15px_rgba(249,115,22,0.2)]">
        {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
        {isSubmitting ? 'REDIRECIONANDO...' : 'SOLICITAR NO WHATSAPP'}
      </Button>
    </form>
  )
}
