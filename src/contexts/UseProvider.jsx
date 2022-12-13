import { useState, createContext } from "react";
import photo1 from "../assets/product-1.jpg";
import photo2 from "../assets/product-2.jpg";
import photo3 from "../assets/product-3.jpg";
import photo4 from "../assets/product-4.jpg";

export const Context = createContext({});

const UseProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [itensStyle, setItensStyle] = useState({ display: "none" });
  const [itensValue, setItensValue] = useState(0);
  const [resultCart, setResultCart] = useState({ display: "none" });
  const [emptyCart, setEmptyCart] = useState({ display: "flex" });
  const [calc, setCalc] = useState("");
  const [calcResult, setCalcResult] = useState("");

  const photos = [photo1, photo2, photo3, photo4];
  const [photo, setPhoto] = useState(photos[0]);

  const sneakers = (125).toFixed(2);
  const sneakersResul = (sneakers * count).toFixed(2);

  const delCart = () => {
    setResultCart({ display: "none" });
    setEmptyCart({ display: "flex" });
    setItensValue(0);
  };

  const addCart = () => {
    if (count == 0) {
      setCalc("");
      setCalcResult("");
      setItensStyle({ display: "none" });
    } else if (count > 0) {
      setCalc(`$${sneakers} x ${count}`);
      setCalcResult(` $${sneakersResul}`);
      setItensStyle({ display: "flex" });
      setItensValue(count);
      setResultCart({ display: "block" });
      setEmptyCart({ display: "none" });
    }
  };
  const handleNext = () => {
    if (photo == photos[0]) {
      setPhoto(photos[1]);
    } else if (photo == photos[1]) {
      setPhoto(photos[2]);
    } else if (photo == photos[2]) {
      setPhoto(photos[3]);
    } else if (photo == photos[3]) {
      setPhoto(photos[0]);
    }
  };

  const handlePrevious = () => {
    if (photo == photos[0]) {
      setPhoto(photos[3]);
    } else if (photo == photos[1]) {
      setPhoto(photos[0]);
    } else if (photo == photos[2]) {
      setPhoto(photos[1]);
    } else if (photo == photos[3]) {
      setPhoto(photos[2]);
    }
  };
  return (
    <Context.Provider
      value={{
        count,
        setCount,
        addCart,
        delCart,
        itensStyle,
        itensValue,
        resultCart,
        emptyCart,
        calc,
        calcResult,
        handleNext,
        handlePrevious,
        photo,
        setPhoto,
        photos,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default UseProvider;
