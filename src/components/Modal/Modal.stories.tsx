import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MyModal from './Modal';

export default {
  title: 'ReactComponentLibrary/MyModal',
  component: MyModal,
} as ComponentMeta<typeof MyModal>;

const Template: ComponentStory<typeof MyModal> = (args :any) => <MyModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  visible: true,
  onClose: () => console.log("Modal closed"),
};
