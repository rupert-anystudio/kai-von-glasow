export default {
  type: 'object',
  name: 'videoFile',
  title: 'Video File',
  fields: [
    {
      type: 'string',
      name: 'name',
      title: 'Name',
      description: 'The displayed name for this video file',
    },
    {
      type: 'file',
      name: 'file',
      title: 'File',
      validation: (Rule) => Rule.required(),
      description: 'The video file itself',
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
