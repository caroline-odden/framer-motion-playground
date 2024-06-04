import { OppgaveFooter } from "./OppgaveFooter";

export const Oppgave11 = () => {
  return (
    <div className="task-container">
      <div className="parallax-container">
        <h2 className="parallax-title">
          Klarer du å lage en parallax-effekt hvor bildene på venstre side
          scroller saktere enn teksten på høyre side? Det er ønskelig at teksten
          scroller i en hastighet som gjør at bilder og tekst avsluttes omtrent
          samtidig på bunnen. Bonus om du får animert inn tekstene etterhvert
          som de kommer inn i viewport!
        </h2>
        <div className="parallax-image-wrapper">
          <img
            src={"/norge1.jpeg"}
            style={{ objectFit: "cover" }}
            width={900}
            height={700}
          />
          <img
            src={"/norge2.jpeg"}
            style={{ objectFit: "cover" }}
            width={900}
            height={700}
          />
          <img
            src={"/norge3.jpeg"}
            style={{ objectFit: "cover" }}
            width={900}
            height={700}
          />
        </div>
        <div>
          {[...Array(8)].map(() => (
            <p className="scroll-card">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              ut ex lacinia, tempus nisi nec, laoreet quam. Nulla eget nulla
              vehicula, porta libero nec, vehicula tortor. Pellentesque
              ultricies nisl vel mi mattis, et sollicitudin felis suscipit.
              Quisque convallis arcu id mauris sodales semper. Maecenas
              tincidunt odio vitae odio vehicula iaculis. Pellentesque
              sollicitudin efficitur dui in pellentesque.
            </p>
          ))}
        </div>
      </div>

      <OppgaveFooter task="11" />
    </div>
  );
};
