import SchoolIcon from '@mui/icons-material/School';
import CalculateIcon from '@mui/icons-material/Calculate';
import DrawIcon from '@mui/icons-material/Draw';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PublicIcon from '@mui/icons-material/Public';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import SubjectIcon from '@mui/icons-material/Subject';
type Course = {
   title: string,
   cover: string,
   price: string,
   duration: string,
   type: string
}
export const courses: Course[] = [
   {
      title: "Formação de Contabilidade Senior",
      cover: "/images/courses/course-3.jpeg",
      price: "85.000",
      duration: "35",
      type: "presential"
   }, {
      title: "Formação de Intesiva de Fecho de Contas",
      cover: "/images/courses/course-2.jpeg",
      price: "45.000",
      duration: "35",
      type: "presential"
   }, {
      title: "Operador de Caixa Primaveira",
      cover: "/images/courses/course-1.jpg",
      price: "35.000",
      duration: "2",
      type: "presential"
   }, {
      title: "FormaçãoAuditoria e Financeira e Contabilidade",
      cover: "/images/courses/course-1.jpg",
      price: "85.000",
      duration: "35",
      type: "presential"
   }, {
      title: "Formação de Contabilidade no Primaveira V10",
      cover: "/images/courses/course-1.jpg",
      price: "85.000",
      duration: "35",
      type: "presential"
   }, {
      title: "Formação de Contabilidade Senior",
      cover: "/images/courses/course-1.jpg",
      price: "45.000",
      duration: "35",
      type: "presential"
   }, {
      title: "Formação de Contabilidade Geral",
      cover: "/images/courses/course-1.jpg",
      price: "50.000",
      duration: "35",
      type: "presential"
   }, {
      title: "Formação de Contabilidade Senior",
      cover: "/images/courses/course-1.jpg",
      price: "85.000",
      duration: "35",
      type: "presential"
   }, {
      title: "Curso de Gestão de RH no Primaveira e Exexl",
      cover: "/images/courses/course-1.jpg",
      price: "85.000",
      duration: "35",
      type: "presential"
   }, {
      title: "Formação de Estudo de viabilidade e elaboração de Planos de Negocios",
      cover: "/images/courses/course-1.jpg",
      price: "45.000",
      duration: "35",
      type: "presential"
   }
]



export const flats = [
   {
      flat: "INICIANTE",
      price: "40.000",
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
      icon: <DonutSmallIcon fontSize='large' />,
      dec: ""
   }, {
      service: "Brading",
      icon: <PublicIcon fontSize='large' />,
      dec: ""
   }, {
      service: "Contabilidade",
      icon: <CalculateIcon fontSize='large' />,
      dec: ""
   }, {
      service: "Planeamnento Estrategico",
      icon: <StackedLineChartIcon fontSize='large' />,
      dec: ""
   }, {
      service: "Elaboração de Projectos",
      icon: <DrawIcon fontSize='large' />,
      dec: ""
   }, {
      service: "Gestão de Midia Social",
      icon: <AccountTreeIcon fontSize='large' />,
      dec: ""
   }, {
      service: "Estudo de Viabilidade",
      icon: <AutoStoriesIcon fontSize='large' />,
      dec: ""
   }, {
      service: "Treinamento Corporativo",
      icon: <SchoolIcon fontSize='large' />,
      dec: ""
   }, {
      service: "Fecho de contas",
      icon: <SubjectIcon fontSize='large' />,
      dec: ""
   }
]