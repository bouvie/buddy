export function k10CssVar(name: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

/** @deprecated Use k10CssVar */
export const k9CssVar = k10CssVar;
