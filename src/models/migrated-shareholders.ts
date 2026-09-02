import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MigratedShareholders = {
  legalEntityCode?: string;
  shareholderCode?: string;
};

export const migratedShareholdersSchema: Schema<MigratedShareholders> = s.object<MigratedShareholders>({
  legalEntityCode: s.optional(s.string()),
  shareholderCode: s.optional(s.string()),
});
