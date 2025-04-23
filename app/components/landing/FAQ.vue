<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

const props = defineProps<{
  page: IndexCollectionItem
}>()

const items = computed(() => {
  return props.page.faq?.categories.map((faq) => {
    return {
      label: faq.title,
      key: faq.title.toLowerCase(),
      questions: faq.questions
    }
  })
})

const ui = {
  root: 'flex items-center gap-4 w-full',
  list: 'relative flex bg-transparent dark:bg-transparent gap-2',
  indicator: 'absolute top-[4px] duration-200 ease-out focus:outline-none rounded-lg bg-(--ui-bg-elevated)',
  trigger: 'px-3 py-2 rounded-lg hover:bg-(--ui-bg-muted)/50 data-[state=active]:text-(--ui-text-highlighted) data-[state=inactive]:text-(--ui-text-muted)',
  label: 'truncate'
}
</script>

<template>
  <UPageSection
    :title="page.faq.title"
    :description="page.faq.description"
    :ui="{
      container: 'px-0 pt-0 sm:pt-0 md:pt-0 lg:pt-0 gap-4 sm:gap-4',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'text-left mt-2 text-sm sm:text-md lg:text-sm text-(--ui-text-muted)'
    }"
  >
    <UTabs
      :items
      orientation="horizontal"
      :ui
    >
      <template #content="{ item }">
        <UPageAccordion
          trailing-icon="lucide:plus"
          :items="item.questions"
          :ui="{
            trigger: 'mb-2 border-0 group px-4 transform-gpu rounded-xl bg-(--ui-bg-elevated)/50 will-change-transform hover:bg-(--ui-bg-muted)/50',
            trailingIcon: 'group-data-[state=closed]:rotate-0 group-data-[state=open]:rotate-135'
          }"
        >
          <template #body="{ item }">
            <MDC
              :value="item.content"
              unwrap="p"
            />
          </template>
        </UPageAccordion>
      </template>
    </UTabs>
  </UPageSection>
</template>
