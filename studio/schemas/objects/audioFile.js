export default {
  type: 'object',
  name: 'audioFile',
  title: 'Audio File',
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
      title: 'Audio File',
      subtitle: name,
    }),
  },
}
