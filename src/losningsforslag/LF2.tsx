import { useState } from "react";
import { TextField } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const LF2 = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);

  return (
    <div>
      <div style={{ display: "flex", gap: "60px" }}>
        <motion.div
          style={{
            width: "200px",
            height: "200px",
            border: "3px dotted black",
            borderRadius: "20px",
          }}
          animate={{ x, y, rotate }}
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

      <Link to="/oppgaver/2">Tilbake til oppgaven </Link>
    </div>
  );
};
