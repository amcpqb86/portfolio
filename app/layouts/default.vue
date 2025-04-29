<script setup lang="ts">
</script>

<template>
  <div>
    <UContainer class="border-x border-default pt-10">
      <AppHeader :links="navLinks" />
      <slot />
      <AppFooter />
    </UContainer>
  </div>
</template>
