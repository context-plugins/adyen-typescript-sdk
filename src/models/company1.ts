import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Company1 = {
  homepage?: string;
  name?: string;
  registrationNumber?: string;
  registryLocation?: string;
  taxId?: string;
  type?: string;
};

export const company1Schema: Schema<Company1> = s.object<Company1>({
  homepage: s.optional(s.string()),
  name: s.optional(s.string()),
  registrationNumber: s.optional(s.string()),
  registryLocation: s.optional(s.string()),
  taxId: s.optional(s.string()),
  type: s.optional(s.string()),
});
