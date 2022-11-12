import Input from './Input'

import styles from './search.module.scss'

const Search = () => {
    return <div className={styles.search}>
        <Input value="Search" onChange={null} />
    </div>
}
export default Search