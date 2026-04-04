import { applicationConfig, type Preview } from '@storybook/angular';

const preview: Preview = {
  decorators: [
    applicationConfig({
      providers: [],
    }),
  ],
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'k10-bg',
      values: [
        { name: 'k10-bg',      value: '#0C1219' },
        { name: 'k10-surface', value: '#121D2A' },
        { name: 'k10-raised',  value: '#192538' },
        { name: 'white',       value: '#ffffff' },
      ],
    },
  },
};

export default preview;
