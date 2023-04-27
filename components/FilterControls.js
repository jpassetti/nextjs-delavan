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
import Container from './Container';
import Row from './Row';
import Col from './Col';
import Label from './Label';
import Router from 'next/router';

const FilterControls = ({
    allCreativeTypes,
    activeCreativeType,
    setActiveCreativeType
}) => {
    // const [allCreativeTypesState, setAllCreativeTypesState] = useContext(AllCreativeTypesContext);
    // const [filteredCreativeTypesState, setFilteredCreativeTypesState] = useContext(FilteredCreativeTypesContext);
    // const [activeCreativeTypesState, setActiveCreativeTypesState] = useContext(ActiveCreativeTypesContext);
    // const [allTagsState, setAllTagsState] = useContext(AllTagsContext);
    // const [filteredTagsState, setFilteredTagsState] = useContext(FilteredTagsContext);
    // const [activeTagsState, setActiveTagsState] = useContext(ActiveTagsContext);
    // const [allCategoriesState, setAllCategoriesState] = useContext(AllCategoriesContext);
    // const [filteredCategoriesState, setFilteredCategoriesState] = useContext(FilteredCategoriesContext);
    // const [activeCategoriesState, setActiveCategoriesState] = useContext(ActiveCategoriesContext);
    
    const handleCreativeTypeChange = (e) => {
        const selectedCreativeType = e.target.value;

        if (selectedCreativeType === "all") {
            console.log("WHOOOO");
            setActiveCreativeType({ 
                node: { 
                    name: "All", 
                    slug: "all" 
                }
            });
            Router.push(`/creatives`);
        } else {
            const selectedCreativeTypeObject = allCreativeTypes.filter((creativeType) => {
                return creativeType.node.slug === selectedCreativeType;
            });
            setActiveCreativeType(selectedCreativeTypeObject);
            Router.push(`/creatives/${selectedCreativeType}`);
        }
    }

    return (
      <div className={styles.filterControlsContainer}>
        <Container>
            <Row>
                <Col xs={12} sm={3}>
                    <Label>Creative Types:</Label>
                   <Select 
                        options={[{"label" : "All", "value" : "all"}, ...convertTaxonomyToSelectOptions(allCreativeTypes)]} 
                        changeHandler={handleCreativeTypeChange} 
                        defaultValue={{value: activeCreativeType.node.slug}}
                    />
                </Col>
            </Row>
        </Container>
      </div>
    );
  }
  export default FilterControls;