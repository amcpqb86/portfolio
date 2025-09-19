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
          v-for="(exp, i) in page.experience.items"
          :key="i"
          class="w-full flex flex-col sm:flex-row items-start sm:items-center gap-1.5 sm:gap-2 mb-3 sm:mb-0"
        >
          <p class="text-sm flex-none">{{ exp.date }}</p>

          <USeparator class="block sm:hidden w-full" />
          <USeparator class="hidden sm:block" orientation="vertical" />

          <component
            :is="exp.company?.url ? 'ULink' : 'div'"
            class="flex min-w-0 flex-1 items-center gap-1"
            v-bind="exp.company?.url ? { to: exp.company.url, target: '_blank' } : {}"
          >
        <span class="text-sm truncate">
          {{ exp.position }}
        </span>

            <div
              class="inline-flex min-w-0 items-center gap-1"
              :style="{ color: exp.company?.color || '' }"
            >
          <span class="font-medium truncate">
            {{ exp.company?.name }}
          </span>
              <UIcon v-if="exp.company?.logo" :name="exp.company.logo" class="size-4 flex-none" />
            </div>
          </component>
        </Motion>
      </div>
    </template>
  </UPageSection>
</template>

<style scoped>

</style>
