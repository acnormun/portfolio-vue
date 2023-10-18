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
          title:`Defensoria Pública do Estado de Minas Gerais, 08/2022 - now`,
          subtitle: 'Software Engineer - Frontend Developer',
          description: [
            {
              id: 1,
              value: 'Development of Vue applications with a focus on programming logic.'
            },
            {
              id: 2,
              value: 'Use of Redux, Next JS, and API Context for state management.'
            },
            {
              id: 3,
              value: 'Practical application of RESTFul, JWT and oAuth2.0.'
            },
            {
              id: 4,
              value: ' Implementation of HTML5, CSS3 (Sass), Javascript, JSS, WebSockets, and Bootstrap/Material Design.'
            },
            {
              id: 5,
              value: 'Work with microfrontends and API integration.'
            },
            {
              id: 6,
              value: 'Efficient use of Git and Git Flow for version control.'
            }
          ]
        },
        {
          id: "2",
          title:'CNH Industrial',
          subtitle: 'Purchasing Intern',
          description:[
            {
              id:1,
              value: 'Conducted market research to identify potential suppliers and evaluated their product offerings and pricing.'
            },
            {
              id: 2,
              value: 'Assisted in processing purchase orders, ensuring accurate product specifications, quantities, and delivery schedules.'
            },
            {
              id: 3,
              value: 'Supported the inventory management team in tracking stock levels and identifying reorder points.'
            },
            {
              id: 4,
              value: 'Participated in cross-functional meetings to enhance understanding of end-to-end procurement processes.'
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
        image: 'https://github.com/acnormun/portfolio-vue/blob/main/src/assets/img/projects/proway.png?raw=true',
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
        image: 'https://github.com/acnormun/portfolio-vue/blob/main/src/assets/img/projects/timer.png?raw=true',
        icon: 'fa-brands fa-react'
      },
    ]
  }
};
