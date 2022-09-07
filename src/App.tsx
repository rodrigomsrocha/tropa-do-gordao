import { useState } from "react";
import styles from "./App.module.scss";

function App() {
  const [isTropaDoGordaoActive, setIsTropaDoGordaoActive] = useState(false);

  function toggleTropaDoGordao() {
    setIsTropaDoGordaoActive((state) => !state);
  }

  return (
    <div className={styles.container}>
      {isTropaDoGordaoActive && (
        <video width="100%" autoPlay>
          <source src="/assets/tropa-gordao.mp4" type="video/mp4" />
          Liga o javascript
        </video>
      )}
      <h1>Tropa do gordão?</h1>
      <button onClick={toggleTropaDoGordao}>
        {isTropaDoGordaoActive ? "Não" : "Sim"}
      </button>
    </div>
  );
}

export default App;
