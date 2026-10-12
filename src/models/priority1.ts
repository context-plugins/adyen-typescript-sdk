import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The priority for the bank transfer. This sets the speed at which the transfer is sent and the
 * fees that you have to pay. Required for transfers with `category` **bank**.
 *
 * Possible values:
 *
 * * **regular**: For normal, low-value transactions.
 *
 * * **fast**: A faster way to transfer funds, but the fees are higher. Recommended for
 *   high-priority, low-value transactions.
 *
 * * **wire**: The fastest way to transfer funds, but this has the highest fees. Recommended for
 *   high-priority, high-value transactions.
 *
 * * **instant**: For instant funds transfers within the United States and in [SEPA
 *   locations](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).
 *
 * * **crossBorder**: For high-value transfers to a recipient in a different country.
 *
 * * **internal**: For transfers to an Adyen-issued business bank account (by bank account
 *   number/IBAN).
 */
export const Priority1 = {
  CrossBorder: "crossBorder",
  Fast: "fast",
  Instant: "instant",
  Internal: "internal",
  Regular: "regular",
  Wire: "wire",
} as const;
export type Priority1 = (typeof Priority1)[keyof typeof Priority1] | (string & {});

export const priority1Schema: EnumSchema<Priority1> = s.enumOf<Priority1>(Priority1);
