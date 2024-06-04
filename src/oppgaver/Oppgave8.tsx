import { OppgaveFooter } from "./OppgaveFooter";
import { useState } from "react";
interface PathProps {
  d: string;
  stroke: string;
}

const Path = (props: PathProps) => (
  <path fill="transparent" strokeWidth="2" {...props} />
);

export const Oppgave8 = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="task-container">
      <h2>
        Gjør hamburgermeny-knappen om til en X når du klikker på den, og tilbake
        til hamburgermeny ved neste klikk.
      </h2>
      <button onClick={() => setClicked(!clicked)}>
        <svg width="23" height="23" viewBox="0 0 23 23">
          <Path stroke="#000000" d="M 1 2.5 L 20 2.5" />
          <Path d="M 1 9.423 L 20 9.423" stroke="#000000" />
          <Path stroke="#000000" d="M 1 16.346 L 20 16.346" />
        </svg>
      </button>
      <OppgaveFooter task="8" />
    </div>
  );
};
