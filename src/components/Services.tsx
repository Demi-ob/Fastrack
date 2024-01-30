import { Typography, Grid, Stack, Card, Box } from "@mui/material";
import { styled } from "@mui/system";
import { cardInfo } from "./MapItems";
import { motion } from "framer-motion";

const HoverableCard = styled(Card)(({ theme }) => ({
  // borderRadius: "15px",
  background: "transparent",
  display: "flex",
  flexDirection: "column",
  transition: "background-color 0.3s ease-in-out, transform 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    transform: "translatey(-5%)",
    "& .MuiTypography-root": {
      color: theme.palette.common.white,
    },
    "& svg": {
      color: theme.palette.common.white,
    },
    "& .MuiButton-root": {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.secondary.main,
    },
  },
}));

export const Services = () => {
  return (
    <Stack
      spacing={6}
      padding={4}
      sx={{
        display: "flex",
        alignItems: "center",
        marginBottom: 6,
      }}
    >
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 1.5, delay: 0.2 }}
        style={{ display: "flex", marginTop: "3rem" }}
        id="services"
      >
        <Typography
          variant="h2"
          fontWeight="bold"
          fontSize={{ xs: 30, sm: 35, md: 40, lg: 45, xl: 55 }}
        >
          What do we do
        </Typography>
        <Typography
          variant="h2"
          fontWeight="bold"
          fontSize={{ xs: 30, sm: 35, md: 40, lg: 45, xl: 55 }}
          color="secondary"
        >
          ?
        </Typography>
      </motion.div>

      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 1.5, delay: 0.2 }}
      >
        <Grid
          container
          sx={{
            maxWidth: "1600px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {cardInfo.map((eachCard) => (
            <Grid item xs={12} sm={6} lg={3} key={eachCard.id} padding={2}>
              <HoverableCard
                className="service-card"
                sx={{
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                  height: { xs: 270, sm: 440, md: 340, lg: 450 },
                  background: "#F9FBFD",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                <Stack height={150} overflow="hidden" style={{display: "flex", justifyContent:"center", alignItems: "center"}}>
                  <img style={{position: "relative", zIndex:0}} src={eachCard.image} width="100%" alt="" />
                  <Box sx={{position: "absolute", zIndex:2}}>{eachCard.icon}</Box>
                </Stack>
               
                <Stack
                  spacing={{ xs: 2, md: 3 }}
                  flexGrow={1}
                  sx={{ padding: { xs: 2, md: 4 } }}
                >
                  <Typography
                    fontSize={{ xs: 18, sm: 20, md: 22, lg: 24, xl: 26 }}
                    fontWeight="bold"
                    lineHeight={1.1}
                  >
                    {eachCard.title}
                  </Typography>
                  <Typography
                    fontSize={{ xs: 12, sm: 14, md: 16, lg: 18, xl: 20 }}
                  >
                    {eachCard.description}
                  </Typography>
                </Stack>
              </HoverableCard>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Stack>
  );
};
