import { BiUserVoice } from 'react-icons/bi'

export default {
  name: 'artist',
  title: 'Artist',
  type: 'document',
  icon: BiUserVoice,
  fields: [
    {
      type: 'reference',
      name: 'person',
      title: 'Person',
      to: [{ type: 'person' }],
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
      title: 'person.name',
      subtitle: 'website.url',
    },
  },
}
