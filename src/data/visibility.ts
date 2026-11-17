/** True when a JSON entry's isVisible flag is "true" (case-insensitive). Anything else hides it. */
export const isVisible = (entry: { isVisible?: unknown }): boolean =>
  String(entry.isVisible).toLowerCase() === 'true';
