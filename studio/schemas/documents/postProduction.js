import { BiHighlight } from 'react-icons/bi'

export default {
  name: 'postProduction',
  title: 'Post Production',
  type: 'document',
  icon: BiHighlight,
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
