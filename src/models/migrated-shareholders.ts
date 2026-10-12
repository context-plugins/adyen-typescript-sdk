import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MigratedShareholders = {
  /** The unique identifier of the legal entity of that shareholder in the balance platform. */
  legalEntityCode?: string;
  /**
   * The unique identifier of the account of the migrated shareholder in the classic integration.
   */
  shareholderCode?: string;
};

export const migratedShareholdersSchema: Schema<MigratedShareholders> = s.object<MigratedShareholders>({
  legalEntityCode: s.optional(s.string()),
  shareholderCode: s.optional(s.string()),
});
