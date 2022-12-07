import { useRouter } from 'next/router';
import Card from './Card'
import styles from './grid.module.scss'
import Paragraph from './Paragraph';

// todo: add preferred taxonomy system

const Grid = ({data, parentSlug}) => {
    const router = useRouter();
    return <section className={styles.grid}>
        {data.length > 0 ? data.map((edge, index) => {
            const {title, slug, categories, creativeTypes, featuredImage } = edge.node;
            const formattedSlug = `${parentSlug ? parentSlug : ''}/${slug}`;
            return <Card 
                key={index} 
                title={title} 
                slug={formattedSlug}
                categories={creativeTypes ? creativeTypes : categories} 
                backgroundImage={featuredImage?.node.sourceUrl}
                clickHandler={(e) => {
                    e.preventDefault()
                    router.push(formattedSlug)
                }} 
            />
        }) : <Paragraph>No items in this category.</Paragraph>}
    </section>
}
export default Grid;