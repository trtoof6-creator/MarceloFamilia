export interface AreaAtuacao {
  title: string;
  description: string;
  iconName: string;
}

export interface StepApoio {
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
  location: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const AREAS_ATUACAO: AreaAtuacao[] = [
  {
    title: "Divórcio",
    description: "Orientação humanizada para dissolução matrimonial, seja consensual (extrajudicial em cartório) ou litigiosa judicial, garantindo equilíbrio patrimonial e emocional.",
    iconName: "HeartCrack"
  },
  {
    title: "Guarda dos filhos",
    description: "Estruturação de acordos de guarda e regimes de convivência equilibrados, sempre focando no melhor desenvolvimento e bem-estar das crianças.",
    iconName: "Users"
  },
  {
    title: "Pensão alimentícia",
    description: "Cálculo técnico, ação de alimentos, revisão de valores e exoneração baseados no binômio necessidade e possibilidade financeira, visando um acordo justo.",
    iconName: "Coins"
  },
  {
    title: "Inventário",
    description: "Assessoria ágil na transmissão de patrimônio pós-falecimento, conduzida de forma judicial ou diretamente em cartório de maneira estratégica e menos onerosa.",
    iconName: "FileText"
  },
  {
    title: "União estável",
    description: "Registro, formalização contratual para escolha de regime de bens e dissolução de união estável, resguardando direitos mútuos do casal.",
    iconName: "FileCheck"
  },
  {
    title: "Planejamento patrimonial",
    description: "Organização estratégica em vida de ativos e partilhas que previne brigas familiares futuras, reduz custos tributários e protege o patrimônio geracional.",
    iconName: "ShieldCheck"
  }
];

export const PASSOS_AJUDA: StepApoio[] = [
  {
    number: "01",
    title: "Entendimento do Caso",
    description: "Iniciamos com uma conversa acolhedora e com sigilo profissional absoluto, permitindo que você relate sua situação com tranquilidade."
  },
  {
    number: "02",
    title: "Análise Jurídica Técnica",
    description: "Examinamos minuciosamente toda a documentação, jurisprudências recentes e caminhos legais cabíveis à sua dor específica."
  },
  {
    number: "03",
    title: "Definição Estratégica",
    description: "Traçamos a abordagem ideal. Priorizamos sempre métodos consensuais e a pacificação, partindo para o judicial com firmeza caso necessário."
  },
  {
    number: "04",
    title: "Acompanhamento Atento",
    description: "Conduzimos cada petição com rigor técnico e mantemos você informado em linguagem clara sobre cada progresso do seu direito."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    text: "O Dr. Marcelo conduziu meu processo de divórcio com sensibilidade ímpar e alto rigor técnico. Senti que minha dignidade e meu patrimônio foram devidamente resguardados.",
    author: "Ana Carolina S.",
    role: "Cliente de Divórcio Consensual",
    location: "São Paulo - SP"
  },
  {
    text: "Em um momento de dor pela perda de meu pai, o Dr. Marcelo cuidou do inventário extrajudicial com agilidade excepcional, desatando burocracias sem estresse familiar.",
    author: "Roberto Mendes",
    role: "Cliente de Inventário e Sucessão",
    location: "Campinas - SP"
  },
  {
    text: "Definição da guarda compartilhada e pensão do meu filho de forma muito pacífica e rápida. A priorização do diálogo ajudou a poupar as crianças de qualquer estresse.",
    author: "Mariana Lemos",
    role: "Cliente de Direito de Família",
    location: "Santo André - SP"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Como funciona um divórcio extrajudicial em cartório?",
    answer: "É a forma mais rápida e simples de se divorciar. É realizado através de escritura pública em cartório. Para isso, é obrigatório que o casal esteja em consenso absoluto sobre a partilha de bens e pensão, não tenha filhos menores ou incapazes, e esteja necessariamente assistido por um advogado de confiança."
  },
  {
    question: "Guarda compartilhada significa que o filho divide a semana ao meio?",
    answer: "Não. A guarda compartilhada refere-se à igualdade de direitos e deveres para tomar decisões cruciais sobre o filho (como escola, tratamentos e religião). A residência física do menor (base de moradia) geralmente é estabelecida com um dos genitores para preservar sua rotina escolar e pessoal, com amplo e flexível direito de convivência e visitas estruturado para o outro genitor."
  },
  {
    question: "Como é calculado o valor ideal da pensão alimentícia?",
    answer: "Não existe um percentual fixado em lei (como o mito recorrente dos 30%). O cálculo baseia-se no equilíbrio entre a real necessidade do dependente (estudo, moradia, alimentação, vestuário, saúde) e a capacidade financeira atual de quem pagará, norteando-se pelo princípio da proporcionalidade."
  },
  {
    question: "Há um prazo limite para realizar a abertura do inventário?",
    answer: "Sim. Pelo Código de Processo Civil brasileiro, o processo de inventário e partilha de bens deve ser aberto em até 2 meses (60 dias) a contar da data do falecimento. Caso passe do prazo, pode haver a incidência de multa tributária estatal sobre o ITCMD (imposto de transmissão) correspondente."
  },
  {
    question: "Como funciona a divisão de bens na União Estável?",
    answer: "Salvo convenção escrita em contrário (contrato particular ou escritura pública de União Estável estabelecendo outro regime), vigora na União Estável o regime da comunhão parcial de bens. Isso significa que todos os bens adquiridos onerosamente pelo casal durante o período de convivência pertencerão a ambos em partes iguais em caso de futura partilha."
  }
];
