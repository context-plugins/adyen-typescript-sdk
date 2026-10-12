import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the payment instrument. If a status is not specified when creating a payment
 * instrument, it is set to **active** by default. However, there can be exceptions for cards based
 * on the `card.formFactor` and the `issuingCountryCode`. For example, when issuing physical cards
 * in the US, the default status is **inactive**.
 *
 * Possible values:
 *
 *  * **active**: The payment instrument is active and can be used to make payments.
 *
 *  * **inactive**: The payment instrument is inactive and cannot be used to make payments.
 *
 *  * **suspended**: The payment instrument is suspended, either because it was stolen or lost.
 *
 *  * **closed**: The payment instrument is permanently closed. This action cannot be undone.
 */
export const Status10 = {
  Active: "active",
  Closed: "closed",
  Inactive: "inactive",
  Suspended: "suspended",
} as const;
export type Status10 = (typeof Status10)[keyof typeof Status10] | (string & {});

export const status10Schema: EnumSchema<Status10> = s.enumOf<Status10>(Status10);
