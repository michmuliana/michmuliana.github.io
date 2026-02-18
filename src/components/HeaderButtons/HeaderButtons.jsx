import React from "react";
import { IconButton } from "@mui/material";
import styles from "./HeaderButtons.module.scss";

const HeaderButtons = () => (
  <div className={styles.headerButtonsContainer}>
    <IconButton
      className={styles.circleButton}
      sx={{
        backgroundColor: "#F66058",
        ":hover": { backgroundColor: "#F66058" },
      }}
      size="small"
    />
    <IconButton
      className={styles.circleButton}
      sx={{
        backgroundColor: "#FBBD2E",
        ":hover": { backgroundColor: "#FBBD2E" },
      }}
      size="small"
    />
    <IconButton
      className={styles.circleButton}
      sx={{
        backgroundColor: "#45CA40",
        ":hover": { backgroundColor: "#45CA40" },
      }}
      size="small"
    />
  </div>
);

export default HeaderButtons;