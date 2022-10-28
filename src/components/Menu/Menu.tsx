import React, { useState } from "react";
import styles from "./Menu.module.css";
import { motion } from "framer-motion";
import { FaWindowClose } from "react-icons/fa";

interface MenuProps {
  setMenuHoverState: (value: React.SetStateAction<boolean>) => void;
}

const Menu: React.FC<MenuProps> = ({ setMenuHoverState }) => {
  const [spinCloseIcon, setspinCloseIcon] = useState<boolean>(false);

  return (
    <motion.div
      animate={{ y: 105, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.2 }}
      className={styles.menuContainer}
    >
      <div
        className={styles.closeModal}
        onClick={() => setMenuHoverState(false)}
        onMouseEnter={() => setspinCloseIcon(true)}
        onMouseLeave={() => setspinCloseIcon(false)}
      >
        <motion.span animate={{ rotate: spinCloseIcon ? 360 : 0 }}>
          <FaWindowClose color="#555" />
        </motion.span>
      </div>
      <ul>
        <li>1Menu</li>
        <li>2Menu</li>
        <li>3Menu</li>
        <li>4Menu</li>
        <li>5Menu</li>
      </ul>
    </motion.div>
  );
};

export default Menu;
