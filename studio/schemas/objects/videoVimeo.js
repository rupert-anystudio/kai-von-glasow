export default {
  type: 'object',
  name: 'videoVimeo',
  title: 'Vimeo Video',
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
      title: 'Vimeo Video',
      subtitle: url,
    }),
  },
}
