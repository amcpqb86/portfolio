<script setup lang="ts">

</script>

<template>
  <div>
    <UContainer class="border-x border-default">
      <AppHeader :links="navLinks" />
      <slot />
      <AppFooter :links="navLinks" />
    </UContainer>
  </div>
</template>

<style scoped>

</style>
