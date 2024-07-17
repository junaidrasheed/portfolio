export default {
  PORTFOLIO_SECTIONS: [
    { name: 'Home', tagLine: 'The beginning!' },
    { name: 'About', tagLine: 'Curious?' },
    { name: 'Skills', tagLine: 'I got game!' },
    { name: 'Works', tagLine: 'Only the finest!' },
    { name: 'Contact', tagLine: "Don't hesitate!" }
  ],
  SKILLS: [
    {
      name: 'set1',
      items: [
        {
          name: 'Vue',
          image: 'vue.png'
        },
        {
          name: 'React',
          image: 'react.svg'
        },
        {
          name: 'Nuxt',
          image: 'nuxt.svg'
        },
        {
          name: 'Tailwind CSS',
          image: 'tailwindcss.png'
        },
        {
          name: 'Laravel',
          image: 'laravel.png'
        },
        {
          name: 'Ruby on Rails',
          image: 'rails.png'
        }
      ]
    },
    {
      name: 'set2',
      items: [
        {
          name: 'Pinia',
          image: 'pinia.svg'
        },
        {
          name: 'Redux',
          image: 'redux.png'
        },
        {
          name: 'Typesense',
          image: 'typesense.png'
        },
        {
          name: 'Elasticsearch',
          image: 'elasticsearch.webp'
        },
        {
          name: 'Redis',
          image: 'redis.webp'
        },
        {
          name: 'Anycable',
          image: 'anycable.png'
        }
      ]
    },
    {
      name: 'set3',
      items: [
        {
          name: 'NuxtUI',
          image: 'nuxt.svg'
        },
        {
          name: 'Tailwind UI',
          image: 'tailwindcss.png'
        },
        {
          name: 'Node',
          image: 'nodejs.webp'
        },
        {
          name: 'PostgreSQL',
          image: 'postgresql.png'
        },
        {
          name: 'Nginx',
          image: 'nginx.svg'
        },
        {
          name: 'Vuetify',
          image: 'vuetify.png'
        }
      ]
    },
    {
      name: 'set4',
      items: [
        {
          name: 'MySQL',
          image: 'mysql.webp'
        },
        {
          name: 'Docker',
          image: 'docker.png'
        },
        {
          name: 'AWS',
          image: 'aws.webp'
        },
        {
          name: 'Typescript',
          image: 'typescript.png'
        },
        {
          name: 'Scss',
          image: 'scss.png'
        },
        {
          name: 'Highcharts',
          image: 'highcharts.png'
        }
      ]
    },
    {
      name: 'set5',
      items: [
        {
          name: 'Gitlab',
          image: 'gitlab.png'
        },
        {
          name: 'Github',
          image: 'github.png'
        },
        {
          name: 'Bitbucket',
          image: 'bitbucket.svg'
        },
        {
          name: 'Confluence',
          image: 'confluence.png'
        },
        {
          name: 'Jira',
          image: 'jira.svg'
        },
        {
          name: 'Slack',
          image: 'slack.png'
        }
      ]
    }
  ],
  SOCIAL_LINKS: [
    {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/junaid-rasheed-088382109/'
    },
    { name: 'GitHub', link: 'https://github.com/junaidrasheed' },
    { name: 'Email', link: 'mailto:junaidrasheed1@gmail.com' },
    { name: 'Twitter/X', link: 'https://x.com/junaidrasheed46' },
    {
      name: 'Instagram',
      link: 'https://instagram.com/users/junaidrasheed046'
    },
    { name: 'Facebook', link: 'https://facebook.com/JJtheSheikh' }
  ],
  HIRE_ME: 'mailto:junaidrasheed1@gmail.com',
  CONNECT_VIA_LINKEDIN: 'https://www.linkedin.com/in/junaid-rasheed-088382109/',
  GITHUB_LINK: 'https://github.com/junaidrasheed',
  PROJECTS: [
    {
      title: 'The Tie - Terminal',
      isConfidential: true,
      techStack: [
        'Vue.js',
        'Rails',
        'Tailwind CSS',
        'PostreSQL',
        'Docker',
        'AWS',
        'Git',
        'Redis',
        'Typesense'
      ],
      cover: 'terminal.png',
      description: `The Tie Terminal is the most comprehensive data platform for institutions in digital assets.It provides an all-in-one solution to stay on top of the crypto market.`,
      achievements: [
        'Spearheaded the application wide performance improvement drive which helped improve system stability and performance by up to 60%',
        'Crafted a Dashboard Tool which empowered users to customize their application experience making it the top feature on the platform.',
        'Played a key role in migrating the application frontend to a separate Nuxt.js application'
      ]
    },
    {
      title: 'The Tie - Vision',
      techStack: ['Vue.js', 'Laravel', 'Tailwind CSS', 'MySQL', 'Redis'],
      isConfidential: true,
      description: `Vision is TheTie's application designed for Enterprises, Crypto Companies, and Hedge Funds to monitor their market presence and competition. In partnership with Kubro, it offers users access to market-moving news faster than any other platform currently available`,
      cover: 'vision.png',
      achievements: [
        'Played a key role in migrating the application from Vue 2 to Vue 3',
        'Developed an alerting tool which notify users on variety of different channels i.e. Slack, Discord, Email, Twitter (X), and Telegram.',
        'Developed RESTful APIs to establish connectivity between the backend and frontend components.'
      ]
    },
    {
      title: 'Healthcare Business Insights',
      techStack: ['Laravel', 'Bootstrap', 'jQuery', 'Javascript'],
      cover: 'hbi.jpeg',
      description:
        'Healthcare Business Insights is a membership program that provides in-depth research and thoughtful insights across the core business functions found in hospitals and health systems nationwide',
      isConfidential: true,
      achievements: [
        'Helped migrating the application infrastructure to AWS Cloud.',
        'Actively engaged in migrating the application from Laravel 4 to Laravel 5'
      ]
    }
  ]
}
