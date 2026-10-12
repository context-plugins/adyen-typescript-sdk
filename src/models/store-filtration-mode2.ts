import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies how payment methods should be filtered based on the `store` parameter:
 *   - **exclusive**: Only payment methods belonging to the specified `store` are returned.
 *   - **inclusive**: Payment methods from the `store` and those not associated with any other store
 *     are returned.
 */
export const StoreFiltrationMode2 = {
  Exclusive: "exclusive",
  Inclusive: "inclusive",
  SkipFilter: "skipFilter",
} as const;
export type StoreFiltrationMode2 =
  | (typeof StoreFiltrationMode2)[keyof typeof StoreFiltrationMode2]
  | (string & {});

export const storeFiltrationMode2Schema: EnumSchema<StoreFiltrationMode2> =
  s.enumOf<StoreFiltrationMode2>(StoreFiltrationMode2);
