export default {
  type: 'object',
  name: 'videoFile',
  title: 'Video File',
  fields: [
    {
      type: 'string',
      name: 'name',
      title: 'Name',
    },
    {
      type: 'file',
      name: 'file',
      title: 'File',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      name: 'name',
    },
    prepare: ({ name }) => ({
      title: 'Video File',
      subtitle: name,
    }),
  },
}
