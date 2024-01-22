import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import TopBar from "./TopBar";
import Hero from "./Hero";
// import Clients from "./Clients";
import { Services } from "./Services";
import { Display } from "./Display";
import Faq from "./Faq";
import Testimonials from "./Testimonials";
import TestimonialsSecond from "./Testimonial2";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Gallery } from "./Gallery";
import Map from "./Map";
// import { FeatureGrid } from "./FeatureGrid";

const theme = createTheme({
  palette: {
    primary: {
      // main: "#221164",
      main: "#c4221f",
    },
    secondary: {
      // main: "#B1120F",
      main: "#ccbf0c",
    },
  },
  typography: {
    fontFamily: ["Space Grotesk, sans-serif", "Russo One, sans-serif"].join(
      ","
    ),
    button: {
      textTransform: "none",
    },
    h1:{
      fontFamily: "DM Sans, sans-serif"
    },
    h2:{
      fontFamily: "DM Sans, sans-serif"
    },
    h3:{
      fontFamily: "DM Sans, sans-serif"
    }
  },
});

const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
    <div
      style={{
        backgroundColor: "#131313",
        color: "#fff",
      }}
    >
      <TopBar />
      <Hero />
      {/* <Clients /> */}
      {/* <FeatureGrid/> */}
      <Services />
      <Display />
      <Gallery />
      <Testimonials />
      <TestimonialsSecond />
      <Faq />
      <Map />
      <Contact />
      <Footer />
    </div>
  </ThemeProvider>
  )
}

export default HomePage