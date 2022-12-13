import "./main.css";
import { useState, useEffect, useContext } from "react";
import { CgShoppingCart } from "react-icons/cg";
import min1 from "../../assets/min-1.jpg";
import min2 from "../../assets/min-2.jpg";
import min3 from "../../assets/min-3.jpg";
import min4 from "../../assets/min-4.jpg";
import addition from "../../assets/icon-plus.svg";
import subtraction from "../../assets/icon-minus.svg";
import next from "../../assets/icon-next.svg";
import previous from "../../assets/icon-previous.svg";
import { Context } from "../../contexts/UseProvider";
import ModalHere from "../ModalHere";

const Main = () => {
  const {
    count,
    setCount,
    addCart,
    handleNext,
    handlePrevious,
    photo,
    setPhoto,
    photos,
  } = useContext(Context);

  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const min = document.querySelectorAll(".min img");

    min.forEach((item) => (item.style.border = "none"));

    if (photo == photos[0]) {
      min[0].style.border = "2px solid hsl(26, 100%, 55%)";
    } else if (photo == photos[1]) {
      min[1].style.border = "2px solid hsl(26, 100%, 55%)";
    } else if (photo == photos[2]) {
      min[2].style.border = "2px solid hsl(26, 100%, 55%)";
    } else if (photo == photos[3]) {
      min[3].style.border = "2px solid hsl(26, 100%, 55%)";
    }
  }, [photo]);

  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <main>
      <section>
        <div className="products">
          <div onClick={handleNext} className="next">
            <img src={next} alt="next" />
          </div>
          <div onClick={handlePrevious} className="previous">
            <img src={previous} alt="previous" />
          </div>
          <img
            onClick={openModal}
            className="image"
            src={photo}
            alt="product"
          />
          <div className="min">
            <img
              onClick={() => setPhoto(photos[0])}
              src={min1}
              alt="first photo"
            />
            <img
              onClick={() => setPhoto(photos[1])}
              src={min2}
              alt="second photo"
            />
            <img
              onClick={() => setPhoto(photos[2])}
              src={min3}
              alt="third photo"
            />
            <img
              onClick={() => setPhoto(photos[3])}
              src={min4}
              alt="fourth photo"
            />
          </div>
        </div>
        <div className="information">
          <p className="company">Sneaker Company</p>
          <h2>Fall Limited Edition Sneakers</h2>
          <p className="text">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="numbers">
            <div className="discount">
              <h3>$125.00</h3> <span>50%</span>
            </div>
            <p className="price">$250.00</p>
          </div>

          <div className="add">
            <span className="amount">
              <img
                onClick={() => {
                  count === 0 ? 0 : setCount(count - 1);
                }}
                className="subtration"
                src={subtraction}
                alt="subtraction"
              />

              <strong>{count}</strong>

              <img
                onClick={() => setCount(count + 1)}
                className="addition"
                src={addition}
                alt="addition"
              />
            </span>

            <button onClick={addCart}>
              <span className="icon">
                <CgShoppingCart />
              </span>
              Add to cart
            </button>
            <ModalHere modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
