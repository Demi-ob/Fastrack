import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Map = () => {
  return (
    <div
      id="location"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "1rem",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 1.5, delay: 0.2 }}
      >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "1rem",
          marginTop: "1.5rem",
        }}
        id="services"
      >
        <Typography
          variant="h2"
          fontWeight="bold"
          fontSize={{ xs: 30, sm: 35, md: 40, lg: 45, xl: 55 }}
          fontFamily="Russo One, sans-serif"
        >
          Where are we
        </Typography>
        <Typography
          variant="h2"
          fontWeight="bold"
          fontSize={{ xs: 30, sm: 35, md: 40, lg: 45, xl: 55 }}
          color="secondary"
          fontFamily="Russo One, sans-serif"
        >
          ?
        </Typography>
      </div>
      </motion.div>

      <Box
        height={{ xs: 200, sm: 350, md: 450, lg: 500 }}
        width={{ xs: 280, sm: 550, md: 750, lg: 1000, xl: 1300 }}
        margin={2}
        sx={{
          borderRadius: "5px",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d774.1516434495064!2d3.3929278235184146!3d6.573666502385446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b929bc05eb46b%3A0x4b6cc0434a1b4623!2sFastrack%20Security%20And%20Safety%20Limited!5e0!3m2!1sen!2sng!4v1701766070909!5m2!1sen!2sng"
          width="600"
          height="450"
          style={{ border: "0", width: "100%", height: "100%" }} 
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>

      <Stack p={2}>
        <Typography
          variant="h6"
          fontSize={{ xs: 12, sm: 14, md: 16, lg: 18, xl: 20 }}
        >
          Fastrack Security And Safety Limited
        </Typography>
        <Typography
          variant="h6"
          fontSize={{ xs: 12, sm: 14, md: 16, lg: 18, xl: 20 }}
          color="secondary"
          fontWeight="bold"
        >
          3 Ramat Cres, Ogudu, Lagos 105102, Lagos
        </Typography>
      </Stack>
    </div>
  );
};

export default Map;
