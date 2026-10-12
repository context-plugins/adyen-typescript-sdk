import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The estimated delivery time for the shopper to receive the goods. Allowed values:
 * * `electronicDelivery`
 * * `sameDayShipping`
 * * `overnightShipping`
 * * `twoOrMoreDaysShipping`
 */
export const DeliveryTimeframe = {
  ElectronicDelivery: "electronicDelivery",
  SameDayShipping: "sameDayShipping",
  OvernightShipping: "overnightShipping",
  TwoOrMoreDaysShipping: "twoOrMoreDaysShipping",
} as const;
export type DeliveryTimeframe = (typeof DeliveryTimeframe)[keyof typeof DeliveryTimeframe] | (string & {});

export const deliveryTimeframeSchema: EnumSchema<DeliveryTimeframe> =
  s.enumOf<DeliveryTimeframe>(DeliveryTimeframe);
