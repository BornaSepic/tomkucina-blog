export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'categoryImage',
      title: 'Catergory image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    }
  ]
}
