<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

defineProps<{
  links: NavigationMenuItem[]
}>()
</script>

<template>
  <div class="fixed top-2 sm:top-4 mx-auto left-1/2 transform -translate-x-1/2 z-10">
    <UNavigationMenu
      :items="links"
      variant="link"
      color="neutral"
      class="bg-(--ui-bg-muted)/80 backdrop-blur-sm rounded-full px-4 border border-(--ui-border-muted)/50"
      :ui="{
        link: 'px-2 py-1'
      }"
    />
  </div>
</template>
