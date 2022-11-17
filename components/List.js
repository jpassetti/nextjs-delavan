import Col from './Col';
import Heading from './Heading';
import Image from 'next/image';
import Link from 'next/link';
import Paragraph from './Paragraph';
import Row from './Row';

import styles from './list.module.scss'

const List = ({data, parentSlug}) => {
    return <section className={styles.list}>
        {data.map((edge, index) => {
            const {title, excerpt, featuredImage, slug} = edge.node;
            return <article key={index} className={styles.listArticleItem}>
                <Row alignItems="center">
                    {featuredImage && <Col md="3" marginBottom="0">
                        <Link href={`/${parentSlug ? parentSlug : ''}/${slug}`}>
                            <Image 
                                src={featuredImage.node.sourceUrl} 
                                alt={featuredImage.node.altText} 
                                width={600}
                                height={400}
                                className="responsive-img"
                            />
                        </Link>
                    </Col>}
                    {title && <Col md="3" marginBottom="0">
                        <Heading level="3" color="black"><Link href={`${parentSlug ? parentSlug : ''}/${slug}`}>
                            {title}
                        </Link></Heading>
                    </Col>}
                    {excerpt && <Col md="6" marginBottom="0">
                        <Paragraph>{excerpt}</Paragraph>
                    </Col>}
               </Row>
            </article>
        })}
    </section>
}
export default List;