import "./openCart.css";
import min1 from "../../assets/min-1.jpg";
import del from "../../assets/icon-delete.svg";
import { useContext } from "react";
import { Context } from "../../contexts/UseProvider";

const OpenCart = ({ position }) => {
  const { delCart, resultCart, emptyCart, calc, calcResult } =
    useContext(Context);

  return (
    <div style={{ top: position }} className="openCart">
      <span>Cart</span>
      <div className="cartResult" style={resultCart}>
        <div className="adjust">
          <img className="minSneakers" src={min1} alt="photo" />

          <div>
            <p>Fall Limited Edition Sneakers</p>
            <p className="result">
              {calc}
              <strong>{calcResult}</strong>
            </p>
          </div>
          <img onClick={delCart} className="del" src={del} alt="delete" />
        </div>

        <button>Checkout</button>
      </div>
      <span className="empty" style={emptyCart}>
        Your cart is empty
      </span>
    </div>
  );
};

export default OpenCart;
