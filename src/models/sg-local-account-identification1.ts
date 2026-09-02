import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SgLocalAccountIdentification1 = {
  type?: string;
  accountNumber: string;
  bic: string;
};

export const sgLocalAccountIdentification1Schema: Schema<SgLocalAccountIdentification1> =
  s.object<SgLocalAccountIdentification1>({
    type: s.optional(s.string()),
    accountNumber: s.string(),
    bic: s.string(),
  });
