const ImageFragment = `
    fragment ImageFragment on MediaItem {
        id
        sourceUrl
        altText
        mediaDetails {
            width
            height
        } 
    }
`
export default ImageFragment;