import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#2E073F",
        color: "#fff",                
        padding: "20px 0",           
        textAlign: "center",         
        fontFamily: "Poppins",       
        mt: 5,
        height:"200px"                        
      }}
    >
      <Typography variant="body2" sx={{ fontSize: "16px", mb: 1 }}>
        © {new Date().getFullYear()} Paw Pal Pvt Ltd. All rights reserved.
      </Typography>

      <Box>
        <Link href="/privacy-policy" sx={{ color: "#fff", marginRight: "15px" }}>
          Privacy Policy
        </Link>
        <Link href="/terms-of-service" sx={{ color: "#fff" }}>
          Terms of Service
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
