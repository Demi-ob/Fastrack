import { Typography, Grid, Stack, Box, Hidden } from "@mui/material";
import { motion } from "framer-motion";

export const Display = () => {
  return (
    <div id="about" style={{ display: "flex", justifyContent: "center" }}>
      <Stack
        spacing={{ xs: 0, md: 4 }}
        alignItems="center"
        justifyContent="center"
        sx={{
          maxWidth: "1100px",
          marginBottom: { xs: 4, md: 8 },
          width: "100%",
        }}
      >
        <div style={{ width: "100%" }}>
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1.5, delay: 0.2 }}
          >
            <Grid
              container
              padding={6}
              sx={{ overflow: "hidden"}}
            >
              <Grid
                padding={{ xs: 2, md: 4 }}
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  fontWeight="bold"
                  color="primary"
                  fontSize={{ xs: 25, sm: 30, md: 35, lg: 40, xl: 45 }}
                  lineHeight={1}
                  fontFamily="Russo One, sans-serif"
                >
                  Assets Protection
                </Typography>
                <Typography
                  mt={3}
                  fontSize={{ xs: 12, sm: 14, md: 16, lg: 18, xl: 20 }}
                >
                  Our Facility and Asset Protection team plays a fundamental
                  role in meeting the high standards of security and
                  facilitation set by Fastrack Security & Safety Limited. Its
                  role involves ensuring that clients standards and policies are
                  implemented and that the personal safety of every employee and
                  visitor on clients premises is protected from unlawful
                  interference and any other illegal act.
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  height={{ xs: 250, sm: 300, md: 350, lg: 500 }}
                  width={{ xs: 300, sm: 400, md: 450 }}
                  className="gallery-image"
                  style={{
                    borderRadius: "5px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="images\disp3.webp"
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </motion.div>
        </div>

        <div style={{ width: "100%" }}>
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1.5, delay: 0.2 }}
          >
            <Grid container padding={6} sx={{ overflow: "hidden" }}>
              <Hidden mdDown>
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    height={{ xs: 250, sm: 300, md: 350, lg: 500 }}
                    width={{ xs: 300, sm: 400, md: 450 }}
                    className="gallery-image"
                    style={{
                      borderRadius: "5px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src="images\disp1.webp"
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </Grid>
              </Hidden>
              <Grid
                padding={{ xs: 2, md: 4 }}
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  fontWeight="bold"
                  color="primary"
                  fontSize={{ xs: 25, sm: 30, md: 35, lg: 40, xl: 45 }}
                  lineHeight={1}
                  fontFamily="Russo One, sans-serif"
                >
                  Safety Devices and Human Tracking Devices
                </Typography>
                <Typography
                  mt={3}
                  fontSize={{ xs: 12, sm: 14, md: 16, lg: 18, xl: 20 }}
                >
                  Personal Safety Devices are the name of the game and if you
                  feel that you or your family may be travelling to a country
                  where there are risks attached what can be more normal than to
                  want to protect yourselves. It is our job to try and
                  anticipate what could go wrong and to be able to provide you
                  with the personal safety equipment to help get you out of any
                  difficult situations in which you may find yourselves.
                </Typography>
              </Grid>
              <Hidden mdUp>
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    height={{ xs: 250, sm: 300, md: 350, lg: 500 }}
                    width={{ xs: 300, sm: 400, md: 450 }}
                    className="gallery-image"
                    style={{
                      borderRadius: "5px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src="images\disp1.webp"
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </Grid>
              </Hidden>
            </Grid>
          </motion.div>
        </div>

        <div style={{ width: "100%" }}>
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1.5, delay: 0.2 }}
          >
            <Grid container padding={6} sx={{ overflow: "hidden" }}>
              <Grid
                padding={{ xs: 2, md: 4 }}
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  fontWeight="bold"
                  color="primary"
                  fontSize={{ xs: 25, sm: 30, md: 35, lg: 40, xl: 45 }}
                  lineHeight={1}
                  fontFamily="Russo One, sans-serif"
                >
                  Event Security Services and Crowd Management
                </Typography>
                <Typography
                  mt={3}
                  fontSize={{ xs: 12, sm: 14, md: 16, lg: 18, xl: 20 }}
                >
                  Crowd management is a critical consideration when planning a
                  large-scale event. Our personnel have the experience and the
                  expertise necessary to perform the critical pre-event tasks as
                  well as provide the required level of security during and
                  after the event through our Event GUARD Technology, Event
                  GUARD Alcohol Management Team and our Event GUARD Tactical
                  Response Team.
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  height={{ xs: 250, sm: 300, md: 350, lg: 500 }}
                  width={{ xs: 300, sm: 400, md: 450 }}
                  className="gallery-image"
                  style={{
                    borderRadius: "5px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="images\disp2.webp"
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </motion.div>
        </div>
      </Stack>
    </div>
  );
};
