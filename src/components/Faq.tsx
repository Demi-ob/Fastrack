import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { faqData } from "./MapItems";

export default function Faq() {
  return (
    <Box
      mt={{ xs: 4, sm: 6, md: 8 }}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 1.5, delay: 0.2 }}
      >
        <Typography
          lineHeight={1}
          fontSize={{ xs: 30, sm: 35, md: 40, lg: 45, xl: 55 }}
          color="secondary"
          fontWeight="bold"
          sx={{ marginBottom: "3rem", padding: "0 2rem" }}
        >
          Frequently Asked Questions
        </Typography>
      </motion.div>
      {faqData.map((faq) => {
        return (
          <motion.div
            viewport={{ once: true }}
            key={faq.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1.5, delay: 0.2 }}
          >
            <Accordion
              sx={{
                width: { xs: 300, sm: 500, md: 700, lg: 800 },
                padding: "1rem",
                margin: "0.5rem",
                // background: "#221164",
                background: "#17122c",
                color: "#fff",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  fontSize={{ xs: 12, sm: 14, md: 16, lg: 18, xl: 20 }}
                  fontWeight="bold"
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  fontSize={{ xs: 12, sm: 14, md: 16, lg: 18, xl: 20 }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </motion.div>
        );
      })}
    </Box>
  );
}
