import { Meta, StoryObj, argsToTemplate } from '@storybook/angular';
import { signal } from '@angular/core';
import { SearchComponent } from './search.component';
import { SEARCH_SIZES } from './search.types';

const meta: Meta<SearchComponent> = {
  title: 'Design System / Components / Search',
  component: SearchComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    figmaUrl: 'https://www.figma.com/design/5MS7DIRcSDz7lYm0tjze7x?node-id=10-88',
  },
  argTypes: {
    size: { control: 'select', options: SEARCH_SIZES },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    value: { control: 'text' },
  },
  args: { size: 'md', placeholder: 'Search sessions…', disabled: signal(false) },
};

export default meta;
type Story = StoryObj<SearchComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `<div style="max-width:360px"><k10-search ${argsToTemplate(args)}></k10-search></div>`,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    imports: [SearchComponent],
    template: `
      <div style="display:flex;flex-direction:column;gap:16px;padding:24px;background:#0C1219;max-width:360px">
        <k10-search size="sm" placeholder="Small search…"></k10-search>
        <k10-search size="md" placeholder="Medium search…"></k10-search>
        <k10-search size="lg" placeholder="Large search…"></k10-search>
        <k10-search size="md" placeholder="With value…" value="Heart rate"></k10-search>
        <k10-search size="md" placeholder="Disabled…" [disabled]="true"></k10-search>
      </div>
    `,
  }),
};
