import { BiBulb } from 'react-icons/bi'

export default {
  name: 'creation',
  title: 'Creation',
  type: 'document',
  icon: BiBulb,
  fields: [
    {
      type: 'string',
      name: 'name',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    },
    {
      type: 'contentFull',
      name: 'description',
      title: 'Description',
    },
    {
      type: 'date',
      name: 'releaseDate',
      title: 'Release Date',
    },
    {
      type: 'reference',
      name: 'category',
      title: 'Category',
      to: [{ type: 'category' }],
    },
    {
      type: 'media',
      name: 'media',
    },
    {
      type: 'array',
      name: 'roster',
      title: 'Roster',
      of: [
        {
          type: 'rosterEntry',
          name: 'rosterEntry',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'releaseDate',
      media: 'image.asset',
    },
  },
}
