export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'mainImage',
      title: 'Hero image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'newsletterImage',
      title: 'Newsletter image',
      type: 'image'
    },
    {
      name: 'allPostsImage',
      title: 'All posts image',
      type: 'image'
    }
  ]
}
