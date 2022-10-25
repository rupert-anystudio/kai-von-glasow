export default {
  type: 'object',
  name: 'videoYoutube',
  title: 'Youtube Video',
  fields: [
    {
      type: 'url',
      name: 'url',
      title: 'URL',
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
