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
      :ui="{
        title: '!mx-0 text-left',
        description: '!mx-0 text-left',
        links: 'justify-start'
      }"
    />
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
        <div
          v-for="(image, index) in page.images"
          :key="index"
          class="bg-white pt-2 px-2 pb-4 flex flex-col drop-shadow-2xl
           transition-transform duration-300 ease-in-out
           hover:scale-105 hover:rotate-0 hover:z-10"
          :class="[
            index % 2 === 0 ? '-rotate-5' : 'rotate-5',
            index % 2 === 0 ? 'hover:-translate-x-4' : 'hover:translate-x-4'
          ]"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            class="size-32 object-cover"
          >
          <span class="w-32 text-xs text-black font-serif font-medium text-center mt-2">
            {{ image.alt }}
          </span>
        </div>
      </div>
    </UPageSection>
  </UPage>
</template>
