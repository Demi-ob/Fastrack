import { Stack, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import { motion } from "framer-motion";

const contactDetails = [
  {id:1,
    icon: <PhoneIcon style={{ fontSize: "4rem" }} />,
    title: "Phone Number",
    description: "08030671310, 08023019233",
    link: "tel:+2348030671310",
  },
  {id:2,
    icon: <EmailIcon style={{ fontSize: "4rem" }} />,
    title: "Email Address",
    description: "info@fastrackltd.com",
    link: "mailto:info@fastrackltd.com",
  },
  {id:3,
    icon: <FacebookIcon style={{ fontSize: "4rem" }} />,
    title: "Facebook",
    description: "Fastrack Security and Safety Limited",
    link: "https://www.facebook.com/fastrackltd/",
  },
];

export const Contact = () => {
  return (
    <div id="contact" style={{ display: "flex", justifyContent: "center" }}>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          marginBottom: "5rem",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1.5, delay: 0.2 }}
        >
          <Typography
            p={2}
            fontFamily="Russo One, sans-serif"
            fontSize={{ xs: 30, sm: 35, md: 40, lg: 45, xl: 55 }}
            fontWeight="bold"
            mb={4}
          >
            Feel free to contact us
          </Typography>
        </motion.div>

        {contactDetails.map((contact) => {
          return (
            <motion.div  key={contact.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 1.5, delay: 0.2 }}
            >
              <a
                href={contact.link}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Stack direction="row" margin={2}>
                  <Stack
                    className="gallery-image"
                    direction="row"
                    padding={{ xs: 2, sm: 4 }}
                    spacing={2}
                    sx={{
                      borderRadius: "15px",
                      background: "#eeeeee",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "#B1120F",
                      }}
                    >
                      {contact.icon}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        fontWeight="bold"
                        fontSize={{ xs: 12, sm: 14, md: 16, lg: 18, xl: 20 }}
                        color="primary"
                      >
                        {contact.title}
                      </Typography>
                      <Typography
                        fontSize={{ xs: 12, sm: 14, md: 16, lg: 18, xl: 20 }}
                        color="textPrimary"
                      >
                        {contact.description}
                      </Typography>
                    </div>
                  </Stack>
                </Stack>
              </a>
            </motion.div>
          );
        })}
      </Stack>
    </div>
  );
};
