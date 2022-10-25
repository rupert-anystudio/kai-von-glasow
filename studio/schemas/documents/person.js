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
