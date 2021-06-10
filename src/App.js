import { useState } from "react";

function App() {
  // Declaraciones js
  const anchoAleatorio = Math.floor(Math.random() * window.innerWidth);
  const alturaAleatoria = Math.floor(Math.random() * window.innerHeight);
  const [posicionAleatoria, setPosicionAleatoria] = useState({
    top: alturaAleatoria,
    left: anchoAleatorio,
  });

  const moverGlobo = () => {
    setTimeout(() => {
      const nuevaPosicionAleatoria = {
        top: alturaAleatoria,
        left: anchoAleatorio,
      };
      setPosicionAleatoria(nuevaPosicionAleatoria);
    }, 300);
  };
  const [contador, setContador] = useState(0);
  const sumarContador = () => {
    setContador(contador + 1);
  };
  // Fin declaraciones
  return (
    <>
      <div className="contenedor">
        <p className="contador"></p>
        <p class="contador">Contador: {contador}</p>
        <i
          className="globo fab fa-fly"
          style={posicionAleatoria}
          onMouseOver={moverGlobo}
          onClick={sumarContador}
        ></i>
      </div>
    </>
  );
}

export default App;
