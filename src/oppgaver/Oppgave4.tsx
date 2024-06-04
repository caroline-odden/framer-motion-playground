import { OppgaveFooter } from "./OppgaveFooter";
import { useState } from "react";
import { Car } from "../Car";

export const Oppgave4 = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="task-container">
      <h2>
        Bruk knappen til å få bilen til å kjøre inn fra venstre når du klikker
        på den, og deretter en kul animasjon ut av skjermen når du klikker
        igjen.
      </h2>
      <button onClick={() => setClicked(!clicked)}>Kjør bil</button>
      <div>
        <Car />
      </div>
      <OppgaveFooter task="4" />
    </div>
  );
};
