<script setup lang="ts">

</script>

<template>
  <div>
    <UContainer class="border border-(--ui-border)">
      <AppHeader :links="navLinks" />
      <slot />
      <AppFooter :links="navLinks" />
    </UContainer>
  </div>
</template>

<style scoped>

</style>
