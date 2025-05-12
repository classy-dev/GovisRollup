export interface Theme {
  colors: {
    [key: string]: string;
  };
  fontSize: {
    [key: string]: [string, string];
  };
  fontWeight: {
    [key: string]: number;
  };
  screens: {
    [key: string]: string;
  };
  spacing: {
    [key: string]: string;
  };
}
