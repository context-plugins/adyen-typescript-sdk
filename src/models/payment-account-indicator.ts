import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PaymentAccountIndicator = {
  NotApplicable: "notApplicable",
  ThisTransaction: "thisTransaction",
  LessThan30Days: "lessThan30Days",
  From30To60Days: "from30To60Days",
  MoreThan60Days: "moreThan60Days",
} as const;
export type PaymentAccountIndicator =
  | (typeof PaymentAccountIndicator)[keyof typeof PaymentAccountIndicator]
  | (string & {});

export const paymentAccountIndicatorSchema: EnumSchema<PaymentAccountIndicator> =
  s.enumOf<PaymentAccountIndicator>(PaymentAccountIndicator);
