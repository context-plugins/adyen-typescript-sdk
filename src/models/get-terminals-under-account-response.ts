import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { merchantAccountSchema, type MerchantAccount } from "./merchant-account.js";

export type GetTerminalsUnderAccountResponse = {
  companyAccount: string;
  inventoryTerminals?: string[];
  merchantAccounts?: MerchantAccount[];
};

export const getTerminalsUnderAccountResponseSchema: Schema<GetTerminalsUnderAccountResponse> =
  s.object<GetTerminalsUnderAccountResponse>({
    companyAccount: s.string(),
    inventoryTerminals: s.optional(s.array(s.string())),
    merchantAccounts: s.optional(s.array(s.lazy(() => merchantAccountSchema))),
  });
