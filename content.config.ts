import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const PageSchema = z.object({
  seo: z.object({
    title: z.string(),
    description: z.string()
  })
})

const BaseSection = z.object({
  title: z.string(),
  description: z.string()
})

const Link = z.object({
  label: z.string(),
  to: z.string(),
  icon: z.string().optional()
})

const Button = z.object({
  label: z.string(),
  icon: z.string().optional(),
  trailingIcon: z.string().optional(),
  to: z.string().optional(),
  color: z.enum(['primary', 'neutral', 'success', 'warning', 'error', 'info']).optional(),
  size: z.enum(['xs', 'sm', 'md', 'lg', 'xl']).optional(),
  variant: z.enum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link']).optional(),
  id: z.string().optional(),
  target: z.enum(['_blank', '_self']).optional()
})

const Image = z.object({
  src: z.string(),
  alt: z.string(),
  width: z.number().optional(),
  height: z.number().optional()
})

const DualModeImage = z.object({
  light: z.string().editor({ input: 'media' }),
  dark: z.string().editor({ input: 'media' }),
  width: z.number().optional(),
  height: z.number().optional(),
  alt: z.string().optional()
})

const Author = z.object({
  name: z.string(),
  description: z.string().optional(),
  username: z.string().optional(),
  twitter: z.string().optional(),
  to: z.string().optional(),
  avatar: Image.optional()
})

const Testimonial = z.object({
  quote: z.string(),
  author: Author
})

const PageSection = BaseSection.extend({
  links: z.array(Button),
  image: DualModeImage,
  cta: z.object({
    title: z.string(),
    label: z.string(),
    to: z.string(),
    icon: z.string()
  }).optional()
})

const PageHero = BaseSection.extend({
  image: DualModeImage.optional(),
  head: z.object({
    title: z.string().optional(),
    description: z.string().optional()
  }).optional(),
  headline: z.object({
    label: z.string(),
    to: z.string(),
    icon: z.string().optional().editor({ input: 'icon' })
  }).optional(),
  links: z.array(Button).optional(),
  cta: Link.optional()
})

export default defineContentConfig({
  collections: {
    index: defineCollection({
      type: 'data',
      source: 'index.yml',
      schema: PageSchema.extend({
        hero: PageHero.extend({
          profile: DualModeImage,
          images: z.array(Image)
        }),
        about: PageSection,
        experience: PageSection.extend({
          items: z.array(z.object({
            date: z.string(),
            position: z.string(),
            company: z.object({
              name: z.string(),
              url: z.string(),
              logo: z.string(),
              color: z.string()
            })
          }))
        }),
        testimonials: z.array(Testimonial),
        blog: PageSection,
        faq: PageSection.extend({
          categories: z.array(
            z.object({
              title: z.string().nonempty(),
              questions: z.array(
                z.object({
                  label: z.string().nonempty(),
                  content: z.string().nonempty()
                })

              )
            }))
        })
      })
    }),
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        minRead: z.number(),
        date: z.string().nonempty(),
        image: z.string().nonempty(),
        author: Author
      })
    })
  }
})
