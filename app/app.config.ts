export default defineAppConfig({
  global: {
    picture: {
      dark: 'https://media.licdn.com/dms/image/v2/D4E03AQGafhGq0HYXYA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724761290229?e=1760572800&v=beta&t=y91ECc1cgurc9ZHG3oIfyn4yKuW8Pz1pcOYdxlYO6Og',
      light: 'https://media.licdn.com/dms/image/v2/D4E03AQGafhGq0HYXYA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724761290229?e=1760572800&v=beta&t=y91ECc1cgurc9ZHG3oIfyn4yKuW8Pz1pcOYdxlYO6Og',
      alt: 'My profile picture'
    },
    meetingLink: 'https://cal.com/',
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
