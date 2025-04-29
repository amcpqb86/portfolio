<script setup lang="ts">
const { data: page } = await useAsyncData('about', () => {
  return queryCollection('about').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const { global } = useAppConfig()

useSeoMeta({
  title: page.value.hero.title,
  ogTitle: page.value.hero.title,
  description: page.value.hero.description,
  ogDescription: page.value.hero.description
})
</script>

<template>
  <UPage v-if="page">
    <UPageHero
      :title="page.hero.title"
      :description="page.hero.description"
      orientation="horizontal"
      :ui="{
        container: 'lg:flex sm:flex-row items-center',
        title: '!mx-0 text-left',
        description: '!mx-0 text-left',
        links: 'justify-start'
      }"
    >
      <UColorModeAvatar
        class="sm:rotate-4 size-36 rounded-lg ring ring-default ring-offset-3 ring-offset-(--ui-bg)"
        :light="global.picture?.light!"
        :dark="global.picture?.dark!"
        :alt="global.picture?.alt!"
      />
    </UPageHero>
    <UPageSection
      :ui="{
        container: '!pt-0'
      }"
    >
      <MDC
        :value="page.content"
        unwrap="p"
      />
      <div class="flex flex-row justify-center items-center py-10 space-x-[-2rem]">
        <PolaroidItem
          v-for="(image, index) in page.images"
          :key="index"
          :image="image"
          :index
        />
      </div>
    </UPageSection>
  </UPage>
</template>
