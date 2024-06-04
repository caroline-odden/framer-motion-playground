import { Link } from "react-router-dom";
import "./App.css";
import { taskHints } from "./oppgaver/utils/taskHints";

function App() {
  return (
    <>
      <h1>Framer Motion Workshop</h1>
      <div className="links">
        {Object.entries(taskHints).map(([task]) => (
          <Link to={`/oppgaver/${task}`} className="card" key={task}>
            Oppgave {task}
          </Link>
        ))}
      </div>
    </>
  );
}

export default App;
