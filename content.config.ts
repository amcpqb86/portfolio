import { defineCollection, defineContentConfig, z } from '@nuxt/content'

/* const variantEnum = z.enum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link'])
const colorEnum = z.enum(['primary', 'secondary', 'neutral', 'error', 'warning', 'success', 'info'])
const sizeEnum = z.enum(['xs', 'sm', 'md', 'lg', 'xl'])
const orientationEnum = z.enum(['vertical', 'horizontal'])

const baseSchema = {
  title: z.string().nonempty(),
  description: z.string().nonempty()
}

const linkSchema = z.object({
  label: z.string().nonempty(),
  to: z.string().nonempty(),
  icon: z.string().optional(),
  size: sizeEnum.optional(),
  trailing: z.boolean().optional(),
  target: z.string().optional(),
  color: colorEnum.optional(),
  variant: variantEnum.optional()
})

const imageSchema = z.object({
  src: z.string().nonempty(),
  alt: z.string().optional(),
  loading: z.string().optional(),
  srcset: z.string().optional()
}) */

export default defineContentConfig({
  collections: {
    landing: defineCollection({
      type: 'page',
      source: [
        { include: 'yml' }
      ]
    }),
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        date: z.string().nonempty()
      })
    })
  }
})
