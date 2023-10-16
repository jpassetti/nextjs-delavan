import Link from 'next/link'
import styles from './nav.module.scss'

interface Page {
    slug: string;
    title: string;
  }
  
  interface NavProps {
    location: string;
    pages: Page[];
  }

const Nav: React.FC<NavProps> = ({ location, pages }) => {
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