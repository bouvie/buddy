import { Meta, StoryObj, argsToTemplate } from '@storybook/angular';
import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  title: 'Design System / Components / Card',
  component: CardComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    figmaUrl: 'https://www.figma.com/file/Mu9JwRHYdwbyYVNRe63par?node-id=42:304',
  },
  argTypes: {
    title: { control: 'text', description: 'Titre affiché dans le header de la card (optionnel)' },
    footer: { control: 'boolean', description: 'Afficher la zone footer (slot [card-footer])' },
    padding: { control: 'select', options: ['none', 'sm', 'md', 'lg'] },
    elevation: { control: 'select', options: ['none', 'sm', 'md', 'lg'] },
    border: { control: 'boolean' },
    interactive: { control: 'boolean', description: 'Hover effect (translateY + shadow)' },
  },
  args: { title: '', footer: false, padding: 'md', elevation: 'md', border: true, interactive: false },
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <app-card class="max-w-xs" ${argsToTemplate(args)}>
        <p class="text-k9-body text-k9-text-secondary">Card content goes here</p>
      </app-card>
    `,
  }),
};

export const WithHeader: Story = {
  args: { title: 'Card Title', padding: 'md', elevation: 'sm' },
  render: (args) => ({
    props: args,
    template: `
      <app-card class="max-w-xs" ${argsToTemplate(args)}>
        <p class="text-k9-body text-k9-text-secondary">Content below the header</p>
      </app-card>
    `,
  }),
};

export const WithFooter: Story = {
  args: { title: 'Card with Footer', footer: true },
  render: (args) => ({
    props: args,
    template: `
      <app-card class="max-w-xs" ${argsToTemplate(args)}>
        <p class="text-k9-body text-k9-text-secondary">Main content</p>
        <div card-footer class="text-k9-label text-k9-text-muted">Footer content</div>
      </app-card>
    `,
  }),
};

export const AllElevations: Story = {
  render: () => ({
    imports: [CardComponent],
    template: `
      <div class="flex gap-4 flex-wrap">
        <app-card elevation="none" class="w-40"><p class="text-k9-body">None</p></app-card>
        <app-card elevation="sm"   class="w-40"><p class="text-k9-body">SM</p></app-card>
        <app-card elevation="md"   class="w-40"><p class="text-k9-body">MD</p></app-card>
        <app-card elevation="lg"   class="w-40"><p class="text-k9-body">LG</p></app-card>
      </div>
    `,
  }),
};
