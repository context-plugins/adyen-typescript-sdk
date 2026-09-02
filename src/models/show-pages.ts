import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ShowPages = {
  bankDetailsSummaryPage?: boolean;
  bankVerificationPage?: boolean;
  businessDetailsSummaryPage?: boolean;
  checksOverviewPage?: boolean;
  individualDetailsSummaryPage?: boolean;
  legalArrangementsDetailsSummaryPage?: boolean;
  manualBankAccountPage?: boolean;
  shareholderDetailsSummaryPage?: boolean;
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
