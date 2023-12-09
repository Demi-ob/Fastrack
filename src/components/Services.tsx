import { Typography, Grid, Stack, Card, Box } from "@mui/material";
import { styled } from "@mui/system";
import PatternIcon from "@mui/icons-material/Pattern";
import ElectricCarIcon from "@mui/icons-material/ElectricCar";
import PolicyIcon from "@mui/icons-material/Policy";
import NestCamWiredStandIcon from "@mui/icons-material/NestCamWiredStand";
import { motion } from "framer-motion";

const cardInfo = [
  {
    id: 1,
    icon: <PatternIcon style={{ fontSize: "3rem" }} color="secondary" />,
    title: "Vetting and Background checks",
    description:
      "Our core team of experienced employee screening analysts and support staff have more than 40 years of experience in employee screening and investigation industry",
  },
  {
    id: 2,
    icon: <ElectricCarIcon style={{ fontSize: "3rem" }} color="secondary" />,
    title: "Vehicle Tracking",
    description:
      "We have a high tech based Fleet Management Solution that makes automatic periodic report to the web. Such reports as: Vehicle function on/off Overspeed alert Idle time report Trip Start etc..",
  },
  {
    id: 3,
    icon: <PolicyIcon style={{ fontSize: "3rem" }} color="secondary" />,
    title: "Security audit",
    description:
      "We will systematically evaluate the security of your company’s information system by measuring how well it conforms to a set of established criteria.",
  },
  {
    id: 4,
    icon: (
      <NestCamWiredStandIcon style={{ fontSize: "3rem" }} color="secondary" />
    ),
    title: "Access control and CCTV",
    description:
      "At Fastrack, we ensure only authorized personnel access specific areas. We also provide strategically placed CCTV cameras that provide real-time monitoring and continuous recording. ",
  },
];

const HoverableCard = styled(Card)(({ theme }) => ({
  borderRadius: "15px",
  background: "transparent",
  display: "flex",
  flexDirection: "column",
  transition: "background-color 0.3s ease-in-out, transform 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    transform: "scale(1.08)",
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
          fontFamily="Russo One, sans-serif"
        >
          What do we do
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
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 1.5, delay: 0.2 }}
      >
        <Grid container sx={{ maxWidth: "1600px", width: "100%" }}>
          {cardInfo.map((eachCard) => (
            <Grid item xs={12} sm={6} lg={3} key={eachCard.id} padding={2}>
              <HoverableCard
                className="service-card"
                sx={{
                  padding: { xs: 2, md: 4 },
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                  height: { xs: 270, sm: 440, md: 340, lg: 500 },
                  background: "#F9FBFD",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                <Stack spacing={{ xs: 2, md: 4 }} flexGrow={1}>
                  <Box>{eachCard.icon}</Box>
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
