import { Meta, StoryObj, argsToTemplate } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { provideRouter } from '@angular/router';
import { NavItemComponent } from './nav-item.component';
import { NAV_ITEM_VARIANTS } from './nav-item.types';

const ICON_HOME = 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z';
const ICON_DOGS = 'M20 9V7a2 2 0 00-2-2h-1M4 9V7a2 2 0 012-2h1m0 0V3m10 2V3M3 9h18M5 9v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-4 0v-5h4v5m-4 0H9';
const ICON_PROFILE = 'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z';

const meta: Meta<NavItemComponent> = {
  title: 'Design System / Shell / NavItem',
  component: NavItemComponent,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({ providers: [provideRouter([])] }),
  ],
  parameters: { layout: 'padded', figmaUrl: 'https://www.figma.com/design/7t9yhZTrDeEa3S5XwgRiXP?node-id=14-52' },
  argTypes: {
    variant: { control: 'select', options: NAV_ITEM_VARIANTS },
  },
  args: {
    item: { label: 'Accueil', route: '/', icon: ICON_HOME },
    variant: 'bottom',
  },
};

export default meta;
type Story = StoryObj<NavItemComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `<k9-nav-item ${argsToTemplate(args)} />`,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    props: {
      homeItem:    { label: 'Accueil', route: '/', icon: ICON_HOME },
      dogsItem:    { label: 'Chiens',  route: '/dogs', icon: ICON_DOGS, badge: 3 },
      profileItem: { label: 'Profil',  route: '/profile', icon: ICON_PROFILE },
    },
    template: `
      <div style="display:flex;flex-direction:column;gap:32px;padding:24px;background:#0F1419;min-width:320px">
        <div>
          <p style="color:#8E928B;font-size:10px;font-family:Manrope,sans-serif;letter-spacing:.3em;margin:0 0 8px">BOTTOM</p>
          <div style="display:flex;background:#30353A;padding:8px;border-radius:12px">
            <k9-nav-item [item]="homeItem"    variant="bottom" />
            <k9-nav-item [item]="dogsItem"    variant="bottom" />
            <k9-nav-item [item]="profileItem" variant="bottom" />
          </div>
        </div>
        <div>
          <p style="color:#8E928B;font-size:10px;font-family:Manrope,sans-serif;letter-spacing:.3em;margin:0 0 8px">SIDE</p>
          <div style="display:flex;flex-direction:column;background:#1B2025;padding:8px;border-radius:12px;width:220px;gap:4px">
            <k9-nav-item [item]="homeItem"    variant="side" />
            <k9-nav-item [item]="dogsItem"    variant="side" />
            <k9-nav-item [item]="profileItem" variant="side" />
          </div>
        </div>
        <div>
          <p style="color:#8E928B;font-size:10px;font-family:Manrope,sans-serif;letter-spacing:.3em;margin:0 0 8px">BADGE</p>
          <div style="display:flex;background:#30353A;padding:8px;border-radius:12px">
            <k9-nav-item [item]="{label:'Notifs',route:'/notif',icon:'${ICON_DOGS}',badge:5}"   variant="bottom" />
            <k9-nav-item [item]="{label:'Beaucoup',route:'/many',icon:'${ICON_HOME}',badge:120}" variant="bottom" />
          </div>
        </div>
      </div>
    `,
  }),
};
