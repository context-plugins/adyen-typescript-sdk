import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { migratedAccountsSchema, type MigratedAccounts } from "./migrated-accounts.js";
import { migratedShareholdersSchema, type MigratedShareholders } from "./migrated-shareholders.js";
import { migratedStoresSchema, type MigratedStores } from "./migrated-stores.js";

export type MigrationData2 = {
  accountHolderId?: string;
  balancePlatform?: string;
  migrated?: boolean;
  migratedAccounts?: MigratedAccounts[];
  migratedShareholders?: MigratedShareholders[];
  migratedStores?: MigratedStores[];
  migrationDate?: Date;
};

export const migrationData2Schema: Schema<MigrationData2> = s.object<MigrationData2>({
  accountHolderId: s.optional(s.string()),
  balancePlatform: s.optional(s.string()),
  migrated: s.optional(s.boolean()),
  migratedAccounts: s.optional(s.array(s.lazy(() => migratedAccountsSchema))),
  migratedShareholders: s.optional(s.array(s.lazy(() => migratedShareholdersSchema))),
  migratedStores: s.optional(s.array(s.lazy(() => migratedStoresSchema))),
  migrationDate: s.optional(s.dateTime()),
});
