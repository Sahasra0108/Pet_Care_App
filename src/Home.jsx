import * as React from "react";
import mainimg from "./assests/main.jpg";
import Grid from "@mui/material/Grid";
import CardComponent from "./Components/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import walking from "./assests/animals.png";
import bathing from "./assests/bathing.png";
import boarding from "./assests/dog-house.png";
import vet from "./assests/veterinarian.png";
import daycare from "./assests/world-animal-day.png";
import training from "./assests/dog-training.png";
import image1 from "./assests/image1.png";
import image2 from "./assests/image2.webp";
import Footer from "./Components/Footer";
//import Grid2 from "@mui/material/Unstable_Grid2";

const Homepage = () => {
  return (
    <>
      <div>
        <img
          src={mainimg}
          alt="Main"
          className="mainimg"
           />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "70px",
            fontWeight: "bold",
            textAlign: "center",
            fontFamily:"Poppins"
          }}
        >
           PawPal: Easy care for happy pets!
        </div>
      </div>

      <Typography
        variant="h2"
        sx={{
          color: "#7A1CAC",
          fontSize: "60px",
          textAlign: "center",
          fontFamily: "Poppins",
          fontWeight: "Bold",
        }}
      >
        Our Services
      </Typography>
      <h2
        style={{
          color: "#000000",
          fontSize: "20px",
          textAlign: "center",
          fontFamily: "Poppins",
          paddingBottom: "20px",
        }}
      >
        Need Vet advice?  Going on vacation? Need daily walk?  
      </h2>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container rowSpacing={2} columnSpacing={-10}>
          <Grid item xs={4}>
            <Box sx={{ paddingLeft: "200px", display: "flex" }}>
              <CardComponent
                image={walking}
                title="Dog Walking"
                description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica."
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                paddingLeft: "100px",
                display: "flex",
                paddingRight: "100px",
              }}
            >
              <CardComponent
                image={daycare}
                title="Pet Daycare"
                description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica."
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ paddingRight: "200px", display: "flex" }}>
              <CardComponent
                image={training}
                title="Dog Training"
                description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica."
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ paddingLeft: "200px", display: "flex" }}>
              <CardComponent
                image={vet}
                title="Vet Advice"
                description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica."
              />
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box
              sx={{
                paddingLeft: "100px",
                display: "flex",
                paddingRight: "100px",
              }}
            >
              <CardComponent
                image={bathing}
                title="Dog Bathing"
                description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica."
              />
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box sx={{ paddingRight: "200px", display: "flex" }}>
              <CardComponent
                image={boarding}
                title="Dog Boarding"
                description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica."
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Typography
        variant="h2"
        sx={{
          color: "#7A1CAC",
          fontSize: "50px",
          textAlign: "left",
          fontFamily: "Poppins",
          fontWeight: "Bold",
          paddingTop: "50px",
          paddingLeft: "90px",
        }}
      >
        Why choose us ?
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container rowSpacing={2} columnSpacing={-10}>
          <Grid item xs={6}>
            <img src={image2} className="img1" />
          </Grid>
          <Grid item xs={6}>
            <p className="p1">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Grid>
          <Grid item xs={6}>
            <p className="p2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Grid>
          <Grid item xs={6}>
            <img src={image1} className="img2" />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default Homepage;
