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
      description: 'The person behind this artist',
    },
    {
      type: 'website',
      name: 'website',
      description: 'The website of this artist',
    },
    {
      type: 'socialMediaProfiles',
      name: 'socialMediaProfiles',
      description: 'A list of social media profiles of this artist',
    },
  ],
  preview: {
    select: {
      title: 'person.name',
      subtitle: 'website.url',
    },
  },
}
