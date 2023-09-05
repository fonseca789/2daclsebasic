import { useState } from "react";
export const useCount = (valueInicial = 0) => {
  const [contador, setContador] = useState(valueInicial);
  //se define las funciones
  const incrementar = (value = 1) => {
    setContador(contador + value);
  };
  const decrementar = (value = 1, negativo = true) => {
    if (!negativo && contador - value < 0) {
      setContador(0);
    } else {
      setContador(contador - value);
    }
  };
  const reset = () => {
    setContador(0);
  };
  return {
    contador,
    incrementar,
    decrementar,
    reset,
  };
};
