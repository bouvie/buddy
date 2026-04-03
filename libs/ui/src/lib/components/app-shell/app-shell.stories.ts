import { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { provideRouter } from '@angular/router';
import { AppShellComponent } from './app-shell.component';
import { TopbarComponent } from '../topbar/topbar.component';
import { BottomNavComponent } from '../bottom-nav/bottom-nav.component';
import { SideNavComponent } from '../side-nav/side-nav.component';

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

const SHELL_IMPORTS = [TopbarComponent, BottomNavComponent, SideNavComponent];

const meta: Meta<AppShellComponent> = {
  title: 'Design System / Shell / AppShell',
  component: AppShellComponent,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({ providers: [provideRouter([])] }),
  ],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<AppShellComponent>;

export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
  render: () => ({
    imports: SHELL_IMPORTS,
    props: { navItems: NAV_ITEMS },
    template: `
      <k9-app-shell>
        <k9-topbar>
          <span slot="start" style="color:#DEE3E9;font-family:Manrope,sans-serif;font-weight:700;font-size:18px">K9 Pro</span>
        </k9-topbar>
        <k9-bottom-nav [items]="navItems" />
        <div style="padding:24px;color:#DEE3E9;font-family:Manrope,sans-serif">
          <h2 style="font-size:24px;font-weight:600;margin:0 0 8px">Tableau de bord</h2>
          <p style="color:#8E928B;font-size:14px;margin:0">Contenu de la page</p>
        </div>
      </k9-app-shell>
    `,
  }),
};

export const Desktop: Story = {
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
  render: () => ({
    imports: SHELL_IMPORTS,
    props: { navItems: NAV_ITEMS },
    template: `
      <k9-app-shell>
        <k9-topbar>
          <span slot="start" style="color:#DEE3E9;font-family:Manrope,sans-serif;font-weight:700;font-size:18px">K9 Pro</span>
        </k9-topbar>
        <k9-side-nav [items]="navItems">
          <span slot="header" style="color:#DEE3E9;font-family:Manrope,sans-serif;font-weight:700;font-size:18px">K9 Pro</span>
        </k9-side-nav>
        <k9-bottom-nav [items]="navItems" />
        <div style="padding:24px;color:#DEE3E9;font-family:Manrope,sans-serif">
          <h2 style="font-size:24px;font-weight:600;margin:0 0 8px">Tableau de bord</h2>
          <p style="color:#8E928B;font-size:14px;margin:0">Contenu de la page</p>
        </div>
      </k9-app-shell>
    `,
  }),
};

export const KeyboardOpen: Story = {
  name: 'Mobile — clavier ouvert',
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
  render: () => ({
    imports: SHELL_IMPORTS,
    props: { navItems: NAV_ITEMS, keyboardVisible: true },
    template: `
      <k9-app-shell [keyboardVisible]="keyboardVisible">
        <k9-topbar>
          <span slot="start" style="color:#DEE3E9;font-family:Manrope,sans-serif;font-weight:700;font-size:18px">K9 Pro</span>
        </k9-topbar>
        <k9-bottom-nav [items]="navItems" />
        <div style="padding:24px;color:#DEE3E9;font-family:Manrope,sans-serif">
          <p style="color:#8E928B;font-size:14px;margin:0 0 12px">La bottom nav est masquée quand le clavier est ouvert</p>
          <input style="width:100%;padding:12px;background:#252A30;border:1px solid #434842;border-radius:8px;color:#DEE3E9;font-family:Manrope,sans-serif;font-size:14px;outline:none" placeholder="Rechercher..." autofocus />
        </div>
      </k9-app-shell>
    `,
  }),
};
