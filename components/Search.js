import { Fragment } from 'react';
import Icon from './Icon'
import Input from './Input';
import Span from './Span';
import styles from './Search.module.scss';

const Search = ({children}) =>{
    return <Fragment>{children}</Fragment>
}
const Form = ({searchQuery, setSearchQuery, handleSearchFormSubmit}) => {
    return <div className={styles.searchBox}>
        <Span position="absolute"><Icon icon="search" /></Span>
        
        <form onSubmit={handleSearchFormSubmit} className={styles.searchForm}>
         <Input 
            type="search"
            value={searchQuery} 
            placeholder="Search..." 
            onChange={(e) => {
                setSearchQuery(e.target.value);
            }} 
        />
    </form></div>
}
Search.Form = Form;
export default Search;