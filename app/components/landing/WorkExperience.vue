<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()

const ULink = resolveComponent('ULink')
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

          <div class="flex min-w-0 flex-1 flex-wrap items-baseline gap-x-1 gap-y-0.5">
            <component
              :is="exp.company?.url ? ULink : 'div'"
              class="flex min-w-0 items-baseline gap-1"
              :class="{ 'cursor-pointer': exp.company?.url }"
              v-bind="exp.company?.url ? { to: exp.company.url, target: '_blank' } : {}"
            >
              <span class="text-sm truncate">
                {{ exp.position }}
              </span>

              <div
                class="inline-flex min-w-0 items-baseline gap-1"
                :style="{ color: exp.company?.color || '' }"
              >
                <span class="font-medium truncate">
                  {{ exp.company?.name }}
                </span>
                <UIcon v-if="exp.company?.logo" :name="exp.company.logo" class="size-4 flex-none self-center" />
              </div>
            </component>

            <component
              :is="exp.parent.url ? ULink : 'span'"
              v-if="exp.parent"
              class="inline-flex items-baseline gap-1 text-sm text-muted"
              :class="{ 'cursor-pointer': exp.parent.url }"
              v-bind="exp.parent.url ? { to: exp.parent.url, target: '_blank' } : {}"
            >
              <span class="italic">{{ exp.parent.label }}</span>
              <span
                class="font-medium not-italic"
                :style="{ color: exp.parent.color || '' }"
              >
                {{ exp.parent.name }}
              </span>
            </component>
          </div>
        </Motion>
      </div>
    </template>
  </UPageSection>
</template>
