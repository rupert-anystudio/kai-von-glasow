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
      description: 'The role the group of people below had',
    },
    {
      type: 'array',
      name: 'bearers',
      title: 'Bearers',
      of: [
        {
          type: 'reference',
          name: 'bearer',
          to: [
            { type: 'artist' },
            { type: 'person' },
            { type: 'productionHouse' },
            { type: 'agency' },
            { type: 'company' },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
      description: 'The group of people bearing the role above',
    },
  ],
  preview: {
    select: {
      title: 'role.name',
    },
  },
}
