import { Meta, StoryObj, argsToTemplate } from '@storybook/angular';
import { ToastComponent } from './toast.component';
import { TOAST_VARIANTS, TOAST_POSITIONS } from './toast.types';

const meta: Meta<ToastComponent> = {
  title: 'Design System / Components / Toast',
  component: ToastComponent,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen', figmaUrl: 'https://www.figma.com/design/7t9yhZTrDeEa3S5XwgRiXP?node-id=30-28' },
  argTypes: {
    variant: { control: 'select', options: TOAST_VARIANTS },
    position: { control: 'select', options: TOAST_POSITIONS },
    message: { control: 'text' },
    visible: { control: 'boolean' },
    duration: { control: 'number' },
    dismissible: { control: 'boolean' },
  },
  args: {
    variant: 'success',
    position: 'bottom-right',
    message: 'Opération réalisée avec succès.',
    visible: true,
    duration: 0,
    dismissible: true,
  },
};

export default meta;
type Story = StoryObj<ToastComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `<k9-toast ${argsToTemplate(args)}></k9-toast>`,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    imports: [ToastComponent],
    template: `
      <div style="position:relative;height:320px;background:var(--k9-color-bg);padding:24px">
        <k9-toast variant="info"    position="top-left"    [visible]="true" [duration]="0" message="Information disponible." style="position:absolute;top:24px;left:24px"></k9-toast>
        <k9-toast variant="success" position="top-right"   [visible]="true" [duration]="0" message="Profil mis à jour avec succès." style="position:absolute;top:24px;right:24px"></k9-toast>
        <k9-toast variant="warning" position="bottom-left" [visible]="true" [duration]="0" message="Connexion instable." style="position:absolute;bottom:24px;left:24px"></k9-toast>
        <k9-toast variant="error"   position="bottom-right"[visible]="true" [duration]="0" message="Erreur lors de l'enregistrement." style="position:absolute;bottom:24px;right:24px"></k9-toast>
      </div>
    `,
  }),
};
