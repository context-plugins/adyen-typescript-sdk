import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdatableAddress1 = {
  city?: string;
  line1?: string;
  line2?: string;
  line3?: string;
  postalCode?: string;
  stateOrProvince?: string;
};

export const updatableAddress1Schema: Schema<UpdatableAddress1> = s.object<UpdatableAddress1>({
  city: s.optional(s.string()),
  line1: s.optional(s.string()),
  line2: s.optional(s.string()),
  line3: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  stateOrProvince: s.optional(s.string()),
});
