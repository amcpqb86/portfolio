import { defineCollection, z } from '@nuxt/content'

export default defineCollection({
  type: 'data',
  source: 'projects',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    url: z.string().url(),
    date: z.coerce.date(),
    image: z.string(),
    color: z.string().optional()
  })
})
