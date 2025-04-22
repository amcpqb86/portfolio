<script setup lang="ts">
// import type { NavigationMenuItem } from '@nuxt/ui'

const { footer } = useAppConfig()

/* defineProps<{
  links: NavigationMenuItem[]
}>() */
</script>

<template>
  <USeparator />
  <UFooter
    class="z-10 bg-(--ui-bg)"
    :ui="{ left: 'text-xs' }"
  >
    <template #left>
      {{ footer.credits }}
    </template>

    <!--    <UNavigationMenu
      :items="links"
      variant="link"
    /> -->

    <template #right>
      <UColorModeButton size="xs" />

      <template v-if="footer?.links">
        <UButton
          v-for="(link, index) of footer?.links"
          :key="index"
          v-bind="{ size: 'xs', color: 'neutral', variant: 'ghost', ...link }"
        />
      </template>
    </template>
  </UFooter>
</template>
