import { BiData } from 'react-icons/bi'

export default {
  name: 'album',
  title: 'Album',
  type: 'document',
  icon: BiData,
  fields: [
    {
      type: 'string',
      name: 'name',
      title: 'Name',
      validation: (Rule) => Rule.required(),
      description: 'The title of this album',
    },
    {
      type: 'reference',
      name: 'artist',
      title: 'Artist',
      to: [{ type: 'artist' }],
      validation: (Rule) => Rule.required(),
      description: 'The artist behind this album',
    },
    {
      type: 'image',
      name: 'cover',
      title: 'Cover image',
      description: 'The cover art for this album',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'artist.person.name',
      media: 'cover.asset',
    },
  },
}
