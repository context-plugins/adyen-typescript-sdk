import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BulkAddress1 = {
  city?: string;
  company?: string;
  country: string;
  email?: string;
  houseNumberOrName?: string;
  line1?: string;
  line2?: string;
  line3?: string;
  mobile?: string;
  name?: string;
  postalCode?: string;
  stateOrProvince?: string;
  street?: string;
};

export const bulkAddress1Schema: Schema<BulkAddress1> = s.object<BulkAddress1>({
  city: s.optional(s.string()),
  company: s.optional(s.string()),
  country: s.string(),
  email: s.optional(s.string()),
  houseNumberOrName: s.optional(s.string()),
  line1: s.optional(s.string()),
  line2: s.optional(s.string()),
  line3: s.optional(s.string()),
  mobile: s.optional(s.string()),
  name: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  stateOrProvince: s.optional(s.string()),
  street: s.optional(s.string()),
});
