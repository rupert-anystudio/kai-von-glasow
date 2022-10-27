import { BiVolumeFull } from 'react-icons/bi'

export default {
  name: 'soundDesign',
  title: 'Sound design',
  type: 'document',
  icon: BiVolumeFull,
  fields: [
    {
      type: 'reference',
      name: 'client',
      title: 'Client',
      to: [
        { type: 'artist' },
        { type: 'label' },
        { type: 'agency' },
        { type: 'company' },
        { type: 'productionHouse' },
        { type: 'person' },
      ],
      validation: (Rule) => Rule.required(),
      description: 'The client this sound design was made for',
    },
    {
      type: 'contentFull',
      name: 'description',
      title: 'Description',
      description: 'A description of this project',
    },
    {
      type: 'date',
      name: 'date',
      title: 'Date',
      description: 'The date this sound design was finished up',
    },
  ],
  preview: {
    select: {
      title: 'client.name',
      subtitle: 'date',
    },
  },
}
