import React from 'react';
import CowIcon from './CowIcon';

export default {
  title: 'Icons/VaquitaIcon',
  component: CowIcon,
  argTypes: {
    size: {
      control: { type: 'range', min: 50, max: 300, step: 10 },
      description: 'Ancho y alto del icono en píxeles',
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
  size: 100,
  fill: 'currentColor'
};




