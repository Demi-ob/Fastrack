import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import { Services } from "./components/Services";
import { Display } from "./components/Display";
import Faq from "./components/Faq";
import Testimonials from "./components/Testimonials";
import TestimonialsSecond from "./components/Testimonial2";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import Map from "./components/Map";

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
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          backgroundColor: "#000",
          color: "#fff",
        }}
      >
        <TopBar />
        <Hero />
        <Clients />
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
  );
}

export default App;
