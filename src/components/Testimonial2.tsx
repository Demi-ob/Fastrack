import Slider from "react-slick";
import { Typography, Avatar, Rating, Box, Hidden, Stack } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonialData2 } from "./MapItems";


const TestimonialsSecond = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1.7,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1.3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.0,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ overflow: "hidden", maxWidth: "1600px" }}>
        <Slider {...settings}>
          {testimonialData2.map((testimonial, id) => (
            <div key={id}>
              <Box
                sx={{
                  background: testimonial.background,
                  borderRadius: "15px",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "1rem",
                  margin: "1rem",
                  color: testimonial.color,
                  height: { xs: 250, sm: 160 },
                }}
              >
                <Typography>{`"${testimonial.review}"`}</Typography>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Hidden smDown>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <Avatar alt="avatar image" src={testimonial.image} />
                      <div>
                        <Typography variant="body1" fontWeight="bold">
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2">
                          {testimonial.about}
                        </Typography>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Rating name="read-only" value={5} readOnly />
                    </div>
                  </Hidden>
                  <Hidden smUp>
                    <Stack spacing={2}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Avatar alt="avatar image" src={testimonial.image} />
                        <div>
                          <Typography variant="body1" fontWeight="bold">
                            {testimonial.name}
                          </Typography>
                          <Typography variant="body2">
                            {testimonial.about}
                          </Typography>
                        </div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Rating name="read-only" value={5} readOnly />
                      </div>
                    </Stack>
                  </Hidden>
                </div>
              </Box>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialsSecond;
