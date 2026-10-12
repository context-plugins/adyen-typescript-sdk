import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies how payment methods should be filtered based on the 'store' parameter:
 *   - 'exclusive': Only payment methods belonging to the specified 'store' are returned.
 *   - 'inclusive': Payment methods from the 'store' and those not associated with any other store
 *     are returned.
 */
export const StoreFiltrationMode = {
  Exclusive: "exclusive",
  Inclusive: "inclusive",
  SkipFilter: "skipFilter",
} as const;
export type StoreFiltrationMode =
  | (typeof StoreFiltrationMode)[keyof typeof StoreFiltrationMode]
  | (string & {});

export const storeFiltrationModeSchema: EnumSchema<StoreFiltrationMode> =
  s.enumOf<StoreFiltrationMode>(StoreFiltrationMode);
