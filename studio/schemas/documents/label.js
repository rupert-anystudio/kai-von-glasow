import { BiBuilding } from 'react-icons/bi'

export default {
  name: 'label',
  title: 'Label',
  type: 'document',
  icon: BiBuilding,
  fields: [
    {
      type: 'string',
      name: 'name',
      title: 'Name',
      validation: (Rule) => Rule.required(),
      description: 'The name of this label',
    },
    {
      type: 'website',
      name: 'website',
      description: 'The website of this label',
    },
    {
      type: 'socialMediaProfiles',
      name: 'socialMediaProfiles',
      description: 'A list of social media profiles of this label',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'website.url',
    },
  },
}
