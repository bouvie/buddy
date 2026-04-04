import { Directive, HostListener, Input, signal } from '@angular/core';
import type { ListItemData } from '@buddy/ui';

export interface ActivityDraft {
  label: string;
  activityType: string;
  duration: string;
  notes: string;
}

@Directive({
  selector: 'k10-list-item[appEditActivity]',
  exportAs: 'appEditActivity',
  standalone: true,
  host: { '[style.cursor]': '"pointer"' },
})
export class EditActivityDirective {
  @Input({ required: true }) appEditActivity!: ListItemData;

  readonly isOpen = signal(false);

  draft: ActivityDraft = { label: '', activityType: '', duration: '', notes: '' };

  @HostListener('click')
  open(): void {
    const d = this.appEditActivity;
    this.draft = {
      label: d.label ?? '',
      activityType: d.sublabel ?? '',
      duration: d.value ?? '',
      notes: '',
    };
    this.isOpen.set(true);
  }

  close(): void {
    this.isOpen.set(false);
  }

  save(): void {
    // TODO: dispatcher la mutation Apollo avec this.draft
    this.close();
  }
}
