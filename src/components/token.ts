/*= ============================================
=                  Colors                     =
============================================= */

export interface Token {
  [key: string]: string;
}

export const COLOR: Token = {
  gray0: '#f7f9fc',
  gray1: '#fff',
  gray2: '#fafaf9',
  gray3: '#f3f2f2',
  gray4: '#ecebea',
  gray5: '#dddbda',
  gray6: '#c9c7c5',
  gray7: '#b0adab',
  gray8: '#969492',
  gray9: '#706e6b',
  gray10: '#514f4d',
  gray100: '#D5DBE5',
  gray300: '#a1a9b8',
  gray400: '#7a7a7a',
  gray500: '#687182',
  dark_gray400: '#212b36',
  grayborder: '#eaecf0',
  neutral10: '#181818',
  neutral20: '#2e2e2e',
  neutral30: '#444444',
  neutral40: '#5c5c5c',
  neutral50: '#747474',
  neutral60: '#939393',
  neutral70: '#aeaeae',
  neutral80: '#c9c9c9',
  neutral90: '#e5e5e5',
  neutral95: '#f3f3f3',
  orange10: '#201600',
  orange15: '#371e03',
  orange30: '#852400',
  orange40: '#ad3000',
  orange45: '#b54708',
  orange50: '#d63b00',
  orange60: '#ff4600', //  brand
  orange70: '#ff672e',
  orange80: '#fecdca',
  orange90: '#ffcbb7',
  orange95: '#ffece5',
  red50: '#d1293d',
  red60: '#fb4637',
  red80: '#fecdca',
  red90: '#fef3f2',
  blue50: '#121672',
  blue60: '#171c8f',
  blue70: '#2264e5',
  blue80: '#b2ddff',
  blue85: '#eef4ff',
  blue90: '#eff8ff',
  blue_gray10: '#f9fafb',
  blue_gray20: '#eaecf0',
  blue_gray30: '#eaecf0',
  blue_gray50: '#5A6376',
  indigo35: '#ebebf3',
  indigo45: '#5a6376',
  indigo75: '#5e5adb',
  indigo90: '#ededfc',
  green30: '#19af66',
  green50: '#14804a',
  green80: '#abefc6',
  green90: '#e1fcef',
  green300: '#377E36',
  green400: '#38a06c',
  green500: '#14804a',
  yellow50: '#f8bf00',
  yellow60: '#fedf89',
  yellow90: '#fffaeb',
};

export const TEXTCOLOR: Token = {
  default: 'var(--color-neutral10)',
  brand: 'var(--color-orange60)',
  brandPrimary: 'var(--color-gray1)',
  import: 'var(--color-red60)',
  error: 'var(--color-red60)',
  label: 'var(--color-neutral30)',
  labelActive: 'var(--color-neutral10)',
  buttonDisabled: 'var(--color-neutral80)',
  iconDefault: 'var(--color-neutral50)',
  inputDisabled: 'var(--color-neutral30)',
  link: 'var(--color-orange60)',
  linkActive: 'var(--color-orange40)',
  linkDisabled: 'var(--color-orange40)',
  linkFocus: 'var(--color-orange40)',
  linkHover: 'var(--color-orange40)',
};

export const BACKGROUND: Token = {
  primary: 'var(--color-gray1)',
  brand: 'var(--color-orange60)',
  inputRadio: 'var(--color-gray1)',
  inputCheckBox: 'var(--color-blue60)',
  inputCheckBoxReadOnly: 'var(--color-gray0)',
  inputCheckBoxDisabled: 'var(--color-neutral95)',
  inputDisabled: 'var(--color-gray0)',
  notificationNew: 'var(--color-neutral95)',
  rowHover: 'var(--color-neutral95)',
  rowSelected: 'var(--color-neutral95)',
  toast: 'var(--color-neutral50)',
  toggle: 'var(--color-neutral70)',
  toggleDisabled: 'var(--color-neutral70)',
  toggleHover: 'var(--color-neutral60)',
};

/* Font sizes */
export const FONT: Token = {
  size1: '1rem',
  size2: '1.2rem',
  size3: '1.3rem',
  size4: '1.4rem',
  size5: '1.6rem',
  size6: '1.8rem',
  size7: '2rem',
  size8: '2.4rem',
  size9: '2.8rem',
  size10: '3.2rem',
  regular: '400',
  bold: '700',
  semiBold: '600',
};

export const LINE_HEIGHTS: Token = {
  heading: '1.2',
  text: '1.1',
};

export const INPUT: Token = {
  small: '29rem',
  middle: '62rem',
  lage: '84rem',
  height: '4.4rem',
  fontsize: '1.4rem',
  fontweight: '400',
  border: 'var(--color-neutral90)',
  placeholder: 'var(--color-neutral50)',
  focusBorder: 'var(--color-neutral10)',
  focusPlaceholder: 'var(--color-neutral10)',
  disabledPlaceholder: 'var(--color-gray300)',
  checkBoxBorder: 'var(--color-neutral90)',
  checkBoxCheckedBorder: 'var(--color-blue60)',
  checkBoxReadOnlyBorder: 'var(--color-neutral90)',
  checkBoxDisabeldBorder: 'var(--color-neutral90)',
  selectBorder: 'var(--color-neutral90)',
  selectFoucsBorder: 'var(--color-neutral50)',
  selectOptionSelected: '#ededf0',
};

export const LABEL: Token = {
  fontsize: '1.2rem',
};

export const TABS: Token = {
  fontweight: '700',
};

export const Badge: Token = {
  greenLabel: 'var(--color-green500)',
  greenBorder: 'var(--color-green400)',
  greenBg: 'var(--color-green90)',
  yellowLabel: '#B54708',
  yellowBorder: '#FEDF89',
  yellowBg: '#FFFAEB',
  indigoLabel: '#5E5ADB',
  indigoBorder: '#C7D7FE',
  indigoBg: '#EEF4FF',
  purpleLabel: 'var(--color-blue60)',
  purpleBorder: '#a2a4d2',
  purpleBg: '#edeeff',
  blueLabel: '#2264E5',
  blueBorder: '#B2DDFF',
  blueBg: '#EFF8FF',
  redLabel: '#D1293D',
  redBorder: '#FECDCA',
  redBg: '#FEF3F2',
  grayLabel: '#5A6376',
  grayBorder: '#EAECF0',
  grayBg: '#F9FAFB',
  orangeLabel: 'var(--color-orange60)',
  orangeBorder: 'var(--color-orange90)',
  orangeBg: 'var(--color-orange95)',
};

export const Button: Token = {
  white: 'var(--color-gray1)',
  black: '#000',
  blue: 'var(--color-blue60)',
  gray: 'var(--color-neutral90)',
  textBlack: 'var(--color-neutral10)',
  disableBackground: 'var(--color-neutral95)',
  disableColor: 'var(--color-neutral90)',
  primaryHoverBg: '#121672',
  ghostPrimaryHoverBg: '#F7F7FA',
  ghostSecodaryHoverBg: 'var(--color-gray3)',
};

export const TABLE: Token = {
  headerBackground: COLOR.gray0,
  border: 'rgba(247, 249, 252, 0.80)',
};
