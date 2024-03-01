import React from "react";
import { Story, Meta } from "@storybook/react";
import MyModal, { MyModalProps } from "./Modal";

export default {
  title: "MyModal",
  component: MyModal,
} as Meta;

const Template: Story<MyModalProps> = (args) => {
  const handleClose = () => {
    // Mettez visible à false en appelant la fonction setVisible de vos props
    args.setVisible(false);
    console.log("Modal is  closed.");
  };

  return <MyModal {...args} onClose={handleClose} />;
};

export const Default = Template.bind({});
Default.args = {
  visible: false,
  onClose: () => {},
  setVisible: () => {}, // Assurez-vous que setVisible est bien défini ici
};
