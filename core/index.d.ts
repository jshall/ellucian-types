import {
  AlertProps,
  AutocompleteProps,
  AvatarGroupProps,
  AvatarProps,
  BackdropProps,
  BadgeProps,
  BoxProps,
  BreadcrumbsProps,
  ButtonGroupProps,
  ButtonProps,
  CardActionsProps,
  CardContentProps,
  CardHeaderProps,
  CardProps,
  CheckboxProps,
  ChipProps,
  ChipTypeMap,
  CircularProgressProps,
  DialogActionsProps,
  DialogContentProps,
  DialogContentTextProps,
  DialogProps,
  DialogTitleProps,
  DividerProps,
  DrawerProps,
  FormControlLabelProps,
  FormControlProps,
  FormGroupProps,
  FormHelperTextProps,
  FormLabelProps,
  GridProps,
  IconButtonProps,
  InputAdornmentProps,
  ListItemAvatarProps,
  ListItemButtonProps,
  ListItemIconProps,
  ListItemProps,
  ListItemSecondaryActionProps,
  ListItemTextProps,
  ListProps,
  ListSubheaderProps,
  PaginationProps,
  PaperProps,
  PopoverProps,
  PopperProps,
  RadioGroupProps,
  RadioProps,
  SliderProps,
  SnackbarProps,
  SwitchProps,
  TableBodyProps,
  TableCellProps,
  TableFooterProps,
  TableHeadProps,
  TableProps,
  TableRowProps,
  TableSortLabelProps,
  TabProps,
  TabsProps,
  TextFieldProps,
  ToggleButtonGroupProps,
  ToggleButtonProps,
  TooltipProps,
  TypographyProps,
} from "@mui/material";
import { ComponentPropsWithoutRef, JSX, ReactNode } from "react";

//#region Internal Types

type baseProps<T extends React.ElementType = "div"> =
  ComponentPropsWithoutRef<T>;

type breakpointProps<T = string | number> = {
  /** Breakpoint column size */
  lg?: T;
  /** Breakpoint column size */
  md?: T;
  /** Breakpoint column size */
  sm?: T;
  /** Breakpoint column size */
  xl?: T;
  /** Breakpoint column size */
  xs?: T;
};

//#endregion

//#region Components

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/ActionMenu|EDS ActionMenu}
 */
export function ActionMenu(props: baseProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/ActionMenu|EDS ActionMenu}
 */
export function ActionMenuItem(props: baseProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/AdvancedTable|EDS AdvancedTable}
 */
export function AdvancedTable(props: baseProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Alert|EDS Alert}
 */
export function Alert(props: AlertProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Autocomplete|EDS Autocomplete}
 */
export function Autocomplete<
  Value,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap["defaultComponent"],
>(
  props: AutocompleteProps<
    Value,
    Multiple,
    DisableClearable,
    FreeSolo,
    ChipComponent
  >,
): ReactNode;

/**
 * A component that creates a graphical representation of a user.
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Avatar|EDS Avatar}
 * @see {@link https://mui.com/material-ui/api/avatar/|MUI Avatar}
 */
export function Avatar(
  props: Omit<AvatarProps, "variant"> & {
    /** The color of the `Avatar`. */
    color?:
      | "default"
      | "purple"
      | "iris"
      | "fountain"
      | "meadow"
      | "kiwi"
      | "saffron"
      | "tangerine";
    /** Attributes applied to the `img` element when the component is used to display an image. */
    imgProps?: JSX.IntrinsicElements["img"];
    /** The size of the `Avatar`. */
    size?: "small" | "default" | "large";
    /** The variant of the `Avatar` to render. */
    variant?: "default" | "interactive";
  },
): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Avatar|EDS AvatarGroup}
 * @see {@link https://mui.com/material-ui/api/avatar-group/|MUI AvatarGroup}
 */
export function AvatarGroup(
  props: AvatarGroupProps & {
    /** The size of the avatars and terminal avatar in the group. Overrides the size prop of child avatars. */
    size?: "small" | "default" | "large";
    /**
     * Spacing between avatars.
     *
     * Valid values:
     *
     * - `"medium"`: Default spacing
     * - `"small"`: Closely-spaced avatars
     * - `"condensed"`: Avatars are stacked, one on top of the other. In this mode, a popup shows all available avatars.
     * - `number`: Custom spacing value. Positive values decrease the space between avatars; negative values increase it.
     */
    spacing?: number | "small" | "medium" | "condensed";
  },
): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Backdrop|EDS Backdrop}
 * @see {@link https://mui.com/material-ui/api/backdrop/|MUI Backdrop}
 */
export function Backdrop(props: BackdropProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Badge|EDS Badge}
 * @see {@link https://mui.com/material-ui/api/badge/|MUI Badge}
 */
export function Badge(props: BadgeProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Badge|EDS Badge}
 */
export function NotificationBadge(props: baseProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Box|EDS Box}
 * @see {@link https://mui.com/material-ui/api/box/|MUI Box}
 */
export function Box(props: BoxProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Breadcrumbs|EDS Breadcrumbs}
 * @see {@link https://mui.com/material-ui/api/breadcrumbs/|MUI Breadcrumbs}
 */
export function Breadcrumbs(props: BreadcrumbsProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Button|EDS Button}
 * @see {@link https://mui.com/material-ui/api/button/|MUI Button}
 */
export function Button(
  props: Omit<ButtonProps, "color"> & {
    /** The color of the component. */
    color?: "primary" | "secondary";
    /** The elements to populate dropdown button list items. These must be an array of `DropdownButtonItem` elements. */
    dropdown?: ReturnType<typeof DropdownButtonItem>[];
    /** If true, the button will take up the full width of its container. */
    fluid?: boolean;
    /** The size of the button. */
    size?: "small" | "default";
    /** With `variant="text"`, use this if you want to render a button on Snackbar or any dark background. */
    withDarkBackground?: boolean;
  },
): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Button|EDS Button}
 * @see {@link https://mui.com/material-ui/api/button-group/|MUI ButtonGroup}
 */
export function ButtonGroup(props: ButtonGroupProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Button|EDS Button}
 */
export function DropdownButtonItem(
  props: baseProps & {
    /** If `true`, the dropdown menu item will be disabled. */
    disabled?: boolean;
  },
): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Calendar|EDS Calendar}
 */
export function Calendar(props: baseProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Calendar|EDS Calendar}
 */
export function CalendarLegend(props: baseProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Calendar|EDS Calendar}
 */
export function CalendarLegendItem(props: baseProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Calendar|EDS Calendar}
 */
export function CalendarToolbar(props: baseProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Calendar|EDS Calendar}
 */
export function EventWrapper(props: baseProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Card|EDS Card}
 * @see {@link https://mui.com/material-ui/api/card/|MUI Card}
 */
export function Card(props: CardProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Card|EDS Card}
 * @see {@link https://mui.com/material-ui/api/card-actions/|MUI CardActions}
 */
export function CardActions(props: CardActionsProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Card|EDS Card}
 * @see {@link https://mui.com/material-ui/api/card-content/|MUI CardContent}
 */
export function CardContent(props: CardContentProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Card|EDS Card}
 * @see {@link https://mui.com/material-ui/api/card-header/|MUI CardHeader}
 */
export function CardHeader(props: CardHeaderProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Card|EDS Card}
 * @see {@link https://mui.com/material-ui/api/card-media/|MUI CardMedia}
 */
export function CardMedia(props: baseProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Carousel|EDS Carousel}
 */
export function Carousel(props: baseProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Checkbox|EDS Checkbox}
 * @see {@link https://mui.com/material-ui/api/checkbox/|MUI Checkbox}
 */
export function Checkbox(props: CheckboxProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Chip|EDS Chip}
 * @see {@link https://mui.com/material-ui/api/chip/|MUI Chip}
 */
export function Chip(props: ChipProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/CircularProgress|EDS CircularProgress}
 * @see {@link https://mui.com/material-ui/api/circular-progress/|MUI CircularProgress}
 */
export function CircularProgress(props: CircularProgressProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/ConfirmationDialog|EDS ConfirmationDialog}
 */
export function ConfirmationDialog(props: baseProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/DatePicker|EDS DatePicker}
 */
export function DatePicker(props: baseProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/DateRangePicker|EDS DateRangePicker}
 */
export function DateRangePicker(props: baseProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Dialog|EDS Dialog}
 * @see {@link https://mui.com/material-ui/api/dialog/|MUI Dialog}
 */
export function Dialog(props: DialogProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Dialog|EDS Dialog}
 * @see {@link https://mui.com/material-ui/api/dialog-actions/|MUI DialogActions}
 */
export function DialogActions(props: DialogActionsProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Dialog|EDS Dialog}
 * @see {@link https://mui.com/material-ui/api/dialog-content/|MUI DialogContent}
 */
export function DialogContent(props: DialogContentProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Dialog|EDS Dialog}
 * @see {@link https://mui.com/material-ui/api/dialog-content-text/|MUI DialogContentText}
 */
export function DialogContentText(props: DialogContentTextProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Dialog|EDS Dialog}
 * @see {@link https://mui.com/material-ui/api/dialog-title/|MUI DialogTitle}
 */
export function DialogTitle(props: DialogTitleProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Divider|EDS Divider}
 * @see {@link https://mui.com/material-ui/api/divider/|MUI Divider}
 */
export function Divider(props: DividerProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Drawer|EDS Drawer}
 * @see {@link https://mui.com/material-ui/api/drawer/|MUI Drawer}
 */
export function Drawer(props: DrawerProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Dropdown|EDS Dropdown}
 */
export function Dropdown(props: baseProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Dropdown|EDS Dropdown}
 */
export function DropdownItem(props: baseProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/DropdownTypeahead|EDS DropdownTypeahead}
 */
export function DropdownTypeahead(
  props: baseProps & {
    fullWidth?: boolean;
    label: string;
    value?: string;
    onChange?: (value: string) => void;
  },
): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/DropdownTypeahead|EDS DropdownTypeahead}
 */
export function DropdownTypeaheadItem(
  props: baseProps & {
    value: string;
    label: string;
  },
): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/EDSApplication|EDSApplication}
 */
export function EDSApplication(props: baseProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/ExpansionPanel|EDS ExpansionPanel}
 */
export function ExpansionPanel(props: baseProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/ExpansionPanel|EDS ExpansionPanel}
 */
export function ExpansionPanelActions(props: baseProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/ExpansionPanel|EDS ExpansionPanel}
 */
export function ExpansionPanelDetails(props: baseProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/ExpansionPanel|EDS ExpansionPanel}
 */
export function ExpansionPanelSummary(props: baseProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Footer|EDS Footer}
 */
export function Footer(props: baseProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/FormControl|EDS FormControl}
 * @see {@link https://mui.com/material-ui/api/form-control/|MUI FormControl}
 */
export function FormControl(props: FormControlProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/FormControl|EDS FormControl}
 * @see {@link https://mui.com/material-ui/api/form-control-label/|MUI FormControlLabel}
 */
export function FormControlLabel(props: FormControlLabelProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/FormControl|EDS FormControl}
 * @see {@link https://mui.com/material-ui/api/form-group/|MUI FormGroup}
 */
export function FormGroup(props: FormGroupProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/FormControl|EDS FormControl}
 * @see {@link https://mui.com/material-ui/api/form-helper-text/|MUI FormHelperText}
 */
export function FormHelperText(props: FormHelperTextProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/FormControl|EDS FormControl}
 * @see {@link https://mui.com/material-ui/api/form-label/|MUI FormLabel}
 */
export function FormLabel(props: FormLabelProps): ReactNode;

/**
 * Use Grid to create a responsive layout.
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Grid|EDS Grid}
 * @see {@link https://mui.com/material-ui/api/grid/|MUI Grid}
 */
export function Grid(
  props: GridProps & {
    /** If true, the component will have the flex item behavior. */
    item?: boolean;
    /** If `true`, it sets `min-width: 0` on the item. */
    zeroMinWidth?: boolean;
  } & breakpointProps,
): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/HeaderBar|EDS HeaderBar}
 */
export function HeaderBar(props: baseProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/HeaderBar|EDS HeaderBar}
 */
export function HeaderBarDropdown(props: baseProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/HeaderBar|EDS HeaderBar}
 */
export function HeaderBarItem(props: baseProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/HeaderBar|EDS HeaderBar}
 */
export function HeaderBarLogo(props: baseProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/IconButton|EDS IconButton}
 * @see {@link https://mui.com/material-ui/api/icon-button/|MUI IconButton}
 */
export function IconButton(props: IconButtonProps): ReactNode;

/**
 * Use Illustration to soften content-heavy pages and to communicate important moments in a user's journey.
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Illustration|EDS Illustration}
 */
export function Illustration(
  props: baseProps & {
    /** Override or extend the styles applied to the component. */
    classes: Partial<{
      /** Styles applied to the root element. */
      root: string;
      /** Styles applied to the root element if color="primary". */
      primary: string;
      /** Styles applied to the root element if color="secondary". */
      secondary: string;
    }>;
    /**
     * The name of the illustration to render.
     * @see {@link https://path-designsystem.elluciancloud.com/#/design-guidelines/illustration#illustration-types|Illustration Types}
     */
    name:
      | "link"
      | "search"
      | "error"
      | "contact"
      | "empty-calendar"
      | "no-activities"
      | "no-comments"
      | "no-enrolled"
      | "no-messages"
      | "no-request"
      | "no-search-results"
      | "no-waitlist"
      | "under-maintenance"
      | "book"
      | "bookmark"
      | "cabinet-filing"
      | "calendar"
      | "chart-bars"
      | "checkmark"
      | "crown"
      | "empty-set"
      | "eye-hide"
      | "folder"
      | "graduation-cap"
      | "heart"
      | "id-badge"
      | "lightbulb"
      | "news"
      | "no-courses"
      | "no-history"
      | "no-search-results-sm"
      | "no-tasks"
      | "pencil"
      | "server"
      | "tasks"
      | "user-group";
    /** The color the illustration will render in. */
    color?: "primary" | "secondary";
    /** Prop object to pass to the Illustration SVG component. */
    SvgProps?: JSX.IntrinsicElements["svg"];
  },
): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/InputAdornment|EDS InputAdornment}
 * @see {@link https://mui.com/material-ui/api/input-adornment/|MUI InputAdornment}
 */
export function InputAdornment(props: InputAdornmentProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/List|EDS List}
 * @see {@link https://mui.com/material-ui/api/list/|MUI List}
 */
export function List(props: ListProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/List|EDS List}
 * @see {@link https://mui.com/material-ui/api/list-item/|MUI ListItem}
 */
export function ListItem(props: ListItemProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/List|EDS List}
 * @see {@link https://mui.com/material-ui/api/list-item-avatar/|MUI ListItemAvatar}
 */
export function ListItemAvatar(props: ListItemAvatarProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/List|EDS List}
 * @see {@link https://mui.com/material-ui/api/list-item-button/|MUI ListItemButton}
 */
export function ListItemButton(props: ListItemButtonProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/List|EDS List}
 * @see {@link https://mui.com/material-ui/api/list-item-icon/|MUI ListItemIcon}
 */
export function ListItemIcon(props: ListItemIconProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/List|EDS List}
 * @see {@link https://mui.com/material-ui/api/list-item-secondary-action/|MUI ListItemSecondaryAction}
 */
export function ListItemSecondaryAction(
  props: ListItemSecondaryActionProps,
): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/List|EDS List}
 * @see {@link https://mui.com/material-ui/api/list-item-text/|MUI ListItemText}
 */
export function ListItemText(props: ListItemTextProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/List|EDS List}
 * @see {@link https://mui.com/material-ui/api/list-subheader/|MUI ListSubheader}
 */
export function ListSubheader(props: ListSubheaderProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Logo|EDS Logo}
 */
export function Logo(props: baseProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/MegaMenu|EDS MegaMenu}
 */
export function MegaMenu(props: baseProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/PageHeader|EDS PageHeader}
 */
export function PageHeader(props: baseProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Pagination|EDS Pagination}
 * @see {@link https://mui.com/material-ui/api/pagination/|MUI Pagination}
 */
export function Pagination(props: PaginationProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Paper|EDS Paper}
 * @see {@link https://mui.com/material-ui/api/paper/|MUI Paper}
 */
export function Paper(props: PaperProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Popover|EDS Popover}
 * @see {@link https://mui.com/material-ui/api/popover/|MUI Popover}
 */
export function Popover(props: PopoverProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Popper|EDS Popper}
 * @see {@link https://mui.com/material-ui/api/popper/|MUI Popper}
 */
export function Popper(props: PopperProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Radio|EDS Radio}
 * @see {@link https://mui.com/material-ui/api/radio/|MUI Radio}
 */
export function Radio(props: RadioProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Radio|EDS Radio}
 * @see {@link https://mui.com/material-ui/api/radio-group/|MUI RadioGroup}
 */
export function RadioGroup(props: RadioGroupProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/RichTextEditor|EDS RichTextEditor}
 */
export function RichTextEditor(props: baseProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/RichTextEditor|EDS RichTextEditor}
 */
export function RichTextRenderer(props: baseProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Search|EDS Search}
 */
export function Search(props: baseProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Search|EDS Search}
 */
export function SearchItem(props: baseProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/SelectionMenu|EDS SelectionMenu}
 */
export function SelectionMenu(props: baseProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/SelectionMenu|EDS SelectionMenu}
 */
export function SelectionMenuItem(props: baseProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/SimpleDialog|EDS SimpleDialog}
 */
export function SimpleDialog(
  props: baseProps & {
    open?: boolean;
    title?: string;
    onClose?: (
      event: object,
      reason?: "backdropClick" | "escapeKeyDown",
    ) => void;
    fullScreen?: boolean;
  },
): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Skeleton|EDS Skeleton}
 */
export function Skeleton(props: baseProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Slider|EDS Slider}
 * @see {@link https://mui.com/material-ui/api/slider/|MUI Slider}
 */
export function Slider(props: SliderProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Snackbar|EDS Snackbar}
 * @see {@link https://mui.com/material-ui/api/snackbar/|MUI Snackbar}
 */
export function Snackbar(props: SnackbarProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/StandaloneDatePicker|EDS StandaloneDatePicker}
 */
export function StandaloneDatePicker(props: baseProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/StatusLabel|EDS StatusLabel}
 */
export function StatusLabel(props: baseProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/StepProgress|EDS StepProgress}
 */
export function MobileStepper(props: baseProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/StepProgress|EDS StepProgress}
 */
export function MobileStepperCounter(props: baseProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/StepProgress|EDS StepProgress}
 */
export function MobileStepperLabel(props: baseProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/StepProgress|EDS StepProgress}
 */
export function MobileStepperStep(props: baseProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/StepProgress|EDS StepProgress}
 */
export function MobileStepperTitle(props: baseProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/StepProgress|EDS StepProgress}
 */
export function Step(props: baseProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/StepProgress|EDS StepProgress}
 */
export function StepButton(props: baseProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/StepProgress|EDS StepProgress}
 */
export function StepContent(props: baseProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/StepProgress|EDS StepProgress}
 */
export function StepLabel(props: baseProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/StepProgress|EDS StepProgress}
 */
export function StepProgress(props: baseProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Switch|EDS Switch}
 * @see {@link https://mui.com/material-ui/api/switch/|MUI Switch}
 */
export function Switch(props: SwitchProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Table|EDS Table}
 * @see {@link https://mui.com/material-ui/api/table/|MUI Table}
 */
export function Table(props: TableProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Table|EDS Table}
 * @see {@link https://mui.com/material-ui/api/table-body/|MUI TableBody}
 */
export function TableBody(props: TableBodyProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Table|EDS Table}
 * @see {@link https://mui.com/material-ui/api/table-cell/|MUI TableCell}
 */
export function TableCell(props: TableCellProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Table|EDS Table}
 */
export function TableEditableCell(props: TableCellProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Table|EDS Table}
 */
export function TableExpandableRow(props: TableRowProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Table|EDS Table}
 * @see {@link https://mui.com/material-ui/api/table-footer/|MUI TableFooter}
 */
export function TableFooter(props: TableFooterProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Table|EDS Table}
 * @see {@link https://mui.com/material-ui/api/table-head/|MUI TableHead}
 */
export function TableHead(props: TableHeadProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Table|EDS Table}
 * @see {@link https://mui.com/material-ui/api/table-row/|MUI TableRow}
 */
export function TableRow(props: TableRowProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Table|EDS Table}
 * @see {@link https://mui.com/material-ui/api/table-sort-label/|MUI TableSortLabel}
 */
export function TableSortLabel(props: TableSortLabelProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Table|EDS Table}
 */
export function TableToolbar(props: baseProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Tabs|EDS Tabs}
 * @see {@link https://mui.com/material-ui/api/tab/|MUI Tab}
 */
export function Tab(props: TabProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Tabs|EDS Tabs}
 * @see {@link https://mui.com/material-ui/api/tabs/|MUI Tabs}
 */
export function Tabs(props: TabsProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/TextField|EDS TextField}
 * @see {@link https://mui.com/material-ui/api/text-field/|MUI TextField}
 */
export function TextField(props: TextFieldProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/TextLink|EDS TextLink}
 */
export function TextLink(props: baseProps<"a">): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/TimePicker|EDS TimePicker}
 */
export function TimePicker(props: baseProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/ToggleButton|EDS ToggleButton}
 * @see {@link https://mui.com/material-ui/api/toggle-button/|EDS ToggleButton}
 */
export function ToggleButton(props: ToggleButtonProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/ToggleButton|EDS ToggleButton}
 * @see {@link https://mui.com/material-ui/api/toggle-button/|EDS ToggleButtonGroup}
 */
export function ToggleButtonGroup(props: ToggleButtonGroupProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Tooltip|EDS Tooltip}
 * @see {@link https://mui.com/material-ui/api/tooltip/|MUI Tooltip}
 */
export function Tooltip(props: TooltipProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/TreeView|EDS TreeView}
 */
export function TreeItem(props: baseProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/TreeView|EDS TreeView}
 */
export function TreeView(props: baseProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Typography|EDS Typography}
 * @see {@link https://mui.com/material-ui/api/typography/|MUI Typography}
 */
export function Typography(props: TypographyProps): ReactNode;
//#endregion

//#region Templates
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/templates/ErrorPage|EDS ErrorPage}
 */
export function ErrorPage(props: baseProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/templates/FixedSidebarLayo
 t|FixedSidebarLayout} */
export function FixedSidebarLayout(props: baseProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/templates/MasterDetail|EDS MasterDetail}
 */
export function MasterDetail(props: baseProps): ReactNode;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/templates/TabLayout|EDS TabLayout}
 */
export function TabLayout(props: baseProps): ReactNode;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/templates/TabLayout|EDS TabLayout}
 */
export function TabLayoutContent(props: baseProps): ReactNode;

//#endregion

//#region Utilities

type SpacingVariant = (typeof spacingVariant)[keyof typeof spacingVariant];
type SpacingOptions = {
  spacing: SpacingVariant;
  spacingRow: SpacingVariant;
  spacingColumn: SpacingVariant;
  responsive: boolean;
  outerSpacing: boolean;
};
export function getSpacingOptions(
  initialSpacingOptions: Partial<SpacingOptions>,
): SpacingOptions;
export const spacingVariant: { STANDARD: "standard"; NONE: "none" };

export { makeStyles } from "tss-react/mui";

//#endregion
