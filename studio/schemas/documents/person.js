import { BiUser } from 'react-icons/bi'

export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  icon: BiUser,
  fields: [
    {
      type: 'string',
      name: 'name',
      title: 'Name',
      validation: (Rule) => Rule.required(),
      description: 'The name of this person',
    },
    {
      type: 'website',
      name: 'website',
      description: 'The website of this person',
    },
    {
      type: 'socialMediaProfiles',
      name: 'socialMediaProfiles',
      description: 'A list of social media profiles of this person',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'website.url',
    },
  },
}
