import { useState, useEffect } from "react";
import { Typography, Grid, Box } from "@mui/material";
import { motion } from "framer-motion";

interface GalleryInterface {
  id: number;
  image: string;
  title: string;
  description: string;
}

const galleryItems: GalleryInterface[] = [
  {
    id: 1,
    image: "images/DSCN1852.webp",
    title: "Installation gigs",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    image: "images/DSCN1840.webp",
    title: "Installation gigs",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    image: "images/IMG_3323.webp",
    title: "Installation gigs",
    description: "",
  },
  {
    id: 4,
    image: "images/IMG_3600.webp",
    title: "Installation gigs",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 5,
    image: "images/DSCN1848.webp",
    title: "Installation gigs",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 6,
    image: "images/DSCN1820-scaled.webp",
    title: "Installation gigs",
    description: "",
  },
  {
    id: 7,
    image: "images/DSCN1816.webp",
    title: "Installation gigs",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 8,
    image: "images/DSCN1811.webp",
    title: "Installation gigs",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 9,
    image: "images/IMG_3594.webp",
    title: "Installation gigs",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 10,
    image: "images/DSCN1836.webp",
    title: "Installation gigs",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 11,
    image: "images/DSCN1829.webp",
    title: "Installation gigs",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 12,
    image: "images/DSCN1858.webp",
    title: "Installation gigs",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

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
        background: "#110a2c",
        color: "#fff",
      }}
    >
      <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1.5, delay: 0.2 }}
        >
      <Box mt={4}>
        <Typography
          fontFamily="Russo One, sans-serif"
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
      </motion.div>

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
