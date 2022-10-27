export default {
  type: 'object',
  name: 'audioFile',
  title: 'Audio File',
  fields: [
    {
      type: 'string',
      name: 'name',
      title: 'Name',
      description: 'The displayed name for this audio file',
    },
    {
      type: 'file',
      name: 'file',
      title: 'File',
      validation: (Rule) => Rule.required(),
      description: 'The audio file itself',
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
