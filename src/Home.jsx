import * as React from "react";
import mainimg from "./assests/main.jpg";
import Grid from "@mui/material/Grid";
import CardComponent from "./Components/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import walking from "./assests/animals.png"
import bathing from "./assests/bathing.png"
import boarding from "./assests/dog-house.png"
import vet from "./assests/veterinarian.png"
import daycare from "./assests/world-animal-day.png"
import training from "./assests/dog-training.png"
import image1 from "./assests/image1.png"
import image2 from "./assests/image2.webp"

//import Grid2 from "@mui/material/Unstable_Grid2"; 


const Homepage = () => {
  return (
    <>
      <img src={mainimg} className="mainimg" />

      <Typography variant="h2" sx={{color:"#7A1CAC", fontSize:"60px",textAlign:"center" ,fontFamily:"Poppins",fontWeight:"Bold"}}>Our Services</Typography>
      <h2 style={{color:"#000000", fontSize:"20px",textAlign:"center" ,fontFamily:"Poppins", paddingBottom:"20px"}}>Need Vet advice?   Going on vacation?  Need daily walk?  </h2>

      <Box sx={{ flexGrow: 1  }}>
        <Grid container rowSpacing={2} columnSpacing={-10}>
          <Grid item xs={4}>
          <Box sx={{ paddingLeft: "200px", display: 'flex' }}>
            <CardComponent
              image={walking}
              title="Dog Walking"
              description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica."
            />
            </Box>
          </Grid>
          <Grid item xs={4}>
          <Box sx={{ paddingLeft: "100px", display: 'flex',paddingRight: "100px" }}>
            <CardComponent
              image={daycare} 
              title="Pet Daycare"
              description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica."
            />
        </Box>
          </Grid>
          <Grid item xs={4}>
          <Box sx={{ paddingRight: "200px", display: 'flex' }}>
            <CardComponent
              image={training}
              title="Dog Training"
              description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica."
            />
            </Box>
          </Grid>
          <Grid item xs={4}>
          <Box sx={{ paddingLeft: "200px", display: 'flex' }}>
            <CardComponent
              image={vet}
              title="Vet Advice"
              description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica."
            />
            </Box>
          </Grid>
          
          <Grid item xs={4}>
          <Box sx={{paddingLeft: "100px" , display: 'flex', paddingRight: "100px" }}> 
            <CardComponent
              image={bathing}
              title="Dog Bathing"
              description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica."
            />
            </Box>
          </Grid>
          
          <Grid item xs={4}>
          <Box sx={{ paddingRight: "200px", display: 'flex' }}>
            <CardComponent
              image={boarding}
              title="Dog Boarding"
              description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica."
            />
            </Box>
          </Grid>
          
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1  }}>
        <Grid container rowSpacing={2} columnSpacing={-10}>

       <Grid item xs={8}>
           <img src={image2}/>
        </Grid>
        <Grid item xs={8}>
           <img src={image2}/>
        </Grid>
        </Grid>
    </Box>
      


    </>
  );
};

export default Homepage;
