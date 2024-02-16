const CONFIG = {
  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2021-09-21', // Site creation date, used to calculate the number of days the website has been running

  // Top notification bar scrolling content on the homepage, leave empty if not needed []
  HEO_NOTICE_BAR: [
    { title: 'Welcome to my blog', url: 'https://blog.tangly1024.com' },
    { title: 'Visit the documentation center for more help', url: 'https://docs.tangly1024.com' }
  ],

  // Reverse position of components on the left and right side of the hero area
  HEO_HERO_REVERSE: false,
  // Reverse position of components on the left and right side of the blog main area
  HEO_HERO_BODY_REVERSE: false,

  // Hero area (top big card on the homepage)
  HEO_HERO_TITLE_1: 'Share Programming',
  HEO_HERO_TITLE_2: 'and Cognitive Thinking',
  HEO_HERO_TITLE_3: 'TANGLY1024.COM',
  HEO_HERO_TITLE_4: 'New Version Online',
  HEO_HERO_TITLE_5: 'NotionNext4.0 Easy Customization Theme',
  HEO_HERO_TITLE_LINK: 'https://tangly1024.com',

  // Display three featured categories in the hero area
  HEO_HERO_CATEGORY_1: { title: 'Must-Read Selection', url: '/tag/must-read-selection' },
  HEO_HERO_CATEGORY_2: { title: 'Popular Articles', url: '/tag/popular-articles' },
  HEO_HERO_CATEGORY_3: { title: 'Practical Tutorials', url: '/tag/practical-tutorials' },

  // Recommended article tags on the right side of the hero area, e.g. [Recommended], up to six articles; leave blank '' to recommend the most recently updated articles
  HEO_HERO_RECOMMEND_POST_TAG: 'Recommended',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // Sort recommended articles, when `true` will force sort by last modified time
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // Image on the right side of the hero area

  // Welcome greetings on the right side profile card, click to switch automatically
  HEO_INFOCARD_GREETINGS: [
    'Hello! I am',
    '🔍 Sharing and helping',
    '🤝 Specializing in interaction and design',
    '🏃 Down-to-earth action-oriented',
    '🏠 Smart home enthusiast',
    '🤖️ Digital technology lover',
    '🧱 Team group engine'
  ],
  HEO_INFO_CARD_URL: 'https://github.com/tangly1024/NotionNext', // Link at the bottom of the profile

  // User skill icons
  HEO_GROUP_ICONS: [
    {
      title_1: 'AfterEffect',
      img_1: '/images/heo/20239df3f66615b532ce571eac6d14ff21cf072602.webp',
      color_1: '#989bf8',
      title_2: 'Sketch',
      img_2: '/images/heo/2023e0ded7b724a39f12d59c3dc8fbdc7cbe074202.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'Docker',
      img_1: '/images/heo/20231108a540b2862d26f8850172e4ea58ed075102.webp',
      color_1: '#57b6e6',
      title_2: 'Photoshop',
      img_2: '/images/heo/2023e4058a91608ea41751c4f102b131f267075902.webp',
      color_2: '#4082c3'
    },
    {
      title_1: 'FinalCutPro',
      img_1: '/images/heo/20233e777652412247dd57fd9b48cf997c01070702.webp',
      color_1: '#ffffff',
      title_2: 'Python',
      img_2: '/images/heo/20235c0731cd4c0c95fc136a8db961fdf963071502.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'Swift',
      img_1: '/images/heo/202328bbee0b314297917b327df4a704db5c072402.webp',
      color_1: '#eb6840',
      title_2: 'Principle',
      img_2: '/images/heo/2023f76570d2770c8e84801f7e107cd911b5073202.webp',
      color_2: '#8f55ba'
    },
    {
      title_1: 'Illustrator',
      img_1: '/images/heo/20237359d71b45ab77829cee5972e36f8c30073902.webp',
      color_1: '#f29e39',
      title_2: 'CSS3',
      img_2: '/images/heo/20237c548846044a20dad68a13c0f0e1502f074602.webp',
      color_2: '#2c51db'
    },
    {
      title_1: 'JS',
      img_1: '/images/heo/2023786e7fc488f453d5fb2be760c96185c0075502.webp',
      color_1: '#f7cb4f',
      title_2: 'HTML',
      img_2: '/images/heo/202372b4d760fd8a497d442140c295655426070302.webp',
      color_2: '#e9572b'
    },
    {
      title_1: 'Git',
      img_1: '/images/heo/2023ffa5707c4e25b6beb3e6a3d286ede4c6071102.webp',
      color_1: '#df5b40',
      title_2: 'Rhino',
      img_2: '/images/heo/20231ca53fa0b09a3ff1df89acd7515e9516173302.webp',
      color_2: '#1f1f1f'
    }
  ],

  HEO_SOCIAL_CARD: true, // Whether to display the button on the right side to join the community
  HEO_SOCIAL_CARD_TITLE_1: 'Communication Channel',
  HEO_SOCIAL_CARD_TITLE_2: 'Join our community for discussion and sharing',
  HEO_SOCIAL_CARD_TITLE_3: 'Click to join the community',
  HEO_SOCIAL_CARD_URL: 'https://api.whatsapp.com/send/?phone=971506189848&text&type=phone_number&app_absent=0',

  // *****  The following configurations are invalid, just reserved for development ****
  // Menu configuration
  HEO_MENU_INDEX: true, // Display homepage
  HEO_MENU_CATEGORY: true, // Display categories
  HEO_MENU_TAG: true, // Display tags
  HEO_MENU_ARCHIVE: true, // Display archives
  HEO_MENU_SEARCH: true, // Display search

  HEO_POST_LIST_COVER: true, // Show article cover in the list
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // Enlarge on mouse hover in the list

  HEO_POST_LIST_COVER_DEFAULT: true, // Use site background as default cover when cover is empty
  HEO_POST_LIST_SUMMARY: true, // Article summary
  HEO_POST_LIST_PREVIEW: false, // Read article preview
  HEO_POST_LIST_IMG_CROSSOVER: true, // Blog list images crossover left and right

  HEO_ARTICLE_ADJACENT: true, // Show recommended previous and next articles
  HEO_ARTICLE_COPYRIGHT: true, // Show article copyright statement
  HEO_ARTICLE_RECOMMEND: true, // Associated recommended articles for articles

  HEO_WIDGET_LATEST_POSTS: true, // Show latest articles card
  HEO_WIDGET_ANALYTICS: false, // Show statistics card
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // Jump to comment section
  HEO_WIDGET_DARK_MODE: true, // Dark mode
  HEO_WIDGET_TOC: true // Floating directory on mobile
}
export default CONFIG
