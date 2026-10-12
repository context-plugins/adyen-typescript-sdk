import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The scope to which the transfer limit applies. Possible values:
 * * **perTransaction**: you set a maximum amount for each transfer made from the balance account or
 *   balance platform.
 * * **perDay**: you set a maximum total amount for all transfers made from the balance account or
 *   balance platform in a day.
 */
export const Scope = {
  PerDay: "perDay",
  PerTransaction: "perTransaction",
} as const;
export type Scope = (typeof Scope)[keyof typeof Scope] | (string & {});

export const scopeSchema: EnumSchema<Scope> = s.enumOf<Scope>(Scope);
