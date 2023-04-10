import styles from './grid.module.scss'

const Grid = ({children}) => {
    return <section className={styles.grid}>
      {children}
    </section>
}
export default Grid;