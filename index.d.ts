import { FunctionComponent } from "react";

/**
 * @link https://resources.elluciancloud.com/r/bundle/ellucian_experience/page/r_card_props_sdk.html
 * @link https://resources.elluciancloud.com/r/bundle/ellucian_experience/page/r_page_props_sdk.html
 */
export function useDashboardInfo(): {
  version: string;
  erpType: "Banner" | "Colleague" | "PowerCampus" | "Quercus" | null;
  region:
    | "us-east-1"
    | "ca-central-1"
    | "eu-west-1"
    | "ap-southeast-2"
    | "me-central-1";
  stage:
    | "prodtest"
    | "prod"
    | "prodtestca"
    | "prodca"
    | "prodtestie"
    | "prodie"
    | "prodtestau"
    | "prodau"
    | "prodtestme"
    | "prodme";
};

/**
 * @link https://resources.elluciancloud.com/r/bundle/ellucian_experience/page/r_card_props_sdk.html
 * @link https://resources.elluciancloud.com/r/bundle/ellucian_experience/page/r_page_props_sdk.html
 */
export function useCardInfo<Configuration = {}, CustomConfiguration = {}>(): {
  cardId: string;
  configuration: Configuration & {
    customConfiguration: CustomConfiguration;
  };
  extensionId: string;
  externalLinkUrl: string;
  externalLinkLabel: string;
};

/** @link https://resources.elluciancloud.com/r/bundle/ellucian_experience/page/r_card_props_sdk.html */
export function useCardControl(): ReturnType<typeof useExtensionControl> & {
  drilldown(): void;
  resetDrilldown(): void;
  setPreventRemove(): void;
  setPreventRemoveMessage(): void;
  navigateToPage(): void;
  getUrlToPage(): void;
  setCustomConfiguration(): void;
  setIsCustomConfigurationValid(): void;
};

/** @link https://resources.elluciancloud.com/r/bundle/ellucian_experience/page/r_page_props_sdk.html */
export function usePageInfo(): {
  /**
   * The part of a page’s URL controlled by Experience. The format may change. Set your JavaScript router component to use this value as its base, so the router treats all URLs as relative to this base. For example, `<browserrouter basename={props.basePath}>`
   */
  basePath: string;
};

/** @link https://resources.elluciancloud.com/r/bundle/ellucian_experience/page/r_page_props_sdk.html */
export function usePageControl(): {
  /**
   * A string passed to this function will be the title of the page. If this function is not specified, the page title matches the title of the card from which the page was launched.
   * @param title Page title
   */
  setPageTitle(title: string): void;
  setPageToolbar(): void;
  setErrorMessage(): void;
  setExitPrompt(): void;
  setPageClosingCallback(): void;
  setLoadingStatus(): void;
  navigateToPage(): void;
  getUrlToPage(): void;
  closePage(): void;
};

/**
 * @link https://resources.elluciancloud.com/r/bundle/ellucian_experience/page/r_card_props_sdk.html
 * @link https://resources.elluciancloud.com/r/bundle/ellucian_experience/page/r_page_props_sdk.html
 */
export function useUserInfo(): {
  firstName: string;
  roles: string[];
  locale: string;
  dir: "ltr" | "rtl";
  tenantId: string;
  tenantAlias: string;
};

/**
 * @link https://resources.elluciancloud.com/r/bundle/ellucian_experience/page/r_card_props_sdk.html
 * @link https://resources.elluciancloud.com/r/bundle/ellucian_experience/page/r_page_props_sdk.html
 */
export function useThemeInfo(): {
  dashboardBackgroundColor: string;
  primaryColor: string;
  secondaryColor: string;
  ctaColors: {
    active: string;
    base: string;
    hover: string;
    tint: string;
  };
};

/**
 * @link https://resources.elluciancloud.com/r/bundle/ellucian_experience/page/r_card_props_sdk.html
 * @link https://resources.elluciancloud.com/r/bundle/ellucian_experience/page/r_page_props_sdk.html
 */
export function useData(): {
  getEthosQuery<T>(params: {
    queryId: string;
    properties: Record<string, string>;
  }): Promise<T>;
  getEthosQueryResourceVersions(): Promise<unknown>;
  getExtensionJwt(): Promise<string>;
  authenticatedEthosFetch(
    resource: string,
    options: RequestInit,
  ): Promise<Response>;
};

/**
 * All of these functions support the optional `scope` attribute. By default, stored items are scoped to the namespace of the card that created them. This ensures that values with the same key, in different cards, do not collide. You can use the `scope` attribute to define a custom scope that allows cards to share data with their corresponding pages or with other extension cards.
 * @link https://resources.elluciancloud.com/r/bundle/ellucian_experience/page/r_card_props_sdk.html
 * @link https://resources.elluciancloud.com/r/bundle/ellucian_experience/page/r_page_props_sdk.html
 */
export function useCache(): {
  getItem(params: {
    key: string;
    scope: string;
    options: { expireTime: number; session: boolean };
  }): void;
  storeItem(params: {
    key: string;
    data: any;
    scope: string;
    options: { session: boolean };
  }): void;
  removeItem(params: {
    key: string;
    scope: string;
    options: { session: boolean };
  }): void;
  clear(params: { scope: string; options: { session: boolean } }): void;
};

/** @link https://resources.elluciancloud.com/r/bundle/ellucian_experience/page/r_card_props_sdk.html */
export function useExtensionInfo<TExtensionConfig = {}>(): {
  extensionId: string;
  configuration: TExtensionConfig;
  basePath: string;
  type: "page" | "card";
};

/**
 * @link https://resources.elluciancloud.com/r/bundle/ellucian_experience/page/r_card_props_sdk.html
 * @link https://resources.elluciancloud.com/r/bundle/ellucian_experience/page/r_page_props_sdk.html
 */
export function useExtensionControl(): {
  setErrorMessage(options: {
    headerMessage: string;
    textMessage: string;
    iconName: string;
    iconColor: string;
  }): void;
  setLoadingStatus(isLoading: boolean): void;
};

/** Undocumented */
export function useExperienceInfo(): {}

/** Undocumented */
export function useTracker(): {
  track: (e:unknown,t:unknown) => unknown
}

/** @link https://resources.elluciancloud.com/r/bundle/ellucian_experience/page/r_card_props_sdk.html */
export type ExperienceCard<
  Configuration = {},
  CustomConfiguration = {},
> = FunctionComponent<{
  dashboardInfo: ReturnType<typeof useDashboardInfo>;
  cardInfo: ReturnType<typeof useCardInfo<Configuration, CustomConfiguration>>;
  cardControl: ReturnType<typeof useCardControl>;
  userInfo: ReturnType<typeof useUserInfo>;
  themeInfo: ReturnType<typeof useThemeInfo>;
  data: ReturnType<typeof useData>;
  cache: ReturnType<typeof useCache>;
}>;

/** @link https://resources.elluciancloud.com/r/bundle/ellucian_experience/page/r_page_props_sdk.html */
export type ExperiencePage<
  Configuration = {},
  CustomConfiguration = {},
> = FunctionComponent<{
  dashboardInfo: ReturnType<typeof useDashboardInfo>;
  cardInfo: ReturnType<typeof useCardInfo<Configuration, CustomConfiguration>>;
  extenstionInfo: ReturnType<typeof useExtensionInfo>;
  pageInfo: ReturnType<typeof usePageInfo>;
  pageControl: ReturnType<typeof usePageControl>;
  userInfo: ReturnType<typeof useUserInfo>;
  themeInfo: ReturnType<typeof useThemeInfo>;
  data: ReturnType<typeof useData>;
  cache: ReturnType<typeof useCache>;
  tracker: ReturnType<typeof useTracker>;
}>;
