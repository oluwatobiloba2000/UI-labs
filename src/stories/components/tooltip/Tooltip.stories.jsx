import React from 'react';
import { Button } from '../button/Button';
import { Tooltip } from './';

export default {
  title: 'Component/Tooltip',
  component: Tooltip,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
};


const Template = (args) => {
  return <div style={{margin: '100px'}}>
        <Tooltip {...args}>
           <Button  primary={true} size='large' label={'Hover on Me to trigger tooltip '}/>
         </Tooltip>
    </div>
};

export const Top = Template.bind({});

Top.args = {
  backgroundColor: 'black',
  position: 'top',
  text: 'Tooltip',
};

export const Right = Template.bind({});
Right.args = {
  backgroundColor: 'black',
  position: 'right',
  text: 'Tooltip',
};

export const Bottom = Template.bind({});
Bottom.args = {
  backgroundColor: 'black',
  position: 'bottom',
  text: 'Tooltip',
};

export const left = Template.bind({});
left.args = {
  backgroundColor: 'black',
  position: 'left',
  text: 'Tooltip',
};
