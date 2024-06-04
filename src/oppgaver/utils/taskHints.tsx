import { ReactNode } from "react";

export const taskHints: Record<string, ReactNode> = {
  1: (
    <p>
      Bruk <code>initial</code> til å sette hvor bilen kommer fra, og{" "}
      <code>animate</code> til å sette hvor bilen skal. Det kan være lurt å
      sette hastigheten på animasjonen, hvis ikke kan det hende det går altfor
      fort.
    </p>
  ),
  2: (
    <p>
      Denne er enklere enn du skulle tro! Vi har allerede 3 verdier, og{" "}
      <code>animate</code>-prop'en animerer/reagerer hver gang en av verdiene
      sine endrer seg.
    </p>
  ),
  3: (
    <p>
      Her er nøkkelen å bruke{" "}
      <a
        href="https://www.framer.com/motion/animation/##keyframes"
        target="_blank"
      >
        <code>keyframes</code>
      </a>
      . Prøv deg frem med forskjellige tidspunkter for de forskjellige verdiene,
      og sett animasjonen til å gå uendelig mange ganger.
    </p>
  ),
  4: (
    <p>
      Her bør <code>AnimatePresence</code> brukes for å kunne definere inngang-
      og utgangs-animasjon av React-treet.
    </p>
  ),
  5: (
    <p>
      Hva skjer hvis du får bilen til å riste uendelig mange ganger, raskt?
      Kanskje det kan hjelpe å bare få noe av bilen til å riste?
      <a href="https://www.framer.com/motion/gestures/" target="_blank">
        Her kan du lese om <code>gestures</code> som kan brukes ved hover o.l.
      </a>
    </p>
  ),
  6: (
    <p>
      Se visuelt løsningsforslag for et forslag til animasjoner. Her kan du være
      kreativ!
    </p>
  ),
  7: (
    <p>
      Tenk at alle boblene skal komme fra bunnen av skjermen og flyte opp mot
      toppen av skjermen. Her er nøkkelen å rendre ut et antall bobler, f.eks.
      50, og deretter bruke tallet til boblen til å tilfeldig gi boblen en
      plassering, hastighet, delay og størrelse.
    </p>
  ),
  8: (
    <p>
      Her kan det være lurt å ta i bruk <code>variants</code> på selve SVG'en,
      ved å si at SVG'en skal animeres mellom to forskjellige varianter basert
      på om knappen er klikket på eller ikke. Dermed kan man sende inn{" "}
      <code>variants-prop'en</code> til <code>children</code> og definere hva
      som gjelder for de to forskjellige variantene.{" "}
      <a
        href="https://www.framer.com/motion/animation/#variants"
        target="_blank"
      >
        Les mer om variants her.
      </a>
      <br />
      <br></br>
      Hva er forskjellen på tre horisontale streker og et kryss? For å endre på
      hvordan strekene ser ut bør du leke deg med <code>d</code>-prop'en, som er
      en string som definerer hvordan streken skal tegnes. Men det er kanskje
      bare to av strekene som trenger dette?
    </p>
  ),
  9: (
    <p>
      Her må nok viserne roteres. Men, rotasjon skjer vanligvis rundt midten av
      elementet. Her må vi derfor forskyve rotasjonen til å rundt enden av
      viseren. Dette kan gjøres ved å sette <code>originX</code> og{" "}
      <code>originY</code> som <code>style</code> på elementet man ønsker å
      forskyve ankerpunktet til. Eksempel:{" "}
      <code>originX: "30px", originY: "80%"</code>. Hvor mye må man forskyve
      ankerpunktet dersom det opprinnelige ankerpunktet er på midten?
    </p>
  ),
  10: (
    <p>
      Her må du ta i bruk <code>variants</code>. SVG'en definerer hvilke
      varianter som gjelder ved innlasting og ved animering, mens hver figur får
      tilegnet varianten. Her må man bruke <code>dynamic variants</code>, som
      innebærer at man kan sende med props til selve varianten.{" "}
      <a
        href="https://www.framer.com/motion/animation/##dynamic-variants"
        target="_blank"
      >
        Les mer om <code>dynamic variants</code> med <code>custom</code>-prop
        her.
      </a>
    </p>
  ),
  11: (
    <p>
      Her må du ta i bruk <code>useScroll</code> for å hente ut hvor man er i
      scroll. Deretter må du mappe denne progresjonen om til en faktisk verdi i
      form av <code>MotionValue</code> med <code>useTransform</code>. På denne
      måten kan du f.eks. si at scroll-progress mellom [0,1] skal tilsvare [0px,
      500px].{" "}
      <a
        href="https://www.framer.com/motion/scroll-animations/"
        target="_blank"
      >
        Les mer om scroll-animasjoner her.
      </a>
      <br />
      Deretter bør du forskyve bildene med en slik verdi etterhvert som man
      scroller, slik at bildene scroller saktere. Dette er bare én av mange
      måter å lage parallax på.
      <br />
      <br />
      Dersom du ønsker å rendre ting etterhvert som de synes på siden, er det
      gesture <code>whileInView</code> som er relevant å bruke.
    </p>
  ),
};
