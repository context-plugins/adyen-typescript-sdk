import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PickupInfo = {
  city?: string;
  countryCode?: string;
  date?: string;
  stateOrProvince?: string;
};

export const pickupInfoSchema: Schema<PickupInfo> = s.object<PickupInfo>({
  city: s.optional(s.string()),
  countryCode: s.optional(s.string()),
  date: s.optional(s.dateOnly()),
  stateOrProvince: s.optional(s.string()),
});
