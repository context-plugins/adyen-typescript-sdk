import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AccountAgeIndicator = {
  NotApplicable: "notApplicable",
  ThisTransaction: "thisTransaction",
  LessThan30Days: "lessThan30Days",
  From30To60Days: "from30To60Days",
  MoreThan60Days: "moreThan60Days",
} as const;
export type AccountAgeIndicator =
  | (typeof AccountAgeIndicator)[keyof typeof AccountAgeIndicator]
  | (string & {});

export const accountAgeIndicatorSchema: EnumSchema<AccountAgeIndicator> =
  s.enumOf<AccountAgeIndicator>(AccountAgeIndicator);
