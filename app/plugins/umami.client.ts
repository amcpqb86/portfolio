export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  // @ts-ignore
  const ids: Record<string, string> = {
    'amelien.dev': config.public.amelienDevUmamiId,
    'amelienbernard.fr': config.public.abFrUmamiId,
  }

  const id = ids[window.location.hostname]
  if (!id) return

  useHead({
    script: [
      {
        src: `https://analytics.amelien.dev/script.js`,
        'data-website-id': id,
        defer: true,
      }
    ]
  })
})
