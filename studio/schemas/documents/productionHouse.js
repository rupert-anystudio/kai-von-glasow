import { BiBuildingHouse } from 'react-icons/bi'

export default {
  name: 'productionHouse',
  title: 'Production House',
  type: 'document',
  icon: BiBuildingHouse,
  fields: [
    {
      type: 'string',
      name: 'name',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    },
    {
      type: 'website',
      name: 'website',
    },
    {
      type: 'socialMediaProfiles',
      name: 'socialMediaProfiles',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'website.url',
    },
  },
}
