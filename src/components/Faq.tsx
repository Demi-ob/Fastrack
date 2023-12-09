import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

interface FAQItem {
  id:number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id:1,
    question: "What is Lorem Ipsum?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  { id:2,
    question: "Why do we use it?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  { id:3,
    question: "Where does it come from?",
    answer:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
  },
  { id:4,
    question: "Is it safe to use Lorem Ipsum?",
    answer:
      "Yes, Lorem Ipsum is safe to use. It has been the industry's standard dummy text ever since the 1500s.",
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
        initial={{ opacity: 0, y: 100 }}
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
          <motion.div key={faq.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1.5, delay: 0.2 }}
          >
            <Accordion
              
              sx={{
                width: { xs: 240, sm: 400, md: 700, lg: 800 },
                padding: "1rem",
                margin:"0.5rem",
                background:"#221164",
                color:"#fff"
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{color:"#fff"}}/>}
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
