import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalWindow from "../../components/modal/Modal";

const Car = ({ image, mod, desc, index, func, acc }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <div
        onClick={openModal}
        className="card mx-auto my-5"
        style={{ width: "18rem" }}
      >
        <span>ID:{index}</span>
        <img src={image} className="card-img-top" alt={mod} />
        <div className="card-body">
          <h5 className="card-title">{mod}</h5>
          <p className="card-text">{desc}</p>

          <Link to={`/catalog/${index}`} className="btn btn-primary">
            Go details
          </Link>
        </div>
      </div>
      <ModalWindow
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        img={image}
        model={mod}
        desc={desc}
        func={func}
        acc={acc}
      />
    </div>
  );
};

export default Car;
