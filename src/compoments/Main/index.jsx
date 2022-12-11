import "./main.css";
import { useState, useEffect, useRef } from "react";
import { CgShoppingCart } from "react-icons/cg";
import Modal from "react-modal";
import photo1 from "../../assets/product-1.jpg";
import photo2 from "../../assets/product-2.jpg";
import photo3 from "../../assets/product-3.jpg";
import photo4 from "../../assets/product-4.jpg";
import min1 from "../../assets/min-1.jpg";
import min2 from "../../assets/min-2.jpg";
import min3 from "../../assets/min-3.jpg";
import min4 from "../../assets/min-4.jpg";
import addition from "../../assets/icon-plus.svg";
import subtraction from "../../assets/icon-minus.svg";
import next from "../../assets/icon-next.svg";
import previous from "../../assets/icon-previous.svg";

Modal.setAppElement("#root");

const Main = () => {
  const photos = [photo1, photo2, photo3, photo4];
  const [photo, setPhoto] = useState(photos[0]);
  const [count, setCount] = useState(0);

  function addCart() {
    const itens = document.querySelector(".itens");
    const result = document.querySelector(".result");
    const cartResult = document.querySelector(".cartResult");
    const empty = document.querySelector(".empty");
    const sneakers = 125;

    if (count == 0) {
      itens.style.display = "none";
      result.innerHTML = "";
    } else if (count > 0) {
      itens.style.display = "flex";
      itens.innerHTML = count;
      result.innerHTML = `$${sneakers}.00 x ${count} <strong>$${
        sneakers * count
      }.00</strong>`;
      cartResult.style.display = "block";
      empty.style.display = "none";
    }
  }

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

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  function handleNext() {
    if (photo == photos[0]) {
      setPhoto(photos[1]);
    } else if (photo == photos[1]) {
      setPhoto(photos[2]);
    } else if (photo == photos[2]) {
      setPhoto(photos[3]);
    } else if (photo == photos[3]) {
      setPhoto(photos[0]);
    }
  }

  function handlePrevious() {
    if (photo == photos[0]) {
      setPhoto(photos[3]);
    } else if (photo == photos[1]) {
      setPhoto(photos[0]);
    } else if (photo == photos[2]) {
      setPhoto(photos[1]);
    } else if (photo == photos[3]) {
      setPhoto(photos[2]);
    }
  }
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
            <Modal
              className="modal"
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              overlayClassName="Overlay"
            >
              <div className="productsModal">
                <div onClick={closeModal} className="divClose">
                  X
                </div>
                <div onClick={handleNext} className="nextModal">
                  <img src={next} alt="next" />
                </div>
                <div onClick={handlePrevious} className="previousModal">
                  <img src={previous} alt="previous" />
                </div>
                <img className="imageModal" src={photo} alt="product" />
                <div className="minModal">
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
            </Modal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
