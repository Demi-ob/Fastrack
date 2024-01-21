import { useState, useEffect } from "react";
import { Typography, Grid, Box } from "@mui/material";
import { galleryItems } from "./MapItems";

export const Gallery = () => {
  const imagesToDisplay = 4;
  const [visibleImages, setVisibleImages] = useState(
    galleryItems.slice(0, imagesToDisplay)
  );

  useEffect(() => {
    let currentIndex = imagesToDisplay;
    const interval = setInterval(() => {
      const endIndex = currentIndex + imagesToDisplay;
      const newVisibleImages = galleryItems.slice(
        currentIndex,
        endIndex > galleryItems.length ? galleryItems.length : endIndex
      );

      setVisibleImages(newVisibleImages);

      currentIndex =
        endIndex >= galleryItems.length ? 0 : currentIndex + imagesToDisplay;
    }, 2000);
    return () => clearInterval(interval);
  }, [imagesToDisplay]);

  return (
    <div
      id="gallery"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "3rem",
        // background: "#110a2c",
        background: "#0c3323",
        color: "#fff",
      }}
    >
      <Box mt={4}>
        <Typography
          lineHeight={1}
          fontSize={{ xs: 30, sm: 35, md: 40, lg: 45, xl: 55 }}
          fontWeight="bold"
          m={{ xs: 3 }}
          textAlign="center"
        >
          Gallery
        </Typography>
        <Typography textAlign="center">Let our work speak for you</Typography>
      </Box>

      <Grid
        container
        padding={6}
        sx={{ maxWidth: "1600px", display: "flex", justifyContent: "center" }}
      >
        {visibleImages.map((gallery, id) => {
          return (
            <Grid
              item
              padding={{ xs: 2 }}
              key={id}
              xs={12}
              sm={6}
              md={3}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                height={{ xs: 300, sm: 350, md: 400, lg: 450 }}
                width={{ xs: 300 }}
                sx={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.7)",
                }}
              >
                <img
                  className="gallery-image"
                  src={gallery.image}
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
