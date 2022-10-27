export default {
  type: 'object',
  name: 'videoYoutube',
  title: 'Youtube Video',
  fields: [
    {
      type: 'url',
      name: 'url',
      title: 'URL',
      description: 'The URL pointing to this Youtube video',
    },
  ],
  preview: {
    select: {
      url: 'url',
    },
    prepare: ({ url }) => ({
      title: 'Youtube Video',
      subtitle: url,
    }),
  },
}
