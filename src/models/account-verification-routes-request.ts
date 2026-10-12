import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  accountVerificationCountry2Schema,
  type AccountVerificationCountry2,
} from "./account-verification-country2.js";

export type AccountVerificationRoutesRequest = {
  /**
   * The location where the third-party individual's bank account is registered. Adyen uses this
   * information to determine an available open banking provider, and to configure the open banking
   * flow for that respective location.
   */
  country: AccountVerificationCountry2;
  /**
   * The language to use in the open banking flow UI, specified by a combination of a two-letter
   * [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) language code and an
   * [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.
   *
   * This information is used to configure the open banking flow with the same language for a
   * consistent user experience.
   *
   * Default value: **en-US**
   */
  locale?: string;
  /**
   * The URL where Adyen redirects the third-party individual after they complete the open banking
   * flow.
   */
  redirectUrl: string;
  /**
   * A value that helps you identify the request in callback handling. You can generate this value
   * on a per-session basis to protect the callback against Cross-Site Request Forgery (CSRF)
   * attacks. This value must be composed of characters that can be successfully URL-encoded.
   */
  state?: string;
};

export const accountVerificationRoutesRequestSchema: Schema<AccountVerificationRoutesRequest> =
  s.object<AccountVerificationRoutesRequest>({
    country: accountVerificationCountry2Schema,
    locale: s.optional(s.string()),
    redirectUrl: s.string(),
    state: s.optional(s.string()),
  });
