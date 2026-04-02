import { Meta, StoryObj, argsToTemplate } from '@storybook/angular';
import { ModalComponent } from './modal.component';
import { ButtonComponent } from '../button/button.component';
import { MODAL_SIZES } from './modal.types';

const meta: Meta<ModalComponent> = {
  title: 'Design System / Components / Modal',
  component: ModalComponent,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    size: { control: 'select', options: MODAL_SIZES },
    isOpen: { control: 'boolean' },
    title: { control: 'text' },
    dismissible: { control: 'boolean' },
  },
  args: {
    isOpen: true,
    size: 'md',
    title: 'Titre de la modale',
    dismissible: true,
  },
};

export default meta;
type Story = StoryObj<ModalComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <k9-modal ${argsToTemplate(args)}>
        <p style="color:var(--k9-color-text-secondary);margin:0">
          Contenu de la modale. Utilisez <code>ng-content</code> pour injecter du contenu arbitraire,
          et <code>[modal-footer]</code> pour la zone actions.
        </p>
      </k9-modal>
    `,
  }),
};

export const WithFooter: Story = {
  render: () => ({
    imports: [ModalComponent, ButtonComponent],
    template: `
      <k9-modal [isOpen]="true" title="Confirmer la suppression" size="sm">
        <p style="color:var(--k9-color-text-secondary);margin:0">
          Cette action est irréversible. Voulez-vous continuer ?
        </p>
        <div modal-footer style="display:flex;justify-content:flex-end;gap:12px;padding:0 24px 24px">
          <k9-button variant="ghost">Annuler</k9-button>
          <k9-button variant="danger">Supprimer</k9-button>
        </div>
      </k9-modal>
    `,
  }),
};

export const AllSizes: Story = {
  render: () => ({
    imports: [ModalComponent],
    template: `
      <div style="display:flex;flex-direction:column;gap:32px;padding:32px;background:var(--k9-color-bg)">
        <k9-modal [isOpen]="true" title="Small — 400px" size="sm" [dismissible]="false">
          <p style="color:var(--k9-color-text-secondary);margin:0">Contenu SM.</p>
        </k9-modal>
        <k9-modal [isOpen]="true" title="Medium — 560px" size="md" [dismissible]="false">
          <p style="color:var(--k9-color-text-secondary);margin:0">Contenu MD.</p>
        </k9-modal>
        <k9-modal [isOpen]="true" title="Large — 760px" size="lg" [dismissible]="false">
          <p style="color:var(--k9-color-text-secondary);margin:0">Contenu LG.</p>
        </k9-modal>
      </div>
    `,
  }),
};
