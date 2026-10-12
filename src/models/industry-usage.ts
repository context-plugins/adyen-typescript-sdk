import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * In case of [asynchronous authorisation
 * adjustment](https://docs.adyen.com/online-payments/adjust-authorisation#adjust-authorisation),
 * this field denotes why the additional payment is made.
 *
 * Possible values:
 *
 *  * **NoShow**: An incremental charge is carried out because of a no-show for a guaranteed
 *    reservation.
 *
 *  * **DelayedCharge**: An incremental charge is carried out to process an additional payment after
 *    the original services have been rendered and the respective payment has been processed.
 */
export const IndustryUsage = {
  NoShow: "NoShow",
  DelayedCharge: "DelayedCharge",
} as const;
export type IndustryUsage = (typeof IndustryUsage)[keyof typeof IndustryUsage] | (string & {});

export const industryUsageSchema: EnumSchema<IndustryUsage> = s.enumOf<IndustryUsage>(IndustryUsage);
