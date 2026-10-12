import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ShowPages = {
  /** Indicates whether the page with bank account details must be shown. Defaults to **true**. */
  bankDetailsSummaryPage?: boolean;
  /**
   * Indicates whether the bank check instant verification' details must be shown. Defaults to
   * **true**.
   */
  bankVerificationPage?: boolean;
  /**
   * Indicates whether the page with the company's or organization's details must be shown. Defaults
   * to **true**.
   */
  businessDetailsSummaryPage?: boolean;
  /** Indicates whether the checks overview page must be shown. Defaults to **false**. */
  checksOverviewPage?: boolean;
  /**
   * Indicates whether the page with the individual's details must be shown. Defaults to **true**.
   */
  individualDetailsSummaryPage?: boolean;
  /**
   * Indicates whether the page with the legal arrangements' details must be shown. Defaults to
   * **true**.
   */
  legalArrangementsDetailsSummaryPage?: boolean;
  /**
   * Indicates whether the page to manually add bank account' details must be shown. Defaults to
   * **true**.
   */
  manualBankAccountPage?: boolean;
  /**
   * Indicates whether the page with the shareholders' details must be shown. Defaults to **true**.
   */
  shareholderDetailsSummaryPage?: boolean;
  /** Indicates whether the welcome page must be shown. Defaults to **false**. */
  welcomePage?: boolean;
};

export const showPagesSchema: Schema<ShowPages> = s.object<ShowPages>({
  bankDetailsSummaryPage: s.optional(s.boolean()),
  bankVerificationPage: s.optional(s.boolean()),
  businessDetailsSummaryPage: s.optional(s.boolean()),
  checksOverviewPage: s.optional(s.boolean()),
  individualDetailsSummaryPage: s.optional(s.boolean()),
  legalArrangementsDetailsSummaryPage: s.optional(s.boolean()),
  manualBankAccountPage: s.optional(s.boolean()),
  shareholderDetailsSummaryPage: s.optional(s.boolean()),
  welcomePage: s.optional(s.boolean()),
});
