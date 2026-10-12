import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicator when the shopper has changed their password. Allowed values:
 * * notApplicable
 * * thisTransaction
 * * lessThan30Days
 * * from30To60Days
 * * moreThan60Days
 */
export const PasswordChangeIndicator = {
  NotApplicable: "notApplicable",
  ThisTransaction: "thisTransaction",
  LessThan30Days: "lessThan30Days",
  From30To60Days: "from30To60Days",
  MoreThan60Days: "moreThan60Days",
} as const;
export type PasswordChangeIndicator =
  | (typeof PasswordChangeIndicator)[keyof typeof PasswordChangeIndicator]
  | (string & {});

export const passwordChangeIndicatorSchema: EnumSchema<PasswordChangeIndicator> =
  s.enumOf<PasswordChangeIndicator>(PasswordChangeIndicator);
