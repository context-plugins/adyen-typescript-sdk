import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { merchantAccountSchema, type MerchantAccount } from "./merchant-account.js";

export type GetTerminalsUnderAccountResponse = {
  /** Your company account. */
  companyAccount: string;
  /**
   * Array that returns a list of all terminals that are in the inventory of the company account.
   */
  inventoryTerminals?: string[];
  /** Array that returns a list of all merchant accounts belonging to the company account. */
  merchantAccounts?: MerchantAccount[];
};

export const getTerminalsUnderAccountResponseSchema: Schema<GetTerminalsUnderAccountResponse> =
  s.object<GetTerminalsUnderAccountResponse>({
    companyAccount: s.string(),
    inventoryTerminals: s.optional(s.array(s.string())),
    merchantAccounts: s.optional(s.array(s.lazy(() => merchantAccountSchema))),
  });
