import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The direction of sweep, whether pushing out or pulling in funds to the balance account. If not
 * provided, by default, this is set to **push**.
 *
 * Possible values:
 *
 *  * **push**: _push out funds_ to a destination balance account or transfer instrument.
 *
 *  * **pull**: _pull in funds_ from a source merchant account, transfer instrument, or balance
 *    account.
 */
export const Type72 = {
  Pull: "pull",
  Push: "push",
} as const;
export type Type72 = (typeof Type72)[keyof typeof Type72] | (string & {});

export const type72Schema: EnumSchema<Type72> = s.enumOf<Type72>(Type72);
