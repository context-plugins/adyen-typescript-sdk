import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MigratedAccounts = {
  /**
   * The unique identifier of the account of the migrated account holder in the classic integration.
   */
  accountCode?: string;
  /**
   * The unique identifier of the account of the migrated account holder in the balance platform.
   */
  balanceAccountId?: string;
};

export const migratedAccountsSchema: Schema<MigratedAccounts> = s.object<MigratedAccounts>({
  accountCode: s.optional(s.string()),
  balanceAccountId: s.optional(s.string()),
});
