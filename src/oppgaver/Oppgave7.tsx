import { OppgaveFooter } from "./OppgaveFooter";
import { useState } from "react";

export const Oppgave7 = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="task-container">
      <h2>
        Lag et boblebad med flere titalls bobler på skjermen når man klikker på
        denne knappen!
      </h2>
      <button onClick={() => setClicked(!clicked)}>Lag boblebad</button>
      <div>
        <img src="/bubble.png" width={50} height={50} />
      </div>
      <OppgaveFooter task="7" />
    </div>
  );
};
