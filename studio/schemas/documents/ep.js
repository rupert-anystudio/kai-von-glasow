import { BiDisc } from 'react-icons/bi'

export default {
  name: 'ep',
  title: 'EP',
  type: 'document',
  icon: BiDisc,
  fields: [
    {
      type: 'string',
      name: 'name',
      title: 'Name',
      validation: (Rule) => Rule.required(),
      description: 'The name of this EP',
    },
    {
      type: 'reference',
      name: 'artist',
      title: 'Artist',
      to: [{ type: 'artist' }],
      validation: (Rule) => Rule.required(),
      description: 'The artist behind this EP',
    },
    {
      type: 'image',
      name: 'cover',
      title: 'Cover image',
      description: 'The cover art for this EP',
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
