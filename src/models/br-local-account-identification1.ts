import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BrLocalAccountIdentification1 = {
  type: string;
  accountNumber: string;
  bankCode: string;
  branchNumber: string;
  ispb?: string;
};

export const brLocalAccountIdentification1Schema: Schema<BrLocalAccountIdentification1> =
  s.object<BrLocalAccountIdentification1>({
    type: s.string(),
    accountNumber: s.string(),
    bankCode: s.string(),
    branchNumber: s.string(),
    ispb: s.optional(s.string()),
  });
