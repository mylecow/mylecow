import React from 'react';
import CowIcon from './CowIcon';

export default {
  title: 'Icons/VaquitaIcon',
  component: CowIcon,
  argTypes: {
    width: {
      control: { type: 'range', min: 50, max: 300, step: 10 },
      description: 'Ancho del icono en píxeles',
      defaultValue: 100
    },
    height: {
      control: { type: 'range', min: 50, max: 300, step: 10 },
      description: 'Alto del icono en píxeles',
      defaultValue: 100
    },
    
  },
  parameters: {
    docs: {
      description: {
        component: 'Icono de vaquita para uso en interfaces de usuario.',
      },
    },
  },
};


export const Default = (args) => <CowIcon {...args} />;
Default.args = {
  width: 100,
  height: 100,
  fill: 'currentColor'
};




