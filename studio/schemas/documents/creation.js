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
      description: 'The title of this creation',
    },
    {
      type: 'contentFull',
      name: 'description',
      title: 'Description',
      description: 'A description explaining this creation',
    },
    {
      type: 'date',
      name: 'releaseDate',
      title: 'Release Date',
      description: 'The date this creation was released',
    },
    {
      type: 'reference',
      name: 'category',
      title: 'Category',
      to: [{ type: 'category' }],
      description: 'The category this creation falls into',
    },
    {
      type: 'media',
      name: 'media',
      description: 'A list of multimedia content related to this creation',
    },
    {
      type: 'array',
      name: 'roster',
      title: 'Roster',
      description: 'The team behind this creation',
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
