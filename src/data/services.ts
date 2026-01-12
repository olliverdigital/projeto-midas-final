import { Factory, Sun, Zap, Activity, ClipboardCheck, ShieldAlert } from 'lucide-react'

export const servicesData = [
  {
    id: "manutencao-industrial",
    title: "Manutenção Industrial",
    icon: Factory,
    shortDesc: "Gestão completa de ativos industriais com foco em disponibilidade.",
    description: "Nossa equipe atua na manutenção preventiva e corretiva de equipamentos industriais críticos, garantindo a continuidade do seu processo produtivo.",
    benefits: [
      "Aumento da disponibilidade de máquinas",
      "Redução de custos com paradas não planejadas",
      "Prolongamento da vida útil dos ativos"
    ],
    features: [
      "Manutenção Eletromecânica",
      "Gestão de planos de manutenção",
      "Intervenções programadas",
      "Adequação de painéis e comandos"
    ]
  },
  {
    id: "energia-solar",
    title: "Energia Solar & Inversores",
    icon: Sun,
    shortDesc: "Manutenção especializada em usinas fotovoltaicas e inversores centrais.",
    description: "Serviços especializados de O&M (Operação e Manutenção) para usinas solares, focando na performance dos inversores e na integridade dos módulos.",
    benefits: [
      "Recuperação de performance de geração",
      "Diagnóstico preciso de falhas em inversores",
      "Limpeza técnica e capina de usinas"
    ],
    features: [
      "Manutenção de Inversores (Central/String)",
      "Limpeza de módulos fotovoltaicos",
      "Termografia de módulos e conexões",
      "Verificação de strings e combiner boxes"
    ]
  },
  {
    id: "infraestrutura",
    title: "Infraestrutura Elétrica",
    icon: Zap,
    shortDesc: "Subestações, quadros de comando e redes de distribuição.",
    description: "Projetamos, montamos e mantemos sua infraestrutura elétrica de média e baixa tensão, seguindo todas as normas de segurança vigentes.",
    benefits: [
      "Segurança operacional",
      "Conformidade com normas da concessionária",
      "Estabilidade no fornecimento de energia"
    ],
    features: [
      "Manutenção de Subestações (Cabine Primária)",
      "Montagem de QGBTs e Quadros de Comando",
      "Instalação de infraestrutura (eletrocalhas, perfilados)",
      "Cabeamento estruturado e força"
    ]
  },
  {
    id: "preditiva",
    title: "Manutenção Preditiva",
    icon: Activity,
    shortDesc: "Termografia, análise de vibração e ultrassom.",
    description: "Utilizamos tecnologia de ponta para identificar falhas incipientes antes que elas causem paradas, permitindo intervenções planejadas.",
    benefits: [
      "Detecção antecipada de falhas",
      "Redução drástica de corretivas emergenciais",
      "Maior confiabilidade sistêmica"
    ],
    features: [
      "Termografia Elétrica e Mecânica",
      "Análise de Vibração em motores e redutores",
      "Ultrassom para detecção de vazamentos e arco elétrico",
      "Análise de qualidade de energia"
    ]
  },
  {
    id: "projetos",
    title: "Projetos & Laudos Técnicos",
    icon: ClipboardCheck,
    shortDesc: "Adequação NR10, SPDA, PIE e estudos de proteção.",
    description: "Regularize sua empresa e garanta a segurança jurídica e operacional com nossa documentação técnica elaborada por engenheiros especialistas.",
    benefits: [
      "Segurança jurídica e normativa",
      "Aprovação em vistorias (Bombeiros/Seguradoras)",
      "Mapeamento de riscos elétricos"
    ],
    features: [
      "Laudo de SPDA (Para-raios)",
      "Prontuário das Instalações Elétricas (PIE)",
      "Laudo de NR10",
      "Projetos Elétricos e As-Built"
    ]
  },
  {
    id: "emergencia", // Special handling usually, but included for detail page consistency
    title: "Atendimento de Emergência",
    icon: ShieldAlert,
    shortDesc: "Plantão técnico 24h para situações críticas.",
    description: "Equipe de pronto atendimento disponível 24 horas por dia, 7 dias por semana, para restabelecer sua operação no menor tempo possível.",
    benefits: [
      "Resposta imediata",
      "Minimização de prejuízos",
      "Disponibilidade de peças críticas"
    ],
    features: [
      "Plantão 24/7 via WhatsApp dedicado",
      "Equipe volante equipada",
      "Diagnóstico e reparo in-loco",
      "Suporte remoto especializado"
    ]
  }
]
