<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
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

    <UPageMarquee
      pause-on-hover
      class="py-2"
    >
      <Motion
        v-for="(img, index) in page.hero.images"
        :key="index"
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
          delay: index * 0.1
        }"
      >
        <img
          width="234"
          height="234"
          class="rounded-lg"
          :class="index % 2 === 0 ? '-rotate-2' : 'rotate-2'"
          v-bind="img"
        >
      </Motion>
    </UPageMarquee>
  </UPageHero>
</template>

<style scoped>

</style>
