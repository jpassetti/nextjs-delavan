const ImageFragment = `
    fragment ImageFragment on MediaItem {
        sourceUrl(size: LARGE)
        altText
        mediaDetails {
            width
            height
        }
        sizes
    }
`
export default ImageFragment;