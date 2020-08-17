export default {
    name: 'instagram',
    title: 'Instagram',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'link',
            title: 'Link',
            type: 'url'
        }
    ]
}
