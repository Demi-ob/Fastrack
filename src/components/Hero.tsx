import { Box, Typography, Button, Stack, Hidden } from "@mui/material";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        position: "relative",
        backgroundImage: 'url("images/hero-image.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.45)",
        }}
      ></div>

      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 1.5, delay: 0.2 }}
      >
        <Box
          py={{ xs: 10, sm: 8, md: 6, lg: 4 }}
          margin={{ xs: 4, sm: 6, md: 8, lg: 10 }}
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* <Stack height={15} mb={2}  maxWidth={600} style={{background:"#B1120F"}}></Stack> */}
          <Typography
            variant="h1"
            fontWeight="bold"
            color="#fff"
            fontSize={{ xs: 35, sm: 45, md: 55, lg: 65, xl: 75 }}
            maxWidth={800}
          >
            Navigating Security Challenges with Expertise
          </Typography>

          <Typography
            color="#fff"
            maxWidth={700}
            mt={4}
            fontSize={{ xs: 14, sm: 16, md: 18, lg: 20, xl: 22 }}
          >
            Fastrack security and safety ltd is in a multiple line of security
            services such as man guarding, CCTV gadgets and installation,
            vetting of company staff, and more...
          </Typography>
          <Hidden smDown>
            <Stack direction="row" spacing={2} mt={4}>
              <a href="#contact">
                <Button variant="contained" color="secondary" size="large">
                  Contact us
                </Button>
              </a>
              <a href="#services">
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    color: "#000",
                    backgroundColor: "#fff",
                    "&:hover": {
                      backgroundColor: "#221164",
                      color: "#fff",
                    },
                  }}
                >
                  Services
                </Button>
              </a>
            </Stack>
          </Hidden>
          <Hidden smUp>
            <Stack spacing={1} mt={3} sx={{ marginX: "auto", width: "100%" }}>
              <a
                href="#contact"
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ width: "100%" }}
                >
                  Contact us
                </Button>
              </a>
              <a
                href="#services"
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{ color: "#000", backgroundColor: "#fff", width: "100%" }}
                >
                  Services
                </Button>
              </a>
            </Stack>
          </Hidden>
        </Box>
      </motion.div>
    </div>
  );
};

export default Hero;
