import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BrLocalAccountIdentification = {
  accountNumber: string;
  bankCode: string;
  branchNumber: string;
  ispb?: string;
  type: "brLocal";
};

export const brLocalAccountIdentificationSchema: Schema<BrLocalAccountIdentification> =
  s.object<BrLocalAccountIdentification>({
    accountNumber: s.string(),
    bankCode: s.string(),
    branchNumber: s.string(),
    ispb: s.optional(s.string()),
    type: s.literal("brLocal"),
  });
