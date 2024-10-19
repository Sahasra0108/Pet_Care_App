import * as React from "react";
import mainimg from "./assests/main.jpg";
import Grid from "@mui/material/Grid";
import CardComponent from "./Components/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
//import Grid2 from "@mui/material/Unstable_Grid2"; 


const Homepage = () => {
  return (
    <>
      <img src={mainimg} className="mainimg" />

      <h1>Our Services</h1>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <CardComponent
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Dog Walking"
              description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica."
            />
          </Grid>
          <Grid item xs={4}>
            <CardComponent
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Pet Daycare"
              description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica."
            />
          </Grid>
          <Grid item xs={4}>
            <CardComponent
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Dog Training"
              description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica."
            />
          </Grid>
          <Grid item xs={4}>
            <CardComponent
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Vet Advice"
              description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica."
            />
          </Grid>
          <Grid item xs={4}>
            <CardComponent
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Dog Bathing"
              description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica."
            />
          </Grid>
          <Grid item xs={4}>
            <CardComponent
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Dog Boarding"
              description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica."
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Homepage;
