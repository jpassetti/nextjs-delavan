import Container from "./Container";
import DisplayPosts from "./DisplayPosts";

const DisplayItemsByCategory = ({categories}) => {
    return <Container>
    {categories.length > 0 && categories.map((category, index) => {
        const { name, slug, creatives, creativeTypeInformation } = category.node;
        return creatives.edges.length > 0 && <DisplayPosts
            key={index}
            sectionTitle={name}
            displayFormat="grid"
            posts={creatives.edges}
            parentSlug="creatives/details"
            displayCategory={false}
            categorySlug={slug}
            categoryIcon={creativeTypeInformation?.svgIcon}
        />
    })
    }
</Container>
}
export default DisplayItemsByCategory;