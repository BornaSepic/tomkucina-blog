// client.js
import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: 'tn1y25f4',
    dataset: 'production',
    useCdn: true
})