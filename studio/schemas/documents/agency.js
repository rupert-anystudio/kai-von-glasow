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
      description: 'The name of this agency',
    },
    {
      type: 'website',
      name: 'website',
      description: 'The website of this agency',
    },
    {
      type: 'socialMediaProfiles',
      name: 'socialMediaProfiles',
      description: 'A list of social media profiles of this agency',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'website.url',
    },
  },
}
