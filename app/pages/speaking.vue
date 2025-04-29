<script setup lang="ts">
type Event = {
  title: string
  date: string
  location: string
  url?: string
  category: 'Conference' | 'Live talk' | 'Podcast'
}

const { data: page } = await useAsyncData('speaking', () => {
  return queryCollection('speaking').first()
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

const groupedEvents = computed(() => {
  if (!page.value?.events) return {} as Record<Event['category'], Event[]>
  return page.value.events.reduce((acc, event: Event) => {
    const category = event.category
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(event)
    return acc
  }, {} as Record<Event['category'], Event[]>)
})

function formatDate(dateString: string): string {
  if (!dateString || isNaN(new Date(dateString).getTime())) {
    return dateString
  }
  return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
}
</script>

<template>
  <UPage v-if="page">
    <UPageHero
      :title="page.hero.title"
      :description="page.hero.description"
      :links="page.hero.links"
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
      <div
        v-for="(eventsInCategory, category) in groupedEvents"
        :key="category"
        class="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 mb-16 last:mb-0"
      >
        <div class="lg:col-span-1 mb-4 lg:mb-0">
          <h2
            class="lg:sticky lg:top-16 text-xl font-semibold tracking-tight text-highlighted"
          >
            {{ category.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase()) }}s
          </h2>
        </div>

        <div class="lg:col-span-2 space-y-8">
          <div
            v-for="(event, index) in eventsInCategory"
            :key="`${category}-${index}`"
            class="group relative pl-6 border-l border-default"
          >
            <NuxtLink
              v-if="event.url"
              :to="event.url"
              class="absolute inset-0"
            />
            <div class="mb-1 text-sm font-medium text-muted">
              <span>{{ event.location }}</span>
              <span
                v-if="event.location && event.date"
                class="mx-1"
              >·</span>
              <span v-if="event.date">{{ formatDate(event.date) }}</span>
            </div>

            <h3 class="text-lg font-semibold text-highlighted">
              {{ event.title }}
            </h3>

            <ULink
              v-if="event.url"
              target="_blank"
              class="inline-flex items-center mt-2 text-sm font-medium text-primary"
            >
              {{ event.category === 'Podcast' ? 'Listen' : 'Watch' }}
              <UIcon
                name="i-lucide-arrow-right"
                class="size-4 transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
              />
            </ULink>
          </div>
        </div>
      </div>
    </UPageSection>
  </UPage>
</template>
