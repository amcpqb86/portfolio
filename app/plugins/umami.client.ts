export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const ids: Record<string, string> = {
    "amelien.dev": config.public.amelienDevUmamiId as string,
    "amelienbernard.fr": config.public.abFrUmamiId as string,
  }

  const id = ids[globalThis.location.hostname]
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
