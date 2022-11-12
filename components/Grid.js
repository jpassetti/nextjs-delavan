import Card from './Card'

import styles from './grid.module.scss'

const Grid = ({data}) => {
    return <div className={styles.grid}>
        {data.map((item, index) => {
            const {title, categories} = item;
            return <Card key={index} title={item.title} categoryIds={categories} />
        })}
    </div>
}
export default Grid;