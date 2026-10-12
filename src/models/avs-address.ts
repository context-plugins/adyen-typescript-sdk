import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AvsAddress = {
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

export const avsAddressSchema: Schema<AvsAddress> = s.object<AvsAddress>({
  streetAddress: s.string(),
  zip: s.optional(s.string()),
});
