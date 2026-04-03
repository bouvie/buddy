import { Directive, Input, signal } from '@angular/core';
import type { ListItemData } from '@buddy/ui';

const MOCK_ACTIVITY_EVENTS: ListItemData[] = [
  {
    variant: 'text-value',
    icon: 'fa-solid fa-person-running',
    label: 'Session de course',
    sublabel: "Aujourd'hui · 08:32",
    value: '24 min',
  },
  {
    variant: 'text-value',
    icon: 'fa-solid fa-moon',
    label: 'Veillée prolongée',
    sublabel: 'Hier · 02:15',
    value: '1h 40min',
  },
  {
    variant: 'text-value',
    icon: 'fa-solid fa-paw',
    label: 'Promenade',
    sublabel: 'Hier · 17:05',
    value: '35 min',
  },
  {
    variant: 'text-value',
    icon: 'fa-solid fa-triangle-exclamation',
    label: 'Agitation nocturne',
    sublabel: 'Il y a 2 jours',
    value: '12 min',
  },
];

@Directive({
  selector: '[appActivityReport]',
  exportAs: 'appActivityReport',
  standalone: true,
})
export class ActivityReportDirective {
  @Input({ required: true }) appActivityReport!: string;

  readonly items = signal<ListItemData[]>(MOCK_ACTIVITY_EVENTS);
}
