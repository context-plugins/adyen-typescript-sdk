import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FindTerminalResponse = {
  /**
   * The company account that the terminal is associated with. If this is the only account level
   * shown in the response, the terminal is assigned to the inventory of the company account.
   */
  companyAccount: string;
  /**
   * The merchant account that the terminal is associated with. If the response doesn't contain a
   * `store` the terminal is assigned to this merchant account.
   */
  merchantAccount?: string;
  /**
   * Boolean that indicates if the terminal is assigned to the merchant inventory. This is returned
   * when the terminal is assigned to a merchant account.
   *
   * - If **true**, this indicates that the terminal is in the merchant inventory. This also means
   *   that the terminal cannot be boarded.
   *
   * - If **false**, this indicates that the terminal is assigned to the merchant account as an
   *   in-store terminal. This means that the terminal is ready to be boarded, or is already
   *   boarded.
   */
  merchantInventory?: boolean;
  /** The store code of the store that the terminal is assigned to. */
  store?: string;
  /** The unique terminal ID. */
  terminal: string;
};

export const findTerminalResponseSchema: Schema<FindTerminalResponse> = s.object<FindTerminalResponse>({
  companyAccount: s.string(),
  merchantAccount: s.optional(s.string()),
  merchantInventory: s.optional(s.boolean()),
  store: s.optional(s.string()),
  terminal: s.string(),
});
