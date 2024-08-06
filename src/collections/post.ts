import type { CollectionConfig, FieldHook } from 'payload'



const format = (val: string): string =>
    val
      .replace(/ /g, '-')
      .replace(/[^\w-/]+/g, '')
      .toLowerCase()
  
  const formatSlug =
    (fallback: string): FieldHook =>
    ({ value, originalDoc, data }: any) => {
      if (typeof value === 'string') {
        return format(value)
      }
      const fallbackData = data?.[fallback] || originalDoc?.[fallback]
  
      if (fallbackData && typeof fallbackData === 'string') {
        return format(fallbackData)
      }
  
      return value
    }


export const Post: CollectionConfig = {
  slug: 'post',
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'richText',
      required: true,
    },
    {
      name: 'media',
      label: 'Media',
      type: 'array',
      fields: [
        {
          name: 'alt',
          label: 'Carousel or Hero',
          type: 'text',
          required: true,
        },
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
      required: true,
    },
    {
        name: 'slug',
        label: 'Slug',
        type: 'text',
        admin: {
          position: 'sidebar',
        },
        hooks: {
          beforeValidate: [formatSlug('title')],
        },
      },
  ],
}



