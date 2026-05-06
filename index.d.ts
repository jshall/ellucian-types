import { FunctionComponent } from "react";

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

export function useCardInfo<
  CardConfiguration = {},
  CustomConfiguration = {},
>(): {
  cardId: string;
  configuration: CardConfiguration & {
    customConfiguration: CustomConfiguration;
  };
  extensionId: string;
  externalLinkUrl: string;
  externalLinkLabel: string;
};

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

export function useUserInfo(): {
  firstName: string;
  roles: string[];
  locale: string;
  dir: "ltr" | "rtl";
  tenantId: string;
  tenantAlias: string;
};

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

export function useExtensionInfo<TExtensionConfig = {}>(): {
  extensionId: string;
  configuration: TExtensionConfig;
  basePath: string;
  type: "page" | "card";
};

export function useExtensionControl(): {
  setErrorMessage(options: {
    headerMessage: string;
    textMessage: string;
    iconName: string;
    iconColor: string;
  }): void;
  setLoadingStatus(isLoading: boolean): void;
};

export type ExperienceCard<
  CardConfiguration = {},
  CustomConfiguration = {},
> = FunctionComponent<{
  dashboardInfo: ReturnType<typeof useDashboardInfo>;
  cardInfo: ReturnType<
    typeof useCardInfo<CardConfiguration, CustomConfiguration>
  >;
  cardControl: ReturnType<typeof useCardControl>;
  userInfo: ReturnType<typeof useUserInfo>;
  themeInfo: ReturnType<typeof useThemeInfo>;
  data: ReturnType<typeof useData>;
  cache: ReturnType<typeof useCache>;
}>;
