export default {
  type: 'object',
  name: 'rosterEntry',
  title: 'Roster Entry',
  fields: [
    {
      type: 'reference',
      name: 'role',
      title: 'Role',
      to: [{ type: 'role' }],
      validation: (Rule) => Rule.required(),
    },
    {
      type: 'array',
      name: 'bearers',
      title: 'Bearers',
      of: [
        {
          type: 'reference',
          name: 'bearer',
          to: [{ type: 'artist' }, { type: 'person' }],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'role.name',
    },
  },
}
