//packages
import { motion, AnimatePresence } from "framer-motion"
import classNames from 'classnames/bind'

// components
import ButtonUI from '../../ui/Button/ButtonUI';

// styles
import styles from './overlay.module.scss';
let cx = classNames.bind(styles);

const Overlay = ({children, closeHandler, isOverlayActive, slug}) => {
    let overlayClasses = cx({
        overlay: true,
        [`bg-${slug}`]: slug
    });
    const overlayVariants = {
        show: {
          y: 0,
          //opacity: 1,
          transition: {
           // x: { stiffness: 1000, velocity: -100 },
            duration: .5
          }
        },
        hidden: {
          y: "-100vh",
          //opacity: 0,
          transition: {
            duration: .5
            //x: { stiffness: 1000 }
          }
        },
        exit: {
            y: "-100vh",
           // opacity: 0,
            transition: {
                delay: .6,
                duration: .5
                //x: { stiffness: 1000 }
            }
        }
      };

    return <AnimatePresence>
        {isOverlayActive && <motion.div 
        key={`modal-${slug}`} 
        className={overlayClasses}
        initial="hidden"
        animate="show"
        exit="exit"
        variants={overlayVariants}
        >
        <div>
            <ButtonUI clickHandler={closeHandler} iconSlug="close" iconColor={slug === "menu" ? "white" : "blue"} active={true} />
            {children}
        </div>
       
    </motion.div> 
    }
    </AnimatePresence>
}
export default Overlay;