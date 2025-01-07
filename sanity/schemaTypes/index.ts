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

// About page
export const curriculumVitae: SchemaTypeDefinition = {
  name: 'curriculumVitae',
  title: 'Curriculum Vitae',
  type: 'document',
  fields: [
    // Intro Section
    {
      name: 'intro',
      title: 'Intro',
      type: 'array',
      of: [{ type: 'block' }],
    },

    // Skills Section
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Skill Category',
          fields: [
            {
              name: 'skillsList',
              title: 'Skills List',
              type: 'string',
              validation: Rule => Rule.required(),
            },
          ],
        },
      ],
    },

    // Experiences Section
    {
      name: 'experiences',
      title: 'Experiences',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Experience',
          fields: [
            {
              name: 'company',
              title: 'Company',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'jobTitle',
              title: 'Job Title',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'datesWorked',
              title: 'Dates Worked',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'duties',
              title: 'Duties',
              type: 'array',
              of: [{ type: 'string' }],
            },
          ],
        },
      ],
    },

    // Education Section
    {
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Education',
          fields: [
            {
              name: 'schoolName',
              title: 'School Name',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'degree',
              title: 'Degree',
              type: 'string',
              validation: Rule => Rule.required(),
            },
          ],
        },
      ],
    },

    // My World Section
    {
      name: 'myWorld',
      title: 'My World',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'My World Entry',
          fields: [
            {
              name: 'category',
              title: 'Category',
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
              name: 'images',
              title: 'Images',
              type: 'array',
              of: [{ type: 'image' }],
            },
          ],
        },
      ],
    },
  ],
};

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
  types: [role, profileSummary, traits, offerings, featured, services, curriculumVitae, musicProject],
}
