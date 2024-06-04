import { OppgaveFooter } from "./OppgaveFooter";
import { useState } from "react";

export const Oppgave9 = () => {
  const [clicked, setClicked] = useState(0);
  const stroke = "#886F41";

  return (
    <div className="task-container">
      <h2>
        Få denne klokken til å fungere som en vanlig klokke! Kanskje du også
        klarer å få den til å gå fortere om man klikker på den?
      </h2>
      <div>
        <svg
          width="300"
          height="300"
          viewBox={"0 0 300 300"}
          onClick={() => (clicked > 7 ? null : setClicked((prev) => prev + 1))}
          className="outline-none max-md:hidden"
        >
          <g>
            <ellipse
              ry="140"
              rx="140"
              id="svg_1"
              cy="150"
              cx="150"
              stroke={stroke}
              fill="none"
            />
            <line
              stroke={stroke}
              id="short"
              y2="160"
              x2="150"
              y1="40"
              x1="150"
              fill="none"
            />
            <line
              stroke={stroke}
              id="svg_4"
              y2="150"
              x2="215"
              y1="150"
              x1="140"
              fill="none"
            />
          </g>
        </svg>
      </div>
      <OppgaveFooter task="9" />
    </div>
  );
};
