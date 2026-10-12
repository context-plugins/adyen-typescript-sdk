import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { migratedAccountsSchema, type MigratedAccounts } from "./migrated-accounts.js";
import { migratedShareholdersSchema, type MigratedShareholders } from "./migrated-shareholders.js";
import { migratedStoresSchema, type MigratedStores } from "./migrated-stores.js";

export type MigrationData = {
  /** The unique identifier of the account holder in the balance platform. */
  accountHolderId?: string;
  /** The unique identifier of the balance platfrom to which the account holder was migrated. */
  balancePlatform?: string;
  /** Set to **true** if the account holder has been migrated. */
  migrated?: boolean;
  /**
   * Contains the mapping of virtual account codes (classic integration) to the balance account
   * codes (balance platform) associated with the migrated account holder.
   */
  migratedAccounts?: MigratedAccounts[];
  /** Contains the mapping of shareholders associated with the migrated legal entities. */
  migratedShareholders?: MigratedShareholders[];
  /**
   * Contains the mapping of business lines and stores associated with the migrated account holder.
   */
  migratedStores?: MigratedStores[];
  /** The date when account holder was migrated. */
  migrationDate?: Date;
};

export const migrationDataSchema: Schema<MigrationData> = s.object<MigrationData>({
  accountHolderId: s.optional(s.string()),
  balancePlatform: s.optional(s.string()),
  migrated: s.optional(s.boolean()),
  migratedAccounts: s.optional(s.array(s.lazy(() => migratedAccountsSchema))),
  migratedShareholders: s.optional(s.array(s.lazy(() => migratedShareholdersSchema))),
  migratedStores: s.optional(s.array(s.lazy(() => migratedStoresSchema))),
  migrationDate: s.optional(s.dateTime()),
});
