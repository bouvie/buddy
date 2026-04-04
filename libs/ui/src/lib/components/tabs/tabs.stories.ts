import { Meta, StoryObj } from '@storybook/angular';
import { TabsComponent } from './tabs.component';
import { TABS_VARIANTS } from './tabs.types';

const SAMPLE_TABS = [
  { label: 'Day',   value: 'day' },
  { label: 'Week',  value: 'week' },
  { label: 'Month', value: 'month' },
];

const meta: Meta<TabsComponent> = {
  title: 'Design System / Components / Tabs',
  component: TabsComponent,
  tags: ['autodocs'],
  parameters: { layout: 'padded', figmaUrl: 'https://www.figma.com/design/5MS7DIRcSDz7lYm0tjze7x?node-id=12-42' },
  argTypes: {
    variant:   { control: 'select', options: TABS_VARIANTS },
    activeTab: { control: 'text' },
  },
  args: {
    tabs: SAMPLE_TABS,
    activeTab: 'day',
    variant: 'primary',
  },
};

export default meta;
type Story = StoryObj<TabsComponent>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => ({
    imports: [TabsComponent],
    template: `
      <div style="display:flex;flex-direction:column;gap:32px;padding:32px;background:#0C1219;max-width:400px">

        <div>
          <p style="color:#68788C;font-size:10px;text-transform:uppercase;letter-spacing:.08em;margin:0 0 12px">Primary</p>
          <k10-tabs [tabs]="tabs" activeTab="day" variant="primary"></k10-tabs>
        </div>

        <div>
          <p style="color:#68788C;font-size:10px;text-transform:uppercase;letter-spacing:.08em;margin:0 0 12px">Accent</p>
          <k10-tabs [tabs]="tabs" activeTab="week" variant="accent"></k10-tabs>
        </div>

        <div>
          <p style="color:#68788C;font-size:10px;text-transform:uppercase;letter-spacing:.08em;margin:0 0 12px">Underline</p>
          <k10-tabs [tabs]="tabs" activeTab="month" variant="underline"></k10-tabs>
        </div>

        <div>
          <p style="color:#68788C;font-size:10px;text-transform:uppercase;letter-spacing:.08em;margin:0 0 12px">With disabled</p>
          <k10-tabs [tabs]="tabsDisabled" activeTab="day" variant="primary"></k10-tabs>
        </div>

      </div>
    `,
    props: {
      tabs: SAMPLE_TABS,
      tabsDisabled: [
        { label: 'Day',   value: 'day' },
        { label: 'Week',  value: 'week' },
        { label: 'Month', value: 'month', disabled: true },
      ],
    },
  }),
};
