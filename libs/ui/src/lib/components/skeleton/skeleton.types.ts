export type SkeletonShape = 'rectangle' | 'circle' | 'text';

export interface SkeletonState {
  shape: SkeletonShape;
  width: string;
  height: string;
  count: number;
}
