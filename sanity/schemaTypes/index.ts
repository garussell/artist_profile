import { type SchemaTypeDefinition } from 'sanity'

export const role: SchemaTypeDefinition = {
  name: 'role',
  title: 'Role',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
}

export const careerSummary: SchemaTypeDefinition = {
  name: 'careerSummary',
  title: 'Career Summary',
  type: 'document',
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
}

export const traits: SchemaTypeDefinition = {
  name: 'traits',
  title: 'Traits',
  type: 'document',
  fields: [
    {
      name: 'trait',
      title: 'Trait',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
}

export const offerings: SchemaTypeDefinition = {
  name: 'offerings',
  title: 'Offerings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
}

export const featured: SchemaTypeDefinition = {
  name: 'featured',
  title: 'Featured',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: Rule => Rule.required(),
    },
  ],
}

export const services: SchemaTypeDefinition = {
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'service',
      title: 'Service',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
}

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [role, careerSummary, traits, offerings, featured, services],
}
