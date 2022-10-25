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
    },
    {
      type: 'contentFull',
      name: 'description',
      title: 'Description',
    },
    {
      type: 'date',
      name: 'date',
      title: 'Date',
    },
  ],
  preview: {
    select: {
      title: 'client.name',
      subtitle: 'date',
    },
  },
}
