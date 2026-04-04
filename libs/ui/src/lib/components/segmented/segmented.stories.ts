import { Meta, StoryObj } from '@storybook/angular';
import { SegmentedComponent } from './segmented.component';
import { SEGMENTED_SIZES, SEGMENTED_COLORS } from './segmented.types';

const TABS = [
  { label: 'Day',   value: 'day' },
  { label: 'Week',  value: 'week' },
  { label: 'Month', value: 'month' },
];

const TABS_WITH_ICONS = [
  { label: 'List',  value: 'list',  icon: 'fa-solid fa-list' },
  { label: 'Grid',  value: 'grid',  icon: 'fa-solid fa-grid-2' },
  { label: 'Chart', value: 'chart', icon: 'fa-solid fa-chart-line' },
];

const meta: Meta<SegmentedComponent> = {
  title: 'Design System / Components / Segmented',
  component: SegmentedComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    figmaUrl: 'https://www.figma.com/design/5MS7DIRcSDz7lYm0tjze7x?node-id=12-70',
  },
  argTypes: {
    size:     { control: 'select', options: SEGMENTED_SIZES },
    color:    { control: 'select', options: SEGMENTED_COLORS },
    disabled: { control: 'boolean' },
    value:    { control: 'text' },
  },
  args: { items: TABS, value: 'day', size: 'md', color: 'primary' },
};

export default meta;
type Story = StoryObj<SegmentedComponent>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => ({
    imports: [SegmentedComponent],
    template: `
      <div style="display:flex;flex-direction:column;gap:24px;padding:32px;background:#0C1219">
        <k10-segmented [items]="tabs"    value="day"   size="md" color="primary"></k10-segmented>
        <k10-segmented [items]="tabs"    value="week"  size="sm" color="primary"></k10-segmented>
        <k10-segmented [items]="tabs"    value="month" size="md" color="accent"></k10-segmented>
        <k10-segmented [items]="tabs"    value="day"   size="md" color="secondary"></k10-segmented>
        <k10-segmented [items]="icons"   value="list"  size="md" color="primary"></k10-segmented>
        <k10-segmented [items]="tabs"    value="day"   size="md" color="primary" [disabled]="true"></k10-segmented>
      </div>
    `,
    props: { tabs: TABS, icons: TABS_WITH_ICONS },
  }),
};
