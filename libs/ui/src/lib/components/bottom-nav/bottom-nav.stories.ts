import { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { provideRouter } from '@angular/router';
import { BottomNavComponent } from './bottom-nav.component';

const ICON_HOME    = 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z';
const ICON_DOGS    = 'M20 9V7a2 2 0 00-2-2h-1M4 9V7a2 2 0 012-2h1m0 0V3m10 2V3M3 9h18M5 9v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-4 0v-5h4v5m-4 0H9';
const ICON_PROFILE = 'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z';
const ICON_ALERTS  = 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9';

const NAV_ITEMS = [
  { label: 'Accueil', route: '/',        icon: ICON_HOME },
  { label: 'Chiens',  route: '/dogs',    icon: ICON_DOGS, badge: 2 },
  { label: 'Alertes', route: '/alerts',  icon: ICON_ALERTS },
  { label: 'Profil',  route: '/profile', icon: ICON_PROFILE },
];

const meta: Meta<BottomNavComponent> = {
  title: 'Design System / Shell / BottomNav',
  component: BottomNavComponent,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({ providers: [provideRouter([])] }),
  ],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<BottomNavComponent>;

export const Default: Story = {
  render: () => ({
    props: { items: NAV_ITEMS },
    template: `
      <div style="position:fixed;bottom:0;left:0;right:0">
        <k9-bottom-nav [items]="items" />
      </div>
    `,
  }),
};

export const ThreeItems: Story = {
  render: () => ({
    props: { items: NAV_ITEMS.slice(0, 3) },
    template: `
      <div style="position:fixed;bottom:0;left:0;right:0">
        <k9-bottom-nav [items]="items" />
      </div>
    `,
  }),
};
