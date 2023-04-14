import Router from 'next/router';
import Card from './Card';
import Grid from './Grid';

const DisplayItems = ({items, parentSlug}) => {
    return (
        <Grid>
        {items.map((item, index) => {
            const {title, slug, featuredImage, creativeTypes, categories} = item.node;
            const formattedSlug = `/creatives/details/${slug}`;
            return <Card 
            key={index} 
            title={title} 
            slug={formattedSlug}
            //categorySlug={categorySlug}
            //categories={creativeTypes ? creativeTypes : categories} 
            backgroundImage={featuredImage?.node.sourceUrl}
            clickHandler={(e) => {
                e.preventDefault()
                Router.push(formattedSlug)
            }} 
        /> 
        })}
        </Grid>
    );
}
export default DisplayItems;