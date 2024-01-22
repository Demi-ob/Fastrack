import { Box, Stack, Typography } from "@mui/material";

export const FeatureGrid = () => {
  return (
    <Stack className="service-card"
    sx={{
      background: "",
      "&:hover": {
        cursor: "pointer",
      },
    }}>
      <Stack padding={2} spacing={2} height={400} width={600} direction="row">
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
            areas. We also provide strategically placed CCTV cameras that
            provide real-time monitoring and continuous recording.
          </Typography>
        </Box>
        <Stack  height={200}>
        <img src="./images/cctv.png" height="100%" alt="" />
        </Stack>
      </Stack>
    </Stack>
  );
};
