<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    :title="page.experience.title"
    :ui="{
      container: '!p-0 gap-4 sm:gap-4',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium mb-8',
      description: 'mt-2'
    }"
  >
    <template #description>
      <div class="flex flex-col gap-8 w-full">
        <Motion
          v-for="(experience, index) in page.experience.items"
          :key="index"
          :initial="{ opacity: 0, transform: 'translateY(20px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.4 + 0.2 * index }"
          :in-view-options="{ once: true }"
          class="text-muted w-full flex flex-col sm:flex-row items-start sm:items-center gap-1.5 sm:gap-2 mb-3 sm:mb-0"
        >
          <p class="text-sm flex-none">
            {{ experience.date }}
          </p>

          <!-- Séparateur : horizontal en mobile, vertical ≥ sm -->
          <USeparator class="block sm:hidden w-full" />
          <USeparator class="hidden sm:block" orientation="vertical" />

          <ULink
            class="flex min-w-0 flex-1 items-center gap-1"
            :to="experience.company.url"
            target="_blank"
          >
    <span class="text-sm truncate">
      {{ experience.position }}
    </span>

            <div
              class="inline-flex min-w-0 items-center gap-1"
              :style="{ color: experience.company.color }"
            >
      <span class="font-medium truncate">
        {{ experience.company.name }}
      </span>
              <UIcon :name="experience.company.logo" class="size-4 flex-none" />
            </div>
          </ULink>
        </Motion>
      </div>
    </template>
  </UPageSection>
</template>

<style scoped>

</style>
