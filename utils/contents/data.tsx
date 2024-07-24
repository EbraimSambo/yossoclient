import SchoolIcon from '@mui/icons-material/School';
import CalculateIcon from '@mui/icons-material/Calculate';
import DrawIcon from '@mui/icons-material/Draw';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PublicIcon from '@mui/icons-material/Public';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import SubjectIcon from '@mui/icons-material/Subject';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import InstagramIcon from '@mui/icons-material/Instagram';
type Course = {
   title: string,
   cover: string,
   price: string,
   duration: string,
   type: string
}
export const courses: Course[] = [
   {
      title: "Formação de Contabilidade Sénior",
      cover: "/images/courses/course-2.png",
      price: "85.000",
      duration: "35",
      type: "presential"
   }, {
      title: "Formação Intesiva de Fecho de Contas",
      cover: "/images/courses/course.png",
      price: "45.000",
      duration: "35",
      type: "presential"
   }, {
      title: "Operador de Caixa Primaveira",
      cover: "/images/courses/course-4.png",
      price: "35.000",
      duration: "2",
      type: "presential"
   }, {
      title: "Formação Auditoria Financeira e Contabilidade",
      cover: "/images/courses/course-3.png",
      price: "85.000",
      duration: "35",
      type: "presential"
   }, {
      title: "Formação de Contabilidade no Primaveira V10",
      cover: "/images/courses/course-5.png",
      price: "85.000",
      duration: "35",
      type: "presential"
   }, {
      title: "Formação de Contabilidade Geral",
      cover: "/images/courses/course-5.png",
      price: "50.000",
      duration: "35",
      type: "presential"
   }, {
      title: "Curso de Gestão de RH no Primaveira e Excel",
      cover: "/images/courses/course-5.png",
      price: "85.000",
      duration: "35",
      type: "presential"
   }, {
      title: "Formação de Estudo de viabilidade e elaboração de Planos de Negocios",
      cover: "/images/courses/course-5.png",
      price: "45.000",
      duration: "35",
      type: "presential"
   }
]



export const flats = [
   {
      flat: "INICIANTE",
      price: "40.000",
      icon: "/images/icons/beginner.png",
      benefices: [
         {
            benefice: "Consultoria de marketing Personalizada"
         }, {
            benefice: "Gerenciamento de redes sociais (2 plataformas)"
         }, {
            benefice: "2 anuncios para cada rede"
         }, {
            benefice: "Plano Estrategico de campanhas"
         }, {
            benefice: "Produção de conteudos (Textos diariaios e 4 Imangens)"
         }, {
            benefice: "Capanha de markting por email"
         }, {
            benefice: "Identidade Visual"
         }, {
            benefice: "2 anuncios para cada rede"
         }
      ]
   }, {
      flat: "BRONZE",
      price: "75.000,00",
      icon: "/images/icons/bronze.png",
      benefices: [
         {
            benefice: "Consultoria de marketing Personalizada"
         }, {
            benefice: "Gerenciamento de redes sociais (2 plataformas)"
         }, {
            benefice: "Analise de concorrencia"
         }, {
            benefice: "Plano Estrategico de campanhas"
         }, {
            benefice: "Produção de conteudos (Textos diariaios, 4 Imangens e 2 vídeos curtos)"
         }, {
            benefice: "Capanha de markting por email"
         }, {
            benefice: "Identidade Visual"
         }, {
            benefice: "4 anuncios para cada rede"
         }
      ]
   },
   {
      flat: "PRATA",
      price: "100.000,00",
      icon: "/images/icons/prata.png",
      benefices: [
         {
            benefice: "Consultoria de marketing Personalizada"
         }, {
            benefice: "Gerenciamento de redes sociais (4 plataformas)"
         }, {
            benefice: "Plano Estrategico de campanhas"
         }, {
            benefice: "Analise de concorrencia"
         }, {
            benefice: "Produção de conteudos (Textos diariaios, 8 Imangens e 2 vídeos curtos)"
         }, {
            benefice: "Relatórios Semanais"
         }, {
            benefice: "Capanha de markting por email"
         }, {
            benefice: "Identidade Visual"
         }, {
            benefice: "6 anuncios"
         }
      ]
   },
   {
      flat: "OURO",
      price: "150.000,00",
      icon: "/images/icons/gold.png",
      benefices: [
         {
            benefice: "Consultoria de marketing Personalizada"
         }, {
            benefice: "Gerenciamento de redes sociais (4 plataformas)"
         }, {
            benefice: "SEO e Optmização de Conteúdo"
         }, {
            benefice: "Analise de ROI"
         }, {
            benefice: "Analise de concorrencia"
         }, {
            benefice: "Plano Estrategico de campanha"
         }, {
            benefice: "Prudução de conteúdo (Textos diarios, 10 iamagens e 2 vídeos) "
         }, {
            benefice: "Capanha de markting por email"
         }, {
            benefice: "Identidade Visual"
         }, {
            benefice: "10 anuncios"
         }
      ]
   }
]



export const services = [
   {
      service: "Gestão de Markting",
      icon: <DonutSmallIcon color='primary' fontSize='large' />,
      desc: "Consultoria de Marketing para ajudar as empresas a crescerem e expandirem as suas atividades."
   }, {
      service: "Brading",
      icon: <PublicIcon color='primary' fontSize='large' />,
      desc: "Criamos identidades memoráveis para empresas inovadoras, transformando marcas em histórias cativantes."
   }, {
      service: "Contabilidade",
      icon: <CalculateIcon color='primary' fontSize='large' />,
      desc: "Assessoria empresarial com base no conhecimento do ambiente de negócios, situação fiscal e posição financeira."
   }, {
      service: "Planejamnento Estrategico",
      icon: <StackedLineChartIcon color='primary' fontSize='large' />,
      desc: "O nosso Planeamento Estratégico é a bússola que guia a sua empresa em direção ao sucesso. Analisamos as tendências do mercado E identificamos oportunidades."
   }, {
      service: "Elaboração de Projectos",
      icon: <DrawIcon color='primary' fontSize='large' />,
      desc: "Somos especialistas em transformar ideias em realidade. Nossa equipe altamente qualificada oferece serviços de elaboração de projetos personalizados"
   }, {
      service: "Gestão de Midia Social",
      icon: <AccountTreeIcon color='primary' fontSize='large' />,
      desc: "Nós criamos pautas de conteúdo, elaboramos estratégias, produzimos artes e fazemos as postagens."
   }, {
      service: "Estudo de Viabilidade",
      icon: <AutoStoriesIcon color='primary' fontSize='large' />,
      desc: "Analisa a ideia do projeto sob uma perspectiva operacional, considerando aspectos práticos e logísticos."
   }, {
      service: "Treinamento Corporativo",
      icon: <SchoolIcon color='primary' fontSize='large' />,
      desc: "Temos variados cursos para alavancar a sua carreira profissional."
   }, {
      service: "Fecho de contas",
      icon: <SubjectIcon color='primary' fontSize='large' />,
      desc: "Verificação se todas as aquisições e alienações de ativos estão corretamente registradas, incluindo depreciações e amortizações."
   }
]



export const media = [
   {
      title: "Facebook",
      icon: <FacebookIcon fontSize='small' />,
      url: "https://web.facebook.com/profile.php?id=100087844806403",
      label: "Yosso - Marketing e Contabilidade "
   },
   {
      title: "WhatsApp",
      icon: <WhatsAppIcon fontSize='small' />,
      url: "https://facebook.com",
      label: "926423787"
   },
   {
      title: "Instagram",
      icon: <InstagramIcon fontSize='small' />,
      url: "https://www.instagram.com/yosso_financas/",
      label: "yosso_financas"
   },{
      title: "Email",
      icon: <AttachEmailIcon fontSize='small' />,
      url: "mailto:yossofinancas@gmail.com",
      label: "yossofinancas@gmail.com"
   } 
]