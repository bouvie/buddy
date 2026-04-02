import { Meta, StoryObj } from '@storybook/angular';
import { SkeletonComponent } from './skeleton.component';

const meta: Meta<SkeletonComponent> = {
  title: 'Design System / Components / Skeleton',
  component: SkeletonComponent,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    shape: { control: 'select', options: ['rectangle', 'circle', 'text'], description: 'Forme du placeholder' },
    count: { control: { type: 'range', min: 1, max: 5 }, description: 'Nombre de placeholders empilés' },
  },
  args: { shape: 'rectangle', count: 1 },
};

export default meta;
type Story = StoryObj<SkeletonComponent>;

export const Default: Story = {};

export const CardPlaceholder: Story = {
  render: () => ({
    imports: [SkeletonComponent],
    template: `
      <div class="space-y-3 bg-k9-surface p-4 rounded-md max-w-xs">
        <k9-skeleton shape="circle" />
        <k9-skeleton shape="text" [count]="2" />
        <k9-skeleton shape="rectangle" />
      </div>
    `,
  }),
};
