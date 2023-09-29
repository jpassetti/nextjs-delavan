import Card from './Card';
import Grid from './Grid';
import Heading from './Heading';
import Icon from './Icon';
import Section from './Section';

const DisplayPostsWithCategories = ({ posts, categories }) => {
    return categories.map((category, index) => {
        const { name, slug } = category.node;
        return <Section key={index}>
            <Section.Header>
                    <Icon.Accessory iconSlug={slug} />
                    <Heading level={2} color="black" textTransform="uppercase" size="small">{name}</Heading>
            </Section.Header>
            <Grid>
                {posts.map((post, index) => {
                    const {title, slug, featuredImage} = post.node;
                    const formattedSlug = `/creatives/details/${slug}`;
                    return <Card 
                        key={`post${index}`}
                        title={title} 
                        slug={formattedSlug}
                        backgroundImage={featuredImage ? featuredImage.node : null}
                        clickHandler={(e) => {
                            e.preventDefault()
                            featuredImage ? Router.push(formattedSlug) : '';
                        }} 
                    /> 
                })}
            </Grid>
        </Section>
    });
}
export default DisplayPostsWithCategories;