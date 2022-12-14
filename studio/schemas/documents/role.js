import { BiBadge } from 'react-icons/bi'

export default {
  name: 'role',
  title: 'Role',
  type: 'document',
  icon: BiBadge,
  fields: [
    {
      type: 'string',
      name: 'name',
      title: 'Name',
      validation: (Rule) => Rule.required(),
      description: 'The name of this role',
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
}
