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
      description: 'The name of this production house',
    },
    {
      type: 'website',
      name: 'website',
      description: 'The website of this production house',
    },
    {
      type: 'socialMediaProfiles',
      name: 'socialMediaProfiles',
      description: 'A list of social media profiles of this production house',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'website.url',
    },
  },
}
