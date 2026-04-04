export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';
export type AvatarColor = 'primary' | 'accent' | 'secondary' | 'success';

export interface AvatarState {
  size: AvatarSize;
  color: AvatarColor;
  src: string;
  alt: string;
  initials: string;
}

export const AVATAR_SIZES = ['sm', 'md', 'lg', 'xl'] as const;
export const AVATAR_COLORS = ['primary', 'accent', 'secondary', 'success'] as const;
