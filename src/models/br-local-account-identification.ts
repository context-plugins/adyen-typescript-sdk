import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BrLocalAccountIdentification = {
  /** The bank account number, without separators or whitespace. */
  accountNumber: string;
  /** The 3-digit bank code, with leading zeros. */
  bankCode: string;
  /** The bank account branch number, without separators or whitespace. */
  branchNumber: string;
  /** The 8-digit ISPB, with leading zeros. */
  ispb?: string;
  /** **brLocal** @default "brLocal" */
  type?: "brLocal";
};

export const brLocalAccountIdentificationSchema: Schema<BrLocalAccountIdentification> =
  s.object<BrLocalAccountIdentification>({
    accountNumber: s.string(),
    bankCode: s.string(),
    branchNumber: s.string(),
    ispb: s.optional(s.string()),
    type: s.defaulted(s.literal("brLocal"), "brLocal"),
  });
