import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { store1Schema, type Store1 } from "./store1.js";

export type MerchantAccount = {
  /**
   * List of terminals assigned to this merchant account as in-store terminals. This means that the
   * terminal is ready to be boarded, or is already boarded.
   */
  inStoreTerminals?: string[];
  /** List of terminals assigned to the inventory of this merchant account. */
  inventoryTerminals?: string[];
  /** The merchant account. */
  merchantAccount: string;
  /** Array of stores under this merchant account. */
  stores?: Store1[];
};

export const merchantAccountSchema: Schema<MerchantAccount> = s.object<MerchantAccount>({
  inStoreTerminals: s.optional(s.array(s.string())),
  inventoryTerminals: s.optional(s.array(s.string())),
  merchantAccount: s.string(),
  stores: s.optional(s.array(s.lazy(() => store1Schema))),
});
