<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
import { findPageBreadcrumb, mapContentNavigation } from '#ui-pro/utils/content'

const route = useRoute()

const { data: page } = await useAsyncData(route.path, () =>
  queryCollection('blog').path(route.path).first()
)
if (!page.value) throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
const { data: surround } = await useAsyncData(`${route.path}-surround`, () =>
  queryCollectionItemSurroundings('blog', route.path, {
    fields: ['description']
  })
)

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation', ref([]))
const blogNavigation = computed(() => navigation.value.find(item => item.path === '/blog')?.children || [])

const breadcrumb = computed(() => mapContentNavigation(findPageBreadcrumb(blogNavigation?.value, page.value)).map(({ icon, ...link }) => link))

if (page.value.image) {
  defineOgImage({ url: page.value.image })
} else {
  defineOgImageComponent('Blog', {
    headline: breadcrumb.value.map(item => item.label).join(' > ')
  }, {
    fonts: ['Geist:400', 'Geist:600']
  })
}

const title = page.value.seo?.title || page.value.title
const description = page.value.seo?.description || page.value.description

useSeoMeta({
  title,
  description,
  ogDescription: description,
  ogTitle: title
})

const articleLink = computed(() => `${window.location}${route.path}`)

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>

<template>
  <UMain class="mt-20 px-2">
    <UContainer class="relative min-h-screen">
      <UPage v-if="page">
        <ULink
          to="/blog"
          class="text-sm flex items-center gap-1"
        >
          <UIcon name="lucide:chevron-left" />
          Blog
        </ULink>
        <div class="flex flex-col gap-3 mt-8">
          <NuxtImg
            :src="page.image"
            :alt="page.title"
            class="rounded-lg w-full h-[250px] object-cover object-center"
          />
          <div class="flex text-xs text-(--ui-text-muted) items-center justify-center gap-2">
            <span>
              {{ formatDate(page.date) }}
            </span>
            -
            <span>
              {{ page.minRead }} MIN READ
            </span>
          </div>
          <h1 class="text-4xl main-gradient text-center max-w-3xl mx-auto">
            {{ page.title }}
          </h1>
          <p class="text-(--ui-text-muted) text-center max-w-2xl mx-auto">
            {{ page.description }}
          </p>
          <div class="flex items-center justify-center gap-2 mt-2">
            <UUser
              v-for="(author, index) in page.authors"
              :key="index"
              orientation="vertical"
              color="neutral"
              variant="outline"
              class="justify-center items-center text-center"
              v-bind="author"
            />
          </div>
        </div>
        <UPageBody class="max-w-3xl mx-auto">
          <ContentRenderer
            v-if="page.body"
            :value="page"
          />

          <USeparator class="my-10">
            <div class="flex items-center gap-2 text-sm text-(--ui-text-muted)">
              <UButton
                size="sm"
                variant="link"
                color="neutral"
                label="Copy link"
                @click="copyToClipboard(articleLink, 'Article link copied to clipboard')"
              />
            </div>
          </USeparator>
          <UContentSurround :surround />
        </UPageBody>
      </UPage>
    </UContainer>
  </UMain>
</template>
