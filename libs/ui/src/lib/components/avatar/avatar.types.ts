export type AvatarSize = 'sm' | 'md' | 'lg';

export interface AvatarState {
  size: AvatarSize;
  src: string;
  alt: string;
  initials: string;
}

export const AVATAR_SIZES = ['sm', 'md', 'lg'] as const;
