import { BiBuilding } from 'react-icons/bi'

export default {
  name: 'agency',
  title: 'Agency',
  type: 'document',
  icon: BiBuilding,
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
