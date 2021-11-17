import { colors } from "./colors";
import { primaryFont, typeScale } from "./typography";
import { media } from "./mediaQuery";

const theme = {
  colors,
  primaryFont,
  typeScale,
  media
};

export * from "./colors";
export *  from "./mediaQuery";
export * from "./typography";
export default theme;
