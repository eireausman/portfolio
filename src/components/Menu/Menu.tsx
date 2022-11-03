import React, { useState } from "react";
import styles from "./Menu.module.css";
import { motion } from "framer-motion";
import LinkedInLogo from "../../assets/images/linkedIn.png";
import { MdOutlineAlternateEmail, MdCloudDownload } from "react-icons/md";
import { BsArrowUpRightSquareFill } from "react-icons/bs";

interface MenuProps {
  setMenuHoverState: (value: React.SetStateAction<boolean>) => void;
}

const Menu: React.FC<MenuProps> = ({ setMenuHoverState }) => {
  const [spinCloseIcon, setspinCloseIcon] = useState<boolean>(false);

  return (
    <motion.div
      animate={{ y: 85, x: -8, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.2 }}
      className={styles.menuContainer}
    >
      <div
        className={styles.closeModal}
        onClick={() => setMenuHoverState(false)}
        onMouseEnter={() => setspinCloseIcon(true)}
        onMouseLeave={() => setspinCloseIcon(false)}
      >
        <motion.div animate={{ rotate: spinCloseIcon ? 360 : 0 }}>
          <BsArrowUpRightSquareFill color="#555" />
        </motion.div>
      </div>
      <ul>
        <li>
          <img
            src={LinkedInLogo}
            alt="LinkedIn Logo"
            className={styles.dropDownMenuLogos}
          />
          <a
            href="https://www.linkedin.com/in/darrenreilly1/"
            target="_blank"
            rel="noreferrer"
          >
            linkedIn
          </a>
        </li>
        <li>
          <MdOutlineAlternateEmail />
          <a
            href={`mailto:\u0072\u0065\u0069\u006c\u006c\u0079\u0064\u0061\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d`}
          >
            Email
          </a>
        </li>
        {/* <li>
          <MdCloudDownload />
          Resume
        </li> */}
      </ul>
    </motion.div>
  );
};

export default Menu;
