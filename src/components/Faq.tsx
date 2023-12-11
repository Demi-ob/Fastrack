import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What is the Vehicle Tracking system offered by Fastrack?",
    answer:
      " Fastrack provides a high-tech Fleet Management Solution that offers automatic periodic reports to the web. This includes detailed reports on vehicle function, overspeed alerts, idle time reports, trip start information, and more.",
  },
  {
    id: 2,
    question:
      "How does Fastrack conduct security audits for information systems?",
    answer:
      "We systematically evaluate the security of your company's information system by measuring how well it conforms to a set of established criteria. Our rigorous audits help identify vulnerabilities and strengthen your cybersecurity.",
  },
  {
    id: 3,
    question:
      " Does Fastrack offer customized security solutions for different industries?",
    answer:
      "Yes, Fastrack understands that security needs vary across industries. We offer customized security solutions to address the unique requirements of different sectors, ensuring comprehensive protection.",
  },
  {
    id: 4,
    question:
      "How can I inquire about Fastrack's services for my specific needs?",
    answer:
      "Feel free to reach out to our dedicated team through the contact information provided on our website. We are here to discuss your specific security requirements and tailor our services to meet your needs.",
  },
];

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
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 1.5, delay: 0.2 }}
      >
        <Typography
          lineHeight={1}
          fontFamily="Russo One, sans-serif"
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
