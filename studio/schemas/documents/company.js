import { BiBuildings } from 'react-icons/bi'

export default {
  name: 'company',
  title: 'Company',
  type: 'document',
  icon: BiBuildings,
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
