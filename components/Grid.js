import styles from './grid.module.scss'
import Card from './Card';
import Router from 'next/router';

const Grid = ({posts}) => {
  return <div className={styles.grid}>
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
  </div>
}
export default Grid;