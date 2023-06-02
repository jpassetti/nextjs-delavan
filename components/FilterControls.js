import { useContext } from 'react';
import { 
    AllCreativeTypesContext,
    FilteredCreativeTypesContext,
    ActiveCreativeTypesContext,
    AllTagsContext,
    FilteredTagsContext,
    ActiveTagsContext,
    AllCategoriesContext,
    FilteredCategoriesContext,
    ActiveCategoriesContext
} from '../lib/context';

import { convertTaxonomyToSelectOptions } from '../lib/utilities';

import Select from './Select';
import styles from './filtercontrols.module.scss';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import Container from './Container';
import Row from './Row';
import Col from './Col';
import Label from './Label';
import Router from 'next/router';

const FilterControls = ({
    allCreativeTypes,
    filteredTags,
    activeTags,
    setActiveTags,
    activeCreativeType,
    setActiveCreativeType
}) => {
    const handleCreativeTypeChange = (e) => {
        const selectedCreativeType = e.target.value;

        if (selectedCreativeType === "all") {
            //console.log("WHOOOO");
            // setActiveCreativeType({ 
            //     node: { 
            //         name: "All", 
            //         slug: "all" 
            //     }
            // });
            // setActiveTags([{
            //     node: {
            //         name: "All",
            //         slug: "all"
            //     }
            // }]);
            Router.push(`/creatives`);
        } else {
            const selectedCreativeTypeObject = allCreativeTypes.filter((creativeType) => {
                return creativeType.node.slug === selectedCreativeType;
            });
            // setActiveCreativeType(selectedCreativeTypeObject);
            // setActiveTags([{
            //     node: {
            //         name: "All",
            //         slug: "all"
            //     }
            // }]);
            Router.push(`/creatives/${selectedCreativeType}`);
        }
    }
    /*
    const handleTagChange = (tag) => {
        if (tag.node.slug === "all") {

            setActiveTags([{
                node: {
                    name: "All",
                    slug: "all"
                }
            }]);
            if (Router.pathname !== '/creatives') {
                // If the user is on a deeper page, e.g. /creatives/photography, push the homepage URL to the router
                Router.push('/creatives');
            }
            
        } else {
            //remove the "all" tag from active tags
            let newActiveTags = [];

            const tagIndex = activeTags.findIndex(activeTag => {
                return activeTag.node.slug === tag.node.slug;
            });

            if (tagIndex > -1) {
                newActiveTags = activeTags.filter(activeTag => {
                    return (activeTag.node.slug !== "all") && (activeTag.node.slug !== tag.node.slug);
                });
                setActiveTags(newActiveTags);
            } else {
                newActiveTags = activeTags.filter(activeTag => {
                    return activeTag.node.slug !== "all";
                });
                setActiveTags([...activeTags, tag]);
            }
        }
    }*/

    const handleTagChange = (tag) => {
        if (tag.node.slug === "all") {
            setActiveTags([{
                node: {
                    name: "All",
                    slug: "all"
                }
            }]);
            if (Router.pathname !== '/creatives') {
                // If the user is on a deeper page, e.g. /creatives/photography, push the homepage URL to the router
                Router.push('/creatives');
            }
            return;
        } else {
            // remove "all"
            const activeTagsWithoutAll = activeTags.filter(activeTag => {
                return activeTag.node.slug !== "all";
            });
           
            // if the tag is already active, remove it
            if (activeTagsWithoutAll.findIndex((activeTag) => activeTag.node.slug === tag.node.slug) !== -1) {
                const filteredTags = activeTagsWithoutAll.filter((activeTag) => activeTag.node.slug !== tag.node.slug);
                
                // after filtering, if there are no tags left, add "all" back
                if (filteredTags.length === 0) {
                    setActiveTags([{
                        node: {
                            name: "All",
                            slug: "all"
                        }
                    }]);
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
                    <Label>Filter by type</Label>
                    <Select 
                        options={[{"label" : "All", "value" : "all"}, ...convertTaxonomyToSelectOptions(allCreativeTypes)]} 
                        changeHandler={handleCreativeTypeChange} 
                        defaultValue={{value: activeCreativeType.node.slug}}
                    />
                </Col>
                <Col xs={12} sm={9}>
                    <Label>Filter by tag</Label>
                    <ButtonGroup>
                        {
                            filteredTags?.map((tag, index) => {
                                return <Button.Toggle 
                                    isActive={activeTags.some(activeTag => {
                                        return activeTag.node.slug === tag.node.slug;
                                    })}
                                    clickHandler={() => {
                                        handleTagChange(tag);
                                    }}
                                    key={index} 
                                    label={tag.node.name} 
                                    size="small" 
                                />
                            })
                        }
                       
                    </ButtonGroup>
                </Col>
            </Row>
        </Container>
      </div>
    );
  }
  export default FilterControls;