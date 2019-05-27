export type State = 'focused' | 'hovered' | 'active' | 'loading';
export const states: State[] = ['focused', 'hovered', 'active', 'loading'];

export type Color =
  | 'link'
  | 'success'
  | 'black'
  | 'white'
  | 'dark'
  | 'light'
  | 'primary'
  | 'info'
  | 'warning'
  | 'danger';
export const colors: Color[] = [
  'primary',
  'info',
  'success',
  'warning',
  'danger',
];

export type Size = 'small' | 'medium' | 'large' | undefined;
export const sizes: Size[] = ['small', undefined, 'medium', 'large'];
