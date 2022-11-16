import { useRouter } from 'next/router';
import Card from './Card'
import styles from './grid.module.scss'

const Grid = ({data, parentSlug}) => {
    const router = useRouter();
    return <section className={styles.grid}>
        {data.map((item, index) => {
            const {title, slug, featuredImage, excerpt, categories} = item;
            const formattedSlug = `${parentSlug ? parentSlug : ''}/${slug}`;
            return <Card 
                key={index} 
                title={title} 
                slug={formattedSlug} 
                categoryIds={categories} 
                backgroundImage={featuredImage?.node.sourceUrl}
                clickHandler={(e) => {
                    e.preventDefault()
                    router.push(formattedSlug)
                }} 
            />
        })}
    </section>
}
export default Grid;