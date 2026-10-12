import type { BasicAuthCredentials, TokenProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  readonly apiKeyAuth?: TokenProvider | undefined;
  readonly basicAuth?: BasicAuthCredentials | undefined;
  readonly clientKey?: TokenProvider | undefined;
};

type ServerOptions = {
  readonly serverOptions?: {
    /**
     * Adyen test environment. Adyen's live endpoints are merchant-prefixed
     * ({prefix}-checkout-live.adyenpayments.com), so no static live URL is correct here - point the
     * client's BaseUrl at the merchant's own live host instead.
     */
    default?: {
      baseUrl?: string;
    };
    /**
     * Adyen test environment. Adyen's live endpoints are merchant-prefixed
     * ({prefix}-checkout-live.adyenpayments.com), so no static live URL is correct here - point the
     * client's BaseUrl at the merchant's own live host instead.
     */
    default1?: {
      baseUrl?: string;
    };
    /**
     * Adyen test environment. Adyen's live endpoints are merchant-prefixed
     * ({prefix}-checkout-live.adyenpayments.com), so no static live URL is correct here - point the
     * client's BaseUrl at the merchant's own live host instead.
     */
    default2?: {
      baseUrl?: string;
    };
    /**
     * Adyen test environment. Adyen's live endpoints are merchant-prefixed
     * ({prefix}-checkout-live.adyenpayments.com), so no static live URL is correct here - point the
     * client's BaseUrl at the merchant's own live host instead.
     */
    default3?: {
      baseUrl?: string;
    };
    /**
     * Adyen test environment. Adyen's live endpoints are merchant-prefixed
     * ({prefix}-checkout-live.adyenpayments.com), so no static live URL is correct here - point the
     * client's BaseUrl at the merchant's own live host instead.
     */
    default4?: {
      baseUrl?: string;
    };
    /**
     * Adyen test environment. Adyen's live endpoints are merchant-prefixed
     * ({prefix}-checkout-live.adyenpayments.com), so no static live URL is correct here - point the
     * client's BaseUrl at the merchant's own live host instead.
     */
    default5?: {
      baseUrl?: string;
    };
    /**
     * Adyen test environment. Adyen's live endpoints are merchant-prefixed
     * ({prefix}-checkout-live.adyenpayments.com), so no static live URL is correct here - point the
     * client's BaseUrl at the merchant's own live host instead.
     */
    default6?: {
      baseUrl?: string;
    };
    /**
     * Adyen test environment. Adyen's live endpoints are merchant-prefixed
     * ({prefix}-checkout-live.adyenpayments.com), so no static live URL is correct here - point the
     * client's BaseUrl at the merchant's own live host instead.
     */
    default7?: {
      baseUrl?: string;
    };
    /**
     * Adyen test environment. Adyen's live endpoints are merchant-prefixed
     * ({prefix}-checkout-live.adyenpayments.com), so no static live URL is correct here - point the
     * client's BaseUrl at the merchant's own live host instead.
     */
    default8?: {
      baseUrl?: string;
    };
    /**
     * Adyen test environment. Adyen's live endpoints are merchant-prefixed
     * ({prefix}-checkout-live.adyenpayments.com), so no static live URL is correct here - point the
     * client's BaseUrl at the merchant's own live host instead.
     */
    default9?: {
      baseUrl?: string;
    };
    /**
     * Adyen test environment. Adyen's live endpoints are merchant-prefixed
     * ({prefix}-checkout-live.adyenpayments.com), so no static live URL is correct here - point the
     * client's BaseUrl at the merchant's own live host instead.
     */
    default10?: {
      baseUrl?: string;
    };
    /**
     * Adyen test environment. Adyen's live endpoints are merchant-prefixed
     * ({prefix}-checkout-live.adyenpayments.com), so no static live URL is correct here - point the
     * client's BaseUrl at the merchant's own live host instead.
     */
    default11?: {
      baseUrl?: string;
    };
    /**
     * Adyen test environment. Adyen's live endpoints are merchant-prefixed
     * ({prefix}-checkout-live.adyenpayments.com), so no static live URL is correct here - point the
     * client's BaseUrl at the merchant's own live host instead.
     */
    default12?: {
      baseUrl?: string;
    };
    /**
     * Adyen test environment. Adyen's live endpoints are merchant-prefixed
     * ({prefix}-checkout-live.adyenpayments.com), so no static live URL is correct here - point the
     * client's BaseUrl at the merchant's own live host instead.
     */
    default13?: {
      baseUrl?: string;
    };
    /**
     * Adyen test environment. Adyen's live endpoints are merchant-prefixed
     * ({prefix}-checkout-live.adyenpayments.com), so no static live URL is correct here - point the
     * client's BaseUrl at the merchant's own live host instead.
     */
    default14?: {
      baseUrl?: string;
    };
    /**
     * Adyen test environment. Adyen's live endpoints are merchant-prefixed
     * ({prefix}-checkout-live.adyenpayments.com), so no static live URL is correct here - point the
     * client's BaseUrl at the merchant's own live host instead.
     */
    default15?: {
      baseUrl?: string;
    };
    /**
     * Adyen test environment. Adyen's live endpoints are merchant-prefixed
     * ({prefix}-checkout-live.adyenpayments.com), so no static live URL is correct here - point the
     * client's BaseUrl at the merchant's own live host instead.
     */
    default16?: {
      baseUrl?: string;
    };
    /**
     * Adyen test environment. Adyen's live endpoints are merchant-prefixed
     * ({prefix}-checkout-live.adyenpayments.com), so no static live URL is correct here - point the
     * client's BaseUrl at the merchant's own live host instead.
     */
    default17?: {
      baseUrl?: string;
    };
    /**
     * Adyen test environment. Adyen's live endpoints are merchant-prefixed
     * ({prefix}-checkout-live.adyenpayments.com), so no static live URL is correct here - point the
     * client's BaseUrl at the merchant's own live host instead.
     */
    default18?: {
      baseUrl?: string;
    };
    /**
     * Adyen test environment. Adyen's live endpoints are merchant-prefixed
     * ({prefix}-checkout-live.adyenpayments.com), so no static live URL is correct here - point the
     * client's BaseUrl at the merchant's own live host instead.
     */
    default19?: {
      baseUrl?: string;
    };
    /**
     * Adyen test environment. Adyen's live endpoints are merchant-prefixed
     * ({prefix}-checkout-live.adyenpayments.com), so no static live URL is correct here - point the
     * client's BaseUrl at the merchant's own live host instead.
     */
    default20?: {
      baseUrl?: string;
    };
    /**
     * Adyen test environment. Adyen's live endpoints are merchant-prefixed
     * ({prefix}-checkout-live.adyenpayments.com), so no static live URL is correct here - point the
     * client's BaseUrl at the merchant's own live host instead.
     */
    default21?: {
      baseUrl?: string;
    };
    /**
     * Adyen test environment. Adyen's live endpoints are merchant-prefixed
     * ({prefix}-checkout-live.adyenpayments.com), so no static live URL is correct here - point the
     * client's BaseUrl at the merchant's own live host instead.
     */
    default22?: {
      baseUrl?: string;
    };
    /**
     * Adyen test environment. Adyen's live endpoints are merchant-prefixed
     * ({prefix}-checkout-live.adyenpayments.com), so no static live URL is correct here - point the
     * client's BaseUrl at the merchant's own live host instead.
     */
    default23?: {
      baseUrl?: string;
    };
    /**
     * Adyen test environment. Adyen's live endpoints are merchant-prefixed
     * ({prefix}-checkout-live.adyenpayments.com), so no static live URL is correct here - point the
     * client's BaseUrl at the merchant's own live host instead.
     */
    default24?: {
      baseUrl?: string;
    };
    /**
     * Adyen test environment. Adyen's live endpoints are merchant-prefixed
     * ({prefix}-checkout-live.adyenpayments.com), so no static live URL is correct here - point the
     * client's BaseUrl at the merchant's own live host instead.
     */
    default25?: {
      baseUrl?: string;
    };
    /**
     * Adyen test environment. Adyen's live endpoints are merchant-prefixed
     * ({prefix}-checkout-live.adyenpayments.com), so no static live URL is correct here - point the
     * client's BaseUrl at the merchant's own live host instead.
     */
    default26?: {
      baseUrl?: string;
    };
    /**
     * Adyen test environment. Adyen's live endpoints are merchant-prefixed
     * ({prefix}-checkout-live.adyenpayments.com), so no static live URL is correct here - point the
     * client's BaseUrl at the merchant's own live host instead.
     */
    default27?: {
      baseUrl?: string;
    };
    /**
     * Adyen test environment. Adyen's live endpoints are merchant-prefixed
     * ({prefix}-checkout-live.adyenpayments.com), so no static live URL is correct here - point the
     * client's BaseUrl at the merchant's own live host instead.
     */
    default28?: {
      baseUrl?: string;
    };
  };
};
