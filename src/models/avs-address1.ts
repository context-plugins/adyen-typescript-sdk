import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Contains the billing address of the card holder. The address details need to be AVS-compliant,
 * which means that you need to provide at least street address.
 */
export type AvsAddress1 = {
  /**
   * The street and house number of the address.
   *
   * Example: 1 Infinite Loop, Cupertino.
   */
  streetAddress: string;
  /**
   * The zip or post code of the address.
   *
   * Example: CA 95014
   */
  zip?: string;
};

export const avsAddress1Schema: Schema<AvsAddress1> = s.object<AvsAddress1>({
  streetAddress: s.string(),
  zip: s.optional(s.string()),
});
