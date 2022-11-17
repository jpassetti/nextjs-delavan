import { motion } from "framer-motion";
import styles from './cardgroup.module.scss';

const CardGroup = ({children}) => {
    const variants = {
        show: {
          transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        },
        hidden: {
          transition: { staggerChildren: 0.1, staggerDirection: -1 }
        }
      };
    return <motion.div 
    variants={variants}
    className={styles.cardgroup}
    initial="hidden"
    animate="show"
    >{children}</motion.div>
}
export default CardGroup;