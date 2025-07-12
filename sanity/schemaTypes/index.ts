import { type SchemaTypeDefinition } from 'sanity'

// Homepage
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

export const profileSummary: SchemaTypeDefinition = {
  name: 'profileSummary',
  title: 'Profile Summary',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
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

// Projects
export const musicProject: SchemaTypeDefinition = {
  name: 'musicProject',
  title: 'MusicProject',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      name: 'video',
      title: 'Video',
      type: 'url',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: Rule => Rule.required(),
    },
  ],
}

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [role, profileSummary, traits, offerings, featured, services, musicProject],
}
