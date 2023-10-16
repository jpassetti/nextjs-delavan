import React from 'react';
import styles from './tags.module.scss';

interface Tag {
  slug: string;
  name: string;
}

interface TagsProps {
  tags: Tag[];
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <ul className={styles.tags}>
      {tags.map((tag, index) => {
        const { slug, name } = tag;
        return (
          <li key={index} className={styles.tag}>
            {name}
          </li>
        );
      })}
    </ul>
  );
};

export default Tags;