import Button from '../../ui/Button';
import Col from '../../layout/Col';
import Heading from '../../typography/Heading';
import Image from 'next/image';
import Link from 'next/link';
import Paragraph from '../../typography/Paragraph';
import Row from '../../layout/Row';

import styles from './list.module.scss'

interface ListProps {
    data: Array<any>;
    parentSlug?: string;
}

const List: React.FC<ListProps> = ({ data, parentSlug }) => {
    return <section className={styles.list}>
        {data.map((edge, index) => {
            const {title, excerpt, featuredImage, slug} = edge.node;
            return <article key={index} className={styles.listArticleItem}>
                <Row alignItems="center">
                    {featuredImage && <Col md={3} marginBottom={2}>
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
                    {title && <Col md={7} marginBottom={2}>
                        <Heading level={3} color="black" marginBottom={1}><Link href={`${parentSlug ? parentSlug : ''}/${slug}`}>
                            {title}
                        </Link></Heading>
                        {excerpt && <Paragraph>{excerpt}</Paragraph>}
                    </Col>}
                    <Col md={1} marginBottom={2}>
                        <Button backgroundColor="photography" iconAfter="angle-right" url={`${parentSlug ? parentSlug : ''}/${slug}`} />
                    </Col>
               </Row>
            </article>
        })}
    </section>
}
export default List;