import { IconButton } from "@mui/material";
import styles from "./HeaderButtons.module.scss";

const HeaderButtons = () => (
  <div className={styles.headerButtonsContainer}>
    <IconButton
      className={`${styles.circleButton} ${styles.redButton}`}
      size="small"
    />
    <IconButton
      className={`${styles.circleButton} ${styles.yellowButton}`}
      size="small"
    />
    <IconButton
      className={`${styles.circleButton} ${styles.greenButton}`}
      size="small"
    />
  </div>
);

export default HeaderButtons;
