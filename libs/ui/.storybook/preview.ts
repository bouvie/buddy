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
      default: 'k9-dark',
      values: [
        { name: 'k9-dark', value: '#060E20' },
        { name: 'k9-surface', value: '#192540' },
        { name: 'white', value: '#ffffff' },
      ],
    },
  },
};

export default preview;
