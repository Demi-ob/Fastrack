import Slider from "react-slick";
import { Typography, Avatar, Rating, Box, Hidden, Stack } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface DataInterface {
  review: string;
  name: string;
  about: string;
  image: string;
  background: string;
  color: string;
}

const testimonialData: DataInterface[] = [
  {
    about: "Web Developer",
    name: "Adebomi Adebiyi",
    review:
      "The professionalism and expertise of Fastrack's team shine through in their security services. From vetting to event security, they cover all aspects with precision and care.",
    image: "images/fortune.webp",
    background: "rgba(0, 0, 100, 1)", //blue
    color: "#fff",
  },
  {
    about: "",
    name: "Hannah Auwa",
    review:
      "Access control and CCTV solutions from Fastrack have significantly enhanced our facility's security. The real-time monitoring provides an added layer of protection we can count on",
    image: "images/pint.webp",
    background: "rgba(255, 238, 6, 1)", //yellow
    color:"#000"
  },
  {
    about: "CTO, Heyfood",
    name: "Odetara Demilade",
    review:
      "The vetting and background checks provided by Fastrack are unparalleled. Their experienced team ensures that our company is staffed with trustworthy individuals. ",
    image: "images/demi.webp",
    background: "rgba(177, 18, 15, 1)", //red
    color: "#fff",
  },
  {
    about: "",
    name: "Agbeleye Samuel",
    review: "I love fastrack ltd, quality and reliable service.",
    image: "images/dolapo.webp",
    background: "rgba(0, 0, 0, 0.1)", //grey
    // color:"#000"
    color: "#fff",
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
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ overflow: "hidden", maxWidth: "1600px" }}>
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
