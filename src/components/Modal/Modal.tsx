// Modal.tsx
import React, { useEffect, Dispatch, SetStateAction } from "react";
import "./Modal.css";


type MyModalProps = {
  visible: boolean;
  onClose: () => void;
  setVisible: Dispatch<SetStateAction<boolean>>;
};

const MyModal: React.FC<MyModalProps> = ({ visible, onClose, setVisible }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && visible) {
        onClose();
      }
    };
  
    // Ajouter un écouteur d'événements
    window.addEventListener("keydown", handleKeyDown);
  
    // Retirer l'écouteur d'événements lors du démontage
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [visible, onClose]);  // Assurez-vous que visible et onClose sont dans la liste des dépendances
  
  

  
  useEffect(() => {
    // Mettre à jour la visibilité externe via la prop setVisible
    setVisible(visible);
  }, [visible]);
  

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
};

export default MyModal;
