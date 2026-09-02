import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OfflineProcessing1 = {
  chipFloorLimit?: number;
};

export const offlineProcessing1Schema: Schema<OfflineProcessing1> = s.object<OfflineProcessing1>({
  chipFloorLimit: s.optional(s.number()),
});
