import { Car } from "../Car";
import { OppgaveFooter } from "./OppgaveFooter";

export const Oppgave1 = () => {
  return (
    <div className="task-container">
      <h2>
        Klarer du å få bilen til å kjøre inn fra venstre, og stoppe i midten?
      </h2>
      <div>
        <Car />
      </div>

      <OppgaveFooter task="1" />
    </div>
  );
};
