import ImageFragment from '../image';

const CreativeFragment = `
    fragment CreativeFragment on Creative {
        id
        title
        slug
        excerpt
        featuredImage {
            node {
                ...ImageFragment
            }
        }
        creativeTypes {
            edges {
                node {
                id
                name
                slug
                }
            }
        }
    }
    ${ImageFragment}
`
export default CreativeFragment;