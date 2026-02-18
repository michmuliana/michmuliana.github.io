import React from "react";
import { IconButton } from "@mui/material";
import { GitHub, LinkedIn, MailOutline, Description } from "@mui/icons-material";
import { motion } from "framer-motion";
import styles from "./SocialLinks.module.scss";
import { socialSetting } from "../../utils/animationSettings";

const links = [
  {
    href: "https://github.com/michmuliana",
    icon: <GitHub className={styles.icon} />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/michellemuliana/",
    icon: <LinkedIn className={styles.icon} />,
    label: "LinkedIn",
  },
  {
    href: "mailto:michmuliana@gmail.com",
    icon: <MailOutline className={styles.icon} />,
    label: "Email",
  },
  {
    href: "./resumes/Michelle_Muliana_Resume.pdf",
    icon: <Description className={styles.icon} />,
    label: "Resume",
  },
];

const SocialLinks = () => (
  <div className={styles.socialLinksContainer}>
    {links.map((link, index) => (
      <motion.div key={index} {...socialSetting}>
        <IconButton
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className={styles.socialButton}
        >
          {link.icon}
        </IconButton>
      </motion.div>
    ))}
  </div>
);

export default SocialLinks;
