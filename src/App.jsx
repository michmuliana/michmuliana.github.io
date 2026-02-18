import React from "react";
import { Grid } from "@mui/material";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import "./App.scss"

function App() {
  const backgroundImage = `linear-gradient(
    rgba(255, 255, 255, 0.4), 
    rgba(255, 255, 255, 0.4)
  ), url(./asset/background-image.jpeg)`;

  return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{
          minHeight: "100vh",
          background: backgroundImage,
          backgroundSize: "cover",
          padding: "50px",
        }}
      >
        <ProfileCard />
      </Grid>
  );
}

export default App;
