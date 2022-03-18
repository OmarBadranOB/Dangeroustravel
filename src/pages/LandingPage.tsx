import { Box, Typography } from "@mui/material";
import React from "react";
import NavigationAppBar from "../components/DefaultPageLayout";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div>
      <NavigationAppBar />
      <img
        src="https://marco.travel/wp-content/uploads/2021/09/The-Worlds-Dangerous-Tourist-Destinations.jpg"
        height={"400px"}
        width="75%"
        alt="landingpage cover"
      />
      <Box>
        <Typography>No Risk No fun!</Typography>
        <Typography>
          The Danger can be from different sources, from natural hazards to high
          crime levels. You find some of the most dangerous tourist destinations
          on the planet over here.
        </Typography>
      </Box>
      <Footer />
    </div>
  );
}
