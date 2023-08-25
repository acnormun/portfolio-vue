export const profileData = {
  header: [
    {
      id: "title",
      value: "Software Engineer - Frontend",
      icon: "mdi-account",
    },
    {
      id: "location",
      value: "Belo Horizonte - MG - Brasil",
      icon: "mdi-map-marker",
    },
    {
      id: "phone",
      value: "+55(31)9 9694-1311",
      icon: "mdi-whatsapp",
    },
    {
      id: "email",
      value: "dev.acnormun@gmail.com",
      icon: "mdi-email",
    },
    {
      id: "github",
      value: "ACNormun",
      icon: "mdi-github",
    },
  ],
  skills: [
    {
      id: 'javascript',
      value:'JavaScript',
      icon: 'fa-brands fa-square-js fa-2x'
    },
    {
      id:'vue',
      value: 'Vue.js',
      icon: 'fa-brands fa-vuejs fa-2x'
    },
    {
      id:'react',
      value: 'React.js',
      icon: 'fa-brands fa-react fa-2x'
    },
    {
      id:'node',
      value: 'Node.js',
      icon: 'fa-brands fa-node-js fa-2x'
    },
    {
      id:'node',
      value: 'Node.js',
      icon: 'fa-brands fa-html5 fa-2x'
    },
    {
      id:'node',
      value: 'Node.js',
      icon: 'fa-brands fa-css3 fa-2x'
    }
  ],
  panels: [
    {
      id: 'education',
      title: 'Education',
      hasChildren: false,
      children: null,
      content: [
        {
          id:"1",
          title:`UNIVERSIDADE FEDERAL DE MINAS GERAIS`,
          subtitle: 'Bachelor of Mechanical Engineering, 2019 - 2024',
          description: null
        },
        {
          id: "2",
          title:'ESTÁCIO DE SÁ',
          subtitle: 'Bachelor of Software Engineering, 2022-2026',
          description: null
        },
        {
          id: "3",
          title:'GOOGLE',
          subtitle: 'Project Management, 2023',
          description: null
        }
      ]
    },
    {
      id: 'experience',
      title: 'Experience',
      hasChildren: false,
      children: null,
      content: [
        {
          id:"1",
          title:`MGS - Minas Gerais Administração e Serviços S/A, 05/2023 - now`,
          subtitle: 'Software Engineer - Frontend Developer',
          description: [
            {
              id: 1,
              value: 'Desenvolvimento e implementação de interfaces de usuário responsivas para sites e aplicativos, garantindo compatibilidade com diversos navegadores e dispositivos.'
            },
            {
              id: 2,
              value: 'Colaboração com a equipe de design para transformar wireframes e mockups em código funcional, garantindo a fidelidade do design original.'
            },
            {
              id: 3,
              value: 'Otimização de desempenho para melhorar a velocidade de carregamento e a experiência do usuário.'
            },
            {
              id: 4,
              value: 'Resolução de bugs e problemas de compatibilidade, garantindo um produto livre de erros.'
            }
          ]
        },
        {
          id: "2",
          title:'Defensoria Pública do Estado de Minas Gerais',
          subtitle: 'Software Engineering Intern',
          description:[
            {
              id:1,
              value: 'Suporte ao desenvolvimento e implementação de recursos front-end para projetos web.'
            },
            {
              id: 2,
              value: 'Criação de interfaces de usuário interativas e responsivas.'
            },
            {
              id: 3,
              value: 'Organização e execução de testes de qualidade e correção de erros para garantir a entrega de produtos finais de alta qualidade.'
            }
          ]
        }
      ]
    },
    {
      id: 'courses',
      title: 'Courses & Certification',
      hasChildren: false,
      children: null,
      content: [
        {
          id:"1",
          title:`JavaScript Developer`,
          subtitle: 'Digital Innovation One',
          description: null
        },
        {
          id: "2",
          title:'Fullstack Web Developer - React & Node.js',
          subtitle: 'Digital Innovation One',
          description: null
        },
        {
          id: "3",
          title:'Vue.js 3 Developer',
          subtitle: 'Alura',
          description: null
        }
      ]
    },
    {
      id: "projects",
      title: `Projects`,
      hasChildren: true,
    }
  ],
  projects: {
    id: 'projects',
    list: [
      {
        id: 1,
        title: 'Proway Computers',
        link: 'https://acnormun.github.io/proway-computers/produtos',
        image: '',
        icon: ''
      },
      {
        id: 2,
        title: 'Star Trek - Fan Website',
        link: 'https://star-trek-html.vercel.app/',
        image: 'https://github.com/acnormun/portfolio-vue/blob/main/src/assets/img/projects/startrek.png?raw=true',
        icon: 'fa-brands fa-square-js'
      },
      {
        id: 3,
        title: 'Timer',
        link: 'https://02-ignite-timer-nu.vercel.app/',
        image: '',
        icon: 'fa-brands fa-react'
      },
    ]
  }
};
