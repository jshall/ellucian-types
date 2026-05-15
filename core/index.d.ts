import { SxProps } from "@mui/system";
import { FunctionComponent, JSX, ReactNode } from "react";

//#region Internal Types

type baseProps<classNames extends keyof any = keyof any> = {
  classes?: { [name in classNames]?: string };
  className?: string;
  children?: ReactNode;
  component?: keyof JSX.IntrinsicElements;
  /**
   * {@link https://path-designsystem.elluciancloud.com/#/components/customization/the-sx-prop|The `sx` prop} is a shortcut for defining custom styles that has access to the theme. You can specify any valid CSS using this prop, as well as many theme-aware properties.
   */
  sx?: SxProps;
};
type breakpoint = "xs" | "sm" | "md" | "lg";
type RowSelectionChangeEvent<T extends object = any> =
  | {
      rowId: string;
      selectionType: "ROW_SELECTION_ALL" | "ROW_SELECTION_NONE";
    }
  | {
      rowId: string;
      rowData: T;
      selectionType: "ROW_SELECTION_SELECTED" | "ROW_SELECTION_UNSELECTED";
    };

//#endregion

//#region Components

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/ActionMenu|ActionMenu}
 */
export const ActionMenu: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/ActionMenu|ActionMenu}
 */
export const ActionMenuItem: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/AdvancedTable|AdvancedTable}
 */
export const AdvancedTable: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Alert|Alert}
 */
export const Alert: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Autocomplete|Autocomplete}
 */
export const Autocomplete: FunctionComponent<baseProps>;

/**
 * A component that creates a graphical representation of a user.
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Avatar|Avatar}
 */
export const Avatar: FunctionComponent<
  baseProps<"root" | "img"> & {
    alt?: string;
    href?: JSX.IntrinsicElements["a"]["href"];
    size?: "small" | "default" | "large";
    sizes?: JSX.IntrinsicElements["img"]["sizes"];
    src?: JSX.IntrinsicElements["img"]["src"];
    srcSet?: JSX.IntrinsicElements["img"]["srcSet"];
    variant?: "default" | "interactive";
  }
>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Avatar|Avatar}
 */
export const AvatarGroup: FunctionComponent<
  baseProps<"root" | "avatar"> & {
    max?: number;
    size?: "small" | "default" | "large";
    spacing?: "number" | "small" | "medium" | "condensed";
  }
>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Backdrop|Backdrop}
 */
export const Backdrop: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Badge|Badge}
 */
export const Badge: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Badge|Badge}
 */
export const NotificationBadge: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Box|Box}
 */
export const Box: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Breadcrumbs|Breadcrumbs}
 */
export const Breadcrumbs: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Button|Button}
 */
export const Button: FunctionComponent<
  baseProps<
    | "root"
    | "text"
    | "contained"
    | "containedSecondary"
    | "sizeDefault"
    | "sizeSmall"
    | "startIcon"
    | "endIcon"
    | "disabled"
    | "fullWidth"
  > & {
    fluid?: boolean;
    color?: "primary" | "secondary";
    disabled?: boolean;
    onClick?: (event: MouseEvent) => void;
  }
>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Button|Button}
 */
export const ButtonGroup: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Button|Button}
 */
export const DropdownButtonItem: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Calendar|Calendar}
 */
export const Calendar: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Calendar|Calendar}
 */
export const CalendarLegend: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Calendar|Calendar}
 */
export const CalendarLegendItem: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Calendar|Calendar}
 */
export const CalendarToolbar: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Calendar|Calendar}
 */
export const EventWrapper: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Card|Card}
 */
export const Card: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Card|Card}
 */
export const CardActions: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Card|Card}
 */
export const CardContent: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Card|Card}
 */
export const CardHeader: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Card|Card}
 */
export const CardMedia: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Carousel|Carousel}
 */
export const Carousel: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Checkbox|Checkbox}
 */
export const Checkbox: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Chip|Chip}
 */
export const Chip: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/CircularProgress|CircularProgress}
 */
export const CircularProgress: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/ConfirmationDialog|ConfirmationDialog}
 */
export const ConfirmationDialog: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/DatePicker|DatePicker}
 */
export const DatePicker: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/DateRangePicker|DateRangePicker}
 */
export const DateRangePicker: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Dialog|Dialog}
 */
export const Dialog: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Dialog|Dialog}
 */
export const DialogActions: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Dialog|Dialog}
 */
export const DialogContent: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Dialog|Dialog}
 */
export const DialogContentText: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Dialog|Dialog}
 */
export const DialogTitle: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Divider|Divider}
 */
export const Divider: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Drawer|Drawer}
 */
export const Drawer: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Dropdown|Dropdown}
 */
export const Dropdown: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Dropdown|Dropdown}
 */
export const DropdownItem: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/DropdownTypeahead|DropdownTypeahead}
 */
export const DropdownTypeahead: FunctionComponent<
  baseProps & {
    fullWidth?: boolean;
    label: string;
    value?: string;
    onChange?: (value: string) => void;
  }
>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/DropdownTypeahead|DropdownTypeahead}
 */
export const DropdownTypeaheadItem: FunctionComponent<
  baseProps & {
    value: string;
    label: string;
  }
>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/EDSApplication|EDSApplication}
 */
export const EDSApplication: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/ExpansionPanel|ExpansionPanel}
 */
export const ExpansionPanel: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/ExpansionPanel|ExpansionPanel}
 */
export const ExpansionPanelActions: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/ExpansionPanel|ExpansionPanel}
 */
export const ExpansionPanelDetails: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/ExpansionPanel|ExpansionPanel}
 */
export const ExpansionPanelSummary: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Footer|Footer}
 */
export const Footer: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/FormControl|FormControl}
 */
export const FormControl: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/FormControl|FormControl}
 */
export const FormControlLabel: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/FormControl|FormControl}
 */
export const FormGroup: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/FormControl|FormControl}
 */
export const FormHelperText: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/FormControl|FormControl}
 */
export const FormLabel: FunctionComponent<baseProps>;

/**
 * Use Grid to create a responsive layout.
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Grid|Grid}
 */
export const Grid: FunctionComponent<
  baseProps &
    ({ container: boolean } | { item: boolean }) & {
      alignContent?:
        | "center"
        | "stretch"
        | "flex-start"
        | "flex-end"
        | "space-between"
        | "space-around";
      alignItems?:
        | "center"
        | "stretch"
        | "flex-start"
        | "flex-end"
        | "baseline";
      direction?: "row" | "row-reverse" | "column" | "column-reverse";
      fullWidth?: boolean;
      justifyContent?:
        | "center"
        | "flex-start"
        | "flex-end"
        | "space-between"
        | "space-around"
        | "space-evenly";
    }
>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/HeaderBar|HeaderBar}
 */
export const HeaderBar: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/HeaderBar|HeaderBar}
 */
export const HeaderBarDropdown: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/HeaderBar|HeaderBar}
 */
export const HeaderBarItem: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/HeaderBar|HeaderBar}
 */
export const HeaderBarLogo: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/IconButton|IconButton}
 */
export const IconButton: FunctionComponent<baseProps>;

/**
 * Use Illustration to soften content-heavy pages and to communicate important moments in a user's journey.
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Illustration|Illustration}
 */
export const Illustration: FunctionComponent<
  baseProps<"root" | "primary" | "secondary"> & {
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
    color?: "primary" | "secondary";
    SvgProps?: JSX.IntrinsicElements["svg"];
  }
>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/InputAdornment|InputAdornment}
 */
export const InputAdornment: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/List|List}
 */
export const List: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/List|List}
 */
export const ListItem: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/List|List}
 */
export const ListItemAvatar: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/List|List}
 */
export const ListItemButton: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/List|List}
 */
export const ListItemIcon: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/List|List}
 */
export const ListItemSecondaryAction: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/List|List}
 */
export const ListItemText: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/List|List}
 */
export const ListSubheader: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Logo|Logo}
 */
export const Logo: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/MegaMenu|MegaMenu}
 */
export const MegaMenu: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/PageHeader|PageHeader}
 */
export const PageHeader: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Pagination|Pagination}
 */
export const Pagination: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Paper|Paper}
 */
export const Paper: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Popover|Popover}
 */
export const Popover: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Popper|Popper}
 */
export const Popper: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Radio|Radio}
 */
export const Radio: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Radio|Radio}
 */
export const RadioGroup: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/RichTextEditor|RichTextEditor}
 */
export const RichTextEditor: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/RichTextEditor|RichTextEditor}
 */
export const RichTextRenderer: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Search|Search}
 */
export const Search: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Search|Search}
 */
export const SearchItem: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/SelectionMenu|SelectionMenu}
 */
export const SelectionMenu: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/SelectionMenu|SelectionMenu}
 */
export const SelectionMenuItem: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/SimpleDialog|SimpleDialog}
 */
export const SimpleDialog: FunctionComponent<
  baseProps & {
    open?: boolean;
    title?: string;
    onClose?: (
      event: object,
      reason?: "backdropClick" | "escapeKeyDown",
    ) => void;
    fullScreen?: boolean;
  }
>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Skeleton|Skeleton}
 */
export const Skeleton: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Slider|Slider}
 */
export const Slider: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Snackbar|Snackbar}
 */
export const Snackbar: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/StandaloneDatePicker|StandaloneDatePicker}
 */
export const StandaloneDatePicker: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/StatusLabel|StatusLabel}
 */
export const StatusLabel: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/StepProgress|StepProgress}
 */
export const MobileStepper: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/StepProgress|StepProgress}
 */
export const MobileStepperCounter: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/StepProgress|StepProgress}
 */
export const MobileStepperLabel: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/StepProgress|StepProgress}
 */
export const MobileStepperStep: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/StepProgress|StepProgress}
 */
export const MobileStepperTitle: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/StepProgress|StepProgress}
 */
export const Step: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/StepProgress|StepProgress}
 */
export const StepButton: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/StepProgress|StepProgress}
 */
export const StepContent: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/StepProgress|StepProgress}
 */
export const StepLabel: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/StepProgress|StepProgress}
 */
export const StepProgress: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Switch|Switch}
 */
export const Switch: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Table|Table}
 */
export const Table: FunctionComponent<
  baseProps<"root" | "stickyHeader"> & {
    size?: "small" | "medium";
    stickyHeader?: boolean;
    layout?: { variant: "card" | "expansionPanels"; breakpoint: breakpoint };
    onExpand?: (event: MouseEvent, allExpanded: boolean) => void;
    onClick?: (event: MouseEvent) => void;
    rowSelectionEnabled?: boolean;
    rowSelectionOptions?: { hideSelectAll?: boolean };
    selectedRowIds?: string[];
    onRowSelectionChange?: (event: RowSelectionChangeEvent) => void;
  }
>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Table|Table}
 */
export const TableBody: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Table|Table}
 */
export const TableCell: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Table|Table}
 */
export const TableEditableCell: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Table|Table}
 */
export const TableExpandableRow: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Table|Table}
 */
export const TableFooter: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Table|Table}
 */
export const TableHead: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Table|Table}
 */
export const TableRow: FunctionComponent<
  baseProps<"root" | "selected" | "hover"> & {
    hover?: boolean;
    selected?: boolean;
    rowData?: any;
  }
>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Table|Table}
 */
export const TableSortLabel: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Table|Table}
 */
export const TableToolbar: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Tabs|Tabs}
 */
export const Tab: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Tabs|Tabs}
 */
export const Tabs: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/TextField|TextField}
 */
export const TextField: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/TextLink|TextLink}
 */
export const TextLink: FunctionComponent<
  baseProps & {
    disabled?: boolean;
    href: string;
    onClick?: (event: MouseEvent) => void;
    target?: string;
  }
>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/TimePicker|TimePicker}
 */
export const TimePicker: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/ToggleButton|ToggleButton}
 */
export const ToggleButton: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/ToggleButton|ToggleButton}
 */
export const ToggleButtonGroup: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Tooltip|Tooltip}
 */
export const Tooltip: FunctionComponent<
  baseProps<"tooltip"> & {
    title?: string;
  }
>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/TreeView|TreeView}
 */
export const TreeItem: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/TreeView|TreeView}
 */
export const TreeView: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/Typography|Typography}
 */
export const Typography: FunctionComponent<
  baseProps<
    | "root"
    | "body1"
    | "body2"
    | "body3"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "alignLeft"
    | "alignCenter"
    | "alignRight"
    | "alignJustify"
    | "noWrap"
    | "gutterBottom"
    | "paragraph"
  > & {
    align?: "center" | "inherit" | "left" | "right" | "justify";
    color?: "error" | "inherit" | "initial" | "textPrimary" | "textSecondary";
    display?: "inline" | "initial" | "block";
    gutterBottom?: boolean;
    noWrap?: boolean;
    paragraph?: boolean;
    variant?:
      | "caption"
      | "h1"
      | "h2"
      | "h3"
      | "h4"
      | "h5"
      | "h6"
      | "inherit"
      | "body1"
      | "body2"
      | "body3"
      | "srOnly";
  }
>;
//#endregion

//#region Templates
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/templates/ErrorPage|ErrorPage}
 */
export const ErrorPage: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/templates/FixedSidebarLayo
 t|FixedSidebarLayout} */
export const FixedSidebarLayout: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/templates/MasterDetail|MasterDetail}
 */
export const MasterDetail: FunctionComponent<baseProps>;

/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/templates/TabLayout|TabLayout}
 */
export const TabLayout: FunctionComponent<baseProps>;
/**
 * @see {@link https://path-designsystem.elluciancloud.com/#/components/templates/TabLayout|TabLayout}
 */
export const TabLayoutContent: FunctionComponent<baseProps>;

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
