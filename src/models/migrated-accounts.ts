import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MigratedAccounts = {
  accountCode?: string;
  balanceAccountId?: string;
};

export const migratedAccountsSchema: Schema<MigratedAccounts> = s.object<MigratedAccounts>({
  accountCode: s.optional(s.string()),
  balanceAccountId: s.optional(s.string()),
});
