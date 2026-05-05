import { SxProps } from "@mui/system";
import { FunctionComponent, JSX, ReactNode } from "react";

//#region Internal Types

type baseProps<classNames extends keyof any = keyof any> = {
  classes?: { [name in classNames]?: string };
  className?: string;
  children?: ReactNode;
  component?: keyof JSX.IntrinsicElements;
  /**
   * The sx prop is a shortcut for defining custom styles that has access to the theme. You can specify any valid CSS using this prop, as well as many theme-aware properties.
   * @link https://path-designsystem.elluciancloud.com/#/components/customization/the-sx-prop */
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

/** @link https://path-designsystem.elluciancloud.com/#/components/ActionMenu */
export const ActionMenu: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/ActionMenu */
export const ActionMenuItem: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/AdvancedTable */
export const AdvancedTable: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/Alert */
export const Alert: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/Autocomplete */
export const Autocomplete: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/Avatar */
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
/** @link https://path-designsystem.elluciancloud.com/#/components/Avatar */
export const AvatarGroup: FunctionComponent<
  baseProps<"root" | "avatar"> & {
    max?: number;
    size?: "small" | "default" | "large";
    spacing?: "number" | "small" | "medium" | "condensed";
  }
>;

/** @link https://path-designsystem.elluciancloud.com/#/components/Backdrop */
export const Backdrop: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/Badge */
export const Badge: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/Badge */
export const NotificationBadge: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/Box */
export const Box: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/Breadcrumbs */
export const Breadcrumbs: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/Button */
export const Button: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/Button */
export const ButtonGroup: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/Button */
export const DropdownButtonItem: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/Calendar */
export const Calendar: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/Calendar */
export const CalendarLegend: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/Calendar */
export const CalendarLegendItem: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/Calendar */
export const CalendarToolbar: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/Calendar */
export const EventWrapper: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/Card */
export const Card: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/Card */
export const CardActions: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/Card */
export const CardContent: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/Card */
export const CardHeader: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/Card */
export const CardMedia: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/Carousel */
export const Carousel: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/Checkbox */
export const Checkbox: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/Chip */
export const Chip: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/CircularProgress */
export const CircularProgress: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/ConfirmationDialog */
export const ConfirmationDialog: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/DatePicker */
export const DatePicker: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/DateRangePicker */
export const DateRangePicker: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/Dialog */
export const Dialog: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/Dialog */
export const DialogActions: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/Dialog */
export const DialogContent: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/Dialog */
export const DialogContentText: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/Dialog */
export const DialogTitle: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/Divider */
export const Divider: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/Drawer */
export const Drawer: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/Dropdown */
export const Dropdown: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/Dropdown */
export const DropdownItem: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/DropdownTypeahead */
export const DropdownTypeahead: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/DropdownTypeahead */
export const DropdownTypeaheadItem: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/EDSApplication */
export const EDSApplication: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/ExpansionPanel */
export const ExpansionPanel: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/ExpansionPanel */
export const ExpansionPanelActions: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/ExpansionPanel */
export const ExpansionPanelDetails: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/ExpansionPanel */
export const ExpansionPanelSummary: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/Footer */
export const Footer: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/FormControl */
export const FormControl: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/FormControl */
export const FormControlLabel: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/FormControl */
export const FormGroup: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/FormControl */
export const FormHelperText: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/FormControl */
export const FormLabel: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/Grid */
export const Grid: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/HeaderBar */
export const HeaderBar: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/HeaderBar */
export const HeaderBarDropdown: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/HeaderBar */
export const HeaderBarItem: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/HeaderBar */
export const HeaderBarLogo: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/IconButton */
export const IconButton: FunctionComponent<baseProps>;

/**
 * Use Illustration to soften content-heavy pages and to communicate important moments in a user's journey.
 * @link https://path-designsystem.elluciancloud.com/#/components/Illustration
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

/** @link https://path-designsystem.elluciancloud.com/#/components/InputAdornment */
export const InputAdornment: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/List */
export const List: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/List */
export const ListItem: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/List */
export const ListItemAvatar: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/List */
export const ListItemButton: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/List */
export const ListItemIcon: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/List */
export const ListItemSecondaryAction: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/List */
export const ListItemText: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/List */
export const ListSubheader: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/Logo */
export const Logo: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/MegaMenu */
export const MegaMenu: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/PageHeader */
export const PageHeader: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/Pagination */
export const Pagination: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/Paper */
export const Paper: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/Popover */
export const Popover: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/Popper */
export const Popper: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/Radio */
export const Radio: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/Radio */
export const RadioGroup: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/RichTextEditor */
export const RichTextEditor: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/RichTextEditor */
export const RichTextRenderer: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/Search */
export const Search: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/Search */
export const SearchItem: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/SelectionMenu */
export const SelectionMenu: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/SelectionMenu */
export const SelectionMenuItem: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/SimpleDialog */
export const SimpleDialog: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/Skeleton */
export const Skeleton: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/Slider */
export const Slider: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/Snackbar */
export const Snackbar: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/StandaloneDatePicker */
export const StandaloneDatePicker: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/StatusLabel */
export const StatusLabel: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/StepProgress */
export const MobileStepper: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/StepProgress */
export const MobileStepperCounter: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/StepProgress */
export const MobileStepperLabel: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/StepProgress */
export const MobileStepperStep: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/StepProgress */
export const MobileStepperTitle: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/StepProgress */
export const Step: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/StepProgress */
export const StepButton: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/StepProgress */
export const StepContent: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/StepProgress */
export const StepLabel: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/StepProgress */
export const StepProgress: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/Switch */
export const Switch: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/Table */
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
/** @link https://path-designsystem.elluciancloud.com/#/components/Table */
export const TableBody: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/Table */
export const TableCell: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/Table */
export const TableEditableCell: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/Table */
export const TableExpandableRow: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/Table */
export const TableFooter: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/Table */
export const TableHead: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/Table */
export const TableRow: FunctionComponent<
  baseProps<"root" | "selected" | "hover"> & {
    hover?: boolean;
    selected?: boolean;
    rowData?: any;
  }
>;
/** @link https://path-designsystem.elluciancloud.com/#/components/Table */
export const TableSortLabel: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/Table */
export const TableToolbar: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/Tabs */
export const Tab: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/Tabs */
export const Tabs: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/TextField */
export const TextField: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/TextLink */
export const TextLink: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/TimePicker */
export const TimePicker: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/ToggleButton */
export const ToggleButton: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/ToggleButton */
export const ToggleButtonGroup: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/Tooltip */
export const Tooltip: FunctionComponent<
  baseProps<"tooltip"> & {
    title?: string;
  }
>;

/** @link https://path-designsystem.elluciancloud.com/#/components/TreeView */
export const TreeItem: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/TreeView */
export const TreeView: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/Typography */
export const Typography: FunctionComponent<baseProps>;

// Templates
/** @link https://path-designsystem.elluciancloud.com/#/components/templates/ErrorPage */
export const ErrorPage: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/templates/FixedSidebarLayout */
export const FixedSidebarLayout: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/templates/MasterDetail */
export const MasterDetail: FunctionComponent<baseProps>;

/** @link https://path-designsystem.elluciancloud.com/#/components/templates/TabLayout */
export const TabLayout: FunctionComponent<baseProps>;
/** @link https://path-designsystem.elluciancloud.com/#/components/templates/TabLayout */
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
