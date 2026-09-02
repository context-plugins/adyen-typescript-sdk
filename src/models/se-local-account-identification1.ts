import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SeLocalAccountIdentification1 = {
  type: string;
  accountNumber: string;
  clearingNumber: string;
};

export const seLocalAccountIdentification1Schema: Schema<SeLocalAccountIdentification1> =
  s.object<SeLocalAccountIdentification1>({
    type: s.string(),
    accountNumber: s.string(),
    clearingNumber: s.string(),
  });
