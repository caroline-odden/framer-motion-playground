import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { taskHints } from "./utils/taskHints";

export const OppgaveFooter = ({ task }: { task: string }) => {
  return (
    <div className="task-footer">
      <Link to={`/losningsforslag/${task}`}>Visuelt løsningsforslag </Link>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Hint</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{taskHints[task]}</Typography>
        </AccordionDetails>
      </Accordion>
      <Link to="/">Tilbake til oppgaveoversikt</Link>
    </div>
  );
};
