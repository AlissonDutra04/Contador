import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  return (
    <div className="contador-container">
      <h2 className="contador-titulo">Contador</h2>
      <div className="contador-valor">{contador}</div>
      <div className="contador-botoes">
        <button className="contador-botao" onClick={incrementar}>Incrementar</button>
        <button className="contador-botao" onClick={decrementar}>Decrementar</button>
      </div>
    </div>
  );
}

export default Contador;