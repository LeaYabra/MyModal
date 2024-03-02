import React, { useEffect, Dispatch, SetStateAction, useRef } from "react";
import "./Modal.css";

export type MyModalProps = {
  visible: boolean;
  onClose: () => void;
  setVisible: Dispatch<SetStateAction<boolean>>;
};

const MyModal: React.FC<MyModalProps> = ({ visible, onClose, setVisible }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && visible) {
        onClose();
      }
    };

    // Ajout d'un écouteur d'événements
    window.addEventListener("keydown", handleKeyDown);

    // Retirer l'écouteur d'événements lors du démontage
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [visible, onClose]); 

  useEffect(() => {
    setVisible(visible);
  }, [visible]);

  // Fonction pour gérer le clic sur le fond de la modal
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === modalRef.current) {
      onClose();
    }
  };

  return (
    <div
      ref={modalRef}
      className={visible ? "modal show" : "modal hide"}
      onClick={handleBackdropClick}
    >
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <p> Employé créé avec succès !</p>
        <button className="close-bottom-right" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default MyModal;
