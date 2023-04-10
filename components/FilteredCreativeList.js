import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from "framer-motion"

import Button from './Button';
import ButtonUI from './ButtonUI';
import DisplayItems from './DisplayItems';
import Overlay from './Overlay';
import styles from './filters.module.scss';
import Container from './Container';
import Row from './Row';
import Col from './Col';
import Label from './Label';

// Higher-order component to filter a list of items
const withFilter = (WrappedComponent) => {
  return function FilteredComponent({ creatives, creativeTypes, initialCreativeType = 'all', initialTagSlug = 'all' }) {
    const router = useRouter();
    const [filter, setFilter] = useState(initialCreativeType);


    // Method to update filter state
    const updateFilter = (newFilter) => {
      setFilter(newFilter);
      if (newFilter === 'all') {
        // don't add /add to the url
        router.push(`/creatives`, undefined, { shallow: false });
      } else {
        router.push(`/creatives/${newFilter}`, undefined, { shallow: false });
      }
    };

    // Filter items based on current filter state
    const filteredCreatives = creatives.filter((creative) => {
      const { node } = creative;
      const { creativeTypes } = node;
      return filter === 'all' || creativeTypes.edges.find((edge) => edge.node.slug === filter);
    });

    // Pass filtered items and filter update method to WrappedComponent
    return <WrappedComponent
      creatives={filteredCreatives}
      creativeTypes={creativeTypes}
      updateFilter={updateFilter}
      initialCreativeType={initialCreativeType}
      initialTagSlug={initialTagSlug}
    />;
  };
};

// Component to display a list of items
const CreativeList = ({ creatives, creativeTypes, updateFilter, initialCreativeType, initialTagSlug }) => {

  // state to show/hide the category picker
  const [areCategoriesExposed, setCategoriesExposed] = useState(false);

  // state to hold the list of tags
  const [filteredTags, setFilteredTags] = useState(() => {
    const allTags = creatives.reduce((accumulativeArray, creative) => {
      creative.node.tags.edges.forEach((tag) => {
        if (!accumulativeArray.find((t) => t.node.slug === tag.node.slug)) {
          accumulativeArray.push(tag);
        }
      });
      return accumulativeArray;
    }, []);
    allTags.unshift({ node: { name: "All", slug: "all" } });
    return allTags;
  });

  // state to hold the list of active tags
  const [activeTags, setActiveTags] = useState(() => {
    // return filteredTags.find((tag) => tag.node.slug === initialTagSlug);  
    return [filteredTags.find((tag) => tag.node.slug === initialTagSlug)];
  });

  // state to hold the list of creatives that match the active category and tags
  const [filteredCreatives, setFilteredCreatives] = useState(() => {
    return creatives;
  });

  useEffect(() => {
    // Filter artists based on active tags
    // If "All" tag is active, show all artists
    if (activeTags.some((tag) => tag.node.slug === "all")) {
      setFilteredCreatives(creatives);
    } else {
      // Filter artists based on active tags
      const filtered = creatives.filter((creative) => {
        return creative.node.tags.edges.some((tag) => {
          return activeTags.some((t) => t.node.slug === tag.node.slug);
        });
      });
      setFilteredCreatives(filtered);
    }
  }, [activeTags, creatives]);


  const handleTagClick = (tag) => {
    // Check if tag is already active
    let updatedTags = [];
    if (tag.node.slug === "all") {
      updatedTags = [tag];
    } else {
      // clone the array
      updatedTags = [...activeTags];

      // remove `all` tag if it exists
      updatedTags = activeTags.filter((t) => t.node.slug !== "all");

      // if the tag is not already active, add it
      if (!updatedTags.some((t) => t.node.slug === tag.node.slug)) {
        updatedTags.push(tag);
      } else {
        // if the tag is already active, remove it
        updatedTags = updatedTags.filter((t) => t.node.slug !== tag.node.slug);
      }
      // Add "All" tag if no other tags are active
      if (updatedTags.length === 0 || (updatedTags.length === 1 && updatedTags.some((t) => t.node.slug === "all"))) {
        updatedTags = [{ node: { slug: "all" } }];
      }
    }
    setActiveTags(updatedTags);
  };

  const filterRowVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: .6,
        staggerChildren: .15
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: .5
      }
    }
  }

  const optionAll = { node: { name: "All", slug: "all" } };
  const filterOptions = [optionAll, ...creativeTypes].map((option) => {
    const { node } = option;
    const { name, slug } = node;
    return <Button.Toggle
      key={slug}
      clickHandler={() => {
        updateFilter(slug);
        setCategoriesExposed(false);
      }}
      label={name}
      withMotion
      isActive={slug === initialCreativeType ? true : false}
    />
  });

  

  return (
    <section>
      <div className={styles.filterBar}>
        <Container>
          {areCategoriesExposed ?
            <Row alignItems="center">
              <Col xs={12} marginBottom={1}>
                <Label>
                  Categories
                </Label>
              </Col>
              <Col xs={12} marginBottom={0}>
                <motion.div
                  variants={filterRowVariants}
                  className={styles.filterRow}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  {filterOptions}
                </motion.div>
              </Col>
              <ButtonUI
                iconSlug="close"
                color="black"
                clickHandler={() => {
                  setCategoriesExposed(false);
                }}
              />
            </Row>
            :
            <Row alignItems="center">
              <Col xs={12} md={1} marginBottom={0}>
                <Label>
                  Filters
                </Label>
              </Col>
              <Col xs={12} md={11} marginBottom={0}>
                <Button.AsSelectMenu
                  fontColor="navy"
                  iconAfter="angle-down"
                  iconColor="blue"
                  clickHandler={() => {
                    setCategoriesExposed(!areCategoriesExposed);
                  }}
                  label="Pick a category"
                />
              </Col>
            </Row>
          }
        </Container>
      </div>
      <div className={styles.tagBar}>
        <Container>
          <Row alignItems="center">
            <Col xs={12} marginBottom={1}>
              <Label>
                Tags
              </Label>
            </Col>
            <Col xs={12} marginBottom={0}>
              <div className={styles.tagRow}>
                {filteredTags.length > 0 && filteredTags.map((tag) => {
                  const { node } = tag;
                  const { name, slug } = node;
                  return <Button.Toggle
                    key={slug}
                    clickHandler={() => {
                      handleTagClick(tag);
                    }}
                    label={name}
                    isActive={activeTags.find((t) => t.node.slug === slug)}
                    size="small"
                  />
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <DisplayItems items={filteredCreatives} parentSlug={initialCreativeType} />
      </Container>
    </section>
  );
};

const FilteredCreativeList = withFilter(CreativeList);
export default FilteredCreativeList;