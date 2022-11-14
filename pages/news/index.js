import { useState } from "react";

import Container from "../../components/Container";
import Filters from "../../components/Filters";
import Grid from '../../components/Grid';
import Layout from "../../components/Layout";
import List from '../../components/List';
import Showcase from "../../components/Showcase";

import { getNews, getNewsCategories } from "../../lib/api";

export async function getStaticProps(context) {
    const newsData = await getNews();
    const newsCategoryData = await getNewsCategories();
    return {
      props: {
        newsData,
        newsCategoryData
      }, // will be passed to the page component as props
    }
  }

const NewsLandingsPage = ({newsData, newsCategoryData}) => {
    const [displayFormat, setDisplayFormat] = useState('list');
    const [activeCategory, setActiveCategory] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredNews = newsData.filter(newsItem => {
        if (newsItem.categories.includes(activeCategory)) {
            return true;
        } else {
            return false;
        }
    });
    return <Layout>
        <Showcase 
            title="News" 
            introduction="This is the introduction to the news landing page"
            backgroundImage="https://picsum.photos/id/102/600/400"
        />
         <Container>
            <Filters 
                categories={newsCategoryData}
                changeCategory={setActiveCategory}
                displayFormat={displayFormat} 
                displayFormatClickHandler={setDisplayFormat} 
            />
            {displayFormat === 'grid' ? 
                <Grid data={filteredNews} parentSlug="news" />
            : displayFormat === 'list' ?
                <List data={filteredNews} parentSlug="news" />
            : 'No format'
            }
        </Container>
    </Layout>
}
export default NewsLandingsPage;