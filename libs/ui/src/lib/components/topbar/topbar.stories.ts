import { Meta, StoryObj } from '@storybook/angular';
import { TopbarComponent } from './topbar.component';

const meta: Meta<TopbarComponent> = {
  title: 'Design System / Shell / Topbar',
  component: TopbarComponent,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen', figmaUrl: 'https://www.figma.com/design/7t9yhZTrDeEa3S5XwgRiXP?node-id=14-68' },
};

export default meta;
type Story = StoryObj<TopbarComponent>;

export const Default: Story = {
  render: () => ({
    template: `
      <k9-topbar>
        <span slot="start" style="color:#DEE3E9;font-family:Manrope,sans-serif;font-weight:700;font-size:18px">K9 Pro</span>
        <span slot="center" style="color:#C4C8C0;font-family:Manrope,sans-serif;font-size:14px">Dashboard</span>
        <button slot="end" style="width:32px;height:32px;border-radius:50%;background:#252A30;border:1px solid #434842;cursor:pointer">
          <svg viewBox="0 0 24 24" fill="none" stroke="#DEE3E9" stroke-width="1.5" width="16" height="16">
            <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
          </svg>
        </button>
      </k9-topbar>
    `,
  }),
};

export const StartOnly: Story = {
  render: () => ({
    template: `
      <k9-topbar>
        <span slot="start" style="color:#DEE3E9;font-family:Manrope,sans-serif;font-weight:700;font-size:18px">K9 Pro</span>
      </k9-topbar>
    `,
  }),
};

export const WithBackButton: Story = {
  render: () => ({
    template: `
      <k9-topbar>
        <button slot="start" style="display:flex;align-items:center;gap:4px;background:none;border:none;color:#DEE3E9;cursor:pointer;font-family:Manrope,sans-serif;font-size:14px;padding:0">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="20" height="20">
            <path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Retour
        </button>
        <span slot="center" style="color:#DEE3E9;font-family:Manrope,sans-serif;font-weight:600;font-size:16px">Détail</span>
      </k9-topbar>
    `,
  }),
};
