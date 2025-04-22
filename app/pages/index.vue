<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => {
  return queryCollection('index').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

useSeoMeta({
  titleTemplate: '',
  title: page.value?.seo.title,
  ogTitle: page.value?.seo.title,
  description: page.value?.seo.description,
  ogDescription: page.value?.seo.description
})

const items = [
  'https://picsum.photos/468/468?random=1',
  'https://picsum.photos/468/468?random=2',
  'https://picsum.photos/468/468?random=3',
  'https://picsum.photos/468/468?random=4',
  'https://picsum.photos/468/468?random=5',
  'https://picsum.photos/468/468?random=6',
  'https://picsum.photos/468/468?random=7',
  'https://picsum.photos/468/468?random=8',
  'https://picsum.photos/468/468?random=9'
]
</script>

<template>
  <UPage
    v-if="page"
    class="overflow-hidden"
    :ui="{
      root: 'grid sm:grid-cols-10 lg:grid-cols-10 mt-[calc(-1*var(--ui-header-height))] min-h-screen',
      left: 'col-span-1 lg:col-span-2 border-r border-(--ui-border)',
      center: 'col-span-8 lg:col-span-6',
      right: 'col-span-1 lg:col-span-2 border-l border-(--ui-border) order-last'
    }"
  >
    <template #left>
      <div />
    </template>
    <template #right>
      <div />
    </template>
    <UPageHero
      :ui="{
        container: 'py-18 sm:py-24 lg:py-32',
        wrapper: '',
        headline: 'flex items-center justify-center',
        title: 'mx-auto max-w-xl text-pretty',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-(--ui-text-muted)',
        links: 'mt-4'
      }"
    >
      <template #headline>
        <Motion
          :initial="{
            scale: 1.1,
            opacity: 0,
            filter: 'blur(20px)'
          }"
          :animate="{
            scale: 1,
            opacity: 1,
            filter: 'blur(0px)'
          }"
          :transition="{
            duration: 0.6,
            delay: 0.1
          }"
        >
          <UColorModeAvatar
            class="size-18 ring ring-(--ui-border) ring-offset-3 ring-offset-(--ui-bg)"
            v-bind="page.hero.profile"
          />
        </Motion>
      </template>

      <template #title>
        <Motion
          :initial="{
            scale: 1.1,
            opacity: 0,
            filter: 'blur(20px)'
          }"
          :animate="{
            scale: 1,
            opacity: 1,
            filter: 'blur(0px)'
          }"
          :transition="{
            duration: 0.6,
            delay: 0.1
          }"
        >
          <h1 class="text-3xl sm:text-4xl lg:text-5xl">
            {{ page.hero.title }}
          </h1>
        </Motion>
      </template>

      <template #description>
        <Motion
          :initial="{
            scale: 1.1,
            opacity: 0,
            filter: 'blur(20px)'
          }"
          :animate="{
            scale: 1,
            opacity: 1,
            filter: 'blur(0px)'
          }"
          :transition="{
            duration: 0.6,
            delay: 0.3
          }"
        >
          {{ page.hero.description }}
        </Motion>
      </template>

      <template #links>
        <Motion
          :initial="{
            scale: 1.1,
            opacity: 0,
            filter: 'blur(20px)'
          }"
          :animate="{
            scale: 1,
            opacity: 1,
            filter: 'blur(0px)'
          }"
          :transition="{
            duration: 0.6,
            delay: 0.5
          }"
        >
          <div
            v-if="page.hero.links"
            class="flex items-center gap-2"
          >
            <UButton
              :label="page.hero.links[0]?.label"
              :to="page.hero.links[0]?.to"
              color="neutral"
            />
            <UButton
              color="success"
              variant="ghost"
              class="gap-2"
              v-bind="page.hero.links[1]"
            >
              <template #leading>
                <span class="relative flex size-2">
                  <span
                    class="absolute bg-(--ui-success) inline-flex size-full animate-ping rounded-full opacity-75"
                  />
                  <span
                    class="relative bg-(--ui-success) inline-flex size-2 scale-90 rounded-full"
                  />
                </span>
              </template>
            </UButton>
          </div>
        </Motion>
      </template>

      <UCarousel
        v-slot="{ item, index }"
        :items="items"
        auto-scroll
        loop
        class="-mx-4"
        :ui="{
          viewport: 'py-2', // 'overflow-visible',
          container: 'w-[calc(100%+var(--ui-container))]',
          item: 'basis-1/5'
        }"
      >
        <img
          :src="item"
          :alt="`Image ${index}`"
          width="234"
          height="234"
          class="rounded-lg"
          :class="index % 2 === 0 ? '-rotate-3' : 'rotate-3'"
        >
      </UCarousel>
    </UPageHero>
    <UPageSection
      :title="page.about.title"
      :description="page.about.description"
      :ui="{
        title: 'text-left text-xl sm:text-xl lg:text-2xl font-normal',
        description: 'text-left mt-2 text-sm sm:text-md lg:text-sm text-(--ui-text-muted)'
      }"
    />
  </UPage>
</template>
