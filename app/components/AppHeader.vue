<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

defineProps<{
  links: NavigationMenuItem[]
}>()
</script>

<template>
  <UHeader
    :ui="{
      root: 'border-0 backdrop-blur-none bg-transparent'
    }"
  >
    <template #left>
      <div />
    </template>

    <UNavigationMenu
      :items="links"
      variant="link"
      color="neutral"
      class="bg-(--ui-bg-muted)/80 backdrop-blur-sm rounded-full px-4 border border-(--ui-border-muted)/50"
      :ui="{
        link: 'px-2 py-1'
      }"
    />

    <template #body>
      <UNavigationMenu
        :items="links"
        orientation="vertical"
        class="-mx-2.5"
      />
    </template>
  </UHeader>
</template>
