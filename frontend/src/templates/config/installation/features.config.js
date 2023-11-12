module.exports = {
  embeddedVideo: {
    initialDimensions: {
      width: 560, // In pixels.
      height: 315, // In pixels.
    },
  },
  headerBar: {
    hideLogin: false,
    hideRegister: false,
  },
  sideBar: {
    hideHomeLink: false,
    hideTagsLink: false,
    hideCategoriesLink: false,
  },
  media: {
    actions: {
      share: true,
      report: false,
      like: false,
      dislike: false,
      download: true,
      comment: false,
      save: true,
    },
    shareOptions: [
      'embed',
      'email',
    ],
  },
  mediaItem: {
    hideDate: false,
    hideViews: false,
    hideAuthor: true,
  },
  playlists: {
    mediaTypes: ['audio', 'video'],
  },
};
