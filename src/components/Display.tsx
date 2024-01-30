import { Typography, Stack, Box } from "@mui/material";
import { motion } from "framer-motion";
import { displayItems } from "./MapItems";

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
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1.5, delay: 0.2 }}
          >
            <Stack padding={6} sx={{ overflow: "hidden" }}>
              {displayItems.map((item, index) => {
                return (
                  <Stack
                    key={index}
                    padding={{ xs: 2, md: 4 }}
                    direction="row"
                    gap={{ xs: 2, md: 4 }}
                    sx={{
                      display: "flex",
                      flexDirection: item.id % 2 === 0 ? "row-reverse": "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      width={{
                        xs: "100%",
                        md: "50%",
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
                        style={{textAlign: item.id % 2 === 0 ? "right": "left"}}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        mt={3}
                        fontSize={{ xs: 12, sm: 14, md: 16, lg: 18, xl: 20 }}
                        style={{textAlign: item.id % 2 === 0 ? "right": "left"}}
                      >
                        {item.description}
                      </Typography>
                    </Box>

                    <Box
                      height={{ xs: 250, sm: 300, md: 350, lg: 500 }}
                      width={{ xs: 300, sm: 400, md: 450 }}
                      className="gallery-image"
                      style={{
                        borderRadius: "5px",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={item.image}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                  </Stack>
                );
              })}
            </Stack>
          </motion.div>
        </div>
      </Stack>
    </div>
  );
};
