import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OfflineProcessing = {
  chipFloorLimit?: number;
};

export const offlineProcessingSchema: Schema<OfflineProcessing> = s.object<OfflineProcessing>({
  chipFloorLimit: s.optional(s.number()),
});
