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
      description: 'The name of this company',
    },
    {
      type: 'website',
      name: 'website',
      description: 'The website of this company',
    },
    {
      type: 'socialMediaProfiles',
      name: 'socialMediaProfiles',
      description: 'A list of social media profiles of this company',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'website.url',
    },
  },
}
