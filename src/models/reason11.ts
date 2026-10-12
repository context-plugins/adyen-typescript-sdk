import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The reason why the transfer failed Adyen's internal review.
 *
 * Possible values:
 *
 * - **refusedForRegulatoryReasons**: the transfer does not comply with Adyen's risk policy. For
 *   more information, [contact the Support Team](https://www.adyen.help/hc/en-us/requests/new).
 */
export const Reason11 = {
  RefusedForRegulatoryReasons: "refusedForRegulatoryReasons",
} as const;
export type Reason11 = (typeof Reason11)[keyof typeof Reason11] | (string & {});

export const reason11Schema: EnumSchema<Reason11> = s.enumOf<Reason11>(Reason11);
