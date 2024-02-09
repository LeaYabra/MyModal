// modal.stories.js
import React, { useState } from 'react';
import Modal from './Modal';

export default {
  title: 'MyModal',
  component: Modal,
};

// Une "story" pour le composant avec la modal visible
export const VisibleModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const handleClose = () => {
    setIsModalVisible(false);
  };

  // Ajoutez la prop setVisible
  return <Modal visible={isModalVisible} onClose={handleClose} setVisible={setIsModalVisible} />;
};

// Une "story" pour le composant avec la modal cachée
export const HiddenModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpen = () => {
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };

  // Ajoutez la prop setVisible
  return (
    <>
      <button onClick={handleOpen}>Open Modal</button>
      <Modal visible={isModalVisible} onClose={handleClose} setVisible={setIsModalVisible} />
    </>
  );
};
