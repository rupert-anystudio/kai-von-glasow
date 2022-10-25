import { BiPurchaseTag } from 'react-icons/bi'

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: BiPurchaseTag,
  fields: [
    {
      type: 'string',
      name: 'name',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
}
