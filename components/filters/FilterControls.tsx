import React, { ChangeEvent } from 'react';
import Router from 'next/router';

import Select from '../form/Select';
import styles from './filtercontrols.module.scss';
import ButtonToggle from '../ui/Button/ButtonToggle';
import ButtonGroup from '../ui/Button/ButtonGroup';
import Container from '../layout/Container';
import Row from '../layout/Row';
import Col from '../layout/Col';
import Label from '../form/Label';

import { convertTaxonomyToSelectOptions } from '../../lib/utilities';

interface CreativeType {
  node?: {
    name?: string;
    slug?: string;
  };
}

interface Tag {
  node: {
    slug: string;
    name: string;
  };
}

interface FilterControlsProps {
  allCreativeTypes: CreativeType[];
  filteredTags: Tag[] | undefined;
  activeTags: Tag[];
  setActiveTags: (tags: Tag[]) => void;
  activeCreativeType: CreativeType;
  setActiveCreativeType: (creativeType: CreativeType) => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  allCreativeTypes,
  filteredTags,
  activeTags,
  setActiveTags,
  activeCreativeType,
  setActiveCreativeType,
}) => {
  const handleCreativeTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedCreativeType = e.target.value;

    if (selectedCreativeType === "all") {
      Router.push(`/creatives`);
    } else {
      const selectedCreativeTypeObject = allCreativeTypes.find((creativeType) => {
        return creativeType.node.slug === selectedCreativeType;
      });

      if (selectedCreativeTypeObject) {
        setActiveCreativeType(selectedCreativeTypeObject);
        Router.push(`/creatives/${selectedCreativeType}`);
      }
    }
  };

  const handleTagChange = (tag: Tag) => {
    if (tag.node.slug === "all") {
      setActiveTags([
        {
          node: {
            name: "All",
            slug: "all",
          },
        },
      ]);
      if (Router.pathname !== '/creatives') {
        // If the user is on a deeper page, e.g., /creatives/photography, push the homepage URL to the router
        Router.push('/creatives');
      }
      return;
    } else {
      // remove "all"
      const activeTagsWithoutAll = activeTags.filter((activeTag) => {
        return activeTag.node.slug !== "all";
      });

      // if the tag is already active, remove it
      if (
        activeTagsWithoutAll.findIndex(
          (activeTag) => activeTag.node.slug === tag.node.slug
        ) !== -1
      ) {
        const filteredTags = activeTagsWithoutAll.filter((activeTag) => {
          return activeTag.node.slug !== tag.node.slug;
        });

        // after filtering, if there are no tags left, add "all" back
        if (filteredTags.length === 0) {
          setActiveTags([
            {
              node: {
                name: "All",
                slug: "all",
              },
            },
          ]);
        } else {
          // otherwise, set the filtered tags
          setActiveTags(filteredTags);
        }
      } else {
        // otherwise, add the tag
        setActiveTags([...activeTagsWithoutAll, tag]);
      }
    }
  };

  return (
    <div className={styles.filterControlsContainer}>
      <Container>
        <Row>
          <Col xs={12} sm={3}>
            <Label htmlFor="filter-by-type">Filter by type</Label>
            <Select
                id="filter-by-type"
                options={[
                { label: "All", value: "all" },
                ...convertTaxonomyToSelectOptions(allCreativeTypes),
                ]}
              changeHandler={handleCreativeTypeChange}
              selectedValue={{ 
                value: activeCreativeType.node.slug,
                label: activeCreativeType.node.name
              }}
            />
          </Col>
          <Col xs={12} sm={9}>
            <Label htmlFor="filter-by-tag">Filter by tag</Label>
            <ButtonGroup>
              {filteredTags?.map((tag, index) => {
                return (
                  <ButtonToggle
                    isActive={activeTags.some((activeTag) => {
                      return activeTag.node.slug === tag.node.slug;
                    })}
                    clickHandler={() => {
                      handleTagChange(tag);
                    }}
                    key={index}
                    label={tag.node.name}
                    size="small"
                  />
                );
              })}
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FilterControls;