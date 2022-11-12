import ButtonUI from './ButtonUI';
import Label from './Label'
import Select from './Select'
import Search from './Search'
import styles from './filters.module.scss';

const Filters = ({categories, changeCategory, displayFormat, displayFormatClickHandler}) => {
    const categorySelectValues = categories.map(function(category) { 
        return {
            label: category.name,
            value: category.id
        }
    });
    return <div className={styles.filters}>
        <div className={styles.filtersLeft}>
            <Label>Filters</Label>
            <Select items={categorySelectValues} changeHandler={changeCategory} />
            <Search />
        </div>
        <div className={styles.filtersRight}>
            <ButtonUI icon="grid" active={displayFormat === "grid" ? true : false} clickHandler={() => {
                displayFormatClickHandler("grid");
            }} />
            <ButtonUI icon="list" active={displayFormat === "list" ? true : false} clickHandler={() => {
                displayFormatClickHandler("list");
            }} />
        </div>
    </div>
}
export default Filters