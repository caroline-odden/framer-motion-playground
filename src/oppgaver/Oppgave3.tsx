import { OppgaveFooter } from "./OppgaveFooter";

export const Oppgave3 = () => {
  return (
    <div className="task-container">
      <h2>
        Få boksen til å doble seg i størrelse, deretter rotere 180 grader mens
        den blir til en sirkel. Ta den tilbake til start, og gjør dette uendelig
        mange ganger, men med en liten pause mellom hver runde.
      </h2>
      <div className="spinning-box" />

      <OppgaveFooter task="3" />
    </div>
  );
};
