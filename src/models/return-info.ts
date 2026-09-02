import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReturnInfo = {
  city?: string;
  countryCode?: string;
  date?: string;
  locationId?: string;
  stateOrProvince?: string;
};

export const returnInfoSchema: Schema<ReturnInfo> = s.object<ReturnInfo>({
  city: s.optional(s.string()),
  countryCode: s.optional(s.string()),
  date: s.optional(s.dateOnly()),
  locationId: s.optional(s.string()),
  stateOrProvince: s.optional(s.string()),
});
