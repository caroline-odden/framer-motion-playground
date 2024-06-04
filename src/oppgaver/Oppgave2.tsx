import { useState } from "react";
import { OppgaveFooter } from "./OppgaveFooter";
import { TextField } from "@mui/material";

export const Oppgave2 = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);

  return (
    <div>
      <h2>Bruk verdiene fra input-slideren til å animere boksen.</h2>
      <div style={{ display: "flex", gap: "60px" }}>
        <div
          style={{
            width: "200px",
            height: "200px",
            border: "3px dotted black",
            borderRadius: "20px",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "300px",
          }}
        >
          <TextField
            label="X"
            variant="standard"
            type="number"
            value={x}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setX(Number(event.target.value));
            }}
          />
          <TextField
            label="Y"
            variant="standard"
            type="number"
            value={y}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setY(Number(event.target.value));
            }}
          />
          <TextField
            variant="standard"
            label="Rotasjon"
            type="number"
            value={rotate}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setRotate(Number(event.target.value));
            }}
          />
        </div>
      </div>

      <OppgaveFooter task="2" />
    </div>
  );
};
