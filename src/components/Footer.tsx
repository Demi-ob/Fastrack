import { Stack, Grid, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import CallIcon from "@mui/icons-material/Call";

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <Stack
    padding={{xs:2, sm:4}}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#110a2c",
        color: "#fff",
      }}
    >
      <Grid container style={{ maxWidth: "1400px", marginBottom: "2rem" }}>
        <Grid item xs={12} sm={6} md={4} padding={2}>
          <Stack spacing={1.5} mb="1.5rem">
            <Typography fontWeight="bold">Quick links</Typography>
            <a
              href="#services"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Typography variant="body2">Our Services</Typography>
            </a>
            <a
              href="#gallery"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Typography variant="body2">Gallery</Typography>
            </a>
            <a href="#about" style={{ textDecoration: "none", color: "white" }}>
              <Typography variant="body2">About</Typography>
            </a>
            <a
              href="#location"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Typography variant="body2">Location</Typography>
            </a>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={5} padding={2}>
          <Stack spacing={1.5} mb="1.5rem">
            <Typography fontWeight="bold">Our Services</Typography>
            <Typography variant="body2">Vehicle Tracking</Typography>
            <Typography variant="body2">Vetting/Background Check</Typography>
            <Typography variant="body2">Security Audit</Typography>
            <Typography variant="body2">
              Employee Background Check/Vetting{" "}
            </Typography>
            <Typography variant="body2">Escort/Protocol Services</Typography>
            <Typography variant="body2">VIP/Close Protection</Typography>
            <Typography variant="body2">Communication Equipment</Typography>
            <Typography variant="body2">Access Control/CCTV</Typography>
            <Typography variant="body2">
              Safety Devices and Human Tracking Devices
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={3} padding={2}>
          <Stack spacing={1.5} mb="1.5rem">
            <Typography fontWeight="bold">Contact Info</Typography>
            <Typography variant="body2">
              Head Office - Lagos 3, Ramat Crescent,
            </Typography>
            <Typography variant="body2">
              By Alhaja Abass Bus Stop, Ojodu, Ojota,
            </Typography>
            <Typography variant="body2">Lagos State, Nigeria.</Typography>
            <Typography variant="body2">Tel: 08030671310, 08023019233</Typography>
            <Typography variant="body2">Email: info@fastrackltd.com</Typography>
            <Typography variant="body2">Website: www.fastrackltd.com</Typography>
          </Stack>
        </Grid>
      </Grid>
      <Grid container style={{ maxWidth: "1400px" }} padding={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="body2">
            Copyright ©{currentYear} Fastrack Security | All rights reserved by fastrack
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            justifyContent: { xs: "flex-start", sm: "flex-end" },
            marginTop: { xs: 3, sm: 0 },
          }}
        >
          <Stack spacing={2} direction="row" style={{ color: "#fff" }}>
            <a
              style={{ color: "#fff" }}
              href="https://m.facebook.com/p/Fastrack-Security-Safety-Limited-100070147372631/"
              className="icon-link"
            >
              <FacebookIcon />
            </a>
            {/* <a
              style={{ color: "#fff" }}
              href="https://twitter.com/fastrackHQ"
              className="icon-link"
            >
              <TwitterIcon />
            </a>
            <a
              style={{ color: "#fff" }}
              href="https://instagram.com/fastrack"
              className="icon-link"
            >
              <InstagramIcon />
            </a> */}
            <a
              style={{ color: "#fff" }}
              href="tel:+2348030671310"
              className="icon-link"
            >
              <CallIcon />
            </a>
            {/* <a
              style={{ color: "#fff" }}
              href="https://www.linkedin.com/company/fastrack"
              className="icon-link"
            >
              <LinkedinIcon />
            </a> */}
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};
