import { Typography, Stack, Box, Hidden } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

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
    about: "CEO, Mech Solutions",
    name: "Olaolu Mojetoluwa",
    review:
      "Fastrack Security and Safety Ltd has been our go-to partner for all security services. Their dedication to safety and their professional team make them the best in the business.",
    image: "images/israel.webp",
    background: "rgba(177, 18, 15, 1)", //red
    color: "#fff",
  },
  {
    about: "",
    name: "Mike Odunsanya",
    review:
      "Choosing Fastrack Security and Safety Ltd was the best decision for our security needs. Their commitment to safety and their range of services make them the preferred choice.",
    image: "images/taiwo.webp",
    background: "rgba(0, 0, 0, 0.1)", //grey
    // color: "#000",
    color: "#fff",
  },

  {
    about: "Marketer",
    name: "Daniella Ademolu",
    review:
      "I've been a valuable customer for 6 years now, no regrets",
    image: "images/pinte.webp",
    background: "rgba(0, 0, 100, 1)", //blue
    color: "#fff",
  },
  {
    about: "Cystech",
    name: "Ngozi Favour",
    review:
      "Security audits by Fastrack have become a cornerstone of our cybersecurity strategy. Their evaluation criteria are rigorous, ensuring our information systems are robust and secure",
    image: "images/pinter.webp",
    background: "rgba(255, 238, 6, 1)", //yellow
    color: "#000",
  },
];

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2.75,
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
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 1.5, delay: 0.2 }}
      >
        <Stack
          p={2}
          sx={{
            mb: { xs: 0, sm: 2, md: 4 },
            marginTop: "3rem",
          }}
        >
          <Typography
            fontFamily="Russo One, sans-serif"
            fontSize={{ xs: 30, sm: 35, md: 40, lg: 45, xl: 55 }}
            fontWeight="bold"
            color="secondary"
            textAlign="center"
            lineHeight={1.2}
          >
            Happy customers
          </Typography>
          <Typography
            fontFamily="Russo One, sans-serif"
            fontSize={{ xs: 30, sm: 35, md: 40, lg: 45, xl: 55 }}
            fontWeight="bold"
            textAlign="center"
            lineHeight={1.2}
          >
            are our true wealth
          </Typography>
        </Stack>
      </motion.div>

      <div style={{ width: "100%", overflow: "hidden", maxWidth: "1600px" }}>
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
                  height:{xs:250, sm:160}
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

export default Testimonials;
