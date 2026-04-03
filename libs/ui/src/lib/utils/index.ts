export function k9CssVar(name: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}
