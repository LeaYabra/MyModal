import React, { useEffect } from "react";
import "./Modal.css";

export interface MyModalProps {
  visible: boolean;
  onClose: () => void;
}

const MyModal: React.FC<MyModalProps> = ({ visible, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && visible) {
        onClose();
      }
    }

    // Ajouter un écouteur d'événements
    window.addEventListener("keydown", handleKeyDown);

    // Retirer l'écouteur d'événements
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [visible, onClose]);

  return (
    <div className={visible ? "modal show" : "modal hide"}>
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
}

export default MyModal;
