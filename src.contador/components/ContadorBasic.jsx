import { useCount } from "../hooks/useCount";

export const ContadorBasic = () => {
  const { contador, incrementar, decrementar, reset } = useCount(0);
  return (
    <>
      <h1>contador: {contador} </h1>
      <button className="btn btn-primary" onClick={() => incrementar()}>
        +1
      </button>
      <button className="btn btn-danger" onClick={() => reset()}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={() => decrementar()}>
        -1
      </button>
    </>
  );
};
