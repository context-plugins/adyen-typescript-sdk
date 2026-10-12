import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information regarding the company. */
export type Company1 = {
  /** The company website's home page. */
  homepage?: string;
  /** The company name. */
  name?: string;
  /** Registration number of the company. */
  registrationNumber?: string;
  /** Registry location of the company. */
  registryLocation?: string;
  /** Tax ID of the company. */
  taxId?: string;
  /** The company type. */
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
