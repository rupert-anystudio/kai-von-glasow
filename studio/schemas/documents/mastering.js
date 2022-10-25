import { BiHeadphone } from 'react-icons/bi'

export default {
  name: 'mastering',
  title: 'Mastering',
  type: 'document',
  icon: BiHeadphone,
  fields: [
    {
      type: 'reference',
      name: 'client',
      title: 'Client',
      to: [{ type: 'artist' }, { type: 'label' }],
      validation: (Rule) => Rule.required(),
    },
    {
      type: 'reference',
      name: 'release',
      title: 'Release',
      to: [{ type: 'album' }, { type: 'ep' }],
      validation: (Rule) => Rule.required(),
    },
    {
      type: 'date',
      name: 'releaseDate',
      title: 'Release Date',
    },
  ],
  preview: {
    select: {
      title: 'release.name',
      subtitle: 'client.name',
    },
  },
}
