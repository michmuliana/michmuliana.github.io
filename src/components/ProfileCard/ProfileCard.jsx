import React from "react";
import { Avatar, Card, CardHeader, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import HeaderButtons from "../HeaderButtons/HeaderButtons";
import SocialLinks from "../SocialLinks/SocialLinks";
import ChangeTextComponent from "../DynamicText/DynamicText";
import { cardSetting, profileSetting } from "../../utils/animationSettings";
import styles from "./ProfileCard.module.scss";
import { PROFILE } from "../../constants";

const ProfileCard = () => (
  <motion.div {...cardSetting}>
    <Card className={styles.cardContainer}>
      <CardHeader className={styles.cardHeader} action={<HeaderButtons />} />
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        className={styles.grid}
      >
        <motion.div {...profileSetting}>
          <Avatar
            src={"./asset/dev-avatar.jpg"}
            alt={PROFILE.name}
            className={styles.avatar}
          />
        </motion.div>
        <motion.div {...profileSetting}>
          <Typography
            variant="h5"
            component="div"
            className={styles.typography}
          >
            {PROFILE.name}
          </Typography>
        </motion.div>
        <motion.div {...profileSetting}>
          <ChangeTextComponent />
        </motion.div>
        <SocialLinks />
      </Grid>
    </Card>
  </motion.div>
);

export default ProfileCard;
