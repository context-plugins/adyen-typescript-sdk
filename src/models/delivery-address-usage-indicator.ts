import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicator for the length of time since this delivery address was first used. Allowed values:
 * * thisTransaction
 * * lessThan30Days
 * * from30To60Days
 * * moreThan60Days
 */
export const DeliveryAddressUsageIndicator = {
  ThisTransaction: "thisTransaction",
  LessThan30Days: "lessThan30Days",
  From30To60Days: "from30To60Days",
  MoreThan60Days: "moreThan60Days",
} as const;
export type DeliveryAddressUsageIndicator =
  | (typeof DeliveryAddressUsageIndicator)[keyof typeof DeliveryAddressUsageIndicator]
  | (string & {});

export const deliveryAddressUsageIndicatorSchema: EnumSchema<DeliveryAddressUsageIndicator> =
  s.enumOf<DeliveryAddressUsageIndicator>(DeliveryAddressUsageIndicator);
