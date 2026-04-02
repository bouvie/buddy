import { Meta, StoryObj } from '@storybook/angular';
import { TabsComponent } from './tabs.component';

const SAMPLE_TABS = [
  { label: 'Profil', value: 'profile' },
  { label: 'Activité', value: 'activity' },
  { label: 'Paramètres', value: 'settings' },
];

const meta: Meta<TabsComponent> = {
  title: 'Design System / Components / Tabs',
  component: TabsComponent,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    activeTab: { control: 'text' },
  },
  args: {
    tabs: SAMPLE_TABS,
    activeTab: 'profile',
  },
};

export default meta;
type Story = StoryObj<TabsComponent>;

export const Default: Story = {};

export const WithDisabled: Story = {
  args: {
    tabs: [
      { label: 'Profil', value: 'profile' },
      { label: 'Activité', value: 'activity' },
      { label: 'Admin', value: 'admin', disabled: true },
    ],
    activeTab: 'profile',
  },
};

export const ManyTabs: Story = {
  args: {
    tabs: [
      { label: 'Santé', value: 'health' },
      { label: 'Nutrition', value: 'nutrition' },
      { label: 'Vaccins', value: 'vaccines' },
      { label: 'Documents', value: 'documents' },
    ],
    activeTab: 'health',
  },
};
