import { type SchemaTypeDefinition } from 'sanity'

const album: SchemaTypeDefinition = {
  name: 'album',
  title: 'Album',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'coverArt',
      title: 'Cover Art',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    },
    {
      name: 'songs',
      title: 'Songs',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'song' }] }],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    }
  ],
}

const song: SchemaTypeDefinition = {
  name: 'song',
  title: 'Song',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'artwork',
      title: 'Artwork/Photo',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
      validation: Rule => Rule.required(),
    },
    {
      name: 'album',
      title: 'Album',
      type: 'reference',
      to: [{ type: 'album' }],
    },
    {
      name: 'audio',
      title: 'Audio',
      type: 'file',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    }
  ],
}
// shows
// artists in the band profiles
// photo gallery
// videos
// contact form
// merch
// about
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [album, song],
}
