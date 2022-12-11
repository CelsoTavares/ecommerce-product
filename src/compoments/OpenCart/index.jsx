import "./openCart.css";
import min1 from "../../assets/min-1.jpg";
import del from "../../assets/icon-delete.svg";

const OpenCart = ({ position }) => {
  const cartResult = document.querySelector(".cartResult");
  const itens = document.querySelector(".itens");
  const empty = document.querySelector(".empty");

  function delCart() {
    cartResult.style.display = "none";
    empty.style.display = "flex";
    itens.innerHTML = 0;
  }

  return (
    <div style={{ top: position }} className="openCart">
      <span>Cart</span>
      <div className="cartResult">
        <div className="adjust">
          <img className="minSneakers" src={min1} alt="photo" />

          <div>
            <p>Fall Limited Edition Sneakers</p>
            <p className="result"> </p>
          </div>
          <img onClick={delCart} className="del" src={del} alt="delete" />
        </div>

        <button>Checkout</button>
      </div>
      <span className="empty">Your cart is empty</span>
    </div>
  );
};

export default OpenCart;
