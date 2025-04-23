<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()

const { data: posts } = await useAsyncData('blogs', () =>
  queryCollection('blog').order('date', 'DESC').limit(3).all()
)
if (!posts.value) {
  throw createError({ statusCode: 404, statusMessage: 'blogs posts not found', fatal: true })
}
</script>

<template>
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
</template>
