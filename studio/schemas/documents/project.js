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
      description: 'The name of this project',
    },
    {
      type: 'contentFull',
      name: 'description',
      title: 'Description',
      description: 'A description of this project',
    },
    {
      type: 'date',
      name: 'releaseDate',
      title: 'Release Date',
      description: 'The date this project was released',
    },
    {
      type: 'image',
      name: 'image',
      title: 'Image',
      description: 'An image or still related to this project',
    },
    {
      type: 'media',
      name: 'media',
      description: 'A list of multimedia content related to this project',
    },
    {
      type: 'array',
      name: 'roster',
      title: 'Roster',
      description: 'The team behind this project',
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
