import Link from 'next/link'
import styles from './nav.module.scss'

const Nav = ({location, pages}) => {
    return <nav>
    <ul>
       {pages.map((page, index) => {
             return <li key={index}>
                <Link href={`/${page.slug}`} className={styles.nav__link}>
                    {page.title}
                </Link>
             </li>

       })}
    </ul>
</nav>
}
export default Nav;