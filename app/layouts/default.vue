<script setup lang="ts">

</script>

<template>
  <div>
    <UContainer class="border-x border-default pt-10">
      <AppHeader :links="navLinks" />
      <slot />
      <AppFooter :links="navLinks" />
    </UContainer>
  </div>
</template>

<style scoped>

</style>
