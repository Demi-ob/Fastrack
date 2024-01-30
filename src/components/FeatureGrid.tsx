import { Box, Grid, Typography } from "@mui/material";

const styles = {
  gridBox: {
    margin: "auto",
    padding: 4,
    spacing: 2,
    height: 200,
    width: 350,
    background: "#fff", 
    color: "#000",
  },
};

export const FeatureGrid = () => {
  return (
    <Grid
      item
      padding={5}
      className="service-card"
      sx={{
        background: "",
        "&:hover": {
          cursor: "pointer",
        },
      }}
    >
      <Grid
        item
        xs={3}
        direction="row"
        sx={styles.gridBox}
      >
        <Box>
          <Typography
            fontSize={{ xs: 18, sm: 20, md: 22, lg: 24, xl: 26 }}
            fontWeight="bold"
            lineHeight={1.1}
          >
            Access control and CCTV
          </Typography>
          <Typography fontSize={{ xs: 12, sm: 14, md: 16, lg: 18, xl: 20 }}>
            At Fastrack, we ensure only authorized personnel access specific
            areas.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
