import { BiBookAlt } from 'react-icons/bi'

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: BiBookAlt,
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
      type: 'image',
      name: 'image',
      title: 'Image',
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
