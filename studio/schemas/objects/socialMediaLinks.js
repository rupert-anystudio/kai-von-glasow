export default {
  type: 'array',
  name: 'socialMediaLinks',
  title: 'Social Media Links',
  of: [
    {
      type: 'object',
      name: 'facebook',
      title: 'Facebook',
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
          title: 'Facebook',
          subtitle: url,
        }),
      },
    },
    {
      type: 'object',
      name: 'twitter',
      title: 'Twitter',
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
          title: 'Twitter',
          subtitle: url,
        }),
      },
    },
    {
      type: 'object',
      name: 'soundcloud',
      title: 'Soundcloud',
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
          title: 'Soundcloud',
          subtitle: url,
        }),
      },
    },
    {
      type: 'object',
      name: 'instagram',
      title: 'Instagram',
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
          title: 'Instagram',
          subtitle: url,
        }),
      },
    },
    {
      type: 'object',
      name: 'tiktok',
      title: 'TikTok',
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
          title: 'TikTok',
          subtitle: url,
        }),
      },
    },
    {
      type: 'object',
      name: 'snapchat',
      title: 'Snapchat',
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
          title: 'Snapchat',
          subtitle: url,
        }),
      },
    },
    {
      type: 'object',
      name: 'youtube',
      title: 'Youtube',
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
          title: 'Youtube',
          subtitle: url,
        }),
      },
    },
    {
      type: 'object',
      name: 'vimeo',
      title: 'Yimeo',
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
          title: 'Yimeo',
          subtitle: url,
        }),
      },
    },
  ],
}
