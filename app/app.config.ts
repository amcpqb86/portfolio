export default defineAppConfig({
  global: {
    picture: {
      dark: '/avatar.png',
      light: '/avatar.png',
      alt: 'My profile picture'
    },
    email: 'contact@amelienbernard.fr',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Amélien BERNARD • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'material-symbols:mail',
      'to': 'mailto:contact@amelienbernard.fr',
      'target': '_blank',
      'aria-label': 'Linkedin'
    }, {
      'icon': 'i-simple-icons-linkedin',
      'to': 'https://www.linkedin.com/in/amélien-bernard/',
      'target': '_blank',
      'aria-label': 'Linkedin'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/amcpqb86',
      'target': '_blank',
      'aria-label': 'Nuxt UI on GitHub'
    }]
  }
})
