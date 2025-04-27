<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

const { footer } = useAppConfig()

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
      description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted',
      links: 'mt-4 flex-col justify-center items-center'
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
          class="size-18 ring ring-default ring-offset-3 ring-offset-(--ui-bg)"
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
                  class="absolute bg-success inline-flex size-full animate-ping rounded-full opacity-75"
                />
                <span
                  class="relative bg-success inline-flex size-2 scale-90 rounded-full"
                />
              </span>
            </template>
          </UButton>
        </div>
      </Motion>

      <div class="gap-x-4 inline-flex mt-4">
        <Motion
          v-for="(link, index) of footer?.links"
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
            delay: 0.5 + index * 0.1
          }"
        >
          <UButton
            v-bind="{ size: 'lg', color: 'neutral', variant: 'ghost', ...link }"
          />
        </Motion>
      </div>
    </template>

    <UPageMarquee
      pause-on-hover
      class="py-2 -mx-4 sm:-mx-6 lg:-mx-8"
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
