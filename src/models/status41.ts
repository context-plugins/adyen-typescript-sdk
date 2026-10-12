import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the store. Possible values are:
 *
 * - **active**: This value is assigned automatically when a store is created.
 * - **inactive**: The maximum [transaction limits and number of Store-and-Forward
 *   transactions](https://docs.adyen.com/point-of-sale/determine-account-structure/configure-features#payment-features)
 *   for the store are set to 0. This blocks new transactions, but captures are still possible.
 * - **closed**: The terminals of the store are reassigned to the merchant inventory, so they can't
 *   process payments.
 *
 * You can change the status from **active** to **inactive**, and from **inactive** to **active** or
 * **closed**. Once **closed**, a store can't be reopened.
 */
export const Status41 = {
  Active: "active",
  Closed: "closed",
  Inactive: "inactive",
} as const;
export type Status41 = (typeof Status41)[keyof typeof Status41] | (string & {});

export const status41Schema: EnumSchema<Status41> = s.enumOf<Status41>(Status41);
