import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MigratedStores = {
  businessLineId?: string;
  storeCode?: string;
  storeId?: string;
  storeReference?: string;
};

export const migratedStoresSchema: Schema<MigratedStores> = s.object<MigratedStores>({
  businessLineId: s.optional(s.string()),
  storeCode: s.optional(s.string()),
  storeId: s.optional(s.string()),
  storeReference: s.optional(s.string()),
});
