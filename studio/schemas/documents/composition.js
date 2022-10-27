import { BiPen } from 'react-icons/bi'

export default {
  name: 'composition',
  title: 'Composition',
  type: 'document',
  icon: BiPen,
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
      description: 'The client this composition was made for',
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
      description: 'The date this composition was finished up',
    },
  ],
  preview: {
    select: {
      title: 'client.name',
      subtitle: 'date',
    },
  },
}
