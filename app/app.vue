<script setup lang="ts">
const colorMode = useColorMode()

const color = computed(() => colorMode.value === 'dark' ? '#020618' : 'white')

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  titleTemplate: '%s - Nuxt UI Pro - Portfolio template',
  ogImage: 'https://portfolio-template.nuxt.dev/social-card.png',
  twitterImage: 'https://portfolio-template.nuxt.dev/social-card.png',
  twitterCard: 'summary_large_image'
})

const [{ data: navigation }, { data: files }] = await Promise.all([
  useAsyncData('navigation', () => {
    return Promise.all([
      queryCollectionNavigation('blog')
    ])
  }, {
    transform: data => data.flat()
  }),
  useLazyAsyncData('search', () => {
    return Promise.all([
      queryCollectionSearchSections('blog')
    ])
  }, {
    server: false,
    transform: data => data.flat()
  })
])

const links = [{
  label: 'Home',
  to: '/'
}, {
  label: 'Projects',
  to: '/projects'
}, {
  label: 'Blog',
  to: '/blog'
}, {
  label: 'Speaking',
  to: '/speaking'
}, {
  label: 'About',
  to: '/about'
}]
</script>

<template>
  <UApp>
    <AppHeader :links />

    <UMain class="relative">
      <NuxtPage />
    </UMain>

    <AppFooter :links />

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
        shortcut="meta_k"
        :links="links"
        :fuse="{ resultLimit: 42 }"
      />
    </ClientOnly>
  </UApp>
</template>
