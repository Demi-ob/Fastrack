import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Clients = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3.5,
    slidesToScroll: 4,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
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
    <div style={{ overflow: "hidden" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems:"center",
          background: "#110a2c",
          padding: 20,
        }}
      >
        <div style={{ maxWidth: "1400px", width: "100%" }}>
          <Slider {...settings}>
            <div style={{height:40}}><img src="images/client1.webp" alt="" /></div>
            <div style={{height:40}}><img src="images/client2.webp" alt="" /></div>
            <div style={{height:40}}><img src="images/client3.webp" alt="" /></div>
            <div style={{height:40}}><img src="images/client4.webp" alt="" /></div>
            <div style={{height:40}}><img src="images/client5.webp" alt="" /></div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Clients;
