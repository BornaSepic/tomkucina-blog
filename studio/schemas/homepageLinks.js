export default {
  name: 'homepageLinks',
  title: 'Homepage Link',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'url',
      title: 'URL',
      type: 'string'
    },
  ]
}
