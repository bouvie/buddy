import { Meta, StoryObj } from '@storybook/angular';
import { SkeletonComponent } from './skeleton.component';

const meta: Meta<SkeletonComponent> = {
  title: 'Design System / Components / Skeleton',
  component: SkeletonComponent,
  tags: ['autodocs'],
  parameters: { layout: 'padded', figmaUrl: 'https://www.figma.com/design/5MS7DIRcSDz7lYm0tjze7x?node-id=29-69' },
  argTypes: {
    shape: { control: 'select', options: ['rectangle', 'circle', 'text', 'card'] },
    count: { control: { type: 'range', min: 1, max: 5 } },
  },
  args: { shape: 'rectangle', count: 1 },
};

export default meta;
type Story = StoryObj<SkeletonComponent>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => ({
    imports: [SkeletonComponent],
    template: `
      <div style="display:flex;flex-direction:column;gap:24px;padding:24px;background:#0C1219;max-width:360px">
        <div>
          <p style="color:#68788C;font-size:10px;text-transform:uppercase;letter-spacing:.08em;margin:0 0 12px">Shapes</p>
          <div style="display:flex;align-items:center;gap:16px">
            <k10-skeleton shape="circle"></k10-skeleton>
            <k10-skeleton shape="card"></k10-skeleton>
            <div style="flex:1;display:flex;flex-direction:column;gap:8px">
              <k10-skeleton shape="text"></k10-skeleton>
              <k10-skeleton shape="text"></k10-skeleton>
              <k10-skeleton shape="rectangle"></k10-skeleton>
            </div>
          </div>
        </div>
        <div>
          <p style="color:#68788C;font-size:10px;text-transform:uppercase;letter-spacing:.08em;margin:0 0 12px">Repeated text lines</p>
          <k10-skeleton shape="text" [count]="3"></k10-skeleton>
        </div>
      </div>
    `,
  }),
};
