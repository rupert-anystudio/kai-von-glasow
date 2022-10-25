export default {
  type: 'array',
  name: 'media',
  title: 'Media',
  of: [
    {
      type: 'videoYoutube',
    },
    {
      type: 'videoVimeo',
    },
    {
      type: 'videoFile',
    },
    {
      type: 'audioFile',
    },
  ],
}
