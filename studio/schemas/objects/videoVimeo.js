export default {
  type: 'object',
  name: 'videoVimeo',
  title: 'Vimeo Video',
  fields: [
    {
      type: 'url',
      name: 'url',
      title: 'URL',
      description: 'The URL pointing to this Vimeo video',
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
