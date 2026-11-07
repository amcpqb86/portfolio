<template>
  <div class="starshelf">
    <slot />
  </div>
</template>

<style>
/* Starshelf colors (from the app's Theme.swift and icon): pale gold accent on warm near-black. */
.starshelf {
  --ss-link: #8a5a00;
  --ui-primary: #edb547;
  --ui-text-inverted: #000000;
  --ui-bg: #f2f2f7;
  --ui-bg-elevated: #ffffff;
  --ui-bg-accented: #e5e5ea;
  --ui-border: #d1d1d6;
  --ui-text: #3a3a3c;
  --ui-text-muted: #6c6c70;
  --ui-text-dimmed: #8e8e93;
  --ui-text-highlighted: #1c1c1e;

  background: var(--ui-bg);
  color: var(--ui-text);
  border-radius: var(--ui-radius);
}

.dark .starshelf {
  --ss-link: #f4d58d;
  --ui-primary: #f4d58d;
  --ui-text-inverted: #000000;
  --ui-bg: #141110;
  --ui-bg-elevated: #26211e;
  --ui-bg-accented: #3d3631;
  --ui-border: #3d3631;
  --ui-text: #e5e5ea;
  --ui-text-muted: #aeaeb2;
  --ui-text-dimmed: #8e8e93;
  --ui-text-highlighted: #f5f5f7;

  background:
    radial-gradient(60rem 30rem at 15% 0%, rgb(242 196 109 / 0.08), transparent 70%),
    linear-gradient(180deg, #2a2522, #141110 40rem);
}

.starshelf .ss-link {
  color: var(--ss-link);
  text-decoration: underline;
  text-underline-offset: 3px;
}
</style>
