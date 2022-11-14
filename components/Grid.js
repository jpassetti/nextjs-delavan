import Card from './Card'

import styles from './grid.module.scss'

const Grid = ({data, parentSlug}) => {
    return <section className={styles.grid}>
        {data.map((item, index) => {
            const {title, slug, featuredImage, excerpt, categories} = item;
            return <Card 
                key={index} 
                title={title} 
                slug={`${parentSlug ? parentSlug : ''}/${slug}`} 
                categoryIds={categories} 
                backgroundImage={featuredImage?.node.sourceUrl}
            />
        })}
    </section>
}
export default Grid;