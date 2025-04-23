<script setup lang="ts">
import Hero from '~/components/landing/Hero.vue'

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
const { data: posts } = await useAsyncData('blogs', () =>
  queryCollection('blog').order('date', 'DESC').limit(3).all()
)
if (!posts.value) {
  throw createError({ statusCode: 404, statusMessage: 'blogs posts not found', fatal: true })
}

useSeoMeta({
  title: page.value?.seo.title,
  ogTitle: page.value?.seo.title,
  description: page.value?.seo.description,
  ogDescription: page.value?.seo.description
})
</script>

<template>
  <UPage v-if="page">
    <Hero :page />
    <UPageSection
      :title="page.about.title"
      :description="page.about.description"
      :ui="{
        container: 'px-0 pt-0 sm:pt-0 md:pt-0 lg:pt-0',
        title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
        description: 'text-left mt-2 text-sm sm:text-md lg:text-sm text-(--ui-text-muted)'
      }"
    />
    <UPageSection
      :title="page.experience.title"
      :ui="{
        container: 'px-0 pt-0 sm:pt-0 md:pt-0 lg:pt-0 gap-4 sm:gap-4',
        title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium'
      }"
    >
      <div class="flex flex-col gap-2">
        <Motion
          v-for="(experience, index) in page.experience.items"
          :key="index"
          :initial="{ opacity: 0, transform: 'translateY(20px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.4 + 0.2 * index }"
          :in-view-options="{ once: true }"
          class="text-(--ui-text-muted) flex items-center text-nowrap gap-4"
        >
          <p class="text-sm">
            {{ experience.date }}
          </p>
          <USeparator />
          <ULink
            class="flex items-center gap-1"
            :to="experience.company.url"
            target="_blank"
          >
            <span class="text-sm">
              {{ experience.position }}
            </span>
            <div
              class="inline-flex items-center gap-1"
              :style="{ color: experience.company.color }"
            >
              <span class="font-medium">{{ experience.company.name }}</span>
              <UIcon :name="experience.company.logo" />
            </div>
          </ULink>
        </Motion>
      </div>
    </UPageSection>
    <UPageSection
      :title="page.blog.title"
      :description="page.blog.description"
      :ui="{
        container: 'px-0 pt-0 sm:pt-0 md:pt-0 lg:pt-0 sm:gap-6 lg:gap-8',
        title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
        description: 'text-left mt-2 text-sm sm:text-md lg:text-sm text-(--ui-text-muted)'
      }"
    >
      <UBlogPosts
        orientation="vertical"
        class="gap-4 lg:gap-y-4"
      >
        <UBlogPost
          v-for="(post, index) in posts"
          :key="index"
          orientation="horizontal"
          variant="naked"
          v-bind="post"
          :to="post.path"
          :class="index % 2 === 0 ? 'bg-(--ui-bg-muted) hover:bg-(--ui-bg-accented)/50' : 'bg-(--ui-bg) hover:bg-(--ui-bg-accented)/50'"
          :ui="{
            root: 'lg:px-4 relative lg:flex ring-0 hover:ring-0',
            header: 'hidden'
          }"
        />
      </UBlogPosts>
    </UPageSection>
  </UPage>
</template>
