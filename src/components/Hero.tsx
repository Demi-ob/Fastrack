import { Box, Typography, Button, Stack, Hidden } from "@mui/material";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "relative",
        backgroundImage: 'url("images/heroimg.webp")',
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
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        }}
      ></div>

      <motion.div
      initial={{ opacity:0, y: 300 }}
      animate={{ opacity:1, y:0 }}
      transition={{type: "spring", duration: 1.5, delay: 0.2 }}
      >
        <Box
          py={{xs:10, sm:8, md:6, lg:4}}
          margin={{ xs: 4, sm: 6, md: 9, lg: 12 }}
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h1"
            fontWeight="bold"
            color="#fff"
            fontSize={{ xs: 40, sm: 50, md: 60, lg: 70, xl: 80 }}
            textAlign="center"
            fontFamily="Russo One, sans-serif"
          >
            Safety First
          </Typography>
          <Typography
            variant="h1"
            fontWeight="bold"
            fontSize={{ xs: 40, sm: 50, md: 60, lg: 70, xl: 80 }}
            textAlign="center"
            color="#fff"
            fontFamily="Russo One, sans-serif"
          >
            Always
          </Typography>
          <Typography
            color="#fff"
            maxWidth="700px"
            mt={4}
            textAlign="center"
            fontSize={{ xs: 14, sm: 16, md: 18, lg: 20, xl: 22 }}
          >
            Fastrack security and safety ltd is in a multiple line of security
            services such as man guarding, CCTV gadgets and installation,
            vetting of company staff, and more...
          </Typography>
          <Hidden smDown>
            <Stack
              direction="row"
              spacing={2}
              mt={4}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <a href="#contact">
                <Button variant="contained" color="secondary" size="large">
                  Contact us
                </Button>
              </a>
              <a href="#services">
                <Button
                  variant="outlined"
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
