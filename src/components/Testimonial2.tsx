import Slider from "react-slick";
import { Typography, Avatar, Rating, Box, Hidden, Stack } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface DataInterface {
  review: string;
  name: string;
  about: string;
  image: string;
  background:string;
  color:string;
}

const testimonialData: DataInterface[] = [
  {
    about: "Software Engineer",
    name: "Lagbaja Demilade",
    review:
      "I love fastrack, quality and reliable. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "images/demi.webp",
    background: "rgba(0, 0, 100, 1)" , //blue
    color:"#fff"
  },
  {
    about: "Software Engineer",
    name: "Lagbaja Demilade",
    review:
      "I love fastrack, quality and reliable. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "images/demi.webp",
    background: "rgba(255, 238, 6, 1)", //yellow
    color:"#000"
  },
  {
    about: "Software Engineer",
    name: "Lagbaja Demilade",
    review:
      "I love fastrack, quality and reliable. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "images/demi.webp",
    background: "rgba(177, 18, 15, 1)", //red
    color:"#fff"
  },
  {
    about: "Software Engineer",
    name: "Lagbaja Demilade",
    review:
      "I love fastrack, quality and reliable. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "images/demi.webp",
    background: "rgba(0, 0, 0, 0.1)", //grey
    color:"#000"
  },
  
  
];

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
    <div style={{display:"flex", justifyContent:"center"}}>
      <div style={{ overflow: "hidden", maxWidth:"1600px" }}>
      <Slider {...settings}>
        {testimonialData.map((testimonial, id) => (
          <div key={id}>
            <Box
                sx={{
                  background: testimonial.background,
                  borderRadius: "15px",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "5rem",
                  margin: "1rem",
                  color: testimonial.color,
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
