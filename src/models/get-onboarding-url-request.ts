import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { collectInformation1Schema, type CollectInformation1 } from "./collect-information1.js";
import { showPages2Schema, type ShowPages2 } from "./show-pages2.js";

export type GetOnboardingUrlRequest = {
  /** The account holder code you provided when you created the account holder. */
  accountHolderCode: string;
  /**
   * Contains indicators whether the page should only collect information for specific [KYC
   * checks](https://docs.adyen.com/classic-platforms/verification-checks). By default, the page
   * collects information for all KYC checks that apply to the [legal entity
   * type](https://docs.adyen.com/classic-platforms/account-holders-and-accounts#legal-entity-types).
   */
  collectInformation?: CollectInformation1;
  /** Indicates if editing checks is allowed even if all the checks have passed. */
  editMode?: boolean;
  /**
   * The URL to which the account holder is redirected after completing an OAuth authentication with
   * a bank through Trustly/PayMyBank.
   */
  mobileOAuthCallbackUrl?: string;
  /** The platform name which will show up in the welcome page. */
  platformName?: string;
  /**
   * The URL where the account holder will be redirected back to after they complete the onboarding,
   * or if their session times out. Maximum length of 500 characters. If you don't provide this, the
   * account holder will be redirected back to the default return URL configured in your platform
   * account.
   */
  returnUrl?: string;
  /**
   * The language to be used in the page, specified by a combination of a language and country code.
   * For example, **pt-BR**.
   *
   * If not specified in the request or if the language is not supported, the page uses the browser
   * language. If the browser language is not supported, the page uses **en-US** by default.
   *
   * For a list of supported languages, refer to [Change the page
   * language](https://docs.adyen.com/classic-platforms/hosted-onboarding-page/customize-experience#change-page-language).
   */
  shopperLocale?: string;
  /** Contains indicators whether specific pages must be shown to the account holder. */
  showPages?: ShowPages2;
};

export const getOnboardingUrlRequestSchema: Schema<GetOnboardingUrlRequest> =
  s.object<GetOnboardingUrlRequest>({
    accountHolderCode: s.string(),
    collectInformation: s.optional(s.lazy(() => collectInformation1Schema)),
    editMode: s.optional(s.boolean()),
    mobileOAuthCallbackUrl: s.optional(s.string()),
    platformName: s.optional(s.string()),
    returnUrl: s.optional(s.string()),
    shopperLocale: s.optional(s.string()),
    showPages: s.optional(s.lazy(() => showPages2Schema)),
  });
