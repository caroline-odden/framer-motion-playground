import { OppgaveFooter } from "./OppgaveFooter";

export const Oppgave10 = () => {
  return (
    <div className="task-container">
      <h2>
        Klarer du å tegne opp alle disse figurene i forskjellig rekkefølge etter
        render? Bonus om du klarer å variere hastighet, farger og andre
        attributter.
      </h2>
      <svg width="600" height="600" viewBox="0 0 600 600">
        <circle cx="100" cy="100" r="80" stroke="#ff0055" fill="none" />
        <line x1="220" y1="30" x2="360" y2="170" stroke="#00cc88" />
        <line x1="220" y1="170" x2="360" y2="30" stroke="#00cc88" />
        <rect
          width="140"
          height="140"
          x="410"
          y="30"
          rx="20"
          fill="none"
          stroke="#0099ff"
        />
        <circle cx="100" cy="300" r="80" fill="none" stroke="#0099ff" />
        <line x1="220" y1="230" x2="360" y2="370" stroke="#ff0055" />
        <line x1="220" y1="370" x2="360" y2="230" stroke="#ff0055" />
        <rect
          width="140"
          height="140"
          x="410"
          fill="none"
          y="230"
          rx="20"
          stroke="#00cc88"
        />
        <circle cx="100" cy="500" r="80" fill="none" stroke="#00cc88" />
        <line x1="220" y1="430" x2="360" y2="570" stroke="#0099ff" />
        <line x1="220" y1="570" x2="360" y2="430" stroke="#0099ff" />
        <rect
          width="140"
          height="140"
          x="410"
          y="430"
          rx="20"
          fill="none"
          stroke="#ff0055"
        />
      </svg>

      <OppgaveFooter task="10" />
    </div>
  );
};
