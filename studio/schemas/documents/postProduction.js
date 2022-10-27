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
      description: 'The client this post production was made for',
    },
    {
      type: 'contentFull',
      name: 'description',
      title: 'Description',
      description: 'A description of this post production',
    },
    {
      type: 'date',
      name: 'date',
      title: 'Date',
      description: 'The date this post production was finished up',
    },
  ],
  preview: {
    select: {
      title: 'client.name',
      subtitle: 'date',
    },
  },
}
