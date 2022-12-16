import classNames from 'classnames/bind';

import ButtonUI from './ButtonUI'
import Col from './Col'
import Container from './Container'
import Label from './Label'
import Row from './Row'
import Select from './Select'
import styles from './Filters.module.scss';
import Search from './Search';

let cx = classNames.bind(styles);

const Filters = ({
    categories, 
    changeCategory, 
    displayFormat, 
    displayFormatClickHandler, 
    activeCategory, 
    searchQuery,
    setSearchQuery,
    handleSearchFormSubmit,

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
            <Label>Filter by category</Label>
            <Select options={[{label: "All", value: "all"}, ...categorySelectValues]} changeHandler={changeCategory} value={activeCategory} />
        </FilterGroup>
        <FilterGroup width={50}>
            <Label>Search</Label>
            <Search.Form 
                searchQuery={searchQuery}
                searchQueryChangeHandler={searchQueryChangeHandler}
                handleSearchFormSubmit={handleSearchFormSubmit}
            />
        </FilterGroup>
        <FilterGroup width={10}>
            <Label>Display</Label>
            <div>
                <ButtonUI icon="grid" active={displayFormat === "grid" ? true : false} clickHandler={() => {
                    displayFormatClickHandler("grid");
                }} />
                <ButtonUI icon="list" active={displayFormat === "list" ? true : false} clickHandler={() => {
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
const ByCategories = ({categories, activeCategory, setActiveCategory}) => {
    const categorySelectValues = categories.map(function(category) { 
        const {name, slug} = category.node;
        return {
            label: name,
            value: slug
        }
    });
    return <Col xs="12" sm="4">
        <Label>Filter by category</Label>
        <Select 
            options={[{label: "All", value: "all"}, ...categorySelectValues]} 
            changeHandler={setActiveCategory} 
            value={activeCategory} 
        />
    </Col>
}
Filters.ByCategories = ByCategories;
const BySearch = ({searchQuery, setSearchQuery, handleSearchFormSubmit}) => {
    return <Col xs="12" sm="6">
        <Label>Search</Label>
        <Search.Form 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleSearchFormSubmit={handleSearchFormSubmit}
        />
    </Col>
}
Filters.BySearch = BySearch;
const ByDisplayFormat = ({displayFormat, setDisplayFormat}) => {
    return <Col xs="12" sm="2">
        <Label>Display</Label>
        <div>
            <ButtonUI 
                icon="grid" 
                active={displayFormat === "grid" ? true : false} 
                clickHandler={() => {
                    setDisplayFormat("grid");
                }} 
            />
            <ButtonUI
                icon="list" 
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