import React, { useState } from 'react';
import MyModal, { MyModalProps } from './Modal';

export default {
  title: 'MyModal',
  component: MyModal,
};

export const VisibleModal = (args: MyModalProps) => {
  const handleClose = () => {
    args.setVisible(false);
    console.log('Modal is closed.');
  };

  return <MyModal {...args} onClose={handleClose} />;
};

export const HiddenModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpen = () => {
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };

  // prop setVisible
  return (
    <>
      <button onClick={handleOpen}>Open Modal</button>
      <MyModal visible={isModalVisible} onClose={handleClose} setVisible={setIsModalVisible} />
    </>
  );
};

VisibleModal.args = {
  visible: true,
  onClose: () => {},
  setVisible: () => {},
};
