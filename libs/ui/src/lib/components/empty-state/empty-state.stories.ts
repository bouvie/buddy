import { Meta, StoryObj, argsToTemplate } from '@storybook/angular';
import { EmptyStateComponent } from './empty-state.component';
import { EMPTY_STATE_SIZES } from './empty-state.types';

const meta: Meta<EmptyStateComponent> = {
  title: 'Design System / Components / EmptyState',
  component: EmptyStateComponent,
  tags: ['autodocs'],
  parameters: { layout: 'padded', figmaUrl: 'https://www.figma.com/design/5MS7DIRcSDz7lYm0tjze7x?node-id=27-59' },
  argTypes: {
    size: { control: 'select', options: EMPTY_STATE_SIZES },
    title: { control: 'text' },
    description: { control: 'text' },
    actionLabel: { control: 'text' },
  },
  args: {
    size: 'md',
    title: 'Aucun animal trouvé',
    description: 'Ajoutez votre premier compagnon pour commencer à suivre sa santé.',
    actionLabel: 'Ajouter un animal',
  },
};

export default meta;
type Story = StoryObj<EmptyStateComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `<k10-empty-state ${argsToTemplate(args)}></k10-empty-state>`,
  }),
};

export const AllSizes: Story = {
  render: () => ({
    imports: [EmptyStateComponent],
    template: `
      <div style="display:flex;flex-direction:column;gap:32px;background:var(--k10-color-bg)">
        <div style="border:1px solid var(--k10-color-border);border-radius:16px">
          <k10-empty-state size="sm" title="Small" description="Vue compacte."></k10-empty-state>
        </div>
        <div style="border:1px solid var(--k10-color-border);border-radius:16px">
          <k10-empty-state size="md" title="Medium" description="Vue standard." actionLabel="Ajouter"></k10-empty-state>
        </div>
        <div style="border:1px solid var(--k10-color-border);border-radius:16px">
          <k10-empty-state size="lg" title="Large" description="Vue ample pour page dédiée." actionLabel="Commencer"></k10-empty-state>
        </div>
      </div>
    `,
  }),
};
