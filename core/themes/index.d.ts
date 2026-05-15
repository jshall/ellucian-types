import { Theme, ThemeOptions } from "@mui/material/styles";

/**
 * In order to customize the theme, you should use the `createEDSTheme` function. After importing the `createEDSTheme` you will be able to start creating a custom theme. Any property in the default theme object can be customized. We recommend that you don't change a lot of properties to avoid creating unintended visual results.
 * 
 * The most common theme properties to customize are:
 * - `primary.main` - used for applying color to the `HeaderBar`
 * - `secondary.main` - used for the bottom border of `HeaderBar`, focus indicator for active links in the `HeaderBar` and the top border of accented Cards
 * - `ctaColor` - commonly used on clickable elements such as buttons, check boxes, and radio buttons
 * 
 * When customizing these properties, be sure to follow Ellucian's color guidelines.
 * @link https://path-designsystem.elluciancloud.com/#/components/customization/custom-theming
 */
export function createEDSTheme(name:string, options: ThemeOptions): Theme;
