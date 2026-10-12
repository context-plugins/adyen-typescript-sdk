import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address14Schema, type Address14 } from "./address14.js";

/** The store that the terminal is assigned to. */
export type Store11 = {
  /** The address of the store. */
  address?: Address14;
  /** The description of the store. */
  description?: string;
  /** The list of terminals assigned to the store. */
  inStoreTerminals?: string[];
  /** The code of the merchant account. */
  merchantAccountCode?: string;
  /**
   * The status of the store:
   *
   * - `PreActive`: the store has been created, but not yet activated.
   *
   * - `Active`: the store has been activated. This means you can process payments for this store.
   *
   * - `Inactive`: the store is currently not active.
   *
   * - `InactiveWithModifications`: the store is currently not active, but payment modifications
   *   such as refunds are possible.
   *
   * - `Closed`: the store has been closed.
   */
  status?: string;
  /** The code of the store. */
  store: string;
};

export const store11Schema: Schema<Store11> = s.object<Store11>({
  address: s.optional(s.lazy(() => address14Schema)),
  description: s.optional(s.string()),
  inStoreTerminals: s.optional(s.array(s.string())),
  merchantAccountCode: s.optional(s.string()),
  status: s.optional(s.string()),
  store: s.string(),
});
