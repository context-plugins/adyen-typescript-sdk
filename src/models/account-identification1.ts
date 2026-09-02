import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AccountIdentification1 = {
  type?: string;
};

export const accountIdentification1Schema: Schema<AccountIdentification1> = s.object<AccountIdentification1>({
  type: s.optional(s.string()),
});
