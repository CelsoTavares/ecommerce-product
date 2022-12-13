import Modal from "react-modal";
import "./modalHere.css";
import { useContext } from "react";
import { Context } from "../../contexts/UseProvider";
import next from "../../assets/icon-next.svg";
import previous from "../../assets/icon-previous.svg";
import min1 from "../../assets/min-1.jpg";
import min2 from "../../assets/min-2.jpg";
import min3 from "../../assets/min-3.jpg";
import min4 from "../../assets/min-4.jpg";

Modal.setAppElement("#root");

const ModalHere = ({ modalIsOpen, setIsOpen }) => {
  const { handleNext, handlePrevious, photo, setPhoto, photos } =
    useContext(Context);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
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
  );
};

export default ModalHere;
