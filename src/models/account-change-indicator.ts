import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AccountChangeIndicator = {
  ThisTransaction: "thisTransaction",
  LessThan30Days: "lessThan30Days",
  From30To60Days: "from30To60Days",
  MoreThan60Days: "moreThan60Days",
} as const;
export type AccountChangeIndicator =
  | (typeof AccountChangeIndicator)[keyof typeof AccountChangeIndicator]
  | (string & {});

export const accountChangeIndicatorSchema: EnumSchema<AccountChangeIndicator> =
  s.enumOf<AccountChangeIndicator>(AccountChangeIndicator);
