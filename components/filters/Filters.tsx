import classNames from 'classnames/bind';

import ButtonUI from '../ui/Button/ButtonUI'
import Col from '../layout/Col'
import Container from '../layout/Container'
import Label from '../form/Label'
import Row from '../layout/Row'
import Select from '../form/Select'

import styles from './filters.module.scss';

let cx = classNames.bind(styles);

const Filters = ({
    categories, 
    changeCategory, 
    displayFormat, 
    displayFormatClickHandler, 
    activeCategory, 

}) => {
    const categorySelectValues = categories.map(function(category) { 
        const {name, slug} = category.node;
        return {
            label: name,
            value: slug
        }
    });
    return <div className={styles.filters}>
        <FilterGroup width={40}>
            <Label htmlFor="filter-by-category">Filter by category</Label>
            <Select id="filter-by-category" options={[{label: "All", value: "all"}, ...categorySelectValues]} changeHandler={changeCategory} defaultValue={activeCategory} />
        </FilterGroup>
        <FilterGroup width={10}>
            <Label htmlFor="display">Display</Label>
               <div id="display">
                <ButtonUI iconSlug="grid" active={displayFormat === "grid" ? true : false} clickHandler={() => {
                    displayFormatClickHandler("grid");
                }} />
                <ButtonUI iconSlug="list" active={displayFormat === "list" ? true : false} clickHandler={() => {
                    displayFormatClickHandler("list");
                }} />
            </div>
        </FilterGroup>
    </div>
}
const FilterGroup = ({children, width}) => {
    let filterGroupClasses = cx({
        filterGroup: true,
        [`filterGroup__width-${width}`]: width
    });
    return <div className={filterGroupClasses}>
        {children}
    </div>
}
const Bar = ({children}) => {
    return <div className={styles.filterBar}>
        <Container>
            <Row flexWrap="wrap">
                {children}
            </Row>
        </Container>
    </div>
}
Filters.Bar = Bar;
const ByCategories = ({
    categories, 
    activeCategory, 
    handleChange,
    //setActiveCategory
}) => {
    
    const categorySelectValues = categories.map(function(category) { 
        const {name, slug} = category.node;
        return {
            label: name,
            value: slug
        }
    });

    
    return <Col xs={12} sm={4}>
        <Label htmlFor="filter-by-category">Filter by category</Label>
        <Select 
            id="filter-by-category"
            options={[{label: "All", value: "all"}, ...categorySelectValues]} 
            changeHandler={handleChange} 
            defaultValue={activeCategory} 
        />
    </Col>
}
Filters.ByCategories = ByCategories;

const ByDisplayFormat = ({displayFormat, setDisplayFormat}) => {
    return <Col xs={12} sm={2}>
        <Label htmlFor="display">Display</Label>
        <div id="display">
            <ButtonUI 
                iconSlug="grid" 
                active={displayFormat === "grid" ? true : false} 
                clickHandler={() => {
                    setDisplayFormat("grid");
                }} 
            />
            <ButtonUI
                iconSlug="list" 
                active={displayFormat === "list" ? true : false} 
                clickHandler={() => {
                    setDisplayFormat("list");
                }} 
            />
        </div>
    </Col>
}
Filters.ByDisplayFormat = ByDisplayFormat;
export default Filters