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
    },
    {
      type: 'reference',
      name: 'artist',
      title: 'Artist',
      to: [{ type: 'artist' }],
      validation: (Rule) => Rule.required(),
    },
    {
      type: 'image',
      name: 'cover',
      title: 'Cover image',
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
