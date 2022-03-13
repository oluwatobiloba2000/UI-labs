import React from 'react';
import { Button } from '../button/Button';

import { Tooltip } from './';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Component/Tooltip',
  component: Tooltip,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  return <div style={{margin: '100px'}}>
        <Tooltip {...args}>
           <Button  primary={true} size='large' label={'Hover on Me to trigger tooltip '}/>
         </Tooltip>
    </div>
};

export const Top = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
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
